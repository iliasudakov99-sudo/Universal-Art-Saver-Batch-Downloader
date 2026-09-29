// [uas-site-repairs-21-72-v1]
// [uas-wallhaven-no-wrap-fix-v3]
// [uas-site-repairs-v4-downloads]
// [uas-site-repairs-v3-main]
// [uas-media-content-v1.4]
// [wallhaven-catalog-scan-fix-v3]
// [uas-media-content-v1]
// [ehentai-background-original-v2]
// [ehentai-support-v1]
// [poipiku-direct-original-v7]
// [poipiku-xml-original-fix-v6]
// [poipiku-fullscreen-original-v2]
// [poipiku-fullscreen-original-v1]
// [poipiku-safe-v4]
// [poipiku-original-fix-v4]
// [poipiku-support-v2]
// [runtime-marker-repair-v2]

// [zip-reference-repair-v1]


// [zip-reference-repair-v1]


// [uas-i18n-v1] Shared RU/EN UI localization.
const UAS_I18N = {
  ru: {
    settings:'Настройки', closeSettings:'Закрыть настройки', language:'Язык',
    all:'Все', photos:'Фото', videos:'Видео', onlyPhotos:'Только фото', onlyVideos:'Только видео',
    limit:'Лимит:', noRepeats:'Без повторов', noRepeatsTitle:'Не скачивать файлы, которые уже есть в истории',
    preview:'Превью', previewTitle:'Качать превью, если оригинал недоступен', scroll:'Скролл', pause:'Пауза', download:'Скачать', done:'Готово',
    deselectAll:'Снять все галочки / Выбрать все (Alt + A)', selectAll:'Выбрать все обратно (Alt + A)', deselectOnly:'Снять все галочки (Alt + A)',
    exportHistoryTitle:'Сохранить текстовый файл истории ссылок на диск (ArtSaver/_history/)',
    diagnosticsTitle:'Диагностика MediaCore / adapter / кандидатов', diagnostics:'Диагностика', diagnosticsEmpty:'Пустой ответ', diagnosticsClose:'Закрыть',
    clearNewTitle:'Очистить список новых найденных изображений',
    clearNewConfirm:'Очистить {count} новых найденных изображений для {site}? Они не будут добавлены в исключения.',
    clearHistoryTitle:'Очистить историю скачиваний', clearHistoryConfirm:'Очистить историю скачиваний для {site}?',
    zipHint:'ZIP собирается одним файлом. Изображения внутри ZIP не сжимаются повторно.',
    autoZipFrom:'Авто-ZIP от файлов:', autoZipThresholdTitle:'При таком количестве выбранных новых файлов кнопка «Скачать» автоматически создаёт ZIP.',
    autoZipAria:'Количество файлов для автоматического ZIP', autoZipLabel:'Автоматически упаковывать при достижении порога',
    autoZipLabelTitle:'При достижении порога обычная кнопка «Скачать» запускает ZIP вместо отдельных файлов.',
    zipDownload:'Скачать выбранное одним ZIP', zipDownloadTitle:'Скачать все выбранные элементы одним ZIP-файлом',
    news:'Новых: {count}', downloaded:' · Скачано: {count}', excluded:' · Искл: {count}', limitReached:'Лимит ({count}) достигнут!',
    chatStartDone:'Готово (начало чата)', pageEndDone:'Готово (конец страницы)', extensionUpdated:'Расширение было обновлено. Перезагрузите страницу (F5).',
    telegramZipUnsupported:'ZIP для Telegram пока не используется: Telegram-модуль работает через свой загрузчик.', noImagesForZip:'Нет картинок для упаковки в ZIP.',
    ehentaiOriginalFailed:'Не удалось получить оригинальные изображения E-Hentai.', zipStartFailed:'Не удалось запустить ZIP-загрузку. Перезагрузите страницу.',
    noImages:'Нет картинок для скачивания.', telegramNotReady:'Telegram-модуль ещё не загрузился. Откройте чат заново или обновите страницу.',
    requestFailed:'Ошибка отправки запроса. Пожалуйста, перезагрузите страницу.', queuedTitle:'В очереди загрузки (кликните, чтобы исключить)', ignoredTitle:'Исключено из загрузки (кликните, чтобы вернуть)', downloadingTitle:'Скачивается...', clearedTitle:'Убрано из списка «Новых» (кликните, чтобы вернуть)', downloadedTitle:'Уже скачано (кликните, чтобы скачать повторно)', videoQueuedTitle:'Видео в очереди загрузки (кликните, чтобы исключить)', photoQueuedTitle:'В очереди загрузки (кликните, чтобы исключить)', unknown:'неизвестно', noSamples:'Media probes: no queued samples'
  },
  en: {
    settings:'Settings', closeSettings:'Close settings', language:'Language',
    all:'All', photos:'Photos', videos:'Videos', onlyPhotos:'Photos only', onlyVideos:'Videos only',
    limit:'Limit:', noRepeats:'No duplicates', noRepeatsTitle:'Do not download files already present in history',
    preview:'Preview', previewTitle:'Download preview if the original is unavailable', scroll:'Scroll', pause:'Pause', download:'Download', done:'Done',
    deselectAll:'Uncheck all / Select all (Alt + A)', selectAll:'Select all again (Alt + A)', deselectOnly:'Uncheck all (Alt + A)',
    exportHistoryTitle:'Save the link history as a text file (ArtSaver/_history/)',
    diagnosticsTitle:'MediaCore / adapter / candidate diagnostics', diagnostics:'Diagnostics', diagnosticsEmpty:'Empty response', diagnosticsClose:'Close',
    clearNewTitle:'Clear newly detected images',
    clearNewConfirm:'Clear {count} newly detected images for {site}? They will not be added to exclusions.',
    clearHistoryTitle:'Clear download history', clearHistoryConfirm:'Clear download history for {site}?',
    zipHint:'ZIP is built as a single file. Images inside the ZIP are not recompressed.',
    autoZipFrom:'Auto-ZIP from files:', autoZipThresholdTitle:'At this number of selected new files, the Download button automatically creates a ZIP.',
    autoZipAria:'Number of files for automatic ZIP', autoZipLabel:'Automatically create a ZIP when the threshold is reached',
    autoZipLabelTitle:'When the threshold is reached, the regular Download button starts ZIP creation instead of separate files.',
    zipDownload:'Download selected as one ZIP', zipDownloadTitle:'Download all selected items as a single ZIP file',
    news:'New: {count}', downloaded:' · Downloaded: {count}', excluded:' · Excluded: {count}', limitReached:'Limit ({count}) reached!',
    chatStartDone:'Done (chat start)', pageEndDone:'Done (end of page)', extensionUpdated:'The extension was updated. Reload the page (F5).',
    telegramZipUnsupported:'ZIP is not used for Telegram yet: the Telegram module uses its own downloader.', noImagesForZip:'No images to package into ZIP.',
    ehentaiOriginalFailed:'Could not retrieve original E-Hentai images.', zipStartFailed:'Could not start ZIP download. Reload the page.',
    noImages:'No images to download.', telegramNotReady:'The Telegram module has not loaded yet. Reopen the chat or reload the page.',
    requestFailed:'Request failed. Please reload the page.', queuedTitle:'Queued for download (click to exclude)', ignoredTitle:'Excluded from download (click to restore)', downloadingTitle:'Downloading...', clearedTitle:'Removed from New (click to restore)', downloadedTitle:'Already downloaded (click to download again)', videoQueuedTitle:'Video queued for download (click to exclude)', photoQueuedTitle:'Queued for download (click to exclude)', unknown:'unknown', noSamples:'Media probes: no queued samples'
  }
};
globalThis.__UAS_LANG__ = globalThis.__UAS_LANG__ === 'en' ? 'en' : 'ru';
globalThis.uasT = function uasT(key, vars = {}) {
  const lang = globalThis.__UAS_LANG__ === 'en' ? 'en' : 'ru';
  let value = UAS_I18N[lang]?.[key] ?? UAS_I18N.ru?.[key] ?? key;
  return String(value).replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
};

if (typeof globalThis.zip === 'undefined') {


  globalThis.zip = Object.create(null);


}


// [zip-ui-settings-v2]


// [bsky-download-fix-v4] Bluesky download URL normalization


// --- Обработка видео на странице одного поста: Rule34.gg ---


function fixSinglePostVideo() {


  if (!location.pathname.includes('/post')) return;





  const videoEl = document.querySelector('video#media, .media-container video, video');


  if (!videoEl) return;





  const source = videoEl.querySelector('source');


  const ogVid = document.querySelector('meta[property="og:video"]');


  const realVideoUrl = (source && (source.src || source.getAttribute('src'))) || 


                       (ogVid && ogVid.content) || 


                       (videoEl.src && !videoEl.src.startsWith('blob:') ? videoEl.src : null);





  if (!realVideoUrl) return;





  videoEl.src = realVideoUrl;


  const mediaBox = videoEl.closest('.media-container') || videoEl.parentElement;


  if (mediaBox) {


    mediaBox.dataset.downloadUrl = realVideoUrl;


  }


}





// --- Сканирование каталога rule34.gg ---


function scanRule34GgCards() {


  if (!location.hostname.includes('rule34.gg')) return;





  if (location.pathname.includes('/post')) {


    fixSinglePostVideo();


    return;


  }





  document.querySelectorAll('.row-container .media, .media').forEach(card => {


    const link = card.querySelector('a[href*="/post?id="]');


    if (!link) return;





    const postId = link.search ? new URLSearchParams(link.search).get('id') : link.href.split('id=')[1];


    if (!postId) return;





    const img = card.querySelector('img');


    const previewSrc = img ? (img.currentSrc || img.src) : '';


    const hash = previewSrc.includes('/preview/') ? previewSrc.split('/preview/')[1].split('.')[0] : '';





    if (!card.dataset.checkedVideo && postId) {


      card.dataset.checkedVideo = 'true';





      fetch(`/post?id=${postId}`, { credentials: 'same-origin' })


        .then(r => r.text())


        .then(html => {


          const isVid = html.includes('og:video') || html.includes('<video') || html.includes('.mp4');


          if (isVid) {


            const m = html.match(/content=["'](https:\/\/cdn\.rule34\.gg\/[^"']+\.mp4)["']/i) ||


                      html.match(/src=["'](https:\/\/cdn\.rule34\.gg\/[^"']+\.mp4)["']/i);


            const videoUrl = m ? m[1] : (hash ? `https://cdn.rule34.gg/${hash}.mp4` : previewSrc);


            


            card.dataset.downloadUrl = videoUrl;


            card.dataset.isVideo = 'true';


            for (const [qKey, q] of state.readyToDownload.entries()) {
              if (!q) continue;
              const qPreview = String(q.previewUrl || '');
              const qUrl = String(q.url || '');
              if (qPreview === previewSrc || qUrl === previewSrc || (hash && qUrl.includes(`/preview/${hash}`))) {
                q.url = videoUrl;
                q.sourceUrl = videoUrl;
                q.previewUrl = previewSrc;
                q.isVideo = true;
                q.kind = 'video';
                state.readyToDownload.set(qKey, q);
                const toggle = document.querySelector(`.art-saver-card-toggle[data-key="${CSS.escape(qKey)}"]`);
                if (toggle) {
                  toggle.dataset.url = videoUrl;
                  toggle.dataset.isVideo = 'true';
                }
              }
            }
            persistQueue();
            updateUI();





            if (!card.querySelector('.r34-video-badge')) {


              const badge = document.createElement('div');


              badge.className = 'r34-video-badge';


              badge.textContent = '🎬 MP4';


              badge.style.cssText = 'position:absolute!important;top:6px!important;right:6px!important;background:#8e44ad!important;color:#fff!important;font-size:10px!important;font-weight:bold!important;padding:2px 6px!important;border-radius:4px!important;z-index:9999!important;pointer-events:none;box-shadow:0 2px 6px rgba(0,0,0,0.5);';


              card.appendChild(badge);


            }


          }


        })


        .catch(() => {});


    }


  });


}





// --- Панель управления выбором Видео / Фото ---


function injectMediaFilterControls() {


  if (document.getElementById('art-saver-media-filter')) return;


  const panel = document.querySelector('.art-saver-panel, #art-saver-panel, .batch-download-panel');


  if (!panel) return;





  const bar = document.createElement('div');


  bar.id = 'art-saver-media-filter';


  bar.style.cssText = 'display: flex; gap: 4px; margin: 4px 0; font-size: 11px; align-items: center; justify-content: center;';


  bar.innerHTML = `


    <button type="button" id="as-filter-all" style="cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid #777;background:#333;color:#fff;">Все</button>


    <button type="button" id="as-filter-photos" style="cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid #777;background:#222;color:#aaa;">🖼️ Фото</button>


    <button type="button" id="as-filter-videos" style="cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid #777;background:#222;color:#aaa;">🎬 Видео</button>


  `;





  function setFilterMode(mode) {


    document.querySelectorAll('.art-saver-card-toggle').forEach(t => {


      const isVid = t.dataset.isVideo === 'true';


      if (mode === 'photos') {


        if (isVid) { t.dataset.excluded = 'true'; t.style.background = 'rgba(50, 50, 50, 0.7)'; if (t.firstElementChild) t.firstElementChild.style.display = 'none'; }


        else { t.dataset.excluded = 'false'; t.style.background = 'rgb(0, 150, 250)'; if (t.firstElementChild) t.firstElementChild.style.display = 'block'; }


      } else if (mode === 'videos') {


        if (!isVid) { t.dataset.excluded = 'true'; t.style.background = 'rgba(50, 50, 50, 0.7)'; if (t.firstElementChild) t.firstElementChild.style.display = 'none'; }


        else { t.dataset.excluded = 'false'; t.style.background = 'rgb(142, 68, 173)'; if (t.firstElementChild) t.firstElementChild.style.display = 'block'; }


      } else {


        t.dataset.excluded = 'false';


        t.style.background = isVid ? 'rgb(142, 68, 173)' : 'rgb(0, 150, 250)';


        if (t.firstElementChild) t.firstElementChild.style.display = 'block';


      }


    });


  }





  bar.querySelector('#as-filter-all').onclick = () => setFilterMode('all');


  bar.querySelector('#as-filter-photos').onclick = () => setFilterMode('photos');


  bar.querySelector('#as-filter-videos').onclick = () => setFilterMode('videos');





  panel.appendChild(bar);


}





// --- Rule34.xxx & Rule34.gg Helpers ---


function getRule34XxxOriginal(el) {


  if (!el) return null;


  const ogImg = document.querySelector('meta[property="og:image"]');


  if (ogImg && ogImg.content) return ogImg.content;





  const origLink = Array.from(document.querySelectorAll('#post-view .link-list a')).find(a => 


    a.textContent.toLowerCase().includes('original')


  );


  if (origLink && origLink.href) return origLink.href;





  const video = document.querySelector('video source, video#image, video');


  if (video && (video.src || video.currentSrc)) return video.src || video.currentSrc;





  const singleImg = document.querySelector('img#image');


  if (singleImg) {


    const s = singleImg.src || '';


    if (s.includes('/samples/')) return s.replace('/samples/', '/images/').replace('sample_', '');


    return s;


  }





  const src = el.currentSrc || el.src || '';


  if (src.includes('/thumbnails/')) {


    return src.replace('/thumbnails/', '/images/').replace('thumbnail_', '');


  }


  return src;


}





function isVideoElement(el, url) {


  if (!el && !url) return false;


  if (el) {


    if (el.tagName === 'VIDEO' || el.closest('video')) return true;


    if (el.classList && (el.classList.contains('webm-thumb') || el.classList.contains('video'))) return true;


    const parent = el.closest ? el.closest('.media, .thumb, article') : null;


    if (parent && (parent.querySelector('video') || parent.querySelector('.webm-thumb, .video-badge'))) return true;


  }


  const checkUrl = (url || (el ? (el.currentSrc || el.src || '') : '')).toLowerCase();


  return checkUrl.includes('.mp4') || checkUrl.includes('.webm') || checkUrl.includes('format=mp4');


}





// --- Danbooru / Safebooru (donmai.us & donmai.moe) Helper ---


function getDonmaiOriginalUrl(el) {


  if (!el) return null;


  const imgContainer = document.querySelector('section.image-container, section.note-container');


  if (imgContainer) {


    const fileUrl = imgContainer.getAttribute('data-file-url');


    if (fileUrl) return fileUrl;


  }


  const viewOrigLink = document.querySelector('.image-view-original-link, #post-option-view-original a, #post-option-download a');


  if (viewOrigLink && viewOrigLink.href) return viewOrigLink.href;


  const ogImg = document.querySelector('meta[property="og:image"]');


  if (ogImg && ogImg.content) return ogImg.content;





  const article = el.closest ? el.closest('article.post-preview') : null;


  if (article) {


    const origFromArticle = article.getAttribute('data-file-url');


    if (origFromArticle) return origFromArticle;


  }


  const src = el.currentSrc || el.src || '';


  if (src.includes('/180x180/') || src.includes('/360x360/') || src.includes('/sample/')) {


    return src.replace(new RegExp('/(?:180x180|360x360|sample)/'), '/original/').replace('__sample-', '');


  }


  return src;


}





function createCheckboxForElement(container, origUrl, img, pos, isVideo = false) {


  if (!container || container.querySelector('.art-saver-card-toggle')) return;





  const toggle = document.createElement('div');


  toggle.className = 'art-saver-card-toggle';


  const key = origUrl || (img ? (img.currentSrc || img.src) : '');


  toggle.dataset.key = key;


  toggle.dataset.url = origUrl || key;


  toggle.dataset.isVideo = isVideo ? 'true' : 'false';


  toggle.title = isVideo ? (globalThis.__UAS_LANG__ === 'en' ? 'Video: exclude / add back to download' : 'Видео: исключить / вернуть в загрузку') : (globalThis.__UAS_LANG__ === 'en' ? 'Photo: exclude / add back to download' : 'Фото: исключить / вернуть в загрузку');





  const topPos = (pos && pos.top) ? pos.top : '8px';


  const leftPos = (pos && pos.left) ? pos.left : '8px';


  const bgActive = isVideo ? 'rgb(142, 68, 173)' : 'rgb(0, 150, 250)';





  toggle.style.cssText = `position: absolute !important; z-index: 2147483647 !important; width: 26px !important; height: 26px !important; border-radius: 6px !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px !important; backdrop-filter: blur(8px) !important; pointer-events: auto !important; user-select: none !important; box-sizing: border-box !important; margin: 0px !important; padding: 0px !important; line-height: 1 !important; transform: none !important; float: none !important; clear: none !important; touch-action: manipulation !important; top: ${topPos} !important; left: ${leftPos} !important; background: ${bgActive} !important; border: none !important;`;


  


  const iconSvg = isVideo


    ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="white" style="display:block!important;margin:0!important;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'


    : '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:block!important;margin:0!important;padding:0!important;"><polyline points="20 6 9 17 4 12"></polyline></svg>';





  toggle.innerHTML = iconSvg;





  toggle.addEventListener('click', (e) => {


    e.preventDefault();


    e.stopPropagation();


    const isExcluded = toggle.dataset.excluded === 'true';


    if (!isExcluded) {


      toggle.dataset.excluded = 'true';


      toggle.style.background = 'rgba(50, 50, 50, 0.7)';


      const child = toggle.firstElementChild;


      if (child) child.style.display = 'none';


    } else {


      toggle.dataset.excluded = 'false';


      toggle.style.background = bgActive;


      const child = toggle.firstElementChild;


      if (child) child.style.display = 'block';


    }


  });





  container.appendChild(toggle);


}








(() => {


  function isContextValid() {


    try {


      return typeof chrome !== 'undefined' && !!chrome.runtime && !!chrome.runtime.id;


    } catch (e) {


      return false;


    }


  }





  if (!isContextValid()) return;


  if (!isContextValid()) return;  const hostname = window.location.hostname;

  // [uas-i18n-v1] Language state for this page.
  let uasLanguage = globalThis.__UAS_LANG__ === 'en' ? 'en' : 'ru';
  const t = (key, vars = {}) => {
    globalThis.__UAS_LANG__ = uasLanguage;
    return globalThis.uasT ? globalThis.uasT(key, vars) : key;
  };





  const isTelegram = /(^|\.)telegram\.org$/i.test(hostname) || /(^|\.)webtelegram\.org$/i.test(hostname);


  const isBluesky = hostname === 'bsky.app' || hostname.endsWith('.bsky.app');





  const isPoipiku = hostname === 'poipiku.com' || hostname.endsWith('.poipiku.com');


  const isEHentai = hostname === 'e-hentai.org' || hostname.endsWith('.e-hentai.org');
  const isWallhaven = hostname === 'wallhaven.cc' || hostname === 'www.wallhaven.cc';
  // --- Определение платформы ---


  const isPixAI = hostname === 'pixai.art' || hostname.endsWith('.pixai.art');


  const isNijiero = hostname === 'nijieroarchive.com' || hostname.endsWith('.nijieroarchive.com');


  const isAIBooru = hostname === 'aibooru.online' || hostname.endsWith('.aibooru.online');


  const isPinterest = hostname.includes('pinterest.');


  const isPixiv = hostname.includes('pixiv.net');


  const isVk = hostname.includes('vk.com') || hostname.includes('vk.ru');


  const isReddit = hostname.includes('reddit.com');


  const isM4ex = hostname === 'm4ex.com' || hostname.endsWith('.m4ex.com');


  const isJoyReactor = hostname.includes('joyreactor.');


  const isMoeimg = hostname === 'moeimg.net' || hostname.endsWith('.moeimg.net');


  const isSituero = hostname === 'situero.com' || hostname.endsWith('.situero.com');


  const isLoveLiveForever = hostname === 'loveliveforever.com' || hostname.endsWith('.loveliveforever.com');


  const isNukigazo = hostname === 'nukigazo.com' || hostname.endsWith('.nukigazo.com');


  const isPttWeb = hostname === 'pttweb.cc' || hostname.endsWith('.pttweb.cc');


  const isWykop = hostname === 'wykop.pl' || hostname.endsWith('.wykop.pl');


  const isDoujinHibiki = hostname === 'doujinhibiki.net' || hostname.endsWith('.doujinhibiki.net');


  const isNijifan = hostname === 'nijifan.net' || hostname.endsWith('.nijifan.net');


  const isWarosu = hostname === 'warosu.org' || hostname.endsWith('.warosu.org');


  const isCool18 = hostname === 'cool18.com' || hostname.endsWith('.cool18.com');


  const isPlurk = hostname === 'plurk.com' || hostname.endsWith('.plurk.com');


  const isSkebetter = hostname.includes('skebetter.com');


  const isKonachan = hostname.includes('konachan.');


  const isYandere = hostname === 'yande.re' || hostname.endsWith('.yande.re');


  const isZerochan = hostname === 'zerochan.net' || hostname.endsWith('.zerochan.net');


  const isKurocore = hostname.includes('kurocore.com');


  const isBooruIo = hostname.includes('booru.io');


  const isGelbooru = hostname === 'gelbooru.com' || hostname.endsWith('.gelbooru.com');


  const isSafebooru = hostname.includes('safebooru.org');


  const isDonmai = hostname.includes('donmai') || hostname.includes('donmai.us');


  const isR34App = hostname.includes('r34.app');


  const isRule34Gg = hostname.includes('rule34.gg');


  const isRule34Us = hostname.includes('rule34.us');


  const isR34 = isR34App || isRule34Gg || isRule34Us || hostname.includes('rule34');


  const isBooru = hostname.includes('booru') || isR34 || isDonmai;


  const isFevian = hostname.includes('fevian.org');


  const isVanlett = hostname.includes('vanlett.');


  const isArchive = hostname.includes('warosu.org') || hostname.includes('palanq.win') || hostname.includes('isla-de-muerta.com');


  const isFanzaHost = hostname.includes('fanza.co.jp') || hostname.includes('dmm.co.jp');


  const isMoeero = hostname === 'xn--r8jwklh769h2mc880dk1o431a.com' || hostname === '二次萌えエロ画像.com';


  const isEroAnigif = hostname === 'ero-anigif.com' || hostname.endsWith('.ero-anigif.com');


  const isHentaiWitch = hostname === 'hentai-witch.com' || hostname.endsWith('.hentai-witch.com');


  const isFemmeDoll = hostname === 'femmedoll.jp' || hostname.endsWith('.femmedoll.jp');


  const isComichara = hostname === 'comichara.com' || hostname.endsWith('.comichara.com');


  const isHentaiAnimeAI = hostname === 'hentaianime-ai.com' || hostname.endsWith('.hentaianime-ai.com');


  const isKyaraBetsuNijiero = hostname === 'kyarabetsunijiero.net' || hostname.endsWith('.kyarabetsunijiero.net');


  const isEromanIDC = hostname === 'eromanidc.com' || hostname.endsWith('.eromanidc.com');


  const isKimootoko = hostname === 'kimootoko.net' || hostname.endsWith('.kimootoko.net');


  const isIchinuke = hostname === 'ichinuke.com' || hostname.endsWith('.ichinuke.com');


  const isErokan = hostname === 'erokan.net' || hostname.endsWith('.erokan.net');


  const isVanillaRock = hostname === 'vanilla-rock.com' || hostname.endsWith('.vanilla-rock.com');


  const isScrolller = hostname === 'scrolller.com' || hostname.endsWith('.scrolller.com');


  const isSotwe = hostname === 'sotwe.com' || hostname.endsWith('.sotwe.com');


  const isTruyenHentai = hostname === 'truyen-hentai.com' || hostname.endsWith('.truyen-hentai.com') || hostname === 'truyen-hentai.co.uk' || hostname.endsWith('.truyen-hentai.co.uk');


  // [hadasirori-v1] Специальный режим hadasirori.blog.jp


  const isErocon = hostname === 'erocon.gger.jp' || hostname.endsWith('.erocon.gger.jp');


  const isHadasirori = hostname === 'hadasirori.blog.jp' || hostname.endsWith('.hadasirori.blog.jp');


  const isNijityeki = hostname === 'nijityeki.blog.jp' || hostname.endsWith('.nijityeki.blog.jp');


  const isIslaDeMuerta = hostname.includes('isla-de-muerta.com') || hostname.includes('palanq.win') || hostname.includes('gollum.space') || hostname.includes('pikaba.monster');





  const jpBlogs = [


    'hadasirori.blog.jp', 'situero.com', 'comichara.com', 'm4ex.com', 'kyarabetsunijiero.net',


    'nijieroarchive.com', 'hentai-witch.com', 'loveliveforever.com', 'hentaianime-ai.com', 


    'eromanidc.com', 'nukigazo.com', 'erocon.gger.jp', 'kimootoko.net', 'ichinuke.com', 


    'erokan.net', 'moeimg.net', 'nijifan.net', 'xn--r8jwklh769h2mc880dk1o431a.com', 


    'ero-anigif.com', 'femmedoll.jp', 'vanilla-rock.com', 'genniji2.com'


  ];


  const isJpBlog = jpBlogs.some(d => hostname.includes(d));





  let siteKey = 'general';


  if (isTelegram) siteKey = 'telegram';


  else if (isBluesky) siteKey = 'bluesky';
  else if (isWallhaven) siteKey = 'wallhaven';


  else if (isPoipiku) siteKey = 'poipiku';
  else if (isEHentai) siteKey = 'ehentai';
  else if (isNijiero) siteKey = 'nijieroarchive';


  else if (isMoeero) siteKey = 'moeero';


  else if (isEroAnigif) siteKey = 'eroanigif';


  else if (isHentaiWitch) siteKey = 'hentaiwitch';


  else if (isFemmeDoll) siteKey = 'femmedoll';


  else if (isPixAI) siteKey = 'pixai';


  else if (isWarosu) siteKey = 'warosu';


  else if (isCool18) siteKey = 'cool18';


  else if (isPlurk) siteKey = 'plurk';


  else if (isAIBooru) siteKey = 'aibooru';


  else if (isPinterest) siteKey = 'pinterest';


  else if (isPixiv) siteKey = 'pixiv';


  else if (isVk) siteKey = 'vk';


  else if (isReddit) siteKey = 'reddit';


  else if (isJoyReactor) siteKey = 'joyreactor';


  else if (isMoeimg) siteKey = 'moeimg';


  else if (isSituero) siteKey = 'situero';


  else if (isLoveLiveForever) siteKey = 'loveliveforever';


  else if (isNukigazo) siteKey = 'nukigazo';


  else if (isPttWeb) siteKey = 'pttweb';


  else if (isWykop) siteKey = 'wykop';


  else if (isDoujinHibiki) siteKey = 'doujinhibiki';


  else if (isNijifan) siteKey = 'nijifan';


  else if (isSkebetter) siteKey = 'skebetter';


  else if (isZerochan) siteKey = 'zerochan';


  else if (isYandere) siteKey = 'yandere';


  else if (isKonachan) siteKey = 'konachan';


  else if (isKurocore) siteKey = 'kurocore';


  else if (isBooruIo) siteKey = 'booruio';


  else if (isGelbooru) siteKey = 'gelbooru';


  else if (isSafebooru) siteKey = 'safebooru';


  else if (isDonmai) siteKey = 'donmai';


  else if (isR34App) siteKey = 'r34app';


  else if (isRule34Us) siteKey = 'rule34us';


  else if (isRule34Gg) siteKey = 'rule34gg';


    else if (isR34) siteKey = 'rule34';


  else if (isIslaDeMuerta) siteKey = 'islademuerta';


  else if (isFevian) siteKey = 'fevian';


  else if (isVanlett) siteKey = 'vanlett';


  else if (isBooru) siteKey = 'booru';


  else if (isArchive) siteKey = 'archive';


  else if (isFanzaHost) siteKey = 'fanza';


  else if (isComichara) siteKey = 'comichara';


  else if (isHentaiAnimeAI) siteKey = 'hentaianimeai';


  else if (isKyaraBetsuNijiero) siteKey = 'kyarabetsunijiero';


  else if (isEromanIDC) siteKey = 'eromanidc';


  else if (isKimootoko) siteKey = 'kimootoko';


  else if (isIchinuke) siteKey = 'ichinuke';


  else if (isErokan) siteKey = 'erokan';


  else if (isVanillaRock) siteKey = 'vanillarock';


  else if (isScrolller) siteKey = 'scrolller';


  else if (isSotwe) siteKey = 'sotwe';


  else if (isTruyenHentai) siteKey = 'truyenhentai';


  else if (isErocon) siteKey = 'erocon';


  else if (isHadasirori) siteKey = 'hadasirori';


  else if (isM4ex) siteKey = 'm4ex';


  else if (isNijityeki) siteKey = 'nijityeki';


  else if (isIslaDeMuerta) siteKey = 'islademuerta';


  else siteKey = hostname.replace(/^www\./, '').split('.')[0];





  const THEMES = {


    telegram: { name: 'Telegram', icon: '✈️', primary: '#2AABEE', bg: 'rgba(20, 33, 43, 0.96)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px', border: '1px solid rgba(42, 171, 238, 0.28)', panelPad: '12px 14px' },


    bluesky: { name: 'Bluesky', icon: '🦋', primary: '#1185FE', bg: 'rgba(16, 24, 36, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },
    wallhaven: { name: 'Wallhaven', icon: '🖼️', primary: '#4f7cff', bg: 'rgba(20, 24, 34, 0.94)', cardRadius: '12px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },



    poipiku: { name: 'POIPIKU', icon: '🖼️', primary: '#e66a9f', bg: 'rgba(28, 24, 30, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },
    ehentai: { name: 'E-Hentai', icon: '📚', primary: '#9b59b6', bg: 'rgba(28, 24, 34, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },
    pixai: { name: 'PixAI', icon: '🎨', primary: '#7B61FF', bg: 'rgba(24, 24, 30, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    aibooru: { name: 'AIBooru', icon: '🖼️', primary: '#2a6496', bg: 'rgba(22, 27, 34, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    warosu: { name: 'Warosu', icon: '🗂️', primary: '#667085', bg: 'rgba(25, 25, 25, 0.94)', cardRadius: '10px', btnRadius: '6px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    cool18: { name: 'Cool18', icon: '🖼️', primary: '#e06b2d', bg: 'rgba(30, 25, 22, 0.94)', cardRadius: '10px', btnRadius: '6px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    plurk: { name: 'Plurk', icon: '🧡', primary: '#AA460F', bg: 'rgba(28, 24, 22, 0.94)', cardRadius: '12px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px', border: '1px solid rgba(170, 70, 15, 0.25)', panelPad: '14px 18px' },


    pinterest: { name: 'Pinterest', icon: '📌', primary: '#E60023', bg: 'rgba(23, 23, 23, 0.92)', cardRadius: '28px', btnRadius: '9999px', togglePos: 'bottom: 12px; left: 12px;', toggleRadius: '6px' },


    pixiv: { name: 'pixiv', icon: '🎨', primary: '#0096FA', bg: 'rgba(31, 31, 31, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 10px; left: 10px;', toggleRadius: '6px' },


    reddit: { name: 'Reddit', icon: '🤖', primary: '#FF4500', bg: 'rgba(24, 24, 27, 0.94)', cardRadius: '16px', btnRadius: '9999px', togglePos: 'top: 10px; left: 10px;', toggleRadius: '9999px' },


    vk: { name: 'ВКонтакте', icon: '💬', primary: '#0077FF', bg: 'rgba(34, 34, 34, 0.94)', cardRadius: '16px', btnRadius: '10px', togglePos: 'top: 10px; left: 10px;', toggleRadius: '50%' },


    skebetter: { name: 'Skebetter', icon: '🔞', primary: '#1D9BF0', bg: 'rgba(21, 24, 28, 0.94)', cardRadius: '16px', btnRadius: '9999px', togglePos: 'top: 10px; left: 10px;', toggleRadius: '50%' },


    fanza: { name: 'FANZA', icon: '🎀', primary: '#FF0066', bg: 'rgba(26, 20, 22, 0.94)', cardRadius: '16px', btnRadius: '8px', togglePos: 'top: 10px; left: 10px;', toggleRadius: '6px' },


    konachan: { name: 'Konachan', icon: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`, primary: '#B82C2C', bg: 'rgba(28, 22, 22, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    kurocore: { name: 'KURO', icon: '🖤', primary: '#337ab7', bg: 'rgba(20, 24, 28, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    booruio: { name: 'booru.io', icon: '🌸', primary: '#568f73', bg: 'rgba(22, 22, 28, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    gelbooru: { name: 'Gelbooru', icon: '🖼️', primary: '#7a9cc6', bg: 'rgba(22, 27, 34, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    safebooru: { name: 'Safebooru', icon: '🖼️', primary: '#2a6496', bg: 'rgba(22, 27, 34, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    donmai: { name: 'Donmai', icon: '🎋', primary: '#0073ff', bg: 'rgba(20, 24, 30, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    r34app: { name: 'R34 App', icon: '🔞', primary: '#22c55e', bg: 'rgba(18, 20, 24, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    rule34gg: { name: 'Rule34.GG', icon: '🔞', primary: '#115cfa', bg: 'rgba(20, 24, 30, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    fevian: { name: 'Fevian', icon: '⚡', primary: '#e53935', bg: 'rgba(26, 22, 22, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    vanlett: { name: 'Vanlett', icon: '🕊️', primary: '#1da1f2', bg: 'rgba(21, 24, 28, 0.94)', cardRadius: '16px', btnRadius: '9999px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '50%' },


    rule34: { name: 'Rule34', icon: '🔞', primary: '#aae5a4', bg: 'rgba(20, 26, 20, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    booru: { name: 'Booru', icon: '🖼️', primary: '#2a6496', bg: 'rgba(22, 27, 34, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    pttweb: { name: 'PTTweb', icon: '🧵', primary: '#4a6a8a', bg: 'rgba(24, 28, 32, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    wykop: { name: 'Wykop', icon: '🟠', primary: '#f58220', bg: 'rgba(28, 26, 24, 0.94)', cardRadius: '12px', btnRadius: '8px', togglePos: 'top: 7px; left: 7px;', toggleRadius: '6px' },


    doujinhibiki: { name: '同人響', icon: '📖', primary: '#9a4a72', bg: 'rgba(30, 24, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    nijifan: { name: 'にじファンタジア', icon: '🖼️', primary: '#8d4fe8', bg: 'rgba(28, 24, 34, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    moeimg: { name: 'Moeimg', icon: '🌸', primary: '#ff5a8a', bg: 'rgba(30, 24, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    situero: { name: 'Situero', icon: '🌸', primary: '#d65a9e', bg: 'rgba(30, 24, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    loveliveforever: { name: 'LoveLiveForever', icon: '💗', primary: '#e8228c', bg: 'rgba(30, 24, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    nukigazo: { name: 'Nukigazo', icon: '🖼️', primary: '#c12a8a', bg: 'rgba(30, 24, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    comichara: { name: 'ComicHara', icon: '🖼️', primary: '#7d3c98', bg: 'rgba(30, 24, 30, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    hentaianimeai: { name: 'HentaiAnime-AI', icon: '🤖', primary: '#ef6c9a', bg: 'rgba(30, 24, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    kyarabetsunijiero: { name: 'KyaraBetsuNijiero', icon: '🎭', primary: '#6c63a8', bg: 'rgba(26, 24, 32, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    eromanidc: { name: 'EromanIDC', icon: '🖼️', primary: '#cc527a', bg: 'rgba(30, 24, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    kimootoko: { name: 'Kimootoko', icon: '🖼️', primary: '#b03a5b', bg: 'rgba(30, 25, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    ichinuke: { name: 'Ichinuke', icon: '🖼️', primary: '#3578c4', bg: 'rgba(25, 27, 32, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    erokan: { name: 'Erokan', icon: '🖼️', primary: '#8b3f67', bg: 'rgba(30, 25, 29, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    vanillarock: { name: 'Vanilla-Rock', icon: '🖼️', primary: '#b04a7a', bg: 'rgba(29, 25, 28, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px' },


    truyenhentai: { name: 'TruyenHentai', icon: '🔞', primary: '#10b981', bg: 'rgba(22, 28, 30, 0.94)', cardRadius: '12px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    sotwe: { name: 'Sotwe', icon: '🐦', primary: '#1d9bf0', bg: 'rgba(21, 24, 28, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    scrolller: { name: 'Scrolller', icon: '📜', primary: '#f43f5e', bg: 'rgba(20, 20, 26, 0.94)', cardRadius: '14px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    moeero: { name: '萌えエロ画像', icon: '🖼️', primary: '#8e3c68', bg: 'rgba(30,24,29,.94)', cardRadius:'10px', btnRadius:'7px', togglePos:'top:6px;left:6px;', toggleRadius:'4px', border: '1px solid rgba(255,255,255,.08)', panelPad: '14px 18px' },


    eroanigif: { name: 'Ero-Anigif', icon: '🎞️', primary: '#b13f67', bg: 'rgba(30,24,28,.94)', cardRadius:'10px', btnRadius:'7px', togglePos:'top:6px;left:6px;', toggleRadius:'4px', border: '1px solid rgba(255,255,255,.08)', panelPad: '14px 18px' },


    hentaiwitch: { name: 'Hentai-Witch', icon: '🧙', primary: '#7e57c2', bg: 'rgba(28,25,34,.94)', cardRadius:'10px', btnRadius:'7px', togglePos:'top:6px;left:6px;', toggleRadius:'4px', border: '1px solid rgba(180,150,220,.16)', panelPad: '14px 18px' },


    femmedoll: { name: 'FemmeDoll', icon: '🎎', primary: '#b76e79', bg: 'rgba(29,25,28,.94)', cardRadius:'10px', btnRadius:'7px', togglePos:'top:6px;left:6px;', toggleRadius:'4px', border: '1px solid rgba(220,160,175,.16)', panelPad: '14px 18px' },


    nijieroarchive: { name: 'Nijiero Archive', icon: '🖼️', primary: '#8e5a7a', bg: 'rgba(29,25,30,.94)', cardRadius:'10px', btnRadius:'7px', togglePos:'top:6px;left:6px;', toggleRadius:'4px', border: '1px solid rgba(220,160,190,.14)', panelPad: '14px 18px' },


    // [hadasirori-v1]


    erocon: { name: 'Erocon', icon: '🔞', primary: '#e74c3c', bg: 'rgba(28, 24, 25, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px', border: '1px solid rgba(231, 76, 60, 0.2)', panelPad: '14px 18px' },


    hadasirori: { name: 'Hadasirori', icon: '🖼️', primary: '#b84d75', bg: 'rgba(30,24,28,.94)', cardRadius:'10px', btnRadius:'7px', togglePos:'top:6px;left:6px;', toggleRadius:'4px', border: '1px solid rgba(220,150,175,.14)', panelPad: '14px 18px' },


    nijityeki: { name: 'Nijityeki', icon: '🎀', primary: '#e64980', bg: 'rgba(30,24,28,.94)', cardRadius:'10px', btnRadius:'7px', togglePos:'top:6px;left:6px;', toggleRadius:'4px', border: '1px solid rgba(230,73,128,.18)', panelPad: '14px 18px' },


    m4ex: { name: 'M4ex', icon: '🔞', primary: '#ed7936', bg: 'rgba(28, 26, 24, 0.94)', cardRadius: '10px', btnRadius: '7px', togglePos: 'top: 6px; left: 6px;', toggleRadius: '4px', border: '1px solid rgba(237, 121, 54, 0.2)', panelPad: '14px 18px' },


    islademuerta: { name: 'IslaDeMuerta', icon: '🏴‍☠️', primary: '#00838f', bg: 'rgba(20, 26, 30, 0.94)', cardRadius: '12px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    joyreactor: { name: 'JoyReactor', icon: '☢️', primary: '#f39c12', bg: 'rgba(28, 28, 28, 0.94)', cardRadius: '12px', btnRadius: '8px', togglePos: 'top: 8px; left: 8px;', toggleRadius: '6px' },


    general: { name: hostname.replace(/^www\./, '').replace('xn--r8jwklh769h2mc880dk1o431a', '2次元画像').split('.')[0].toUpperCase(), icon: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`, primary: '#7C4DFF', bg: 'rgba(28, 28, 30, 0.94)', cardRadius: '18px', btnRadius: '12px', togglePos: 'top: 10px; left: 10px;', toggleRadius: '50%' }


  };





  const currentTheme = THEMES[siteKey] || THEMES.general;





  // [uas-lifecycle-state-v1]
  function uasSetLifecycleState(key, stateName, meta = {}) {
    const cleanKey = String(key || '');
    if (!cleanKey) return;
    state.itemStates.set(cleanKey, { state: String(stateName || 'discovered'), timestamp: new Date().toISOString(), ...meta });
  }
  function uasRefreshLifecycleStates() {
    for (const key of state.readyToDownload.keys()) uasSetLifecycleState(key, 'selected');
    for (const key of state.ignoredKeys) uasSetLifecycleState(key, 'ignored');
    for (const key of state.downloadedHistory) uasSetLifecycleState(key, 'downloaded');
    for (const key of state.clearedNewKeys) if (!state.readyToDownload.has(key) && !state.downloadedHistory.has(key) && !state.ignoredKeys.has(key)) uasSetLifecycleState(key, 'discovered-cleared');
    for (const [key, record] of state.downloadStates) if (record?.state) uasSetLifecycleState(key, record.state, { download: record });
  }
  function uasLifecycleSummary() {
    uasRefreshLifecycleStates();
    const counts = {};
    for (const value of state.itemStates.values()) { const k = String(value?.state || 'unknown'); counts[k] = (counts[k] || 0) + 1; }
    return counts;
  }

  const state = {


    readyToDownload: new Map(),


    downloadedHistory: new Set(),


    ignoredKeys: new Set(),


    inProgressKeys: new Set(),


    isScrolling: false,


    scrollInterval: null,


    isMinimized: false,


    // [clear-new-button-v1] Элементы, убранные кнопкой «Очистить новые»,


    // не считаются новыми до ручного повторного выбора. Не являются ignored.


    clearedNewKeys: new Set(),
    itemStates: new Map(),
    downloadStates: new Map()


  };





  const konachanPostMap = new Map();


  const r34AppPostMap = new Map();


  let currentUrl = window.location.href;


  let scanDebounceTimer = null;





    function getCleanFolderName() {


    // [telegram-common-folder-v1]











    if (isTelegram) {


      const candidates = [


        document.querySelector('#column-center header [class*="peer-title"]'),


        document.querySelector('#column-center header [class*="title"]'),


        document.querySelector('#column-center [class*="chat-info"] [class*="peer-title"]'),


        document.querySelector('#column-center [class*="chat-info"] [dir="auto"]'),


        document.querySelector('#RightColumn header [dir="auto"]'),


      ];


      let chatTitle = candidates.map(el => el?.textContent?.trim()).find(Boolean) || '';


      if (!chatTitle || /^Telegram$/i.test(chatTitle)) {


        chatTitle = (document.title || '').replace(/\s*[-|]\s*Telegram.*$/i, '').trim() || 'Chat';


      }


      return `Telegram_${chatTitle}`.replace(/[\/:*?"<>|]/g, '_').replace(/\s+/g, ' ').trim().substring(0, 50) || 'Telegram';


    }





    let title = '';





    // [bsky-v1] Понятные подпапки для профиля / поста / поиска.


    if (isBluesky) {


      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');


      const postMatch = path.match(/^profile\/([^/]+)\/post\/([^/]+)/i);


      const profileMatch = path.match(/^profile\/([^/]+)/i);


      const searchQ = new URLSearchParams(window.location.search).get('q') || '';


      if (postMatch) title = `Post_${postMatch[2]}`;


      else if (profileMatch) title = `User_${decodeURIComponent(profileMatch[1])}`;


      else if (searchQ) title = `Search_${searchQ}`;


      else title = 'Feed';


    }





    // [poipiku-support-v2] folder
    if (isPoipiku) {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const parts = path.split('/').filter(Boolean);
      const accountId = parts[0] || '';
      const contentId = (parts[1] || '').replace(/\.html$/i, '');
      const tagQ = new URLSearchParams(window.location.search).get('KWD') || '';
      if (accountId && contentId && /^\d+$/.test(contentId)) title = `Post_${contentId}`;
      else if (accountId && /^\d+$/.test(accountId)) title = `User_${accountId}`;
      else if (tagQ) title = `Tag_${tagQ}`;
      else title = 'Feed';
    }

    if (isEHentai) {
      const galleryTitle =
        document.querySelector('#gn')?.textContent?.trim() ||
        document.title?.replace(/\s*[-|]\s*E-Hentai.*$/i, '').trim() ||
        'Gallery';
      const g = window.location.pathname.match(/^\/g\/(\d+)\//i);
      const s = window.location.pathname.match(/^\/s\/[a-f0-9]+\/(\d+)-(\d+)/i);
      title = g
        ? `Gallery_${g[1]}_${galleryTitle}`
        : (s ? `Page_${s[1]}_${s[2]}` : galleryTitle);
    }

    if (isYandere) {


      const urlParams = new URLSearchParams(window.location.search);


      const tags = urlParams.get('tags');


      const postMatch = window.location.pathname.match(/\/post\/show\/(\d+)/i);


      title = postMatch ? `post_${postMatch[1]}` : (tags ? `tags_${tags}` : 'Gallery');


    } else if (isIslaDeMuerta) {


      const searchParam = new URLSearchParams(window.location.search).get('search');


      const tagParam = new URLSearchParams(window.location.search).get('name');


      const postMatch = window.location.pathname.match(/\/post\/(\d+)/i);


      const userMatch = window.location.pathname.match(/\/user\/([^-/]+)/i);


      const communityMatch = window.location.pathname.match(/\/community\/([^-/]+)/i);





      if (postMatch) {


        const postH4 = document.querySelector('.card-white h4, h1')?.textContent?.trim()?.replace(/\s+/g, ' ');


        title = postH4 ? `Post_${postMatch[1]}_${postH4}` : `Post_${postMatch[1]}`;


      } else if (searchParam) {


        title = `Search_${searchParam}`;


      } else if (tagParam) {


        title = `Tag_${tagParam}`;


      } else if (userMatch) {


        title = `User_${userMatch[1]}`;


      } else if (communityMatch) {


        title = `Community_${communityMatch[1]}`;


      } else {


        const h1 = document.querySelector('h1')?.textContent?.trim();


        title = h1 ? h1 : 'Feed';


      }


    } else if (isErocon) {


      const isArticlePage = /^\/archives\//i.test(window.location.pathname);


      title = isArticlePage


        ? (document.querySelector('h1.article-title, .article-title, h1')?.textContent?.trim() || document.title || 'Article')


        : 'Feed';


    } else if (isNijityeki) {


      const isArticlePage = /^\/archives\//i.test(window.location.pathname);


      title = isArticlePage


        ? (document.querySelector('h2.article-title, .article-title, h1')?.textContent?.trim() || document.title || 'Article')


        : 'Feed';


    } else if (isHadasirori) {


      const isArticlePage = /^\/archives\//i.test(window.location.pathname);


      title = isArticlePage


        ? (document.querySelector('h2.article-title.entry-title, h2.article-title, .article-title')?.textContent?.trim() || document.title || 'Article')


        : 'Feed';


    } else if (isNijiero) title = document.querySelector('.entry-title, .entry-card-title, h1')?.textContent?.trim() || document.title || 'Gallery';


    else if (isMoeero) title = document.querySelector('.c-postTitle__ttl, .entry-title, h1')?.textContent?.trim() || document.title || 'Article';


    else if (isEroAnigif) title = document.querySelector('.entry-title, h1')?.textContent?.trim() || document.title || 'Article';


    else if (isHentaiWitch) title = document.querySelector('.entry-title, h1')?.textContent?.trim() || document.title || 'Gallery';


    else if (isFemmeDoll) title = document.querySelector('.c-postTitle__ttl, .entry-title, h1')?.textContent?.trim() || document.title || 'Gallery';


    else if (isR34App) {


      const urlParams = new URLSearchParams(window.location.search);


      const tags = urlParams.get('tags');


      title = tags ? `tags_${tags}` : (window.location.pathname.match(/\/posts\/[^/]+\/([^/]+)/)?.[1] ? `tag_${window.location.pathname.match(/\/posts\/[^/]+\/([^/]+)/)[1]}` : 'Feed');


    } else if (isRule34Gg) {


      const urlParams = new URLSearchParams(window.location.search);


      const tags = urlParams.get('tags');


      title = tags ? `tags_${tags}` : 'Gallery';


    } else if (isFevian) {


      const activeCategory = document.querySelector('nav .menu-cat.current')?.innerText?.trim();


      title = activeCategory ? `Category_${activeCategory}` : 'Feed';


    } else if (isVanlett) {


      const urlParams = new URLSearchParams(window.location.search);


      const q = urlParams.get('q');


      const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');


      title = q ? `Search_${q}` : (pathname && !pathname.includes('/') ? `User_${pathname}` : 'Feed');


    } else if (isKurocore) {


      const urlParams = new URLSearchParams(window.location.search);


      const q = urlParams.get('q');


      const mode = urlParams.get('mode') || document.querySelector('select[name="mode"]')?.value;


      const date = urlParams.get('date') || document.querySelector('input[name="date"]')?.value;


      const path = window.location.pathname;


      if (path.includes('/illust/')) title = `illust_${path.split('/illust/')[1].split('/')[0]}`;


      else if (path.includes('/ranking')) title = `ranking_${mode || 'daily'}${date ? `_${date}` : ''}`;


      else if (q) title = `tag_${q}`;


      else title = 'Gallery';


    } else if (isPixAI) {


      const path = window.location.pathname.replace(/^[/]+|[/]+$/g, '');


      title = (path.startsWith('post/') || path.startsWith('artwork/')) ? `post_${path.split('/')[1] || ''}` : (new URLSearchParams(window.location.search).get('q') ? `search_${new URLSearchParams(window.location.search).get('q')}` : 'Gallery');


    } else if (isAIBooru) {


      const tags = new URLSearchParams(window.location.search).get('tags');


      const postMatch = window.location.pathname.match(/[/]posts[/]([0-9]+)/i);


      title = postMatch ? `post_${postMatch[1]}` : (tags ? `tags_${tags}` : 'Gallery');


    } else if (isWarosu) {


      const board = (window.location.pathname.match(/^\/([^/]+)\//) || [])[1] || 'board';


      const thread = (window.location.pathname.match(/\/thread\/([0-9]+)/) || [])[1];


      title = thread ? `Thread_${board}_${thread}` : `Gallery_${board}`;


    } else if (isCool18) {


      title = document.querySelector('.main-title, h1.main-title')?.textContent?.trim() || document.title || 'Thread';


    } else if (isPlurk) {


      const pid = window.location.pathname.match(/\/p\/([a-z0-9]+)/i)?.[1];


      const user = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/')[0];


      title = pid ? `Plurk_${pid}` : (user && user !== 'm' && user !== 'portal' ? `User_${user}` : 'Timeline');


    } else if (isPttWeb) {


      const board = (window.location.pathname.match(/^\/bbs\/([^/]+)/i) || [])[1] || 'board';


      const thread = (window.location.pathname.match(/\/M\.([^/]+)$/i) || [])[1] || 'thread';


      title = `${board}_${thread}`;


    } else if (isWykop) {


      title = 'Gallery';


    } else if (isDoujinHibiki) {


      title = document.querySelector('h1.kobetsuP_textBox')?.textContent?.trim() || 'Article';


    } else if (isNijifan) {


      title = document.querySelector('.sc7-hero-title-area h1, h1.entry-title, h1')?.textContent?.trim() || 'Article';


    } else if (isDonmai) {


      const tags = new URLSearchParams(window.location.search).get('tags') || document.querySelector('input[name="tags"]')?.value?.trim();


      title = tags ? `tags_${tags}` : (window.location.pathname.match(/\/posts\/(\d+)/)?.[1] ? `post_${window.location.pathname.match(/\/posts\/(\d+)/)[1]}` : 'Feed');


    } else if (isBooruIo) {


      const qMatch = window.location.pathname.match(/\/q\/([^/]+)/);


      const pMatch = window.location.pathname.match(/\/p\/([^/]+)/);


      title = qMatch ? decodeURIComponent(qMatch[1]).replace(/%23/g, '_').replace(/#/g, '_') : (pMatch ? `post_${pMatch[1]}` : (document.querySelector('input[placeholder*="Search"]')?.value?.trim() ? `search_${document.querySelector('input[placeholder*="Search"]').value.trim()}` : 'Home'));


    } else if (isSafebooru || isBooru) {


      const urlParams = new URLSearchParams(window.location.search);


      const currentTags = (urlParams.get('tags') && urlParams.get('tags') !== 'all') ? urlParams.get('tags') : document.querySelector('input[name="tags"]')?.value?.trim();


      title = currentTags ? `tags_${currentTags}` : (urlParams.get('id') ? `post_${urlParams.get('id')}` : 'Gallery');


    } else if (isJoyReactor) {


      const postId = (window.location.pathname.match(/\/post\/([0-9]+)/) || [])[1];


      title = postId ? `Post_${postId}` : 'Feed';


    }





    if (isTruyenHentai) {


      if (window.location.pathname.includes('/shorts/') || window.location.pathname.includes('/blog/')) {


        const h1 = document.querySelector('.blog-title h1, h1')?.textContent?.replace(/🔥/g, '').replace(/\[\d+\s*hentai\s*pics\]/i, '').trim();


        const slug = window.location.pathname.match(/\/(?:shorts|blog)\/([^/]+)/)?.[1] || '';


        title = h1 ? `Shorts_${h1}` : (slug ? `Shorts_${slug}` : 'Shorts');


      } else if (document.body?.id === 'page-media' || document.body?.classList?.contains('site_media') || window.location.pathname.includes('-porn/')) {


        const titleEl = document.querySelector('.main-media-title');


        const h1 = titleEl?.getAttribute('data-full-title') || titleEl?.textContent?.trim() || document.querySelector('h1')?.textContent?.trim();


        const cat = document.querySelector('.media-tags-wrapper__category a')?.textContent?.trim();


        title = h1 ? (cat ? `${cat}_${h1}` : h1) : 'Post';


      } else if (window.location.pathname.includes('/xxx-category/')) {


        const cat = window.location.pathname.match(/\/xxx-category\/([^/]+)/)?.[1] || '';


        title = `Category_${cat}`;


      } else if (window.location.pathname.includes('/collections/')) {


        const col = window.location.pathname.match(/\/collections\/([^/]+)/)?.[1] || '';


        title = `Collection_${col}`;


      } else {


        const searchQ = new URLSearchParams(window.location.search).get('search_term_string') || new URLSearchParams(window.location.search).get('q');


        title = searchQ ? `Search_${searchQ}` : (window.selected_category && window.selected_category !== 'all' ? `Category_${window.selected_category}` : 'Feed');


      }


    }











    if (isSotwe) {


      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');


      const searchMatch = window.location.pathname.match(/\/search\/(.+)/i);


      const hashtagMatch = window.location.pathname.match(/\/hashtag\/(.+)/i);


      const tweetMatch = window.location.pathname.match(/\/tweet\/([0-9]+)/i);





      if (hashtagMatch) {


        title = `hashtag_${decodeURIComponent(hashtagMatch[1]).replace(/^#/, '')}`;


      } else if (searchMatch) {


        title = `search_${decodeURIComponent(searchMatch[1]).replace(/^#/, 'hash_')}`;


      } else if (tweetMatch) {


        title = `tweet_${tweetMatch[1]}`;


      } else if (path && !['search', 'about', 'privacy-policy', 'terms-of-service', 'pricing', 'login', 'signup'].includes(path.toLowerCase())) {


        const username = path.split('/')[0];


        title = `user_${username}`;


      } else {


        title = document.querySelector('h1')?.textContent?.trim() || document.title || 'Feed';


      }


    }





    if (isRule34Us) {


      const params = new URLSearchParams(window.location.search);


      const q = params.get('q');


      const id = params.get('id');


      title = q ? `q_${q}` : (id ? `post_${id}` : 'Gallery');


    }





    if (isReddit) {


      const subMatch = window.location.pathname.match(/\/(r|user|u)\/([^/]+)/i);


      if (subMatch) title = `${subMatch[1]}_${subMatch[2]}`;


    } else if (isPixiv) {


      const userMatch = window.location.pathname.match(/\/users\/(\d+)/);


      const tagMatch = window.location.pathname.match(/\/tags\/([^/]+)/);


      if (userMatch) title = `User_${userMatch[1]}`;


      else if (tagMatch) title = `Tag_${decodeURIComponent(tagMatch[1])}`;


      else if (window.location.pathname.includes('/artworks/')) title = `Artwork_${window.location.pathname.split('/artworks/')[1].split('/')[0]}`;


    } else if (isVk) {


      const wallMatch = window.location.pathname.match(/\/(wall[-0-9_]+|public\d+|club\d+|id\d+|[a-zA-Z0-9_.]+)/);


      if (wallMatch && wallMatch[1] && wallMatch[1] !== 'feed' && wallMatch[1] !== 'im') title = wallMatch[1];


    }





    if (isWallhaven) {
      const id = wallhavenIdFromUrl(window.location.pathname);
      const q = new URLSearchParams(window.location.search).get('q') || '';
      if (id) title = `Wallpaper_${id}`;
      else if (q) title = `Search_${q}`;
      else title = 'Gallery';
    }

    if (!title) title = document.querySelector('h1')?.innerText?.trim() || document.title;


    title = title.replace(/pikaba monster|pikaba\.monster|isla-de-muerta\.com|isla-de-muerta|gollum\.space|palanq\.win|Rule 34 App|rule34\.gg|フェビアンテナ|\|\s*vanlett|vanlett|\|\s*KURO|KURO|\|\s*booru\.io|booru\.io|\|\s*Donmai|Donmai|\|\s*Pinterest|Pinterest|-\s*pixiv|pixiv|ВКонтакте|\|\s*えろまじょさん|\|\s*ファムドール|\|\s*にじえろアーカイブ|\|\s*Sotwe|Sotwe|\|\s*Truyen-Hentai\.com|Truyen-Hentai\.com/gi, '').trim();


    return `${currentTheme.name}_${title || 'Gallery'}`.replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, ' ').trim().substring(0, 50) || 'General';


  }





  function getImageKey(url) {


    if (!url) return '';


    const clean = url.split('?')[0].split('#')[0];





    // [telegram-common-key-v1]











    if (isTelegram) {


      let h = 2166136261;


      const seed = `telegram:${clean}`;


      for (let i = 0; i < seed.length; i++) {


        h ^= seed.charCodeAt(i);


        h = Math.imul(h, 16777619);


      }


      return `tg_${(h >>> 0).toString(16)}`;


    }





    if (isWallhaven) {
      const m = clean.match(/(?:\/(?:w|wallpaper)\/)([A-Za-z0-9]+)/i)
        || clean.match(/wallhaven-([A-Za-z0-9]+)\.(?:jpe?g|png|gif|webp|avif)$/i);
      if (m) return `wh_${m[1]}`;
    }

    // [bsky-v1] CID является стабильным идентификатором медиа Bluesky.


    if (isBluesky) {


      const m = clean.match(/\/img\/(?:feed_fullsize|feed_thumbnail|feed_small)\/plain\/did:[^/]+\/([^/@?#]+)(?:@[^/?#]+)?$/i);


      if (m) return `bsky_${m[1]}`;


    }





    if (isEHentai) {
      const ehPage = clean.match(/\/s\/[a-f0-9]{8,12}\/(\d+)-(\d+)(?:\/\d+)?$/i);
      if (ehPage) return `eh_${ehPage[1]}_${ehPage[2]}`;

      const ehFull = clean.match(/\/fullimg\/(\d+)\/(\d+)\/[^/]+\/([^/?#]+)$/i);
      if (ehFull) return `eh_${ehFull[1]}_${ehFull[2]}`;
    }

    // [poipiku-support-v2] stable key
    if (isPoipiku) {
      const m = clean.match(/\/(\d{9})\/([^/]+?)(?:_\d{2,4}\.jpg)?$/i);
      if (m) return `poipiku_${m[1]}_${m[2]}`;
    }


    if (isZerochan) {


      const m = clean.match(/(?:full\.)?(\d{5,9})\.(?:jpe?g|png|webp|avif|gif)$/i) || clean.match(/\/(\d{5,9})(?:[?#]|$)/);


      if (m) return `zc_${m[1]}`;


    }





    if (isYandere) {


      const mMd5 = clean.match(/([a-f0-9]{32})/i);


      if (mMd5) return `yd_${mMd5[1]}`;


    }





    if (isIslaDeMuerta) {


      const filename = clean.split('/').pop() || '';


      return filename.replace(/\.[a-z0-9]+$/i, '').replace(/_(?:lg|s|fb)$/i, '');


    }





    if (isErocon || isHadasirori || isNijityeki) {


      const m = clean.match(/\/imgs\/[0-9a-f]\/[0-9a-f]\/([^?#]+)\.(?:jpe?g|png|gif|webp)$/i);


      if (m) return m[1].replace(/-(?:s|m|l)$/i, '');


    }





    if (isSotwe || url.includes('video.twimg.com')) {


      if (url.includes('pbs.twimg.com/media/')) {


        const m = clean.match(/\/media\/([a-zA-Z0-9_-]+)/);


        if (m) return m[1].replace(/\.[a-z0-9]+$/i, '');


      }


      const vidMatch = clean.match(/(?:amplify_video|ext_tw_video)\/(\d+)/i);


      const fileMatch = clean.match(/\/([a-zA-Z0-9_-]+)\.(?:mp4|webm)$/i);


      if (vidMatch && fileMatch) return `tw_vid_${vidMatch[1]}_${fileMatch[1]}`;


      if (vidMatch) return `tw_vid_${vidMatch[1]}`;


      if (fileMatch) return `tw_vid_${fileMatch[1]}`;


    }





    if (url.includes('pbs.twimg.com/media/')) {


      const m = clean.match(/\/media\/([a-zA-Z0-9_-]+)/);


      if (m) return m[1];


    }





    if (isTruyenHentai) {


      const cleanName = clean.split('/').pop() || '';


      return cleanName.replace(/\.[a-z0-9]+$/i, '');


    }





    if (isScrolller) {


      const name = clean.split('/').pop() || '';


      return name


        .replace(/\.[a-z0-9]+$/i, '')


        .replace(/-\d+x\d+$/i, '')


        .replace(/^(?:video_|preview_|thumb_)/i, '');


    }





    if (isWarosu) {


      const filename = clean.split('/').pop() || '';


      return filename.replace(/\.[a-z0-9]+$/i, '').replace(/s$/i, '');


    }





    if (isNijiero || isMoeero || isEroAnigif || isHentaiWitch || isFemmeDoll) {


      const base = clean.split('/').pop() || '';


      const k = base.match(/^(.+?)(?:-\d+x\d+|-scaled|-thumbnail)?(?:\.(?:jpe?g|png|gif))?(?:\.(?:jpe?g|png|gif|webp))$/i);


      if (k) return k[1];


    }


    if (isKimootoko || isIchinuke || isErokan || isVanillaRock || isComichara || isHentaiAnimeAI || isKyaraBetsuNijiero || isEromanIDC) {


      const m = clean.match(/\/([^/]+?)(?:\.jpg\.webp|\.jpeg\.webp|\.png\.webp|\.gif\.webp|\.webp|\.jpe?g|\.png|\.gif)$/i);


      if (m) return m[1].replace(/-(?:\d+x\d+|scaled|thumbnail)$/i, '');


    }


    if (isPttWeb) {


      const m = clean.match(/\/([A-Za-z0-9_-]+)\.(?:jpe?g|png|gif|webp)$/i);


      if (m) return m[1];


    }


    if (isWykop) {


      const m = clean.match(/\/cdn\/[^/]+\/([^/,?]+)(?:,|\.)/i);


      if (m) return m[1];


    }


    if (isDoujinHibiki || isNijifan) {


      const m = clean.match(/\/([^/]+)\.(?:jpe?g|png|gif|webp)$/i);


      if (m) return m[1].replace(/-(?:\d+x\d+|thumbnail|scaled)$/i, '');


    }


    if (isJoyReactor || isCool18 || isPlurk) {


      const name = clean.split('/').pop() || '';


      return name.replace(/\.[a-z0-9]+$/i, '').replace(/^(?:mx_|s_|m_|u_|thumb_|\d+x\d+_|\d+_)/i, '');


    }


    if (isMoeimg) {


      const m = clean.match(/\/archives23\/\d+\/([^/]+)\.(?:jpe?g|png|gif|webp)$/i);


      if (m) return m[1];


    }


    if (isSituero || isLoveLiveForever || isNukigazo) {


      const m = clean.match(/\/([^/]+)\.(?:jpe?g|png|gif|webp)(?:\.webp)?$/i);


      if (m) return m[1].replace(/-(?:\d+x\d+|thumbnail|scaled)$/i, '');


    }





    const booruIoMatch = clean.match(/\/data\/([a-zA-Z0-9_-]+)(?:\/|$)/);


    if (booruIoMatch) return booruIoMatch[1];





    const hashMatch = clean.match(/(?:^|\/|_|-)([a-f0-9]{32,40})(?:\.[a-z0-9]+)?$/i);


    if (hashMatch) return hashMatch[1];





    const parts = clean.split('/').filter(Boolean);


    if (parts.length >= 2) {


      const last = parts[parts.length - 1];


      const prev = parts[parts.length - 2];


      if (/^(?:tr\.)?(?:300x|1000x|preview|thumb|thumbnail|sample|original|image|orig)\.[a-z0-9]+$/i.test(last) || /^(?:original|full|large|sample|image)$/i.test(last)) {


        return `${prev}_${last}`;


      }


    }


    return parts.pop() || '';


  }





  function getRule34UsPostKey(el, fallbackUrl = '') {


    if (!isRule34Us) return '';


    const anchor = el?.closest('.thumbail-container > div > a[id], .thumbail-container a[id]');


    const anchorId = anchor?.getAttribute('id') || '';


    if (/^\d+$/.test(anchorId)) return `post_${anchorId}`;





    const href = anchor?.getAttribute('href') || anchor?.href || '';


    const hrefId = String(href).match(/[?&]id=(\d+)/i)?.[1];


    if (hrefId) return `post_${hrefId}`;





    const params = new URLSearchParams(window.location.search);


    const pageId = params.get('id');


    if (pageId && /^\d+$/.test(pageId)) return `post_${pageId}`;





    const m = String(fallbackUrl || '').split('?')[0].split('#')[0].match(


      /\/(?:images|thumbnails)\/[^/]+\/[^/]+\/(?:thumbnail_)?([^/]+?)\.(?:jpe?g|png|gif|webp)$/i


    );


    return m ? m[1] : '';


  }





  function cacheR34AppPosts() {


    if (!isR34App) return;


    try {


      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => {


        const text = s.textContent;


        if (text && text.includes('contentUrl')) {


          const parsed = JSON.parse(text);


          const graph = parsed['@graph'] || (Array.isArray(parsed) ? parsed : [parsed]);


          for (const item of graph) {


            if (item && item.contentUrl) {


              const key = getImageKey(item.contentUrl);


              if (key) r34AppPostMap.set(key, item.contentUrl);


            }


          }


        }


      });


    } catch (e) {}


  }





  function normalizeGelbooruOriginalUrl(value) {


    if (!value) return null;


    try {


      const u = new URL(value, window.location.href);


      u.protocol = 'https:';


      u.hash = '';


      u.search = '';





      if (!/^img\d+\.gelbooru\.com$/i.test(u.hostname)) return null;





      const path = u.pathname;


      if (/\/thumbnails\//i.test(path)) {


        u.pathname = path.replace(/\/thumbnails\//i, '/images/').replace(/\/thumbnail_/i, '/');


      } else if (/\/samples\//i.test(path)) {


        u.pathname = path.replace(/\/samples\//i, '/images/').replace(/\/sample_/i, '/');


      }





      if (


        !/\/(?:images|videos|video|media)\//i.test(u.pathname) &&


        !/\.(?:jpe?g|png|gif|webp|webm|mp4)$/i.test(u.pathname)


      ) {


        return null;


      }





      return u.href;


    } catch (e) {


      return null;


    }


  }





  function getGelbooruOriginalUrl(el, fallbackUrl = '') {


    const normalize = (href) => normalizeGelbooruOriginalUrl(href);





    for (const a of Array.from(document.querySelectorAll('a[href]'))) {


      const href = a.getAttribute('href') || a.href || '';


      const text = (a.textContent || '').trim().toLowerCase();





      if (


        normalize(href) &&


        (


          text.includes('original image') ||


          text === 'original' ||


          text.includes('download')


        )


      ) {


        return normalize(href) || a.href;


      }


    }





    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');


    const ogOriginal = normalize(ogImage);


    if (ogOriginal) return ogOriginal;





    const mainImage = document.querySelector('#image');


    if (mainImage) {


      const source = mainImage.currentSrc || mainImage.src || mainImage.getAttribute('src');


      const normalized = normalize(source);


      if (normalized) return normalized;


    }





    const mainVideo = document.querySelector('video');


    if (mainVideo) {


      const source = mainVideo.querySelector('source[src], source[data-src]');


      const videoUrl = source?.getAttribute('src') ||


                       source?.getAttribute('data-src') ||


                       mainVideo.currentSrc ||


                       mainVideo.src;


      const normalized = normalize(videoUrl);


      if (normalized) return normalized;


    }





    return normalize(fallbackUrl);


  }





  function getBooruOriginalUrl() {


    const linkListA = Array.from(document.querySelectorAll('.link-list a, #post-view a, #post-option-download a, #post-information a'));


    for (const a of linkListA) {


      const text = a.textContent ? a.textContent.trim().toLowerCase() : '';


      if (text.includes('original image') || text.includes('download') || a.parentElement?.id === 'post-option-download') {


        const href = a.getAttribute('href') || a.href;


        if (href && href !== '#') return new URL(href, window.location.href).href;


      }


    }


    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');


    if (ogImage && (ogImage.includes('/images/') || ogImage.includes('/original/') || ogImage.includes('/posts/'))) {


      return new URL(ogImage, window.location.href).href;


    }


    return null;


  }





  // [gelbooru-v3-exact]


  function isValidGelbooruOriginalUrl(value) {


    if (!value) return false;


    try {


      const u = new URL(value, window.location.href);


      return /^https?:\/\/img\d+\.gelbooru\.com\/images\/[^?#]+\.(?:jpe?g|png|gif|webp|webm|mp4)$/i.test(u.href);


    } catch (e) {


      return false;


    }


  }





  function getGelbooruOriginalFromDocument(doc, baseUrl) {


    if (!doc) return null;





    // Главное: берём ИМЕННО ссылку, которую Gelbooru помечает как Original image.


    for (const a of Array.from(doc.querySelectorAll('a[href]'))) {


      const label = (a.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();


      if (!label.includes('original image')) continue;





      const href = a.getAttribute('href') || '';


      if (!href) continue;





      try {


        const absolute = new URL(href, baseUrl || window.location.href).href.split('#')[0];


        if (isValidGelbooruOriginalUrl(absolute)) return absolute;


      } catch (e) {}


    }





    // На посте og:image тоже указывает непосредственно на оригинал.


    const og = doc.querySelector('meta[property="og:image"]')?.getAttribute('content');


    if (og) {


      try {


        const absolute = new URL(og, baseUrl || window.location.href).href.split('#')[0];


        if (isValidGelbooruOriginalUrl(absolute)) return absolute;


      } catch (e) {}


    }





    return null;


  }





  function getGelbooruCurrentPageOriginal() {


    return getGelbooruOriginalFromDocument(document, window.location.href);


  }





  async function fetchGelbooruPostOriginal(postUrl) {


    if (!postUrl) return null;





    let absolutePostUrl = '';


    try {


      absolutePostUrl = new URL(postUrl, window.location.href).href;


    } catch (e) {


      return null;


    }





    if (!/^https?:\/\/(?:www\.)?gelbooru\.com\/index\.php(?:\?|$)/i.test(absolutePostUrl)) {


      return null;


    }





    try {


      const response = await fetch(absolutePostUrl, {


        method: 'GET',


        credentials: 'same-origin',


        cache: 'no-store',


        headers: { 'Accept': 'text/html,application/xhtml+xml' }


      });





      if (!response.ok) return null;





      const ct = (response.headers.get('content-type') || '').toLowerCase();


      if (ct && !ct.includes('text/html') && !ct.includes('xhtml')) return null;





      const html = await response.text();


      if (!html || html.length < 500) return null;





      const doc = new DOMParser().parseFromString(html, 'text/html');


      return getGelbooruOriginalFromDocument(doc, absolutePostUrl);


    } catch (e) {


      return null;


    }


  }





  const gelbooruOriginalCache = new Map();


  const gelbooruOriginalPending = new Map();


  const gelbooruFetchQueue = [];


  let activeGelbooruFetches = 0;


  const MAX_GELBOORU_CONCURRENT = 2;





  function pumpGelbooruQueue() {


    while (activeGelbooruFetches < MAX_GELBOORU_CONCURRENT && gelbooruFetchQueue.length > 0) {


      const task = gelbooruFetchQueue.shift();


      activeGelbooruFetches++;


      task().finally(() => {


        activeGelbooruFetches--;


        setTimeout(pumpGelbooruQueue, 120);


      });


    }


  }





  function resolveGelbooruPostCached(postUrl) {


    if (!postUrl) return Promise.resolve(null);





    let clean = '';


    try {


      const u = new URL(postUrl, window.location.href);


      u.hash = '';


      clean = u.href;


    } catch (e) {


      return Promise.resolve(null);


    }





    if (gelbooruOriginalCache.has(clean)) {


      return Promise.resolve(gelbooruOriginalCache.get(clean));


    }





    if (gelbooruOriginalPending.has(clean)) {


      return gelbooruOriginalPending.get(clean);


    }





    const promise = new Promise((resolve) => {


      gelbooruFetchQueue.push(() => {


        return fetchGelbooruPostOriginal(clean)


          .then(original => {


            gelbooruOriginalCache.set(clean, original || null);


            resolve(original || null);


          })


          .catch(() => {


            gelbooruOriginalCache.set(clean, null);


            resolve(null);


          })


          .finally(() => gelbooruOriginalPending.delete(clean));


      });


      pumpGelbooruQueue();


    });





    gelbooruOriginalPending.set(clean, promise);


    return promise;


  }


  function __disabled_original_resolveGelbooruPostCached(postUrl) {


    if (!postUrl) return Promise.resolve(null);





    let clean = '';


    try {


      const u = new URL(postUrl, window.location.href);


      u.hash = '';


      clean = u.href;


    } catch (e) {


      return Promise.resolve(null);


    }





    if (gelbooruOriginalCache.has(clean)) {


      return Promise.resolve(gelbooruOriginalCache.get(clean));


    }





    if (gelbooruOriginalPending.has(clean)) {


      return gelbooruOriginalPending.get(clean);


    }





    const promise = fetchGelbooruPostOriginal(clean)


      .then(original => {


        gelbooruOriginalCache.set(clean, original || null);


        return original || null;


      })


      .catch(() => {


        gelbooruOriginalCache.set(clean, null);


        return null;


      })


      .finally(() => gelbooruOriginalPending.delete(clean));





    gelbooruOriginalPending.set(clean, promise);


    return promise;


  }





    // [zerochan-v1] Кэш и резолвер прямых оригиналов Zerochan


  const zerochanOriginalCache = new Map();


  const zerochanOriginalPending = new Map();





  async function fetchZerochanPostOriginal(postId) {


    const id = String(postId || '').match(/\d{5,9}/)?.[0] || '';


    if (!id) return null;





    const normalize = (value) => {


      if (!value) return null;


      try {


        return new URL(String(value).trim(), 'https://www.zerochan.net/').href;


      } catch (_) {


        return null;


      }


    };





    try {


      const res = await fetch(`https://www.zerochan.net/${id}?json`, {


        headers: { 'Accept': 'application/json' },


        credentials: 'same-origin'


      });


      if (res.ok) {


        const data = await res.json();


        const direct = normalize(data?.full || data?.original || data?.contentUrl);


        if (direct) return direct;


      }


    } catch (_) {}





    try {


      const res = await fetch(`https://www.zerochan.net/${id}`, {


        credentials: 'same-origin'


      });


      if (res.ok) {


        const html = await res.text();


        const candidates = [


          html.match(/<a[^>]*class=["'][^"']*\bpreview\b[^"']*["'][^>]*href=["']([^"']+)["']/i)?.[1],


          html.match(/href=["'](https:\/\/static\.zerochan\.net\/[^"']+\.full\.\d{5,9}\.[a-z0-9]+)["']/i)?.[1],


          html.match(/fullsizeUrl\s*=\s*["']([^"']+)["']/i)?.[1],


          html.match(/"contentUrl"\s*:\s*"([^"]+)"/i)?.[1],


          html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1]


        ];


        for (const candidate of candidates) {


          const direct = normalize(candidate);


          if (direct) return direct;


        }


      }


    } catch (_) {}





    return null;


  }





    function getZerochanCardFullUrl(card, img, postId) {


    if (!card || !img || !postId) return null;


    const tag = card.querySelector('p a')?.textContent?.trim() || img.getAttribute('alt')?.trim() || '';


    const title = img.getAttribute('title') || '';


    const extMatch = title.match(/\b(jpg|jpeg|png|webp|gif|avif)\b/i);


    const ext = extMatch ? extMatch[1].toLowerCase().replace('jpeg', 'jpg') : 'jpg';


    if (tag && postId) {


      const cleanTag = tag.replace(/[\s\/:*?"<>|]+/g, '.').replace(/\.{2,}/g, '.').replace(/^\.+|\.+$/g, '');


      if (cleanTag) return `https://static.zerochan.net/${cleanTag}.full.${postId}.${ext}`;


    }


    return null;


  }





function resolveZerochanPostCached(postId) {


    if (!postId) return Promise.resolve(null);


    if (zerochanOriginalCache.has(postId)) return Promise.resolve(zerochanOriginalCache.get(postId));


    if (zerochanOriginalPending.has(postId)) return zerochanOriginalPending.get(postId);





    const promise = fetchZerochanPostOriginal(postId).then(orig => {


      if (orig) zerochanOriginalCache.set(postId, orig);


      return orig || null;


    }).finally(() => {


      zerochanOriginalPending.delete(postId);


    });





    zerochanOriginalPending.set(postId, promise);


    return promise;


  }





  function resolveOriginalUrl(rawUrl, el) {


    if (!rawUrl) return null;


    let url = rawUrl.trim();





    // [poipiku-support-v2] resolver
    // Poipiku thumbnails: /<user>/<name>.png_640.jpg or _360.jpg.
    // Removing the final _NNN.jpg exposes the original extension/file.
    if (isPoipiku) {
      const inMedia = !!el?.closest?.('.IllustItem, .IllustThumb, .IllustItemThumb, .IllustThumbImg');
      if (!inMedia) return null;
      let u;
      try { u = new URL(url, window.location.href); } catch (_) { return null; }
      if (u.hostname !== 'cdn.poipiku.com') return null;
      if (!/^\/\d{9}\/[^?#]+$/i.test(u.pathname)) return null;
      if (!/\.(?:jpe?g|png|gif|webp|avif)$/i.test(u.pathname)) return null;
      const file = u.pathname.split('/').pop() || '';
      if (/^(?:profile|default_user|logo|banner|apple-|poipiku_icon)/i.test(file)) return null;
      u.pathname = u.pathname.replace(/_\d{2,4}\.jpg$/i, '');
      u.search = '';
      u.hash = '';
      return u.href;
    }

    // [bsky-v1] Bluesky: принимаем только изображения поста из CDN feed_*.


    if (isBluesky) {


      const postHost = el?.closest?.('article, [role="article"], [data-testid*="feedItem"], [data-testid*="post"]');


      const inDialog = !!el?.closest?.('[role="dialog"], [aria-modal="true"]');


      if (!postHost && !inDialog) return null;





      // Внешние website-card thumbnails не считаем медиа поста.


      const mediaLink = el?.closest?.('a[href]');


      if (mediaLink) {


        try {


          const linkUrl = new URL(mediaLink.href, window.location.href);


          if (linkUrl.hostname && !/(^|\.)bsky\.app$/i.test(linkUrl.hostname)) return null;


        } catch (_) {}


      }





      let u;


      try {


        u = new URL(url, window.location.href);


      } catch (_) {


        return null;


      }


      if (u.hostname !== 'cdn.bsky.app') return null;





      const m = u.pathname.match(/^\/img\/(feed_fullsize|feed_thumbnail|feed_small)\/plain\/(did:[^/]+)\/([^/]+)$/i);


      if (!m) return null;





      // Аватары/баннеры имеют другие preset и сюда не проходят.


      u.pathname = `/img/feed_fullsize/plain/${m[2]}/${m[3]}`;


      u.search = '';


      u.hash = '';


      return u.href;


    }





    if (isScrolller) {
      if (/^(?:data:|blob:)/i.test(absolute)) return null;
      if (!/^https?:\/\/(?:images|helios)\.scrolller\.com\//i.test(absolute)) return null;
      let candidate = absolute;
      if (/^https?:\/\/images\.scrolller\.com\/helios\//i.test(candidate)) {
        candidate = candidate.replace('https://images.scrolller.com/helios/', 'https://helios.scrolller.com/');
      }
      if (/\/preview_[^/?#]+\.(?:mp4|webm)(?:[?#]|$)/i.test(candidate)) {
        candidate = candidate.replace('/preview_', '/video_');
      }
      return candidate;
    }


    if (isTruyenHentai) {


      if (el?.closest('header, footer, nav, aside, #comments, .comments-wrapper, .authorblock, .didyouknow-wrapper, .homepage-profile-banner, .bottom-site-description, .media-error, .media-error__surface, .media-error__recommendations, .popexcldrclass, .grid-recommendation-ad, .grid-item--recommendation-ad, .grid-item--content-card-ad, .grid-item--text-card, .content-not-public, .popular-categories, .collections_grid, [class*="ad_"], [class*="eas6a97888e"], #vastnode, #modal, #brottynode, #share-popup-wrapper')) {


        return null;


      }





      const isSinglePost = document.body?.id === 'page-media' || document.body?.classList?.contains('site_media') || window.location.pathname.includes('-porn/');


      if (isSinglePost && !el?.closest('.media-wrapper, #standalone-media-swap-wrapper')) {


        return null;


      }





      const isShorts = document.body?.id === 'page-common_blog_read' || document.body?.classList?.contains('site_common_blog_read') || window.location.pathname.includes('/shorts/') || window.location.pathname.includes('/blog/');


      if (isShorts) {


        if (el?.closest('.blogpost-wrapper, .section-hide-container')) return null;


        if (!el?.closest('.blog-wrapper, .blog-gallery')) return null;


        if (el?.classList?.contains('blog-random-media') && document.querySelector('.blog-gallery ul li')) return null;


      }





      if (!isSinglePost && !isShorts) {


        if (el?.closest('.toprated-wrapper, .fp-shorts, .popular-categories, .collections_grid')) return null;


        if (!el?.closest('#wall, .grid-item--media-card, .grid')) return null;


        if (el?.closest('.grid-card__media--unavailable') || el?.closest('.grid-card')?.querySelector('.grid-card__media--unavailable')) return null;


      }





      if (url.includes('/logo') || url.includes('/favicons/') || url.includes('dicebear.com') || url.includes('rta2.png') || url.includes('imagenotfound.png') || url.startsWith('data:')) {


        return null;


      }





      let candidate = el?.getAttribute('data-cover-fallback-src') ||


                      el?.getAttribute('data-fallback-src') ||


                      el?.getAttribute('data-src') ||


                      el?.closest('a[data-src]')?.getAttribute('data-src') ||


                      url;





      if (candidate.includes('cdn.truyen-hentai.com') && candidate.includes('url=')) {


        try {


          const parsed = new URL(candidate, window.location.href);


          const emb = parsed.searchParams.get('url');


          if (emb) candidate = decodeURIComponent(emb);


        } catch (e) {


          const m = candidate.match(/[?&]url=([^&]+)/i);


          if (m) candidate = decodeURIComponent(m[1]);


        }


      }





      const candidateClean = candidate.split('?')[0].split('#')[0];


      if (candidateClean.includes('preview.redd.it')) {


        return candidateClean.replace('preview.redd.it', 'i.redd.it');


      }


      if (candidateClean.includes('i.redd.it') || candidateClean.includes('s3.truyen-hentai.com')) {


        return candidateClean;


      }


      if (candidateClean.includes('imgur.com')) {


        return candidateClean.replace(/i\.imgur\.com\/([a-zA-Z0-9]+)[lsmbh]\./i, 'i.imgur.com/$1.');


      }


      if (candidate.includes('redgifs.com') || candidate.includes('.mp4') || candidate.includes('.webm')) {


        return candidate;


      }





      return candidate;


    }





    if (isZerochan) {


      const m = clean.match(/(?:full\.)?(\d{5,9})\.(?:jpe?g|png|webp|avif|gif)$/i) || clean.match(/\/(\d{5,9})(?:[?#]|$)/);


      if (m) return `zc_${m[1]}`;


    }





    if (isYandere) {


      // Отсекаем логотип, шапку, звездочки статуса, иконки directlink, сайдбары и рекламу


      if (


        el?.closest('#header, #site-title, #sidebar, .sidebar, #footer, #paginator, #subnavbar, .directlink-info, #news-ticker, [class*="directlink"]') ||


        el?.classList?.contains('directlink-icon') ||


        el?.classList?.contains('parent-display') ||


        el?.classList?.contains('child-display') ||


        el?.classList?.contains('flagged-display') ||


        el?.classList?.contains('pending-display') ||


        el?.id === 'logo' ||


        url.includes('/assets/') ||


        url.includes('logo_') ||


        url.includes('blank-') ||


        url.includes('post-star-') ||


        url.includes('ddl')


      ) {


        return null;


      }





      // Страница одного поста (/post/show/<id>)


      if (window.location.pathname.includes('/post/show') || el?.id === 'image') {


        const direct = document.getElementById('png')?.href ||


                       document.getElementById('highres')?.href ||


                       document.getElementById('highres-show')?.href;


        if (direct) return direct;


        const pagePostId = window.location.pathname.match(/\/post\/show\/(\d+)/i)?.[1];


        if (pagePostId && konachanPostMap.has(pagePostId)) {


          return konachanPostMap.get(pagePostId);


        }


      }





      // Каталог постов (/post)


      const postLi = el?.closest('li[id^="p"]');


      if (postLi) {


        const postId = postLi.id.replace('p', '');


        if (konachanPostMap.has(postId)) return konachanPostMap.get(postId);


        const directLink = postLi.querySelector('a.directlink');


        if (directLink && directLink.href) return directLink.href;


      }





      if (url.includes('files.yande.re')) return url;


      return null;


    }





    if (isIslaDeMuerta) {


      if (el?.closest('.avatar, a[href*="/user/"], a[href*="/community/"], nav, header, footer, #footer, #rtb, .jumbotron, .navbar, .page, #version') || el?.classList?.contains('avatar')) {


        return null;


      }


      if (el?.closest('a[title="Открыть пост"]')) return null;





      if (url.includes('/avatars/') || url.includes('/img/icons8/') || url.includes('/img/avatar.png') || url.includes('/images/community/') || url.includes('/img/spinner') || url.includes('image-deleted.svg') || url.includes('monster-face.png') || url.includes('dots-loading')) {


        return null;


      }





      if (!el?.closest('.card-white, #page-1, .page-content')) return null;





      let candidate = el?.getAttribute?.('data-scramble-large') ||


                      el?.getAttribute?.('data-link') ||


                      el?.getAttribute?.('data-fallback') ||


                      url;





      const parentA = el?.closest?.('a[href]');


      const parentHref = parentA?.href;


      if (parentHref && /\.(?:jpe?g|png|gif|webp)$/i.test(parentHref.split('?')[0]) && !parentHref.includes('/img/') && !parentA.classList?.contains('sr-only')) {


        candidate = parentHref;


      }





      let absolute = '';


      try { absolute = new URL(candidate, window.location.href).href; } catch (e) { absolute = candidate; }





      if (absolute.includes('/post_img/') && !absolute.includes('/post_img/big/')) {


        absolute = absolute.replace('/post_img/', '/post_img/big/');


      }





      if (/\/s\/.*_[a-z0-9]+\.(jpe?g|png|gif|webp)$/i.test(absolute)) {


        absolute = absolute.replace(/_[a-z0-9]+(?=\.[a-z0-9]+$)/i, '_lg');


      }





      return absolute;


    }





    if (isSotwe) {


      if (el?.closest('#toolbar, header, footer, nav, .menu, .v-avatar, .tweet-profile, [class*="avatar"], .user-verified--icon, .tweet-stats, .tweet-actions, .see-more-button, [class*="admaven"], [data-fetch-key*="UserList"]')) {


        return null;


      }


      if (url.includes('profile_images') || url.includes('icon.png') || url.includes('logo') || url.includes('favicon') || url.includes('amplify_video_thumb') || url.includes('ext_tw_video_thumb')) {


        return null;


      }


      if (!url.includes('pbs.twimg.com/media/') && !url.includes('video.twimg.com/')) {


        return null;


      }


      if (url.includes('pbs.twimg.com/media/')) {


        let clean = url.replace(/:[a-z0-9_-]+$/i, '');


        clean = clean.replace(/([?&])format=webp(&|$)/i, '$1').replace(/&$/, '').replace(/\?$/, '');


        if (clean.includes('?')) {


          clean = clean.replace(/([?&])name=[^&]*/i, '$1name=orig');


          if (!clean.includes('name=orig')) clean += '&name=orig';


        } else {


          clean += '?name=orig';


        }


        return clean;


      }


      if (url.includes('video.twimg.com/')) {


        return url;


      }


      return null;


    }





                // M4EX: строгая фильтрация рекламы, баннеров и выбор оригиналов


    if (isM4ex) {


      if (!el?.closest('#the-content')) return null;


      if (el?.closest('.inmaincmframe, aside, #sidebar, #header, #footer, #related-entries, [class*="widget"], [class*="ad"], .ninja-recommend-block, [class*="ranking"]')) return null;


      if (url.includes('dmm.co.jp') || url.includes('fanza.') || url.includes('/layout/') || url.includes('info-osusume') || url.includes('counter') || url.includes('shinobi')) return null;





      const parentA = el?.closest('a[href]');


      const candidate = parentA ? parentA.href : url;





      let absolute = '';


      try { absolute = new URL(candidate, window.location.href).href; } catch(e) { absolute = candidate; }





      if (/^https?:\/\/(?:www\.)?(?:m4ex\.com|m4ex\.net)\/m4ex_box\/(?:lead-off|division\d+|[0-9]{6})\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) {


        return absolute;


      }


      return null;


    }





    // 1. PLURK


    if (isPlurk) {


      if (el?.closest('#top_bar, #layout_top, #dashboard_holder, .avatar, .plurk-avatar, .user_avatar, .profile-pic, .emoticon, .emoticon_my, [class*="emoticon"], [class*="badge"], .p_img, .td_img, #updater, .updater')) return null;


      if (url.includes('avatars.plurk.com') || url.includes('emos.plurk.com') || url.includes('s.plurk.com') || url.includes('favicon')) return null;





      const parentA = el?.closest('a[href*="images.plurk.com"], a[href*="imgs.plurk.com"], a[href*="pbs.twimg.com"], a[href*="imgur.com"], a.pictureservices');


      const targetUrl = parentA?.href || (el?.tagName === 'A' ? el.href : url);


      if (!targetUrl) return null;





      const absolute = (() => { try { return new URL(targetUrl, window.location.href).href; } catch (e) { return targetUrl; } })();





      if (absolute.includes('pbs.twimg.com/media/')) {


        let tw = absolute.replace(/:[a-z0-9_-]+$/i, '');


        tw = tw.replace(/([?&])name=[^&]*/i, '$1name=orig');


        if (!tw.includes('name=orig')) tw += (tw.includes('?') ? '&' : '?') + 'name=orig';


        return tw;


      }


      if (absolute.includes('imgur.com')) return absolute.replace(/^http:\/\//i, 'https://');





      if (/^https?:\/\/(?:images|imgs)\.plurk\.com\/[^?#]+\.(?:jpg|jpeg|png|gif|webp)(?:[?#].*)?$/i.test(absolute)) {


        return absolute.split('?')[0].split('#')[0].replace(/\/(?:mx_|s_|m_|u_|thumb_|\d+x\d+_|\d+_)(?=[^/]+$)/i, '/');


      }


      return null;


    }





    // 2. REDDIT (отсекаем иконки сабреддитов, эмодзи, аватары, blur-фильтры и рекламу)


    if (isReddit) {


      if (!el?.closest('shreddit-post, article, .Post, div[data-testid="post-container"], .entry, .media-lightbox-img, zoomable-img')) return null;


      if (el?.closest('shreddit-post[promoted], [data-promoted="true"], .promotedlink, [data-ad]')) return null;


      if (el?.closest('reddit-header-large, #left-sidebar-container, #right-sidebar-container, flex-left-nav-container, rpl-hovercard, [data-testid="community-status-trigger"], .community-status-icon, #user-drawer-content, recent-posts, .feed-header-placeholder, rpl-tooltip, faceplate-hovercard')) return null;


      if (el?.classList?.contains('post-background-image-filter') || el?.getAttribute('role') === 'presentation') return null;





      if (url.includes('styles.redditmedia.com') || url.includes('emoji.redditmedia.com') || url.includes('redditstatic.com') || url.includes('rlcdn.com') || url.includes('snoovatar') || url.includes('avatar') || url.includes('headshot')) return null;


      if (url.includes('preview.redd.it')) return url.split('?')[0].replace('preview.redd.it', 'i.redd.it');


      if (url.includes('i.redd.it') || url.includes('external-preview.redd.it') || url.includes('i.imgur.com')) return url.split('?')[0];


      return null;


    }





    // 3. VK (отсекаем реальные аватары, меню, истории, клипы и реакции)


    if (isVk) {


      if (el?.closest('#page_header, #page_header_cont, #layout_sidebar, .LeftMenu__root, [data-testid="leftmenu"], [data-testid="rightmenu"], .StoriesBlock, [class*="StoriesBlock"], [class*="Story"], [data-testid*="story"], aside, .TopNavigation, footer, .vkitInternalGroupCard[data-testid="rightmenu"]')) return null;


      if (el?.closest('.Avatar, .vkuiAvatar__host, [data-testid="post-header-avatar"], .PostHeader, [class*="PostHeader"], [class*="author"], .PostAuthor')) return null;


      if (el?.closest('[data-ad], [class*="ads_"], [class*="Ads"], [data-ad-marker]')) return null;





      if (url.includes('vk.com/reaction/') || url.includes('mradx.net') || url.includes('mail.ru') || url.includes('okcdn.ru') || url.includes('videoPreview') || url.includes('ads_light') || url.includes('favicons') || url.includes('/icons/')) return null;


      if (url.includes('size=50x50') || url.includes('size=40x40') || url.includes('size=32x32') || url.includes('size=100x100')) return null;


      if (url.includes('/stickers/') || url.includes('/emoji/')) return null;





      // Реальные прикрепления постов на userapi и vkuserphoto


      if (url.includes('userapi.com') || url.includes('vkuserphoto') || url.includes('vk-cdn') || url.includes('vk.me')) {


        return url.replace(/([?&])cs=[^&]*/g, '').replace(/&&+/g, '&').replace(/[?&]$/, '');


      }


      return null;


    }





    // 4. PIXIV (оставляем только арты/мангу, убираем иконки сервисов и аватары)


    if (isPixiv || url.includes('pximg.net')) {


      if (el?.closest('#page_header, nav, header, footer, aside, .__top_side_menu_root, [data-testid="leftmenu"]')) return null;


      if (url.includes('no_profile') || url.includes('/common/images/') || url.includes('/soy/') || url.includes('/_static/') || url.includes('/services/')) return null;


      if (!url.includes('/img-master/') && !url.includes('/img-original/') && !url.includes('/custom-thumb/')) return null;





      return url.replace(/\/c\/[^\/]+\//, '/').replace('/img-master/', '/img-original/').replace('/custom-thumb/', '/img-original/').replace(/_(?:master|square|custom)1200\.[a-z]+$/i, '.jpg');


    }





    // 5. JOYREACTOR


    if (isJoyReactor) {


      const parentHref = el?.closest('a[href*="/pics/post/"]')?.href;


      if (parentHref && /\.(?:jpg|jpeg|png|gif|webp)$/i.test(parentHref.split('?')[0])) {


        return new URL(parentHref, window.location.href).href;


      }


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/\/pics\/post\/(?!static\/|webm\/)[^?#]+\.(?:jpg|jpeg|png|gif|webp)$/i.test(absolute)) return null;


      if (el?.closest('header, nav, footer, aside, .sidebar, [class*="avatar"], [class*="comment"]')) return null;


      return absolute;


    }





    // 6. WAROSU


    if (isWarosu) {


      const parentHref = el?.closest('a[href*="/data/"]')?.href || el?.closest('a')?.href;


      if (parentHref && /^https?:\/\/i\.warosu\.org\/data\/[^?#]+\/img\/[^?#]+\.(?:jpg|jpeg|png|gif|webp)$/i.test(parentHref)) {


        return parentHref;


      }


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (absolute.includes('i.warosu.org/data/')) {


        let orig = absolute.replace(/\/thumb\//i, '/img/');


        orig = orig.replace(/s(?=\.[a-z0-9]+$)/i, '');


        return orig;


      }


      return null;


    }





    // PixAI


    if (isPixAI) {


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/images-ng\.pixai\.art\/images\/(?:orig|thumb)\/[a-f0-9-]+$/i.test(absolute)) return null;


      if (el?.closest('header, nav, footer, aside, [role="dialog"], [aria-modal="true"]')) return null;


      return absolute.replace('/images/thumb/', '/images/orig/');


    }





    if (isGelbooru) {


      // [gelbooru-url-guard-v2] URL самой страницы поста запрещён.


      if (/^https?:\/\/gelbooru\.com\/index\.php(?:[?#]|$)/i.test(url)) {


        const directGelbooru = getGelbooruOriginalUrl(el, url);


        if (directGelbooru) return directGelbooru;


        return null;


      }


      if (el?.closest('header, nav, footer, aside, #sidebar, .pagination, #post-comments, [data-nosnippet]')) return null;


      if (url.includes('favicon') || url.includes('logo.svg') || url.includes('/layout/')) return null;





      const absolute = (() => {


        try { return new URL(url, window.location.href).href; }


        catch (e) { return url; }


      })();





      const isSinglePost = /[?&]s=view(?:&|$)/i.test(window.location.search);





      if (isSinglePost) {


        const direct = getGelbooruOriginalUrl(el, absolute);


        if (direct) return direct;


      }





      const normalized = normalizeGelbooruOriginalUrl(absolute);


      if (normalized) return normalized;





      return null;


    }





    // AIBooru


    if (isAIBooru) {


      const inPostTile = !!el?.closest('article.post-preview');
      const isMainPostImage = el?.id === 'image' || !!el?.closest('#post-view, #a-show');
      if (!inPostTile && !isMainPostImage) return null;
      if (el?.closest('header, nav, footer, aside, #sidebar, #notice, .post-comments, [data-nosnippet]')) return null;

      // На странице поста AIBooru уже отдаёт точную ссылку Original/Download.
      // Берём её первой, чтобы не зависеть от имени расширения файла thumbnail.
      if (isMainPostImage) {
        const directLink = document.querySelector('#post-option-view-original a[href], #post-option-download a[href]')?.href || '';
        if (directLink && /^https?:\/\/cdn\.aibooru\.download\/original\//i.test(directLink)) return directLink;
        const og = document.querySelector('meta[property="og:image"]')?.content || '';
        if (og && /^https?:\/\/cdn\.aibooru\.download\/original\//i.test(og)) return og;
      }

      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();
      if (!/^https?:\/\/cdn\.aibooru\.download\/(?:180x180|360x360|original|sample|720x720|fit|preview)\/[a-z0-9._/-]+$/i.test(absolute)) return null;
      return absolute.replace(/\/(?:180x180|360x360|720x720|fit|preview|sample)\//i, '/original/');


    }
    if (isCool18) {


      if (!el?.closest('#content-section, .content-section, .post-content')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/img\.xwbo\.com\/images\/[^?#]+\.(?:jpg|jpeg|png|gif|webp)$/i.test(absolute)) return null;


      return absolute;


    }





    if (isPttWeb) {


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/i\.imgur\.com\/[A-Za-z0-9_-]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      if (el?.closest('header, nav, footer, aside, .sidebar, .ad, [class*="avatar"]')) return null;


      return absolute;


    }





    if (isWykop) {


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?wykop\.pl\/cdn\/[^?#]+\/[^?#,]+(?:,[^?#]+)?\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      if (el?.closest('header, nav, footer, aside, .sidebar, .avatar, .user-avatar, [class*="avatar"]')) return null;


      return absolute;


    }





    if (isDoujinHibiki) {


      if (!el?.closest('.content_main')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?doujinhibiki\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      return absolute;


    }





    if (isNijifan) {


      if (!el?.closest('.td-post-content')) return null;


      if (el?.closest('.sc7-top-ad, .sc7-top-ad-pc, .sc7-top-ad-sp, .fanza-ad-container, .fanza-grid, .custom-card-wrapper, .dmm-side-item, .cigt-card, aside, .td_block_template_1, .related, [class*="related"]')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?nijifan\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      return absolute;


    }





    if (isMoeimg) {


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      const postId = (window.location.pathname.match(/\/(\d+)\.html$/i) || [])[1];


      if (!postId) return null;


      if (!/^https?:\/\/(?:www\.)?moeimg\.net\/wp-content\/uploads\/archives23\/\d+\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      if (!absolute.includes(`/wp-content/uploads/archives23/${postId}/`)) return null;


      if (!el?.closest('.post-single')) return null;


      if (!el?.classList?.contains('thumbnail_image')) return null;


      return absolute;


    }





    if (isSituero || isLoveLiveForever || isNukigazo) {


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?(?:situero\.com|loveliveforever\.com|nukigazo\.com)\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)(?:\.webp)?$/i.test(absolute)) return null;


      if (!el?.closest('#the-content.entry-content, .entry-content')) return null;


      if (el?.closest('aside, .related-entry-thumbnail, .sidebar, footer, header')) return null;


      return absolute;


    }





    if (isComichara) {


      if (!el?.closest('#the-content')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?comichara\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)(?:\.webp)?$/i.test(absolute)) return null;


      return absolute.replace(/\.(jpe?g|png|gif|webp)\.webp$/i, '.$1');


    }





    if (isHentaiAnimeAI) {


      if (!el?.closest('article .entry-content')) return null;


      if (el?.closest('.under-entry-content, .sidebar, aside, .related-list, .popular-list, .carousel-content')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?hentaianime-ai\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)(?:\.webp)?$/i.test(absolute)) return null;


      return absolute.replace(/\.(jpe?g|png|gif|webp)\.webp$/i, '.$1');


    }





    if (isKyaraBetsuNijiero) {


      if (!el?.closest('#the-content')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?kyarabetsunijiero\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      if (el?.closest('header, nav, footer, aside, .sidebar, .related, [class*="related"]')) return null;


      return absolute;


    }





    if (isEromanIDC) {


      if (!el?.closest('article.l-mainContent__inner .post_content')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?eromanidc\.com\/wp-content\/uploads\/chara\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      return absolute;


    }





    if (isKimootoko) {


      if (!el?.closest('.post_content, .l-mainContent__inner')) return null;


      if (el?.closest('.pickup-nashi-kiji, .p-postList, .p-relatedPosts, .sidebar, aside, nav, header, footer')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?kimootoko\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      return absolute;


    }





    if (isIchinuke) {


      if (!el?.closest('.post_content')) return null;


      if (el?.closest('.swing_03_wrap, .sidebar, aside, header, footer, .p-postList')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?ichinuke\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      return absolute.replace(/-(?:\d+x\d+|scaled)(?=\.[a-z0-9]+$)/i, '');


    }





    if (isErokan) {


      if (!el?.closest('.entry-content')) return null;


      if (el?.closest('.master-post-advert, .sidebar, aside, nav, header, footer, .yarpp-related, .related-posts')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?erokan\.net\/wp\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute) &&


          !/^https?:\/\/img\.erokan\.net\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      if (el?.classList?.contains('wp-post-image')) return null;


      return absolute;


    }





    if (isVanillaRock) {


      if (!el?.closest('.entry-content .img-box .main-img')) return null;


      const absolute = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?vanilla-rock\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(absolute)) return null;


      return absolute;


    }





    if (isMoeero) {


      if (!el?.closest('#main_content .post_content, .post_content')) return null;


      if (el?.closest('.kankiji, .c-balloon__icon, .moe-top-news-pickup, .morepickup, aside, header, footer, nav, .sidebar')) return null;


      const ah = el?.closest('a[href]')?.href || '';


      if (/^https?:\/\/(?:www\.)?xn--r8jwklh769h2mc880dk1o431a\.com\/wp-content\/asakura\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(ah)) return ah;


      const u = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?xn--r8jwklh769h2mc880dk1o431a\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u)) return null;


      return u;


    }





    if (isEroAnigif) {


      if (!el?.closest('.entry-content')) return null;


      if (el?.closest('.wpInsertInPostAd, .rss-antenna, .yarpp-thumbnails-horizontal, .related-posts, aside, header, footer, nav, .yarpp-thumbnail')) return null;


      if (el?.classList?.contains('wp-post-image')) return null;


      const u = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?ero-anigif\.com\/wp-content\/uploads\/[^?#]+\.(?:gif|jpe?g|png|webp)$/i.test(u)) return null;


      return u.replace(/-(?:120|150|250|300)x(?:120|150|250|300)(?=\.[a-z0-9]+$)/i, '');


    }





    if (isNijiero) {


      if (el?.closest('header, nav, footer, aside, .sidebar, #sidebar, .widget, .ad-area, [class*="ad-"]')) return null;


      if (!el?.closest('.entry-content, .post_content, .eye-catch, .eye-catch-wrap, .entry-card-wrap, .entry-card, .navi-entry-card, .popular-entry-card, .new-entry-card')) return null;


      const u = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?nijieroarchive\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u)) return null;


      if (u.includes('/cropped-') || u.includes('/logo') || u.includes('favicon')) return null;


      let clean = u.split('?')[0];


      clean = clean.replace(/-(?:\d+x\d+|scaled|thumbnail)(?=\.[a-z0-9]+(?:\.webp)?$)/i, '');


      if (/\.(?:jpe?g|png|gif)\.webp$/i.test(clean)) {


        clean = clean.replace(/\.webp$/i, '');


      }


      return clean;


    }





    if (isHentaiWitch) {


      if (el?.closest('header, nav, footer, aside, .sidebar, #sidebar, .widget, .ad-area, [class*="ad-"]')) return null;


      if (!el?.closest('.entry-content, .post_content, .eye-catch, .eye-catch-wrap, .entry-card-wrap, .entry-card, .navi-entry-card, .popular-entry-card, .new-entry-card')) return null;


      const u = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?hentai-witch\.com\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u)) return null;


      if (u.includes('/site-logo') || u.includes('/logo') || u.includes('favicon')) return null;


      let clean = u.split('?')[0];


      clean = clean.replace(/-(?:\d+x\d+|scaled|thumbnail)(?=\.[a-z0-9]+$)/i, '');


      return clean;


    }





    if (isFemmeDoll) {


      if (el?.closest('header, nav, footer, aside, .l-sidebar, #sidebar, .w-beforeFooter, .fd-ext-board, .fd-manual-rec, .fd-mrec-rss, .fdtg-auto-related-wrap, .widget, .c-widget, [class*="ad-"]')) return null;


      if (!el?.closest('.post_content, .p-articleThumb, .p-postList__item, .wp-block-image, .wp-block-gallery')) return null;


      const u = (() => { try { return new URL(url, window.location.href).href; } catch (e) { return url; } })();


      if (!/^https?:\/\/(?:www\.)?femmedoll\.jp\/wp-content\/uploads\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u)) return null;


      if (u.includes('/cropped-') || u.includes('/siteguard/') || u.includes('/femme-doll-') || u.includes('favicon')) return null;


      let clean = u.split('?')[0];


      clean = clean.replace(/-(?:\d+x\d+|scaled|thumbnail)(?=\.[a-z0-9]+$)/i, '');


      return clean;


    }





    if (isRule34Us) {


      if (el?.closest('.header-nav, #userNotice, .pagination, #comment_form, .g-recaptcha, footer, nav, script, style')) return null;





      const absolute = (() => {


        try { return new URL(url, window.location.href).href; }


        catch (e) { return url; }


      })();





      const indexCard = el?.closest('.thumbail-container > div > a[id]');


      const looksVideo = !!el?.closest?.('.webm-thumb, video, .webm, .video') || /\.(?:mp4|webm|mov)(?:[?#]|$)/i.test(String(rawSrc || absolute));


      if (looksVideo && /^https?:\/\/img2\.rule34\.us\/images\/[^?#]+\.(?:mp4|webm|mov)(?:[?#].*)?$/i.test(absolute)) {
        return absolute;
      }


      if (indexCard && looksVideo && /^https?:\/\/img2\.rule34\.us\/thumbnails\//i.test(absolute)) {
        return absolute
          .replace('/thumbnails/', '/images/')
          .replace('/thumbnail_', '/')
          .replace(/\.(?:jpe?g|png|gif|webp)$/i, '.webm');
      }


      if (indexCard && /^https?:\/\/img2\.rule34\.us\/thumbnails\//i.test(absolute)) {


        return absolute


          .replace('/thumbnails/', '/images/')


          .replace('/thumbnail_', '/');


      }





      if (el?.closest('.content_push') && /^https?:\/\/img2\.rule34\.us\/images\//i.test(absolute)) {


        return absolute;


      }





      return null;


    }





    if (isR34App) {


      if (el?.closest('nav, header, footer, button, figcaption button, [data-testid="domain-selector"], #navbar-actions') || url.includes('google.com/s2/favicons') || url.includes('/icon.svg') || url.includes('social.jpg')) return null;


      const rawKey = getImageKey(url);


      if (rawKey && r34AppPostMap.has(rawKey)) return r34AppPostMap.get(rawKey);


      if (url.includes('imgproxy') && url.includes('/insecure/')) {


        try {


          const afterInsecure = url.split('/insecure/')[1];


          const b64 = afterInsecure.split('/').pop();


          const decoded = atob(b64.replace(/-/g, '+').replace(/_/g, '/'));


          const match = decoded.match(/url=([^&]+)/);


          if (match) return decodeURIComponent(match[1]).replace('/samples/', '/images/').replace('sample_', '');


        } catch (e) {}


      }


      if (url.includes('api-cdn.rule34.xxx/samples/')) return url.replace('/samples/', '/images/').replace('sample_', '');


    }





    if (isRule34Gg) {


      if (el?.closest('#navbar, .auth-btn-container, .offcanvas, #cookieNotice, .ad, ins, footer, .tag-search-form, #settingsDropdown') || url.includes('/base/') || url.includes('favicon') || url.includes('a.magsrv.com')) return null;


      const mediaCard = el?.closest('.media, .media-container');


          if (mediaCard && mediaCard.dataset.downloadUrl) return mediaCard.dataset.downloadUrl;


          if (/^https?:\/\/cdn\.rule34\.gg\/(?!preview\/|base\/)[^?#]+\.(?:jpe?g|png|gif|webp|mp4|webm|mov)(?:[?#].*)?$/i.test(url)) return url;


          if (url.includes('cdn.rule34.gg/preview/')) return url.replace('/preview/', '/');


    }





    if (isFevian) {


      if (el?.closest('header, nav, footer, #footer, .about_box, .footbox, script, a[href*="al.fanza.co.jp"], a[href*="dmm.co.jp"]') || url.includes('noimage.png') || url.includes('favicon') || url.includes('sepian.org') || url.includes('doujin-assets')) return null;


    }





    if (isVanlett) {


      if (el?.closest('nav, .inner-nav, .timeline-header, .post-avatar, .avatar, .gallery-video, video, a.attribution') || el?.classList.contains('avatar') || url.includes('profile_images') || url.includes('/logo.png') || url.includes('favicon') || url.includes('amplify_video_thumb') || url.includes('video_thumb') || !url.includes('pbs.twimg.com/media/')) return null;


    }





    if (isKurocore) {


      if (el?.closest('nav.navbar, #logo-section, #search-box-section, #hot-tags-section, .ad-b1, [data-cl-spot], #top-banner, #bottom-ad, #footer, .pagination, .modal, .member, .illust-detail') || el?.classList.contains('member-icon') || url.includes('/asset/') || url.includes('loading.gif') || url.includes('/u/sm/') || url.includes('/u/') || url.includes('favicon') || url.includes('K.png')) return null;


      if (url.includes('/i/sm/')) return url.replace('/i/sm/', '/i/ori/');


    }





    if (isDonmai) {


      if (el?.closest('#top, header, #nav, nav, #sidebar, aside, #page-footer, footer, #notice, #tooltips, #blacklist-box, #saved-searches-nav, .popup-menu-content, #artist-commentary, #original-artist-commentary') || url.includes('danbooru-logo') || url.includes('/packs/') || url.includes('favicon') || url.includes('/static/')) return null;


    }





    // [gelbooru-v3-resolve-first]


    // Только точный <a>Original image</a>. Thumbnail/sample/page URL запрещены.


    if (isGelbooru) {


      return getGelbooruCurrentPageOriginal();


    }





    if ((isBooru || isBooruIo) && !isAIBooru) {


      if (el?.closest('#header, #navbar, #subnavbar, .sidebar, #sidebar, #paginator, #footer, #edit-form, #post-comments, [data-nosnippet]') || url.includes('p.png') || url.includes('/images/p.png') || url.includes('favicon') || url.includes('juicyads') || url.includes('a.magsrv.com')) return null;


    }





    if ((!isFanzaHost && (url.includes('dmm.co.jp') || url.includes('fanza.co.jp') || url.includes('doujin-assets'))) || url.includes('lmadps.jp') || url.includes('ademon.net') || url.includes('xaid.jp') || url.includes('/ads/') || el?.closest('[class*="AdManagerBanner"]') || el?.closest('a[rel*="sponsored"]')) {


      return null;


    }





    if (url.includes('profile_images') || url.includes('_normal.') || url.includes('/user-profile/') || url.includes('no_profile') || url.includes('ava=1') || url.includes('/avatar') || el?.classList.contains('rounded-full') || el?.closest('.w-11.h-11')) {


      return null;


    }





    if (url.startsWith('data:') || url.endsWith('.svg') || url.includes('/favicon') || url.includes('/stickers/') || url.includes('/emoji/')) {


      return null;


    }





    // [erocon-v1] Очистка мусора и получение оригиналов для erocon.gger.jp


    if (isErocon) {


      if (el?.closest('header, footer, aside, nav, .left-container, .right-container, .listWithImage, .topboxnoline, .containerimg, .rss-blogroll, [class*="ad"], .ucontainerbox, .pager, .article-sub-category, .article-sub-popular, .article-option, #blog-header, #blog-footer, .sidebar')) {


        return null;


      }


      if (!el?.closest('.imgbox, .article-body, .article')) return null;





      const normalizeEroconImage = (value) => {


        if (!value) return null;


        try {


          const u = new URL(value, window.location.href);


          if (/^resize\.blogsys\.jp$/i.test(u.hostname)) {


            const emb = u.href.match(/(https?:\/\/livedoor\.blogimg\.jp\/eroga0721-1vsaopad\/imgs\/[^?#]+)/i);


            if (emb) return normalizeEroconImage(emb[1]);


          }


          if (!/^livedoor\.blogimg\.jp$/i.test(u.hostname)) return null;


          if (!/^\/eroga0721-1vsaopad\/imgs\/[0-9a-f]\/[0-9a-f]\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.pathname)) return null;


          u.protocol = 'https:';


          u.search = '';


          u.hash = '';


          u.pathname = u.pathname.replace(/-(?:s|m|l)(?=\.[a-z0-9]+$)/i, '');


          return u.href;


        } catch (e) {


          return null;


        }


      };





      const parentHref = el?.closest('a[href]')?.href;


      const parentOriginal = normalizeEroconImage(parentHref);


      if (parentOriginal) return parentOriginal;





      const direct = normalizeEroconImage(url);


      if (direct) return direct;


      return null;


    }





    // [nijityeki-v1] Обработка оригиналов для nijityeki.blog.jp


    if (isNijityeki) {


      const inArticle = !!el?.closest('#container .article-body, #container article.article, .article-body-inner');


      if (!inArticle) return null;





      if (el?.closest('header, footer, aside, nav, #sidebar, .sidebar-wrap, .plugin-link, .plugin-popular_articles, .plugin-memo, .ldb_menu, [class*="ad"], [class*="banner"]')) return null;


      if (url.includes('parts.blog.livedoor.jp') || url.includes('livedoor.png') || url.includes('favicon')) return null;





      const normalizeNijityekiImage = (value) => {


        if (!value) return null;


        try {


          const u = new URL(value, window.location.href);


          if (/^resize\.blogsys\.jp$/i.test(u.hostname)) {


            const embedded = u.href.match(/(https?:\/\/livedoor\.blogimg\.jp\/nijityeki\/imgs\/[^?#]+)/i);


            if (embedded) return normalizeNijityekiImage(embedded[1]);


          }


          if (!/^livedoor\.blogimg\.jp$/i.test(u.hostname)) return null;


          if (!/^\/nijityeki\/imgs\/[0-9a-f]\/([0-9a-f])\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.pathname)) return null;


          u.protocol = 'https:';


          u.search = '';


          u.hash = '';


          u.pathname = u.pathname.replace(/-(?:s|m|l)(?=\.[a-z0-9]+$)/i, '');


          return u.href;


        } catch (e) {


          return null;


        }


      };





      const parentHref = el?.closest('a[href]')?.href;


      const parentOriginal = normalizeNijityekiImage(parentHref);


      if (parentOriginal) return parentOriginal;





      const direct = normalizeNijityekiImage(url);


      if (direct) return direct;


      return null;


    }





    if (isHadasirori) {


      const inArticle = !!el?.closest('#container .article-outer.hentry .article-body.entry-content, #container .article-body.entry-content');


      if (!inArticle) return null;





      if (el?.closest('header, footer, aside, nav, .side, .sidewrapper, .plugin-recent_articles_image, .ninja-recommend-block, [class*="ad"], [class*="banner"]')) return null;


      if (url.includes('doujin-assets.dmm.co.jp') || url.includes('pics.dmm.co.jp') || url.includes('ebook-assets.dmm.co.jp')) return null;





      const normalizeHadasiroriImage = (value) => {


        if (!value) return null;


        try {


          const u = new URL(value, window.location.href);


          if (/^resize\.blogsys\.jp$/i.test(u.hostname)) {


            const embedded = u.href.match(/(https?:\/\/livedoor\.blogimg\.jp\/iegamon\/imgs\/[^?#]+)/i);


            if (embedded) return normalizeHadasiroriImage(embedded[1]);


          }


          if (!/^livedoor\.blogimg\.jp$/i.test(u.hostname)) return null;


          if (!/^\/iegamon\/imgs\/[0-9a-f]\/([0-9a-f])\/[^?#]+\.(?:jpe?g|png|gif|webp)$/i.test(u.pathname)) return null;


          u.protocol = 'https:';


          u.search = '';


          u.hash = '';


          u.pathname = u.pathname.replace(/-(?:s|m|l)(?=\.[a-z0-9]+$)/i, '');


          return u.href;


        } catch (e) {


          return null;


        }


      };





      const parentHref = el?.closest('a[href]')?.href;


      const parentOriginal = normalizeHadasiroriImage(parentHref);


      if (parentOriginal) return parentOriginal;





      const direct = normalizeHadasiroriImage(url);


      if (direct) return direct;


      return null;


    }





    const isJpBlogImage = jpBlogs.some(d => url.includes(d)) || url.includes('livedoor') || url.includes('blog.jp') || url.includes('gger.jp');


    if (isJpBlog || isFevian || isJpBlogImage) {


      if (isJpBlog && el?.closest('header, footer, aside, .sidebar, #sidebar, .widget, .related-posts, .crp_related, .post-navigation, .toc_container, [class*="banner"]')) return null;


      if (url.includes('/logo') || url.includes('banner') || url.includes('gravatar') || el?.classList.contains('thumbnail-entry-thumb-image')) return null;





      if (url.includes('.blog.jp') || url.includes('.gger.jp') || url.includes('livedoor')) {


        url = url.replace(/-[sm]\.(jpg|jpeg|png|gif|webp)$/i, '.$1');


      } else {


        url = url.replace(/-\d+x\d+(\.[a-z0-9]+)$/i, '$1');


        url = url.replace(/-s-\d+x\d+(\.[a-z0-9]+)$/i, '$1');


      }


      return url.split('?')[0];


    }





    if (isFanzaHost && url.includes('pics.dmm.co.jp')) {


      if (url.match(/p[a-z]\.jpg$/i)) return url.replace(/p[a-z]\.jpg$/i, 'pl.jpg');


    }





    if (isKonachan || url.includes('konachan.')) {


      if (el?.closest('#header, #sidebar, .sidebar, #footer, #paginator, #subnavbar, .directlink-info, #news-ticker') || url.includes('/assets/') || url.includes('logo_') || url.includes('blank-') || url.includes('post-star-') || url.includes('ddl')) return null;


      if (window.location.pathname.includes('/post/show')) {


        const pngLink = document.getElementById('png') || document.getElementById('highres');


        if (pngLink && pngLink.href) return pngLink.href;


      }


      const postLi = el?.closest('li[id^="p"]');


      if (postLi) {


        const postId = postLi.id.replace('p', '');


        if (konachanPostMap.has(postId)) return konachanPostMap.get(postId);


        const directLink = postLi.querySelector('a.directlink');


        if (directLink && directLink.href) return directLink.href;


      }


      if (url.includes('/data/preview/')) return url.replace('/data/preview/', '/image/').replace(/\/[a-f0-9]{2}\/[a-f0-9]{2}\//, '/');


    }





    if (url.includes('pbs.twimg.com/media/')) {


      let clean = url.replace(/:[a-z0-9_-]+$/i, '');


      const parentMedia = el?.closest('a.still-image')?.href || el?.closest('a[href*="pbs.twimg.com/media/"]')?.href;


      if (parentMedia) clean = parentMedia.split('?')[0];


      clean = clean.replace(/([?&])format=webp(&|$)/i, '$1').replace(/&$/, '').replace(/\?$/, '');


      if (clean.includes('?')) {


        clean = clean.replace(/([?&])name=[^&]*/i, '$1name=orig');


        if (!clean.includes('name=orig')) clean += '&name=orig';


      } else {


        clean += '?name=orig';


      }


      return clean;


    }





    if (isPinterest || url.includes('pinimg.com')) return url.replace(/\/(?:[0-9]+x[0-9]*|[0-9]+x)\//, '/originals/');





    if (isBooruIo) {
      // Booru.io's current app uses /p/<id> as the page locator; the actual
      // media URL is resolved in background.js via /api/legacy/entity/<id>.
      const postLink = el?.closest?.('a[href*="/p/"]')?.href || '';
      const pageMatch = window.location.pathname.match(/^\/p\/([\w-]+)/i);
      const locator = postLink || (pageMatch ? window.location.href : '');
      if (locator && /\/p\/[\w-]+/i.test(locator)) return locator;
      if (/\/api\/legacy\/data\//i.test(url)) {
        return new URL(url, window.location.href).href.replace(/\/(?:tr\.)?(?:300x|1000x)\.[a-z0-9]+$/i, '/original');
      }
      return null;
    }


    if (url.includes('/api/legacy/data/')) {
      return new URL(url, window.location.href).href.replace(/\/(?:tr\.)?(?:300x|1000x)\.[a-z0-9]+$/i, '/original');
    }





    if (isDonmai || url.includes('cdn.donmai.us')) {


      const fileUrlAttr = el?.getAttribute('data-file-url') || el?.closest('[data-file-url]')?.getAttribute('data-file-url');


      if (fileUrlAttr) return new URL(fileUrlAttr, window.location.href).href;


      if (window.location.pathname.includes('/posts/') && !window.location.pathname.endsWith('/posts/')) {


        const directOriginal = getBooruOriginalUrl();


        if (directOriginal) return directOriginal;


      }


      return new URL(url, window.location.href).href


        .replace(/\/sample\/([^/]+\/[^/]+\/)sample-/i, '/original/$1')


        .replace(/\/(?:180x180|360x360|720x720|sample|\d+x\d+)\//i, '/original/');


    }





    if (isBooru) {


      // [gelbooru-html-guard-v2]


      // Gelbooru допускает только подтверждённый CDN media URL.


      if (isGelbooru) {


        const directGelbooru = getGelbooruOriginalUrl(el, url);


        if (directGelbooru) return directGelbooru;


        return null;


      }





      if (el?.getAttribute('data-file-url')) return el.getAttribute('data-file-url');


      if (el?.getAttribute('data-large-file-url')) return el.getAttribute('data-large-file-url');


      if (window.location.search.includes('s=view') || el?.id === 'image' || document.getElementById('image')) {


        const directOriginal = getBooruOriginalUrl();


        if (directOriginal) return directOriginal;


      }


      const booruUrl = url


        .replace('/thumbnails/', '/images/')


        .replace('/samples/', '/images/')


        .replace('/preview/', '/images/')


        .replace('/sample/sample-', '/images/')


        .replace('thumbnail_', '')


        .replace('sample_', '');


      return new URL(booruUrl, window.location.href).href;


    }





    const parentLink = el?.closest('a');


    if (parentLink && parentLink.href && !isSkebetter) {


      const href = parentLink.href.split('?')[0];


      if (/\.(jpg|jpeg|png|webp|gif)$/i.test(href) && !href.includes('/thumb') && !href.includes('/preview') && !href.includes('loading.gif')) return parentLink.href;


    }





    if (url.includes('?image_process=') || url.includes('?width=') || url.includes('&width=') || url.includes('?size=')) return url.split('?')[0];





    return url;


  }





        function extractSrcCustom(el) {


  if (!el) return null;


  // [bsky-v1] Берём только CDN feed_* изображения Bluesky. Видео/HLS не подхватываем.


  if (isBluesky) {


    const candidates = [


      el.getAttribute?.('data-src'),


      el.currentSrc,


      el.src,


      el.getAttribute?.('src'),


    ];


    const srcset = el.getAttribute?.('data-srcset') || el.getAttribute?.('srcset') || '';


    if (srcset) candidates.push(...srcset.split(',').map(s => s.trim().split(/\s+/)[0]).filter(Boolean));


    for (const candidate of candidates) {


      if (typeof candidate !== 'string' || !candidate) continue;


      if (/^https?:\/\/cdn\.bsky\.app\/img\/(?:feed_fullsize|feed_thumbnail|feed_small)\/plain\/did:[^/]+\/[^/?#]+/i.test(candidate)) {


        // [bsky-download-fix-v4] В очередь кладём максимальный feed-размер.


        return candidate


          .replace('/img/feed_thumbnail/', '/img/feed_fullsize/')


          .replace('/img/feed_small/', '/img/feed_fullsize/');


      }


    }


    return null;


  }


  // [telegram-common-extract-v2]











    if (isTelegram) {


    const candidate = el.getAttribute?.('data-uas-telegram-url') || el.currentSrc || el.src || el.audio?.currentSrc || el.audio?.src || '';


    return /^(?:https?:)?\/\//i.test(candidate) || /^blob:https?:\/\/[^/]+\//i.test(candidate) ? candidate : null;


  }


  if (isIslaDeMuerta) {


    if (el.closest?.('.avatar, a[href*="/user/"], a[href*="/community/"], nav, header, footer, #footer, #rtb, .jumbotron, .navbar, .page, #version') || el.classList?.contains('avatar')) {


      return null;


    }


    const scrambleLarge = el.getAttribute?.('data-scramble-large');


    if (scrambleLarge && !scrambleLarge.startsWith('data:') && !scrambleLarge.includes('spinner')) {


      return scrambleLarge;


    }


    const dataLink = el.getAttribute?.('data-link');


    if (dataLink && !dataLink.startsWith('data:') && !dataLink.includes('spinner')) {


      return dataLink;


    }


    const dataFallback = el.getAttribute?.('data-fallback');


    if (dataFallback && !dataFallback.startsWith('data:') && !dataFallback.includes('spinner') && !dataFallback.includes('image-deleted')) {


      return dataFallback;


    }


    const parentA = el.closest?.('a[href]');


    if (parentA && parentA.href && /\.(jpe?g|png|gif|webp)(?:\?.*)?$/i.test(parentA.href) && !parentA.href.includes('spinner') && !parentA.classList?.contains('sr-only')) {


      return parentA.href;


    }


  }


  if (isTruyenHentai) {


    const thSrc = el.getAttribute?.('data-cover-fallback-src') ||


                  el.getAttribute?.('data-fallback-src') ||


                  el.getAttribute?.('data-src') ||


                  el.closest?.('a[data-src]')?.getAttribute('data-src');


    if (thSrc && !thSrc.startsWith('data:') && !thSrc.includes('loading.gif') && !thSrc.includes('imagenotfound.png')) {


      return thSrc;


    }


  }


  const parentA = el.closest('a[href]');


  if (parentA && parentA.href && /\.(jpe?g|png|gif|webp)(?:\?.*)?$/i.test(parentA.href) && !parentA.href.includes('loading.gif')) {


      return parentA.href;


  }


  if (el.tagName === 'FIGURE' || el.tagName === 'DIV' || el.tagName === 'SPAN') {


    const bg = el.style?.backgroundImage || window.getComputedStyle(el)?.backgroundImage;


    if (bg && bg.includes('url(')) {


      const m = bg.match(/url\(["']?([^"')]+)["']?\)/i);


      if (m && m[1] && !m[1].startsWith('data:')) return m[1];


    }


  }


  if (el.tagName === 'VIDEO') {


    const sources = Array.from(el.querySelectorAll('source'));


    if (sources.length > 0) {


      const mp4Source = sources.find(s => {


        const src = s.src || s.getAttribute('src') || '';


        return src.endsWith('.mp4') || s.type === 'video/mp4';


      });


      if (mp4Source && (mp4Source.src || mp4Source.getAttribute('src'))) {


        return mp4Source.src || mp4Source.getAttribute('src');


      }


      let bestSrc = '';


      let maxPixels = 0;


      for (const s of sources) {


        const src = s.src || s.getAttribute('src');


        if (!src || src.startsWith('blob:') || src.startsWith('data:')) continue;


        const m = src.match(/\/vid\/[^\/]+\/(\d+)x(\d+)\//i) || src.match(/_(\d+)x(\d+)\./i);


        if (m) {


          const pixels = parseInt(m[1], 10) * parseInt(m[2], 10);


          if (pixels > maxPixels) {


            maxPixels = pixels;


            bestSrc = src;


          }


        } else if (!bestSrc) {


          bestSrc = src;


        }


      }


      if (bestSrc) return bestSrc;


    }


    const v = el.currentSrc || el.src || el.getAttribute('data-src');


    if (v && !v.startsWith('blob:') && !v.startsWith('data:')) return v;


  }


  if (el.tagName === 'SOURCE') {


    const s = el.src || el.getAttribute('src');


    if (s && !s.startsWith('blob:') && !s.startsWith('data:')) return s;


  }


  if (el.parentElement && el.parentElement.tagName === 'PICTURE') {


    const sources = el.parentElement.querySelectorAll('source');


    for (const s of sources) {


      const srcset = s.getAttribute('data-srcset') || s.getAttribute('srcset');


      if (srcset && !srcset.startsWith('data:')) {


        const parts = srcset.split(',').map(str => str.trim().split(/\s+/)[0]).filter(Boolean);


        if (parts.length > 0 && !parts[parts.length - 1].startsWith('data:')) return parts[parts.length - 1];


      }


    }


  }


  const dataSrc = el.getAttribute?.('data-original') || el.getAttribute?.('data-file-url') || el.getAttribute?.('data-large-file-url') || el.getAttribute?.('data-src') || el.getAttribute?.('data-lazy-src') || el.getAttribute?.('data-image');


  if (dataSrc && !dataSrc.startsWith('data:') && !dataSrc.includes('loading.gif')) return dataSrc;


  const dataSrcset = el.getAttribute?.('data-srcset');


  if (dataSrcset && !dataSrcset.startsWith('data:')) {


    const parts = dataSrcset.split(',').map(s => s.trim().split(/\s+/)[0]).filter(Boolean);


    if (parts.length > 0 && !parts[parts.length - 1].startsWith('data:')) return parts[parts.length - 1];


  }


  if (el.tagName === 'IMG') {


    if (el.currentSrc && !el.currentSrc.startsWith('data:') && !el.currentSrc.includes('loading.gif')) return el.currentSrc;


    if (el.src && !el.src.startsWith('data:') && !el.src.includes('loading.gif')) return el.src;


    if (el.srcset) {


      const parts = el.srcset.split(',').map(s => s.trim().split(' ')[0]);


      if (parts.length > 0 && !parts[parts.length - 1].startsWith('data:')) return parts[parts.length - 1];


    }


  }


  const style = el.getAttribute?.('style') || '';


  if (style.includes('url(')) {


    const match = style.match(/url\(["']?([^"')]+)["']?\)/i);


    if (match && match[1] && !match[1].startsWith('data:')) return match[1];


  }


  return null;


}





  function isOpenedImage(targetElement, isViewerModal) {


    if (isViewerModal) return true;


    if (isPixiv && (window.location.pathname.includes('/artworks/') || targetElement.closest('.gtm-expand-full-size-illust'))) return true;


    if (isBooru && (targetElement.id === 'image' || targetElement.closest('#image-container, .image-container'))) return true;


    try {


      const cs = window.getComputedStyle(targetElement);


      if (cs.position === 'absolute' || cs.position === 'fixed') {


        if (cs.top.includes('50%') || cs.left.includes('50%') || targetElement.style.top === '50%' || targetElement.style.left === '50%') return true;


        if (cs.transform && cs.transform !== 'none' && (cs.transform.includes('matrix') || cs.transform.includes('translate'))) return true;


      }


      const r = targetElement.getBoundingClientRect();


      if (r.width > window.innerWidth * 0.5 && r.height > window.innerHeight * 0.35) return true;


    } catch (e) {}


    return false;


  }





  function applyTogglePosition(btn, posStr) {


    const isBottom = posStr.includes('bottom');


    const isRight = posStr.includes('right');


    const vProp = isBottom ? 'bottom' : 'top';


    const vOther = isBottom ? 'top' : 'bottom';


    const hProp = isRight ? 'right' : 'left';


    const hOther = isRight ? 'left' : 'right';





    const vMatch = posStr.match(/(?:top|bottom):\s*([^;]+)/i);


    const hMatch = posStr.match(/(?:left|right):\s*([^;]+)/i);





    const vVal = vMatch ? vMatch[1].trim() : (isBottom ? '12px' : '10px');


    const hVal = hMatch ? hMatch[1].trim() : '10px';





    btn.style.removeProperty('inset');


    btn.style.setProperty(vProp, vVal, 'important');


    btn.style.setProperty(vOther, 'auto', 'important');


    btn.style.setProperty(hProp, hVal, 'important');


    btn.style.setProperty(hOther, 'auto', 'important');


  }





  // [bsky-overlay-fix-v3]


  // Bluesky не терпит изменения layout-структуры media-контейнера.


  // Поэтому кнопка для Bluesky живёт в отдельном fixed overlay и никогда


  // не вставляется внутрь IMG/Picture/Figure/поста.


  const bskyOverlayEntries = new Map();


  let bskyOverlayRaf = 0;





  function scheduleBskyOverlayPosition() {


    if (bskyOverlayRaf) return;


    bskyOverlayRaf = requestAnimationFrame(() => {


      bskyOverlayRaf = 0;


      for (const [key, entry] of bskyOverlayEntries) {


        try {


          const el = entry.el;


          const btn = entry.btn;


          if (!el || !btn || !el.isConnected) {


            btn?.remove();


            bskyOverlayEntries.delete(key);


            continue;


          }


          const r = el.getBoundingClientRect();


          if (r.width <= 0 || r.height <= 0) {


            btn.style.display = 'none';


            continue;


          }


          btn.style.display = 'flex';


          btn.style.setProperty('position', 'fixed', 'important');


          btn.style.setProperty('top', `${Math.max(4, Math.round(r.top + 8))}px`, 'important');


          btn.style.setProperty('left', `${Math.max(4, Math.round(r.left + 8))}px`, 'important');


          btn.style.setProperty('right', 'auto', 'important');


          btn.style.setProperty('bottom', 'auto', 'important');


        } catch (_) {}


      }


    });


  }





  if (isBluesky && !window.__UAS_BSKY_OVERLAY_LISTENERS__) {


    window.__UAS_BSKY_OVERLAY_LISTENERS__ = true;


    window.addEventListener('scroll', scheduleBskyOverlayPosition, { passive: true, capture: true });


    window.addEventListener('resize', scheduleBskyOverlayPosition, { passive: true });


  }





  function attachBlueskyCheckbox(el, key, original, rawSrc) {


    if (!el || !key || !original) return;





    let entry = bskyOverlayEntries.get(key);


    if (entry && entry.el !== el) {


      try { entry.btn.remove(); } catch (_) {}


      bskyOverlayEntries.delete(key);


      entry = null;


    }





    if (entry && entry.btn?.isConnected) {


      entry.el = el;


      entry.btn.dataset.key = key;


      entry.btn.dataset.url = original;


      if (typeof entry.btn._updateVisual === 'function') entry.btn._updateVisual();


      scheduleBskyOverlayPosition();


      return;


    }





    // На случай, если на странице уже остался старый generic toggle от


    // предыдущей версии расширения — удаляем только toggle с тем же ключом.


    document.querySelectorAll('.art-saver-card-toggle').forEach(btn => {


      if (btn.dataset.key === key && !btn.classList.contains('art-saver-bsky-overlay')) {


        btn.remove();


      }


    });





    const toggleBtn = document.createElement('div');


    toggleBtn.className = 'art-saver-card-toggle art-saver-bsky-overlay';


    toggleBtn.dataset.key = key;


    toggleBtn.dataset.url = original;


    toggleBtn.dataset.isVideo = 'false';


    toggleBtn.title = t('queuedTitle');


    toggleBtn.style.cssText = `


      position: fixed !important;


      z-index: 2147483647 !important;


      width: 32px !important;


      height: 32px !important;


      border-radius: 8px !important;


      display: flex !important;


      align-items: center !important;


      justify-content: center !important;


      cursor: pointer !important;


      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5) !important;


      backdrop-filter: blur(8px) !important;


      -webkit-backdrop-filter: blur(8px) !important;


      pointer-events: auto !important;


      user-select: none !important;


      box-sizing: border-box !important;


      margin: 0 !important;


      padding: 0 !important;


      line-height: 1 !important;


      transform: none !important;


      float: none !important;


      clear: none !important;


      touch-action: manipulation !important;


    `;





    function updateToggleVisual() {


      const isIgnored = state.ignoredKeys.has(key);


      const isDownloaded = state.downloadedHistory.has(key);


      const isQueued = state.readyToDownload.has(key);


      const isClearedNew = state.clearedNewKeys.has(key);


      const isInProgress = state.inProgressKeys.has(key);





      let background = currentTheme.primary;


      let icon = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;


      let title = t('photoQueuedTitle');





      if (isIgnored) {


        background = 'rgba(18,18,18,0.82)';


        icon = '';


        title = t('ignoredTitle');


      } else if (isInProgress) {


        background = '#f39c12';


        icon = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;


        title = t('downloadingTitle');


      } else if (isClearedNew && !isQueued) {


        background = 'rgba(110,110,110,0.80)';


        icon = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"/><line x1="12" y1="6" x2="12" y2="18"/></svg>`;


        title = t('clearedTitle');


      } else if (isDownloaded && !isQueued && historyCheckbox?.checked) {


        background = '#27ae60';


        icon = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;


        title = t('downloadedTitle');


      }





      toggleBtn.dataset.status = isIgnored ? 'ignored' : (isInProgress ? 'downloading' : (isClearedNew && !isQueued ? 'cleared-new' : (isDownloaded && !isQueued ? 'downloaded' : 'active')));


      toggleBtn.title = title;


      toggleBtn.style.setProperty('background', background, 'important');


      toggleBtn.style.setProperty('border', isIgnored ? '2px solid rgba(255,255,255,0.5)' : 'none', 'important');


      toggleBtn.innerHTML = icon;


    }





    toggleBtn._updateVisual = updateToggleVisual;





    ['mousedown', 'mouseup', 'pointerdown', 'pointerup', 'touchstart', 'touchend', 'click'].forEach(evt => {


      toggleBtn.addEventListener(evt, e => {


        e.stopPropagation();


        if (evt === 'mousedown' || evt === 'pointerdown') e.preventDefault();


      }, { passive: false });


    });





    toggleBtn.addEventListener('click', async (e) => {


      e.preventDefault();


      e.stopPropagation();


      if (!isContextValid()) return;





      const isIgnored = state.ignoredKeys.has(key);


      const isQueued = state.readyToDownload.has(key);


      const isClearedNew = state.clearedNewKeys.has(key);





      if (isClearedNew) {


        state.clearedNewKeys.delete(key);


        state.ignoredKeys.delete(key);


        state.readyToDownload.set(key, { url: original, previewUrl: rawSrc, isVideo: false });


      } else if (isIgnored) {


        state.ignoredKeys.delete(key);


        state.readyToDownload.set(key, { url: original, previewUrl: rawSrc, isVideo: false });


      } else if (isQueued) {


        state.readyToDownload.delete(key);


        state.ignoredKeys.add(key);


      } else {


        state.ignoredKeys.delete(key);


        state.readyToDownload.set(key, { url: original, previewUrl: rawSrc, isVideo: false });


      }





      updateToggleVisual();


      try {


        await chrome.storage.local.set({ [`ignored_${siteKey}`]: Array.from(state.ignoredKeys) });


      } catch (_) {}


      persistQueue();


      updateUI();


    });





    document.body.appendChild(toggleBtn);


    entry = { el, btn: toggleBtn };


    bskyOverlayEntries.set(key, entry);


    updateToggleVisual();


    scheduleBskyOverlayPosition();


  }








  function attachCheckbox(el, key, original, rawSrc) {


    if (!el || !key) return;





    // [bsky-overlay-fix-v3] Никогда не трогаем DOM/стили медиа Bluesky.


    if (isBluesky) {


      attachBlueskyCheckbox(el, key, original, rawSrc);


      return;


    }





    let targetElement = el;


    if (el.parentElement && el.parentElement.tagName === 'PICTURE') {


      targetElement = el.parentElement;


    }





    const isViewerModal = isTelegram


      ? !!targetElement.closest('#MediaViewer, .media-viewer-whole, #StoryViewer, #stories-viewer')


      : !!(


          targetElement.closest('[role="dialog"], [aria-modal="true"], .pswp, .lightbox, [class*="lightbox"], [class*="viewer"], [class*="modal"], [id*="modal"], [id*="viewer"], [id*="lightbox"], #pv_box, #pv_photo, zoomable-img, .media-lightbox-img') ||


      targetElement.classList.contains('media-lightbox-img') ||


      (isPixiv && (targetElement.closest('.gtm-expand-full-size-illust') || window.location.pathname.includes('/artworks/'))) ||


      (isBooru && (targetElement.id === 'image' || targetElement.closest('#image-container, .image-container')))


    );





    const isViewer = isOpenedImage(targetElement, isViewerModal);


    let host = null;


    let insertAnchor = null;





    if (isViewer) {


      host = document.body;


    // [telegram-common-host-v1]


    } else











    if (isTelegram) {


      host = targetElement.closest('.album-item, .media-grid-item, .media-inner, .bubble-media, .bubble-content-media, .attachment-media, [data-uas-telegram-media-host]') || targetElement.parentElement;


      if (host && (host.tagName === 'IMG' || host.tagName === 'VIDEO' || host.tagName === 'AUDIO')) {


        host = host.parentElement;


      }


    } else if (isEHentai) {
      host =
        targetElement.closest('#gdt a[href*="/s/"], #i3') ||
        targetElement.parentElement;
    } else if (isBluesky) {


      // [bsky-layout-fix-v2]


      // Не меняем DOM-структуру картинки Bluesky: особенно важно не


      // вставлять DIV внутрь <picture>, иначе браузер может перестать


      // отображать само изображение.


      const bskyFigure = targetElement.closest('figure');


      if (bskyFigure && bskyFigure.querySelectorAll('img').length <= 1) {


        host = bskyFigure;


      } else {


        let bskyHost = targetElement.parentElement;





        // <picture> допускает source/img, но не произвольную DIV-обёртку.


        // Поэтому переносим host на контейнер СНАРУЖИ picture.


        if (bskyHost?.tagName === 'PICTURE') {


          bskyHost = bskyHost.parentElement;


        }





        if (!bskyHost || bskyHost.tagName === 'IMG') {


          bskyHost = bskyHost?.parentElement || null;


        }





        host = bskyHost;


      }





      // Главное правило: для Bluesky никакого generic wrapper вокруг IMG.


      if (!host) host = targetElement.parentElement;


    } else if (isTruyenHentai) {


      host = targetElement.closest('.grid-card__media, .media-wrapper figure, .blog-gallery ul li') || targetElement.parentElement;


    } else if (isSotwe) {


      host = targetElement.closest('.media-carousel-image, .video-player-container, .v-carousel__item, .v-window-item') ||


             targetElement.closest('.tweet-card') ||


             targetElement.parentElement;


    } else if (isIslaDeMuerta) {


      host = targetElement.closest('a[href], .art-saver-card-wrap') || targetElement.parentElement;


    } else if (isM4ex) {


      host = targetElement.closest('a[href*="m4ex_box"]') || targetElement.parentElement;


    } else if (isErocon) {


      host = targetElement.closest('a[href*="livedoor.blogimg.jp"]') || targetElement.closest('.imgbox') || targetElement.parentElement;


    } else if (isScrolller) {


      host = targetElement.closest('[class*="picture"], [class*="media"], [class*="card"], [class*="item"], [class*="container"]') ||


             (targetElement.parentElement?.tagName !== 'PICTURE' ? targetElement.parentElement : targetElement.parentElement.parentElement);


    } else if (isNijiero) {


      host = targetElement.closest('figure.wp-block-image, .wp-block-image, figure.eye-catch, .eye-catch, .entry-card-wrap .entry-card-thumb, .entry-card-thumb, .entry-card-wrap') || targetElement.parentElement;


    } else if (isHentaiWitch) {


      host = targetElement.closest('figure.wp-block-image, .wp-block-image, figure.eye-catch, .eye-catch, .entry-card-thumb, .navi-entry-card-thumb, .popular-entry-card-thumb, .new-entry-card-thumb, .entry-card-wrap') || targetElement.parentElement;


    } else if (isFemmeDoll) {


      host = targetElement.closest('figure.wp-block-image, .wp-block-image, figure.p-articleThumb, .p-articleThumb, .p-postList__item, .p-postList__thumb, .c-postThumb') || targetElement.parentElement;


    } else if (isPixAI) {


      host = targetElement.closest('a[href*="/post/"], a[href*="/artwork/"]') || targetElement.closest('article');


    } else if (isWallhaven) {


      // Wallhaven's native card is already a correctly positioned figure.thumb.
      // Never create art-saver-card-wrap around its image.
      host = targetElement.closest('figure.thumb[data-wallpaper-id], figure.thumb') || targetElement.parentElement;


    } else if (isAIBooru) {


      host = targetElement.closest('article.post-preview') || targetElement.closest('#post-view');


    } else if (isPixiv) {


      host = targetElement.closest('.group.relative, [class*="BaseThumbnailFlex"]') ||


             targetElement.closest('a[href*="/artworks/"]')?.parentElement ||


             targetElement.parentElement;


    } else if (isVk) {


      const vkPost = targetElement.closest('[data-testid="post"], [data-post-id], .Post, .post, .feed_row, .wall_item, section, .vkuiGroup__host') || targetElement.parentElement?.parentElement;


      const vkLike = vkPost?.querySelector('[data-testid="post_footer_action_like"]') ||


                     vkPost?.querySelector('[data-testid="post_footer_action_share"]') ||


                     vkPost?.querySelector('.like_wrap, .PostBottomActions, .PostActions');


      const vkActionsRow = vkLike?.closest('.vkuiFlex__host') || vkLike?.parentElement;


      if (vkActionsRow) {


        host = vkActionsRow;


        const shareBtn = vkActionsRow.querySelector('[data-testid="post_footer_action_share"]') ||


                         vkActionsRow.querySelector('.share, .like_share');


        insertAnchor = shareBtn ? shareBtn.nextSibling : null;


      } else {


        host = targetElement.closest('[data-testid="primary-attachment-photo"], [data-testid="primary-attachment-interactive-wrapper"]') || targetElement.parentElement;


      }


    } else if (isReddit) {


      const redditPost = targetElement.closest('shreddit-post, article, .Post, .post, [data-testid="post-container"]');


      const redditActionRow = redditPost?.querySelector?.('[data-testid="action-row"], [slot="action-row"], shreddit-post-action-bar, rpl-action-bar') ||


                              redditPost?.shadowRoot?.querySelector?.('[data-testid="action-row"], shreddit-post-action-bar, rpl-action-bar') ||


                              redditPost?.querySelector?.('div.shreddit-post-container[aria-label*="Actions"]');


      if (redditActionRow) {


        host = redditActionRow;


        insertAnchor = redditActionRow.querySelector('.ms-auto') ||


                       redditActionRow.querySelector('slot[name="action-row-whitespace"]') ||


                       null;


      } else {


        host = targetElement.closest('[slot="post-media-container"]') || targetElement.parentElement;


      }


    } else if (isPlurk) {


      const plurkBox = targetElement.closest('.plurk, .plurk_cnt');


      if (plurkBox) {


        let plurkBadgeWrap = plurkBox.querySelector('.art-saver-plurk-badges');


        if (!plurkBadgeWrap) {


          plurkBadgeWrap = document.createElement('div');


          plurkBadgeWrap.className = 'art-saver-plurk-badges';


          plurkBadgeWrap.style.cssText = 'position: absolute !important; top: -8px !important; right: -6px !important; z-index: 2147483647 !important; display: flex !important; flex-direction: row !important; gap: 4px !important; pointer-events: auto !important;';


          plurkBox.appendChild(plurkBadgeWrap);


        }


        host = plurkBadgeWrap;


      } else {


        host = targetElement.parentElement;


      }


    } else if (isZerochan) {


      host = targetElement.closest('li[data-id] > div') || targetElement.closest('li[data-id]') || targetElement.parentElement;


    } else if (isKonachan || isYandere) {


      host = targetElement.closest('.inner') || targetElement.closest('li[id^="p"] .inner') || targetElement.parentElement;


    } else if (isRule34Us) {


      host = targetElement.closest('.thumbail-container > div') || targetElement.closest('.content_push');


    } else if (isR34App) {


      host = targetElement.closest('figure') || targetElement.closest('li[data-virtual-key]');


    } else if (isJoyReactor) {


      host = targetElement.closest('.image-zoom-unzoomed, .image.zoomed-image, .image, .post-content, .post_content') || targetElement.parentElement;


    } else if (isRule34Gg) {


      host = targetElement.closest('.media');


    } else if (isGelbooru) {


      host = targetElement.closest('article.thumbnail-preview') ||


             targetElement.closest('#post-view') ||


             targetElement.parentElement;


    } else if (isFevian) {


      host = targetElement.closest('.trim');


    } else if (isVanlett) {


      host = targetElement.closest('.attachment, .still-image');


    } else if (isKurocore) {


      host = targetElement.closest('.illust-image');


    } else if (isDonmai) {


      host = targetElement.closest('.post-preview-container, article.post-preview');


    } else if (isBooruIo) {


      host = targetElement.closest('.card');


    } else if (isSafebooru || isBooru) {


      host = targetElement.closest('.thumb, span.thumb');


    } else if (isPinterest) {


      const pin = targetElement.closest('[data-test-id="pin"], [data-test-id="pinrep"], [data-grid-item="true"], div[role="listitem"]');


      const moreBtn = pin?.querySelector('[data-test-id="more-actions-button"]') ||


                      pin?.querySelector('button[aria-label*="действия"], button[aria-label*="actions"], button[aria-label*="More"]') ||


                      pin?.querySelector('svg path[d*="M2.5 9.5"]')?.closest('button');


      if (moreBtn) {


        insertAnchor = moreBtn.closest('.nnftW_') || moreBtn.closest('[aria-label]') || moreBtn;


        host = insertAnchor.parentElement || pin;


      } else {


        host = pin?.querySelector('[data-test-id="pinrep-footer"]') ||


               pin?.querySelector('[data-test-id="contentLayer"]') ||


               pin;


      }


    }





    const isSpecialHost = isJoyReactor || (isWallhaven && !!host) ||


                          (isVk && !!host && host !== targetElement.parentElement) ||


                          (isReddit && !!host && host !== targetElement.parentElement) ||


                          isPlurk || isPixiv || isPinterest || isViewer || isSotwe || isTruyenHentai || isTelegram || isEHentai;





    const isMultiImageContainer = !isSpecialHost && host && (


      host.querySelectorAll('img').length > 1 ||


      host.classList.contains('post') ||


      host.classList.contains('post_content') ||


      host.classList.contains('entry-content') ||


      host.classList.contains('content_main') ||


      host.id === 'the-content' ||


      host.id === 'content-section'


    );





    if (!host || (!isBluesky && isMultiImageContainer) || (host === document.body && !isViewer) ||


        (!isBluesky && (host.tagName === 'IMG' || host.tagName === 'PICTURE' || host.tagName === 'VIDEO' || host.tagName === 'AUDIO'))) {


      let wrapper = targetElement.parentElement;


      if (!wrapper || !wrapper.classList.contains('art-saver-card-wrap')) {


        wrapper = document.createElement('div');


        wrapper.className = 'art-saver-card-wrap';


        wrapper.style.cssText = 'position: relative !important; display: inline-block !important; line-height: 0 !important; max-width: 100% !important; vertical-align: middle !important;';


        targetElement.parentNode.insertBefore(wrapper, targetElement);


        wrapper.appendChild(targetElement);


      }


      host = wrapper;


    }





    if (!host) return;





    const keySelector = (typeof CSS !== 'undefined' && CSS.escape)


      ? `.art-saver-card-toggle[data-key="${CSS.escape(key)}"]`


      : `.art-saver-card-toggle[data-key="${key}"]`;


    const existingScope = (isPinterest ? targetElement.closest('[data-test-id="pin"], [data-test-id="pinrep"], [data-grid-item="true"]') : null) || host;


    const existingSameKey = existingScope?.querySelector(keySelector);


    if (existingSameKey) {


      if (existingSameKey.parentElement === host) {


        if (typeof existingSameKey._updateVisual === 'function') {


          existingSameKey._updateVisual();


        }


        return;


      }


      existingSameKey.remove();


    }


    if (host && !host.classList.contains('art-saver-plurk-badges')) {


      const otherToggle = host.querySelector('.art-saver-card-toggle');


      if (otherToggle && otherToggle.dataset.key !== key && !isBluesky) otherToggle.remove();


    }





    try {


      const cs = window.getComputedStyle(host);


      if (cs.position === 'static') host.style.setProperty('position', 'relative', 'important');


      if (cs.display === 'inline' && !isPixiv) host.style.setProperty('display', 'inline-block', 'important');


    } catch (e) {}





    const isVid = (typeof isVideoElement === 'function' && isVideoElement(targetElement, original));





    const toggleBtn = document.createElement('div');


    toggleBtn.className = 'art-saver-card-toggle';


    toggleBtn.dataset.key = key;


    toggleBtn.dataset.isVideo = isVid ? 'true' : 'false';





    function updateToggleVisual() {


      const isIgnored = state.ignoredKeys.has(key);


      const isDownloaded = state.downloadedHistory.has(key);


      const isQueued = state.readyToDownload.has(key);


      const isClearedNew = state.clearedNewKeys.has(key);


      const isInProgress = state.inProgressKeys.has(key);


      const useHistory = historyCheckbox ? historyCheckbox.checked : true;





      if (!isJoyReactor) targetElement.style.transition = 'opacity 0.2s ease, filter 0.2s ease';





      if (isIgnored) {


        toggleBtn.dataset.status = 'ignored';


        toggleBtn.title = t('ignoredTitle');


        toggleBtn.style.setProperty('background', 'rgba(18, 18, 18, 0.75)', 'important');


        toggleBtn.style.setProperty('border', '2px solid rgba(255, 255, 255, 0.5)', 'important');


        toggleBtn.innerHTML = '';


        if (!isJoyReactor) targetElement.style.opacity = '0.35';


        if (!isJoyReactor) targetElement.style.filter = 'grayscale(100%)';


      } else if (isInProgress) {


        toggleBtn.dataset.status = 'downloading';


        toggleBtn.title = t('downloadingTitle');


        toggleBtn.style.setProperty('background', '#f39c12', 'important');


        toggleBtn.style.setProperty('border', 'none', 'important');


        toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block!important;margin:0!important;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;


        if (!isJoyReactor) targetElement.style.opacity = '1';


        if (!isJoyReactor) targetElement.style.filter = 'none';


      } else if (isClearedNew && !isQueued) {


        toggleBtn.dataset.status = 'cleared-new';


        toggleBtn.title = t('clearedTitle');


        toggleBtn.style.setProperty('background', 'rgba(110, 110, 110, 0.72)', 'important');


        toggleBtn.style.setProperty('border', '2px solid rgba(255, 255, 255, 0.25)', 'important');


        toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"></line><line x1="12" y1="6" x2="12" y2="18"></line></svg>`;


        if (!isJoyReactor) targetElement.style.opacity = '0.72';


        if (!isJoyReactor) targetElement.style.filter = 'grayscale(35%)';


      } else if (isDownloaded && !isQueued && useHistory) {


        toggleBtn.dataset.status = 'downloaded';


        toggleBtn.title = t('downloadedTitle');


        toggleBtn.style.setProperty('background', '#27ae60', 'important');


        toggleBtn.style.setProperty('border', 'none', 'important');


        toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:block!important;margin:0!important;padding:0!important;"><polyline points="20 6 9 17 4 12"></polyline></svg>`;


        if (!isJoyReactor) targetElement.style.opacity = '0.85';


        if (!isJoyReactor) targetElement.style.filter = 'none';


      } else {


        toggleBtn.dataset.status = 'active';


        toggleBtn.title = isVid ? t('videoQueuedTitle') : t('photoQueuedTitle');


        const bgActive = isVid ? '#8e44ad' : currentTheme.primary;


        toggleBtn.style.setProperty('background', bgActive, 'important');


        toggleBtn.style.setProperty('border', 'none', 'important');


        const iconSvg = isVid 


          ? `<svg viewBox="0 0 24 24" width="14" height="14" fill="white" style="display:block!important;margin:0!important;padding:0!important;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>` 


          : `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:block!important;margin:0!important;padding:0!important;"><polyline points="20 6 9 17 4 12"></polyline></svg>`;


        toggleBtn.innerHTML = iconSvg;


        if (!isJoyReactor) targetElement.style.opacity = '1';


        if (!isJoyReactor) targetElement.style.filter = 'none';


      }


    }


    toggleBtn._updateVisual = updateToggleVisual;





    toggleBtn.style.cssText = `


      position: absolute !important;


      z-index: 2147483647 !important;


      width: 26px !important;


      height: 26px !important;


      border-radius: ${currentTheme.toggleRadius || '6px'} !important;


      display: flex !important;


      align-items: center !important;


      justify-content: center !important;


      cursor: pointer !important;


      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5) !important;


      backdrop-filter: blur(8px) !important;


      pointer-events: auto !important;


      user-select: none !important;


      box-sizing: border-box !important;


      margin: 0 !important;


      padding: 0 !important;


      line-height: 1 !important;


      transform: none !important;


      float: none !important;


      clear: none !important;


      touch-action: manipulation !important;


    `;





    if (isViewer) {


      const updateViewerTogglePos = () => {


        if (!targetElement.isConnected) {


          toggleBtn.remove();


          window.removeEventListener('scroll', updateViewerTogglePos);


          window.removeEventListener('resize', updateViewerTogglePos);


          return;


        }


        const r = targetElement.getBoundingClientRect();


        if (r.width > 0 && r.height > 0) {


          const topPos = Math.max(16, Math.round(r.top + 16));


          const leftPos = Math.max(16, Math.round(r.left + 16));


          toggleBtn.style.setProperty('position', 'fixed', 'important');


          toggleBtn.style.setProperty('top', `${topPos}px`, 'important');


          toggleBtn.style.setProperty('left', `${leftPos}px`, 'important');


          toggleBtn.style.setProperty('right', 'auto', 'important');


          toggleBtn.style.setProperty('bottom', 'auto', 'important');


          toggleBtn.style.setProperty('width', '30px', 'important');


          toggleBtn.style.setProperty('height', '30px', 'important');


          toggleBtn.style.setProperty('border-radius', '8px', 'important');


        }


      };


      updateViewerTogglePos();


      window.addEventListener('scroll', updateViewerTogglePos, { passive: true });


      window.addEventListener('resize', updateViewerTogglePos, { passive: true });


    } else if (isVk && host?.dataset?.testid !== 'primary-attachment-image-content' && host !== targetElement.parentElement) {


      toggleBtn.style.setProperty('position', 'relative', 'important');


      toggleBtn.style.setProperty('top', 'auto', 'important');


      toggleBtn.style.setProperty('bottom', 'auto', 'important');


      toggleBtn.style.setProperty('left', 'auto', 'important');


      toggleBtn.style.setProperty('right', 'auto', 'important');


      toggleBtn.style.setProperty('align-self', 'center', 'important');


      toggleBtn.style.setProperty('flex-shrink', '0', 'important');


      toggleBtn.style.setProperty('width', '28px', 'important');


      toggleBtn.style.setProperty('height', '28px', 'important');


      toggleBtn.style.setProperty('border-radius', '50%', 'important');


      toggleBtn.style.setProperty('margin-left', '6px', 'important');


      toggleBtn.style.setProperty('box-shadow', '0 2px 6px rgba(0, 0, 0, 0.25)', 'important');


    } else if (isReddit && host !== targetElement.parentElement) {


      toggleBtn.style.setProperty('position', 'relative', 'important');


      toggleBtn.style.setProperty('top', 'auto', 'important');


      toggleBtn.style.setProperty('bottom', 'auto', 'important');


      toggleBtn.style.setProperty('left', 'auto', 'important');


      toggleBtn.style.setProperty('right', 'auto', 'important');


      toggleBtn.style.setProperty('align-self', 'center', 'important');


      toggleBtn.style.setProperty('flex-shrink', '0', 'important');


      toggleBtn.style.setProperty('width', '32px', 'important');


      toggleBtn.style.setProperty('height', '32px', 'important');


      toggleBtn.style.setProperty('border-radius', '9999px', 'important');


      toggleBtn.style.setProperty('margin', '0 4px', 'important');


      toggleBtn.style.setProperty('box-shadow', '0 2px 6px rgba(0, 0, 0, 0.25)', 'important');


    } else if (isPinterest && insertAnchor) {


      toggleBtn.style.setProperty('position', 'relative', 'important');


      toggleBtn.style.setProperty('top', 'auto', 'important');


      toggleBtn.style.setProperty('bottom', 'auto', 'important');


      toggleBtn.style.setProperty('left', 'auto', 'important');


      toggleBtn.style.setProperty('right', 'auto', 'important');


      toggleBtn.style.setProperty('margin-right', '6px', 'important');


      toggleBtn.style.setProperty('width', '24px', 'important');


      toggleBtn.style.setProperty('height', '24px', 'important');


      toggleBtn.style.setProperty('flex-shrink', '0', 'important');


      toggleBtn.style.setProperty('align-self', 'center', 'important');


      toggleBtn.style.setProperty('box-shadow', '0 2px 6px rgba(0, 0, 0, 0.25)', 'important');


    } else if (isPlurk && host.classList.contains('art-saver-plurk-badges')) {


      toggleBtn.style.setProperty('position', 'relative', 'important');


      toggleBtn.style.setProperty('top', 'auto', 'important');


      toggleBtn.style.setProperty('bottom', 'auto', 'important');


      toggleBtn.style.setProperty('left', 'auto', 'important');


      toggleBtn.style.setProperty('right', 'auto', 'important');


      toggleBtn.style.setProperty('width', '22px', 'important');


      toggleBtn.style.setProperty('height', '22px', 'important');


      toggleBtn.style.setProperty('border-radius', '6px', 'important');


      toggleBtn.style.setProperty('box-shadow', '0 2px 8px rgba(0, 0, 0, 0.4)', 'important');


    } else {


      applyTogglePosition(toggleBtn, currentTheme.togglePos || 'top: 8px; left: 8px;');


    }


    updateToggleVisual();





    ['click', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'touchstart', 'touchend'].forEach(evt => {


      toggleBtn.addEventListener(evt, e => {


        e.stopPropagation();


        if (evt === 'mousedown' || evt === 'pointerdown') e.preventDefault();


      }, { passive: false });


    });





    toggleBtn.addEventListener('click', async (e) => {


      e.stopPropagation();


      e.preventDefault();


      if (!isContextValid()) return;





      const isIgnored = state.ignoredKeys.has(key);


      const isDownloaded = state.downloadedHistory.has(key);


      const isQueued = state.readyToDownload.has(key);


      const isClearedNew = state.clearedNewKeys.has(key);





      // [telegram-toggle-preserve-v4]


      // Telegram album items use tg-album://message/<id>. The common generic


      // toggle used to strip telegramMessageId/lazyAlbum, making a manually


      // re-selected album item impossible to resolve later.


      // [telegram-silent-key-v6]


      // telegram.js now gives every Telegram message a stable key derived from data-message-id.


      const getTelegramQueueItem = () => {


        if (!isTelegram) return null;


        try {


          const canonical = window.__UAS_TELEGRAM_BRIDGE__?.getItemByKey?.(key);


          if (canonical) {


            return {


              url: canonical.url || original,


              previewUrl: canonical.previewUrl || rawSrc,


              isVideo: !!canonical.isVideo,


              isAudio: !!canonical.isAudio,


              kind: canonical.kind || (canonical.isAudio ? 'audio' : (canonical.isVideo ? 'video' : 'image')),


              fileName: canonical.fileName || '',


              telegramMessageId: canonical.telegramMessageId || '',


              lazyAlbum: !!canonical.lazyAlbum,


            };


          }


        } catch (_) {}


        return {


          url: original,


          previewUrl: rawSrc,


          isVideo: isVid,


          isAudio: false,


          kind: isVid ? 'video' : 'image',


          fileName: '',


          telegramMessageId: targetElement?.closest?.('.album-item')?.querySelector?.('[id^="album-media-message-"]')?.id?.replace(/^album-media-message-/, '') || '',


          lazyAlbum: String(original || '').startsWith('tg-album://'),


        };


      };


      const telegramQueueItem = getTelegramQueueItem();





      if (isClearedNew) {


        state.clearedNewKeys.delete(key);


        state.readyToDownload.set(key, telegramQueueItem || { url: original, previewUrl: rawSrc, isVideo: isVid });


      } else if (isIgnored) {


        state.ignoredKeys.delete(key);


        state.readyToDownload.set(key, telegramQueueItem || { url: original, previewUrl: rawSrc, isVideo: isVid });


      } else if (isQueued) {


        state.readyToDownload.delete(key);


        state.ignoredKeys.add(key);


      } else {


        state.ignoredKeys.delete(key);


        state.readyToDownload.set(key, telegramQueueItem || { url: original, previewUrl: rawSrc, isVideo: isVid });


      }





      updateToggleVisual();


      try {


        await chrome.storage.local.set({ [`ignored_${siteKey}`]: Array.from(state.ignoredKeys) });


      } catch (err) {}


      persistQueue();


      updateUI();


    });





    if (insertAnchor && insertAnchor.parentNode === host) {


      host.insertBefore(toggleBtn, insertAnchor);


    } else {


      host.appendChild(toggleBtn);


    }


  }





  function cacheKonachanPosts() {


    if (!isKonachan && !isYandere) return;


    document.querySelectorAll('script').forEach(s => {


      const text = s.textContent;


      if (text && (text.includes('file_url') || text.includes('Post.register'))) {


        const matches = text.matchAll(/"id":\s*(\d+)[^}]*?"file_url":\s*"([^"]+)"/g);


        for (const m of matches) konachanPostMap.set(String(m[1]), m[2].replace(/\\\//g, '/'));


      }


    });


  }





  let persistQueueTimer = null;


  function persistQueue() {


    if (!isContextValid()) return;


    clearTimeout(persistQueueTimer);


    persistQueueTimer = setTimeout(() => {


      if (!isContextValid()) return;


      try {


        uasRefreshLifecycleStates();
        const queueArray = Array.from(state.readyToDownload.entries());
        const lifecycle = Array.from(state.itemStates.entries());
        chrome.storage.local.set({ [`ready_${siteKey}`]: queueArray, [`lifecycle_${siteKey}`]: lifecycle }).catch(() => {});


      } catch (e) {}


    }, 250);


  }





  async function loadSettings() {


    if (!isContextValid()) return;


    try {


      const data = await chrome.storage.local.get([


        `downloaded_${siteKey}`,


        `ignored_${siteKey}`,


        `ready_${siteKey}`,
        `lifecycle_${siteKey}`,


        'allow_fallback',


        'save_to_history',


        'uas_zip_auto',


        'uas_zip_threshold',


        'uas_language'


      ]);


      if (Array.isArray(data[`downloaded_${siteKey}`])) state.downloadedHistory = new Set(data[`downloaded_${siteKey}`]);


      if (Array.isArray(data[`ignored_${siteKey}`])) state.ignoredKeys = new Set(data[`ignored_${siteKey}`]);


      if (typeof data.allow_fallback === 'boolean') fallbackCheckbox.checked = data.allow_fallback;


      if (typeof data.save_to_history === 'boolean') historyCheckbox.checked = data.save_to_history;


      if (typeof data.uas_zip_auto === 'boolean') zipAutoCheckbox.checked = data.uas_zip_auto;


      if (data.uas_language === 'en' || data.uas_language === 'ru') {
        uasLanguage = data.uas_language;
        globalThis.__UAS_LANG__ = uasLanguage;
      }
      applyLanguage();

      if (Number.isFinite(Number(data.uas_zip_threshold))) {


        zipThresholdInput.value = String(Math.max(2, Math.min(5000, Number(data.uas_zip_threshold))));


      }





      // Восстановление очереди картинок из памяти при перезапуске расширения


      if (Array.isArray(data[`lifecycle_${siteKey}`])) {
        for (const [k, val] of data[`lifecycle_${siteKey}`]) if (k) state.itemStates.set(String(k), val || { state: 'discovered' });
      }

      if (Array.isArray(data[`ready_${siteKey}`])) {


        for (const [k, val] of data[`ready_${siteKey}`]) {


          // [telegram-stale-queue-v6]


          if (isTelegram && !/^tg_(?:msg|album)_/i.test(String(k))) continue;


          if (!state.downloadedHistory.has(k) && !state.ignoredKeys.has(k)) {


            state.readyToDownload.set(k, val);


          }


        }


      }


    } catch (e) {}


  }





  try {


    chrome.storage.onChanged.addListener((changes, area) => {


      if (area === 'local' && changes[`downloaded_${siteKey}`]) {


        const val = changes[`downloaded_${siteKey}`].newValue;


        if (Array.isArray(val)) {


          for (const k of val) {


            state.downloadedHistory.add(k);


            state.readyToDownload.delete(k);


          }


          document.querySelectorAll('.art-saver-card-toggle').forEach(t => {


            if (typeof t._updateVisual === 'function') t._updateVisual();


          });


          updateUI();


        }


      }


    });


  } catch(e) {}





  
  // [poipiku-original-fix-v4]
  // POIPIKU original URLs are signed and are obtained through the site's
  // own AJAX handlers. The public thumbnail itself is NOT the original URL.
  const poipikuSignedCache = new Map();
  const poipikuSignedPending = new Map();
  const poipikuElementByKey = new Map();

  function poipikuExtractIds(element) {
    const root = element?.closest?.('.IllustItem') || element;
    const thumb = element?.closest?.('.IllustItemThumb') ||
                  root?.querySelector?.('.IllustItemThumb');
    const onclick = thumb?.getAttribute?.('onclick') ||
                    root?.querySelector?.('.IllustItemThumb')?.getAttribute?.('onclick') || '';
    const match = onclick.match(/showIllustDetail\(\s*(\d+)\s*,\s*(\d+)\s*,/i);
    if (match) return { userId: match[1], postId: match[2] };

    const rootMatch = String(root?.id || '').match(/^IllustItem_(\d+)$/i);
    const userHref = root?.querySelector?.('.IllustItemUserName a[href^="/"]')?.getAttribute?.('href') || '';
    const userMatch = userHref.match(/^\/(\d+)\/?$/);
    if (rootMatch && userMatch) {
      return { userId: userMatch[1], postId: rootMatch[1] };
    }
    return null;
  }

  function poipikuIsSignedUrl(value) {
    try {
      const u = new URL(value, window.location.href);
      if (u.hostname !== 'cdn.poipiku.com') return false;
      return u.searchParams.has('Expires') ||
             u.searchParams.has('Signature') ||
             u.searchParams.has('Key-Pair-Id') ||
             u.searchParams.has('Policy');
    } catch (_) {
      return false;
    }
  }

  function poipikuPickSignedUrl(html, thumbUrl) {
    if (!html) return null;

    // POIPIKU штатно отдаёт full-size изображение в
    // .DetailIllustItemImage. Наличие Signature в URL НЕ является
    // обязательным: query может добавляться/обрабатываться самим CDN.
    const doc = new DOMParser().parseFromString(String(html), 'text/html');

    const normalize = (value) => {
      try {
        const u = new URL(String(value || ''), window.location.href);
        if (u.hostname !== 'cdn.poipiku.com') return null;
        return u;
      } catch (_) {
        return null;
      }
    };

    const fileName = (value) => {
      const u = normalize(value);
      return u ? (u.pathname.split('/').pop() || '') : '';
    };

    const stem = (value) => {
      const file = fileName(value);
      return file
        .replace(/_(?:360|480|640|720|1000|1200|1600|2400)\.jpg$/i, '')
        .replace(/\.[a-z0-9]+$/i, '')
        .toLowerCase();
    };

    const targetStem = stem(thumbUrl);
    const candidates = [];

    const push = (value, score = 0, fromDetail = false) => {
      const u = normalize(value);
      if (!u) return;

      const file = u.pathname.split('/').pop() || '';
      if (!/\.(?:jpe?g|png|gif|webp|avif)$/i.test(file)) return;

      // Не допускаем UI/emoji/preview-картинки как full-size result.
      if (/^(?:profile|default_user|logo|banner|apple-|poipiku_icon|warning)/i.test(file)) return;

      const candidateStem = stem(u.href);
      let finalScore = score;

      if (fromDetail) finalScore += 20000;
      if (targetStem && candidateStem === targetStem) finalScore += 5000;
      if (targetStem && candidateStem.startsWith(targetStem)) finalScore += 2500;

      // Preview *_360.jpg / *_640.jpg должен проигрывать оригиналу.
      if (/_\d+\.jpg$/i.test(file)) finalScore -= 15000;

      if (
        u.searchParams.has('Expires') ||
        u.searchParams.has('Signature') ||
        u.searchParams.has('Key-Pair-Id') ||
        u.searchParams.has('Policy')
      ) {
        finalScore += 1000;
      }

      candidates.push({ url: u.href, score: finalScore });
    };

    // ИСТОЧНИК №1: штатный полноразмерный элемент POIPIKU.
    doc.querySelectorAll(
      '.DetailIllustItemImage[src], ' +
      '.DetailIllustItemImage[data-src], ' +
      'img.DetailIllustItemImage'
    ).forEach(img => {
      push(
        img.getAttribute('src') ||
        img.getAttribute('data-src') ||
        img.getAttribute('data-original') ||
        '',
        1000,
        true
      );
    });

    // ИСТОЧНИК №2: полноразмерный img из detail/expand.
    doc.querySelectorAll(
      '.IllustItemExpand img[src], ' +
      '.IllustItemThubExpand img[src], ' +
      '[class*="DetailIllust"] img[src]'
    ).forEach(img => {
      push(img.getAttribute('src') || '', 500, true);
    });

    // ИСТОЧНИК №3: fallback — CDN images из ответа, но только
    // если это НЕ preview и совпадает по имени с исходным asset.
    doc.querySelectorAll('img[src], img[data-src]').forEach(img => {
      const value =
        img.getAttribute('src') ||
        img.getAttribute('data-src') ||
        img.getAttribute('data-original') ||
        '';
      push(value, 0, false);
    });

    // Также ловим URL, если POIPIKU вернул его не в атрибуте img.
    const htmlText = String(html);
    const urlRe = /(?:https?:)?\/\/cdn\.poipiku\.com\/[^"'\\<>\s]+/gi;
    let match;
    while ((match = urlRe.exec(htmlText))) {
      push(
        match[0]
          .replace(/\\u0026/g, '&')
          .replace(/&amp;/g, '&'),
        0,
        false
      );
    }

    if (!candidates.length) return null;

    candidates.sort((a, b) => b.score - a.score);

    // Запрещаем вернуть явно preview даже если он единственный.
    const original = candidates.find(item => {
      const file = fileName(item.url);
      return !/_\d+\.jpg$/i.test(file);
    });

    return original?.url || null;
  }

  async function poipikuAjaxJson(path, data) {
    const body = new URLSearchParams();
    for (const [key, value] of Object.entries(data || {})) {
      body.set(key, String(value ?? ''));
    }

    const response = await fetch(path, {
      method: 'POST',
      credentials: 'same-origin',
      cache: 'no-store',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: body.toString()
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    if (!text) throw new Error('empty response');

    try {
      return JSON.parse(text);
    } catch (_) {
      return null;
    }
  }

  async function poipikuResolveSignedOriginal(element, thumbUrl) {
    if (!isPoipiku || !element) return null;
    if (poipikuIsSignedUrl(thumbUrl)) return thumbUrl;

    const ids = poipikuExtractIds(element);
    if (!ids) return null;

    const cacheKey = `${ids.userId}:${ids.postId}`;
    if (poipikuSignedCache.has(cacheKey)) return poipikuSignedCache.get(cacheKey);
    if (poipikuSignedPending.has(cacheKey)) return poipikuSignedPending.get(cacheKey);

    const promise = (async () => {
      try {
        const data = await poipikuAjaxJson('/f/ShowIllustDetailF.jsp', {
          ID: ids.userId,
          TD: ids.postId,
          AD: '-1',
          PAS: ''
        });
        const signed = poipikuPickSignedUrl(String(data?.html || ''), thumbUrl);
        if (signed) return signed;
      } catch (_) {}

      try {
        const data = await poipikuAjaxJson('/f/ShowAppendFileF.jsp', {
          UID: ids.userId,
          IID: ids.postId,
          PAS: '',
          MD: '0',
          TWF: '-1'
        });
        const signed = poipikuPickSignedUrl(String(data?.html || ''), thumbUrl);
        if (signed) return signed;
      } catch (_) {}

      return null;
    })().then((signed) => {
      if (signed) poipikuSignedCache.set(cacheKey, signed);
      return signed;
    }).finally(() => {
      poipikuSignedPending.delete(cacheKey);
    });

    poipikuSignedPending.set(cacheKey, promise);
    return promise;
  }

  function poipikuRememberElement(key, element) {
    if (isPoipiku && key && element) poipikuElementByKey.set(key, element);
  }

  async function poipikuPrepareSignedDownloadListLegacy(list) {
    if (!isPoipiku || !Array.isArray(list)) return list;

    const prepared = [];
    for (const item of list) {
      let signed = poipikuIsSignedUrl(item?.url) ? item.url : null;

      if (!signed) {
        const pending = poipikuSignedPending.get(item.key);
        if (pending) {
          try { signed = await pending; } catch (_) {}
        }
      }

      if (!signed) {
        const element = poipikuElementByKey.get(item.key);
        if (element) {
          try {
            signed = await poipikuResolveSignedOriginal(
              element,
              item.previewUrl || item.url
            );
          } catch (_) {}
        }
      }

      // Для POIPIKU запрещаем fallback на thumbnail:
      // если оригинал не найден, этот элемент не передаём в downloader.
      // Иначе CDN возвращает XML для guessed original.
      if (!signed) continue;

      prepared.push({
        ...item,
        url: signed
      });
    }
    return prepared;
  }




  // [poipiku-fullscreen-original-v1]
  // POIPIKU: фактический оригинал выдаётся после открытия полноэкранного
  // просмотра. Мы вызываем тот же click/showIllustDetail и берём URL
  // уже открытого full-size изображения.
  const poipikuFullscreenPending = new Map();

  function poipikuGetThumbAnchor(element) {
    if (!element) return null;
    return element.closest?.('.IllustItemThumb, .IllustThumbImg') ||
           element.querySelector?.('.IllustItemThumb, .IllustThumbImg') ||
           null;
  }

  function poipikuGetFullNameStem(url) {
    try {
      const u = new URL(String(url || ''), window.location.href);
      const file = (u.pathname.split('/').pop() || '').toLowerCase();
      return file.replace(/_(?:360|480|640|720|1000|1200|1600|2400)\.jpg$/i, '');
    } catch (_) {
      return '';
    }
  }

  function poipikuIsCdnImage(url) {
    try {
      const u = new URL(String(url || ''), window.location.href);
      if (u.hostname !== 'cdn.poipiku.com') return false;
      return /\.(?:jpe?g|png|gif|webp|avif)$/i.test(u.pathname);
    } catch (_) {
      return false;
    }
  }

  function poipikuIsUiImage(img) {
    if (!img) return true;
    const cls = String(img.className || '');
    const alt = String(img.alt || '');
    const src = String(img.currentSrc || img.src || img.getAttribute?.('src') || '');
    if (/Twemoji|avatar|profile|emoji|icon|logo|banner|apple-touch|HeaderImg/i.test(cls + ' ' + alt + ' ' + src)) return true;
    return false;
  }

  function poipikuGetCandidateImages(root, thumbUrl) {
    const targetStem = poipikuGetFullNameStem(thumbUrl);
    const source = root || document;
    const result = [];

    for (const img of Array.from(source.querySelectorAll?.('img[src], img[data-src]') || [])) {
      if (poipikuIsUiImage(img)) continue;

      const url = img.currentSrc || img.src || img.getAttribute('data-src') || '';
      if (!poipikuIsCdnImage(url)) continue;

      let score = 0;
      const file = (() => {
        try { return (new URL(url, window.location.href).pathname.split('/').pop() || '').toLowerCase(); }
        catch (_) { return ''; }
      })();
      const stem = file.replace(/\.[a-z0-9]+$/i, '');

      // В первую очередь берём тот же asset, который соответствует preview.
      if (targetStem && stem === targetStem) score += 1000;
      if (targetStem && stem.startsWith(targetStem)) score += 500;

      // Полноэкранная картинка обычно имеет naturalWidth/Height заметно больше
      // превью. Но это только дополнительный признак, не обязательный.
      const w = Number(img.naturalWidth || 0);
      const h = Number(img.naturalHeight || 0);
      if (w >= 1000 || h >= 1000) score += 250;
      if (w >= 1800 || h >= 1800) score += 100;

      // Signed CDN URL — самый надёжный признак, что это реально выданный
      // сервером full-size ресурс.
      try {
        const u = new URL(url, window.location.href);
        if (u.searchParams.has('Expires') || u.searchParams.has('Signature') ||
            u.searchParams.has('Key-Pair-Id') || u.searchParams.has('Policy')) {
          score += 600;
        }
      } catch (_) {}

      result.push({ img, url, score, w, h });
    }

    result.sort((a, b) => b.score - a.score);
    return result;
  }

  function poipikuWaitForFullscreenImageLegacy(element, thumbUrl, beforeUrls, timeoutMs = 7000) {
    return new Promise(resolve => {
      const started = Date.now();
      let observer = null;
      let timer = null;
      let settled = false;

      const finish = value => {
        if (settled) return;
        settled = true;
        try { observer?.disconnect(); } catch (_) {}
        if (timer) clearInterval(timer);
        resolve(value || null);
      };

      const find = () => {
        const root = element?.closest?.('.IllustItem') || null;

        // Сначала ищем внутри места, которое POIPIKU резервирует под раскрытие.
        const preferredRoots = [
          root?.querySelector?.('.IllustItemExpand'),
          root?.querySelector?.('.IllustItemThubExpand'),
          document.querySelector?.('.IllustItemExpand'),
          document.querySelector?.('.IllustItemThubExpand')
        ].filter(Boolean);

        const candidates = [];
        for (const preferred of preferredRoots) {
          for (const candidate of poipikuGetCandidateImages(preferred, thumbUrl)) {
            candidate.score += 2000;
            candidates.push(candidate);
          }
        }

        // Затем весь документ — на случай, если fullscreen viewer создан
        // в body вне исходной карточки.
        for (const candidate of poipikuGetCandidateImages(document, thumbUrl)) {
          const currentUrl = String(candidate.url || '');
          if (beforeUrls.has(currentUrl)) candidate.score -= 250;
          candidates.push(candidate);
        }

        candidates.sort((a, b) => b.score - a.score);
        const best = candidates.find(candidate => {
          const value = String(candidate.url || '');
          return value && poipikuIsCdnImage(value);
        });

        if (best) return best.url;

        if (Date.now() - started >= timeoutMs) return null;
        return undefined;
      };

      const initial = find();
      if (initial) return finish(initial);

      observer = new MutationObserver(() => {
        const value = find();
        if (value) finish(value);
      });

      try {
        observer.observe(document.documentElement || document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['src', 'style', 'class']
        });
      } catch (_) {}

      timer = setInterval(() => {
        const value = find();
        if (value) finish(value);
        else if (Date.now() - started >= timeoutMs) finish(null);
      }, 100);
    });
  }


  // [poipiku-fullscreen-original-v2]
  // Fullscreen viewer POIPIKU: сначала .DetailIllustItemImage,
  // затем расширенный поиск только среди новых/крупных ресурсов.
  function poipikuFindFullscreenCandidatesV2(thumbUrl, beforeUrls) {
    const targetStem = poipikuGetFullNameStem(thumbUrl);
    const result = [];

    const add = (img, baseScore = 0) => {
      if (!img) return;

      const url =
        img.currentSrc ||
        img.src ||
        img.getAttribute?.('data-src') ||
        img.getAttribute?.('data-original') ||
        '';

      if (!poipikuIsCdnImage(url)) return;

      try {
        const u = new URL(url, window.location.href);
        const file = (u.pathname.split('/').pop() || '').toLowerCase();
        const stem = file.replace(/\.[a-z0-9]+$/i, '');
        const cls = String(img.className || '');
        let score = baseScore;

        if (/\bDetailIllustItemImage\b/i.test(cls)) score += 20000;

        if (img.closest?.(
          '.IllustItemExpand, .IllustItemThubExpand, ' +
          '[role="dialog"], [aria-modal="true"], ' +
          '[id*="IllustDetail"], [class*="IllustDetail"]'
        )) {
          score += 7000;
        }

        const w = Number(img.naturalWidth || 0);
        const h = Number(img.naturalHeight || 0);
        if (w >= 1000 || h >= 1000) score += 2000;
        if (w >= 1800 || h >= 1800) score += 3000;

        if (
          u.searchParams.has('Expires') ||
          u.searchParams.has('Signature') ||
          u.searchParams.has('Key-Pair-Id') ||
          u.searchParams.has('Policy')
        ) {
          score += 3000;
        }

        if (targetStem) {
          const target = targetStem.replace(/\.[a-z0-9]+$/i, '');
          if (stem === target) score += 1500;
          else if (stem.startsWith(target)) score += 800;
        }

        if (beforeUrls?.has(url) && !/\bDetailIllustItemImage\b/i.test(cls)) {
          score -= 20000;
        }

        result.push({ img, url, score, w, h, cls });
      } catch (_) {}
    };

    // Самый важный селектор: именно full-size image из ответа POIPIKU.
    document.querySelectorAll(
      '.DetailIllustItemImage[src], ' +
      '.DetailIllustItemImage[data-src], ' +
      '.IllustItemExpand img, ' +
      '.IllustItemThubExpand img'
    ).forEach(img => add(img, 12000));

    // Если viewer вынесен в body/dialog.
    document.querySelectorAll(
      '[role="dialog"] img, ' +
      '[aria-modal="true"] img, ' +
      '[id*="IllustDetail"] img, ' +
      '[class*="IllustDetail"] img'
    ).forEach(img => add(img, 9000));

    // Последний fallback — весь документ.
    for (const img of Array.from(document.images || [])) {
      add(img, 0);
    }

    result.sort((a, b) => b.score - a.score);
    return result;
  }

  function poipikuWaitForFullscreenImageV2(
    element,
    thumbUrl,
    beforeUrls,
    timeoutMs = 9000
  ) {
    return new Promise(resolve => {
      const started = Date.now();
      let observer = null;
      let timer = null;
      let settled = false;

      const finish = value => {
        if (settled) return;
        settled = true;
        try { observer?.disconnect(); } catch (_) {}
        if (timer) clearInterval(timer);
        resolve(value || null);
      };

      const find = () => {
        const candidates = poipikuFindFullscreenCandidatesV2(
          thumbUrl,
          beforeUrls
        );

        const best = candidates.find(candidate => {
          const isDetail = /\bDetailIllustItemImage\b/i.test(candidate.cls);
          const isNew = !beforeUrls.has(candidate.url);
          const isLarge = candidate.w >= 1000 || candidate.h >= 1000;
          return isDetail || isNew || isLarge;
        });

        if (best) return best.url;
        if (Date.now() - started >= timeoutMs) return null;
        return undefined;
      };

      // Даём POIPIKU время выполнить AJAX и создать viewer.
      setTimeout(() => {
        const initial = find();
        if (initial) {
          finish(initial);
          return;
        }

        try {
          observer = new MutationObserver(() => {
            const value = find();
            if (value) finish(value);
          });

          observer.observe(
            document.documentElement || document.body,
            {
              childList: true,
              subtree: true,
              attributes: true,
              attributeFilter: [
                'src',
                'data-src',
                'data-original',
                'class',
                'style'
              ]
            }
          );
        } catch (_) {}

        timer = setInterval(() => {
          const value = find();
          if (value) finish(value);
          else if (Date.now() - started >= timeoutMs) finish(null);
        }, 100);
      }, 300);
    });
  }

  async function poipikuFetchFullscreenOriginalV2(element) {
    try {
      const anchor = poipikuGetThumbAnchor(element);
      if (!anchor) return null;

      const onclick = anchor.getAttribute('onclick') || '';
      const match = onclick.match(
        /showIllustDetail\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+)\s*\)/i
      );
      if (!match) return null;

      const data = await poipikuAjaxJson(
        '/f/ShowIllustDetailF.jsp',
        {
          ID: match[1],
          TD: match[2],
          AD: match[3],
          PAS: ''
        }
      );

      const html = String(data?.html || '');
      if (!html) return null;

      const doc = new DOMParser().parseFromString(html, 'text/html');
      const images = Array.from(
        doc.querySelectorAll(
          '.DetailIllustItemImage[src], ' +
          '.DetailIllustItemImage[data-src], ' +
          'img.DetailIllustItemImage'
        )
      );

      for (const img of images) {
        const src =
          img.getAttribute('src') ||
          img.getAttribute('data-src') ||
          '';
        if (src && poipikuIsCdnImage(src)) {
          return new URL(src, window.location.href).href;
        }
      }
    } catch (_) {}
    return null;
  }

  async function poipikuOpenFullscreenAndGetOriginal(element, thumbUrl) {
    if (!isPoipiku || !element || !thumbUrl) return null;

    const anchor = poipikuGetThumbAnchor(element);
    if (!anchor) return null;

    const existing = poipikuFullscreenPending.get(anchor);
    if (existing) return existing;

    const promise = (async () => {
      const beforeUrls = new Set(
        Array.from(document.images || [])
          .map(img => img.currentSrc || img.src || '')
          .filter(Boolean)
      );

      // Реально выполняем то же действие, которое указано в HTML:
      // showIllustDetail(UID, IID, -1). Сначала пытаемся вызвать функцию
      // сайта напрямую, иначе обычный click() по ссылке.
      let invoked = false;
      try {
        const onclick = anchor.getAttribute('onclick') || '';
        const m = onclick.match(/showIllustDetail\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+)\s*\)/i);
        if (m && typeof window.showIllustDetail === 'function') {
          window.showIllustDetail(
            Number(m[1]),
            Number(m[2]),
            Number(m[3])
          );
          invoked = true;
        }
      } catch (_) {}

      if (!invoked) {
        try {
          anchor.click();
          invoked = true;
        } catch (_) {}
      }

      if (!invoked) return null;

      const original = await poipikuWaitForFullscreenImageV2(
        element,
        thumbUrl,
        beforeUrls
      );

      // Закрываем раскрытие клавишей Escape, как обычный просмотр.
      try {
        document.dispatchEvent(new KeyboardEvent('keydown', {
          key: 'Escape',
          code: 'Escape',
          keyCode: 27,
          which: 27,
          bubbles: true,
          cancelable: true
        }));
      } catch (_) {}

      return original;
    })().finally(() => {
      poipikuFullscreenPending.delete(anchor);
    });

    poipikuFullscreenPending.set(anchor, promise);
    return promise;
  }

  async function poipikuPrepareFullscreenDownloadListLegacy(list) {
    if (!isPoipiku || !Array.isArray(list)) return list;

    const prepared = [];

    for (const item of list) {
      let fullUrl = null;
      try {
        const element = poipikuElementByKey.get(item.key);
        if (element) {
          fullUrl = await poipikuOpenFullscreenAndGetOriginal(
            element,
            item.previewUrl || item.url || ''
          );
        }
      } catch (_) {}

      // Если fullscreen не удалось открыть, используем прежнюю signed-логика.
      if (!fullUrl) {
        try {
          const legacy = await poipikuPrepareSignedDownloadListLegacy([item]);
          fullUrl = legacy?.[0]?.url || null;
        } catch (_) {}
      }

      prepared.push({
        ...item,
        url: fullUrl || item.previewUrl || item.url || ''
      });
    }

    return prepared;
  }



  // [poipiku-direct-original-v7]
  // POIPIKU: direct original resolver, без открытия fullscreen.
  const poipikuDirectPending = new Map();
  const poipikuDirectCache = new Map();

  function poipikuDirectGetIds(element) {
    const root = element?.closest?.('.IllustItem') || element || null;
    const anchor =
      element?.closest?.('.IllustItemThumb, .IllustThumbImg') ||
      root?.querySelector?.('.IllustItemThumb, .IllustThumbImg') ||
      null;

    const onclick =
      anchor?.getAttribute?.('onclick') ||
      root?.querySelector?.(
        '.IllustItemThumb[onclick], .IllustThumbImg[onclick]'
      )?.getAttribute?.('onclick') ||
      '';

    const match = String(onclick).match(
      /showIllustDetail\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+)\s*\)/i
    );

    if (match) {
      return { userId: match[1], postId: match[2], ad: match[3] };
    }

    const href = anchor?.getAttribute?.('href') || '';
    const h = String(href).match(
      /\/(\d+)\/(\d+)\.html(?:$|[?#])/i
    );

    return h
      ? { userId: h[1], postId: h[2], ad: '-1' }
      : null;
  }

  function poipikuDirectAbsolute(value) {
    try {
      const u = new URL(String(value || ''), window.location.href);
      if (u.hostname !== 'cdn.poipiku.com') return '';
      const file = u.pathname.split('/').pop() || '';
      if (!/\.(?:jpe?g|png|gif|webp|avif)$/i.test(file)) return '';
      return u.href;
    } catch (_) {
      return '';
    }
  }

  function poipikuDirectIsThumbnail(value) {
    try {
      const u = new URL(String(value || ''), window.location.href);
      const file = u.pathname.split('/').pop() || '';
      return /_(?:360|480|640|720|1000|1200|1600|2400)\.jpg$/i.test(file);
    } catch (_) {
      return false;
    }
  }

  function poipikuDirectPickOriginal(html) {
    if (!html) return '';

    const doc = new DOMParser().parseFromString(String(html), 'text/html');

    // Для авторизованного пользователя POIPIKU возвращает оригиналы
    // через .DetailIllustItemImage.
    for (const img of Array.from(
      doc.querySelectorAll(
        '.DetailIllustItemImage[src], .DetailIllustItemImage[data-src]'
      )
    )) {
      const raw =
        img.getAttribute?.('src') ||
        img.getAttribute?.('data-src') ||
        img.getAttribute?.('data-original') ||
        '';

      const url = poipikuDirectAbsolute(raw);
      if (url && !poipikuDirectIsThumbnail(url)) return url;
    }

    // Fallback: image из detail response, но не emoji/avatar/UI
    // и не *_360.jpg / *_640.jpg thumbnail.
    for (const img of Array.from(
      doc.querySelectorAll('img[src], img[data-src]')
    )) {
      const cls = String(img.className || '');
      const alt = String(img.alt || '');

      if (/Twemoji|avatar|profile|emoji|icon|logo|banner|HeaderImg/i.test(`${cls} ${alt}`)) {
        continue;
      }

      const raw =
        img.getAttribute?.('src') ||
        img.getAttribute?.('data-src') ||
        img.getAttribute?.('data-original') ||
        '';

      const url = poipikuDirectAbsolute(raw);
      if (url && !poipikuDirectIsThumbnail(url)) return url;
    }

    return '';
  }

  async function poipikuDirectAjax(values) {
    const body = new URLSearchParams();

    for (const [key, value] of Object.entries(values || {})) {
      body.set(key, String(value ?? ''));
    }

    const response = await fetch('/f/ShowIllustDetailF.jsp', {
      method: 'POST',
      credentials: 'same-origin',
      cache: 'no-store',
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: body.toString()
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const text = await response.text();
    if (!text) throw new Error('empty response');

    try {
      return JSON.parse(text);
    } catch (_) {
      return null;
    }
  }

  async function poipikuDirectGetOriginal(element) {
    if (!isPoipiku) return '';

    const ids = poipikuDirectGetIds(element);
    if (!ids) return '';

    const cacheKey = `${ids.userId}:${ids.postId}`;

    if (poipikuDirectCache.has(cacheKey)) {
      return poipikuDirectCache.get(cacheKey);
    }

    if (poipikuDirectPending.has(cacheKey)) {
      return poipikuDirectPending.get(cacheKey);
    }

    const promise = (async () => {
      try {
        const payload = await poipikuDirectAjax({
          ID: ids.userId,
          TD: ids.postId,
          AD: ids.ad || '-1',
          PAS: ''
        });

        const original = poipikuDirectPickOriginal(payload?.html);
        if (original) return original;

        // Запасной серверный endpoint для append-файлов.
        try {
          const append = await poipikuDirectAjax({
            UID: ids.userId,
            IID: ids.postId,
            PAS: '',
            MD: '0',
            TWF: '-1'
          });

          const appendOriginal = poipikuDirectPickOriginal(append?.html);
          if (appendOriginal) return appendOriginal;
        } catch (_) {}
      } catch (_) {}

      return '';
    })()
      .then(url => {
        if (url) poipikuDirectCache.set(cacheKey, url);
        return url;
      })
      .finally(() => {
        poipikuDirectPending.delete(cacheKey);
      });

    poipikuDirectPending.set(cacheKey, promise);
    return promise;
  }

  async function poipikuPrepareDownloadListDirect(list) {
    if (!isPoipiku || !Array.isArray(list)) return list;

    const prepared = [];

    // Последовательно, чтобы группа из 20+ картинок не создавала
    // одновременно десятки AJAX-запросов к POIPIKU.
    for (const item of list) {
      const element = poipikuElementByKey.get(item.key);
      if (!element) continue;

      let original = '';
      try {
        original = await poipikuDirectGetOriginal(element);
      } catch (_) {}

      // Ни preview, ни guessed original здесь не используем.
      // Иначе CDN может вернуть XML.
      if (!original) continue;

      prepared.push({ ...item, url: original });
    }

    return prepared;
  }

  async function poipikuPrepareDownloadList(list) {
    if (!isPoipiku || !Array.isArray(list)) return list;
    return await poipikuPrepareDownloadListDirect(list);
  }



  // [ehentai-support-v1]
  // E-Hentai gallery: the visible #gdt tiles are CSS background sprites.
  // We resolve each /s/ viewer page and extract its original-download URL.
  const ehentaiOriginalCache = new Map();
  const ehentaiOriginalPending = new Map();

  function ehentaiIsGalleryPage() {
    return /^\/g\/\d+\/[a-f0-9]{10}\/?$/i.test(window.location.pathname);
  }

  function ehentaiIsImagePage() {
    return /^\/s\/[a-f0-9]{8,12}\/\d+-\d+(?:\/\d+-\d+)?\/?$/i.test(window.location.pathname);
  }

  function ehentaiViewerKey(viewerUrl) {
    try {
      const u = new URL(viewerUrl, window.location.href);
      const m = u.pathname.match(/\/s\/[a-f0-9]{8,12}\/(\d+)-(\d+)/i);
      if (m) return `eh_${m[1]}_${m[2]}`;
    } catch (_) {}
    return '';
  }

  function ehentaiAbsolute(value, baseUrl = window.location.href) {
    try {
      const u = new URL(String(value || ''), baseUrl);
      if (!/^https?:$/i.test(u.protocol)) return '';
      return u.href;
    } catch (_) {
      return '';
    }
  }

  function ehentaiPreviewFromTile(anchor) {
    const box = anchor?.querySelector?.('div[style*="background"], div') || anchor;
    const style = box?.getAttribute?.('style') || '';
    const m = style.match(/background(?:-image)?\s*:[^;]*url\(\s*(['"]?)(.*?)\1\s*\)/i);
    if (!m?.[2]) return '';
    return ehentaiAbsolute(m[2], window.location.href);
  }

  function ehentaiExtractOriginalFromDocument(doc, baseUrl) {
    if (!doc) return '';

    const anchors = Array.from(
      doc.querySelectorAll('#i6 a[href], #i3 a[href], a[href*="/fullimg/"], a[href*="/fullimg.php"]')
    );

    const candidate =
      anchors.find(a => /\/fullimg(?:\/|\.php)/i.test(a.getAttribute('href') || a.href || '')) ||
      anchors.find(a => /download\s+original/i.test((a.textContent || '').trim()));

    if (!candidate) return '';

    const href = ehentaiAbsolute(
      candidate.getAttribute('href') || candidate.href,
      baseUrl
    );

    return href && /\/fullimg(?:\/|\.php)/i.test(href) ? href : '';
  }

  function ehentaiExtractDisplayFromDocument(doc, baseUrl) {
    const img = doc?.querySelector?.('#img');
    if (!img) return '';
    return ehentaiAbsolute(
      img.getAttribute('src') || img.currentSrc || img.getAttribute('data-src') || '',
      baseUrl
    );
  }

  function ehentaiExtractFilename(url, doc) {
    try {
      const u = new URL(String(url || ''), window.location.href);
      let file = decodeURIComponent(u.pathname.split('/').pop() || '');

      if (!file || /^fullimg(?:\.php)?$/i.test(file) || !/\.[a-z0-9]{2,6}$/i.test(file)) {
        const img = doc?.querySelector?.('#img');
        const src = img?.getAttribute?.('src') || '';
        if (src) {
          const su = new URL(src, window.location.href);
          const sf = decodeURIComponent(su.pathname.split('/').pop() || '');
          if (/\.[a-z0-9]{2,6}$/i.test(sf)) file = sf;
        }
      }

      return file.replace(/[\\/:*?"<>|]/g, '_').trim();
    } catch (_) {
      return '';
    }
  }

  async function ehentaiFetchViewer(viewerUrl) {
    if (!viewerUrl) return null;
    const clean = String(viewerUrl);

    if (ehentaiOriginalCache.has(clean)) return ehentaiOriginalCache.get(clean);
    if (ehentaiOriginalPending.has(clean)) return ehentaiOriginalPending.get(clean);

    const promise = (async () => {
      try {
        const response = await fetch(clean, {
          method: 'GET',
          credentials: 'include',
          cache: 'no-store',
          headers: { 'Accept': 'text/html,application/xhtml+xml' }
        });
        if (!response.ok) return null;

        const html = await response.text();
        if (!html) return null;

        const doc = new DOMParser().parseFromString(html, 'text/html');
        const originalUrl = ehentaiExtractOriginalFromDocument(doc, clean);
        const displayUrl = ehentaiExtractDisplayFromDocument(doc, clean);
        const fileName = ehentaiExtractFilename(originalUrl || displayUrl, doc);

        if (!originalUrl && !displayUrl) return null;

        return {
          viewerUrl: clean,
          originalUrl,
          displayUrl,
          fileName
        };
      } catch (_) {
        return null;
      }
    })().finally(() => {
      ehentaiOriginalPending.delete(clean);
    });

    ehentaiOriginalPending.set(clean, promise);
    return promise;
  }

  async function ehentaiPrepareDownloadListLegacy(list) {
    if (!isEHentai || !Array.isArray(list)) return list;

    const prepared = [];
    for (const item of list) {
      const viewerUrl = item.ehViewerUrl || item.url || '';
      const resolved = await ehentaiFetchViewer(viewerUrl);
      if (!resolved) continue;

      const finalUrl = resolved.originalUrl || '';
      if (!finalUrl) continue;

      prepared.push({
        ...item,
        url: finalUrl,
        previewUrl: resolved.displayUrl || item.previewUrl || '',
        fileName: item.fileName || resolved.fileName || ''
      });
    }
    return prepared;
  }


  // [ehentai-background-original-v2]
  // Не загружаем /s/ страницу из content script. Она только locator.
  async function ehentaiPrepareDownloadList(list) {
    if (!isEHentai || !Array.isArray(list)) return list;

    return list.map(item => ({
      ...item,
      url: item.ehViewerUrl || item.url || '',
      ehViewerUrl: item.ehViewerUrl || item.url || ''
    })).filter(item => !!item.url);
  }

  async function scanEHentai() {
    if (!isEHentai || !isContextValid()) return;

    const useHistory = historyCheckbox.checked;
    const limit = parseInt(limitInput.value, 10) || 0;
    let added = 0;

    // Single image viewer page.
    if (ehentaiIsImagePage()) {
      const img = document.querySelector('#img');
      const originalUrl = ehentaiExtractOriginalFromDocument(document, window.location.href);
      const displayUrl = ehentaiExtractDisplayFromDocument(document, window.location.href);
      const viewerUrl = window.location.href.split('#')[0];
      const key = ehentaiViewerKey(viewerUrl) || getImageKey(originalUrl || displayUrl);

      if (img && key && (originalUrl || displayUrl)) {
        const bestUrl = originalUrl || displayUrl;
        const fileName = ehentaiExtractFilename(bestUrl, document);

        attachCheckbox(img, key, bestUrl, displayUrl || bestUrl);

        if (
          !state.inProgressKeys.has(key) &&
          !state.ignoredKeys.has(key) &&
          (!useHistory || !state.downloadedHistory.has(key)) &&
          !state.readyToDownload.has(key) &&
          !state.clearedNewKeys.has(key)
        ) {
          state.readyToDownload.set(key, {
            url: bestUrl,
            previewUrl: displayUrl || bestUrl,
            isVideo: false,
            fileName,
            ehViewerUrl: viewerUrl
          });
          added++;
        }
      }

      if (added) {
        persistQueue();
        updateUI();
      }
      return;
    }

    // Gallery page: each #gdt tile links to one viewer page.
    if (!ehentaiIsGalleryPage()) return;

    const links = Array.from(document.querySelectorAll('#gdt a[href*="/s/"]'));

    for (const anchor of links) {
      if (limit > 0 && state.readyToDownload.size >= limit) break;

      const viewerUrl = ehentaiAbsolute(
        anchor.getAttribute('href') || anchor.href,
        window.location.href
      );
      if (!viewerUrl) continue;

      const key = ehentaiViewerKey(viewerUrl);
      if (!key) continue;

      const previewUrl = ehentaiPreviewFromTile(anchor);
      const visual = anchor.querySelector('div') || anchor;

      // The visible tile is a CSS sprite. The viewer URL is only a locator.
      attachCheckbox(visual, key, viewerUrl, previewUrl);

      if (
        state.inProgressKeys.has(key) ||
        state.ignoredKeys.has(key) ||
        (useHistory && state.downloadedHistory.has(key)) ||
        state.readyToDownload.has(key) ||
        state.clearedNewKeys.has(key)
      ) {
        continue;
      }

      // Не запрашиваем viewer-страницы при сканировании галереи.
      // Оригиналы разрешаются только при реальном Download/ZIP.
      const title = visual.getAttribute('title') || '';
      const titleMatch = title.match(/^Page\s+\d+:\s*(.+)$/i);
      const fileName = titleMatch ? titleMatch[1].trim() : '';

      state.readyToDownload.set(key, {
        // Viewer URL здесь только locator. На этапе Download/ZIP он
        // будет заменён на настоящий /fullimg/ оригинал.
        url: viewerUrl,
        previewUrl: previewUrl || '',
        isVideo: false,
        fileName,
        ehViewerUrl: viewerUrl
      });
      added++;
      updateUI();
    }

    if (added) {
      persistQueue();
      updateUI();
    }
  }



// [uas-media-content-v1.2]
// [uas-media-content-v1]
function uasContentNormalizeCandidates(item = {}) {
  const list = [];
  const seen = new Set();
  const add = (value, priority = 0, kind = 'candidate') => {
    const raw = typeof value === 'string' ? value : value?.url;
    if (!raw) return;
    let url = '';
    try { url = new URL(String(raw), window.location.href).href; }
    catch (_) { url = String(raw); }
    if (!url || seen.has(url)) return;
    seen.add(url);
    const obj = typeof value === 'object' ? value : {};
    list.push({
      url,
      priority: Number.isFinite(Number(obj.priority ?? priority)) ? Number(obj.priority ?? priority) : 0,
      kind: String(obj.kind || kind),
      referer: String(obj.referer || ''),
      headers: obj.headers && typeof obj.headers === 'object' ? obj.headers : undefined
    });
  };
  if (Array.isArray(item.candidates)) item.candidates.forEach(c => add(c, c?.priority ?? 0, c?.kind || 'candidate'));
  add(item.url, 100, 'primary');
  add(item.previewUrl, 10, 'preview');
  list.sort((a, b) => b.priority - a.priority);
  return list;
}

function uasContentAttachMediaInfo(item = {}, key = '') {
  const kind = String(item.kind || (item.isAudio ? 'audio' : (item.isVideo ? 'video' : 'image')));
  return {
    version: '1.4.0',
    key: String(key || item.key || ''),
    site: String(siteKey || 'general'),
    pageUrl: String(item.pageUrl || window.location.href),
    sourceUrl: String(item.sourceUrl || item.url || ''),
    candidates: uasContentNormalizeCandidates(item),
    fileName: String(item.fileName || ''),
    kind,
    isVideo: !!item.isVideo,
    isAudio: !!item.isAudio,
    metadata: item.metadata && typeof item.metadata === 'object' ? item.metadata : {}
  };
}

function buildWallhavenCandidates(id, extraUrl = '') {
  const clean = String(id || '').trim();
  if (!clean) return [];
  const prefix = clean.slice(0, 2);
  const result = [];
  const add = (url, priority, kind) => result.push({
    url, priority, kind, referer: 'https://wallhaven.cc/'
  });
  if (extraUrl) {
    const extra = String(extraUrl);
    const priority = /^https?:\/\/w\.wallhaven\.cc\//i.test(extra) && !/\bth\.wallhaven\.cc\b/i.test(extra) ? 120 : 30;
    add(extra, priority, 'page-source');
  }
  add(`https://w.wallhaven.cc/full/${prefix}/wallhaven-${clean}.jpg`, 110, 'derived-jpg');
  add(`https://w.wallhaven.cc/full/${prefix}/wallhaven-${clean}.png`, 105, 'derived-png');
  add(`https://w.wallhaven.cc/full/${prefix}/wallhaven-${clean}.gif`, 100, 'derived-gif');
  add(`https://w.wallhaven.cc/${prefix}/wallhaven-${clean}.jpg`, 95, 'api-path-style-jpg');
  add(`https://w.wallhaven.cc/${prefix}/wallhaven-${clean}.png`, 90, 'api-path-style-png');
  return uasContentNormalizeCandidates({ candidates: result });
}

function wallhavenIdFromUrl(url = '') {
  const raw = String(url || '');
  const m = raw.match(/(?:\/w\/|\/wallpaper\/)([A-Za-z0-9]+)/i)
    || raw.match(/wallhaven-([A-Za-z0-9]+)\.(?:jpe?g|png|gif|webp|avif)$/i);
  return m ? m[1] : '';
}

function queueWallhavenMedia(key, item) {
  if (!key || !item?.url) return 0;
  if (state.inProgressKeys.has(key) || state.ignoredKeys.has(key)) return 0;
  if (historyCheckbox.checked && state.downloadedHistory.has(key)) return 0;
  if (state.readyToDownload.has(key) || state.clearedNewKeys.has(key)) return 0;
  state.readyToDownload.set(key, item);
  return 1;
}

function scanWallhaven() {
  if (!isWallhaven || !isContextValid()) return;
  const limit = parseInt(limitInput.value, 10) || 0;
  let added = 0;

  const pathId = wallhavenIdFromUrl(window.location.pathname);
  if (pathId) {
    const image = document.querySelector(
      'img#wallpaper, img.wallpaper, .scrollbox img, img[data-wallpaper-id], img[src*="wallhaven-"], img[data-src*="wallhaven-"]'
    );
    const og = document.querySelector('meta[property="og:image"]')?.content || '';
    const raw = image
      ? String(image.currentSrc || image.src || image.getAttribute('data-src') || image.getAttribute('data-original') || '').trim()
      : '';
    const candidates = buildWallhavenCandidates(pathId, raw || og);
    const original = candidates[0]?.url || raw || og;
    if (original) {
      const key = `wh_${pathId}`;
      const item = {
        url: original,
        previewUrl: raw || og || original,
        candidates,
        pageUrl: window.location.href,
        sourceUrl: window.location.href,
        isVideo: false,
        kind: 'image',
        metadata: { wallhavenId: pathId, previewUrl: raw || og || '' }
      };
      if (image) attachCheckbox(image, key, original, raw || og || original);
      if (limit === 0 || state.readyToDownload.size < limit) added += queueWallhavenMedia(key, item);
    }
    if (added > 0) {
      persistQueue();
      updateUI();
    }
    return;
  }

  // Wallhaven catalog/search markup: figure > [img + a.preview] are siblings.
  const cards = Array.from(document.querySelectorAll(
    'figure.thumb[data-wallpaper-id], figure[data-wallpaper-id].thumb, li > figure.thumb'
  ));

  for (const card of cards) {
    if (limit > 0 && state.readyToDownload.size >= limit) break;
    const id = String(
      card.getAttribute('data-wallpaper-id') ||
      wallhavenIdFromUrl(card.querySelector('a.preview[href*="/w/"], a[href*="/wallpaper/"]')?.href || '') || ''
    ).trim();
    if (!id) continue;

    const image = card.querySelector('img.lazyload[data-src], img[data-src], img[data-original], img.lazyload, img');
    if (!image) continue;
    const raw = String(
      image.currentSrc || image.src || image.getAttribute('data-src') || image.getAttribute('data-original') || ''
    ).trim();
    if (!raw || /^(?:about:blank|data:)/i.test(raw)) continue;

    const previewLink = card.querySelector('a.preview[href], a[href*="/w/"], a[href*="/wallpaper/"]');
    const sourceUrl = previewLink?.href || `https://wallhaven.cc/w/${encodeURIComponent(id)}`;
    const candidates = buildWallhavenCandidates(id, raw);
    const original = candidates[0]?.url || raw;
    const key = `wh_${id}`;

    const resolution = card.querySelector('.wall-res, [class*="wall-res"], [class*="resolution"]')?.textContent?.trim() || '';
    const typeHint = card.querySelector('.png, .jpg, .jpeg, .gif, .webp, .avif')?.textContent?.trim() || '';
    const title = image.getAttribute('alt') || image.getAttribute('title') || card.getAttribute('title') || '';

    attachCheckbox(image, key, original, raw);
    added += queueWallhavenMedia(key, {
      url: original,
      previewUrl: raw,
      candidates,
      pageUrl: window.location.href,
      sourceUrl,
      isVideo: false,
      kind: 'image',
      metadata: { wallhavenId: id, resolution, formatHint: typeHint, title, previewUrl: raw }
    });
  }

  if (added > 0) {
    persistQueue();
    updateUI();
  }
}


function uasShowDiagnostics(result) {
  const old = document.getElementById('uas-diagnostics-overlay');
  if (old) old.remove();
  const overlay = document.createElement('div');
  overlay.id = 'uas-diagnostics-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,.58);display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;';
  const card = document.createElement('div');
  card.style.cssText = `max-width:min(980px,96vw);max-height:88vh;overflow:auto;background:${currentTheme.bg};color:#fff;border:1px solid rgba(255,255,255,.18);border-radius:12px;padding:14px 16px;box-shadow:0 18px 50px rgba(0,0,0,.5);font:12px/1.45 system-ui,sans-serif;`;
  const title = document.createElement('div');
  title.textContent = `${t('diagnostics')} · ${currentTheme.name}`;
  title.style.cssText = 'font-size:15px;font-weight:700;margin-bottom:10px;';
  const pre = document.createElement('pre');
  pre.style.cssText = 'white-space:pre-wrap;word-break:break-word;margin:0;background:rgba(0,0,0,.24);padding:10px;border-radius:8px;';
  const lines = [];
  lines.push(`Core: ${result?.core?.ok ? '✅ OK' : '❌ ERROR'} · v${result?.core?.version || '?'}`);
  lines.push(`Adapters: ${result?.core?.adapterCount ?? 0}`);
  lines.push(`Adapter: ${result?.adapter?.name || 'unknown'} (${result?.adapter?.id || 'n/a'})`);
  lines.push(`Features: retry=${result?.adapter?.retry ? '✅' : '❌'} · candidates=${result?.adapter?.candidateChain ? '✅' : '❌'} · validator=${result?.adapter?.validator ? '✅' : '❌'}`);
  if (result?.core?.historyQueue) lines.push(`History queue: queued=${result.core.historyQueue.queued} · active=${result.core.historyQueue.active} · completed=${result.core.historyQueue.completed} · failed=${result.core.historyQueue.failed}`);
  if (result?.core?.mediaIndex) lines.push(`Media index: queued=${result.core.mediaIndex.queued} · active=${result.core.mediaIndex.active ? 'yes' : 'no'} · completed=${result.core.mediaIndex.completed} · failed=${result.core.mediaIndex.failed}`);
  if (result?.adapterHealth) lines.push(`Adapter matrix: ${result.adapterHealth.healthy}/${result.adapterHealth.total} healthy · degraded=${result.adapterHealth.degraded}`);
  if (result?.recentStates?.length) lines.push(`States: ${result.recentStates.slice(-5).map(x => `${x.key}=${x.state}`).join(' · ')}`);
  if (result?.core?.modules) lines.push(`Modules: ${Object.entries(result.core.modules).map(([k,v]) => `${k}=${v === 'ok' ? '✅' : '❌'}`).join(' · ')}`);
  if (result?.error) lines.push(`Error: ${result.error}`);
  if (Array.isArray(result?.samples) && result.samples.length) {
    lines.push('');
    lines.push('Media probes:');
    for (const sample of result.samples) {
      lines.push(`  ${sample.key}: ${sample.candidates} candidates`);
      for (const r of sample.results || []) {
        lines.push(`    ${r.status === 'ok' ? '✅' : (r.status === 'skip' ? '⏭️' : '❌')} ${r.http || '-'} ${r.ext || '-'} ${r.type || '-'} ${r.detector || ''} ${r.reason || ''}`.trim());
        lines.push(`      ${r.url}`);
      }
    }
  } else {
    lines.push(t('noSamples'));
  }
  pre.textContent = lines.join('\n');
  const close = document.createElement('button');
  close.textContent = t('diagnosticsClose');
  close.style.cssText = `margin-top:10px;padding:6px 12px;border:0;border-radius:${currentTheme.btnRadius};background:${currentTheme.primary};color:#fff;cursor:pointer;`;
  close.addEventListener('click', () => overlay.remove());
  card.appendChild(title); card.appendChild(pre); card.appendChild(close);
  overlay.appendChild(card);
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}


function scanImages() {
  if (isWallhaven) { scanWallhaven(); return; }
  if (isEHentai) {
    scanEHentai().catch(() => {});
    return;
  }


    if (!isContextValid()) return;


    cacheKonachanPosts();


    try { if(typeof cacheR34AppPosts === 'function') cacheR34AppPosts(); } catch(e) {}


    const useHistory = historyCheckbox.checked;


    const limit = parseInt(limitInput.value, 10) || 0;


    let added = 0;





    // [zerochan-v1-scan]


    if (isZerochan) {


      const isSinglePost = /^\/\d+$/i.test(window.location.pathname) && !!document.querySelector('#large');





      if (isSinglePost) {


        const mainImg = document.querySelector('#large a.preview img, #large img');


        const previewA = document.querySelector('#large a.preview');


        const exact = previewA?.href || document.querySelector('meta[property="og:image"]')?.content;





        if (mainImg && exact) {


          const raw = mainImg.currentSrc || mainImg.src || exact;


          const key = getImageKey(exact) || `zc_${window.location.pathname.replace(/^\//, '')}`;


          if (key) {


            attachCheckbox(mainImg, key, exact, raw);


            if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {


              state.readyToDownload.set(key, { url: exact, previewUrl: raw, isVideo: false });


              added++;


            }


          }


        }


        if (added > 0) {


          persistQueue();


          updateUI();


        }


        return;


      }





      // Каталог / теги / поиск


      const cards = Array.from(document.querySelectorAll('#thumbs2 li[data-id], #thumbs li[data-id], .medium-thumbs li[data-id], li[data-id]'));


      cards.forEach(card => {


        if (limit > 0 && state.readyToDownload.size >= limit) return;


        const postId = card.getAttribute('data-id');


        const img = card.querySelector('a.thumb img, img');


        if (!postId || !img) return;





        const raw = img.getAttribute('data-src') || img.currentSrc || img.src || '';


        const guessedUrl = getZerochanCardFullUrl(card, img, postId);





        const applyZerochanMedia = (exactUrl) => {


          if (!exactUrl || !isContextValid()) return;


          const key = getImageKey(exactUrl) || `zc_${postId}`;


          attachCheckbox(img, key, exactUrl, raw);





          if (state.inProgressKeys.has(key) || state.ignoredKeys.has(key)) return;


          if (useHistory && state.downloadedHistory.has(key)) {


            state.readyToDownload.delete(key);


            return;


          }


          if (state.readyToDownload.has(key) || state.clearedNewKeys.has(key)) return;


          if (limit > 0 && state.readyToDownload.size >= limit) return;





          state.readyToDownload.set(key, { url: exactUrl, previewUrl: raw, isVideo: false });


          added++;


          updateUI();


        };





        if (guessedUrl) {


          applyZerochanMedia(guessedUrl);


        } else {


          resolveZerochanPostCached(postId).then(exact => {


            if (exact) applyZerochanMedia(exact);


          }).catch(() => {});


        }


      });





      if (added > 0) {


        persistQueue();


        updateUI();


      }


      return;


    }





    // [telegram-common-scan-v3]











    if (isTelegram) {


      const bridge = window.__UAS_TELEGRAM_BRIDGE__;


      if (!bridge || typeof bridge.collectMedia !== 'function') return;


      const mediaItems = bridge.collectMedia();


      mediaItems.forEach(item => {


        if (!item?.url || !item?.key) return;


        if (limit > 0 && state.readyToDownload.size >= limit) return;





        const target = item.element || item.host;


        if (!target) return;


        attachCheckbox(target, item.key, item.url, item.previewUrl || item.url);





        if (state.inProgressKeys.has(item.key) || state.ignoredKeys.has(item.key)) return;


        if (useHistory && state.downloadedHistory.has(item.key)) {


          state.readyToDownload.delete(item.key);


          return;


        }


        if (state.readyToDownload.has(item.key) || state.clearedNewKeys.has(item.key)) return;





        state.readyToDownload.set(item.key, {


          url: item.url,


          previewUrl: item.previewUrl || item.url,


          isVideo: !!item.isVideo,


          isAudio: !!item.isAudio,


          kind: item.kind || (item.isAudio ? 'audio' : (item.isVideo ? 'video' : 'image')),


          fileName: item.fileName || '',


          telegramMessageId: item.telegramMessageId || '',


          lazyAlbum: !!item.lazyAlbum,


        });


        added++;


      });





      if (added > 0) {


        persistQueue();


        updateUI();


      }


      return;


    }





    // [gelbooru-v3-scan]


    if (isGelbooru) {


      const params = new URLSearchParams(window.location.search);


      const isSinglePost = params.get('page') === 'post' && params.get('s') === 'view';





      // ---------------------------------------------------------------


      // Одна картинка: current page -> <a>Original image</a>


      // ---------------------------------------------------------------


      if (isSinglePost) {


        const exact = getGelbooruCurrentPageOriginal();


        const main = document.querySelector('#image');





        if (exact) {


          const raw = main ? (main.currentSrc || main.src || '') : exact;


          const key = getImageKey(exact);





          if (key) {


            attachCheckbox(main || document.body, key, exact, raw);





            if (


              !state.ignoredKeys.has(key) &&


              (!useHistory || !state.downloadedHistory.has(key)) &&


              !state.readyToDownload.has(key) &&


              !state.clearedNewKeys.has(key)


            ) {


              state.readyToDownload.set(key, {


                url: exact,


                previewUrl: raw,


                isVideo: /\.(?:webm|mp4)$/i.test(exact)


              });


              added++;


            }


          }


        }





        if (added > 0) updateUI();


        return;


      }





      // ---------------------------------------------------------------


      // Страница со множеством картинок:


      //   <a id="p14902683" href="...post...">


      //       <img src="...thumbnail...">


      //   </a>


      //        |


      //        +--> GET href страницы поста


      //        +--> найти <a>Original image</a>


      //        +--> exact CDN URL


      // ---------------------------------------------------------------


      const cards = Array.from(document.querySelectorAll(


        'a[id^="p"][href*="page=post"][href*="s=view"][href*="id="] > img,' +


        'a[href*="page=post"][href*="s=view"][href*="id="] > img'


      ));





      cards.forEach(img => {


        if (!img || !isContextValid()) return;


        if (limit > 0 && state.readyToDownload.size >= limit) return;





        const card = img.closest('a[href]');


        if (!card) return;





        let postUrl = '';


        try {


          postUrl = new URL(card.getAttribute('href') || card.href, window.location.href).href;


        } catch (e) {


          return;


        }





        if (!/^https?:\/\/(?:www\.)?gelbooru\.com\/index\.php/i.test(postUrl)) return;


        if (!/[?&]s=view(?:&|$)/i.test(postUrl)) return;


        if (!/[?&]id=\d+/i.test(postUrl)) return;





        resolveGelbooruPostCached(postUrl).then(exact => {


          if (!exact || !isContextValid()) return;





          const key = getImageKey(exact);


          if (!key) return;





          const raw = img.currentSrc || img.src || '';


          attachCheckbox(img, key, exact, raw);





          if (state.ignoredKeys.has(key)) return;


          if (useHistory && state.downloadedHistory.has(key)) return;


          if (state.readyToDownload.has(key) || state.clearedNewKeys.has(key)) return;


          if (limit > 0 && state.readyToDownload.size >= limit) return;





          state.readyToDownload.set(key, {


            url: exact,


            previewUrl: raw,


            isVideo: /\.(?:webm|mp4)$/i.test(exact)


          });





          updateUI();





          if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {


            stopAutoScroll();


            info.textContent = t('limitReached', { count: limit });


          }


        }).catch(() => {});


      });





      return;


    }








    if (isGelbooru) {


      const isGelbooruSinglePost = /[?&]s=view(?:&|$)/i.test(window.location.search);


      const targets = isGelbooruSinglePost


        ? document.querySelectorAll('#image, video#image, #post-view video, #post-view video source')


        : document.querySelectorAll('article.thumbnail-preview > a > img');





      targets.forEach(el => {


        if (limit > 0 && state.readyToDownload.size >= limit) return;





        const rawSrc = extractSrcCustom(el);


        const original = resolveOriginalUrl(rawSrc, el);


        if (!original) return;





        const key = getImageKey(original);


        if (!key) return;





        const isVid = isVideoElement(el, original);


        attachCheckbox(el, key, original, rawSrc);





        if (


          !state.ignoredKeys.has(key) &&


          (!useHistory || !state.downloadedHistory.has(key)) &&


          !state.readyToDownload.has(key) &&


          !state.clearedNewKeys.has(key)


        ) {


          state.readyToDownload.set(key, {


            url: original,


            previewUrl: rawSrc,


            isVideo: isVid


          });


          added++;


        }


      });





      if (added > 0) updateUI();


      if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {


        stopAutoScroll();


        info.textContent = t('limitReached', { count: limit });


      }


      return;


    }





    if (isIslaDeMuerta) {


      document.querySelectorAll('.nsfw:not(.revealed)').forEach(b => {


        b.classList.add('revealed');


        const overlay = b.querySelector('.nsfw-overlay');


        if (overlay) overlay.style.display = 'none';


        const content = b.querySelector('.nsfw-content');


        if (content) content.style.filter = 'none';


      });





      document.querySelectorAll('.safe-content img.lightboxed, .nsfw-content img.lightboxed').forEach(img => {


        if (img.style.display === 'none') {


          img.style.display = 'inline-block';


          img.style.maxWidth = '120px';


          img.style.maxHeight = '120px';


          img.style.objectFit = 'cover';


          img.style.margin = '4px';


          img.style.borderRadius = '4px';


          img.style.verticalAlign = 'middle';


          const pA = img.closest('a');


          if (pA) {


            pA.style.display = 'inline-block';


            pA.style.margin = '2px';


            pA.style.verticalAlign = 'middle';


          }


        }


      });





      const targets = document.querySelectorAll(


        '.safe-content img, .safe-content video, .nsfw-content img, .nsfw-content video, .card-white video, img.lightboxed'


      );





      targets.forEach(el => {


        if (limit > 0 && state.readyToDownload.size >= limit) return;


        const rawSrc = extractSrcCustom(el);


        const original = resolveOriginalUrl(rawSrc, el);


        if (!original) return;


        const key = getImageKey(original);


        if (!key) return;





        const isVid = isVideoElement(el, original);


        attachCheckbox(el, key, original, rawSrc);





        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {


          state.readyToDownload.set(key, { url: original, previewUrl: rawSrc, isVideo: isVid });


          added++;


        }


      });





      if (added > 0) updateUI();


      if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {


        stopAutoScroll();


        info.textContent = t('limitReached', { count: limit });


      }


      return;


    }





    if (isSotwe) {


      const cards = document.querySelectorAll('.tweet-card');


      const scopes = cards.length > 0 ? cards : [document];





      scopes.forEach(card => {


        // 1. Tweet images


        card.querySelectorAll('.media-carousel img, .media-carousel-image img, img.img-content, img[src*="pbs.twimg.com/media/"]').forEach(img => {


          if (limit > 0 && state.readyToDownload.size >= limit) return;


          const rawSrc = extractSrcCustom(img);


          const original = resolveOriginalUrl(rawSrc, img);


          if (!original) return;


          const key = getImageKey(original);


          if (!key) return;





          attachCheckbox(img, key, original, rawSrc);





          if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {


            state.readyToDownload.set(key, { url: original, previewUrl: rawSrc, isVideo: false });


            added++;


          }


        });





        // 2. Tweet videos


        card.querySelectorAll('.video-player-container video, video.video-player, video').forEach(video => {


          if (limit > 0 && state.readyToDownload.size >= limit) return;


          const rawSrc = extractSrcCustom(video);


          const original = resolveOriginalUrl(rawSrc, video);


          if (!original) return;


          const key = getImageKey(original);


          if (!key) return;





          attachCheckbox(video, key, original, rawSrc);





          if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {


            state.readyToDownload.set(key, { url: original, previewUrl: rawSrc, isVideo: true });


            added++;


          }


        });


      });





      if (added > 0) updateUI();


      if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {


        stopAutoScroll();


        info.textContent = t('limitReached', { count: limit });


      }


      return;


    }





    if (isErocon) {


      const isArticlePage = /^\/archives\//i.test(window.location.pathname);


      const selector = isArticlePage


        ? '.article-body .imgbox img, .article-body-inner .imgbox img, #more .imgbox img'


        : '.autopagerize_page_element .article .imgbox img, .article .imgbox img, .imgbox img';


      document.querySelectorAll(selector).forEach(el => {


        if (limit > 0 && state.readyToDownload.size >= limit) return;


        const rawSrc = extractSrcCustom(el);


        const original = resolveOriginalUrl(rawSrc, el);


        if (!original) return;


        const key = getImageKey(original);


        if (!key) return;





        attachCheckbox(el, key, original, rawSrc);


        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {


          state.readyToDownload.set(key, { url: original, previewUrl: rawSrc });


          added++;


        }


      });





      if (added > 0) updateUI();


      if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {


        stopAutoScroll();


        info.textContent = t('limitReached', { count: limit });


      }


      return;


    }





    if (isNijityeki) {


      const selector = '#container .article-body img, #container article.article .article-body-inner img';


      document.querySelectorAll(selector).forEach(el => {


        if (limit > 0 && state.readyToDownload.size >= limit) return;


        const rawSrc = extractSrcCustom(el);


        const original = resolveOriginalUrl(rawSrc, el);


        if (!original) return;


        const key = getImageKey(original);


        if (!key) return;





        attachCheckbox(el, key, original, rawSrc);


        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {


          state.readyToDownload.set(key, { url: original, previewUrl: rawSrc });


          added++;


        }


      });





      if (added > 0) updateUI();


      if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {


        stopAutoScroll();


        info.textContent = t('limitReached', { count: limit });


      }


      return;


    }





    if (isHadasirori) {


      const selector = '#container .article-outer.hentry .article-body.entry-content img';


      document.querySelectorAll(selector).forEach(el => {


        if (limit > 0 && state.readyToDownload.size >= limit) return;


        const rawSrc = extractSrcCustom(el);


        const original = resolveOriginalUrl(rawSrc, el);


        if (!original) return;


        const key = getImageKey(original);


        if (!key) return;





        attachCheckbox(el, key, original, rawSrc);


        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {


          state.readyToDownload.set(key, { url: original, previewUrl: rawSrc });


          added++;


        }


      });





      if (added > 0) updateUI();


      if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {


        stopAutoScroll();


        info.textContent = t('limitReached', { count: limit });


      }


      return;


    }





    // [uas-site-repairs-v3] Ero-Anigif: RedGifs iframe is the real media source.
    // Local article GIFs continue through the existing resolver.
    if (isEroAnigif) {
      const targets = Array.from(document.querySelectorAll(
        '.entry-content iframe[src*="redgifs.com/ifr/"], .entry-content iframe[src*="redgifs.com/watch/"], .entry-content img'
      ));
      targets.forEach(el => {
        if (limit > 0 && state.readyToDownload.size >= limit) return;
        if (el.closest('.wpInsertInPostAd, .rss-antenna, .yarpp-thumbnails-horizontal, .related-posts, aside, header, footer, nav, .yarpp-thumbnail')) return;

        const isRedGifs = el.tagName === 'IFRAME' && /(^|\.)redgifs\.com\/(?:ifr|watch)\//i.test(String(el.getAttribute('src') || ''));
        let rawSrc = '';
        let original = '';

        if (isRedGifs) {
          rawSrc = String(el.getAttribute('src') || el.getAttribute('data-src') || '').trim();
          const m = rawSrc.match(/redgifs\.com\/(?:ifr|watch)\/([A-Za-z0-9_-]+)/i);
          if (!m) return;
          original = `https://www.redgifs.com/watch/${m[1]}`;
        } else {
          rawSrc = extractSrcCustom(el);
          original = resolveOriginalUrl(rawSrc, el);
        }

        if (!original) return;
        const redId = original.match(/redgifs\.com\/(?:ifr|watch)\/([A-Za-z0-9_-]+)/i)?.[1] || '';
        const key = redId ? `redgifs_${redId.toLowerCase()}` : getImageKey(original);
        if (!key) return;

        attachCheckbox(el, key, original, rawSrc || original);
        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {
          state.readyToDownload.set(key, {
            url: original,
            previewUrl: rawSrc || original,
            sourceUrl: original,
            pageUrl: window.location.href,
            isVideo: !!redId,
            kind: redId ? 'media' : 'image',
            metadata: redId ? { redgifsId: redId, redgifsUrl: original } : {}
          });
          added++;
        }
      });

      if (added > 0) {
        persistQueue();
        updateUI();
      }
      if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {
        stopAutoScroll();
        info.textContent = t('limitReached', { count: limit });
      }
      return;
    }

    // [uas-aibooru-scan-v4] AIBooru homepage:
    // queue the post URL, not the resized thumbnail URL.
    if (isAIBooru) {
      const targets = document.querySelectorAll(
        'article.post-preview img.post-preview-image, #post-view img#image, #image'
      );

      targets.forEach(el => {
        if (limit > 0 && state.readyToDownload.size >= limit) return;

        const rawSrc = String(
          el.currentSrc || el.src || el.getAttribute('data-src') || el.getAttribute('data-original') || ''
        ).trim();
        if (!rawSrc) return;

        const link = el.closest('a[href*="/posts/"]')?.href || '';
        const currentPost = window.location.href.match(/\/posts\/(\d+)/i)?.[1] || '';
        const linkId = link.match(/\/posts\/(\d+)/i)?.[1] || currentPost;
        const sourceUrl = link || (currentPost ? `https://aibooru.online/posts/${currentPost}` : '');
        if (!sourceUrl) return;

        const key = `aibooru_${linkId || getImageKey(rawSrc)}`;
        attachCheckbox(el, key, sourceUrl, rawSrc);

        if (
          !state.inProgressKeys.has(key) &&
          !state.ignoredKeys.has(key) &&
          (!useHistory || !state.downloadedHistory.has(key)) &&
          !state.readyToDownload.has(key) &&
          !state.clearedNewKeys.has(key)
        ) {
          state.readyToDownload.set(key, {
            url: sourceUrl,
            previewUrl: rawSrc,
            sourceUrl,
            pageUrl: window.location.href,
            isVideo: false,
            kind: 'image',
            metadata: { aibooruPostId: linkId || currentPost, previewUrl: rawSrc }
          });
          added++;
        }
      });

      if (added > 0) {
        persistQueue();
        updateUI();
      }

      if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {
        stopAutoScroll();
        info.textContent = t('limitReached', { count: limit });
      }
      return;
    }

    const scanSelector = (isYandere || isKonachan)


      ? '#post-list-posts li[id^="p"] .inner img, #post-list-posts a.thumb img, #image'


      : isBluesky


      ? 'img[src*="cdn.bsky.app/img/"], img[data-src*="cdn.bsky.app/img/"], img[src*="/img/feed_"], img[data-src*="/img/feed_"]'


      : isPoipiku
      ? '.IllustItemThumbImg, .IllustThumbImgPic, .IllustItemThumb img, .IllustThumbImg img'
      : isPixiv


      ? 'a[href*="/artworks/"] img, a[href*="/illustrations/"] img, a[data-gtm-value] img, .gtm-expand-full-size-illust img, img[src*="pximg.net"], img[data-src*="pximg.net"]'


      : isReddit


        ? 'shreddit-post img[data-post-media-primary], shreddit-post div[slot="post-media-container"] img, shreddit-post img, .media-lightbox-img, zoomable-img img, .Post img, .entry img'


      : isVk


        ? 'img[data-testid="primary-attachment-image-content"], [data-testid="primary-attachment-photo"] img, .attachmentCarousel img, .MediaGrid__imageWrap img, [data-testid="media-grid"] img, .wall_post_cont img, .page_post_sized_thumbs img, .photos_container img, a.photo_row img, a[href^="/photo"] img, a[href*="z=photo"] img, #pv_photo img'


      : isPlurk


        ? '.plurk_cnt a.pictureservices img, .plurk_cnt .text_holder img, .plurk_cnt img[src*="images.plurk.com"], .plurk_cnt img[src*="imgs.plurk.com"], .plurk_cnt img[src*="pbs.twimg.com"]'


      : isPixAI


        ? 'img, figure, [style*="background-image"]'


      : isAIBooru


        ? 'article.post-preview img.post-preview-image, #image, #post-view img'


      : isJoyReactor


        ? '.post_content img, .post_content picture img, .image img, .image-zoom-unzoomed img, .zoomed-image img, img[src*="/pics/post/"], img[data-src*="/pics/post/"]'


      : isWarosu


        ? '.post_file a[href*="/img/"], a.thread_image_link img, img.thumb, .thumb, a[href*="i.warosu.org/data/"] img'


      : isCool18


        ? '#content-section img, .content-section img, .post-content img'


      : isPttWeb


        ? 'img[src*="i.imgur.com"], img[data-src*="i.imgur.com"]'


      : isWykop


        ? 'img[src*="wykop.pl/cdn/"], img[data-src*="wykop.pl/cdn/"]'


      : isM4ex


        ? '#the-content a[href*="m4ex_box"] img, #the-content img[data-src*="m4ex_box"], #the-content img[src*="m4ex_box"]'


      : isDoujinHibiki


        ? '.content_main img, .content_main [data-src], .content_main [data-lazy-src]'


      : isNijifan


        ? '.td-post-content figure.wp-block-image img, .td-post-content figure.wp-block-image [data-src], .td-post-content figure.wp-block-image [data-lazy-src]'


      : isMoeimg


        ? '.post-single img.thumbnail_image, #the-content img'


      : (isSituero || isLoveLiveForever || isNukigazo)


        ? '#the-content.entry-content img, .entry-content img'


      : isComichara


        ? '#the-content img'


      : isHentaiAnimeAI


        ? 'article .entry-content figure.wp-block-image img, article .entry-content figure.wp-block-image noscript img, .entry-content img[data-src], .entry-content img[data-lazy-src]'


      : isKyaraBetsuNijiero


        ? '#the-content figure img, #the-content img[data-src], #the-content img[data-lazy-src]'


      : isTruyenHentai


        ? ((document.body?.id === 'page-media' || document.body?.classList?.contains('site_media') || window.location.pathname.includes('-porn/'))


            ? '.media-wrapper figure img:not(.media-error img), .media-wrapper picture img:not(.media-error img), .media-wrapper video, .media-wrapper .main-media-element'


            : (document.body?.id === 'page-common_blog_read' || document.body?.classList?.contains('site_common_blog_read') || window.location.pathname.includes('/shorts/') || window.location.pathname.includes('/blog/'))


              ? '.blog-gallery ul li img, .blog-gallery ul li a[data-src], article.blog-wrapper figure.blog-random-media-wrapper img, article.blog-wrapper [data-src], article.blog-wrapper [data-original]'


              : '#wall .grid-item--media-card .grid-card__media img, #wall .grid-item--media-card .grid-card__media video, .grid-item--media-card .grid-card__media img, .grid-item--media-card .grid-card__media video')


      : isEromanIDC


        ? 'article.l-mainContent__inner .post_content figure img'


      : `img, .list-media-wrap img, .MediaGrid__imageWrap, .thumb_item, .trim img, .media img, [style*="url("], figure, a[href*="/photo"], a[href*="z=photo"], [data-file-url], [data-original], [data-testid="primary-attachment-image-content"]`;





    // [uas-site-repairs-21-72-rule34us-scan]
    if (isRule34Us) {
      const targets = document.querySelectorAll('.thumbail-container .webm-thumb, .thumbail-container img, .content_push img, .content_push video, img.webm-thumb, video');
      let addedUs = false;
      targets.forEach(el => {
        if (limit > 0 && state.readyToDownload.size >= limit) return;
        const rawSrc = extractSrcCustom(el);
        const original = resolveOriginalUrl(rawSrc, el);
        if (!original) return;
        const key = getImageKey(original);
        if (!key) return;
        const isVid = isVideoElement(el, original);
        attachCheckbox(el, key, original, rawSrc);
        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {
          state.readyToDownload.set(key, { url: original, previewUrl: rawSrc, sourceUrl: original, isVideo: isVid, kind: isVid ? 'video' : 'image' });
          addedUs = true;
        }
      });
      if (addedUs) {
        persistQueue();
        updateUI();
      }
      return;
    }


    // [uas-site-repairs-21-72-media-scan]
    if (isRule34Gg) {
      const targets = document.querySelectorAll(
        'video#media, .media-container video, .media-container img, .row-container .media img, .row-container .media video, .media img, .media video'
      );
      targets.forEach(el => {
        if (limit > 0 && state.readyToDownload.size >= limit) return;
        const rawSrc = extractSrcCustom(el);
        const original = resolveOriginalUrl(rawSrc, el);
        if (!original) return;
        const key = getImageKey(original);
        if (!key) return;
        const isVid = isVideoElement(el, original);
        attachCheckbox(el, key, original, rawSrc);
        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.clearedNewKeys.has(key)) {
          const current = state.readyToDownload.get(key) || {};
          state.readyToDownload.set(key, {
            ...current,
            url: original,
            previewUrl: rawSrc,
            sourceUrl: original,
            isVideo: isVid,
            kind: isVid ? 'video' : 'image'
          });
        }
      });
      scanRule34GgCards();
      persistQueue();
      updateUI();
      return;
    }


    // [uas-site-repairs-21-72-scrolller-scan]
    if (isScrolller) {
      const targets = document.querySelectorAll('img[src*="images.scrolller.com/"], img[src*="helios.scrolller.com/"], img[data-src*="images.scrolller.com/"], img[data-src*="helios.scrolller.com/"], video, source[src*="images.scrolller.com/"], source[src*="helios.scrolller.com/"]');
      let addedScrolller = false;
      targets.forEach(el => {
        if (limit > 0 && state.readyToDownload.size >= limit) return;
        const rawSrc = extractSrcCustom(el);
        const original = resolveOriginalUrl(rawSrc, el);
        if (!original) return;
        const key = getImageKey(original);
        if (!key) return;
        const isVid = isVideoElement(el, original);
        attachCheckbox(el, key, original, rawSrc);
        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {
          state.readyToDownload.set(key, { url: original, previewUrl: rawSrc, sourceUrl: original, isVideo: isVid, kind: isVid ? 'video' : 'image' });
          addedScrolller = true;
        }
      });
      if (addedScrolller) {
        persistQueue();
        updateUI();
      }
      return;
    }


    document.querySelectorAll(scanSelector).forEach(el => {


      if (limit > 0 && state.readyToDownload.size >= limit) return;


      const rawSrc = extractSrcCustom(el);


      const original = resolveOriginalUrl(rawSrc, el);





      if (original) {


        const key = getImageKey(original);


        if (!key) return;





        attachCheckbox(el, key, original, rawSrc);





        if (!state.inProgressKeys.has(key) && !state.ignoredKeys.has(key) && (!useHistory || !state.downloadedHistory.has(key)) && !state.readyToDownload.has(key) && !state.clearedNewKeys.has(key)) {


          state.readyToDownload.set(key, { url: original, previewUrl: rawSrc });


          if (isPoipiku) {
            poipikuRememberElement(key, el);
            poipikuResolveSignedOriginal(el, rawSrc).then((signed) => {
              if (!signed || !isContextValid()) return;
              const current = state.readyToDownload.get(key);
              if (!current) return;
              current.url = signed;
              current.previewUrl = rawSrc;
              state.readyToDownload.set(key, current);
              const toggle = document.querySelector(
                `.art-saver-card-toggle[data-key="${CSS.escape(key)}"]`
              );
              if (toggle) toggle.dataset.url = signed;
              persistQueue();
              updateUI();
            }).catch(() => {});
          }


          added++;


        }


      }


    });





    if (added > 0) {


      persistQueue();


      updateUI();


    }


    if (limit > 0 && state.readyToDownload.size >= limit && state.isScrolling) {


      stopAutoScroll();


      info.textContent = t('limitReached', { count: limit });


    }


  }





  function startAutoScroll() {


    state.isScrolling = true;


    scrollBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg></span><span>${t('pause')}</span>`;


    scrollBtn.style.setProperty('background', '#e69500', 'important');


    let noChangeCount = 0;


    let lastHeight = document.body.scrollHeight;





    state.scrollInterval = setInterval(() => {


      if (!isContextValid()) {


        stopAutoScroll();


        return;


      }


      if (!state.isScrolling) return;


      // [telegram-common-scroll-v1]











    if (isTelegram) {


        const scroller = document.querySelector('.messages-container, .MessageList, #column-center .scrollable, #column-center [class*="scrollable"]');


        if (scroller) {


          const before = scroller.scrollTop;


          scroller.scrollTop = Math.max(0, scroller.scrollTop - 900);


          scanImages();


          const after = scroller.scrollTop;


          if (after === before && after <= 4) {


            noChangeCount++;


            if (noChangeCount >= 4) {


              stopAutoScroll();


              info.textContent = t('chatStartDone');


            }


          } else {


            noChangeCount = 0;


          }


        } else {


          window.scrollBy({ top: -850, behavior: 'smooth' });


          scanImages();


        }


        return;


      }


      if (isPlurk) {


        const tHolder = document.getElementById('timeline_holder') || document.querySelector('.timeline_control');


        if (tHolder) {


          tHolder.scrollLeft += 900;


        } else {


          window.scrollBy({ left: 900, behavior: 'smooth' });


        }


      } else {


        window.scrollBy({ top: 850, behavior: 'smooth' });


      }


      if (isTruyenHentai) {


        const showMoreBtn = document.querySelector('.show-more:not(.hide)');


        if (showMoreBtn && !showMoreBtn.disabled && showMoreBtn.offsetParent !== null) {


          showMoreBtn.click();


        }


      }


      scanImages();


      const currentHeight = document.body.scrollHeight;


      if (window.innerHeight + window.scrollY >= currentHeight - 350) {


        if (currentHeight === lastHeight) {


          noChangeCount++;


          if (noChangeCount >= 2) window.scrollBy(0, -200);


          if (noChangeCount >= 6) {


            stopAutoScroll();


            info.textContent = t('pageEndDone');


          }


        } else {


          noChangeCount = 0;


          lastHeight = currentHeight;


        }


      }


    }, 1200);


  }





  function stopAutoScroll() {


    state.isScrolling = false;


    clearInterval(state.scrollInterval);


    scrollBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg></span><span>${t('scroll')}</span>`;


    scrollBtn.style.setProperty('background', 'rgba(255, 255, 255, 0.08)', 'important');


  }





  // --- UI В SHADOW DOM: СТРОГАЯ 2-СТРОЧНАЯ ПАНЕЛЬ И ЕДИНЫЙ СТИЛЬ ---


  const host = document.createElement('div');


  host.id = 'pin-batch-downloader-host';


  host.style.cssText = 'all: initial !important; position: fixed !important; bottom: 24px !important; right: 24px !important; z-index: 2147483647 !important; display: block !important; width: auto !important; height: auto !important;';





  try {
    chrome.storage.local.get('as_panel_pos', (res) => {
      try {
        const pos = res?.as_panel_pos;
        const rawLeft = Number(pos?.left);
        const rawTop = Number(pos?.top);

        if (!Number.isFinite(rawLeft) || !Number.isFinite(rawTop)) {
          host.style.removeProperty('top');
          host.style.removeProperty('left');
          host.style.setProperty('bottom', '24px', 'important');
          host.style.setProperty('right', '24px', 'important');
          return;
        }

        const rect = host.getBoundingClientRect();
        const width = Math.max(1, rect.width || host.offsetWidth || 320);
        const height = Math.max(1, rect.height || host.offsetHeight || 80);
        const viewportWidth = Math.max(0, window.innerWidth || document.documentElement.clientWidth || 0);
        const viewportHeight = Math.max(0, window.innerHeight || document.documentElement.clientHeight || 0);
        const margin = 8;

        const maxLeft = Math.max(margin, viewportWidth - width - margin);
        const maxTop = Math.max(margin, viewportHeight - height - margin);

        const safeLeft = Math.min(Math.max(rawLeft, margin), maxLeft);
        const safeTop = Math.min(Math.max(rawTop, margin), maxTop);

        host.style.removeProperty('bottom');
        host.style.removeProperty('right');
        host.style.setProperty('top', `${Math.round(safeTop)}px`, 'important');
        host.style.setProperty('left', `${Math.round(safeLeft)}px`, 'important');
      } catch (_) {}
    });
  } catch(e) {}





  const shadow = host.attachShadow({ mode: 'open' });





  const styleTag = document.createElement('style');


  styleTag.textContent = `


    *, *::before, *::after {


      box-sizing: border-box !important;


      margin: 0 !important;


      padding: 0 !important;


      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;


      line-height: 1 !important;


      -webkit-font-smoothing: antialiased !important;


    }


    .panel {


      background: ${currentTheme.bg} !important;


      backdrop-filter: blur(18px) !important;


      -webkit-backdrop-filter: blur(18px) !important;


      color: #ffffff !important;


      padding: 12px 14px !important;


      border: ${currentTheme.border || '1px solid rgba(255, 255, 255, 0.12)'} !important;


      border-radius: ${currentTheme.cardRadius || '14px'} !important;


      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08) !important;


      font-size: 12px !important;


      display: flex !important;


      flex-direction: column !important;


      gap: 8px !important;


      user-select: none !important;


      transition: all 0.2s ease !important;


      min-width: 320px !important;


    }


    .panel.minimized {


      padding: 8px 12px !important;


      min-width: unset !important;


      gap: 0 !important;


    }


    .btn-action {


      outline: none !important;


      border: 1px solid rgba(255, 255, 255, 0.12) !important;


      cursor: pointer !important;


      display: inline-flex !important;


      align-items: center !important;


      justify-content: center !important;


      user-select: none !important;


      height: 30px !important;


      border-radius: ${currentTheme.btnRadius || '6px'} !important;


      background: rgba(255, 255, 255, 0.08) !important;


      color: #eee !important;


      font-size: 12px !important;


      font-weight: 600 !important;


      transition: all 0.15s ease !important;


    }


    .btn-action:hover {


      background: rgba(255, 255, 255, 0.14) !important;


      color: #fff !important;


      border-color: rgba(255, 255, 255, 0.22) !important;


    }


    .btn-action:active {


      transform: translateY(1px) !important;


    }


    .btn-icon {


      width: 30px !important;


      height: 30px !important;


      flex-shrink: 0 !important;


      padding: 0 !important;


    }


    .btn-primary {


      background: ${currentTheme.primary} !important;


      color: #fff !important;


      border: none !important;


      font-weight: 700 !important;


      box-shadow: 0 4px 14px ${currentTheme.primary}44 !important;


    }


    .btn-primary:hover {


      filter: brightness(1.12) !important;


    }


    .toolbar-row {


      display: flex !important;


      align-items: center !important;


      justify-content: space-between !important;


      gap: 8px !important;


      background: rgba(0, 0, 0, 0.32) !important;


      padding: 5px 8px !important;


      border-radius: ${currentTheme.btnRadius || '6px'} !important;


      border: 1px solid rgba(255, 255, 255, 0.07) !important;


    }


    .seg-group {


      display: inline-flex !important;


      background: rgba(255, 255, 255, 0.08) !important;


      border-radius: 5px !important;


      padding: 2px !important;


      gap: 2px !important;


    }


    .seg-btn {


      border: none !important;


      background: transparent !important;


      color: #aaa !important;


      font-size: 11px !important;


      padding: 3px 6px !important;


      border-radius: 4px !important;


      cursor: pointer !important;


      font-weight: 500 !important;


      transition: all 0.15s ease !important;


    }


    .seg-btn.active {


      background: ${currentTheme.primary} !important;


      color: #fff !important;


      font-weight: 700 !important;


    }


    .sep {


      width: 1px !important;


      height: 16px !important;


      background: rgba(255, 255, 255, 0.12) !important;


      flex-shrink: 0 !important;


    }


    .chk-label {


      display: inline-flex !important;


      align-items: center !important;


      gap: 5px !important;


      font-size: 11px !important;


      color: #ccc !important;


      cursor: pointer !important;


      white-space: nowrap !important;


    }


    .chk-label:hover {


      color: #fff !important;


    }


    input[type="checkbox"] {


      appearance: auto !important;


      -webkit-appearance: checkbox !important;


      cursor: pointer !important;


      accent-color: ${currentTheme.primary} !important;


      width: 14px !important;


      height: 14px !important;


      margin: 0 !important;


    }


    .limit-wrap {


      display: inline-flex !important;


      align-items: center !important;


      gap: 4px !important;


      font-size: 11px !important;


      color: #aaa !important;


    }


    input[type="number"] {


      background: rgba(255, 255, 255, 0.08) !important;


      border: 1px solid rgba(255, 255, 255, 0.15) !important;


      color: #fff !important;


      border-radius: 4px !important;


      padding: 2px 4px !important;


      text-align: center !important;


      outline: none !important;


      width: 42px !important;


      height: 20px !important;


      font-size: 11px !important;


    }


    input[type="number"]:focus {


      border-color: ${currentTheme.primary} !important;


    }


     .settings-panel {


      display: none !important;


      flex-direction: column !important;


      gap: 8px !important;


      max-height: 62vh !important;


      overflow-y: auto !important;


      padding: 8px !important;


      border-radius: 8px !important;


      background: rgba(0, 0, 0, 0.22) !important;


      border: 1px solid rgba(255, 255, 255, 0.08) !important;


      scrollbar-width: thin !important;


    }


    .settings-panel.open {


      display: flex !important;


    }


    .settings-title {


      font-size: 11px !important;


      font-weight: 700 !important;


      color: #fff !important;


      display: flex !important;


      align-items: center !important;


      justify-content: space-between !important;


      padding: 2px 2px 0 2px !important;


    }


    .settings-hint {


      color: #999 !important;


      font-size: 10px !important;


      line-height: 1.25 !important;


      white-space: normal !important;


    }


    .settings-options-row {


      display: flex !important;


      flex-direction: column !important;


      gap: 7px !important;


      padding: 7px !important;


      border-radius: 7px !important;


      background: rgba(255,255,255,0.04) !important;


      border: 1px solid rgba(255,255,255,0.08) !important;


    }


    .zip-options {


      display: flex !important;


      flex-direction: column !important;


      gap: 7px !important;


      padding: 7px !important;


      border-radius: 7px !important;


      background: rgba(255,255,255,0.04) !important;


      border: 1px solid rgba(255,255,255,0.08) !important;


    }


    .zip-threshold-wrap {


      display: inline-flex !important;


      align-items: center !important;


      justify-content: space-between !important;


      gap: 8px !important;


      color: #ccc !important;


      font-size: 11px !important;


    }


    .zip-threshold-wrap input {


      width: 54px !important;


    }


    .zip-btn {


      width: 100% !important;


      gap: 6px !important;


    }


  `;


  shadow.appendChild(styleTag);





  const panel = document.createElement('div');


  panel.className = 'panel';





  // Линия 1: Шапка (Заголовок, статус, кнопка сворачивания)


  // [uas-i18n-v1] Compact persistent language selector.
  const languageRow = document.createElement('div');
  languageRow.style.cssText = 'display:flex !important; align-items:center !important; justify-content:space-between !important; gap:8px !important; padding:6px 7px !important; border-radius:7px !important; background:rgba(255,255,255,0.04) !important; border:1px solid rgba(255,255,255,0.08) !important;';
  const languageLabel = document.createElement('span');
  languageLabel.style.cssText = 'font-size:11px !important; color:#ccc !important;';
  const languageSelect = document.createElement('select');
  languageSelect.style.cssText = `background:rgba(255,255,255,0.08) !important; color:#fff !important; border:1px solid rgba(255,255,255,0.15) !important; border-radius:5px !important; padding:3px 7px !important; font-size:11px !important; outline:none !important;`;
  languageSelect.innerHTML = '<option value="ru">Русский</option><option value="en">English</option>';
  languageSelect.value = uasLanguage;
  languageRow.appendChild(languageLabel);
  languageRow.appendChild(languageSelect);

  function applyLanguage() {
    globalThis.__UAS_LANG__ = uasLanguage;
    if (languageSelect) languageSelect.value = uasLanguage;
    if (languageLabel) languageLabel.textContent = t('language');
    if (settingsTitle) settingsTitle.innerHTML = `<span>${t('settings')}</span><span style="font-size:10px;color:#888;">⚙</span>`;
    if (settingsBtn) settingsBtn.title = settingsPanel.classList.contains('open') ? t('closeSettings') : t('settings');
    const allBtn = segGroup?.querySelector('[data-mode="all"]');
    const photosBtn = segGroup?.querySelector('[data-mode="photos"]');
    const videosBtn = segGroup?.querySelector('[data-mode="videos"]');
    if (allBtn) allBtn.textContent = t('all');
    if (photosBtn) { photosBtn.textContent = `🖼️ ${t('photos')}`; photosBtn.title = t('onlyPhotos'); }
    if (videosBtn) { videosBtn.textContent = `🎬 ${t('videos')}`; videosBtn.title = t('onlyVideos'); }
    if (limitWrap?.querySelector('span')) limitWrap.querySelector('span').textContent = t('limit');
    if (historyLabel) { historyLabel.title = t('noRepeatsTitle'); if (historyLabel.lastChild) historyLabel.lastChild.textContent = t('noRepeats'); }
    if (fallbackLabel) { fallbackLabel.title = t('previewTitle'); if (fallbackLabel.lastChild) fallbackLabel.lastChild.textContent = t('preview'); }
    if (scrollBtn && !state.isScrolling) scrollBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg></span><span>${t('scroll')}</span>`;
    if (downloadBtn && state.inProgressKeys.size === 0) downloadBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg></span><span>${t('download')}</span>`;
    if (deselectAllBtn) deselectAllBtn.title = state.readyToDownload.size === 0 ? t('selectAll') : t('deselectOnly');
    if (exportHistoryBtn) exportHistoryBtn.title = t('exportHistoryTitle');
    if (diagnosticBtn) diagnosticBtn.title = t('diagnosticsTitle');
    if (clearNewBtn) clearNewBtn.title = t('clearNewTitle');
    if (clearBtn) clearBtn.title = t('clearHistoryTitle');
    if (zipHint) zipHint.textContent = t('zipHint');
    if (zipThresholdWrap) { zipThresholdWrap.title = t('autoZipThresholdTitle'); const z = zipThresholdWrap.querySelector('span'); if (z) z.textContent = t('autoZipFrom'); }
    if (zipThresholdInput) zipThresholdInput.setAttribute('aria-label', t('autoZipAria'));
    if (zipAutoLabel) { zipAutoLabel.title = t('autoZipLabelTitle'); if (zipAutoLabel.lastChild) zipAutoLabel.lastChild.textContent = t('autoZipLabel'); }
    if (zipBtn) { zipBtn.innerHTML = `<span>🗜️</span><span>${t('zipDownload')}</span>`; zipBtn.title = t('zipDownloadTitle'); }
    document.querySelectorAll('.art-saver-card-toggle').forEach(el => { try { if (typeof el._updateVisual === 'function') el._updateVisual(); } catch (_) {} });
    updateUI();
  }

  languageSelect.addEventListener('change', async () => {
    uasLanguage = languageSelect.value === 'en' ? 'en' : 'ru';
    globalThis.__UAS_LANG__ = uasLanguage;
    try { await chrome.storage.local.set({ uas_language: uasLanguage }); } catch (_) {}
    applyLanguage();
  });

  const topRow = document.createElement('div');


  topRow.style.cssText = 'display: flex !important; justify-content: space-between !important; align-items: center !important; gap: 10px !important; cursor: grab !important;';





  const titleBadge = document.createElement('div');


  titleBadge.style.cssText = `background: ${currentTheme.primary} !important; color: #fff !important; padding: 4px 8px !important; border-radius: 5px !important; font-size: 11px !important; font-weight: 700 !important; display: flex !important; align-items: center !important; gap: 5px !important; flex-shrink: 0 !important;`;


  titleBadge.innerHTML = `<span>${currentTheme.icon}</span> <span>${currentTheme.name}</span>`;





  const info = document.createElement('span');


  info.style.cssText = 'font-weight: 600 !important; color: #eee !important; font-size: 12px !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important;';


  info.textContent = t('news', { count: 0 });





  const minBtn = document.createElement('button');


  minBtn.className = 'btn-action btn-icon';


  minBtn.style.cssText = 'width: 24px !important; height: 24px !important; border-radius: 5px !important;';


  minBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;





  const settingsBtn = document.createElement('button');


  settingsBtn.className = 'btn-action btn-icon';


  settingsBtn.style.cssText = 'width: 24px !important; height: 24px !important; border-radius: 5px !important;';


  settingsBtn.title = t('settings');


  settingsBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.06.06-1.7 1.7-.06-.06a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.08 1.65V20h-2.4v-.09a1.8 1.8 0 0 0-1.08-1.65 1.8 1.8 0 0 0-1.98.36l-.06.06-1.7-1.7.06-.06A1.8 1.8 0 0 0 8.2 15a1.8 1.8 0 0 0-1.65-1.08H6v-2.4h.55A1.8 1.8 0 0 0 8.2 10a1.8 1.8 0 0 0-.36-1.98l-.06-.06 1.7-1.7.06.06a1.8 1.8 0 0 0 1.98.36A1.8 1.8 0 0 0 12.6 5V4.5H15V5a1.8 1.8 0 0 0 1.65 1.68 1.8 1.8 0 0 0 1.98-.36l.06-.06 1.7 1.7-.06.06A1.8 1.8 0 0 0 20 10a1.8 1.8 0 0 0 1.65 1.08H22v2.4h-.35A1.8 1.8 0 0 0 19.4 15Z"></path></svg>`;





  const badgeWrap = document.createElement('div');


  badgeWrap.style.cssText = 'display: flex !important; align-items: center !important; gap: 8px !important; overflow: hidden !important;';


  badgeWrap.appendChild(titleBadge);


  badgeWrap.appendChild(info);


  const topButtons = document.createElement('div');


  topButtons.style.cssText = 'display:flex !important; align-items:center !important; gap:5px !important; flex-shrink:0 !important;';


  topButtons.appendChild(settingsBtn);


  topButtons.appendChild(minBtn);


  topRow.appendChild(badgeWrap);


  topRow.appendChild(topButtons);


  panel.appendChild(topRow);





  // [UI] Полоса прогресса


  const progressBarTrack = document.createElement('div');


  progressBarTrack.style.cssText = 'height: 2px !important; width: 100% !important; background: rgba(255, 255, 255, 0.1) !important; border-radius: 2px !important; overflow: hidden !important; display: none !important; margin: 1px 0 3px 0 !important;';


  const progressBarFill = document.createElement('div');


  progressBarFill.style.cssText = `height: 100% !important; width: 0% !important; background: linear-gradient(90deg, #0096FA, ${currentTheme.primary}) !important; transition: width 0.25s ease !important;`;


  progressBarTrack.appendChild(progressBarFill);


  // [zip-ui-settings-v2] Только указанные функции живут в ⚙.


  const settingsPanel = document.createElement('div');


  settingsPanel.className = 'settings-panel';





  const settingsTitle = document.createElement('div');


  settingsTitle.className = 'settings-title';


  settingsTitle.innerHTML = `<span>${t('settings')}</span><span style="font-size:10px;color:#888;">⚙</span>`;


  settingsPanel.appendChild(settingsTitle);
  settingsPanel.appendChild(languageRow);





  // ЛИНИЯ 2: НАСТРОЙКИ И ФИЛЬТРЫ В 1 СТРОКУ


  const optionsToolbar = document.createElement('div');


  optionsToolbar.className = 'toolbar-row';





  // Сегментированный переключатель Все / Фото / Видео


  const segGroup = document.createElement('div');


  segGroup.className = 'seg-group';


  segGroup.innerHTML = `


    <button type="button" class="seg-btn active" data-mode="all">${t('all')}</button>


    <button type="button" class="seg-btn" data-mode="photos" title="${t('onlyPhotos')}">🖼️ ${t('photos')}</button>


    <button type="button" class="seg-btn" data-mode="videos" title="${t('onlyVideos')}">🎬 ${t('videos')}</button>


  `;


  segGroup.addEventListener('click', (e) => {


    const btn = e.target.closest('button');


    if (!btn) return;


    segGroup.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));


    btn.classList.add('active');





    const mode = btn.dataset.mode;


    const toggles = document.querySelectorAll('.art-saver-card-toggle');


    toggles.forEach(t => {


      const isVideoFlag = t.dataset.isVideo === 'true';


      if (mode === 'photos') {


        if (isVideoFlag) {


          t.dataset.excluded = 'true';


          state.ignoredKeys.add(t.dataset.key);


          state.readyToDownload.delete(t.dataset.key);


        } else {


          t.dataset.excluded = 'false';


          state.ignoredKeys.delete(t.dataset.key);


        }


      } else if (mode === 'videos') {


        if (!isVideoFlag) {


          t.dataset.excluded = 'true';


          state.ignoredKeys.add(t.dataset.key);


          state.readyToDownload.delete(t.dataset.key);


        } else {


          t.dataset.excluded = 'false';


          state.ignoredKeys.delete(t.dataset.key);


        }


      } else {


        t.dataset.excluded = 'false';


        state.ignoredKeys.delete(t.dataset.key);


      }


      if (typeof t._updateVisual === 'function') t._updateVisual();


    });





    try {


      chrome.storage.local.set({ [`ignored_${siteKey}`]: Array.from(state.ignoredKeys) });


    } catch(err) {}


    scanImages();


    updateUI();


  });





  // Лимит


  const limitWrap = document.createElement('div');


  limitWrap.className = 'limit-wrap';


  limitWrap.innerHTML = `<span>${t('limit')}</span>`;


  const limitInput = document.createElement('input');


  limitInput.type = 'number';


  limitInput.min = '0';


  limitInput.placeholder = '∞';


  limitWrap.appendChild(limitInput);





  // Без повторов


  const historyLabel = document.createElement('label');


  historyLabel.className = 'chk-label';


  historyLabel.title = t('noRepeatsTitle');


  const historyCheckbox = document.createElement('input');


  historyCheckbox.type = 'checkbox';


  historyCheckbox.checked = true;


  historyLabel.appendChild(historyCheckbox);


  historyLabel.appendChild(document.createTextNode(t('noRepeats')));





  // Превью


  const fallbackLabel = document.createElement('label');


  fallbackLabel.className = 'chk-label';


  fallbackLabel.title = t('previewTitle');


  const fallbackCheckbox = document.createElement('input');


  fallbackCheckbox.type = 'checkbox';


  fallbackCheckbox.checked = false;


  fallbackLabel.appendChild(fallbackCheckbox);


  fallbackLabel.appendChild(document.createTextNode(t('preview')));





  const sep1 = document.createElement('div'); sep1.className = 'sep';


  const sep2 = document.createElement('div'); sep2.className = 'sep';





  optionsToolbar.appendChild(segGroup);


  optionsToolbar.appendChild(sep1);


  optionsToolbar.appendChild(limitWrap);


  optionsToolbar.appendChild(sep2);


  panel.appendChild(optionsToolbar);





  const settingsOptionsRow = document.createElement('div');


  settingsOptionsRow.className = 'settings-options-row';


  settingsOptionsRow.appendChild(historyLabel);


  settingsOptionsRow.appendChild(fallbackLabel);


  settingsPanel.appendChild(settingsOptionsRow);





  // ЛИНИЯ 3: КНОПКИ ДЕЙСТВИЙ (СТРОГО 30px ВЫСОТА)


  const btnRow = document.createElement('div');


  btnRow.style.cssText = 'display: flex !important; gap: 6px !important; align-items: center !important; width: 100% !important;';





  const scrollBtn = document.createElement('button');


  scrollBtn.className = 'btn-action';


  scrollBtn.style.cssText = 'flex: 1 !important; gap: 5px !important;';


  scrollBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg></span><span>${t('scroll')}</span>`;





  const downloadBtn = document.createElement('button');


  downloadBtn.className = 'btn-action btn-primary';


  downloadBtn.style.cssText = 'flex: 1.4 !important; gap: 5px !important;';


  downloadBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg></span><span>${t('download')}</span>`;





  const deselectAllBtn = document.createElement('button');


  deselectAllBtn.className = 'btn-action btn-icon';


  deselectAllBtn.title = t('deselectAll');


  deselectAllBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`;





  deselectAllBtn.addEventListener('click', async () => {


    if (!isContextValid()) return;


    if (state.readyToDownload.size > 0) {


      for (const [key] of state.readyToDownload) {


        state.ignoredKeys.add(key);


      }


      state.readyToDownload.clear();


      document.querySelectorAll('.art-saver-card-toggle').forEach(t => {


        const key = t.dataset.key;


        if (key) state.ignoredKeys.add(key);


        if (typeof t._updateVisual === 'function') t._updateVisual();


      });


    } else {


      state.ignoredKeys.clear();


      state.clearedNewKeys.clear();


      scanImages();


      document.querySelectorAll('.art-saver-card-toggle').forEach(t => {


        if (typeof t._updateVisual === 'function') t._updateVisual();


      });


    }


    try {


      await chrome.storage.local.set({ [`ignored_${siteKey}`]: Array.from(state.ignoredKeys) });


    } catch (e) {}


    persistQueue();


    updateUI();


  });





  const exportHistoryBtn = document.createElement('button');


  exportHistoryBtn.className = 'btn-action btn-icon';


  exportHistoryBtn.title = t('exportHistoryTitle');


  exportHistoryBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`;


  exportHistoryBtn.addEventListener('click', () => {


    if (!isContextValid()) return;


    try {


      chrome.runtime.sendMessage({ action: 'export_history_file', site: siteKey });


    } catch (e) {}


  });





  const diagnosticBtn = document.createElement('button');
  diagnosticBtn.className = 'btn-action btn-icon';
  diagnosticBtn.title = t('diagnosticsTitle');
  diagnosticBtn.innerHTML = '🩺';
  diagnosticBtn.addEventListener('click', async () => {
    if (!isContextValid()) return;
    diagnosticBtn.disabled = true;
    diagnosticBtn.style.setProperty('opacity', '0.55', 'important');
    try {
      const queued = Array.from(state.readyToDownload.entries()).slice(0, 5).map(([key, item]) => ({
        key,
        url: item.url,
        previewUrl: item.previewUrl || item.url,
        candidates: uasContentNormalizeCandidates(item),
        isVideo: !!item.isVideo,
        isAudio: !!item.isAudio,
        kind: item.kind || (item.isAudio ? 'audio' : (item.isVideo ? 'video' : 'image')),
        fileName: item.fileName || '',
        pageUrl: item.pageUrl || window.location.href,
        sourceUrl: item.sourceUrl || item.url || '',
        metadata: item.metadata || {},
        lifecycle: state.itemStates.get(key) || null,
        downloadState: state.downloadStates.get(key) || null
      }));
      const result = await chrome.runtime.sendMessage({
        action: 'uas_health_diagnostics',
        site: siteKey,
        pageUrl: window.location.href,
        items: queued,
        probe: true
      });
      uasShowDiagnostics(result || { ok: false, error: t('diagnosticsEmpty') });
    } catch (e) {
      uasShowDiagnostics({
        ok: false,
        error: String(e?.message || e),
        core: { ok: false, version: '?' },
        adapter: { id: siteKey, name: currentTheme.name }
      });
    } finally {
      diagnosticBtn.disabled = false;
      diagnosticBtn.style.setProperty('opacity', '1', 'important');
    }
  });

  const clearNewBtn = document.createElement('button');


  clearNewBtn.className = 'btn-action btn-icon';


  clearNewBtn.title = t('clearNewTitle');


  clearNewBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12"></path><path d="M18 6L6 18"></path><circle cx="12" cy="12" r="9"></circle></svg>`;





  // [clear-new-button-v1]





  clearNewBtn.addEventListener('click', async () => {


    if (!isContextValid()) return;


    const keys = Array.from(state.readyToDownload.keys()).filter(key => !state.inProgressKeys.has(key));


    if (keys.length === 0) return;


    if (!confirm(t('clearNewConfirm', { count: keys.length, site: currentTheme.name }))) return;





    for (const key of keys) state.clearedNewKeys.add(key);


    state.readyToDownload.clear();


    try {


      await chrome.storage.local.remove([`ready_${siteKey}`]);


    } catch (e) {}


    document.querySelectorAll('.art-saver-card-toggle').forEach(t => {


      if (typeof t._updateVisual === 'function') t._updateVisual();


    });


    updateUI();


  });





  const clearBtn = document.createElement('button');


  clearBtn.className = 'btn-action btn-icon';


  clearBtn.title = t('clearHistoryTitle');


  clearBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;





  // [zip-ui-settings-v2] Основная панель: Скролл + Скачать + выбор/снятие.


  btnRow.appendChild(scrollBtn);


  btnRow.appendChild(downloadBtn);


  btnRow.appendChild(deselectAllBtn);





  const settingsActionRow = document.createElement('div');


  settingsActionRow.style.cssText = 'display:flex !important; gap:6px !important; flex-wrap:wrap !important; width:100% !important;';


  settingsActionRow.appendChild(exportHistoryBtn);


  settingsActionRow.appendChild(clearNewBtn);
  settingsActionRow.appendChild(diagnosticBtn);


  settingsActionRow.appendChild(clearBtn);





  const zipOptions = document.createElement('div');


  zipOptions.className = 'zip-options';





  const zipHint = document.createElement('div');


  zipHint.className = 'settings-hint';


  zipHint.textContent = t('zipHint');


  zipOptions.appendChild(zipHint);





  const zipThresholdWrap = document.createElement('label');


  zipThresholdWrap.className = 'zip-threshold-wrap';


  zipThresholdWrap.title = t('autoZipThresholdTitle');


  zipThresholdWrap.innerHTML = `<span>${t('autoZipFrom')}</span>`;





  const zipThresholdInput = document.createElement('input');


  zipThresholdInput.type = 'number';


  zipThresholdInput.min = '2';


  zipThresholdInput.max = '5000';


  zipThresholdInput.value = '25';


  zipThresholdInput.setAttribute('aria-label', t('autoZipAria'));


  zipThresholdWrap.appendChild(zipThresholdInput);


  zipOptions.appendChild(zipThresholdWrap);





  const zipAutoLabel = document.createElement('label');


  zipAutoLabel.className = 'chk-label';


  zipAutoLabel.title = t('autoZipLabelTitle');


  const zipAutoCheckbox = document.createElement('input');


  zipAutoCheckbox.type = 'checkbox';


  zipAutoLabel.appendChild(zipAutoCheckbox);


  zipAutoLabel.appendChild(document.createTextNode(t('autoZipLabel')));


  zipOptions.appendChild(zipAutoLabel);





  const zipBtn = document.createElement('button');


  zipBtn.className = 'btn-action btn-primary zip-btn';


  zipBtn.innerHTML = `<span>🗜️</span><span>${t('zipDownload')}</span>`;


  zipBtn.title = t('zipDownloadTitle');


  zipOptions.appendChild(zipBtn);





  settingsPanel.appendChild(settingsActionRow);


  settingsPanel.appendChild(zipOptions);


  panel.appendChild(settingsPanel);


  panel.appendChild(btnRow);





  shadow.appendChild(panel);


  document.documentElement.appendChild(host);

  // [uas-panel-stable-v2] VK can rebuild <body>; keep the panel outside it.
  const uasPanelEnsureAttached = () => {
    try {
      if (!isContextValid()) return false;
    } catch (_) { return false; }
    if (host.isConnected) return true;
    try {
      if (!document.documentElement) return false;
      document.documentElement.appendChild(host);
      return true;
    } catch (_) { return false; }
  };

  uasPanelEnsureAttached();

  try {
    const uasPanelObserver = new MutationObserver(() => {
      try {
        if (!isContextValid()) {
          uasPanelObserver.disconnect();
          return;
        }
        if (!host.isConnected) uasPanelEnsureAttached();
      } catch (_) {}
    });
    uasPanelObserver.observe(document.documentElement, { childList: true, subtree: true });
  } catch (_) {}



  // Перетаскивание панели за шапку (Drag & Drop)


  let isDraggingPanel = false;


  let dragOffset = { x: 0, y: 0 };





  topRow.addEventListener('mousedown', (e) => {


    if (e.target.closest('button, input')) return;


    isDraggingPanel = true;


    topRow.style.setProperty('cursor', 'grabbing', 'important');


    const rect = host.getBoundingClientRect();


    dragOffset.x = e.clientX - rect.left;


    dragOffset.y = e.clientY - rect.top;


    e.preventDefault();


  });





  window.addEventListener('mousemove', (e) => {


    if (!isDraggingPanel) return;


    const newLeft = Math.max(8, Math.min(window.innerWidth - host.offsetWidth - 8, e.clientX - dragOffset.x));


    const newTop = Math.max(8, Math.min(window.innerHeight - host.offsetHeight - 8, e.clientY - dragOffset.y));


    host.style.removeProperty('bottom');


    host.style.removeProperty('right');


    host.style.setProperty('top', `${newTop}px`, 'important');


    host.style.setProperty('left', `${newLeft}px`, 'important');


  });





  window.addEventListener('mouseup', () => {


    if (isDraggingPanel) {


      isDraggingPanel = false;


      topRow.style.setProperty('cursor', 'grab', 'important');


      const rect = host.getBoundingClientRect();


      try {


        chrome.storage.local.set({ as_panel_pos: { left: rect.left, top: rect.top } });


      } catch(e) {}


    }


  });





  function updateUI() {


    // [persistent-new-counter-v2] «Новые» = все накопленные элементы


    // очереди, кроме уже скачанных и исключённых. Очередь хранится в


    // chrome.storage.local, поэтому F5 не сбрасывает счётчик.


    let newFoundCount = 0;


    for (const key of state.readyToDownload.keys()) {


      if (state.downloadedHistory.has(key)) continue;


      if (state.ignoredKeys.has(key)) continue;


      newFoundCount++;


    }


    if (state.isMinimized) {


      info.textContent = `${newFoundCount}`;


      return;


    }


    const dlCount = state.downloadedHistory.size;


    const ignCount = state.ignoredKeys.size;


    let text = t('news', { count: newFoundCount });


    if (dlCount > 0) text += t('downloaded', { count: dlCount });


    if (ignCount > 0) text += t('excluded', { count: ignCount });


    info.textContent = text;


    if (typeof clearNewBtn !== 'undefined' && clearNewBtn) {


      clearNewBtn.disabled = newFoundCount === 0;


      clearNewBtn.style.setProperty('opacity', newFoundCount === 0 ? '0.45' : '1', 'important');


      clearNewBtn.style.setProperty('pointer-events', newFoundCount === 0 ? 'none' : 'auto', 'important');


    }





    if (typeof zipBtn !== 'undefined' && zipBtn) {


      const zipDisabled = isTelegram || newFoundCount === 0 || state.inProgressKeys.size > 0;


      zipBtn.disabled = zipDisabled;


      zipBtn.style.setProperty('opacity', zipDisabled ? '0.45' : '1', 'important');


      zipBtn.style.setProperty('pointer-events', zipDisabled ? 'none' : 'auto', 'important');


    }





    if (typeof deselectAllBtn !== 'undefined' && deselectAllBtn) {


      if (state.readyToDownload.size === 0) {


        deselectAllBtn.title = t('selectAll');


        deselectAllBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><polyline points="8 12 11 15 16 9"></polyline></svg>`;


      } else {


        deselectAllBtn.title = t('deselectOnly');


        deselectAllBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`;


      }


    }


  }





  minBtn.addEventListener('click', () => {


    state.isMinimized = !state.isMinimized;


    settingsPanel.classList.remove('open');


    optionsToolbar.style.setProperty('display', state.isMinimized ? 'none' : 'flex', 'important');


    btnRow.style.setProperty('display', state.isMinimized ? 'none' : 'flex', 'important');


    panel.classList.toggle('minimized', state.isMinimized);


    minBtn.innerHTML = state.isMinimized


      ? `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`


      : `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;


    updateUI();


  });





  scrollBtn.addEventListener('click', () => state.isScrolling ? stopAutoScroll() : startAutoScroll());


  historyCheckbox.addEventListener('change', () => {


    // [persistent-new-counter-v2] Не обнуляем накопленные новые при


    // переключении режима истории. После пересканирования уже скачанные


    // всё равно не попадут в счётчик «Новых».


    try {


      chrome.storage.local.set({ save_to_history: historyCheckbox.checked });


    } catch (e) {}


    scanImages();


    document.querySelectorAll('.art-saver-card-toggle').forEach(t => {


      if (typeof t._updateVisual === 'function') t._updateVisual();


    });


    updateUI();


  });


  fallbackCheckbox.addEventListener('change', () => {


    if (isContextValid()) {


      chrome.storage.local.set({ allow_fallback: fallbackCheckbox.checked }).catch(() => {});


    }


  });





  settingsBtn.addEventListener('click', () => {


    if (state.isMinimized) {


      state.isMinimized = false;


      optionsToolbar.style.setProperty('display', 'flex', 'important');


      btnRow.style.setProperty('display', 'flex', 'important');


      panel.classList.remove('minimized');


      minBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;


    }


    const open = settingsPanel.classList.toggle('open');


    settingsBtn.title = open ? t('closeSettings') : t('settings');


  });





  zipThresholdInput.addEventListener('change', () => {


    const value = Math.max(2, Math.min(5000, parseInt(zipThresholdInput.value, 10) || 25));


    zipThresholdInput.value = String(value);


    try { chrome.storage.local.set({ uas_zip_threshold: value }); } catch (_) {}


  });





  zipAutoCheckbox.addEventListener('change', () => {


    try { chrome.storage.local.set({ uas_zip_auto: !!zipAutoCheckbox.checked }); } catch (_) {}


  });





  function getZipDownloadList() {


    return Array.from(state.readyToDownload.entries()).map(([key, item]) => ({


      key,


      url: item.url,


      previewUrl: item.previewUrl || item.url,


      isVideo: !!item.isVideo,


      isAudio: !!item.isAudio,


      kind: item.kind || (item.isAudio ? 'audio' : (item.isVideo ? 'video' : 'image')),


      fileName: item.fileName || '',


      candidates: uasContentNormalizeCandidates(item),


      pageUrl: item.pageUrl || window.location.href,


      sourceUrl: item.sourceUrl || item.url || '',


      mediaInfo: uasContentAttachMediaInfo(item, key)


    }));


  }





  async function startZipDownload() {


    if (!isContextValid()) {


      alert(t('extensionUpdated'));


      return;


    }


    if (isTelegram) {


      alert(t('telegramZipUnsupported'));


      return;


    }





    let list = getZipDownloadList();


    if (!list.length) {


      alert(t('noImagesForZip'));


      return;


    }





    if (isPoipiku) {
      list = await poipikuPrepareDownloadList(list);
    }

    if (isEHentai) {
      list = await ehentaiPrepareDownloadList(list);
      if (!list.length) {
        alert(t('ehentaiOriginalFailed'));
        return;
      }
    }

    if (state.isScrolling) stopAutoScroll();





    downloadBtn.disabled = true;


    downloadBtn.style.setProperty('opacity', '0.7', 'important');


    state.inProgressKeys = new Set(list.map(i => i.key));


    state.readyToDownload.clear();


    persistQueue();


    updateUI();





    try {


      chrome.runtime.sendMessage({


        action: 'download_zip_batch',


        items: list,


        folderName: getCleanFolderName(),


        saveToHistory: historyCheckbox.checked,


        allowFallback: fallbackCheckbox.checked,


        site: siteKey


      });


    } catch (_) {


      state.inProgressKeys.clear();


      state.readyToDownload = new Map(list.map(item => [item.key, item]));


      downloadBtn.disabled = false;


      downloadBtn.style.setProperty('opacity', '1', 'important');


      updateUI();


      alert(t('zipStartFailed'));


    }


  }





  zipBtn.addEventListener('click', startZipDownload);





  downloadBtn.addEventListener('click', async () => {


    if (!isContextValid()) {


      alert(t('extensionUpdated'));


      return;


    }


    if (state.isScrolling) stopAutoScroll();


    if (state.readyToDownload.size === 0) return alert(t('noImages'));





    const zipThreshold = Math.max(2, parseInt(zipThresholdInput.value, 10) || 25);


    if (!isTelegram && zipAutoCheckbox.checked && state.readyToDownload.size >= zipThreshold) {


      startZipDownload();


      return;


    }





    // [telegram-common-download-payload-v2]


    // [telegram-queue-normalize-v4]


    let list = Array.from(state.readyToDownload.entries()).map(([key, item]) => {











    if (isTelegram) {


        try {


          const canonical = window.__UAS_TELEGRAM_BRIDGE__?.getItemByKey?.(key);


          if (canonical) {


            return {


              key,


              url: canonical.url || item.url,


              previewUrl: canonical.previewUrl || item.previewUrl,


              isVideo: !!canonical.isVideo,


              isAudio: !!canonical.isAudio,


              kind: canonical.kind || item.kind || (canonical.isAudio ? 'audio' : (canonical.isVideo ? 'video' : 'image')),


              fileName: canonical.fileName || item.fileName || '',


              telegramMessageId: canonical.telegramMessageId || item.telegramMessageId || '',


              lazyAlbum: !!(canonical.lazyAlbum || item.lazyAlbum),


            };


          }


        } catch (_) {}


      }


      // [uas-wallhaven-catalog-download-fix-v1]
      // The normal download payload used to discard sourceUrl/candidates/metadata.
      // On Wallhaven catalog pages url is a thumbnail, while sourceUrl is /w/<id>.
      // Preserve the complete Wallhaven queue item so background.js can resolve
      // the exact wallpaper just like it does on a direct /w/<id> page.
      if (isWallhaven) {
        return {
          ...item,
          key,
          url: item.url,
          previewUrl: item.previewUrl,
          isVideo: !!item.isVideo,
          isAudio: !!item.isAudio,
          kind: item.kind || (item.isAudio ? 'audio' : (item.isVideo ? 'video' : 'image')),
          fileName: item.fileName || '',
          telegramMessageId: item.telegramMessageId || '',
          lazyAlbum: !!item.lazyAlbum,
          candidates: Array.isArray(item.candidates) ? item.candidates : [],
          pageUrl: item.pageUrl || window.location.href,
          sourceUrl: item.sourceUrl || item.url || '',
          metadata: item.metadata && typeof item.metadata === 'object' ? item.metadata : {}
        };
      }

      return {
        key,
        url: item.url,
        previewUrl: item.previewUrl,
        isVideo: !!item.isVideo,
        isAudio: !!item.isAudio,
        kind: item.kind || (item.isAudio ? 'audio' : (item.isVideo ? 'video' : 'image')),
        fileName: item.fileName || '',
        telegramMessageId: item.telegramMessageId || '',
        lazyAlbum: !!item.lazyAlbum,
      };


    });

    list = list.map(item => ({
      ...item,
      candidates: uasContentNormalizeCandidates(item),
      pageUrl: item.pageUrl || window.location.href,
      sourceUrl: item.sourceUrl || item.url || '',
      mediaInfo: uasContentAttachMediaInfo(item, item.key)
    }));


    if (isPoipiku) {
      list = await poipikuPrepareDownloadList(list);
      if (!list.length) {
        alert(t('noImages'));
        return;
      }
    }

    if (isEHentai) {
      list = await ehentaiPrepareDownloadList(list);
      if (!list.length) {
        alert(t('ehentaiOriginalFailed'));
        return;
      }
    }

    downloadBtn.disabled = true;


    downloadBtn.style.setProperty('opacity', '0.7', 'important');





    state.inProgressKeys = new Set(list.map(i => i.key));


    state.readyToDownload.clear();





    // [telegram-common-download-v2]











    if (isTelegram) {


      const bridge = window.__UAS_TELEGRAM_BRIDGE__;


      if (!bridge || typeof bridge.downloadBatch !== 'function') {


        alert(t('telegramNotReady'));


        state.inProgressKeys.clear();


        state.readyToDownload = new Map(list.map(item => [item.key, item]));


        downloadBtn.disabled = false;


        downloadBtn.style.setProperty('opacity', '1', 'important');


        updateUI();


        return;


      }


      // [telegram-silent-batch-await-v6]


      Promise.resolve(bridge.downloadBatch(list, {


        folderName: getCleanFolderName(),


        saveToHistory: historyCheckbox.checked,


        allowFallback: fallbackCheckbox.checked,


      })).catch(() => {});


      updateUI();


      return;


    }





    document.querySelectorAll('.art-saver-card-toggle').forEach(t => {


      if (typeof t._updateVisual === 'function') t._updateVisual();


    });





    try {


      chrome.runtime.sendMessage({


        action: 'download_batch',


        items: list,


        folderName: getCleanFolderName(),


        saveToHistory: historyCheckbox.checked,


        allowFallback: fallbackCheckbox.checked,


        site: siteKey


      });


    } catch (e) {


      alert(t('requestFailed'));


      state.inProgressKeys.clear();


      downloadBtn.disabled = false;


      downloadBtn.style.setProperty('opacity', '1', 'important');


      return;


    }





    updateUI();


  });





  // [telegram-common-bridge-v2]


  window.__UAS_TELEGRAM_COMMON__ = {


    getFolderName: () => getCleanFolderName(),


    rescan: () => scanImages(),


    onTelegramBatchStart: (total) => {


      progressBarTrack.style.setProperty('display', 'block', 'important');


      progressBarFill.style.setProperty('width', '0%', 'important');


      downloadBtn.disabled = true;


      downloadBtn.style.setProperty('opacity', '0.7', 'important');


      downloadBtn.innerHTML = `<span>✈️</span><span>0/${total} (0%)</span>`;


    },


    onTelegramBatchProgress: (current, total) => {


      const pct = total > 0 ? Math.min(100, Math.round((current * 100) / total)) : 0;


      progressBarTrack.style.setProperty('display', 'block', 'important');


      progressBarFill.style.setProperty('width', `${pct}%`, 'important');


      downloadBtn.innerHTML = `<span>✈️</span><span>${current}/${total} (${pct}%)</span>`;


    },


    onTelegramMediaProgress: (key, received, total, fileName, status) => {


      if (!total) return;


      const pct = Math.min(100, Math.round((received * 100) / total));


      progressBarTrack.style.setProperty('display', 'block', 'important');


      progressBarFill.style.setProperty('width', `${pct}%`, 'important');


    },


    onTelegramItemSuccess: async (meta, options = {}) => {


      const key = meta?.key;


      if (!key) return;


      state.inProgressKeys.delete(key);


      state.readyToDownload.delete(key);





      const saveHistory = options.saveToHistory !== undefined ? !!options.saveToHistory : historyCheckbox.checked;


      if (saveHistory) {


        state.downloadedHistory.add(key);


        try {


          const data = await chrome.storage.local.get([`downloaded_${siteKey}`, `history_meta_${siteKey}`]);


          const currentDownloaded = new Set(data[`downloaded_${siteKey}`] || []);


          currentDownloaded.add(key);


          for (const k of state.downloadedHistory) currentDownloaded.add(k);


          state.downloadedHistory = currentDownloaded;





          const metaMap = data[`history_meta_${siteKey}`] || {};


          metaMap[key] = {


            url: meta.url || '',


            filename: meta.fileName || '',


            date: meta.date || new Date().toISOString(),


            kind: meta.kind || 'image'


          };


          await chrome.storage.local.set({


            [`downloaded_${siteKey}`]: Array.from(currentDownloaded),


            [`history_meta_${siteKey}`]: metaMap


          });


        } catch (e) {}


      }





      const keySelector = (typeof CSS !== 'undefined' && CSS.escape)


        ? `.art-saver-card-toggle[data-key="${CSS.escape(key)}"]`


        : `.art-saver-card-toggle[data-key="${key}"]`;


      document.querySelectorAll(keySelector).forEach(t => {


        if (typeof t._updateVisual === 'function') t._updateVisual();


      });


      persistQueue();


      updateUI();


    },


    // [telegram-quality-v7]


    onTelegramItemError: (meta) => {


      const key = meta?.key;


      if (!key) return;





      state.inProgressKeys.delete(key);





      // Keep the canonical Telegram item so a failed lazy-album download can be


      // retried manually without losing telegramMessageId / lazyAlbum / element.


      let canonical = null;


      try {


        canonical = window.__UAS_TELEGRAM_BRIDGE__?.getItemByKey?.(key) || null;


      } catch (_) {}





      if (!state.ignoredKeys.has(key)) {


        const item = canonical || meta;


        state.readyToDownload.set(key, {


          url: item.url || meta.url || '',


          previewUrl: item.previewUrl || item.url || meta.url || '',


          isVideo: !!item.isVideo || item.kind === 'video' || meta.kind === 'video',


          isAudio: !!item.isAudio || item.kind === 'audio' || meta.kind === 'audio',


          kind: item.kind || meta.kind || 'image',


          fileName: item.fileName || meta.fileName || '',


          telegramMessageId: item.telegramMessageId || meta.telegramMessageId || '',


          lazyAlbum: !!(item.lazyAlbum || meta.lazyAlbum),


        });


      }





      persistQueue();


      updateUI();


    },


    onTelegramBatchComplete: async () => {


      state.inProgressKeys.clear();


      for (const k of state.downloadedHistory) {


        state.readyToDownload.delete(k);


      }


      try {


        const data = await chrome.storage.local.get(`downloaded_${siteKey}`);


        const merged = new Set([...(data[`downloaded_${siteKey}`] || []), ...state.downloadedHistory]);


        state.downloadedHistory = merged;


        await chrome.storage.local.set({ [`downloaded_${siteKey}`]: Array.from(merged) });


        await exportHistoryToDisk(siteKey);


      } catch (e) {}


      persistQueue();


      progressBarFill.style.setProperty('width', '100%', 'important');


      downloadBtn.innerHTML = `<span>✈️</span><span>${t('done')}</span>`;


      setTimeout(() => {


        progressBarTrack.style.setProperty('display', 'none', 'important');


        progressBarFill.style.setProperty('width', '0%', 'important');


        downloadBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></span><span>${t('download')}</span>`;


        downloadBtn.disabled = false;


        downloadBtn.style.setProperty('opacity', '1', 'important');


        updateUI();


      }, 1000);


    }


  };





  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === 'download_state' && msg.key) {
      state.downloadStates.set(msg.key, msg);
      uasSetLifecycleState(msg.key, msg.state || 'unknown', { download: msg });
      if (msg.state === 'failed' || msg.state === 'completed' || msg.state === 'saved') state.inProgressKeys.delete(msg.key);
      persistQueue();
      const keySelector = (typeof CSS !== 'undefined' && CSS.escape) ? `.art-saver-card-toggle[data-key="${CSS.escape(msg.key)}"]` : `.art-saver-card-toggle[data-key="${msg.key}"]`;
      document.querySelectorAll(keySelector).forEach(t => { if (typeof t._updateVisual === 'function') t._updateVisual(); });
      updateUI();
      return;
    }


    if (msg.action === 'download_progress') {


      const pct = Math.min(100, Math.round((msg.current / msg.total) * 100));


      progressBarTrack.style.setProperty('display', 'block', 'important');


      progressBarFill.style.setProperty('width', `${pct}%`, 'important');


      downloadBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span><span>${msg.current}/${msg.total} (${pct}%)</span>`;


      if (msg.current >= msg.total) {


        setTimeout(() => {


          progressBarTrack.style.setProperty('display', 'none', 'important');


          progressBarFill.style.setProperty('width', '0%', 'important');


          downloadBtn.innerHTML = `<span><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg></span><span>${t('download')}</span>`;


          downloadBtn.disabled = false;


          downloadBtn.style.setProperty('opacity', '1', 'important');


        }, 1500);


      }


    } else if (msg.action === 'item_download_success' && msg.key) {


      state.inProgressKeys.delete(msg.key);


      state.downloadedHistory.add(msg.key);
      state.downloadStates.set(msg.key, { key: msg.key, state: 'downloaded', timestamp: new Date().toISOString(), identity: msg.identity || '' });
      uasSetLifecycleState(msg.key, 'downloaded');


      state.readyToDownload.delete(msg.key);


      persistQueue();


      const keySelector = (typeof CSS !== 'undefined' && CSS.escape)


        ? `.art-saver-card-toggle[data-key="${CSS.escape(msg.key)}"]`


        : `.art-saver-card-toggle[data-key="${msg.key}"]`;


      document.querySelectorAll(keySelector).forEach(t => {


        if (typeof t._updateVisual === 'function') t._updateVisual();


      });


      updateUI();


    } else if (msg.action === 'download_batch_complete' && Array.isArray(msg.downloadedKeys)) {


      state.inProgressKeys.clear();


      state.downloadedHistory = new Set(msg.downloadedKeys);
      for (const k of state.downloadedHistory) uasSetLifecycleState(k, 'downloaded');


      persistQueue();


      document.querySelectorAll('.art-saver-card-toggle').forEach(t => {


        if (typeof t._updateVisual === 'function') t._updateVisual();


      });


      updateUI();


    }


  });





  clearBtn.addEventListener('click', async () => {


    if (!isContextValid()) return;


    if (confirm(t('clearHistoryConfirm', { site: currentTheme.name }))) {


      try {


        await chrome.storage.local.remove([`downloaded_${siteKey}`, `ignored_${siteKey}`, `ready_${siteKey}`, `history_meta_${siteKey}`]);


        chrome.runtime.sendMessage({ action: 'clear_download_cache', site: siteKey }).catch(() => {});


      } catch (e) {}


      state.downloadedHistory.clear();


      state.ignoredKeys.clear();


      state.readyToDownload.clear();


      state.clearedNewKeys.clear();


      document.querySelectorAll('.art-saver-card-toggle').forEach(btn => btn.remove());


      for (const entry of bskyOverlayEntries.values()) { try { entry.btn.remove(); } catch (_) {} }


      bskyOverlayEntries.clear();


      scanImages();


      updateUI();


    }


  });





  const navInterval = setInterval(() => {


    if (!isContextValid()) {


      clearInterval(navInterval);


      return;


    }




    if (window.location.href !== currentUrl) {


      currentUrl = window.location.href;


      state.clearedNewKeys.clear();


      // [persistent-new-counter-v2] Не стираем найденные элементы при


      // внутренней навигации: они остаются новыми до скачивания/исключения.


      scanImages();


      updateUI();


    }


  }, 600);





  


  // Горячие клавиши: Alt+S (скролл), Alt+D (скачать), Alt+A (выбрать/снять всё)


  window.addEventListener('keydown', (e) => {


    if (e.altKey && (e.code === 'KeyS' || e.key === 's' || e.key === 'ы')) {


      e.preventDefault();


      scrollBtn.click();


    } else if (e.altKey && (e.code === 'KeyD' || e.key === 'd' || e.key === 'в')) {


      e.preventDefault();


      downloadBtn.click();


    } else if (e.altKey && (e.code === 'KeyA' || e.key === 'a' || e.key === 'ф')) {


      e.preventDefault();


      if (typeof deselectAllBtn !== 'undefined') deselectAllBtn.click();


    }


  });


  loadSettings().catch(() => {}).then(() => {


    if (!isContextValid()) return;


    const observer = new MutationObserver((mutations) => {
  


      if (!isContextValid()) {


        try { observer.disconnect(); } catch (e) {}


        return;


      }


      if (mutations.every(m => Array.from(m.addedNodes).every(n => n.classList?.contains('art-saver-card-toggle') || n.classList?.contains('art-saver-card-wrap') || n.classList?.contains('art-saver-plurk-badges') || n.id === 'pin-batch-downloader-host'))) return;


      clearTimeout(scanDebounceTimer);


      scanDebounceTimer = setTimeout(scanImages, 250);


    });


    const observerTarget = document.body || document.documentElement;
    if (observerTarget) observer.observe(observerTarget, { childList: true, subtree: true });


    scanImages();


    updateUI();











    if (isTelegram) {


      let bridgeAttempts = 0;


      const bridgeInterval = setInterval(() => {


        bridgeAttempts++;


        if (window.__UAS_TELEGRAM_BRIDGE__ || bridgeAttempts > 30) {


          scanImages();


          clearInterval(bridgeInterval);


        }


      }, 300);


    }


  });


})();





setInterval(() => {


  try {


    // --- Обработка Rule34.xxx ---


    // (Использует общую систему attachCheckbox и scanImages)





    // --- Обработка Rule34.gg ---


    if (/rule34\.gg/i.test(location.hostname)) {


      scanRule34GgCards();


      fixSinglePostVideo();


    }





    // media filter unified in shadow DOM


  } catch(e) {}


}, 800);