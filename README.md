# Universal Art Saver: Batch Downloader

> A browser extension for batch-saving images and videos from a wide range of art, image-board, social, and media sites.

---

## Русская версия

### О проекте

**Universal Art Saver: Batch Downloader** — это расширение для браузера, предназначенное для массового скачивания медиа с поддерживаемых сайтов. Оно добавляет единый компактный интерфейс поверх разных сайтов и старается скрыть различия между их разметкой, preview/original URL, `blob:`-ресурсами, media viewer и динамически загружаемым контентом.

Проект ориентирован не только на обычное скачивание картинок, но и на сценарии, где на странице много медиа, оригинальный URL отличается от preview, содержимое появляется после прокрутки, а сайт использует нестандартный viewer или клиентскую загрузку.

### Что изменилось в версии 5.6

- добавлен переключатель `Русский / English` в настройках панели;
- выбранный язык сохраняется между страницами и перезапусками;
- основные подписи, подсказки, статусы, подтверждения и диагностика переведены на английский;
- Telegram Web использует ту же настройку языка для своих кнопок и статуса сохранения;
- обновлена краткая `manifest.json`-description для публикации проекта и добавлена подробная документация `README.md`.

### Основные возможности

- пакетный выбор изображений и видео;
- единая плавающая панель поверх сайта;
- режимы **Все / Фото / Видео**;
- автоматическая прокрутка страницы для поиска нового контента;
- ограничение количества найденных файлов;
- история скачиваний и защита от повторной загрузки;
- отдельный режим скачивания preview, когда оригинал недоступен;
- автоматическая упаковка выбранных файлов в ZIP;
- ручной запуск ZIP для выбранных элементов;
- настраиваемый порог автоматического ZIP;
- постоянная очередь найденных элементов, сохраняемая в `chrome.storage.local`;
- визуальные статусы элементов: найден, исключён, скачивается, уже скачан и т. д.;
- расширенная диагностика MediaCore / adapter / candidate chain;
- поддержка Telegram Web через отдельный Telegram-модуль;
- работа с `blob:`-медиа и viewer-страницами там, где это требуется конкретному адаптеру;
- сохранение истории ссылок в текстовый файл;
- горячие клавиши `Alt+S`, `Alt+D`, `Alt+A`;
- **переключение интерфейса RU / EN с сохранением выбранного языка**.

### Локализация

В настройках панели появился переключатель языка:

- `Русский`
- `English`

Выбранный язык сохраняется в `chrome.storage.local` под ключом `uas_language`. Переключение применяется без перезагрузки текущей страницы для основной панели и синхронизируется с Telegram-модулем.

### Диагностика и надёжность

Расширение содержит отдельный режим диагностики, который может показать состояние core, адаптера, candidate chain, очередей и результатов media probes. Это удобно при добавлении новых сайтов или при разборе случаев, когда сайт отдаёт preview вместо оригинала.

В коде используются отдельные адаптерные ветки для различных сайтов, а также механизмы повторного поиска и нормализации media URL. При этом конкретные возможности зависят от разметки и ограничений каждого сайта.

### Поддерживаемые сайты

В текущей версии в коде присутствуют адаптеры/темы для большого набора сайтов, включая:

**Мессенджеры и социальные платформы:** Telegram, Bluesky, Reddit, VK, Plurk, Pinterest, pixiv, Wykop, JoyReactor, Sotwe, PTTweb.

**Каталоги, imageboards и booru:** Gelbooru, Safebooru, AIBooru, Donmai, Konachan, Rule34, Rule34.GG, R34 App, booru.io, Booru, Warosu, Cool18, другие сайты из набора адаптеров.

**Арт/изображения и специализированные сайты:** Wallhaven, POIPIKU, E-Hentai, PixAI, Moeimg, Vanlett, Fevian и другие специализированные источники.

**Нишевые и японские источники:** FANZA, ComicHara, HentaiAnime-AI, KyaraBetsuNijiero, EromanIDC, Kimootoko, Ichinuke, Erokan, Vanilla-Rock, TruyenHentai, Hentai-Witch, FemmeDoll, Nijiero Archive, Erocon, Hadasirori, Nijityeki, M4ex и другие.

**Именованные адаптеры/темы текущего исходника (58):** Telegram, Bluesky, Wallhaven, POIPIKU, E-Hentai, PixAI, AIBooru, Warosu, Cool18, Plurk, Pinterest, pixiv, Reddit, ВКонтакте, Skebetter, FANZA, Konachan, KURO, booru.io, Gelbooru, Safebooru, Donmai, R34 App, Rule34.GG, Fevian, Vanlett, Rule34, Booru, PTTweb, Wykop, 同人響, にじファンタジア, Moeimg, Situero, LoveLiveForever, Nukigazo, ComicHara, HentaiAnime-AI, KyaraBetsuNijiero, EromanIDC, Kimootoko, Ichinuke, Erokan, Vanilla-Rock, TruyenHentai, Sotwe, Scrolller, 萌えエロ画像, Ero-Anigif, Hentai-Witch, FemmeDoll, Nijiero Archive, Erocon, Hadasirori, Nijityeki, M4ex, IslaDeMuerta, JoyReactor.

> Название адаптера/темы не гарантирует одинаковый уровень поддержки всех функций на конкретном сайте. Качество зависит от текущего HTML/JS сайта. Для части площадок используются специальные адаптеры, viewer extraction или дополнительные fallback-механизмы.

### Установка из исходников

1. Скачайте или клонируйте репозиторий.
2. Откройте `chrome://extensions/` в Chrome или совместимом браузере.
3. Включите **Developer mode / Режим разработчика**.
4. Выберите **Load unpacked / Загрузить распакованное расширение**.
5. Укажите папку, содержащую `manifest.json`.
6. Откройте поддерживаемый сайт и дождитесь появления панели Universal Art Saver.

### Обновление

После замены файлов в папке расширения откройте `chrome://extensions/` и нажмите **Reload / Обновить** у расширения. Затем при необходимости обновите открытую страницу сайта.

### Структура

- `manifest.json` — манифест Manifest V3 и список разрешений/сайтов;
- `background.js` — service worker, загрузка, история, ZIP и общая логика фоновых операций;
- `content.js` — обнаружение медиа, site adapters, выбор элементов, плавающая панель и UI;
- `telegram.js` — специализированная интеграция с Telegram Web;
- `apply_fixes.py` — точечные автоматические исправления/патчи исходников.

### Горячие клавиши

| Комбинация | Действие |
|---|---|
| `Alt + S` | Запустить / остановить автопрокрутку |
| `Alt + D` | Скачать выбранные медиа |
| `Alt + A` | Выбрать всё / снять выбор |

### Примечание по поддержке сайтов

Универсального способа получить оригинальный медиа-файл на всех сайтах не существует. Поэтому расширение использует site-specific adapters, fallback-поиск, candidate chains, viewer extraction и нормализацию URL там, где это необходимо. Если сайт меняет API, HTML или структуру media viewer, соответствующий адаптер может потребовать отдельного обновления.

---

## English version

### About

**Universal Art Saver: Batch Downloader** is a browser extension for batch-saving images and videos from a broad set of supported art, image-board, social, and media websites. It provides a compact unified UI and hides many site-specific differences such as preview/original URLs, `blob:` media, viewer pages, and dynamically loaded content.

The project is designed for more than simple image saving: it targets pages with large media collections, client-side viewers, dynamic feeds, non-standard original URLs, and sites where the original resource must be resolved separately from the visible preview.

### Main features

- batch selection of images and videos;
- a unified floating control panel;
- **All / Photos / Videos** filtering;
- automatic scrolling to discover additional media;
- configurable item limits;
- persistent download history and duplicate protection;
- optional preview fallback when the original is unavailable;
- automatic ZIP creation for large selections;
- manual ZIP download for selected items;
- configurable automatic ZIP threshold;
- persistent media queue stored in `chrome.storage.local`;
- visual item states such as queued, excluded, downloading, and already downloaded;
- extended MediaCore / adapter / candidate-chain diagnostics;
- dedicated Telegram Web integration;
- support for `blob:` media and viewer-based extraction where required by a site adapter;
- export of link history to a text file;
- keyboard shortcuts: `Alt+S`, `Alt+D`, `Alt+A`;
- **RU/EN UI language switching with persistent storage**.

### Localization

The Settings panel includes a language selector:

- `Русский`
- `English`

The selected language is stored in `chrome.storage.local` under `uas_language`. Switching is applied immediately to the main panel and the preference is also followed by the Telegram module.

### Diagnostics and robustness

The extension includes a dedicated diagnostics view that can expose core status, adapter information, candidate-chain capabilities, queue state, and media probe results. This is useful when debugging a new site adapter or investigating cases where a site exposes only a preview URL instead of the original media resource.

The implementation uses site-specific adapters and URL normalization/fallback logic where necessary. Actual capabilities depend on the current markup, APIs, viewer behavior, and restrictions of each target website.

### Supported websites

The current source contains adapters/themes for a large set of websites, including:

**Messaging and social platforms:** Telegram, Bluesky, Reddit, VK, Plurk, Pinterest, pixiv, Wykop, JoyReactor, Sotwe, PTTweb.

**Catalogs, imageboards, and booru-style sites:** Gelbooru, Safebooru, AIBooru, Donmai, Konachan, Rule34, Rule34.GG, R34 App, booru.io, Booru, Warosu, Cool18, and additional sources covered by the adapter set.

**Art and image-focused services:** Wallhaven, POIPIKU, E-Hentai, PixAI, Moeimg, Vanlett, Fevian, and additional specialized sources.

**Niche and Japanese sources:** FANZA, ComicHara, HentaiAnime-AI, KyaraBetsuNijiero, EromanIDC, Kimootoko, Ichinuke, Erokan, Vanilla-Rock, TruyenHentai, Hentai-Witch, FemmeDoll, Nijiero Archive, Erocon, Hadasirori, Nijityeki, M4ex, and others.

**Named adapter/theme entries in the current source (58):** Telegram, Bluesky, Wallhaven, POIPIKU, E-Hentai, PixAI, AIBooru, Warosu, Cool18, Plurk, Pinterest, pixiv, Reddit, ВКонтакте, Skebetter, FANZA, Konachan, KURO, booru.io, Gelbooru, Safebooru, Donmai, R34 App, Rule34.GG, Fevian, Vanlett, Rule34, Booru, PTTweb, Wykop, 同人響, にじファンタジア, Moeimg, Situero, LoveLiveForever, Nukigazo, ComicHara, HentaiAnime-AI, KyaraBetsuNijiero, EromanIDC, Kimootoko, Ichinuke, Erokan, Vanilla-Rock, TruyenHentai, Sotwe, Scrolller, 萌えエロ画像, Ero-Anigif, Hentai-Witch, FemmeDoll, Nijiero Archive, Erocon, Hadasirori, Nijityeki, M4ex, IslaDeMuerta, JoyReactor.

> An adapter/theme entry does not imply identical feature coverage on every site. Support depends on the site's current HTML/JS structure. Some platforms require dedicated adapters, viewer extraction, or additional fallback logic.

### Installation from source

1. Download or clone the repository.
2. Open `chrome://extensions/` in Chrome or a compatible Chromium-based browser.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the folder containing `manifest.json`.
6. Open a supported website and wait for the Universal Art Saver panel to appear.

### Updating

After replacing files in the extension folder, open `chrome://extensions/` and click **Reload** for the extension. Reload the target website page when necessary.

### Project structure

- `manifest.json` — Manifest V3 configuration, permissions, and site matches;
- `background.js` — service worker, downloads, history, ZIP handling, and background operations;
- `content.js` — media detection, site adapters, selection controls, floating UI, and page-side logic;
- `telegram.js` — specialized Telegram Web integration;
- `apply_fixes.py` — targeted source patching/maintenance script.

### Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Alt + S` | Start / stop auto-scroll |
| `Alt + D` | Download selected media |
| `Alt + A` | Select all / unselect all |

### Support model

There is no single universal method for resolving an original media file across every website. The extension therefore combines site-specific adapters, fallbacks, candidate chains, viewer extraction, and URL normalization when needed. A website change to its HTML, API, or media viewer can require a corresponding adapter update.

---

## GitHub repository tagline

**RU:** Пакетное скачивание изображений и видео с множества сайтов: Telegram Web, Wallhaven, E-Hentai, booru/imageboards, соцсети, ZIP, история, диагностика и интерфейс RU/EN.

**EN:** Batch image/video downloader for many art, image-board, social and media sites — Telegram Web, Wallhaven, E-Hentai, ZIP, history, diagnostics, and RU/EN UI.

## GitHub About description (recommended)

**Universal Art Saver: Batch Downloader — a Manifest V3 browser extension for batch-saving images/videos across many media sites, with site adapters, Telegram Web support, ZIP, persistent history, diagnostics, and RU/EN localization.**
