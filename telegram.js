(() => {
  // [uas-i18n-v1] Telegram module follows the shared language preference.
  let tgLanguage = 'ru';
  const tgT = (key) => ({
    ru: { saved: 'Сохранено', download: 'Скачать в Universal Art Saver' },
    en: { saved: 'Saved', download: 'Download with Universal Art Saver' }
  }[tgLanguage]?.[key] || key);
  const tgApplyLanguage = () => {
    document.querySelectorAll('[data-uas-telegram-button="1"]').forEach((button) => {
      try {
        button.setAttribute('title', tgT('download'));
        button.setAttribute('aria-label', tgT('download'));
      } catch (_) {}
    });
  };
  try {
    chrome.storage.local.get('uas_language', (data) => {
      tgLanguage = data?.uas_language === 'en' ? 'en' : 'ru';
      tgApplyLanguage();
    });
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== 'local' || !changes?.uas_language) return;
      tgLanguage = changes.uas_language.newValue === 'en' ? 'en' : 'ru';
      tgApplyLanguage();
    });
  } catch (_) {}
  'use strict';

  const TAG = '[Universal Art Saver / Telegram]';
  const CHECK_INTERVAL = 700;
  const BUTTON_CLASS = 'uas-telegram-download';
  const INLINE_CLASS = 'uas-telegram-inline-download';
  const activeDownloads = new Map();
  const telegramItemCache = new Map();
  let styleInjected = false;
  let batchRunning = false;
  let lastCommonSignature = '';
  let stealthDepth = 0;

  const log = (...args) => console.debug(TAG, ...args);
  const warn = (...args) => console.warn(TAG, ...args);

  function isTelegramWeb() {
    return /(^|\.)telegram\.org$/i.test(location.hostname) ||
      /(^|\.)webtelegram\.org$/i.test(location.hostname);
  }

  if (!isTelegramWeb()) return;

  const isHttpUrl = (value) => /^https?:\/\//i.test(String(value || ''));
  const isBlobUrl = (value) => /^blob:https?:\/\//i.test(String(value || ''));
  const isSyntheticAlbumUrl = (value) => /^tg-album:\/\/message\/\d+$/i.test(String(value || ''));
  const isTelegramMediaUrl = (value) => isHttpUrl(value) || isBlobUrl(value) || isSyntheticAlbumUrl(value);

  // [telegram-quality-v7]
  function safeFileName(value, fallback = 'telegram_media') {
    let name = String(value || '')
      .replace(/[\u0000-\u001F\u007F]/g, ' ')
      .replace(/\s+/gu, ' ')
      .trim();

    name = name
      .replace(/[\\/:*?"<>|]/g, '_')
      .replace(/[. ]+$/g, '')
      .trim();

    if (/^(?:CON|PRN|AUX|NUL|COM[0-9]|LPT[0-9])(?:\..*)?$/i.test(name)) {
      name = `_${name}`;
    }

    return name.slice(0, 150) || fallback;
  }

  function extensionFromMime(mime, fallback = '') {
    const clean = String(mime || '').split(';')[0].toLowerCase();
    const map = {
      'image/jpeg': '.jpg', 'image/jpg': '.jpg', 'image/png': '.png',
      'image/webp': '.webp', 'image/gif': '.gif', 'image/avif': '.avif',
      'image/bmp': '.bmp', 'image/tiff': '.tiff',
      'video/mp4': '.mp4', 'video/webm': '.webm', 'video/quicktime': '.mov',
      'audio/ogg': '.ogg', 'audio/mpeg': '.mp3', 'audio/mp4': '.m4a',
      'audio/webm': '.webm', 'audio/aac': '.aac',
    };
    return map[clean] || fallback;
  }

  function parseTelegramMetadata(url) {
    try {
      const last = decodeURIComponent(String(url).split('/').pop() || '');
      const data = JSON.parse(last);
      return data && typeof data === 'object' ? data : null;
    } catch (_) {
      return null;
    }
  }

  function hashCode(value) {
    let h = 2166136261;
    const text = String(value || '');
    for (let i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(16);
  }

  function getTelegramMessageId(element) {
    if (!element) return '';

    const albumNode = element.closest?.('.album-item, .media-grid-item') || element;
    const albumMedia = albumNode?.closest?.('.album-item, .media-grid-item')?.querySelector?.('[id^="album-media-message-"]')
      || (albumNode?.id?.startsWith?.('album-media-message-') ? albumNode : null);
    const albumId = String(albumMedia?.id || '').match(/^album-media-message-(\d+)$/i)?.[1];
    if (albumId) return albumId;

    const message = element.closest?.(
      '[data-message-id], [data-msg-id], [data-mid], .bubble, .message-list-item, .Message, [id^="msg-"], [id^="message-"]'
    );
    if (message) {
      const dataId = message.getAttribute('data-message-id') ||
                     message.getAttribute('data-msg-id') ||
                     message.getAttribute('data-mid');
      if (dataId && /^\d+$/.test(dataId)) return dataId;

      const rawId = message.id || '';
      const m = String(rawId).match(/^(?:msg|message)-?(\d+)$/i);
      if (m) return m[1];
    }

    return '';
  }

  function getAlbumMessageId(element) {
    const node = element?.closest?.('.album-item') || element;
    const mediaInner = node?.id?.startsWith?.('album-media-message-')
      ? node
      : node?.querySelector?.('[id^="album-media-message-"]');
    const raw = mediaInner?.id || '';
    const m = /^album-media-message-(\d+)$/.exec(raw);
    return m ? m[1] : '';
  }

  function isAlbumItem(element) {
    return !!element?.closest?.('.album-item') && !!getAlbumMessageId(element);
  }

  function getAlbumSyntheticUrl(messageId) {
    return messageId ? `tg-album://message/${messageId}` : '';
  }

  function makeKey(url, kind = '', element = null) {
    const messageId = getTelegramMessageId(element);
    if (messageId) {
      return `tg_msg_${messageId}`;
    }

    const meta = parseTelegramMetadata(url);
    const locationId = meta?.location?.id || meta?.location?.volumeId || meta?.id || '';
    const seed = `telegram:${kind}:${locationId || url}`;
    return `tg_msg_${hashCode(seed)}`;
  }

  function getElementUrl(element) {
    if (!element) return '';

    const explicit = element.getAttribute?.('data-uas-telegram-url');
    if (isTelegramMediaUrl(explicit)) return explicit;

    const tag = String(element.tagName || '').toLowerCase();
    const candidates = [];

    if (tag === 'video' || tag === 'audio') {
      candidates.push(element.currentSrc, element.src, element.querySelector?.('source')?.src);
    } else if (tag === 'audio-element') {
      candidates.push(element.audio?.currentSrc, element.audio?.src, element.getAttribute?.('src'));
    } else if (tag === 'img') {
      candidates.push(element.currentSrc, element.src, element.getAttribute?.('data-src'));
    }

    candidates.push(
      element.getAttribute?.('data-src'),
      element.getAttribute?.('data-url'),
      element.querySelector?.('video')?.currentSrc,
      element.querySelector?.('video')?.src,
      element.querySelector?.('audio')?.currentSrc,
      element.querySelector?.('audio')?.src,
      element.querySelector?.('img.full-media')?.currentSrc,
      element.querySelector?.('img.full-media')?.src,
      element.querySelector?.('img')?.currentSrc,
      element.querySelector?.('img')?.src,
    );

    for (const candidate of candidates) {
      if (isTelegramMediaUrl(candidate)) return candidate;
    }

    const messageId = getTelegramMessageId(element);
    if (messageId && isAlbumItem(element)) return getAlbumSyntheticUrl(messageId);
    return '';
  }

  function mediaKind(element, url = '') {
    const tag = String(element?.tagName || '').toLowerCase();
    if (tag === 'audio' || tag === 'audio-element') return 'audio';
    if (tag === 'video' || /\.(?:mp4|webm|mov)(?:[?#]|$)/i.test(url)) return 'video';
    if (isAlbumItem(element)) {
      const album = element.closest('.album-item');
      if (album?.querySelector('.icon-play, .message-media-duration')) return 'video';
    }
    const mime = String(parseTelegramMetadata(url)?.mimeType || '').toLowerCase();
    if (mime.startsWith('audio/')) return 'audio';
    if (mime.startsWith('video/')) return 'video';
    return 'image';
  }

  function isLikelyMediaElement(element) {
    if (!element) return false;
    const tag = String(element.tagName || '').toLowerCase();
    if (tag === 'video' || tag === 'audio' || tag === 'audio-element') return true;

    if (tag === 'img') {
      const cls = String(element.className || '');
      const parentCls = String(element.parentElement?.className || '');
      if (/avatar|emoji|sticker|reaction|custom-emoji/i.test(cls + ' ' + parentCls)) return false;
      const r = element.getBoundingClientRect?.();
      if (r && r.width > 0 && r.height > 0 && r.width < 48 && r.height < 48) return false;
      return /full-media|media-photo/i.test(cls) || !!element.closest?.('.media-inner, .media-viewer-whole, #MediaViewer, #StoryViewer, #stories-viewer');
    }

    if (element.matches?.('.media-inner') && isAlbumItem(element)) return true;
    return false;
  }

  function findHost(element) {
    const found = element?.closest?.(
      '.album-item,' +
      '.media-grid-item,' +
      '.media-inner,' +
      '.bubble-media,' +
      '.bubble-content-media,' +
      '.attachment-media,' +
      '#MediaViewer .MediaViewerSlide--active,' +
      '#StoryViewer,' +
      '#stories-viewer,' +
      '.media-viewer-whole'
    ) || element?.parentElement || null;
    if (found && (found.tagName === 'IMG' || found.tagName === 'VIDEO' || found.tagName === 'AUDIO')) {
      return found.parentElement;
    }
    return found;
  }

  function guessFileName(element, url, kind) {
    const metadata = parseTelegramMetadata(url);
    const mime = metadata?.mimeType || '';
    let name = metadata?.fileName || '';

    const candidates = [
      name,
      element?.getAttribute?.('download'),
      element?.getAttribute?.('data-file-name'),
      element?.getAttribute?.('title'),
      element?.getAttribute?.('aria-label'),
    ];

    for (const candidate of candidates) {
      const value = safeFileName(candidate, '');
      if (!value) continue;
      if (!/[.]([a-z0-9]{2,5})$/i.test(value)) {
        const ext = extensionFromMime(mime, kind === 'audio' ? '.ogg' : kind === 'video' ? '.mp4' : '.jpg');
        return value + ext;
      }
      return value;
    }

    const messageId = getTelegramMessageId(element);
    const ext = extensionFromMime(mime, kind === 'audio' ? '.ogg' : kind === 'video' ? '.mp4' : '.jpg');
    if (messageId) return `telegram_${kind}_${messageId}${ext}`;
    return `telegram_${kind}_${hashCode(url)}${ext}`;
  }

  function injectStyle() {
    if (styleInjected) return;
    styleInjected = true;
    const style = document.createElement('style');
    style.id = 'uas-telegram-style';
    style.textContent = `
      .${BUTTON_CLASS}[disabled] { opacity: .45 !important; pointer-events: none !important; }
      .${INLINE_CLASS} { margin-left: 6px !important; vertical-align: middle !important; }
      .${BUTTON_CLASS} { display: inline-flex !important; align-items: center !important; justify-content: center !important; }
      html[data-uas-telegram-stealth="1"] #MediaViewer,
      html[data-uas-telegram-stealth="1"] .media-viewer-whole,
      html[data-uas-telegram-stealth="1"] #StoryViewer,
      html[data-uas-telegram-stealth="1"] #stories-viewer {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `;
    (document.head || document.documentElement).appendChild(style);
  }

  function getCommon() {
    return window.__UAS_TELEGRAM_COMMON__ || null;
  }

  function waitFor(predicate, timeout = 9000, interval = 80) {
    return new Promise(resolve => {
      const start = Date.now();
      const tick = () => {
        let value = null;
        try { value = predicate(); } catch (_) {}
        if (value) return resolve(value);
        if (Date.now() - start >= timeout) return resolve(null);
        setTimeout(tick, interval);
      };
      tick();
    });
  }

  function setStealth(active) {
    stealthDepth += active ? 1 : -1;
    if (stealthDepth < 0) stealthDepth = 0;
    if (stealthDepth > 0) document.documentElement.setAttribute('data-uas-telegram-stealth', '1');
    else document.documentElement.removeAttribute('data-uas-telegram-stealth');
  }

  function viewerExists() {
    return !!document.querySelector('#MediaViewer, .media-viewer-whole, #StoryViewer, #stories-viewer');
  }

  async function closeTelegramViewer() {
    if (!viewerExists()) return;
    const closeButton = document.querySelector(
      '#MediaViewer button[aria-label="Закрыть"], #MediaViewer button[aria-label="Close"], ' +
      '#MediaViewer button[title="Закрыть"], #MediaViewer button[title="Close"], ' +
      '.media-viewer-whole button[aria-label="Закрыть"], .media-viewer-whole button[aria-label="Close"]'
    );
    if (closeButton) {
      try { closeButton.click(); } catch (_) {}
    } else {
      const ev = new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true, cancelable: true });
      try { window.dispatchEvent(ev); } catch (_) {}
      try { document.dispatchEvent(ev); } catch (_) {}
    }
    await waitFor(() => !viewerExists(), 2500, 80);
  }

  function getViewerMediaElement(preferredKind = '') {
    const roots = [
      document.querySelector('#MediaViewer .MediaViewerSlide--active .MediaViewerContent'),
      document.querySelector('#MediaViewer .MediaViewerSlide--active'),
      document.querySelector('.media-viewer-whole .media-viewer-movers .media-viewer-aspecter'),
      document.querySelector('.media-viewer-whole'),
      document.querySelector('#StoryViewer'),
      document.querySelector('#stories-viewer'),
    ].filter(Boolean);

    const candidates = [];
    for (const root of roots) {
      root.querySelectorAll?.('video, img, audio').forEach(el => {
        const url = getElementUrl(el);
        if (!url || !isTelegramMediaUrl(url) || isSyntheticAlbumUrl(url)) return;
        const cls = String(el.className || '') + ' ' + String(el.closest('.ReactionStaticEmoji')?.className || '');
        if (el.tagName === 'IMG' && /avatar|emoji|sticker|reaction|custom-emoji/i.test(cls)) return;
        candidates.push(el);
      });
      if (candidates.length) break;
    }

    if (!candidates.length) return null;
    const type = preferredKind === 'video' ? 'VIDEO' : preferredKind === 'audio' ? 'AUDIO' : 'IMG';
    return candidates.find(el => el.tagName === type) || candidates.sort((a, b) => {
      const ar = a.getBoundingClientRect?.() || { width: 0, height: 0 };
      const br = b.getBoundingClientRect?.() || { width: 0, height: 0 };
      return (br.width * br.height) - (ar.width * ar.height);
    })[0] || null;
  }

  function uasTelegramFinalName(value, fallback = 'telegram_media') {
    let name = String(value || '')
      .normalize('NFKC')
      .replace(/[\u0000-\u001F\u007F]/g, '_')
      .replace(/[\\/:*?"<>|]/g, '_')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/[. ]+$/g, '');

    if (!name) name = fallback;
    if (name.length > 120) {
      const ext = name.match(/\.[a-z0-9]{1,8}$/i)?.[0] || '';
      name = name.slice(0, 110) + ext;
    }
    return name;
  }

async function requestBackgroundTelegramDownload(url, fileName, folderName, key, kind = 'image') {
    if (!url || !chrome?.runtime?.sendMessage) return { ok: false, error: 'missing url' };

    try {
      return await new Promise((resolve) => {
        chrome.runtime.sendMessage({
          action: 'telegram_download_media',
          url,
          fileName: uasTelegramFinalName(fileName, `telegram_${kind}`),
          folderName,
          key,
          kind,
        }, (result) => {
          if (chrome.runtime.lastError) {
            resolve({ ok: false, error: chrome.runtime.lastError.message });
            return;
          }
          resolve(result || { ok: false, error: 'empty response' });
        });
      });
    } catch (error) {
      return { ok: false, error: String(error?.message || error) };
    }
  }

  async function resolveLazyAlbumMedia(item) {
    const messageId = String(item?.telegramMessageId || getTelegramMessageId(item?.element) || '');
    if (!messageId) return null;

    let albumElement = document.getElementById(`album-media-message-${messageId}`);
    if (!albumElement) {
      try { albumElement = document.querySelector(`[id="album-media-message-${CSS.escape(messageId)}"]`); } catch (_) {}
    }
    const albumItem = albumElement?.closest?.('.album-item');
    if (!albumItem) {
      warn('Telegram album item is no longer in DOM', messageId);
      return null;
    }

    // The item is already a real full-media element: never touch the viewer.
    const existing = albumItem.querySelector('img.full-media, video.full-media, video, img[data-uas-telegram-url^="blob:"], img[src^="blob:"]');
    const existingUrl = getElementUrl(existing);
    if (existing && isBlobUrl(existingUrl)) {
      return {
        item: {
          ...item,
          url: existingUrl,
          previewUrl: existingUrl,
          kind: mediaKind(existing, existingUrl),
          isVideo: mediaKind(existing, existingUrl) === 'video',
          isAudio: mediaKind(existing, existingUrl) === 'audio',
          fileName: guessFileName(existing, existingUrl, mediaKind(existing, existingUrl)),
          lazyAlbum: false,
        },
        cleanup: async () => {},
      };
    }

    setStealth(true);
    try {
      await closeTelegramViewer();
      try { albumItem.scrollIntoView?.({ block: 'center', inline: 'center', behavior: 'instant' }); } catch (_) {}

      try { albumElement.click(); } catch (_) { try { albumItem.click(); } catch (_) {} }

      const preferredKind = item.kind || (item.isVideo ? 'video' : item.isAudio ? 'audio' : 'image');
      const viewerMedia = await waitFor(() => {
        const el = getViewerMediaElement(preferredKind);
        if (!el) return null;
        const url = getElementUrl(el);
        if (!isBlobUrl(url) && !isHttpUrl(url)) return null;
        if (el.tagName === 'IMG') {
          if (el.naturalWidth && el.naturalHeight && (el.naturalWidth < 96 || el.naturalHeight < 96)) return null;
          if (!el.classList.contains('full-media') && !el.src.startsWith('blob:')) return null;
        }
        if (el.tagName === 'VIDEO' && !el.currentSrc) return null;
        return el;
      }, 12000, 100);

      if (!viewerMedia) {
        setStealth(false);
        return null;
      }
      const url = getElementUrl(viewerMedia);
      if (!isTelegramMediaUrl(url) || isSyntheticAlbumUrl(url)) {
        setStealth(false);
        return null;
      }

      const kind = mediaKind(viewerMedia, url);
      const downloadAnchor = document.querySelector('#MediaViewer a[download][href]');
      const anchorName = downloadAnchor?.getAttribute?.('download') || '';

      return {
        item: {
          ...item,
          url,
          previewUrl: url,
          kind,
          isVideo: kind === 'video',
          isAudio: kind === 'audio',
          fileName: anchorName || guessFileName(albumElement || viewerMedia, url, kind),
          telegramMessageId: messageId,
          lazyAlbum: false,
        },
        cleanup: async () => {
          try { await closeTelegramViewer(); }
          finally { setStealth(false); }
        },
      };
    } catch (error) {
      setStealth(false);
      warn('Unable to resolve lazy Telegram album media', messageId, error);
      return null;
    }
  }

  async function downloadOne(item, options = {}) {
    if (!item?.key) return false;
    if (activeDownloads.has(item.key)) return false;
    activeDownloads.set(item.key, true);

    let workingItem = item;
    let cleanup = null;

    try {
      if (!workingItem.url || isSyntheticAlbumUrl(workingItem.url) || workingItem.lazyAlbum) {
        const resolved = await resolveLazyAlbumMedia(workingItem);
        if (!resolved?.item?.url) return false;
        workingItem = resolved.item;
        cleanup = resolved.cleanup;
      }

      const common = getCommon();
      const folderName =
        options.folderName ||
        common?.getFolderName?.() ||
        'Telegram';

      const kind =
        workingItem.kind ||
        mediaKind(workingItem.element, workingItem.url);

      const fileName = safeFileName(
        workingItem.fileName ||
        guessFileName(workingItem.element, workingItem.url, kind) ||
        `telegram_${kind}_${workingItem.telegramMessageId || workingItem.key}`,
        `telegram_${kind}`
      );

      const result = await requestBackgroundTelegramDownload(
        workingItem.url,
        fileName,
        folderName,
        workingItem.key,
        kind
      );

      if (!result?.ok && /^blob:https?:\/\//i.test(workingItem.url)) {
        try {
          const a = document.createElement('a');
          a.href = workingItem.url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
          common?.onTelegramMediaProgress?.(
            workingItem.key,
            1,
            1,
            fileName,
            tgT('saved')
          );
          return true;
        } catch (_) {}
      }

      if (result?.ok) {
        common?.onTelegramMediaProgress?.(
          workingItem.key,
          1,
          1,
          result.filename || fileName,
          tgT('saved')
        );
        return true;
      }

      warn('Telegram download failed', result?.error || 'unknown error');
      return false;
    } catch (error) {
      warn('Telegram download exception', error);
      return false;
    } finally {
      if (cleanup) {
        try { await cleanup(); } catch (_) {}
      }
      activeDownloads.delete(item.key);
    }
  }

  function collectFromRoots() {
    const elements = [];
    const push = (selector, root = document) => {
      root.querySelectorAll?.(selector).forEach(el => elements.push(el));
    };

    push('#MediaViewer .MediaViewerSlide--active .MediaViewerContent video');
    push('#MediaViewer .MediaViewerSlide--active .MediaViewerContent img');
    push('#StoryViewer video, #StoryViewer img');
    push('.media-viewer-whole .media-viewer-movers .media-viewer-aspecter video');
    push('.media-viewer-whole .media-viewer-movers .media-viewer-aspecter img');
    push('#stories-viewer video, #stories-viewer img');

    push('.bubble audio-element, .bubble audio, .message audio-element, .message audio, .Message audio');

    // WebA / WebZ
    push('.message-list-item .media-inner img, .message-list-item .media-inner video');
    push('.Message .media-inner img, .Message .media-inner video');
    push('.media-inner img, .media-inner video');
    push('.Album .album-item img, .Album .album-item video');
    push('.album-item img, .album-item video');

    // WebK
    push('.bubble .bubble-media img, .bubble .bubble-media video');
    push('.bubble .media-photo, .bubble .media-video');
    push('.bubble .media-grid img, .bubble .media-grid video');
    push('.bubble-content-media img, .bubble-content-media video');
    push('.attachment-media img, .attachment-media video');
    push('.media-container img, .media-container video');

    return elements;
  }

  function collectMedia() {
    const resultMap = new Map();
    for (const element of collectFromRoots()) {
      if (!isLikelyMediaElement(element)) continue;

      const messageId = getTelegramMessageId(element);
      const url = getElementUrl(element);
      const synthetic = isAlbumItem(element) && !url;
      const normalizedUrl = synthetic && messageId ? getAlbumSyntheticUrl(messageId) : url;
      if (!isTelegramMediaUrl(normalizedUrl)) continue;

      const kind = mediaKind(element, normalizedUrl);
      const key = makeKey(normalizedUrl, kind, element);
      if (!key) continue;

      const host = findHost(element);
      if (host) host.dataset.uasTelegramMediaHost = '1';
      element.dataset.uasTelegramUrl = normalizedUrl;
      element.dataset.uasTelegramMediaKind = kind;

      const canonicalItem = {
        key,
        url: normalizedUrl,
        previewUrl: isSyntheticAlbumUrl(normalizedUrl) ? '' : normalizedUrl,
        element,
        host,
        kind,
        isVideo: kind === 'video',
        isAudio: kind === 'audio',
        fileName: guessFileName(element, normalizedUrl, kind),
        telegramMessageId: messageId || '',
        lazyAlbum: isSyntheticAlbumUrl(normalizedUrl),
      };

      const old = resultMap.get(key);
      if (!old || (old.lazyAlbum && !canonicalItem.lazyAlbum)) {
        resultMap.set(key, canonicalItem);
      }
      telegramItemCache.set(key, resultMap.get(key) || canonicalItem);
    }
    return Array.from(resultMap.values());
  }

  async function downloadSingle(item, options = {}) {
    const ok = await downloadOne(item, { folderName: options.folderName || getCommon()?.getFolderName?.() || 'Telegram' });
    const common = getCommon();
    const meta = {
      key: item?.key,
      url: item?.url || '',
      fileName: item?.fileName || guessFileName(item?.element, item?.url, item?.kind || 'image'),
      kind: item?.kind || 'image',
      date: new Date().toISOString(),
    };
    if (ok) await common?.onTelegramItemSuccess?.(meta, options);
    else common?.onTelegramItemError?.(meta);
    return ok;
  }

  async function downloadBatch(items, options = {}) {
    if (batchRunning || !Array.isArray(items) || !items.length) return false;
    batchRunning = true;

    // Merge duplicate keys and prefer a real blob/http URL over a synthetic album URL.
    const uniqueMap = new Map();
    for (const raw of items) {
      if (!raw?.key) continue;
      const key = String(raw.key);
      const current = uniqueMap.get(key);
      if (!current) uniqueMap.set(key, raw);
      else if ((current.lazyAlbum || isSyntheticAlbumUrl(current.url)) && !(raw.lazyAlbum || isSyntheticAlbumUrl(raw.url))) {
        uniqueMap.set(key, raw);
      }
    }
    const queue = Array.from(uniqueMap.values());
    if (!queue.length) {
      batchRunning = false;
      return false;
    }

    const common = getCommon();
    const concurrency = 1;
    let cursor = 0;
    let completed = 0;
    common?.onTelegramBatchStart?.(queue.length);

    const worker = async () => {
      while (true) {
        const index = cursor++;
        if (index >= queue.length) return;
        const item = telegramItemCache.get(queue[index]?.key) || queue[index];
        if (!item || activeDownloads.has(item.key)) continue;

        const ok = await downloadOne(item, {
          folderName: options.folderName || common?.getFolderName?.() || 'Telegram'
        });
        const meta = {
          key: item.key,
          url: item.url,
          fileName: item.fileName || guessFileName(item.element, item.url, item.kind),
          kind: item.kind || 'image',
          date: new Date().toISOString(),
        };
        if (ok) await common?.onTelegramItemSuccess?.(meta, options);
        else common?.onTelegramItemError?.(meta);
        completed++;
        common?.onTelegramBatchProgress?.(completed, queue.length);
      }
    };

    try {
      await Promise.all(Array.from({ length: concurrency }, worker));
      return true;
    } finally {
      common?.onTelegramBatchComplete?.();
      batchRunning = false;
    }
  }

  function makeButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add(BUTTON_CLASS, 'btn-icon');
    button.setAttribute('title', tgT('download'));
    button.setAttribute('aria-label', tgT('download'));
    button.dataset.uasTelegramButton = '1';
    button.innerHTML = `
      <span aria-hidden="true" style="display:inline-flex;align-items:center;justify-content:center;line-height:1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v11"></path><path d="m7 9 5 5 5-5"></path><path d="M5 20h14"></path>
        </svg>
      </span>`;
    return button;
  }

  function bindButton(button, element) {
    if (!button || !element || button.dataset.uasTelegramBound === '1') return;
    button.dataset.uasTelegramBound = '1';
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const url = getElementUrl(element) || (isAlbumItem(element) ? getAlbumSyntheticUrl(getTelegramMessageId(element)) : '');
      if (!url) return;
      const kind = mediaKind(element, url);
      const key = makeKey(url, kind, element);
      const item = {
        key,
        url,
        previewUrl: isSyntheticAlbumUrl(url) ? '' : url,
        element,
        host: findHost(element),
        kind,
        isVideo: kind === 'video',
        isAudio: kind === 'audio',
        fileName: guessFileName(element, url, kind),
        telegramMessageId: getTelegramMessageId(element),
        lazyAlbum: isSyntheticAlbumUrl(url),
      };
      telegramItemCache.set(key, item);
      downloadSingle(item);
    }, true);
  }

  function addButton(container, element, before = null) {
    if (!container || !element) return;
    if (container.querySelector('.' + BUTTON_CLASS)) return;
    const button = makeButton();
    bindButton(button, element);
    if (before && before.parentElement === container) container.insertBefore(button, before);
    else container.prepend(button);
  }

  function scanDirectViewers() {
    const webzSlide = document.querySelector('#MediaViewer .MediaViewerSlide--active, #MediaViewer [class*="MediaViewerSlide"]');
    const webzActions = document.querySelector('#MediaViewer .MediaViewerActions, #MediaViewer [class*="MediaViewerActions"]');
    if (webzSlide && webzActions) {
      const element = webzSlide.querySelector('.MediaViewerContent video, .MediaViewerContent img, video.full-media, img.full-media');
      if (element && getElementUrl(element)) {
        const official = webzActions.querySelector('button[title="Download"], a[download]');
        if (!official) addButton(webzActions, element);
      }
    }

    const webzStory = document.getElementById('StoryViewer');
    const webzStoryHeader = webzStory?.querySelector('.GrsJNw3y, .DropdownMenu')?.parentElement;
    const webzStoryEl = webzStory?.querySelector('video, img.PVZ8TOWS, img');
    if (webzStoryHeader && webzStoryEl && getElementUrl(webzStoryEl)) addButton(webzStoryHeader, webzStoryEl, webzStoryHeader.querySelector('button'));

    const webkMedia = document.querySelector('.media-viewer-whole');
    const webkButtons = webkMedia?.querySelector('.media-viewer-topbar .media-viewer-buttons');
    const webkEl = webkMedia?.querySelector('.media-viewer-movers .media-viewer-aspecter video, .media-viewer-movers .media-viewer-aspecter img');
    if (webkButtons && webkEl && getElementUrl(webkEl)) addButton(webkButtons, webkEl);
  }

  function scan() {
    try {
      const items = collectMedia();
      const signature = items.map(item => item.key).sort().join('|');
      if (signature !== lastCommonSignature) {
        lastCommonSignature = signature;
        const common = getCommon();
        if (common && typeof common.rescan === 'function') common.rescan();
      }
      scanDirectViewers();
    } catch (error) {
      warn('Telegram scan failed', error);
    }
  }

  window.__UAS_TELEGRAM_BRIDGE__ = {
    collectMedia,
    getItemByKey: (key) => telegramItemCache.get(key) || collectMedia().find(item => item.key === key) || null,
    downloadBatch,
    downloadSingle,
  };

  injectStyle();
  scan();
  setInterval(scan, CHECK_INTERVAL);

  const observer = new MutationObserver(scan);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener('beforeunload', () => {
    observer.disconnect();
  }, { once: true });

  log('Integrated Telegram adapter initialized', location.href);
})();
