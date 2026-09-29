// [uas-site-repairs-21-72-v1]
// [uas-site-repairs-v4-downloads]
// [uas-site-repairs-v3-main]
// [uas-media-core-v1.4]
// [uas-media-core-v1.3]
// [uas-media-core-v1.2]
// [uas-media-core-v1.1]
// [uas-media-core-v1]
// [ehentai-download-repair-v5]
// [ehentai-domparser-fix-v4]
// [ehentai-background-original-v2]
// [ehentai-support-v1]
// [poipiku-xml-original-fix-v6]
// [poipiku-download-fix-v3]\n// [poipiku-support-v2]

// [runtime-marker-repair-v2]


// [zip-reference-repair-v1]



// [zip-reference-repair-v1]



// Не используем внешний JSZip/zip.js. Если в старом коде осталась



// глобальная ссылка `zip`, service worker не должен падать уже при старте.



if (typeof globalThis.zip === 'undefined') {



  globalThis.zip = Object.create(null);



}



// [zip-ui-settings-v2]



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {



  if (request.action === 'clear_download_cache' || request.action === 'clear_telegram_completed_cache') {



    telegramDownloadLocks.clear();



    telegramDownloadCompleted.clear();



    sendResponse({ ok: true });



    return;



  }



});







// Настройка заголовков Referer для обхода хотлинкинга



async function setupRefererRules() {



  const RULES = [



    {



      id: 1,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://www.pixiv.net/" }]



      },



      condition: {



        urlFilter: "||pximg.net",



        resourceTypes: ["xmlhttprequest", "image", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 2,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://safebooru.org/" }]



      },



      condition: {



        urlFilter: "||safebooru.org",



        resourceTypes: ["xmlhttprequest", "image", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 3,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://booru.io/" }]



      },



      condition: {



        urlFilter: "||booru.io",



        resourceTypes: ["xmlhttprequest", "image", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 4,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://donmai.moe/" }]



      },



      condition: {



        urlFilter: "||donmai.us",



        resourceTypes: ["xmlhttprequest", "image", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 5,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://kurocore.com/" }]



      },



      condition: {



        urlFilter: "||kurocore.com",



        resourceTypes: ["xmlhttprequest", "image", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 6,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://rule34.xxx/" }]



      },



      condition: {



        urlFilter: "||api-cdn.rule34.xxx",



        resourceTypes: ["xmlhttprequest", "image", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 7,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://rule34.gg/" }]



      },



      condition: {



        urlFilter: "||cdn.rule34.gg",



        resourceTypes: ["xmlhttprequest", "image", "other", "main_frame", "sub_frame"]



      }



    }



  ,



    {



      id: 8,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://scrolller.com/" }]



      },



      condition: {



        urlFilter: "||scrolller.com",



        resourceTypes: ["xmlhttprequest", "image", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 9,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://twitter.com/" }]



      },



      condition: {



        urlFilter: "||twimg.com",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 10,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://www.truyen-hentai.com/" }]



      },



      condition: {



        urlFilter: "||truyen-hentai.com",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 11,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://www.reddit.com/" }]



      },



      condition: {



        urlFilter: "||redd.it",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 12,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "http://m4ex.com/" }]



      },



      condition: {



        urlFilter: "||m4ex.com",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 13,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "http://m4ex.com/" }]



      },



      condition: {



        urlFilter: "||m4ex.net",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 14,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://erocon.gger.jp/" }]



      },



      condition: {



        urlFilter: "||livedoor.blogimg.jp/eroga0721-1vsaopad",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 15,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://pikabu.ru/" }]



      },



      condition: {



        urlFilter: "||pikabu.ru",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 16,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://isla-de-muerta.com/" }]



      },



      condition: {



        urlFilter: "||isla-de-muerta.com",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 17,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://gollum.space/" }]



      },



      condition: {



        urlFilter: "||gollum.space",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 18,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://palanq.win/" }]



      },



      condition: {



        urlFilter: "||palanq.win",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    }



    ,



    {



      id: 19,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://gelbooru.com/" }]



      },



      condition: {



        regexFilter: "^https?://img[0-9]+\\.gelbooru\\.com/",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 20,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://www.pinterest.com/" }]



      },



      condition: {



        urlFilter: "||pinimg.com",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 21,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://yande.re/" }]



      },



      condition: {



        urlFilter: "||yande.re",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 22,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://www.zerochan.net/" }]



      },



      condition: {



        urlFilter: "||static.zerochan.net",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },



    {



      id: 23,



      priority: 1,



      action: {



        type: "modifyHeaders",



        requestHeaders: [{ header: "Referer", operation: "set", value: "https://www.zerochan.net/" }]



      },



      condition: {



        urlFilter: "||zerochan.net",



        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]



      }



    },

    {

      id: 24,

      priority: 1,

      action: {

        type: "modifyHeaders",

        requestHeaders: [{ header: "Referer", operation: "set", value: "https://poipiku.com/" }]

      },

      condition: {

        urlFilter: "||cdn.poipiku.com",

        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]

      }

    },





    {

      id: 25,

      priority: 1,

      action: {

        type: "modifyHeaders",

        requestHeaders: [{ header: "Referer", operation: "set", value: "https://e-hentai.org/" }]

      },

      condition: {

        urlFilter: "||ehgt.org",

        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]

      }

    },

    {

      id: 26,

      priority: 1,

      action: {

        type: "modifyHeaders",

        requestHeaders: [{ header: "Referer", operation: "set", value: "https://e-hentai.org/" }]

      },

      condition: {

        urlFilter: "||hath.network",

        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]

      }

    },

    {

      id: 27,

      priority: 1,

      action: {

        type: "modifyHeaders",

        requestHeaders: [{ header: "Referer", operation: "set", value: "https://e-hentai.org/" }]

      },

      condition: {

        urlFilter: "||e-hentai.org/fullimg",

        resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"]

      }

    },



    { id: 28, priority: 1, action: { type: "modifyHeaders", requestHeaders: [{ header: "Referer", operation: "set", value: "https://wallhaven.cc/" }] }, condition: { urlFilter: "||w.wallhaven.cc", resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"] } },
    { id: 29, priority: 1, action: { type: "modifyHeaders", requestHeaders: [{ header: "Referer", operation: "set", value: "https://wallhaven.cc/" }] }, condition: { urlFilter: "||th.wallhaven.cc", resourceTypes: ["xmlhttprequest", "image", "media", "other", "main_frame", "sub_frame"] } },
  ];







  try {



    await chrome.declarativeNetRequest.updateDynamicRules({



      removeRuleIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],



      addRules: RULES



    });



  } catch (err) {}



}







chrome.runtime.onInstalled.addListener(setupRefererRules);



chrome.runtime.onStartup.addListener(setupRefererRules);



setupRefererRules();





chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {



  if (request.action === 'uas_health_diagnostics') {
    handleUASHealthDiagnostics(request)
      .then(result => sendResponse(result))
      .catch(e => sendResponse({ ok: false, error: String(e?.message || e) }));
    return true;
  }

  if (request.action === 'download_batch' && Array.isArray(request.items)) {



    handleBatchDownload(request, sender.tab?.id);



  }



  if (request.action === 'download_zip_batch' && Array.isArray(request.items)) {



    handleZipBatchDownload(request, sender.tab?.id);



  }



  if (request.action === 'export_history_file' && request.site) {



    exportHistoryToDisk(request.site);



  }



});



// Экспорт актуальной истории ссылок на диск в папку ArtSaver/_history/<site>_history.txt







// [telegram-quality-v7]



// Telegram Web often exposes media as origin-scoped blob: URLs and lazy albums.



// Keep the actual media resolution in the Telegram tab, then hand the resulting



// data URL to chrome.downloads so the normal Downloads/ArtSaver folder structure



// is preserved. Stable message keys + completed/pending locks prevent duplicates.











function telegramHardSafeName(value, fallback = 'telegram_media') {



  let name = String(value || '')



    .normalize('NFKC')



    .replace(/[\u0000-\u001F\u007F]/g, '_')



    .replace(/[\\/:*?"<>|]/g, '_')



    .replace(/[. ]+$/g, '')



    .trim();







  return (name || fallback).slice(0, 150);



}







const telegramDownloadLocks = new Set();



const telegramDownloadCompleted = new Set();







function telegramNormalizeText(value) {



  return String(value ?? '')



    .replace(/[\u0000-\u001F\u007F]/g, ' ')



    .replace(/\s+/gu, ' ')



    .trim();



}







function telegramSafePart(value, fallback = 'General') {



  let text = telegramNormalizeText(value)



    .replace(/[\\/:*?"<>|]/g, '_')



    .replace(/[. ]+$/g, '')



    .trim();







  if (/^(?:CON|PRN|AUX|NUL|COM[0-9]|LPT[0-9])(?:\..*)?$/i.test(text)) {



    text = `_${text}`;



  }







  return (text || fallback).slice(0, 72);



}







function telegramSafeFileName(value, fallback = 'telegram_media') {



  let text = telegramNormalizeText(value)



    .replace(/[\\/:*?"<>|]/g, '_')



    .replace(/[. ]+$/g, '')



    .trim();







  if (/^(?:CON|PRN|AUX|NUL|COM[0-9]|LPT[0-9])(?:\..*)?$/i.test(text)) {



    text = `_${text}`;



  }







  return (text || fallback).slice(0, 150);



}







function telegramFileExtensionForMime(mime) {



  const clean = String(mime || '').split(';')[0].toLowerCase();



  const map = {



    'image/jpeg': '.jpg', 'image/jpg': '.jpg', 'image/png': '.png',



    'image/webp': '.webp', 'image/gif': '.gif', 'image/avif': '.avif',



    'image/bmp': '.bmp', 'image/tiff': '.tiff',



    'video/mp4': '.mp4', 'video/webm': '.webm', 'video/quicktime': '.mov',



    'audio/ogg': '.ogg', 'audio/mpeg': '.mp3', 'audio/mp4': '.m4a',



    'audio/webm': '.webm', 'audio/aac': '.aac'



  };



  return map[clean] || '';



}







function telegramEnsureExtension(fileName, mime) {



  const name = telegramSafeFileName(fileName || 'telegram_media');



  const ext = telegramFileExtensionForMime(mime);



  if (!ext) return name;



  if (new RegExp(`\\${ext}$`, 'i').test(name)) return name;



  if (/\.[a-z0-9]{2,5}$/i.test(name)) return name.replace(/\.[a-z0-9]{2,5}$/i, ext);



  return name + ext;



}







function telegramFallbackBaseName(key, kind = 'image') {



  let h = 2166136261;



  const s = String(key || '');



  for (let i = 0; i < s.length; i++) {



    h ^= s.charCodeAt(i);



    h = Math.imul(h, 16777619);



  }



  return `telegram_${String(kind || 'image').toLowerCase()}_${(h >>> 0).toString(16)}`;



}







function telegramDownloadPath(folderName, fileName) {



  const folder = telegramSafePart(folderName, 'Telegram');



  const name = telegramSafeFileName(fileName, 'telegram_media');







  // Keep the full relative path comfortably below Chrome/Windows filename limits.



  const prefix = `ArtSaver/telegram/${folder}/`;



  const MAX_RELATIVE = 220;



  const available = Math.max(32, MAX_RELATIVE - prefix.length);







  let finalName = name;



  if (finalName.length > available) {



    const match = finalName.match(/^(.*?)(\.[^.]{1,8})$/);



    const ext = match ? match[2] : '';



    const stem = match ? match[1] : finalName;



    finalName = stem.slice(0, Math.max(16, available - ext.length)) + ext;



  }







  return prefix + finalName;



}







async function telegramChromeDownload(url, folderName, fileName, headers = [], key = '', kind = 'image') {



  const safeFolder = telegramSafePart(folderName, 'Telegram');



  const requested = telegramEnsureExtension(fileName || 'telegram_media', '');



  const primaryPath = telegramDownloadPath(safeFolder, requested);







  try {



    const dlOpts = { url, filename: primaryPath, conflictAction: 'uniquify' };



    if (headers && headers.length > 0 && !url.startsWith('data:')) dlOpts.headers = headers;



    const id = await chrome.downloads.download(dlOpts);



    return { ok: true, method: 'chrome-downloads', downloadId: id, filename: primaryPath };



  } catch (error) {



    // Retry with a deterministic short name while staying inside ArtSaver/telegram.



    const fallbackStem = telegramFallbackBaseName(key || primaryPath, kind);



    const fallbackExt = /\.[a-z0-9]{2,5}$/i.test(requested)



      ? requested.slice(requested.lastIndexOf('.'))



      : '';



    const fallbackPath = telegramDownloadPath(safeFolder, fallbackStem + fallbackExt);







    try {



      const fallbackOpts = { url, filename: fallbackPath, conflictAction: 'uniquify' };



      if (headers && headers.length > 0 && !url.startsWith('data:')) fallbackOpts.headers = headers;



      const id = await chrome.downloads.download(fallbackOpts);



      return {



        ok: true,



        method: 'chrome-downloads-fallback',



        downloadId: id,



        filename: fallbackPath,



        warning: String(error?.message || error)



      };



    } catch (retryError) {



      return {



        ok: false,



        error: String(retryError?.message || error?.message || error),



        originalError: String(error?.message || error)



      };



    }



  }



}







async function telegramBlobToDataUrl(tabId, blobUrl) {



  let targetTabId = tabId;



  if (!targetTabId) {



    try {



      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });



      targetTabId = activeTab?.id;



    } catch (_) {}



  }



  if (!targetTabId) {



    return { ok: false, error: 'Telegram tab is unavailable' };



  }







  const result = await chrome.scripting.executeScript({



    target: { tabId: targetTabId },



    world: 'MAIN',



    func: async (url) => {



      try {



        const response = await fetch(url);



        if (!response.ok) throw new Error(`HTTP ${response.status}`);







        const blob = await response.blob();



        const MAX_BYTES = 100 * 1024 * 1024;



        if (blob.size > MAX_BYTES) {



          return {



            ok: false,



            tooLarge: true,



            size: blob.size,



            mime: blob.type || ''



          };



        }







        const dataUrl = await new Promise((resolve, reject) => {



          const reader = new FileReader();



          reader.onloadend = () => resolve(reader.result);



          reader.onerror = () => reject(new Error('FileReader failed'));



          reader.readAsDataURL(blob);



        });







        return {



          ok: true,



          dataUrl,



          size: blob.size,



          mime: blob.type || 'application/octet-stream'



        };



      } catch (error) {



        return { ok: false, error: String(error?.message || error) };



      }



    },



    args: [blobUrl]



  });







  return result?.[0]?.result || {



    ok: false,



    error: 'Telegram blob extraction returned no result'



  };



}







chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {



  if (request.action !== 'telegram_download_media') return;







  (async () => {



    const key = String(request.key || request.telegramMessageId || request.url || '');



    if (!key) {



      sendResponse({ ok: false, error: 'Telegram download key is empty' });



      return;



    }







    if (telegramDownloadLocks.has(key)) {



      sendResponse({ ok: true, duplicate: true, method: 'dedup-in-flight' });



      return;



    }







    // Разрешаем скачивание, если пользователь запросил файл (не блокируем намертво)







    telegramDownloadLocks.add(key);







    try {



      const tabId = sender.tab?.id;



      if (!tabId) throw new Error('Telegram tab is unavailable');







      const url = String(request.url || '');



      const folderName = String(request.folderName || 'Telegram');



      const kind = String(request.kind || 'image');



      let fileName = telegramHardSafeName(String(request.fileName || 'telegram_media'));







      if (!url) throw new Error('Telegram media URL is empty');







      if (/^https?:\/\//i.test(url)) {



        const result = await telegramChromeDownload(



          url,



          folderName,



          fileName,



          [{ name: 'Referer', value: sender.tab?.url || 'https://web.telegram.org/' }],



          key,



          kind



        );







        if (result.ok) telegramDownloadCompleted.add(key);



        sendResponse(result);



        return;



      }







      if (/^blob:https?:\/\//i.test(url)) {



        const extracted = await telegramBlobToDataUrl(tabId, url);







        if (!extracted?.ok) {



          sendResponse({



            ok: false,



            error: extracted?.error || 'Unable to extract Telegram blob',



            tooLarge: !!extracted?.tooLarge,



            size: extracted?.size || 0



          });



          return;



        }







        fileName = telegramEnsureExtension(fileName, extracted.mime);







        const result = await telegramChromeDownload(



          extracted.dataUrl,



          folderName,



          fileName,



          [],



          key,



          kind



        );







        if (result.ok) {



          telegramDownloadCompleted.add(key);



          result.size = extracted.size;



          result.mime = extracted.mime;



        }







        sendResponse(result);



        return;



      }







      throw new Error(`Unsupported Telegram media URL: ${url.slice(0, 80)}`);



    } catch (error) {



      sendResponse({



        ok: false,



        error: String(error?.message || error)



      });



    } finally {



      telegramDownloadLocks.delete(key);



    }



  })();







  return true;



});







async function exportHistoryToDisk(site) {



  try {



    const storageKey = `downloaded_${site}`;



    const metaKey = `history_meta_${site}`;



    const data = await chrome.storage.local.get([storageKey, metaKey]);



    const keys = data[storageKey] || [];



    const meta = data[metaKey] || {};







    if (keys.length === 0) return;







    let txt = `# ============================================================\n`;



    txt += `# Universal Art Saver - История скачиваний\n`;



    txt += `# Сайт: ${site}\n`;



    txt += `# Всего файлов: ${keys.length}\n`;



    txt += `# Последнее обновление: ${new Date().toLocaleString()}\n`;



    txt += `# ============================================================\n`;



    txt += `# KEY | FILENAME | DATE | URL\n\n`;







    for (const key of keys) {



      const item = meta[key];



      if (item) {



        txt += `${key} | ${item.filename} | ${item.date} | ${item.url}\n`;



      } else {



        txt += `${key} | - | - | -\n`;



      }



    }







    const dataUrl = `data:text/plain;charset=utf-8,${encodeURIComponent(txt)}`;



    await chrome.downloads.download({



      url: dataUrl,



      filename: `ArtSaver/_history/${site}_history.txt`,



      conflictAction: 'overwrite'



    });



  } catch (e) {}



}







chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {



  if (request.action === 'export_history_file' && request.site) {



    exportHistoryToDisk(request.site);



  }



});











function bufferToDataUrl(buffer, mimeType) {



  let binary = '';



  const bytes = new Uint8Array(buffer);



  const len = bytes.byteLength;



  const chunkSize = 8192;



  for (let i = 0; i < len; i += chunkSize) {



    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));



  }



  return `data:${mimeType};base64,${btoa(binary)}`;



}







// [safe-media-v2] Никогда не принимать HTML вместо медиа.



async function fetchImageBuffer(url, customReferer = null) {
  return uasFetchImageBufferV2(url, customReferer);
}

// [rule34-us-v1] Dedicated Rule34.us image fetcher.



async function fetchRule34UsImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];







  const addCandidate = (value) => {



    if (!value) return;



    try {



      const absolute = new URL(value, 'https://rule34.us/').href;



      if (!/^https?:\/\/img2\.rule34\.us\/(?:images|thumbnails)\//i.test(absolute)) return;







      candidates.push(absolute);







      if (absolute.includes('/thumbnails/')) {



        const base = absolute.replace('/thumbnails/', '/images/').replace('/thumbnail_', '/');
        const webm = base.replace(/\.(?:jpe?g|png|gif|webp)(?:[?#].*)?$/i, '.webm');
        const mp4 = base.replace(/\.(?:jpe?g|png|gif|webp)(?:[?#].*)?$/i, '.mp4');
        candidates.push(webm);
        candidates.push(mp4);
        candidates.push(base);



      }



    } catch (e) {}



  };







  addCandidate(url);



  if (allowFallback) addCandidate(fallbackPreviewUrl);







  const expanded = [];



  for (const candidate of candidates) {



    expanded.push(candidate);



    const clean = candidate.split('?')[0].split('#')[0];



    const match = clean.match(/\.([a-z0-9]+)$/i);



    if (!match) continue;







    const currentExt = match[1].toLowerCase();



    for (const ext of ['png', 'jpg', 'jpeg', 'gif', 'webp']) {



      if (ext === currentExt) continue;



      expanded.push(clean.replace(/\.[a-z0-9]+$/i, `.${ext}`));



    }



  }







  for (const candidate of [...new Set(expanded)]) {



    try {



      const imgData = await fetchImageBuffer(candidate, 'https://rule34.us/');



      if (imgData) return { ...imgData, finalUrl: candidate };



    } catch (e) {}



  }







  return null;



}











// [erocon-v1] Максимальное качество для erocon.gger.jp (livedoor blog)



async function fetchEroconImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];







  const add = (value) => {



    if (!value) return;



    try {



      const u = new URL(value);



      let target = u.href;







      if (/^resize\.blogsys\.jp$/i.test(u.hostname)) {



        const embedded = target.match(/(https?:\/\/livedoor\.blogimg\.jp\/eroga0721-1vsaopad\/imgs\/[^?#]+)/i);



        if (embedded) target = embedded[1];



      }







      const t = new URL(target);



      if (!/^livedoor\.blogimg\.jp$/i.test(t.hostname)) return;



      if (!/^\/eroga0721-1vsaopad\/imgs\/[0-9a-f]\/[0-9a-f]\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(t.pathname)) return;







      t.protocol = 'https:';



      t.search = '';



      t.hash = '';



      const original = t.href.replace(/-(?:s|m|l)(?=\.[a-z0-9]+$)/i, '');



      candidates.push(original);







      const cleanBase = original.replace(/\.[a-z0-9]+$/i, '');



      if (/\.jpe?g$/i.test(original)) {



        candidates.push(`${cleanBase}.png`);



      } else if (/\.png$/i.test(original)) {



        candidates.push(`${cleanBase}.jpg`);



      }







      candidates.push(t.href);



    } catch (e) {}



  };







  add(url);



  if (allowFallback) add(fallbackPreviewUrl);







  for (const candidate of [...new Set(candidates)]) {



    try {



      const imgData = await fetchImageBuffer(candidate, 'https://erocon.gger.jp/');



      if (imgData) return { ...imgData, finalUrl: candidate };



    } catch (e) {}



  }



  return null;



}







// [isla-de-muerta-v1] Максимальное качество для isla-de-muerta.com / gollum.space / pikabu



async function fetchIslaDeMuertaMedia(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];







  const addCandidate = (val) => {



    if (!val) return;



    try {



      const u = new URL(val).href;



      candidates.push(u);







      if (u.includes('/post_img/') && !u.includes('/post_img/big/')) {



        const bigUrl = u.replace('/post_img/', '/post_img/big/');



        candidates.push(bigUrl);



        if (/\.webp$/i.test(bigUrl)) {



          candidates.push(bigUrl.replace(/\.webp$/i, '.jpg'));



          candidates.push(bigUrl.replace(/\.webp$/i, '.png'));



        }



      } else if (u.includes('/post_img/big/')) {



        candidates.push(u.replace('/post_img/big/', '/post_img/'));



      }







      if (/\/s\/.*_[a-z0-9]+\.(jpe?g|png|gif|webp)$/i.test(u)) {



        const lgUrl = u.replace(/_[a-z0-9]+(?=\.[a-z0-9]+$)/i, '_lg');



        candidates.push(lgUrl);



        if (/\.jpe?g$/i.test(lgUrl)) {



          candidates.push(lgUrl.replace(/\.jpe?g$/i, '.png'));



        }



      }



    } catch (e) {}



  };







  addCandidate(url);



  if (allowFallback) addCandidate(fallbackPreviewUrl);







  const unique = [...new Set(candidates)];



  unique.sort((a, b) => {



    const score = (x) => (x.includes('/post_img/big/') ? 2 : 0) + (x.includes('_lg.') ? 2 : 0);



    return score(b) - score(a);



  });







  for (const c of unique) {



    let referer = 'https://isla-de-muerta.com/';



    if (c.includes('pikabu.ru')) referer = 'https://pikabu.ru/';



    else if (c.includes('gollum.space')) referer = 'https://gollum.space/';







    try {



      const imgData = await fetchImageBuffer(c, referer);



      if (imgData) return { ...imgData, finalUrl: c };



    } catch (e) {}



  }



  return null;



}







// Pixiv



async function fetchPixivImage(originalJpgUrl, fallbackPreviewUrl, allowFallback) {



  try {



    const imgData = await fetchImageBuffer(originalJpgUrl);



    if (imgData) return { ...imgData, finalUrl: originalJpgUrl };



  } catch (e) {}







  const pngUrl = originalJpgUrl.replace(/\.jpg$/i, '.png');



  try {



    const imgData = await fetchImageBuffer(pngUrl);



    if (imgData) return { ...imgData, finalUrl: pngUrl };



  } catch (e) {}







  const gifUrl = originalJpgUrl.replace(/\.jpg$/i, '.gif');



  try {



    const imgData = await fetchImageBuffer(gifUrl);



    if (imgData) return { ...imgData, finalUrl: gifUrl };



  } catch (e) {}







  if (allowFallback && fallbackPreviewUrl) {



    try {



      const imgData = await fetchImageBuffer(fallbackPreviewUrl);



      if (imgData) return { ...imgData, finalUrl: fallbackPreviewUrl };



    } catch (e) {}



  }



  return null;



}







// Загрузка для Pinterest: гарантированный подбор наилучшего качества без сбоя в XML



async function fetchPinterestImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];



  const addVariants = (targetUrl) => {



    if (!targetUrl) return;



    try {



      const clean = targetUrl.split('?')[0].split('#')[0];



      const match = clean.match(/\.([a-z0-9]+)$/i);



      if (!match) {



        candidates.push(clean);



        return;



      }



      const currentExt = match[1].toLowerCase();



      const base = clean.replace(/\.[a-z0-9]+$/i, '');



      candidates.push(clean);



      for (const ext of ['jpg', 'png', 'webp', 'jpeg', 'gif']) {



        if (ext !== currentExt) candidates.push(`${base}.${ext}`);



      }



    } catch (e) {}



  };







  const cleanOriginal = (url || '').split('?')[0].split('#')[0];



  const origUrl = cleanOriginal.includes('/originals/')



    ? cleanOriginal



    : cleanOriginal.replace(new RegExp('/(?:[0-9]+x[0-9]*|[0-9]+x)/', 'i'), '/originals/');







  // 1. Сначала пробуем оригиналы во всех возможных расширениях (.jpg, .png, .webp, .jpeg, .gif)



  addVariants(origUrl);







  // 2. Если оригинал отсутствует на S3 (дает 403), пробуем максимальные качественные пресеты Pinterest (736x и 564x)



  if (origUrl.includes('/originals/')) {



    addVariants(origUrl.replace('/originals/', '/736x/'));



    addVariants(origUrl.replace('/originals/', '/564x/'));



  }







  // 3. Fallback превью со страницы



  if (fallbackPreviewUrl) {



    addVariants(fallbackPreviewUrl);



  }







  const uniqueCandidates = [...new Set(candidates.filter(Boolean))];



  for (const c of uniqueCandidates) {



    if (!allowFallback && (c.includes('/236x/') || c.includes('/136x/'))) {



      continue;



    }



    try {



      const imgData = await fetchImageBuffer(c, 'https://www.pinterest.com/');



      if (imgData && imgData.buffer) return { ...imgData, finalUrl: c };



    } catch (e) {}



  }







  if (allowFallback && fallbackPreviewUrl) {



    try {



      const imgData = await fetchImageBuffer(fallbackPreviewUrl, 'https://www.pinterest.com/');



      if (imgData && imgData.buffer) return { ...imgData, finalUrl: fallbackPreviewUrl };



    } catch (e) {}



  }



  return null;



}







// Загрузка для Kurocore



async function fetchKurocoreImage(url, fallbackPreviewUrl, allowFallback) {



  try {



    const imgData = await fetchImageBuffer(url);



    if (imgData) return { ...imgData, finalUrl: url };



  } catch (e) {}







  if (url.includes('/i/ori/')) {



    const variants = ['/i/lg/', '/i/large/', '/i/raw/', '/i/'];



    for (const v of variants) {



      const candidateJpg = url.replace('/i/ori/', v);



      try {



        const imgData = await fetchImageBuffer(candidateJpg);



        if (imgData) return { ...imgData, finalUrl: candidateJpg };



      } catch (e) {}







      const candidatePng = candidateJpg.replace(/\.jpe?g$/i, '.png');



      try {



        const imgData = await fetchImageBuffer(candidatePng);



        if (imgData) return { ...imgData, finalUrl: candidatePng };



      } catch (e) {}



    }



  }







  if (allowFallback && fallbackPreviewUrl && fallbackPreviewUrl !== url) {



    try {



      const imgData = await fetchImageBuffer(fallbackPreviewUrl);



      if (imgData) return { ...imgData, finalUrl: fallbackPreviewUrl };



    } catch (e) {}



  }



  return null;



}







// PixAI



async function fetchPixAIImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];



  const absolute = (() => {



    try { return new URL(url).href; } catch (e) { return url; }



  })();



  if (/^https?:\/\/images-ng\.pixai\.art\/images\/orig\/[a-f0-9-]+$/i.test(absolute)) {



    candidates.push(absolute);



  }



  if (allowFallback && fallbackPreviewUrl) {



    const fallback = (() => {



      try { return new URL(fallbackPreviewUrl).href; } catch (e) { return fallbackPreviewUrl; }



    })();



    if (fallback !== absolute && /^https?:\/\/images-ng\.pixai\.art\/images\/(?:orig|thumb)\/[a-f0-9-]+$/i.test(fallback)) {



      candidates.push(fallback.replace('/images/thumb/', '/images/orig/'));



      candidates.push(fallback);



    }



  }



  for (const candidate of candidates) {



    const imgData = await fetchImageBuffer(candidate);



    if (imgData) return { ...imgData, finalUrl: candidate };



  }



  return null;



}







// AIBooru



// [uas-aibooru-v4] Homepage thumbnails can be resized JPGs.
// Resolve the exact original from the linked /posts/<id> document.
async function uasFetchAIBooruPostOriginal(sourceUrl) {
  const source = String(sourceUrl || '').trim();
  const m = source.match(/(?:^|\/)aibooru\.online\/posts\/(\d+)/i);
  if (!m) return '';

  try {
    const res = await uasFetchWithRetry(`https://aibooru.online/posts/${m[1]}`, {
      retries: 2,
      timeoutMs: 10000,
      referer: 'https://aibooru.online/'
    });
    if (!res.ok) return '';
    const html = await res.text();
    const patterns = [
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["'][^>]*>/i,
      /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i
    ];
    for (const p of patterns) {
      const hit = html.match(p)?.[1];
      if (hit && /^https?:\/\/cdn\.aibooru\.download\//i.test(hit)) return hit;
    }
  } catch (_) {}
  return '';
}

async function fetchAIBooruImage(url, fallbackPreviewUrl, allowFallback, info, ctx = {}) {
  const candidates = [];
  const seen = new Set();
  const add = (value, priority = 0) => {
    if (!value) return;
    try {
      const absolute = new URL(String(value), 'https://aibooru.online/').href.split('#')[0];
      if (!/^https?:\/\/cdn\.aibooru\.download\//i.test(absolute)) return;
      if (seen.has(absolute)) return;
      seen.add(absolute);
      candidates.push({ url: absolute, priority });
    } catch (_) {}
  };

  add(await uasFetchAIBooruPostOriginal(info?.sourceUrl || info?.pageUrl || ''), 300);

  if (ctx.tabId) {
    try {
      const result = await chrome.scripting.executeScript({
        target: { tabId: Number(ctx.tabId) },
        world: 'MAIN',
        func: (source) => {
          const out = [];
          const seen = new Set();
          const addUrl = (v, score = 0) => {
            if (!v) return;
            try {
              const u = new URL(String(v), location.href).href.split('#')[0];
              if (!/^https?:\/\/cdn\.aibooru\.download\//i.test(u) || seen.has(u)) return;
              seen.add(u);
              out.push({ url: u, score });
            } catch (_) {}
          };
          const collect = img => {
            if (!img) return;
            addUrl(img.currentSrc, 250);
            addUrl(img.src, 240);
            addUrl(img.getAttribute('data-original'), 230);
            addUrl(img.getAttribute('data-full'), 230);
          };
          collect(document.querySelector('#post-view img#image, img#image'));
          return out.sort((a,b) => b.score-a.score).map(x => x.url);
        },
        args: [String(info?.sourceUrl || '')]
      });
      for (const value of result?.[0]?.result || []) add(value, 250);
    } catch (_) {}
  }

  const addDerived = value => {
    if (!value) return;
    let absolute = '';
    try { absolute = new URL(String(value), 'https://aibooru.online/').href.split('#')[0]; }
    catch (_) { return; }
    const m = absolute.match(/^https?:\/\/cdn\.aibooru\.download\/(?:180x180|360x360|720x720|fit|preview|sample|original)\/(.+)$/i);
    if (!m) return;
    const path = m[1];
    for (const ext of ['png','jpg','jpeg','webp','gif']) {
      add(`https://cdn.aibooru.download/original/${path.replace(/\.[a-z0-9]+$/i, `.${ext}`)}`, 100 - ext.length);
    }
  };

  addDerived(url);
  if (allowFallback) addDerived(fallbackPreviewUrl);

  candidates.sort((a,b) => b.priority-a.priority);
  for (const candidate of candidates) {
    try {
      const imgData = await fetchImageBuffer(candidate.url, 'https://aibooru.online/');
      if (imgData?.buffer) return { ...imgData, finalUrl: imgData.finalUrl || candidate.url, candidatesUsed: [candidate.url] };
    } catch (_) {}
  }
  return null;
}

// Twitter (используется для Sotwe и Twitter-вложений на Plurk)



async function fetchTwitterImage(url, fallbackPreviewUrl, allowFallback) {



  let clean = url;



  if (clean.includes('?')) {



    clean = clean.replace(/([?&])name=[^&]*/i, '$1name=orig');



    if (!clean.includes('name=orig')) clean += '&name=orig';



  } else {



    clean += '?name=orig';



  }



  let imgData = await fetchImageBuffer(clean, 'https://twitter.com/');



  if (imgData) return { ...imgData, finalUrl: clean };







  const large = clean.replace('name=orig', 'name=large');



  imgData = await fetchImageBuffer(large, 'https://twitter.com/');



  if (imgData) return { ...imgData, finalUrl: large };







  if (allowFallback && fallbackPreviewUrl) {



    imgData = await fetchImageBuffer(fallbackPreviewUrl, 'https://twitter.com/');



    if (imgData) return { ...imgData, finalUrl: fallbackPreviewUrl };



  }



  return null;



}







// JoyReactor



async function fetchJoyReactorImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    if (!v) return;



    try {



      const u = new URL(v);



      arr.push(u.href);



      if (u.href.includes('/pics/post/')) {



        arr.push(u.href.replace('/pics/post/', '/pics/post/full/'));



      }



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);







  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x, 'https://joyreactor.cc/');



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







// Warosu



async function fetchWarosuImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    if (!v) return;



    try {



      const u = new URL(v);



      let href = u.href.replace(/\/thumb\//i, '/img/');



      href = href.replace(/s(?=\.[a-z0-9]+$)/i, '');



      arr.push(href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







// Cool18



async function fetchCool18Image(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/img\.xwbo\.com\/images\/[^?#]+\.(?:jpg|jpeg|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







// Plurk



async function fetchPlurkImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];



  const clean = url.split('?')[0].split('#')[0];



  const orig = clean.replace(/\/(?:mx_|s_|m_|u_|thumb_|\d+x\d+_|\d+_)(?=[^/]+$)/i, '/');



  candidates.push(orig);







  if (/\.jpe?g$/i.test(orig)) {



    candidates.push(orig.replace(/\.jpe?g$/i, '.png'));



    candidates.push(orig.replace(/\.jpe?g$/i, '.gif'));



  } else if (/\.png$/i.test(orig)) {



    candidates.push(orig.replace(/\.png$/i, '.jpg'));



  }



  if (allowFallback && fallbackPreviewUrl) candidates.push(fallbackPreviewUrl);







  for (const c of [...new Set(candidates)]) {



    const d = await fetchImageBuffer(c);



    if (d) return { ...d, finalUrl: c };



  }



  return null;



}







// [gelbooru-v3-fetch]



async function fetchGelbooruOriginalExact(url) {



  try {



    const absolute = new URL(url, 'https://gelbooru.com/').href.split('#')[0];







    // Разрешаем только exact CDN original path.



    if (!/^https?:\/\/img\d+\.gelbooru\.com\/images\/[^?#]+\.(?:jpe?g|png|gif|webp|webm|mp4)$/i.test(absolute)) {



      return null;



    }







    const imgData = await fetchImageBuffer(absolute, 'https://gelbooru.com/');



    if (!imgData || !imgData.buffer) return null;







    return {



      ...imgData,



      finalUrl: absolute



    };



  } catch (e) {



    return null;



  }



}







// Booru



async function fetchBooruImage(url, fallbackPreviewUrl, allowFallback) {



  const normalizedUrl = url.replace(/([^:])\/{2,}/g, '$1/');



  try {



    const imgData = await fetchImageBuffer(normalizedUrl);



    if (imgData) return { ...imgData, finalUrl: normalizedUrl };



  } catch (e) {}







  if (normalizedUrl.includes('cdn.rule34.gg/')) {



    const variants = ['/posts/', '/images/', '/original/', '/full/', '/preview/'];



    for (const v of variants) {



      const candidate = normalizedUrl.replace(/\/(?:posts|images|original|full|preview)\//, v);



      try {



        const imgData = await fetchImageBuffer(candidate);



        if (imgData) return { ...imgData, finalUrl: candidate };



      } catch (e) {}



    }



  }







  if (normalizedUrl.includes('/api/legacy/data/')) {



    const baseDir = normalizedUrl.replace(/\/(?:original|300x|1000x|tr\.300x|tr\.1000x)(?:\.[a-z0-9]+)?$/i, '');



    const tryCandidates = [



      `${baseDir}/original`,



      `${baseDir}/original.jpg`,



      `${baseDir}/original.png`,



      `${baseDir}/original.webp`,



      `${baseDir}/1000x.jpg`,



      `${baseDir}/tr.1000x.jpg`



    ];



    for (const cand of tryCandidates) {



      if (cand === normalizedUrl) continue;



      try {



        const imgData = await fetchImageBuffer(cand);



        if (imgData) return { ...imgData, finalUrl: cand };



      } catch (e) {}



    }



  }







  const [baseWithoutQuery, query] = normalizedUrl.split('?');



  const querySuffix = query ? `?${query}` : '';



  const match = baseWithoutQuery.match(/\.([a-z0-9]+)$/i);







  if (match) {



    const currentExt = match[1].toLowerCase();



    const candidateExts = ['jpeg', 'png', 'jpg', 'gif', 'webp'].filter(ext => ext !== currentExt);



    for (const ext of candidateExts) {



      const candidateUrl = baseWithoutQuery.replace(/\.[a-z0-9]+$/i, `.${ext}`) + querySuffix;



      try {



        const imgData = await fetchImageBuffer(candidateUrl);



        if (imgData) return { ...imgData, finalUrl: candidateUrl };



      } catch (e) {}







      if (query) {



        const candidateNoQuery = baseWithoutQuery.replace(/\.[a-z0-9]+$/i, `.${ext}`);



        try {



          const imgData = await fetchImageBuffer(candidateNoQuery);



          if (imgData) return { ...imgData, finalUrl: candidateNoQuery };



        } catch (e) {}



      }



    }



  }







  if (allowFallback && fallbackPreviewUrl && fallbackPreviewUrl !== normalizedUrl) {



    try {



      const imgData = await fetchImageBuffer(fallbackPreviewUrl);



      if (imgData) return { ...imgData, finalUrl: fallbackPreviewUrl };



    } catch (e) {}



  }



  return null;



}







// [gelbooru-v1] Оригиналы Gelbooru с обязательным Referer.



async function fetchGelbooruImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];







  const add = (value) => {



    if (!value) return;



    try {



      const u = new URL(value, 'https://gelbooru.com/');



      u.protocol = 'https:';



      u.hash = '';







      if (!/^img\d+\.gelbooru\.com$/i.test(u.hostname)) return;







      let target = u.href



        .replace(/\/thumbnails\//i, '/images/')



        .replace(/\/samples\//i, '/images/')



        .replace(/\/thumbnail_/i, '/')



        .replace(/\/sample_/i, '/')



        .replace(/\/{2,}(?=images\/|samples\/|thumbnails\/)/i, '/');







      if (!/\/(?:images|videos|video|media)\//i.test(target) &&



          !/\.(?:jpe?g|png|gif|webp|webm|mp4)(?:[?#]|$)/i.test(target)) {



        return;



      }







      candidates.push(target);



    } catch (e) {}



  };







  add(url);



  if (allowFallback) add(fallbackPreviewUrl);







  const expanded = [];



  for (const candidate of candidates) {



    expanded.push(candidate);







    const clean = candidate.split('?')[0].split('#')[0];



    const match = clean.match(/\.([a-z0-9]+)$/i);



    if (!match) continue;







    const currentExt = match[1].toLowerCase();



    for (const ext of ['jpeg', 'jpg', 'png', 'gif', 'webp']) {



      if (ext === currentExt) continue;



      expanded.push(clean.replace(/\.[a-z0-9]+$/i, `.${ext}`));



    }



  }







  for (const candidate of [...new Set(expanded)]) {



    try {



      const mediaData = await fetchImageBuffer(candidate, 'https://gelbooru.com/');



      if (mediaData) return { ...mediaData, finalUrl: candidate };



    } catch (e) {}



  }







  return null;



}







async function fetchPttWebImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/i\.imgur\.com\/[A-Za-z0-9_-]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) {



        arr.push(u.href.replace(/^http:\/\//i, 'https://'));



      }



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    try { const d = await fetchImageBuffer(x); if (d) return { ...d, finalUrl: x }; } catch (e) {}



  }



  return null;



}







async function fetchWykopImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (!/^https?:\/\/(?:www\.)?wykop\.pl\/cdn\/[^?#]+\/[^?#,]+(?:,[^?#]+)?\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) return;



      const clean = u.href;



      const base = clean.replace(/,(?:w\d+(?:h\d+)?|q\d+|q\d+,w\d+(?:h\d+)?)(?=\.[a-z0-9]+(?:[?#]|$))/i, '');



      arr.push(base, clean);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    try { const d = await fetchImageBuffer(x); if (d) return { ...d, finalUrl: x }; } catch (e) {}



  }



  return null;



}







async function fetchDoujinHibikiImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?doujinhibiki\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    try { const d = await fetchImageBuffer(x); if (d) return { ...d, finalUrl: x }; } catch (e) {}



  }



  return null;



}







async function fetchNijifanImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?nijifan\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    try { const d = await fetchImageBuffer(x); if (d) return { ...d, finalUrl: x }; } catch (e) {}



  }



  return null;



}







async function fetchMoeimgImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?moeimg\.net\/wp-content\/uploads\/archives23\/\d+\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    try { const d = await fetchImageBuffer(x); if (d) return { ...d, finalUrl: x }; } catch (e) {}



  }



  return null;



}







async function fetchWpArticleImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (!/^https?:\/\/(?:www\.)?(?:situero\.com|loveliveforever\.com|nukigazo\.com)\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)(?:\.webp)?$/i.test(u.href)) return;



      const q = u.href;



      if (/\.(?:jpg|jpeg|png|gif)\.webp$/i.test(q)) arr.push(q.replace(/\.webp$/i, ''));



      arr.push(q);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    try { const d = await fetchImageBuffer(x); if (d) return { ...d, finalUrl: x }; } catch (e) {}



  }



  return null;



}







async function fetchComicharaImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?comichara\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







async function fetchHentaiAnimeAIImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?hentaianime-ai\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







async function fetchKyaraBetsuNijieroImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?kyarabetsunijiero\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







async function fetchEromanIDCImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?eromanidc\.com\/wp-content\/uploads\/chara\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







async function fetchKimootokoImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?kimootoko\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







async function fetchIchinukeImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?ichinuke\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href.replace(/-(?:\d+x\d+|scaled)(?=\.[a-z0-9]+$)/i, ''));



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







async function fetchErokanImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?erokan\.net\/wp\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href) || /^https?:\/\/img\.erokan\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







async function fetchVanillaRockImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?vanilla-rock\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);



  for (const x of [...new Set(arr)]) {



    const d = await fetchImageBuffer(x);



    if (d) return { ...d, finalUrl: x };



  }



  return null;



}







// [hadasirori-v1] Максимальное качество для hadasirori.blog.jp.



// Сайт отдаёт в <img> уменьшенные *-s.* варианты, а ссылка вокруг картинки указывает



// на полный файл. Здесь приоритет у полного livedoor.blogimg.jp URL.



async function fetchHadasiroriImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];







  const add = (value) => {



    if (!value) return;



    try {



      const u = new URL(value);



      let target = u.href;







      if (/^resize\.blogsys\.jp$/i.test(u.hostname)) {



        const embedded = target.match(/(https?:\/\/livedoor\.blogimg\.jp\/iegamon\/imgs\/[^?#]+)/i);



        if (embedded) target = embedded[1];



      }







      const t = new URL(target);



      if (!/^livedoor\.blogimg\.jp$/i.test(t.hostname)) return;



      if (!/^\/iegamon\/imgs\/[0-9a-f]\/([0-9a-f])\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(t.pathname)) return;







      t.protocol = 'https:';



      t.search = '';



      t.hash = '';



      const original = t.href.replace(/-(?:s|m|l)(?=\.[a-z0-9]+$)/i, '');



      candidates.push(original);



      candidates.push(t.href);



    } catch (e) {}



  };







  add(url);



  if (allowFallback) add(fallbackPreviewUrl);







  for (const candidate of [...new Set(candidates)]) {



    try {



      const imgData = await fetchImageBuffer(candidate, 'https://hadasirori.blog.jp/');



      if (imgData) return { ...imgData, finalUrl: candidate };



    } catch (e) {}



  }



  return null;



}







// [nijityeki-v1] Максимальное качество для nijityeki.blog.jp (livedoor).



async function fetchNijityekiImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];







  const add = (value) => {



    if (!value) return;



    try {



      const u = new URL(value);



      let target = u.href;







      if (/^resize\.blogsys\.jp$/i.test(u.hostname)) {



        const embedded = target.match(/(https?:\/\/livedoor\.blogimg\.jp\/nijityeki\/imgs\/[^?#]+)/i);



        if (embedded) target = embedded[1];



      }







      const t = new URL(target);



      if (!/^livedoor\.blogimg\.jp$/i.test(t.hostname)) return;



      if (!/^\/nijityeki\/imgs\/[0-9a-f]\/([0-9a-f])\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(t.pathname)) return;







      t.protocol = 'https:';



      t.search = '';



      t.hash = '';



      const original = t.href.replace(/-(?:s|m|l)(?=\.[a-z0-9]+$)/i, '');



      candidates.push(original);



      candidates.push(t.href);



    } catch (e) {}



  };







  add(url);



  if (allowFallback) add(fallbackPreviewUrl);







  for (const candidate of [...new Set(candidates)]) {



    try {



      const imgData = await fetchImageBuffer(candidate, 'https://nijityeki.blog.jp/');



      if (imgData) return { ...imgData, finalUrl: candidate };



    } catch (e) {}



  }



  return null;



}







// Очистка суффиксов для японских блогов



async function fetchCleanBlogImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = v => {



    if (!v) return;



    try {



      const u = new URL(v);



      const clean = u.href.replace(/-\d+x\d+(?=\.[a-z0-9]+$)/i, '').replace(/-(?:scaled|thumbnail)(?=\.[a-z0-9]+$)/i, '');



      if (/\.(?:jpg|jpeg|png|gif)\.webp$/i.test(clean)) {



        arr.push(clean.replace(/\.webp$/i, ''));



      }



      arr.push(clean);



      arr.push(u.href);



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);







  let referer = null;



  try {



    const origin = new URL(url).origin;



    if (origin.includes('hentai-witch.com') || origin.includes('femmedoll.jp') || origin.includes('nijieroarchive.com')) {



      referer = origin + '/';



    }



  } catch (e) {}







  for (const x of [...new Set(arr)]) {



    try {



      const d = await fetchImageBuffer(x, referer);



      if (d) return { ...d, finalUrl: x };



    } catch (e) {}



  }



  return null;



}







// [bsky-download-fix-v4]



// Bluesky CDN: не делаем fetch() из service worker перед загрузкой.



// Прямой Downloads API обходят проблему CORS/сетевого fetch service worker.



// [poipiku-download-fix-v3]
// POIPIKU thumbnail -> original:
//   .../013467935_gwthbYcvX.png_640.jpg -> .../013467935_gwthbYcvX.png
//   .../013467935_gwthbYcvX.png_360.jpg -> .../013467935_gwthbYcvX.png
//
// Не делаем обязательный fetch перед Downloads API: CDN может отдавать
// изображение странице, но отклонять предварительный extension-fetch.
async function fetchPoipikuImage(url, fallbackPreviewUrl, allowFallback) {
  const candidates = [];
  const seen = new Set();

  const add = (value, isPreview = false) => {
    if (!value || typeof value !== 'string') return;
    try {
      const u = new URL(value, 'https://poipiku.com/');
      if (u.hostname !== 'cdn.poipiku.com') return;
      if (!/^\/\d{9}\/[^?#]+$/i.test(u.pathname)) return;

      const file = u.pathname.split('/').pop() || '';
      if (/^(?:profile|default_user|logo|banner|apple-|poipiku_icon|warning)\b/i.test(file)) return;

      // По предоставленному HTML: original.ext_640.jpg / original.ext_360.jpg.
      const originalPath = u.pathname.replace(
        /_(?:640|360|480|720|1000|1200|1600|2400)\.jpg$/i,
        ''
      );

      if (!/\.(?:jpe?g|png|gif|webp|avif)$/i.test(originalPath)) {
        if (!/\.(?:jpe?g|png|gif|webp|avif)(?:[?#]|$)/i.test(u.pathname)) return;
      }

      u.pathname = isPreview ? u.pathname : originalPath;

      // Если POIPIKU уже выдал signed URL, сохраняем Expires/Signature/
      // Key-Pair-Id/Policy. Только несвязанные query-параметры очищаем.
      const poipikuSigned = [
        'Expires',
        'Signature',
        'Key-Pair-Id',
        'Policy'
      ].some(name => u.searchParams.has(name));

      if (!poipikuSigned) u.search = '';
      u.hash = '';

      const normalized = u.href;
      if (seen.has(normalized)) return;
      seen.add(normalized);
      candidates.push({ url: normalized, isPreview });
    } catch (_) {}
  };

  // В очередь сначала попадает именно оригинал.
  add(url, false);
  if (allowFallback) add(fallbackPreviewUrl, true);

  const original = candidates.find(item => !item.isPreview)?.url || '';
  if (original) {
    return { finalUrl: original, directDownload: true, contentType: '' };
  }

  const preview = candidates.find(item => item.isPreview)?.url || '';
  return preview ? { finalUrl: preview, directDownload: true, contentType: '' } : null;
}



// [ehentai-support-v1] Content script resolves the original URL. Background
// only validates its host and starts a direct Downloads API operation.
async function fetchEHentaiImageLegacy(url, fallbackPreviewUrl, allowFallback) {
  if (!url || !/^https?:\/\//i.test(url)) return null;

  try {
    const u = new URL(url);
    if (!/(^|\.)e-hentai\.org$/i.test(u.hostname) &&
        !/(^|\.)ehgt\.org$/i.test(u.hostname) &&
        !/(^|\.)hath\.network$/i.test(u.hostname)) {
      return null;
    }

    return {
      finalUrl: u.href,
      directDownload: true,
      contentType: ''
    };
  } catch (_) {
    return null;
  }
}


// [ehentai-background-original-v2]
// E-Hentai: /s/... страница используется только как locator.
// Оригинал берём из ссылки /fullimg/... на этой странице.
const ehentaiBackgroundOriginalCache = new Map();
const ehentaiBackgroundOriginalPending = new Map();

function ehentaiBackgroundNormalizeUrl(value, baseUrl = 'https://e-hentai.org/') {
  try {
    const u = new URL(String(value || ''), baseUrl);
    if (!/^https?:$/i.test(u.protocol)) return '';
    return u.href.replace(/&amp;/g, '&');
  } catch (_) {
    return '';
  }
}

function ehentaiBackgroundIsViewerUrl(value) {
  try {
    const u = new URL(String(value || ''), 'https://e-hentai.org/');
    return /(^|\.)e-hentai\.org$/i.test(u.hostname) &&
      /^\/s\/[a-f0-9]{8,12}\/\d+-\d+(?:\/\d+-\d+)?\/?$/i.test(u.pathname);
  } catch (_) {
    return false;
  }
}

function ehentaiBackgroundIsOriginalUrl(value) {
  try {
    const u = new URL(String(value || ''), 'https://e-hentai.org/');
    return /(^|\.)e-hentai\.org$/i.test(u.hostname) &&
      /^\/fullimg\/(?:\d+)\/(?:\d+)\/[^/]+\/[^/?#]+$/i.test(u.pathname);
  } catch (_) {
    return false;
  }
}

function ehentaiBackgroundExtractOriginal(html, baseUrl) {
  if (!html) return '';

  // Service Worker-safe: DOMParser is not available here.
  const source = String(html)
    .replace(/&amp;/g, '&')
    .replace(/\\u0026/gi, '&');

  const patterns = [
    /<a\b[^>]*href=["']([^"']*\/fullimg\/[^"']+)["'][^>]*>[\s\S]*?<\/a>/i,
    /href=["'](https?:\/\/(?:www\.)?e-hentai\.org\/fullimg\/[^"']+)["']/i,
    /href=["'](\/fullimg\/[^"']+)["']/i
  ];

  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (!match?.[1]) continue;

    const href = ehentaiBackgroundNormalizeUrl(
      match[1],
      baseUrl
    );

    if (ehentaiBackgroundIsOriginalUrl(href)) {
      return href;
    }
  }

  return '';
}

async function ehentaiBackgroundResolveOriginal(viewerOrOriginal) {
  const raw = String(viewerOrOriginal || '').trim();
  if (!raw) return '';

  const normalized = ehentaiBackgroundNormalizeUrl(raw);
  if (!normalized) return '';

  if (ehentaiBackgroundIsOriginalUrl(normalized)) {
    return normalized;
  }

  if (!ehentaiBackgroundIsViewerUrl(normalized)) {
    return '';
  }

  if (ehentaiBackgroundOriginalCache.has(normalized)) {
    return ehentaiBackgroundOriginalCache.get(normalized);
  }

  if (ehentaiBackgroundOriginalPending.has(normalized)) {
    return ehentaiBackgroundOriginalPending.get(normalized);
  }

  const promise = (async () => {
    try {
      const response = await fetch(normalized, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store',
        redirect: 'follow',
        headers: {
          'Accept': 'text/html,application/xhtml+xml'
        }
      });

      if (!response.ok) return '';

      const html = await response.text();
      if (!html) return '';

      return ehentaiBackgroundExtractOriginal(
        html,
        normalized
      );
    } catch (_) {
      return '';
    }
  })()
    .then(url => {
      if (url) {
        ehentaiBackgroundOriginalCache.set(
          normalized,
          url
        );
      }
      return url;
    })
    .finally(() => {
      ehentaiBackgroundOriginalPending.delete(
        normalized
      );
    });

  ehentaiBackgroundOriginalPending.set(
    normalized,
    promise
  );

  return promise;
}

async function ehentaiBackgroundFetchOriginalBytes(originalUrl) {
  const url = ehentaiBackgroundNormalizeUrl(originalUrl);
  if (!ehentaiBackgroundIsOriginalUrl(url)) return null;

  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-store',
      redirect: 'follow',
      headers: {
        'Referer': 'https://e-hentai.org/'
      }
    });

    if (!response.ok) return null;

    const contentType = (
      response.headers.get('content-type') || ''
    ).toLowerCase();

    if (
      /text\/html|application\/(?:xhtml|xml)|text\/xml/i.test(
        contentType
      )
    ) {
      return null;
    }

    const buffer = await response.arrayBuffer();
    if (!buffer || buffer.byteLength < 101) return null;

    // Дополнительная защита от AccessDenied/XML/HTML ответов.
    try {
      const head = new TextDecoder('utf-8', {
        fatal: false
      })
        .decode(
          new Uint8Array(
            buffer.slice(0, 512)
          )
        )
        .trimStart()
        .toLowerCase();

      if (
        head.startsWith('<!doctype html') ||
        head.startsWith('<html') ||
        head.startsWith('<?xml') ||
        head.startsWith('<error') ||
        head.includes('<accessdenied') ||
        head.includes('<nosuchkey')
      ) {
        return null;
      }
    } catch (_) {}

    return {
      buffer,
      contentType
    };
  } catch (_) {
    return null;
  }
}

async function fetchEHentaiImage(url, fallbackPreviewUrl, allowFallback) {
  const raw = String(url || '').trim();
  if (!raw) return null;

  let originalUrl = '';

  try {
    originalUrl = await ehentaiBackgroundResolveOriginal(raw);
  } catch (_) {
    originalUrl = '';
  }

  // content.js can already pass a resolved /fullimg/ URL.
  if (!originalUrl) {
    try {
      const direct = ehentaiBackgroundNormalizeUrl(raw);
      if (ehentaiBackgroundIsOriginalUrl(direct)) {
        originalUrl = direct;
      }
    } catch (_) {}
  }

  if (!originalUrl || !ehentaiBackgroundIsOriginalUrl(originalUrl)) {
    return null;
  }

  // Do NOT fetch the bytes in the Service Worker here. The existing
  // batch handler will pass this URL to chrome.downloads.download().
  // The extension already sets the E-Hentai Referer with DNR.
  return {
    finalUrl: originalUrl,
    directDownload: true,
    contentType: 'image/jpeg'
  };
}

async function fetchBlueskyImage(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];



  const seen = new Set();







  const add = (value) => {



    if (!value || typeof value !== 'string') return;



    try {



      const u = new URL(value, 'https://bsky.app/');



      if (u.hostname !== 'cdn.bsky.app') return;



      if (!/^\/img\/(?:feed_fullsize|feed_thumbnail|feed_small)\/plain\/did:[^/]+\/[^/?#]+$/i.test(u.pathname)) return;







      u.pathname = u.pathname



        .replace('/feed_thumbnail/', '/feed_fullsize/')



        .replace('/feed_small/', '/feed_fullsize/');



      u.search = '';



      u.hash = '';







      if (seen.has(u.href)) return;



      seen.add(u.href);



      candidates.push(u.href);



    } catch (_) {}



  };







  add(url);



  if (allowFallback) add(fallbackPreviewUrl);







  const direct = candidates[0] || '';



  if (!direct) return null;







  return {



    finalUrl: direct,



    directDownload: true,



    contentType: ''



  };



}







async function fetchGeneralImage(url, fallbackPreviewUrl, allowFallback) {



  try {



    const imgData = await fetchImageBuffer(url);



    if (imgData) return { ...imgData, finalUrl: url };



  } catch (e) {}







  if (/\.jpe?g$/i.test(url)) {



    try {



      const pngUrl = url.replace(/\.jpe?g$/i, '.png');



      const imgData = await fetchImageBuffer(pngUrl);



      if (imgData) return { ...imgData, finalUrl: pngUrl };



    } catch (e) {}



  }







  if (allowFallback && fallbackPreviewUrl && fallbackPreviewUrl !== url) {



    try {



      const imgData = await fetchImageBuffer(fallbackPreviewUrl);



      if (imgData) return { ...imgData, finalUrl: fallbackPreviewUrl };



    } catch (e) {}



  }



  return null;



}







// Scrolller: подбор максимального качества (PNG оригинал, fallback к полноразмерному JPG/WEBP/MP4)



// m4ex.com: загрузка оригиналов без лишнего кеширования и с проверкой зеркал



async function fetchM4exImage(url, fallbackPreviewUrl, allowFallback) {



  const arr = [];



  const add = (v) => {



    if (!v) return;



    try {



      const u = new URL(v);



      if (/^https?:\/\/(?:www\.)?(?:m4ex\.com|m4ex\.net)\/m4ex_box\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.href)) {



        arr.push(u.href);



      }



    } catch (e) {}



  };



  add(url);



  if (allowFallback) add(fallbackPreviewUrl);







  for (const x of [...new Set(arr)]) {



    try {



      const d = await fetchImageBuffer(x, 'http://m4ex.com/');



      if (d) return { ...d, finalUrl: x };



    } catch (e) {}



  }



  return null;



}







async function fetchScrolllerMedia(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];



  const clean = url.split('?')[0].split('#')[0];



  const isVideo = clean.endsWith('.mp4') || clean.endsWith('.webm') || clean.includes('/video_') || clean.includes('/preview_');







  if (isVideo) {



    let vid = url;



    if (vid.includes('images.scrolller.com/helios/')) vid = vid.replace('images.scrolller.com/helios/', 'helios.scrolller.com/');



    if (vid.includes('/preview_')) candidates.push(vid.replace('/preview_', '/video_'));



    if (vid.includes('/thumb_')) candidates.push(vid.replace('/thumb_', '/video_').replace(/\.(jpe?g|webp|png)$/i, '.mp4'));



    candidates.push(vid);



    if (allowFallback && fallbackPreviewUrl) candidates.push(fallbackPreviewUrl);







    for (const c of [...new Set(candidates)]) {



      try {



        const headRes = await fetch(c, { method: 'HEAD', headers: { Referer: 'https://scrolller.com/' } });



        if (headRes.ok) {



          const ct = String(headRes.headers.get('content-type') || '').toLowerCase();



          if (/^video\//i.test(ct) || (!ct && /\.(?:mp4|webm|mov)(?:[?#]|$)/i.test(c))) {
            return { finalUrl: c, contentType: ct || 'video/mp4' };
          }
          continue;



        }



      } catch (e) {}



    }



    return null;



  }







  // Очищаем URL от ресайз-суффиксов (например, -722x1600)



  const withoutDim = clean.replace(/-\d+x\d+(?=\.[a-z0-9]+$)/i, '');



  const baseWithoutExt = withoutDim.replace(/\.[a-z0-9]+$/i, '');







  // Проверяем исходный PNG (часто оригиналы на Scrolller заливаются в PNG),



  // затем оригинальный полноразмерный JPG/JPEG/WEBP



  candidates.push(`${baseWithoutExt}.png`);



  candidates.push(`${baseWithoutExt}.jpg`);



  candidates.push(`${baseWithoutExt}.jpeg`);



  candidates.push(`${baseWithoutExt}.webp`);



  candidates.push(withoutDim);



  candidates.push(url);



  if (allowFallback && fallbackPreviewUrl) candidates.push(fallbackPreviewUrl);







  for (const c of [...new Set(candidates)]) {



    try {



      const imgData = await fetchImageBuffer(c, 'https://scrolller.com/');



      if (imgData) return { ...imgData, finalUrl: c };



    } catch (e) {}



  }



  return null;



}











// Truyen-Hentai: загрузка оригиналов максимального качества



async function fetchTruyenHentaiMedia(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];



  const add = (u) => {



    if (!u) return;



    try {



      const absolute = new URL(u, 'https://www.truyen-hentai.com/').href;



      candidates.push(absolute);



    } catch (e) {}



  };







  add(url);







  const clean = url.split('?')[0].split('#')[0];



  if (clean.includes('i.redd.it') || clean.includes('preview.redd.it')) {



    const directReddit = clean.replace('preview.redd.it', 'i.redd.it');



    candidates.unshift(directReddit);



    const m = directReddit.match(/\.([a-z0-9]+)$/i);



    if (m) {



      const curExt = m[1].toLowerCase();



      for (const ext of ['png', 'jpg', 'jpeg', 'gif', 'webp']) {



        if (ext !== curExt) {



          candidates.push(directReddit.replace(/\.[a-z0-9]+$/i, `.${ext}`));



        }



      }



    }



  }







  if (clean.includes('imgur.com')) {



    const imgurOrig = clean.replace(/i\.imgur\.com\/([a-zA-Z0-9]+)[lsmbh]\./i, 'i.imgur.com/$1.');



    candidates.unshift(imgurOrig);



  }







  if (allowFallback) {



    add(fallbackPreviewUrl);



  }







  const uniqueCandidates = [...new Set(candidates)];



  for (const c of uniqueCandidates) {



    let referer = 'https://www.truyen-hentai.com/';



    if (c.includes('redd.it')) referer = 'https://www.reddit.com/';



    else if (c.includes('imgur.com')) referer = 'https://imgur.com/';







    try {



      const imgData = await fetchImageBuffer(c, referer);



      if (imgData) return { ...imgData, finalUrl: c };



    } catch (e) {}



  }







  return null;



}











// [yandere-v1] Скачивание оригиналов максимального разрешения с yande.re



async function fetchYandereImage(url, fallbackPreviewUrl, allowFallback) {



  try {



    const imgData = await fetchImageBuffer(url, 'https://yande.re/');



    if (imgData) return { ...imgData, finalUrl: url };



  } catch (e) {}







  if (url.includes('/jpeg/')) {



    const pngCandidate = url.replace('/jpeg/', '/image/').replace(/\.jpg$/i, '.png');



    try {



      const imgData = await fetchImageBuffer(pngCandidate, 'https://yande.re/');



      if (imgData) return { ...imgData, finalUrl: pngCandidate };



    } catch (e) {}



  }







  if (allowFallback && fallbackPreviewUrl && fallbackPreviewUrl !== url) {



    try {



      const imgData = await fetchImageBuffer(fallbackPreviewUrl, 'https://yande.re/');



      if (imgData) return { ...imgData, finalUrl: fallbackPreviewUrl };



    } catch (e) {}



  }



  return null;



}







// [zerochan-v1] Загрузка оригиналов с zerochan.net с обходом Referer



async function fetchZerochanPostOriginalBackground(postId) {



  const id = String(postId || '').match(/\d{5,9}/)?.[0] || '';



  if (!id) return null;







  try {



    const res = await fetch(`https://www.zerochan.net/${id}?json`, {



      headers: { 'Accept': 'application/json' },



      credentials: 'omit'



    });



    if (res.ok) {



      const data = await res.json();



      const direct = data?.full || data?.original || data?.contentUrl;



      if (typeof direct === 'string' && /^https?:\/\/static\.zerochan\.net\//i.test(direct)) {



        return direct;



      }



    }



  } catch (e) {}







  try {



    const res = await fetch(`https://www.zerochan.net/${id}`, { credentials: 'omit' });



    if (res.ok) {



      const html = await res.text();



      const candidates = [



        html.match(/<a[^>]*class=["'][^"']*\bpreview\b[^"']*["'][^>]*href=["']([^"']+)["']/i)?.[1],



        html.match(/fullsizeUrl\s*=\s*["']([^"']+)["']/i)?.[1],



        html.match(/"contentUrl"\s*:\s*"([^"]+)"/i)?.[1],



        html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1]



      ];



      for (const direct of candidates) {



        if (typeof direct === 'string' && /^https?:\/\/static\.zerochan\.net\//i.test(direct)) {



          return direct;



        }



      }



    }



  } catch (e) {}







  return null;



}







async function fetchZerochanMedia(url, fallbackPreviewUrl, allowFallback) {



  const candidates = [];



  const seen = new Set();



  const add = (value) => {



    if (!value || typeof value !== 'string') return;



    const candidate = value.trim();



    if (!candidate || seen.has(candidate)) return;



    seen.add(candidate);



    candidates.push(candidate);



  };







  const raw = String(url || '').trim();



  const synthetic = raw.match(/^zc_(\d{5,9})$/i);



  if (synthetic) {



    const original = await fetchZerochanPostOriginalBackground(synthetic[1]);



    if (original) add(original);



  } else {



    add(raw);



    const pageId = raw.match(/^https?:\/\/(?:www\.)?zerochan\.net\/(?:full\/)?(\d{5,9})(?:[?#]|$)/i);



    if (pageId) {



      const original = await fetchZerochanPostOriginalBackground(pageId[1]);



      if (original) add(original);



    }



  }







  if (allowFallback) add(fallbackPreviewUrl);







  for (const candidate of candidates) {



    try {



      const imgData = await fetchImageBuffer(candidate, 'https://www.zerochan.net/');



      if (imgData) return { ...imgData, finalUrl: candidate };



    } catch (e) {}



  }



  return null;



}











// [zip-ui-settings-v1]



// ZIP batch implementation. Uses ZIP "store" mode (no compression), which is



// appropriate for already-compressed images/video and keeps CPU use reasonable.



function zipU32(v) {



  return v >>> 0;



}







function zipCrc32(bytes) {



  if (!zipCrc32.table) {



    const table = new Uint32Array(256);



    for (let n = 0; n < 256; n++) {



      let c = n;



      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);



      table[n] = c >>> 0;



    }



    zipCrc32.table = table;



  }



  let crc = 0xFFFFFFFF;



  const table = zipCrc32.table;



  for (let i = 0; i < bytes.length; i++) crc = table[(crc ^ bytes[i]) & 0xFF] ^ (crc >>> 8);



  return (crc ^ 0xFFFFFFFF) >>> 0;



}







function zipWriteU16(out, off, v) {



  out[off] = v & 0xFF;



  out[off + 1] = (v >>> 8) & 0xFF;



}







function zipWriteU32(out, off, v) {



  out[off] = v & 0xFF;



  out[off + 1] = (v >>> 8) & 0xFF;



  out[off + 2] = (v >>> 16) & 0xFF;



  out[off + 3] = (v >>> 24) & 0xFF;



}







function zipDosDateTime(date = new Date()) {



  const year = Math.max(1980, date.getFullYear());



  const time = ((date.getHours() & 31) << 11) |



               ((date.getMinutes() & 63) << 5) |



               Math.floor(date.getSeconds() / 2);



  const day = ((date.getDate() || 1) & 31);



  const month = ((date.getMonth() + 1) & 15);



  const dosDate = (((year - 1980) & 127) << 9) | (month << 5) | day;



  return { time, date: dosDate };



}







function zipUtf8(value) {



  return new TextEncoder().encode(String(value || 'file'));



}







function zipSafeName(value, fallback = 'file') {



  let name = String(value || '')



    .normalize('NFKC')



    .replace(/[\u0000-\u001F\u007F]/g, '_')



    .replace(/[\\/:*?"<>|]/g, '_')



    .replace(/[. ]+$/g, '')



    .trim();



  return (name || fallback).slice(0, 180);



}







function zipInferFileName(item, url, contentType, index) {



  const kind = String(item?.kind || (item?.isVideo ? 'video' : item?.isAudio ? 'audio' : 'image')).toLowerCase();







  if (item?.fileName) {



    let n = zipSafeName(item.fileName, `media_${index + 1}`);



    if (!/\.[a-z0-9]{2,6}$/i.test(n)) {



      const ext = contentType?.includes('png') ? '.png' :



                  contentType?.includes('gif') ? '.gif' :



                  contentType?.includes('webp') ? '.webp' :



                  contentType?.includes('avif') ? '.avif' :



                  contentType?.includes('webm') ? '.webm' :



                  contentType?.includes('mp4') ? '.mp4' :



                  kind === 'video' ? '.mp4' : '.jpg';



      n += ext;



    }



    return n;



  }







  if (typeof url === 'string' && /\/img\/feed_(?:fullsize|thumbnail|small)\/plain\/did:[^/]+\/([^/@?#]+)(?:@([a-z0-9.+-]+))?$/i.test(url)) {



    const m = url.match(/\/img\/feed_(?:fullsize|thumbnail|small)\/plain\/did:[^/]+\/([^/@?#]+)(?:@([a-z0-9.+-]+))?$/i);



    const extMap = { jpeg: '.jpg', jpg: '.jpg', png: '.png', webp: '.webp', gif: '.gif', avif: '.avif' };



    const ext = m[2] ? (extMap[String(m[2]).toLowerCase()] || `.${String(m[2]).toLowerCase()}`) : '';



    return zipSafeName(`${m[1]}${ext}`, `bsky_${index + 1}`);



  }







  try {



    const u = new URL(url);



    const raw = decodeURIComponent(u.pathname.split('/').pop() || '');



    const n = zipSafeName(raw, `media_${index + 1}`);



    if (/\.[a-z0-9]{2,6}$/i.test(n)) return n;



  } catch (_) {}







  const ext = contentType?.includes('png') ? '.png' :



              contentType?.includes('gif') ? '.gif' :



              contentType?.includes('webp') ? '.webp' :



              contentType?.includes('avif') ? '.avif' :



              contentType?.includes('webm') ? '.webm' :



              contentType?.includes('mp4') ? '.mp4' :



              kind === 'video' ? '.mp4' : '.jpg';



  return `media_${index + 1}${ext}`;



}







function zipUniqueName(name, used) {



  const clean = zipSafeName(name, 'file');



  if (!used.has(clean.toLowerCase())) {



    used.add(clean.toLowerCase());



    return clean;



  }



  const dot = clean.lastIndexOf('.');



  const stem = dot > 0 ? clean.slice(0, dot) : clean;



  const ext = dot > 0 ? clean.slice(dot) : '';



  let i = 2;



  while (used.has(`${stem}_${i}${ext}`.toLowerCase())) i++;



  const unique = `${stem}_${i}${ext}`;



  used.add(unique.toLowerCase());



  return unique;



}







async function fetchZipBytesInTab(tabId, url) {



  if (!tabId || !url) return { ok: false, error: 'tab/url unavailable' };



  try {



    const result = await chrome.scripting.executeScript({



      target: { tabId },



      world: 'MAIN',



      func: async (targetUrl) => {



        try {



          const response = await fetch(targetUrl, {



            credentials: 'include',



            cache: 'no-store',



            redirect: 'follow'



          });



          if (!response.ok) return { ok: false, error: `HTTP ${response.status}` };



          const contentType = (response.headers.get('content-type') || '').toLowerCase();



          if (/text\/html|application\/(?:xhtml|xml)/i.test(contentType)) {



            return { ok: false, error: `Unexpected content-type: ${contentType}` };



          }



          const MAX_ITEM_BYTES = 100 * 1024 * 1024;



          const buffer = await response.arrayBuffer();



          if (!buffer || buffer.byteLength < 1) return { ok: false, error: 'empty response' };



          if (buffer.byteLength > MAX_ITEM_BYTES) return { ok: false, error: 'item is larger than 100 MB' };



          return { ok: true, buffer, contentType, finalUrl: response.url || targetUrl };



        } catch (e) {



          return { ok: false, error: String(e?.message || e) };



        }



      },



      args: [url]



    });



    return result?.[0]?.result || { ok: false, error: 'No result from page fetch' };



  } catch (e) {



    return { ok: false, error: String(e?.message || e) };



  }



}







function zipMakeArchive(entries) {



  const chunks = [];



  const central = [];



  let offset = 0;



  const stamp = zipDosDateTime();







  for (const entry of entries) {



    const nameBytes = zipUtf8(entry.name);



    const data = entry.bytes;



    const crc = zipCrc32(data);



    const local = new Uint8Array(30 + nameBytes.length);



    zipWriteU32(local, 0, 0x04034B50);



    zipWriteU16(local, 4, 20);



    zipWriteU16(local, 6, 0x0800);



    zipWriteU16(local, 8, 0);



    zipWriteU16(local, 10, stamp.time);



    zipWriteU16(local, 12, stamp.date);



    zipWriteU32(local, 14, crc);



    zipWriteU32(local, 18, zipU32(data.length));



    zipWriteU32(local, 22, zipU32(data.length));



    zipWriteU16(local, 26, nameBytes.length);



    zipWriteU16(local, 28, 0);



    local.set(nameBytes, 30);



    chunks.push(local, data);



    central.push({ nameBytes, crc, size: data.length, offset });



    offset += local.length + data.length;



  }







  const centralChunks = [];



  let centralSize = 0;



  for (const entry of central) {



    const c = new Uint8Array(46 + entry.nameBytes.length);



    zipWriteU32(c, 0, 0x02014B50);



    zipWriteU16(c, 4, 20);



    zipWriteU16(c, 6, 20);



    zipWriteU16(c, 8, 0x0800);



    zipWriteU16(c, 10, 0);



    zipWriteU16(c, 12, stamp.time);



    zipWriteU16(c, 14, stamp.date);



    zipWriteU32(c, 16, entry.crc);



    zipWriteU32(c, 20, zipU32(entry.size));



    zipWriteU32(c, 24, zipU32(entry.size));



    zipWriteU16(c, 28, entry.nameBytes.length);



    zipWriteU16(c, 30, 0);



    zipWriteU16(c, 32, 0);



    zipWriteU16(c, 34, 0);



    zipWriteU16(c, 36, 0);



    zipWriteU32(c, 38, 0);



    zipWriteU32(c, 42, zipU32(entry.offset));



    c.set(entry.nameBytes, 46);



    centralChunks.push(c);



    centralSize += c.length;



  }







  const end = new Uint8Array(22);



  zipWriteU32(end, 0, 0x06054B50);



  zipWriteU16(end, 4, 0);



  zipWriteU16(end, 6, 0);



  zipWriteU16(end, 8, central.length);



  zipWriteU16(end, 10, central.length);



  zipWriteU32(end, 12, zipU32(centralSize));



  zipWriteU32(end, 16, zipU32(offset));



  zipWriteU16(end, 20, 0);







  const total = offset + centralSize + end.length;



  const out = new Uint8Array(total);



  let pos = 0;



  for (const chunk of chunks) { out.set(chunk, pos); pos += chunk.length; }



  for (const chunk of centralChunks) { out.set(chunk, pos); pos += chunk.length; }



  out.set(end, pos);



  return out;



}







function zipBytesToDataUrl(bytes) {



  let binary = '';



  const chunkSize = 0x8000;



  for (let i = 0; i < bytes.length; i += chunkSize) {



    binary += String.fromCharCode(...bytes.subarray(i, Math.min(i + chunkSize, bytes.length)));



  }



  return `data:application/zip;base64,${btoa(binary)}`;



}







function zipCleanPart(value, fallback = 'General') {



  return zipSafeName(value, fallback).slice(0, 80);



}







async function handleZipBatchDownload({ items, folderName, saveToHistory, allowFallback, site }, tabId) {



  const list = Array.isArray(items) ? items : [];



  if (!list.length) return;







  const storageKey = `downloaded_${site}`;



  const downloadedData = await chrome.storage.local.get([storageKey, `history_meta_${site}`]);



  const downloadedSet = new Set(downloadedData[storageKey] || []);



  const historyMeta = downloadedData[`history_meta_${site}`] || {};



  const entries = [];



  const usedNames = new Set();
  const zipSeenIdentities = new Set();



  const MAX_ZIP_BYTES = 750 * 1024 * 1024;



  let totalBytes = 0;







  for (let i = 0; i < list.length; i++) {



    const item = list[i] || {};
    const zipKey = String(item.key || '');
    uasSetDownloadState(zipKey, 'queued', { site, current: i + 1, total: list.length, tabId });
    uasSetDownloadState(zipKey, 'resolving', { site, current: i + 1, total: list.length, tabId });



    const key = String(item.key || '');



    const url = String(item.url || '');



    const previewUrl = String(item.previewUrl || '');



    const candidates = [];
    const seen = new Set();
    const suppliedCandidates = Array.isArray(item.candidates) ? item.candidates : [];
    const rawCandidates = suppliedCandidates.length ? suppliedCandidates : [
      { url, priority: 100, kind: 'primary' },
      ...(allowFallback && previewUrl ? [{ url: previewUrl, priority: 10, kind: 'preview' }] : [])
    ];
    for (const value of rawCandidates) {
      const candidate = typeof value === 'string' ? value : value?.url;
      if (!candidate || seen.has(candidate)) continue;
      seen.add(candidate);
      candidates.push(candidate);
    }







    let fetched = null;
    if (site === 'ehentai') {
      const ehViewer = String(url || item.ehViewerUrl || '').trim();
      const ehOriginal = await ehentaiBackgroundResolveOriginal(ehViewer);
      if (ehOriginal) {
        const bytes = await ehentaiBackgroundFetchOriginalBytes(ehOriginal);
        if (bytes?.buffer) {
          const validation = uasValidateMediaBuffer(bytes.buffer, { contentType: bytes.contentType || '', url: ehOriginal, expectedKind: 'image' });
          if (validation.ok) fetched = { ok: true, buffer: bytes.buffer, contentType: bytes.contentType || validation.mime, finalUrl: ehOriginal, detectedExt: validation.ext, detectedMime: validation.mime, detectedKind: validation.kind, validator: validation.detector };
        }
      }
    } else {
      for (const candidate of candidates) {
        const probe = await uasFetchZipBytesWithRetry(tabId, candidate, 2);
        if (!probe?.ok) { fetched = probe; continue; }
        const validation = uasValidateMediaBuffer(probe.buffer, { contentType: probe.contentType || '', url: probe.finalUrl || candidate, expectedKind: String(item.kind || (item.isVideo ? 'video' : item.isAudio ? 'audio' : 'image')) });
        if (!validation.ok) { fetched = { ok: false, error: validation.reason || 'invalid-media' }; continue; }
        fetched = { ...probe, detectedExt: validation.ext, detectedMime: validation.mime, detectedKind: validation.kind, validator: validation.detector };
        break;
      }
    }
if (!fetched?.ok) {



      if (tabId) chrome.tabs.sendMessage(tabId, {



        action: 'zip_item_error', key,



        current: i + 1, total: list.length,



        error: fetched?.error || 'download failed'



      }).catch(() => {});



      continue;



    }







    const bytes = new Uint8Array(fetched.buffer);
    const zipIdentityInfo = await uasBuildMediaIdentity(uasCreateMediaInfo(item, site), fetched);
    if (zipIdentityInfo.identity && zipSeenIdentities.has(zipIdentityInfo.identity)) {
      uasSetDownloadState(zipKey, 'skipped-duplicate', { site, current: i + 1, total: list.length, tabId, identity: zipIdentityInfo.identity });
      continue;
    }
    if (zipIdentityInfo.identity) zipSeenIdentities.add(zipIdentityInfo.identity);
    uasSetDownloadState(zipKey, 'validated', { site, current: i + 1, total: list.length, tabId, identity: zipIdentityInfo.identity });



    totalBytes += bytes.length;



    if (totalBytes > MAX_ZIP_BYTES) {



      if (tabId) chrome.tabs.sendMessage(tabId, {



        action: 'zip_batch_error',



        error: 'Общий размер ZIP превысил лимит 750 МБ.'



      }).catch(() => {});



      break;



    }







    const name = zipUniqueName(



      zipInferFileName(item, fetched.finalUrl || url, fetched.contentType || '', i),



      usedNames



    );



    uasSetDownloadState(zipKey, 'downloading', { site, current: i + 1, total: list.length, tabId, identity: zipIdentityInfo.identity });
    entries.push({
      name,
      bytes,
      key,
      url: fetched.finalUrl || url,
      kind: fetched.detectedKind || String(item.kind || 'image'),
      mime: fetched.detectedMime || fetched.contentType || '',
      ext: fetched.detectedExt || '',
      adapter: uasGetSiteAdapter(site).id,
      candidates: Array.isArray(item.candidates) ? item.candidates : [],
      candidatesUsed: fetched.candidatesUsed || [fetched.finalUrl || url],
      sourceUrl: item.sourceUrl || url,
      pageUrl: item.pageUrl || '',
      identity: zipIdentityInfo.identity,
      contentHash: zipIdentityInfo.contentHash,
      normalizedUrl: zipIdentityInfo.normalizedUrl,
      identityMethod: zipIdentityInfo.method
    });
    await uasUpsertMediaIndex({ identity: zipIdentityInfo.identity, site, key: zipKey, url: fetched.finalUrl || url, sourceUrl: item.sourceUrl || item.url || '', pageUrl: item.pageUrl || '', filename: name, kind: item.kind || 'image', mime: fetched.detectedMime || fetched.contentType || '', ext: fetched.detectedExt || '', downloaded: true });







    if (tabId) chrome.tabs.sendMessage(tabId, {



      action: 'download_progress', current: i + 1,



      total: list.length, key



    }).catch(() => {});



  }







  if (!entries.length) {



    if (tabId) {



      chrome.tabs.sendMessage(tabId, { action: 'zip_batch_error', error: 'Не удалось получить ни одного файла для ZIP.' }).catch(() => {});



      chrome.tabs.sendMessage(tabId, { action: 'download_batch_complete', downloadedKeys: Array.from(downloadedSet) }).catch(() => {});



    }



    return;



  }







  let archive;



  try {



    archive = zipMakeArchive(entries);



  } catch (e) {



    if (tabId) chrome.tabs.sendMessage(tabId, {



      action: 'zip_batch_error', error: String(e?.message || e)



    }).catch(() => {});



    return;



  }







  const safeSite = zipCleanPart(site || 'general', 'general');



  const safeFolder = zipCleanPart(folderName || 'General', 'General');



  const stamp = new Date().toISOString().replace(/[:.]/g, '-');



  const zipName = `ArtSaver/${safeSite}/${safeFolder}/${safeFolder}_${entries.length}_${stamp}.zip`;







  let zipSuccess = false;



  try {



    const dataUrl = zipBytesToDataUrl(archive);



    await chrome.downloads.download({ url: dataUrl, filename: zipName, conflictAction: 'uniquify' });



    zipSuccess = true;



  } catch (e) {



    if (tabId) chrome.tabs.sendMessage(tabId, {



      action: 'zip_batch_error', error: String(e?.message || e)



    }).catch(() => {});



  }







  if (zipSuccess) {
    for (const entry of entries) {
      if (entry.key) uasSetDownloadState(entry.key, 'saved', { site, total: list.length, tabId, identity: entry.identity || '' });
    }
  }

  if (zipSuccess && saveToHistory) {

    for (const entry of entries) {

      if (!entry.key) continue;

      downloadedSet.add(entry.key);

      if (zipSuccess) {
    for (const entry of entries) {
      if (entry.key) uasSetDownloadState(entry.key, 'completed', { site, total: list.length, tabId, identity: entry.identity || '' });
    }
  } else {
    for (const entry of entries) {
      if (entry.key) uasSetDownloadState(entry.key, 'failed', { site, total: list.length, tabId, error: 'zip-download-failed', identity: entry.identity || '' });
    }
  }

  if (tabId) chrome.tabs.sendMessage(tabId, {

        action: 'item_download_success', key: entry.key

      }).catch(() => {});

    }

    await uasRecordBatchHistory(site, entries.map(entry => ({
      ...entry,
      kind: entry.kind || 'image',
      mime: entry.mime || '',
      ext: entry.ext || '',
      adapter: entry.adapter || uasGetSiteAdapter(site).id,
      candidates: entry.candidates || [],
      candidatesUsed: entry.candidatesUsed || [entry.url]
    })), downloadedSet);

  }







  if (tabId) chrome.tabs.sendMessage(tabId, {



    action: 'download_batch_complete',



    downloadedKeys: Array.from(downloadedSet),



    zip: true,



    zipSuccess,



    zipCount: entries.length



  }).catch(() => {});



}









// Unified resolver pipeline: adapter -> normalized result -> validator -> candidate fallback.
// Existing site-specific resolvers remain intact; this layer standardizes their output.
function uasExpectedMediaKind(info = {}) {
  const kind = String(info.kind || '').toLowerCase();
  return ['image', 'video', 'audio'].includes(kind) ? kind : '';
}

function uasCandidateAllowed(candidate, allowFallback) {
  if (!candidate?.url) return false;
  if (allowFallback) return true;
  return String(candidate.kind || '').toLowerCase() !== 'preview';
}

async function uasNormalizeResolverResult(info, result, ctx = {}) {
  if (!result) return null;
  const expectedKind = uasExpectedMediaKind(info);

  if (result.buffer) {
    const validation = uasValidateMediaBuffer(result.buffer, {
      contentType: result.contentType || result.detectedMime || '',
      url: result.finalUrl || info.sourceUrl || '',
      expectedKind
    });
    if (!validation.ok) return null;

    return {
      ...result,
      contentType: result.contentType || validation.mime,
      detectedMime: validation.mime,
      detectedExt: validation.ext,
      detectedKind: validation.kind,
      validator: validation.detector,
      candidatesUsed: Array.isArray(result.candidatesUsed) && result.candidatesUsed.length
        ? result.candidatesUsed
        : (result.finalUrl ? [result.finalUrl] : [])
    };
  }

  if (result.directDownload && /^https?:\/\//i.test(String(result.finalUrl || ''))) {
    // Some legacy adapters return a direct URL without downloading the bytes.
    // Probe it before allowing chrome.downloads to save it, so HTML/error pages
    // cannot be saved with an image extension.
    const finalUrl = String(result.finalUrl);
    const candidateMeta =
      info.candidates.find(c => c.url === finalUrl) ||
      info.candidates.find(c => c.url === result.url) ||
      info.candidates[0] ||
      null;

    // A resolver that already supplied validator data (e.g. Wallhaven) does not
    // need a second network probe.
    if (result.validator && result.detectedExt) {
      return {
        ...result,
        candidatesUsed: Array.isArray(result.candidatesUsed) && result.candidatesUsed.length
          ? result.candidatesUsed
          : [finalUrl]
      };
    }

    const probe = await uasProbeMediaUrl(finalUrl, {
      referer: candidateMeta?.referer || ctx.referer || undefined,
      headers: candidateMeta?.headers || undefined,
      expectedKind,
      retries: 2,
      timeoutMs: 12000
    });

    if (!probe.ok) return null;

    return {
      ...result,
      finalUrl: probe.url || finalUrl,
      contentType: result.contentType || probe.contentType || probe.mime || '',
      detectedMime: probe.mime || result.detectedMime || '',
      detectedExt: probe.ext || result.detectedExt || '',
      detectedKind: probe.kind || result.detectedKind || expectedKind || 'image',
      validator: probe.detector || result.validator || 'probe',
      headers: result.headers || (
        candidateMeta?.headers
          ? Object.entries(candidateMeta.headers).map(([name, value]) => ({ name, value: String(value) }))
          : undefined
      ),
      candidatesUsed: Array.isArray(result.candidatesUsed) && result.candidatesUsed.length
        ? result.candidatesUsed
        : [finalUrl]
    };
  }

  return null;
}

async function uasResolveCandidateChain(info, ctx = {}) {
  const candidates = Array.isArray(info?.candidates) ? info.candidates : [];
  const expectedKind = uasExpectedMediaKind(info);
  for (const candidate of candidates) {
    if (!uasCandidateAllowed(candidate, !!ctx.allowFallback)) continue;
    if (!/^https?:\/\//i.test(candidate.url)) continue;
    try {
      const buffered = await uasFetchImageBufferV2(candidate.url, candidate.referer || ctx.referer || null, candidate.headers || ctx.headers || undefined, expectedKind);
      if (!buffered?.buffer) continue;
      const normalized = await uasNormalizeResolverResult(info, { ...buffered, finalUrl: buffered.finalUrl || candidate.url, candidatesUsed: [candidate.url] }, ctx);
      if (!normalized) continue;
      if (expectedKind && normalized.detectedKind && normalized.detectedKind !== expectedKind) continue;
      return normalized;
    } catch (_) {}
  }
  return null;
}

async function uasResolveAdapterPipeline(info, adapter, ctx = {}) {
  let legacyResult = null;

  try {
    legacyResult = await adapter.resolve(info, ctx);
  } catch (e) {
    legacyResult = null;
  }

  const normalizedLegacy = await uasNormalizeResolverResult(info, legacyResult, ctx);
  if (normalizedLegacy) return normalizedLegacy;

  // If the legacy adapter failed or returned an unverified direct URL, use the
  // same normalized candidate chain for every adapter.
  return uasResolveCandidateChain(info, ctx);
}

// [uas-history-write-queue-v1]
const uasHistoryWriteQueues = new Map();
const uasHistoryQueueStats = {
  queued: 0,
  active: 0,
  completed: 0,
  failed: 0,
  lastError: ''
};

function uasEnqueueHistoryWrite(site, mutation) {
  const cleanSite = String(site || 'general');
  const previous = uasHistoryWriteQueues.get(cleanSite) || Promise.resolve();

  uasHistoryQueueStats.queued++;

  const next = previous
    .catch(() => {})
    .then(async () => {
      uasHistoryQueueStats.queued = Math.max(0, uasHistoryQueueStats.queued - 1);
      uasHistoryQueueStats.active++;

      try {
        const result = await mutation();
        uasHistoryQueueStats.completed++;
        return result;
      } catch (error) {
        uasHistoryQueueStats.failed++;
        uasHistoryQueueStats.lastError = String(error?.message || error || 'history-write-failed').slice(0, 500);
        throw error;
      } finally {
        uasHistoryQueueStats.active = Math.max(0, uasHistoryQueueStats.active - 1);
      }
    });

  uasHistoryWriteQueues.set(cleanSite, next);

  // Keep the internal cleanup promise from becoming an unhandled rejection.
  next.finally(() => {
    if (uasHistoryWriteQueues.get(cleanSite) === next) {
      uasHistoryWriteQueues.delete(cleanSite);
    }
  }).catch(() => {});

  return next;
}

function uasHistoryQueueHealth() {
  return {
    ok: uasHistoryQueueStats.failed === 0,
    sites: uasHistoryWriteQueues.size,
    queued: uasHistoryQueueStats.queued,
    active: uasHistoryQueueStats.active,
    completed: uasHistoryQueueStats.completed,
    failed: uasHistoryQueueStats.failed,
    lastError: uasHistoryQueueStats.lastError
  };
}

// [uas-media-identity-v1]
const UAS_MEDIA_INDEX_KEY = 'uas_media_index_v1';
const UAS_MEDIA_INDEX_MAX = 20000;
const uasMediaIndexWriteQueue = { promise: Promise.resolve(), active: false, queued: 0, completed: 0, failed: 0, lastError: '' };
const uasDownloadState = new Map();
const uasDownloadStateHistory = [];
const UAS_DOWNLOAD_STATE_LIMIT = 250;

function uasNormalizeMediaIdentityUrl(value = '') {
  const raw = uasNormalizeUrl(value);
  if (!raw || !/^https?:\/\//i.test(raw)) return '';
  try {
    const u = new URL(raw);
    u.hash = '';
    for (const key of Array.from(u.searchParams.keys())) {
      if (/^(?:utm_[^=]+|fbclid|gclid|dclid|yclid|mc_cid|mc_eid|igshid|si)$/i.test(key)) u.searchParams.delete(key);
    }
    u.hostname = u.hostname.toLowerCase();
    return u.href;
  } catch (_) { return raw.split('#')[0]; }
}

async function uasSha256Buffer(buffer) {
  if (!buffer) return '';
  try {
    const source = buffer instanceof ArrayBuffer
      ? buffer
      : (ArrayBuffer.isView(buffer) ? buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) : null);
    if (!source) return '';
    const digest = await crypto.subtle.digest('SHA-256', source);
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2, '0')).join('');
  } catch (_) { return ''; }
}

async function uasBuildMediaIdentity(info = {}, result = null) {
  const finalUrl = String(result?.finalUrl || result?.url || info?.sourceUrl || '');
  const normalizedUrl = uasNormalizeMediaIdentityUrl(finalUrl);
  const contentHash = result?.buffer ? await uasSha256Buffer(result.buffer) : '';
  if (contentHash) return { identity: `sha256:${contentHash}`, method: 'content-sha256', contentHash, normalizedUrl, urlHash: normalizedUrl ? uasHashString(normalizedUrl) : '' };
  const urlBasis = normalizedUrl || String(info?.sourceUrl || info?.key || '');
  const urlHash = uasHashString(urlBasis);
  return { identity: urlHash ? `url:${urlHash}` : '', method: 'canonical-url', contentHash: '', normalizedUrl, urlHash };
}

function uasSetDownloadState(key, state, details = {}) {
  const cleanKey = String(key || '');
  if (!cleanKey) return;
  const record = {
    key: cleanKey,
    state: String(state || 'unknown'),
    site: String(details.site || ''),
    current: Number(details.current || 0),
    total: Number(details.total || 0),
    identity: String(details.identity || ''),
    url: String(details.url || ''),
    error: String(details.error || ''),
    detail: String(details.detail || ''),
    timestamp: new Date().toISOString()
  };
  uasDownloadState.set(cleanKey, record);
  uasDownloadStateHistory.push(record);
  while (uasDownloadStateHistory.length > UAS_DOWNLOAD_STATE_LIMIT) uasDownloadStateHistory.shift();
  if (details.tabId) chrome.tabs.sendMessage(details.tabId, { action: 'download_state', ...record }).catch(() => {});
  return record;
}

function uasGetDownloadState(key = '') { return uasDownloadState.get(String(key || '')) || null; }

function uasMediaIndexHealth() {
  return { key: UAS_MEDIA_INDEX_KEY, active: !!uasMediaIndexWriteQueue.active, queued: uasMediaIndexWriteQueue.queued, completed: uasMediaIndexWriteQueue.completed, failed: uasMediaIndexWriteQueue.failed, lastError: uasMediaIndexWriteQueue.lastError };
}

function uasEnqueueMediaIndexWrite(mutation) {
  uasMediaIndexWriteQueue.queued++;
  const previous = uasMediaIndexWriteQueue.promise.catch(() => {});
  const next = previous.then(async () => {
    uasMediaIndexWriteQueue.queued = Math.max(0, uasMediaIndexWriteQueue.queued - 1);
    uasMediaIndexWriteQueue.active = true;
    try { const result = await mutation(); uasMediaIndexWriteQueue.completed++; return result; }
    catch (e) { uasMediaIndexWriteQueue.failed++; uasMediaIndexWriteQueue.lastError = String(e?.message || e || 'media-index-write-failed').slice(0, 500); throw e; }
    finally { uasMediaIndexWriteQueue.active = false; }
  });
  uasMediaIndexWriteQueue.promise = next.catch(() => {});
  return next;
}

async function uasUpsertMediaIndex(record = {}) {
  const identity = String(record.identity || '').trim();
  if (!identity) return null;
  try {
    return await uasEnqueueMediaIndexWrite(async () => {
      const data = await chrome.storage.local.get(UAS_MEDIA_INDEX_KEY);
      const index = data[UAS_MEDIA_INDEX_KEY] && typeof data[UAS_MEDIA_INDEX_KEY] === 'object' ? { ...data[UAS_MEDIA_INDEX_KEY] } : {};
      const previous = index[identity] && typeof index[identity] === 'object' ? index[identity] : {};
      index[identity] = { ...previous, ...record, identity, firstSeen: previous.firstSeen || record.firstSeen || new Date().toISOString(), lastSeen: new Date().toISOString(), coreVersion: UAS_MEDIA_CORE_VERSION };
      const keys = Object.keys(index);
      if (keys.length > UAS_MEDIA_INDEX_MAX) {
        keys.sort((a,b) => String(index[a]?.lastSeen || '').localeCompare(String(index[b]?.lastSeen || '')));
        for (const key of keys.slice(0, keys.length - UAS_MEDIA_INDEX_MAX)) delete index[key];
      }
      await chrome.storage.local.set({ [UAS_MEDIA_INDEX_KEY]: index });
      return index[identity];
    });
  } catch (_) { return null; }
}

function uasAdapterHealthMatrix() {
  const rows = Object.entries(UAS_SITE_ADAPTERS).map(([site, adapter]) => ({ site, id: adapter.id, name: adapter.name, retry: !!adapter.retry, candidateChain: !!adapter.candidateChain, validator: !!adapter.validator, resolve: typeof adapter.resolve === 'function' ? 'ok' : 'missing' }));
  const total = rows.length;
  const healthy = rows.filter(r => r.resolve === 'ok' && r.retry && r.candidateChain && r.validator).length;
  return { total, healthy, degraded: total - healthy, rows };
}


async function uasRecordDownloadHistory(site, key, meta = {}) {
  const cleanSite = String(site || 'general');
  const cleanKey = String(key || '');
  if (!cleanKey) return;

  const storageKey = `downloaded_${cleanSite}`;
  const metaKey = `history_meta_${cleanSite}`;

  try {
    return await uasEnqueueHistoryWrite(cleanSite, async () => {
      const data = await chrome.storage.local.get([storageKey, metaKey]);
      const downloadedSet = new Set(data[storageKey] || []);
      const historyMeta = data[metaKey] && typeof data[metaKey] === 'object'
        ? { ...data[metaKey] }
        : {};

      downloadedSet.add(cleanKey);
      historyMeta[cleanKey] = {
        ...(historyMeta[cleanKey] && typeof historyMeta[cleanKey] === 'object' ? historyMeta[cleanKey] : {}),
        ...meta,
        key: cleanKey,
        date: meta.date || new Date().toISOString(),
        coreVersion: UAS_MEDIA_CORE_VERSION
      };

      await chrome.storage.local.set({
        [storageKey]: Array.from(downloadedSet),
        [metaKey]: historyMeta
      });

      return { downloadedSet, historyMeta };
    });
  } catch (_) {
    return null;
  }
}
async function uasRecordBatchHistory(site, entries, fallbackSet = new Set()) {
  const cleanSite = String(site || 'general');
  const storageKey = `downloaded_${cleanSite}`;
  const metaKey = `history_meta_${cleanSite}`;
  const list = Array.isArray(entries) ? entries : [];

  try {
    return await uasEnqueueHistoryWrite(cleanSite, async () => {
      const data = await chrome.storage.local.get([storageKey, metaKey]);
      const downloadedSet = new Set([...(data[storageKey] || []), ...fallbackSet]);
      const historyMeta = data[metaKey] && typeof data[metaKey] === 'object'
        ? { ...data[metaKey] }
        : {};

      for (const entry of list) {
        const key = String(entry?.key || '');
        if (!key) continue;

        downloadedSet.add(key);
        historyMeta[key] = {
          ...(historyMeta[key] && typeof historyMeta[key] === 'object' ? historyMeta[key] : {}),
          key,
          url: entry.url || '',
          filename: entry.name || entry.filename || '',
          date: entry.date || new Date().toISOString(),
          sourceUrl: entry.sourceUrl || '',
          pageUrl: entry.pageUrl || '',
          kind: entry.kind || 'image',
          mime: entry.mime || '',
          ext: entry.ext || '',
          adapter: entry.adapter || '',
          candidates: Array.isArray(entry.candidates) ? entry.candidates : [],
          candidatesUsed: Array.isArray(entry.candidatesUsed) ? entry.candidatesUsed : [],
          coreVersion: UAS_MEDIA_CORE_VERSION
        };
      }

      await chrome.storage.local.set({
        [storageKey]: Array.from(downloadedSet),
        [metaKey]: historyMeta
      });

      return { downloadedSet, historyMeta };
    });
  } catch (_) {
    return null;
  }
}
// [uas-media-core-v1]
// Media core inspired by imagedl's useful separation of media records,
// candidate URLs, validation and retries. Existing site resolvers remain intact.
const UAS_MEDIA_CORE_VERSION = '1.4.0';
const UAS_MEDIA_RETRY_DEFAULTS = Object.freeze({
  retries: 3,
  timeoutMs: 18000,
  baseDelayMs: 350,
  maxDelayMs: 2500
});

function uasSleep(ms) {
  return new Promise(resolve => setTimeout(resolve, Math.max(0, Number(ms) || 0)));
}

function uasNormalizeUrl(value, baseUrl = '') {
  const raw = String(value || '').trim();
  if (!raw) return '';
  try { return new URL(raw, baseUrl || undefined).href; }
  catch (_) { return raw; }
}

function uasHashString(value) {
  let h = 2166136261;
  const s = String(value || '');
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

function uasMimeToExt(mime = '') {
  const clean = String(mime || '').split(';')[0].trim().toLowerCase();
  return ({
    'image/jpeg': '.jpg', 'image/jpg': '.jpg', 'image/png': '.png',
    'image/gif': '.gif', 'image/webp': '.webp', 'image/avif': '.avif',
    'image/bmp': '.bmp', 'image/tiff': '.tif', 'image/svg+xml': '.svg',
    'image/heic': '.heic',
    'video/mp4': '.mp4', 'video/webm': '.webm', 'video/quicktime': '.mov',
    'audio/mpeg': '.mp3', 'audio/mp3': '.mp3', 'audio/ogg': '.ogg',
    'audio/mp4': '.m4a', 'audio/webm': '.webm', 'audio/aac': '.aac'
  })[clean] || '';
}

function uasUrlExt(url = '') {
  const m = String(url || '').split(/[?#]/)[0].match(/\.([a-z0-9]{2,5})$/i);
  return m ? `.${m[1].toLowerCase()}` : '';
}

function uasBytesAscii(bytes, start, len) {
  let out = '';
  for (let i = 0; i < len && start + i < bytes.length; i++) {
    out += String.fromCharCode(bytes[start + i]);
  }
  return out;
}

function uasDetectMediaFormat(buffer, contentType = '', url = '') {
  const bytes = buffer instanceof Uint8Array
    ? buffer
    : new Uint8Array(buffer || new ArrayBuffer(0));
  const b = (i) => bytes[i];
  const ascii4 = uasBytesAscii(bytes, 0, 4);
  const mime = String(contentType || '').split(';')[0].trim().toLowerCase();

  // Images
  if (bytes.length >= 3 && b(0) === 0xFF && b(1) === 0xD8 && b(2) === 0xFF) {
    return { ok: true, kind: 'image', mime: 'image/jpeg', ext: '.jpg', detector: 'jpeg-magic' };
  }
  if (bytes.length >= 8 && b(0) === 0x89 && b(1) === 0x50 && b(2) === 0x4E && b(3) === 0x47 && b(4) === 0x0D && b(5) === 0x0A && b(6) === 0x1A && b(7) === 0x0A) {
    return { ok: true, kind: 'image', mime: 'image/png', ext: '.png', detector: 'png-magic' };
  }
  if (bytes.length >= 6) {
    const gif = uasBytesAscii(bytes, 0, 6);
    if (gif === 'GIF87a' || gif === 'GIF89a') {
      return { ok: true, kind: 'image', mime: 'image/gif', ext: '.gif', detector: 'gif-magic' };
    }
  }
  if (bytes.length >= 12 && ascii4 === 'RIFF' && uasBytesAscii(bytes, 8, 4) === 'WEBP') {
    return { ok: true, kind: 'image', mime: 'image/webp', ext: '.webp', detector: 'webp-magic' };
  }
  if (bytes.length >= 4 && ascii4 === 'II*\x00') {
    return { ok: true, kind: 'image', mime: 'image/tiff', ext: '.tif', detector: 'tiff-magic' };
  }
  if (bytes.length >= 4 && ascii4 === 'MM\x00*') {
    return { ok: true, kind: 'image', mime: 'image/tiff', ext: '.tif', detector: 'tiff-magic' };
  }
  if (bytes.length >= 2 && b(0) === 0x42 && b(1) === 0x4D) {
    return { ok: true, kind: 'image', mime: 'image/bmp', ext: '.bmp', detector: 'bmp-magic' };
  }

  // ISO BMFF: AVIF/HEIF or MP4/MOV
  if (bytes.length >= 12 && uasBytesAscii(bytes, 4, 4) === 'ftyp') {
    const brand = uasBytesAscii(bytes, 8, 4).toLowerCase();
    if (['avif', 'avis'].includes(brand)) {
      return { ok: true, kind: 'image', mime: 'image/avif', ext: '.avif', detector: 'avif-ftyp' };
    }
    if (['heic', 'heix', 'hevc', 'hevx', 'mif1', 'msf1'].includes(brand)) {
      return { ok: true, kind: 'image', mime: 'image/heic', ext: '.heic', detector: 'heif-ftyp' };
    }
    return { ok: true, kind: 'video', mime: 'video/mp4', ext: '.mp4', detector: 'mp4-ftyp' };
  }

  // Video/audio
  if (bytes.length >= 4 && b(0) === 0x1A && b(1) === 0x45 && b(2) === 0xDF && b(3) === 0xA3) {
    return { ok: true, kind: 'video', mime: 'video/webm', ext: '.webm', detector: 'ebml-magic' };
  }
  if (bytes.length >= 4 && uasBytesAscii(bytes, 0, 4) === 'OggS') {
    return { ok: true, kind: 'audio', mime: 'audio/ogg', ext: '.ogg', detector: 'ogg-magic' };
  }
  if (bytes.length >= 3 && uasBytesAscii(bytes, 0, 3) === 'ID3') {
    return { ok: true, kind: 'audio', mime: 'audio/mpeg', ext: '.mp3', detector: 'id3-magic' };
  }
  if (bytes.length >= 2 && b(0) === 0xFF && (b(1) & 0xE0) === 0xE0) {
    return { ok: true, kind: 'audio', mime: 'audio/mpeg', ext: '.mp3', detector: 'mp3-frame' };
  }

  // SVG is text, so use MIME/URL plus a short content check.
  if (mime === 'image/svg+xml' || /\.svg(?:[?#]|$)/i.test(String(url || ''))) {
    let head = '';
    try {
      head = new TextDecoder('utf-8', { fatal: false })
        .decode(bytes.slice(0, 4096))
        .replace(/^\uFEFF/, '')
        .trimStart()
        .toLowerCase();
    } catch (_) {}
    if (head.includes('<svg') && !/<(?:html|head|body)\b/i.test(head)) {
      return { ok: true, kind: 'image', mime: 'image/svg+xml', ext: '.svg', detector: 'svg-text' };
    }
  }

  return { ok: false, kind: 'unknown', mime: mime || 'application/octet-stream', ext: '', detector: 'unknown' };
}

function uasValidateMediaBuffer(buffer, options = {}) {
  const bytes = buffer instanceof Uint8Array
    ? buffer
    : new Uint8Array(buffer || new ArrayBuffer(0));
  const contentType = String(options.contentType || '');
  const mime = contentType.split(';')[0].trim().toLowerCase();
  const url = String(options.url || '');
  const expectedKind = String(options.expectedKind || '').toLowerCase();
  if (bytes.length < 8) return { ok: false, reason: 'too-small' };

  const head = (() => {
    try {
      return new TextDecoder('utf-8', { fatal: false })
        .decode(bytes.slice(0, 512))
        .replace(/^\uFEFF/, '')
        .trimStart()
        .toLowerCase();
    } catch (_) { return ''; }
  })();

  if (/^(text\/html|application\/xhtml\+xml|application\/xml|text\/xml)/i.test(mime)) {
    return { ok: false, reason: `text-response:${mime}` };
  }
  if (/^(?:<!doctype html|<html\b|<head\b|<body\b|<error\b|<\?xml)/i.test(head)) {
    return { ok: false, reason: 'html-or-xml-response' };
  }

  const detected = uasDetectMediaFormat(bytes, contentType, url);
  if (!detected.ok) return detected;
  if (expectedKind && detected.kind !== expectedKind) {
    return { ok: false, reason: `kind-mismatch:${detected.kind}`, detected };
  }
  return detected;
}

function uasNormalizeFetchHeaders(value) {
  if (!value) return {};
  if (Array.isArray(value)) { const out = {}; for (const item of value) { if (!item || typeof item !== 'object') continue; const name = String(item.name || '').trim(); if (name) out[name] = String(item.value ?? ''); } return out; }
  if (typeof value === 'object') { const out = {}; for (const [key, val] of Object.entries(value)) if (key) out[String(key)] = String(val ?? ''); return out; }
  return {};
}

async function uasFetchWithRetry(url, options = {}) {
  const raw = String(url || '').trim();
  if (!raw) throw new Error('empty-url');
  const retries = Math.max(1, Number(options.retries ?? UAS_MEDIA_RETRY_DEFAULTS.retries) | 0);
  const timeoutMs = Math.max(1000, Number(options.timeoutMs ?? UAS_MEDIA_RETRY_DEFAULTS.timeoutMs) | 0);
  const baseDelayMs = Math.max(50, Number(options.baseDelayMs ?? UAS_MEDIA_RETRY_DEFAULTS.baseDelayMs) | 0);
  const maxDelayMs = Math.max(baseDelayMs, Number(options.maxDelayMs ?? UAS_MEDIA_RETRY_DEFAULTS.maxDelayMs) | 0);
  const headers = uasNormalizeFetchHeaders(options.headers);
  if (options.referer && !headers.Referer && !headers.referer) headers.Referer = String(options.referer);
  let lastError = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    if (options.signal?.aborted) throw new DOMException('Aborted', 'AbortError');
    const controller = new AbortController();
    let timeoutId = null;
    const abortForward = () => controller.abort();
    try {
      options.signal?.addEventListener('abort', abortForward, { once: true });
      timeoutId = setTimeout(() => controller.abort(), timeoutMs);
      const res = await fetch(raw, {
        ...(options.fetchInit || {}),
        headers,
        redirect: options.redirect || 'follow',
        cache: 'no-store',
        signal: controller.signal
      });
      if (res.ok) return res;
      lastError = new Error(`HTTP ${res.status}`);
      const retryable = [408, 425, 429, 500, 502, 503, 504].includes(res.status);
      if (!retryable || attempt >= retries) return res;
    } catch (e) {
      lastError = e;
      if (e?.name === 'AbortError' && options.signal?.aborted) throw e;
      if (attempt >= retries) throw e;
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
      try { options.signal?.removeEventListener('abort', abortForward); } catch (_) {}
    }
    const delay = Math.min(maxDelayMs, baseDelayMs * (2 ** (attempt - 1))) + Math.floor(Math.random() * 120);
    await uasSleep(delay);
  }
  throw lastError || new Error('request-failed');
}

async function uasFetchImageBufferV2(url, customReferer = null, customHeaders = undefined, expectedKind = '') {
  try {
    const res = await uasFetchWithRetry(url, { referer: customReferer || undefined, headers: customHeaders || undefined });
    if (!res?.ok) return null;
    const contentType = String(res.headers.get('content-type') || '').toLowerCase();
    const buffer = await res.arrayBuffer();
    if (!buffer || buffer.byteLength <= 32) return null;
    const validation = uasValidateMediaBuffer(buffer, { contentType, url: res.url || url, expectedKind: expectedKind || '' });
    if (!validation.ok) return null;
    return { buffer, contentType: contentType || validation.mime, finalUrl: res.url || url, detectedMime: validation.mime, detectedExt: validation.ext, detectedKind: validation.kind, validator: validation.detector, requestHeaders: customHeaders || undefined };
  } catch (_) { return null; }
}

async function uasProbeMediaUrl(url, options = {}) {
  const raw = String(url || '').trim();
  if (!/^https?:\/\//i.test(raw)) return { ok: false, status: 0, reason: 'unsupported-url' };
  let res;
  try {
    res = await uasFetchWithRetry(raw, {
      retries: options.retries ?? 2,
      timeoutMs: options.timeoutMs ?? 12000,
      referer: options.referer,
      headers: { ...(options.headers || {}), Range: 'bytes=0-8191' }
    });
  } catch (e) {
    return { ok: false, status: 0, reason: String(e?.message || e) };
  }
  if (!res?.ok) return { ok: false, status: res?.status || 0, reason: `HTTP ${res?.status || 0}` };
  const contentType = String(res.headers.get('content-type') || '').toLowerCase();
  try {
    let bytes = new Uint8Array(0);
    const reader = res.body?.getReader?.();
    if (reader) {
      const first = await reader.read();
      bytes = first?.value instanceof Uint8Array ? first.value.slice(0, 8192) : new Uint8Array(0);
      try { await reader.cancel(); } catch (_) {}
    } else {
      const arr = await res.arrayBuffer();
      bytes = new Uint8Array(arr).slice(0, 8192);
    }
    const detected = uasValidateMediaBuffer(bytes, {
      contentType,
      url: res.url || raw,
      expectedKind: options.expectedKind || ''
    });
    return {
      ...detected,
      url: res.url || raw,
      status: res.status,
      contentType
    };
  } catch (e) {
    return { ok: false, status: res.status, reason: String(e?.message || e) };
  }
}

async function uasDownloadWithRetry(downloadOptions, retries = 2) {
  let lastError = null;
  const count = Math.max(1, Number(retries) | 0);
  for (let attempt = 1; attempt <= count; attempt++) {
    try {
      return await chrome.downloads.download(downloadOptions);
    } catch (e) {
      lastError = e;
      if (attempt >= count) break;
      await uasSleep(250 * attempt);
    }
  }
  throw lastError || new Error('downloads.download failed');
}

function uasNormalizeCandidates(item = {}) {
  const raw = Array.isArray(item.candidates) && item.candidates.length
    ? item.candidates
    : [
        item.url ? { url: item.url, priority: 100, kind: 'primary' } : null,
        item.previewUrl ? { url: item.previewUrl, priority: 10, kind: 'preview' } : null
      ];
  const out = [];
  const seen = new Set();
  for (const value of raw) {
    const c = typeof value === 'string' ? { url: value } : (value || {});
    const url = uasNormalizeUrl(c.url || c.href || '');
    if (!url || seen.has(url)) continue;
    seen.add(url);
    out.push({
      url,
      priority: Number.isFinite(Number(c.priority)) ? Number(c.priority) : 0,
      kind: String(c.kind || 'candidate'),
      referer: String(c.referer || ''),
      headers: c.headers && typeof c.headers === 'object' ? c.headers : undefined
    });
  }
  out.sort((a, b) => b.priority - a.priority);
  return out;
}

function uasCreateMediaInfo(item = {}, site = '') {
  const candidates = uasNormalizeCandidates(item);
  const key = String(item.key || item.stableId || uasHashString(`${site}:${item.sourceUrl || item.url || candidates[0]?.url || ''}`));
  const kind = String(item.kind || (item.isAudio ? 'audio' : (item.isVideo ? 'video' : 'image')));
  return {
    version: UAS_MEDIA_CORE_VERSION,
    key,
    site: String(site || item.site || 'general'),
    pageUrl: String(item.pageUrl || ''),
    sourceUrl: String(item.sourceUrl || item.url || ''),
    candidates,
    fileName: String(item.fileName || ''),
    kind,
    isVideo: !!item.isVideo,
    isAudio: !!item.isAudio,
    adapter: String(item.adapter || ''),
    metadata: item.metadata && typeof item.metadata === 'object' ? item.metadata : {},
    createdAt: new Date().toISOString()
  };
}

function uasMediaResultFromBuffer(fetchResult) {
  if (!fetchResult?.buffer) return null;
  const detected = uasValidateMediaBuffer(fetchResult.buffer, {
    contentType: fetchResult.contentType,
    url: fetchResult.finalUrl
  });
  if (!detected.ok) return null;
  return {
    ...fetchResult,
    contentType: fetchResult.contentType || detected.mime,
    detectedMime: detected.mime,
    detectedExt: detected.ext,
    detectedKind: detected.kind,
    validator: detected.detector,
    candidatesUsed: fetchResult.candidatesUsed || []
  };
}

function uasAdapter(id, name, resolve) {
  return Object.freeze({ id, name: name || id, retry: true, candidateChain: true, validator: true, resolve });
}

async function uasLegacyResolve(info, ctx, legacyFn) {
  const primary = info.candidates[0]?.url || info.sourceUrl;
  const preview = info.candidates.find(c => c.kind === 'preview')?.url || ctx.previewUrl || '';
  let result = null;
  try {
    result = await legacyFn(primary, preview, ctx.allowFallback);
  } catch (_) {}

  const normalized = await uasNormalizeResolverResult(info, result, ctx);
  if (normalized) return normalized;

  return uasResolveCandidateChain(info, ctx);
}


function uasWallhavenId(value = '') {
  const raw = String(value || '');
  const m = raw.match(/(?:\/w\/|\/wallpaper\/)([A-Za-z0-9]+)/i)
    || raw.match(/wallhaven-([A-Za-z0-9]+)\.(?:jpe?g|png|gif|webp|avif)$/i);
  return m ? m[1] : '';
}

function uasWallhavenCandidates(id, extra = []) {
  const clean = String(id || '').trim();
  if (!clean) return [];
  const prefix = clean.slice(0, 2);
  const result = [];
  const seen = new Set();
  const add = (url, priority, kind) => {
    const u = uasNormalizeUrl(url);
    if (!u || seen.has(u)) return;
    seen.add(u);
    result.push({ url: u, priority, kind, referer: 'https://wallhaven.cc/' });
  };
  for (const value of Array.isArray(extra) ? extra : []) {
    const u = typeof value === 'string' ? value : value?.url;
    if (!u) continue;
    const raw = String(u);
    const inferredPriority = /^https?:\/\/w\.wallhaven\.cc\//i.test(raw) && !/^https?:\/\/th\.wallhaven\.cc\//i.test(raw) ? 120 : 30;
    add(raw, Number(value?.priority ?? inferredPriority), String(value?.kind || 'source'));
  }
  add(`https://w.wallhaven.cc/full/${prefix}/wallhaven-${clean}.jpg`, 110, 'derived-jpg');
  add(`https://w.wallhaven.cc/full/${prefix}/wallhaven-${clean}.png`, 105, 'derived-png');
  add(`https://w.wallhaven.cc/full/${prefix}/wallhaven-${clean}.gif`, 100, 'derived-gif');
  add(`https://w.wallhaven.cc/full/${prefix}/wallhaven-${clean}.webp`, 98, 'derived-webp');
  add(`https://w.wallhaven.cc/full/${prefix}/wallhaven-${clean}.avif`, 97, 'derived-avif');
  add(`https://w.wallhaven.cc/${prefix}/wallhaven-${clean}.jpg`, 95, 'api-path-style-jpg');
  add(`https://w.wallhaven.cc/${prefix}/wallhaven-${clean}.png`, 90, 'api-path-style-png');
  return result.sort((a, b) => b.priority - a.priority);
}

async function uasGetWallhavenUrlsInTab(tabId, id) {
  if (!tabId || !id) return [];
  try {
    const result = await chrome.scripting.executeScript({
      target: { tabId: Number(tabId) },
      world: 'MAIN',
      func: async (wallpaperId) => {
        const out = [];
        const seen = new Set();
        const add = (value, score = 0) => {
          if (!value || typeof value !== 'string') return;
          try {
            const u = new URL(value, location.href).href.split('#')[0];
            if (!/^https?:\/\/w\.wallhaven\.cc\//i.test(u)) return;
            if (seen.has(u)) return;
            seen.add(u);
            out.push({ url: u, score });
          } catch (_) {}
        };
        const collect = (img) => {
          if (!img) return;
          add(img.currentSrc, 300);
          add(img.src, 300);
          add(img.getAttribute('data-src'), 290);
          add(img.getAttribute('data-original'), 280);
          add(img.getAttribute('data-full'), 280);
          const srcset = img.getAttribute('srcset') || img.getAttribute('data-srcset') || '';
          for (const part of srcset.split(',').map(v => v.trim()).filter(Boolean)) {
            add(part.split(/\s+/)[0], 250);
          }
        };

        collect(document.querySelector('img#wallpaper, img.wallpaper'));

        if (!out.length) {
          const link = Array.from(document.querySelectorAll('a.preview[href*="/w/"], a[href*="/w/"]'))
            .find(a => new URL(a.href, location.href).pathname.toLowerCase() === `/w/${String(wallpaperId).toLowerCase()}`);
          collect(link?.closest('figure, li, article, .thumb')?.querySelector('img'));
        }

        if (!out.length) {
          try {
            const response = await fetch(`/w/${encodeURIComponent(wallpaperId)}`, {
              credentials: 'include',
              cache: 'no-store'
            });
            if (response.ok) {
              const html = await response.text();
              const doc = new DOMParser().parseFromString(html, 'text/html');
              collect(doc.querySelector('img#wallpaper, img.wallpaper, .scrollbox img'));
              for (const m of html.matchAll(/https?:\/\/w\.wallhaven\.cc\/full\/[A-Za-z0-9]+\/wallhaven-[A-Za-z0-9]+\.(?:jpe?g|png|gif|webp|avif)/ig)) {
                add(m[0], 220);
              }
            }
          } catch (_) {}
        }

        return out.sort((a, b) => b.score - a.score).map(v => v.url);
      },
      args: [String(id)]
    });
    return Array.isArray(result?.[0]?.result) ? result[0].result : [];
  } catch (_) {
    return [];
  }
}

async function uasFetchWallhavenPageOriginal(id) {
  const clean = String(id || '').trim();
  if (!clean) return '';
  try {
    const res = await uasFetchWithRetry(`https://wallhaven.cc/w/${encodeURIComponent(clean)}`, {
      retries: 2,
      timeoutMs: 10000,
      referer: 'https://wallhaven.cc/'
    });
    if (!res.ok) return '';
    const html = await res.text();

    // Wallhaven's og:image is a thumbnail. Prefer img#wallpaper / .scrollbox instead.
    const imageTag = html.match(/<img[^>]*(?:\bid=["']wallpaper["']|\bclass=["'][^"']*\bwallpaper\b[^"']*["'])[^>]*>/i)?.[0] || '';
    if (imageTag) {
      const realSrc = imageTag.match(/\b(?:src|data-src|data-original|data-full)=["']([^"']+)["']/i)?.[1];
      if (realSrc) {
        const normalized = uasNormalizeUrl(realSrc, 'https://wallhaven.cc/');
        if (/^https?:\/\/w\.wallhaven\.cc\//i.test(normalized)) return normalized;
      }
    }

    const direct = html.match(/https?:\/\/w\.wallhaven\.cc\/full\/[A-Za-z0-9]+\/wallhaven-[A-Za-z0-9]+\.(?:jpe?g|png|gif|webp|avif)/i)?.[0];
    if (direct) return uasNormalizeUrl(direct, 'https://wallhaven.cc/');
  } catch (_) {}
  return '';
}

function uasWallhavenDirectResult(url, sourceTag = 'wallhaven-page-source') {
  const clean = String(url || '').split('#')[0];
  const ext = clean.match(/\.([a-z0-9]{2,5})(?:\?|$)/i)?.[1]?.toLowerCase() || '';
  const mimeMap = {
    jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif',
    webp: 'image/webp', avif: 'image/avif'
  };
  if (!/^https?:\/\/w\.wallhaven\.cc\//i.test(clean)) return null;
  if (!mimeMap[ext]) return null;
  return {
    finalUrl: clean,
    directDownload: true,
    contentType: mimeMap[ext],
    detectedMime: mimeMap[ext],
    detectedExt: `.${ext}`,
    detectedKind: 'image',
    validator: sourceTag,
    headers: [{ name: 'Referer', value: 'https://wallhaven.cc/' }],
    candidatesUsed: [clean]
  };
}

async function uasResolveWallhaven(info, ctx = {}) {
  const id = uasWallhavenId(info.sourceUrl) || String(info.metadata?.wallhavenId || '');
  if (!id) return null;

  // 1) Resolve the exact real-image URL from the live Wallhaven tab.
  if (ctx.tabId) {
    const tabUrls = await uasGetWallhavenUrlsInTab(ctx.tabId, id);
    for (const exactUrl of tabUrls) {
      try {
        const full = await fetchImageBuffer(exactUrl, 'https://wallhaven.cc/');
        if (full?.buffer) {
          return { ...full, finalUrl: full.finalUrl || exactUrl, candidatesUsed: [exactUrl], headers: [{ name: 'Referer', value: 'https://wallhaven.cc/' }] };
        }
      } catch (_) {}
      const direct = uasWallhavenDirectResult(exactUrl, 'wallhaven-tab-source');
      if (direct) return direct;
    }
  }

  // 2) Resolve the exact real-image URL from the wallpaper HTML.
  const pageOriginal = await uasFetchWallhavenPageOriginal(id);
  if (pageOriginal) {
    try {
      const full = await fetchImageBuffer(pageOriginal, 'https://wallhaven.cc/');
      if (full?.buffer) {
        return { ...full, finalUrl: full.finalUrl || pageOriginal, candidatesUsed: [pageOriginal], headers: [{ name: 'Referer', value: 'https://wallhaven.cc/' }] };
      }
    } catch (_) {}
    const direct = uasWallhavenDirectResult(pageOriginal);
    if (direct) return direct;
  }

  // 3) Try the deterministic Wallhaven paths as a final fallback.
  for (const candidate of uasWallhavenCandidates(id, info.candidates)) {
    try {
      const full = await fetchImageBuffer(candidate.url, 'https://wallhaven.cc/');
      if (full?.buffer) {
        return { ...full, finalUrl: full.finalUrl || candidate.url, candidatesUsed: [candidate.url], headers: [{ name: 'Referer', value: 'https://wallhaven.cc/' }] };
      }
    } catch (_) {}
  }

  return null;
}

// [uas-site-repairs-v3] RedGifs API resolver for Ero-Anigif embeds.
let UAS_REDGIFS_TOKEN = '';
let UAS_REDGIFS_TOKEN_PROMISE = null;

async function uasGetRedgifsToken(force = false) {
  if (!force && UAS_REDGIFS_TOKEN) return UAS_REDGIFS_TOKEN;
  if (!force && UAS_REDGIFS_TOKEN_PROMISE) return UAS_REDGIFS_TOKEN_PROMISE;

  UAS_REDGIFS_TOKEN_PROMISE = (async () => {
    try {
      const response = await fetch('https://api.redgifs.com/v2/auth/temporary', {
        method: 'GET',
        cache: 'no-store',
        headers: {
          'Accept': 'application/json',
          'Referer': 'https://www.redgifs.com/',
          'Origin': 'https://www.redgifs.com'
        }
      });
      if (!response.ok) return '';
      const data = await response.json();
      const token = String(data?.token || '').trim();
      if (token) UAS_REDGIFS_TOKEN = token;
      return token;
    } catch (_) {
      return '';
    }
  })().finally(() => {
    UAS_REDGIFS_TOKEN_PROMISE = null;
  });

  return UAS_REDGIFS_TOKEN_PROMISE;
}

async function fetchEroAnigifRedgifs(url) {
  const raw = String(url || '').trim();
  const id = raw.match(/redgifs\.com\/(?:ifr|watch)\/([A-Za-z0-9_-]+)/i)?.[1] || '';
  if (!id) return null;

  for (let attempt = 0; attempt < 2; attempt++) {
    const token = await uasGetRedgifsToken(attempt > 0);
    if (!token) continue;

    try {
      const watchUrl = `https://www.redgifs.com/watch/${id}`;
      const response = await fetch(`https://api.redgifs.com/v2/gifs/${encodeURIComponent(id)}`, {
        method: 'GET',
        cache: 'no-store',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Referer': watchUrl,
          'Origin': 'https://www.redgifs.com',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'x-customheader': watchUrl
        }
      });

      if (response.status === 401) {
        UAS_REDGIFS_TOKEN = '';
        continue;
      }
      if (!response.ok) continue;

      const data = await response.json();
      const urls = data?.gif?.urls || data?.urls || {};
      const candidates = [urls.hd, urls.sd, urls.gif, urls.original, urls.webm, urls.mp4]
        .filter(Boolean)
        .map(v => String(v))
        .map(v => v.replace(/^https?:\/\/thumbs2\.redgifs\.com\//i, 'https://thumbs4.redgifs.com/')
                      .replace(/^https?:\/\/thumbs3\.redgifs\.com\//i, 'https://thumbs4.redgifs.com/'));

      for (const candidate of [...new Set(candidates)]) {
        const media = await fetchImageBuffer(candidate, watchUrl);
        if (media) return { ...media, finalUrl: candidate };
      }
    } catch (_) {}
  }

  return null;
}

// [uas-site-repairs-v3] Booru.io legacy entity API resolver.
// [uas-booruio-v4] Booru.io is a JS shell. Resolve the rendered
// media and the documented legacy entity endpoint in the page's own origin first.
async function uasBooruIoPageCandidates(tabId, postId) {
  if (!tabId || !postId) return [];
  try {
    const result = await chrome.scripting.executeScript({
      target: { tabId: Number(tabId) },
      world: 'MAIN',
      func: async (id) => {
        const out = [];
        const seen = new Set();
        const add = (value, score = 0, mime = '') => {
          if (!value || typeof value !== 'string') return;
          try {
            const u = new URL(value, location.href).href.split('#')[0];
            if (!/^https?:\/\/booru\.io\//i.test(u) || seen.has(u)) return;
            if (!/\/api\/legacy\/data\//i.test(u) && !/\.(?:jpe?g|png|gif|webp|avif|webm|mp4)(?:[?#]|$)/i.test(u)) return;
            seen.add(u);
            out.push({ url: u, score, mime });
          } catch (_) {}
        };
        const collectImage = (img, score = 0) => {
          if (!img) return;
          add(img.currentSrc, score + 40);
          add(img.src, score + 30);
          add(img.getAttribute('data-src'), score + 25);
          add(img.getAttribute('data-original'), score + 35);
          add(img.getAttribute('data-full'), score + 35);
          const srcset = img.getAttribute('srcset') || img.getAttribute('data-srcset') || '';
          for (const part of srcset.split(',').map(v => v.trim()).filter(Boolean)) add(part.split(/\s+/)[0], score + 20);
        };

        let card = Array.from(document.querySelectorAll('a[href*="/p/"]'))
          .find(a => new URL(a.href, location.href).pathname.match(new RegExp(`^/p/${String(id).replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}$`, 'i')))?.closest('figure,article,li,.card,[class*="card"]');
        if (card) card.querySelectorAll('img, source').forEach(el => collectImage(el, 260));

        if (!card) {
          const samePage = location.pathname.match(/^\/p\/([\\w-]+)/i)?.[1] || '';
          if (samePage && samePage.toLowerCase() === String(id).toLowerCase()) {
            document.querySelectorAll('#app-root img, #app-root source, img, source').forEach(el => collectImage(el, 240));
          }
        }

        // The SPA normally requests the entity and media path itself. Reuse those URLs if present.
        for (const entry of performance.getEntriesByType('resource')) {
          const u = String(entry?.name || '');
          if (/\/api\/legacy\/data\//i.test(u) || /booru\.io\/[^?#]+\.(?:jpe?g|png|gif|webp|avif)(?:[?#]|$)/i.test(u)) add(u, 180);
        }

        try {
          const res = await fetch(`/api/legacy/entity/${encodeURIComponent(id)}`, {
            credentials: 'include', cache: 'no-store',
            headers: { 'Accept': 'application/json, text/plain, */*' }
          });
          if (res.ok) return { candidates: out, entity: await res.json() };
        } catch (_) {}
        return { candidates: out, entity: null };
      },
      args: [String(postId)]
    });
    return result?.[0]?.result || { candidates: [], entity: null };
  } catch (_) {
    return { candidates: [], entity: null };
  }
}

function uasBooruIoEntityCandidates(data) {
  const out = [];
  const seen = new Set();
  const add = (value, path = '', score = 0, mimeHint = '') => {
    if (typeof value !== 'string') return;
    const raw = value.trim();
    if (!raw || /^(?:data|blob):/i.test(raw)) return;
    let u = '';
    try {
      if (/^https?:\/\//i.test(raw)) u = new URL(raw).href.split('#')[0];
      else u = new URL(`/api/legacy/data/${raw.replace(/^\/+/, '')}`, 'https://booru.io/').href;
    } catch (_) { return; }
    if (!/^https?:\/\/booru\.io\//i.test(u) || seen.has(u)) return;
    if (!/\/api\/legacy\/data\//i.test(u) && !/\.(?:jpe?g|png|gif|webp|avif|webm|mp4)(?:[?#]|$)/i.test(u)) return;
    seen.add(u);
    const p = `${path} ${mimeHint}`.toLowerCase();
    let rank = score;
    if (/original|full|source|download|contenturl|fileurl|mediaurl/.test(p)) rank += 500;
    if (/transform/.test(p)) rank += 250;
    const width = Number(p.match(/width[=:](\d{3,5})/)?.[1] || 0);
    if (width) rank += Math.min(300, width / 10);
    if (/thumbnail|preview|small|300x|1000x/.test(p)) rank -= 120;
    out.push({ url: u, score: rank, mime: mimeHint || '' });
  };
  const walk = (value, path = '', depth = 0) => {
    if (depth > 10 || value == null) return;
    if (typeof value === 'string') { add(value, path, 0); return; }
    if (Array.isArray(value)) { value.forEach((v,i) => walk(v, `${path}[${i}]`, depth + 1)); return; }
    if (typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      const nextPath = path ? `${path}.${key}` : key;
      if (typeof child === 'string' && /width=\d+:/i.test(key)) add(child, nextPath, 300, key);
      walk(child, nextPath, depth + 1);
    }
  };
  walk(data);
  out.sort((a,b) => b.score-a.score);
  return out.slice(0, 80);
}

async function fetchBooruIoImage(url, fallbackPreviewUrl, allowFallback, info, ctx = {}) {
  const raw = String(url || '').trim();
  const source = String(info?.sourceUrl || info?.pageUrl || raw || '').trim();
  const postId = source.match(/(?:https?:\/\/)?(?:www\.)?booru\.io\/p\/([\w-]+)/i)?.[1]
    || raw.match(/\/p\/([\w-]+)/i)?.[1] || '';

  const pageData = postId ? await uasBooruIoPageCandidates(ctx.tabId, postId) : { candidates: [], entity: null };
  const pageCandidates = Array.isArray(pageData?.candidates) ? pageData.candidates : [];

  for (const candidate of [...pageCandidates].sort((a,b) => Number(b.score||0)-Number(a.score||0))) {
    try {
      const media = await fetchImageBuffer(candidate.url, 'https://booru.io/');
      if (media?.buffer) return { ...media, finalUrl: media.finalUrl || candidate.url, candidatesUsed: [candidate.url] };
    } catch (_) {}
  }

  const entity = pageData?.entity || null;
  const entityCandidates = uasBooruIoEntityCandidates(entity);
  for (const candidate of entityCandidates) {
    try {
      const media = await fetchImageBuffer(candidate.url, 'https://booru.io/');
      if (media?.buffer) return { ...media, finalUrl: media.finalUrl || candidate.url, candidatesUsed: [candidate.url] };
    } catch (_) {}
  }

  // Preserve the old service-worker API path as a final fallback.
  if (postId && !entity) {
    try {
      const response = await fetch(`https://booru.io/api/legacy/entity/${encodeURIComponent(postId)}`, {
        method: 'GET', cache: 'no-store',
        headers: { 'Accept': 'application/json, text/plain, */*', 'Referer': 'https://booru.io/', 'Origin': 'https://booru.io' }
      });
      if (response.ok) {
        const data = await response.json();
        for (const candidate of uasBooruIoEntityCandidates(data)) {
          try {
            const media = await fetchImageBuffer(candidate.url, 'https://booru.io/');
            if (media?.buffer) return { ...media, finalUrl: media.finalUrl || candidate.url, candidatesUsed: [candidate.url] };
          } catch (_) {}
        }
      }
    } catch (_) {}
  }

  return fetchBooruImage(raw, fallbackPreviewUrl, allowFallback);
}

const UAS_SITE_ADAPTERS = Object.freeze({
  wallhaven: uasAdapter('wallhaven', 'Wallhaven', uasResolveWallhaven),
  islademuerta: uasAdapter('islademuerta', 'IslaDeMuerta', (i,c) => uasLegacyResolve(i,c,fetchIslaDeMuertaMedia)),
  kimootoko: uasAdapter('kimootoko', 'Kimootoko', (i,c) => uasLegacyResolve(i,c,fetchKimootokoImage)),
  ichinuke: uasAdapter('ichinuke', 'Ichinuke', (i,c) => uasLegacyResolve(i,c,fetchIchinukeImage)),
  erokan: uasAdapter('erokan', 'Erokan', (i,c) => uasLegacyResolve(i,c,fetchErokanImage)),
  vanillarock: uasAdapter('vanillarock', 'Vanilla Rock', (i,c) => uasLegacyResolve(i,c,fetchVanillaRockImage)),
  ehentai: uasAdapter('ehentai', 'E-Hentai', (i,c) => uasLegacyResolve(i,c,fetchEHentaiImage)),
  bluesky: uasAdapter('bluesky', 'Bluesky', (i,c) => uasLegacyResolve(i,c,fetchBlueskyImage)),
  poipiku: uasAdapter('poipiku', 'POIPIKU', (i,c) => uasLegacyResolve(i,c,fetchPoipikuImage)),
  pixai: uasAdapter('pixai', 'PixAI', (i,c) => uasLegacyResolve(i,c,fetchPixAIImage)),
  aibooru: uasAdapter('aibooru', 'AIBooru', (i,c) => fetchAIBooruImage(i?.url || '', i?.previewUrl || '', c.allowFallback, i, c)),
  joyreactor: uasAdapter('joyreactor', 'JoyReactor', (i,c) => uasLegacyResolve(i,c,fetchJoyReactorImage)),
  warosu: uasAdapter('warosu', 'Warosu', (i,c) => uasLegacyResolve(i,c,fetchWarosuImage)),
  cool18: uasAdapter('cool18', 'Cool18', (i,c) => uasLegacyResolve(i,c,fetchCool18Image)),
  plurk: uasAdapter('plurk', 'Plurk', async (i,c) => i.sourceUrl.includes('pbs.twimg.com') ? uasLegacyResolve(i,c,fetchTwitterImage) : uasLegacyResolve(i,c,fetchPlurkImage)),
  pixiv: uasAdapter('pixiv', 'pixiv', (i,c) => uasLegacyResolve(i,c,fetchPixivImage)),
  pinterest: uasAdapter('pinterest', 'Pinterest', (i,c) => uasLegacyResolve(i,c,fetchPinterestImage)),
  kurocore: uasAdapter('kurocore', 'KUROcore', (i,c) => uasLegacyResolve(i,c,fetchKurocoreImage)),
  moeimg: uasAdapter('moeimg', 'Moeimg', (i,c) => uasLegacyResolve(i,c,fetchMoeimgImage)),
  erocon: uasAdapter('erocon', 'Erocon', (i,c) => uasLegacyResolve(i,c,fetchEroconImage)),
  hadasirori: uasAdapter('hadasirori', 'Hadasirori', (i,c) => uasLegacyResolve(i,c,fetchHadasiroriImage)),
  nijityeki: uasAdapter('nijityeki', 'Nijityeki', (i,c) => uasLegacyResolve(i,c,fetchNijityekiImage)),
  situero: uasAdapter('situero', 'Situero', (i,c) => uasLegacyResolve(i,c,fetchWpArticleImage)),
  loveliveforever: uasAdapter('loveliveforever', 'LoveLiveForever', (i,c) => uasLegacyResolve(i,c,fetchWpArticleImage)),
  nukigazo: uasAdapter('nukigazo', 'Nukigazo', (i,c) => uasLegacyResolve(i,c,fetchWpArticleImage)),
  pttweb: uasAdapter('pttweb', 'PTTWeb', (i,c) => uasLegacyResolve(i,c,fetchPttWebImage)),
  wykop: uasAdapter('wykop', 'Wykop', (i,c) => uasLegacyResolve(i,c,fetchWykopImage)),
  doujinhibiki: uasAdapter('doujinhibiki', 'DoujinHibiki', (i,c) => uasLegacyResolve(i,c,fetchDoujinHibikiImage)),
  nijifan: uasAdapter('nijifan', 'Nijifan', (i,c) => uasLegacyResolve(i,c,fetchNijifanImage)),
  comichara: uasAdapter('comichara', 'Comichara', (i,c) => uasLegacyResolve(i,c,fetchComicharaImage)),
  hentaianimeai: uasAdapter('hentaianimeai', 'HentaiAnimeAI', (i,c) => uasLegacyResolve(i,c,fetchHentaiAnimeAIImage)),
  kyarabetsunijiero: uasAdapter('kyarabetsunijiero', 'KyaraBetsuNijiero', (i,c) => uasLegacyResolve(i,c,fetchKyaraBetsuNijieroImage)),
  eromanidc: uasAdapter('eromanidc', 'EromanIDC', (i,c) => uasLegacyResolve(i,c,fetchEromanIDCImage)),
  nijieroarchive: uasAdapter('nijieroarchive', 'NijieroArchive', (i,c) => uasLegacyResolve(i,c,fetchCleanBlogImage)),
  moeero: uasAdapter('moeero', 'Moeero', (i,c) => uasLegacyResolve(i,c,fetchCleanBlogImage)),
  eroanigif: uasAdapter('eroanigif', 'EroAnigif', (i,c) => /redgifs\.com\/(?:ifr|watch)\//i.test(i?.sourceUrl || i?.url || '') ? fetchEroAnigifRedgifs(i?.sourceUrl || i?.url) : uasLegacyResolve(i,c,fetchCleanBlogImage)),
  hentaiwitch: uasAdapter('hentaiwitch', 'HentaiWitch', (i,c) => uasLegacyResolve(i,c,fetchCleanBlogImage)),
  femmedoll: uasAdapter('femmedoll', 'FemmeDoll', (i,c) => uasLegacyResolve(i,c,fetchCleanBlogImage)),
  truyenhentai: uasAdapter('truyenhentai', 'Truyen-Hentai', (i,c) => uasLegacyResolve(i,c,fetchTruyenHentaiMedia)),
  sotwe: uasAdapter('sotwe', 'Sotwe', async (i,c) => {
    const isVideo = i.isVideo || /video\.twimg\.com|\.(?:mp4|webm|mov)(?:[?#]|$)/i.test(i.sourceUrl);
    if (isVideo) return { finalUrl: i.sourceUrl, directDownload: true, kind: 'video' };
    if (i.sourceUrl.includes('pbs.twimg.com')) return uasLegacyResolve(i,c,fetchTwitterImage);
    return uasLegacyResolve(i,c,fetchGeneralImage);
  }),
  m4ex: uasAdapter('m4ex', 'M4EX', (i,c) => uasLegacyResolve(i,c,fetchM4exImage)),
  scrolller: uasAdapter('scrolller', 'Scrolller', (i,c) => uasLegacyResolve(i,c,fetchScrolllerMedia)),
  rule34us: uasAdapter('rule34us', 'Rule34.us', (i,c) => uasLegacyResolve(i,c,fetchRule34UsImage)),
  gelbooru: uasAdapter('gelbooru', 'Gelbooru', (i) => fetchGelbooruOriginalExact(i.sourceUrl)),
  rule34: uasAdapter('rule34', 'Rule34', (i,c) => uasLegacyResolve(i,c,fetchBooruImage)),
  booru: uasAdapter('booru', 'Booru', (i,c) => uasLegacyResolve(i,c,fetchBooruImage)),
  booruio: uasAdapter('booruio', 'Booru.io', (i,c) => fetchBooruIoImage(i?.url || '', i?.previewUrl || '', c.allowFallback, i, c)),
  safebooru: uasAdapter('safebooru', 'Safebooru', (i,c) => uasLegacyResolve(i,c,fetchBooruImage)),
  donmai: uasAdapter('donmai', 'Danbooru/Safebooru', (i,c) => uasLegacyResolve(i,c,fetchBooruImage)),
  r34app: uasAdapter('r34app', 'R34.app', (i,c) => uasLegacyResolve(i,c,fetchBooruImage)),
  rule34gg: uasAdapter('rule34gg', 'Rule34.gg', (i,c) => uasLegacyResolve(i,c,fetchBooruImage)),
  zerochan: uasAdapter('zerochan', 'Zerochan', (i,c) => uasLegacyResolve(i,c,fetchZerochanMedia)),
  yandere: uasAdapter('yandere', 'Yande.re', (i,c) => uasLegacyResolve(i,c,fetchYandereImage)),
  general: uasAdapter('general', 'Generic', (i,c) => uasLegacyResolve(i,c,fetchGeneralImage))
});

function uasGetSiteAdapter(site) {
  return UAS_SITE_ADAPTERS[String(site || '').toLowerCase()] || UAS_SITE_ADAPTERS.general;
}

function uasCoreHealth() {
  const required = [
    ['fetchImageBuffer', typeof fetchImageBuffer === 'function'],
    ['uasFetchWithRetry', typeof uasFetchWithRetry === 'function'],
    ['uasValidateMediaBuffer', typeof uasValidateMediaBuffer === 'function'],
    ['uasCreateMediaInfo', typeof uasCreateMediaInfo === 'function'],
    ['uasNormalizeResolverResult', typeof uasNormalizeResolverResult === 'function'],
    ['uasResolveCandidateChain', typeof uasResolveCandidateChain === 'function'],
    ['uasResolveAdapterPipeline', typeof uasResolveAdapterPipeline === 'function'],
    ['uasRecordDownloadHistory', typeof uasRecordDownloadHistory === 'function'],
    ['uasEnqueueHistoryWrite', typeof uasEnqueueHistoryWrite === 'function'],
    ['uasHistoryQueueHealth', typeof uasHistoryQueueHealth === 'function'],
    ['uasBuildMediaIdentity', typeof uasBuildMediaIdentity === 'function'],
    ['uasUpsertMediaIndex', typeof uasUpsertMediaIndex === 'function'],
    ['uasSetDownloadState', typeof uasSetDownloadState === 'function'],
    ['uasAdapterHealthMatrix', typeof uasAdapterHealthMatrix === 'function'],
    ['uasGetSiteAdapter', typeof uasGetSiteAdapter === 'function']
  ];
  const modules = Object.fromEntries(required.map(([name, ok]) => [name, ok ? 'ok' : 'missing']));
  const adapterHealth = uasAdapterHealthMatrix();
  return { ok: required.every(([, ok]) => ok) && Object.keys(UAS_SITE_ADAPTERS).length >= 5 && adapterHealth.degraded === 0, version: UAS_MEDIA_CORE_VERSION, adapterCount: Object.keys(UAS_SITE_ADAPTERS).length, modules, historyQueue: uasHistoryQueueHealth(), mediaIndex: uasMediaIndexHealth(), adapterHealth };
}

async function uasFetchZipBytesWithRetry(tabId, url, retries = 2) {
  const count = Math.max(1, Number(retries) | 0);
  let last = null;
  for (let attempt = 1; attempt <= count; attempt++) {
    const result = await fetchZipBytesInTab(tabId, url);
    if (result?.ok) return result;
    last = result;
    if (attempt < count) await uasSleep(250 * attempt);
  }
  return last || { ok: false, error: 'zip fetch failed' };
}

async function handleUASHealthDiagnostics(request) {
  const site = String(request?.site || 'general').toLowerCase();
  const adapter = uasGetSiteAdapter(site);
  const core = uasCoreHealth();
  const items = Array.isArray(request?.items) ? request.items.slice(0, 5) : [];
  const samples = [];
  if (request?.probe === true) {
    for (const rawItem of items) {
      const info = uasCreateMediaInfo(rawItem || {}, site);
      const sample = { key: info.key, kindExpected: info.kind, candidates: info.candidates.length, results: [], currentState: uasGetDownloadState(info.key)?.state || 'idle' };
      let tested = 0;
      for (const candidate of info.candidates) {
        if (tested >= 6) break;
        if (!/^https?:\/\//i.test(candidate.url)) { sample.results.push({ url: candidate.url, status: 'skip', reason: 'non-http', kindExpected: info.kind }); continue; }
        tested++;
        const probe = await uasProbeMediaUrl(candidate.url, { referer: candidate.referer || `https://${site}.invalid/`, headers: candidate.headers || undefined, expectedKind: ['image','video','audio'].includes(info.kind) ? info.kind : '', retries: 2, timeoutMs: 12000 });
        sample.results.push({ url: candidate.url, status: probe.ok ? 'ok' : 'fail', http: probe.status || 0, type: probe.contentType || '', ext: probe.ext || '', detector: probe.detector || '', detectedKind: probe.kind || '', kindExpected: info.kind, headers: !!candidate.headers, reason: probe.reason || '' });
        if (probe.ok) break;
      }
      samples.push(sample);
    }
  }
  return { ok: !!core.ok, timestamp: new Date().toISOString(), site, adapter: { id: adapter.id, name: adapter.name, retry: !!adapter.retry, candidateChain: !!adapter.candidateChain, validator: !!adapter.validator }, core, adapterHealth: core.adapterHealth, recentStates: uasDownloadStateHistory.slice(-20), samples };
}

async function handleBatchDownload({ items, folderName, saveToHistory, allowFallback, site }, tabId) {



  const storageKey = `downloaded_${site}`;



  const baseDir = site;







  const data = await chrome.storage.local.get(storageKey);



  const downloadedSet = new Set(data[storageKey] || []);



  const subFolder = folderName || 'General';
  const seenIdentities = new Set();







  for (let i = 0; i < items.length; i++) {



    const { key, url, previewUrl, isVideo } = items[i];







    if (tabId) {



      chrome.tabs.sendMessage(tabId, {



        action: 'download_progress',



        current: i + 1,



        total: items.length,



        key: key



      }).catch(() => {});



    }







    let imageResult = null;

    const isVideoFormat = !!isVideo || /\.(?:mp4|webm|mov)(?:[?#]|$)/i.test(String(url || ''));
    const mediaInfo = uasCreateMediaInfo({
      ...(items[i] || {}),
      key,
      url,
      previewUrl,
      isVideo: isVideoFormat || !!items[i]?.isVideo,
      sourceUrl: items[i]?.sourceUrl || url,
      pageUrl: items[i]?.pageUrl || ''
    }, site);
    const adapter = uasGetSiteAdapter(site);

    uasSetDownloadState(key, 'queued', { site, current: i + 1, total: items.length, tabId });
    uasSetDownloadState(key, 'resolving', { site, current: i + 1, total: items.length, tabId });
    try {
      imageResult = await uasResolveAdapterPipeline(mediaInfo, adapter, {
        allowFallback,
        previewUrl,
        tabId,
        site,
        referer: mediaInfo.candidates[0]?.referer || '',
        headers: mediaInfo.candidates[0]?.headers || undefined
      });
    } catch (_) {
      imageResult = null;
    }

    if (!imageResult || (!imageResult.buffer && !imageResult.directDownload)) {
      uasSetDownloadState(key, 'failed', { site, current: i + 1, total: items.length, tabId, error: 'resolver-failed', detail: 'No validated media result' });
      continue;
    }
    const identityInfo = await uasBuildMediaIdentity(mediaInfo, imageResult);
    if (identityInfo.identity && seenIdentities.has(identityInfo.identity)) {
      uasSetDownloadState(key, 'skipped-duplicate', { site, current: i + 1, total: items.length, tabId, identity: identityInfo.identity, url: imageResult.finalUrl || url });
      continue;
    }
    if (identityInfo.identity) seenIdentities.add(identityInfo.identity);
    uasSetDownloadState(key, 'validated', { site, current: i + 1, total: items.length, tabId, identity: identityInfo.identity, url: imageResult.finalUrl || url, detail: identityInfo.method });







    if (site === 'gelbooru' && imageResult) {



      const verified = imageResult.finalUrl || '';



      if (!/^https?:\/\/img[0-9]+\.gelbooru\.com\/(?:images|videos|video|media)\/[^?#]+\.(?:jpe?g|png|gif|webp|webm|mp4)(?:[?#].*)?$/i.test(verified)) {



        continue;



      }



    }







    const downloadTargetUrl = imageResult ? imageResult.finalUrl : url;
    const mediaInfoCandidates = mediaInfo.candidates;



    let cleanFilename = downloadTargetUrl.split('/').pop().split('?')[0];



    cleanFilename = cleanFilename.replace(/:[a-z0-9_-]+$/i, '').replace(/[\/:*?"<>|]/g, '_').trim().replace(/\.+$/, '');







    // [bsky-v1] CDN заканчивает URL на CID@mime без обычного расширения.



    if (site === 'bluesky') {



      const bskyName = downloadTargetUrl.match(/\/img\/feed_(?:fullsize|thumbnail|small)\/plain\/did:[^/]+\/([^/@?#]+)(?:@([a-z0-9.+-]+))?$/i);



      if (bskyName) {



        const extMap = { jpeg: '.jpg', jpg: '.jpg', png: '.png', webp: '.webp', gif: '.gif', avif: '.avif' };



        const suffix = bskyName[2] ? (extMap[String(bskyName[2]).toLowerCase()] || `.${String(bskyName[2]).toLowerCase()}`) : '';



        cleanFilename = bskyName[1] + suffix;



      }



    }







    const nameNoExt = cleanFilename.replace(/\.[a-z0-9]+$/i, '');



    if (/^(?:original|full|sample|preview|300x|1000x|tr\.300x|tr\.1000x|image)$/i.test(nameNoExt) || !nameNoExt) {



      cleanFilename = key ? `${key}` : cleanFilename;



    }







    if (!/\.(jpg|jpeg|png|webp|gif|avif|mp4|webm)$/i.test(cleanFilename)) {



      const detectedExt = imageResult?.detectedExt || (isVideoFormat ? (url.includes('.webm') ? '.webm' : (url.includes('.mov') ? '.mov' : '.mp4')) :



                          imageResult?.contentType?.includes('png') ? '.png' :



                          imageResult?.contentType?.includes('gif') ? '.gif' :



                          imageResult?.contentType?.includes('webp') ? '.webp' :



                          imageResult?.contentType?.includes('avif') ? '.avif' : '.jpg');



      cleanFilename += detectedExt;



    } else if (imageResult?.contentType?.includes('png') && /\.(jpe?g)$/i.test(cleanFilename)) {



      cleanFilename = cleanFilename.replace(/\.(jpe?g)$/i, '.png');



    }







    const ROOT_FOLDER = 'ArtSaver';



    const cleanBaseDir = (baseDir || 'general').replace(/[\/:*?"<>|]/g, '_').trim().replace(/\.+$/, '') || 'general';



    const cleanSubFolder = (subFolder || 'General').replace(/[\/:*?"<>|]/g, '_').trim().replace(/\.+$/, '') || 'General';



    const destination = `${ROOT_FOLDER}/${cleanBaseDir}/${cleanSubFolder}/${cleanFilename}`;







    let success = false;
    uasSetDownloadState(key, 'downloading', { site, current: i + 1, total: items.length, tabId, identity: identityInfo.identity, url: downloadTargetUrl });



    if (imageResult && imageResult.directDownload) {


      // POIPIKU/Bluesky: URL скачивается напрямую через chrome.downloads.


      try {


        await uasDownloadWithRetry({


          url: downloadTargetUrl,


          filename: destination,


          conflictAction: 'uniquify',


          ...(Array.isArray(imageResult?.headers) && imageResult.headers.length ? { headers: imageResult.headers } : {})


        });


        success = true;


      } catch (directError) {


        if (site === 'poipiku') {


          // Если CDN требует Referer, получаем бинарные данные с Referer


          // и сохраняем data: URL через Downloads API.


          try {


            const fallbackData = await fetchImageBuffer(


              downloadTargetUrl,


              'https://poipiku.com/'


            );


            if (fallbackData?.buffer) {


              const dataUrl = bufferToDataUrl(


                fallbackData.buffer,


                fallbackData.contentType || 'image/jpeg'


              );


              await uasDownloadWithRetry({


                url: dataUrl,


                filename: destination,


                conflictAction: 'uniquify'


              });


              success = true;


            }


          } catch (_) {}


        } else {


          try {


            await uasDownloadWithRetry({


              url: downloadTargetUrl,


              filename: destination,


              conflictAction: 'uniquify',


              headers: site === 'bluesky' ? [{ name: 'Referer', value: 'https://bsky.app/' }] : (Array.isArray(imageResult?.headers) ? imageResult.headers : [])


            });


            success = true;


          } catch (_) {}


        }


      }


    } else if (imageResult && imageResult.buffer) {



      try {



        const dataUrl = bufferToDataUrl(



          imageResult.buffer,



          imageResult.contentType || 'image/jpeg'



        );



        await uasDownloadWithRetry({



          url: dataUrl,



          filename: destination,



          conflictAction: 'uniquify'



        });



        success = true;



      } catch (err) {



        try {



          await uasDownloadWithRetry({



            url: downloadTargetUrl,



            filename: destination,



            conflictAction: 'uniquify'



          });



          success = true;



        } catch (err2) {}



      }



    } else {



      try {



        await uasDownloadWithRetry({



          url: downloadTargetUrl,



          filename: destination,



          conflictAction: 'uniquify'



        });



        success = true;



      } catch (err) {}



    }







    if (success) {
      uasSetDownloadState(key, 'saved', { site, current: i + 1, total: items.length, tabId, identity: identityInfo.identity, url: downloadTargetUrl });
      const historyMeta = {
        url: downloadTargetUrl,
        filename: cleanFilename,
        sourceUrl: mediaInfo.sourceUrl || url,
        pageUrl: mediaInfo.pageUrl || '',
        candidates: mediaInfoCandidates,
        kind: mediaInfo.kind,
        mime: imageResult?.detectedMime || imageResult?.contentType || '',
        ext: imageResult?.detectedExt || '',
        adapter: adapter.id,
        candidatesUsed: imageResult?.candidatesUsed || [],
        identity: identityInfo.identity,
        identityMethod: identityInfo.method,
        contentHash: identityInfo.contentHash,
        normalizedUrl: identityInfo.normalizedUrl
      };
      await uasUpsertMediaIndex({ ...historyMeta, identity: identityInfo.identity, downloaded: true, site, key });
      if (saveToHistory) {
        downloadedSet.add(key);
        uasSetDownloadState(key, 'history', { site, current: i + 1, total: items.length, tabId, identity: identityInfo.identity });
        await uasRecordDownloadHistory(site, key, historyMeta);
      }
      uasSetDownloadState(key, 'completed', { site, current: i + 1, total: items.length, tabId, identity: identityInfo.identity, url: downloadTargetUrl });
      if (tabId) chrome.tabs.sendMessage(tabId, { action: 'item_download_success', key, identity: identityInfo.identity }).catch(() => {});
    } else {
      uasSetDownloadState(key, 'failed', { site, current: i + 1, total: items.length, tabId, identity: identityInfo.identity, error: 'download-failed' });
    }







    await new Promise(resolve => setTimeout(resolve, 200));



  }







  if (saveToHistory) {



    try {



      const curData = await chrome.storage.local.get(storageKey);



      const merged = new Set([...(curData[storageKey] || []), ...downloadedSet]);



      await chrome.storage.local.set({ [storageKey]: Array.from(merged) });



      // Автоматически обновляем текстовый файл истории на диске



      await exportHistoryToDisk(site);



    } catch (e) {}



  }







  if (tabId) {



    chrome.tabs.sendMessage(tabId, {



      action: 'download_batch_complete',



      downloadedKeys: Array.from(downloadedSet)



    }).catch(() => {});



  }



}