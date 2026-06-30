// Translation Dictionary
const translations = {
  en: {
    nav_features: "Features",
    nav_demo: "Interactive Demo",
    nav_privacy: "Privacy",
    nav_faq: "FAQ",
    nav_download: "Download AAB",
    
    hero_badge: "<span class='badge-icon'>⚡</span> Privacy-First On-Device AI",
    hero_title: "Turn Scattered Thoughts into a <span class='gradient-text'>Clear Plan</span>",
    hero_subtitle: "VoxFlow uses secure, on-device artificial intelligence to transcribe your brain dumps and instantly extract structured tasks, deadlines, and priorities. Your voice never leaves your device.",
    hero_download: '<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg> Download VoxFlow AAB',
    hero_demo: '<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg> Try Demo',
    
    meta_offline: "✓ Fully Offline Processing",
    meta_sqlite: "✓ Local Encrypted SQLite",
    meta_support: "✓ iOS & Android Support",
    
    wave_heading: "Say anything. VoxFlow handles the structure.",
    
    features_title: "Designed for <span class='gradient-text'>High-Focus Productivity</span>",
    features_subtitle: "A collection of premium features built with local security at the absolute core.",
    
    feat1_title: "Voice Brain Dump",
    feat1_desc: "Simply tap record and speak naturally. Let your ideas flow without worrying about formatting, grammar, or typing limits.",
    feat2_title: "On-Device Transcribe",
    feat2_desc: "Uses Whisper models running locally on your device hardware. Your voice prints never reach external servers.",
    feat3_title: "AI Task Extraction",
    feat3_desc: "Our intelligent on-device parsing engine finds deadlines, priorities (High/Med/Low), and tags directly from your spoken text.",
    feat4_title: "Adaptive Focus Mode",
    feat4_desc: "Launch dynamic focus sessions aligned with your tasks. Protects your flow state with micro-break suggestions.",
    feat5_title: "Local Heatmaps & Insights",
    feat5_desc: "Track completed tasks and focus sessions with a beautiful Github-style activity heatmap, fully generated offline.",
    feat6_title: "Secure Encrypted Sync",
    feat6_desc: "Opt-in to cloud backups that are fully encrypted on-device before sync, keeping your data secure even in the cloud.",
    
    demo_title: "Experience <span class='gradient-text'>VoxFlow in Action</span>",
    demo_subtitle: "Try the simulator below. Click a prompt to see how VoxFlow structures thoughts.",
    sim_header: "Select a voice prompt to dump:",
    
    prompt1_title: "Product Idea Brainstorm",
    prompt1_text: '"I need to design a landing page by Friday, also call Anna tomorrow to discuss..."',
    prompt2_title: "Chaotic Meeting Catchup",
    prompt2_text: '"Review marketing budget this evening. High priority. Need to buy milk today..."',
    prompt3_title: "Evening Thoughts Release",
    prompt3_text: '"Prepare presentation slides. Low priority. Sign up for gym before Sunday..."',
    
    btn_simulate: "🎙️ Run Voice Simulation",
    mock_active: "Active",
    mock_transcript_label: "ON-DEVICE TRANSCRIPT",
    mock_tasks_label: "EXTRACTED TASKS",
    mock_transcript_placeholder: "Select a prompt and click \"Run Voice Simulation\" to watch offline transcription...",
    mock_tasks_placeholder: "Tasks will be generated automatically using local AI...",
    
    privacy_title: "Your Data Stays Yours. <span class='accent-cyan'>Period.</span>",
    privacy_lead: "We believe that absolute privacy is essential for true mental clarity. When dumping raw thoughts, you shouldn't worry about third-party tracking, profiling, or cloud storage leaks.",
    
    priv1_title: "No Audio Uploads",
    priv1_desc: "Our app transcribes audio utilizing on-device model weights. We never transmit audio bytes to any server.",
    priv2_title: "Zero Ads & Tracking",
    priv2_desc: "We do not use advertising APIs, profiling SDKs, or sell tracking tokens. Absolutely zero telemetry without explicit consent.",
    priv3_title: "Local Keys",
    priv3_desc: "Your local SQLite database is encrypted. Decryption tokens are protected by standard iOS Keychain and Android Keystore hardware.",
    
    faq_title: "Frequently Asked <span class='gradient-text'>Questions</span>",
    faq1_q: "How does VoxFlow run AI completely offline?",
    faq1_a: "We bundle optimized Whisper models and smart parsing engines directly inside the application bundle. Modern mobile CPUs are extremely fast and process these models on-device in real time.",
    faq2_q: "Is my database encrypted?",
    faq2_a: "Yes. The app uses an encrypted SQLite database via Drift. Decryption keys are stored inside secure system-level keystores that can only be unlocked by the application process.",
    faq3_q: "Can I sync my data to other devices?",
    faq3_a: "Yes, but it is entirely optional. If you choose to enable cloud backup, your data is encrypted with your private key before being sent to our secure databases.",
    faq4_q: "Where can I contact support?",
    faq4_a: "You can reach our team at <a href='mailto:support@voxflow.uk' class='accent-cyan'>support@voxflow.uk</a> for any feature requests, bug reports, or general feedback.",
    
    contact_title: "Get in <span class='gradient-text'>Touch</span>",
    contact_subtitle: "Have a question or feedback? We'd love to hear from you.",
    contact_name: "Name",
    contact_email: "Email",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_submit: "Send Message",
    contact_success: "Message sent successfully!",
    contact_error: "Error sending message. Please try again later.",
    
    footer_desc: "Privacy-first structured voice thoughts app.",
    footer_product: "Product",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_copy: "© 2026 VoxFlow. All rights reserved."
  },
  ru: {
    nav_features: "Функции",
    nav_demo: "Демо-симулятор",
    nav_privacy: "Приватность",
    nav_faq: "Частые вопросы",
    nav_download: "Скачать AAB",
    
    hero_badge: "<span class='badge-icon'>⚡</span> Локальный ИИ на устройстве",
    hero_title: "Превратите хаос мыслей в <span class='gradient-text'>чёткий план</span>",
    hero_subtitle: "VoxFlow использует защищенный искусственный интеллект прямо на вашем устройстве для расшифровки голосовых записей и мгновенного создания списка задач с дедлайнами и приоритетами. Аудио никогда не покидает телефон.",
    hero_download: '<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg> Скачать VoxFlow AAB',
    hero_demo: '<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg> Демо-версия',
    
    meta_offline: "✓ Полностью оффлайн работа",
    meta_sqlite: "✓ Локальная зашифрованная SQLite",
    meta_support: "✓ Поддержка iOS и Android",
    
    wave_heading: "Говорите всё, что думаете. VoxFlow разложит по полочкам.",
    
    features_title: "Разработано для <span class='gradient-text'>максимального фокуса</span>",
    features_subtitle: "Набор премиальных функций с локальной безопасностью на самом глубоком уровне.",
    
    feat1_title: "Голосовой сброс мыслей",
    feat1_desc: "Просто нажмите запись и говорите. Позвольте мыслям течь свободно, не беспокоясь о форматировании, грамматике и лимитах ввода.",
    feat2_title: "Оффлайн транскрипция",
    feat2_desc: "Модели Whisper работают локально на процессоре вашего устройства. Голосовые слепки никогда не отправляются в облако.",
    feat3_title: "Умное извлечение задач",
    feat3_desc: "Наш ИИ-движок парсинга находит дедлайны, приоритеты (Высокий/Средний/Низкий) и теги прямо из вашей разговорной речи.",
    feat4_title: "Адаптивный режим фокуса",
    feat4_desc: "Запускайте динамические сессии фокуса, привязанные к задачам. Приложение напомнит сделать полезный перерыв.",
    feat5_title: "Карты активности на месте",
    feat5_desc: "Отслеживайте выполненные задачи и время фокуса на красивом Github-style таймлайне активности полностью оффлайн.",
    feat6_title: "Зашифрованный бэкап",
    feat6_desc: "Опциональное резервное копирование в облако. Данные шифруются на вашем телефоне до отправки, ключ есть только у вас.",
    
    demo_title: "Попробуйте <span class='gradient-text'>VoxFlow в действии</span>",
    demo_subtitle: "Используйте симулятор ниже. Нажмите на любой шаблон, чтобы увидеть, как структурируются мысли.",
    sim_header: "Выберите голосовую заметку:",
    
    prompt1_title: "Мозговой штурм идеи продукта",
    prompt1_text: '"Мне нужно разработать лендинг к пятнице, а также позвонить Анне завтра для обсуждения..."',
    prompt2_title: "Хаотичный список дел с созвона",
    prompt2_text: '"Проверить маркетинговый бюджет этим вечером. Высокий приоритет. И еще купить молока сегодня..."',
    prompt3_title: "Вечерняя разгрузка мыслей",
    prompt3_text: '"Подготовить слайды для презентации. Низкий приоритет. Записаться в спортзал до воскресенья..."',
    
    btn_simulate: "🎙️ Запустить симуляцию голоса",
    mock_active: "Активен",
    mock_transcript_label: "ЛОКАЛЬНАЯ РАСШИФРОВКА",
    mock_tasks_label: "ИЗВЛЕЧЁННЫЕ ЗАДАЧИ",
    mock_transcript_placeholder: "Выберите фразу слева и нажмите кнопку для симуляции оффлайн-транскрибации...",
    mock_tasks_placeholder: "Задачи сгенерируются автоматически с помощью встроенного ИИ...",
    
    privacy_title: "Ваши данные принадлежат вам. <span class='accent-cyan'>Точка.</span>",
    privacy_lead: "Мы верим, что абсолютная приватность необходима для ясного ума. Выгружая мысли, вы не должны переживать о слежке рекламодателей или утечке облачных баз.",
    
    priv1_title: "Никаких загрузок аудио",
    priv1_desc: "Приложение распознает голос с помощью локальных весов нейросети. Мы никогда не передаем аудио на сервера.",
    priv2_title: "Без рекламы и трекеров",
    priv2_desc: "Мы не используем рекламные API, аналитические трекеры поведения или продажу токенов. Сбор данных полностью отсутствует.",
    priv3_title: "Локальные ключи",
    priv3_desc: "База данных SQLite зашифрована. Ключи дешифрования защищены на аппаратном уровне через iOS Keychain и Android Keystore.",
    
    faq_title: "Часто задаваемые <span class='gradient-text'>вопросы</span>",
    faq1_q: "Как VoxFlow работает без интернета?",
    faq1_a: "Оптимизированные Whisper-модели и алгоритмы анализа встроены прямо в установщик. Современные мобильные процессоры легко справляются с их запуском оффлайн.",
    faq2_q: "Правда ли база данных зашифрована?",
    faq2_a: "Да. Приложение использует зашифрованную БД SQLite (через Drift). Системное хранилище ключей гарантирует, что доступ получит только само приложение.",
    faq3_q: "Можно ли синхронизировать данные между устройствами?",
    faq3_a: "Да, но это на 100% добровольно. Облачное резервное копирование шифрует базу вашим приватным ключом прямо на телефоне перед отправкой.",
    faq4_q: "Куда писать при возникновении вопросов?",
    faq4_a: "Вы можете написать нашей команде на <a href='mailto:support@voxflow.uk' class='accent-cyan'>support@voxflow.uk</a>. Мы рады любым отзывам и предложениям!",
    
    contact_title: "Свяжитесь с <span class='gradient-text'>нами</span>",
    contact_subtitle: "У вас есть вопрос или предложение? Мы будем рады вас выслушать.",
    contact_name: "Ваше имя",
    contact_email: "Email",
    contact_subject: "Тема сообщения",
    contact_message: "Текст сообщения",
    contact_submit: "Отправить письмо",
    contact_success: "Сообщение успешно отправлено!",
    contact_error: "Ошибка отправки. Попробуйте позже.",
    
    footer_desc: "Приватный планировщик задач на основе вашего голоса.",
    footer_product: "Продукт",
    footer_legal: "Юридически",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования",
    footer_copy: "© 2026 VoxFlow. Все права защищены."
  },
  uk: {
    nav_features: "Функції",
    nav_demo: "Демо-симулятор",
    nav_privacy: "Приватність",
    nav_faq: "Питання",
    nav_download: "Завантажити AAB",
    
    hero_badge: "<span class='badge-icon'>⚡</span> Локальний ШІ на пристрої",
    hero_title: "Перетворіть хаос думок на <span class='gradient-text'>чіткий план</span>",
    hero_subtitle: "VoxFlow використовує безпечний штучний інтелект прямо на вашому пристрої для розшифрування голосових записів та миттєвого створення списку задач з дедлайнами та пріоритетами. Аудіо ніколи не залишає телефон.",
    hero_download: '<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg> Завантажити VoxFlow AAB',
    hero_demo: '<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg> Демо-версія',
    
    meta_offline: "✓ Повністю оффлайн робота",
    meta_sqlite: "✓ Локальна зашифрована SQLite",
    meta_support: "✓ Підтримка iOS та Android",
    
    wave_heading: "Говоріть усе, що думаєте. VoxFlow розкладе по поличках.",
    
    features_title: "Створено для <span class='gradient-text'>максимального фокусу</span>",
    features_subtitle: "Набір преміальних функцій з локальною безпекою на найглибшому рівні.",
    
    feat1_title: "Голосовий скид думок",
    feat1_desc: "Просто натисніть запис і говоріть. Дозвольте думкам текти вільно, не турбуючись про форматування, граматику чи ліміти введення.",
    feat2_title: "Оффлайн транскрипція",
    feat2_desc: "Моделі Whisper працюють локально на процесорі вашого пристрою. Голосові зліпки ніколи не надсилаються в хмару.",
    feat3_title: "Розумне вилучення задач",
    feat3_desc: "Наш ШІ-движок парсингу знаходить дедлайни, пріоритети (Високий/Середній/Низький) та теги прямо з вашого усного мовлення.",
    feat4_title: "Адаптивний режим фокусу",
    feat4_desc: "Запускайте динамічні сесії фокусу, прив'язані до ваших задач. Додаток нагадає зробити корисну перерву.",
    feat5_title: "Локальна мапа активності",
    feat5_desc: "Відстежуйте виконані завдання та час фокусування на красивому Github-style таймлайні активності повністю оффлайн.",
    feat6_title: "Зашифрований бекап",
    feat6_desc: "Опціональне резервне копіювання в хмару. База даних шифрується на телефоні перед відправкою, ключ є тільки у вас.",
    
    demo_title: "Спробуйте <span class='gradient-text'>VoxFlow у дії</span>",
    demo_subtitle: "Використовуйте симулятор нижче. Натисніть на будь-який шаблон, щоб побачити, як структуруться думки.",
    sim_header: "Оберіть голосову замітку:",
    
    prompt1_title: "Мозковий штурм ідеї продукту",
    prompt1_text: '"Мені потрібно розробити лендінг до п\'ятниці, а також зателефонувати Анні завтра для обговорення..."',
    prompt2_title: "Хаотичний список справ з мітингу",
    prompt2_text: '"Перевірити маркетинговий бюджет цього вечора. Високий пріоритет. І ще купити молока сьогодні..."',
    prompt3_title: "Вечірнє розвантаження думок",
    prompt3_text: '"Підготувати слайди для презентації. Низький пріоритет. Записатися в спортзал до неділі..."',
    
    btn_simulate: "🎙️ Запустити симуляцію голосу",
    mock_active: "Активний",
    mock_transcript_label: "ЛОКАЛЬНА РОЗШИФРОВКА",
    mock_tasks_label: "ВИЛУЧЕНІ ЗАВДАННЯ",
    mock_transcript_placeholder: "Оберіть фразу ліворуч та натисніть кнопку для симуляції оффлайн-транскрибації...",
    mock_tasks_placeholder: "Завдання згенеруються автоматично за допомогою вбудованого ШІ...",
    
    privacy_title: "Ваші дані належать вам. <span class='accent-cyan'>Крапка.</span>",
    privacy_lead: "Ми віримо, что абсолютна приватність необхідна для ясного розуму. Вивантажуючи думки, ви не повинні хвилюватися про рекламне стеження або витік облачних баз.",
    
    priv1_title: "Ніяких завантажень аудіо",
    priv1_desc: "Додаток розпізнає голос за допомогою локальних ваг нейромережі. Ми ніколи не передаємо аудіо на сервери.",
    priv2_title: "Без реклами та трекерів",
    priv2_desc: "Ми не використовуємо рекламні API, аналітичні трекери поведінки або продаж токенів. Збір даних повністю відсутній.",
    priv3_title: "Локальні ключі",
    priv3_desc: "База даних SQLite зашифрована. Ключі дешифрування захищені на апаратному рівні через iOS Keychain та Android Keystore.",
    
    faq_title: "Часті <span class='gradient-text'>запитання</span>",
    faq1_q: "Як VoxFlow працює без інтернету?",
    faq1_a: "Оптимізовані Whisper-моделі та алгоритми аналізу вбудовані прямо в інсталятор. Сучасні мобільні процесори легко справляються з їх запуском оффлайн.",
    faq2_q: "Чи справді база даних зашифрована?",
    faq2_a: "Так. Додаток використовує зашифровану БД SQLite (через Drift). Системне сховище ключів гарантує, що доступ отримає тільки сам додаток.",
    faq3_q: "Чи можна синхронізувати дані між пристроями?",
    faq3_a: "Так, але це на 100% добровільно. Хмарне резервне копіювання шифрує базу вашим приватним ключом прямо на телефоні перед відправкою.",
    faq4_q: "Куди писати при виникненні питань?",
    faq4_a: "Ви можете написати нашій команді на <a href='mailto:support@voxflow.uk' class='accent-cyan'>support@voxflow.uk</a>. Ми завжди раді допомогти!",
    
    contact_title: "Зв'яжіться з <span class='gradient-text'>нами</span>",
    contact_subtitle: "Маєте питання чи пропозицію? Ми будемо раді вас вислухати.",
    contact_name: "Ваше ім'я",
    contact_email: "Email",
    contact_subject: "Тема повідомлення",
    contact_message: "Текст повідомлення",
    contact_submit: "Надіслати листа",
    contact_success: "Повідомлення успішно надіслано!",
    contact_error: "Помилка надсилання. Спробуйте пізніше.",
    
    footer_desc: "Приватний планувальник завдань на основі вашого голосу.",
    footer_product: "Продукт",
    footer_legal: "Юридично",
    footer_privacy: "Політика конфіденційності",
    footer_terms: "Умови використання",
    footer_copy: "© 2026 VoxFlow. Всі права захищені."
  }
};

// Simulated Speech and Task Data per Language
const simulationData = {
  en: [
    {
      transcript: "I need to design a landing page by Friday, also call Anna tomorrow to discuss project milestones.",
      tasks: [
        { title: "Design landing page", due: "Friday", priority: "High", pClass: "p-high" },
        { title: "Call Anna (discuss milestones)", due: "Tomorrow", priority: "Medium", pClass: "p-med" }
      ]
    },
    {
      transcript: "Review marketing budget this evening. High priority. Need to buy milk today before stores close.",
      tasks: [
        { title: "Review marketing budget", due: "Today, evening", priority: "High", pClass: "p-high" },
        { title: "Buy milk", due: "Today", priority: "Low", pClass: "p-low" }
      ]
    },
    {
      transcript: "Prepare presentation slides. Low priority. Sign up for gym before Sunday morning.",
      tasks: [
        { title: "Prepare presentation slides", due: "Later", priority: "Low", pClass: "p-low" },
        { title: "Sign up for gym", due: "Before Sunday", priority: "Medium", pClass: "p-med" }
      ]
    }
  ],
  ru: [
    {
      transcript: "Мне нужно разработать лендинг к пятнице, а также позвонить Анне завтра для обсуждения этапов проекта.",
      tasks: [
        { title: "Разработать лендинг", due: "Пятница", priority: "Высокий", pClass: "p-high" },
        { title: "Позвонить Анне (обсудить этапы)", due: "Завтра", priority: "Средний", pClass: "p-med" }
      ]
    },
    {
      transcript: "Проверить маркетинговый бюджет этим вечером. Высокий приоритет. И еще купить молока сегодня до закрытия магазинов.",
      tasks: [
        { title: "Проверить маркетинговый бюджет", due: "Сегодня, вечер", priority: "Высокий", pClass: "p-high" },
        { title: "Купить молоко", due: "Сегодня", priority: "Низкий", pClass: "p-low" }
      ]
    },
    {
      transcript: "Подготовить слайды для презентации. Низкий приоритет. Записаться в спортзал до воскресного утра.",
      tasks: [
        { title: "Подготовить слайды презентации", due: "Позже", priority: "Низкий", pClass: "p-low" },
        { title: "Записаться в спортзал", due: "До воскресенья", priority: "Средний", pClass: "p-med" }
      ]
    }
  ],
  uk: [
    {
      transcript: "Мені потрібно розробити лендінг до п'ятниці, а також зателефонувати Анні завтра для обговорення етапів проекту.",
      tasks: [
        { title: "Розробити лендінг", due: "П'ятниця", priority: "Високий", pClass: "p-high" },
        { title: "Зателефонувати Анні (обговорити етапи)", due: "Завтра", priority: "Середній", pClass: "p-med" }
      ]
    },
    {
      transcript: "Перевірити маркетинговий бюджет цього вечора. Високий пріоритет. І ще купити молока сьогодні до закриття магазинів.",
      tasks: [
        { title: "Перевірити маркетинговий бюджет", due: "Сьогодні, вечір", priority: "Високий", pClass: "p-high" },
        { title: "Купити молоко", due: "Сьогодні", priority: "Низкий", pClass: "p-low" }
      ]
    },
    {
      transcript: "Підготувати слайди для презентації. Низький пріоритет. Записатися в спортзал до недільного ранку.",
      tasks: [
        { title: "Підготувати слайди презентації", due: "Пізніше", priority: "Низький", pClass: "p-low" },
        { title: "Записатися в спортзал", due: "До неділі", priority: "Середній", pClass: "p-med" }
      ]
    }
  ]
};

// Global State
let currentLanguage = 'en';
let activePromptIndex = 0;
let isSimulating = false;

// DOM Elements
const langSelector = document.getElementById('langSelector');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const btnSimulate = document.getElementById('btnSimulate');
const mockTranscript = document.getElementById('mockTranscript');
const mockTasksContainer = document.getElementById('mockTasksContainer');
const mockMicBtn = document.getElementById('mockMicBtn');

// 1. Language Dropdown Functionality
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langSelector.classList.toggle('open');
});

document.addEventListener('click', () => {
  langSelector.classList.remove('open');
});

document.querySelectorAll('.lang-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = item.getAttribute('data-lang');
    setLanguage(lang);
    langSelector.classList.remove('open');
  });
});

// Set active language
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('voxflow_lang', lang);
  
  // Update Dropdown Items Active Class
  document.querySelectorAll('.lang-item').forEach(item => {
    if (item.getAttribute('data-lang') === lang) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update Main Language Button Text
  const langNames = {
    en: 'English',
    ru: 'Русский',
    uk: 'Українська'
  };
  currentLangSpan.textContent = langNames[lang];

  // Perform translation on all data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update localized images dynamically
  const heroShowcase = document.getElementById('heroShowcase');
  if (heroShowcase) {
    heroShowcase.src = `assets/app_showcase_${lang}.png`;
  }
  const privacyPoster = document.getElementById('privacyPoster');
  if (privacyPoster) {
    privacyPoster.src = `assets/poster_${lang}_privacy.png`;
  }

  // Reset simulation state when language changes to match templates
  resetSimulationUI();
}

// 2. Auto-Detect Language on Startup
function detectAndInitLanguage() {
  const savedLang = localStorage.getItem('voxflow_lang');
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
    return;
  }

  // Detect browser language
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  let defaultLang = 'en';

  if (browserLang.includes('uk') || browserLang.includes('ua')) {
    defaultLang = 'uk';
  } else if (browserLang.includes('ru')) {
    defaultLang = 'ru';
  }

  setLanguage(defaultLang);
}

// 3. Simulator Logic
document.querySelectorAll('.prompt-option').forEach(option => {
  option.addEventListener('click', () => {
    if (isSimulating) return;
    
    document.querySelectorAll('.prompt-option').forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    
    activePromptIndex = parseInt(option.getAttribute('data-index'));
    resetSimulationUI();
  });
});

function resetSimulationUI() {
  mockTranscript.textContent = translations[currentLanguage].mock_transcript_placeholder;
  mockTranscript.classList.remove('typing');
  mockTasksContainer.innerHTML = `<div class="empty-tasks-placeholder">${translations[currentLanguage].mock_tasks_placeholder}</div>`;
  mockMicBtn.classList.remove('active');
}

btnSimulate.addEventListener('click', startSimulation);
mockMicBtn.addEventListener('click', startSimulation);

function startSimulation() {
  if (isSimulating) return;
  isSimulating = true;
  
  // UI setup for simulation
  mockTranscript.textContent = '';
  mockTranscript.classList.add('typing');
  mockTasksContainer.innerHTML = '';
  mockMicBtn.classList.add('active');
  btnSimulate.disabled = true;

  const data = simulationData[currentLanguage][activePromptIndex];
  const text = data.transcript;
  let charIndex = 0;
  
  // Character typing animation speed (ms)
  const typingSpeed = 35; 

  function typeChar() {
    if (charIndex < text.length) {
      mockTranscript.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, typingSpeed);
    } else {
      // Transcription done, start extracting tasks
      setTimeout(showTasks, 600);
    }
  }

  typeChar();
}

function showTasks() {
  const data = simulationData[currentLanguage][activePromptIndex];
  const tasks = data.tasks;
  let taskIndex = 0;

  function renderNextTask() {
    if (taskIndex < tasks.length) {
      const task = tasks[taskIndex];
      const taskHtml = `
        <div class="mock-task-item">
          <div class="task-checkbox"></div>
          <div class="task-details">
            <div class="task-title">${task.title}</div>
            <div class="task-meta">
              <span class="task-due">📅 ${task.due}</span>
              <span class="task-priority ${task.pClass}">${task.priority}</span>
            </div>
          </div>
        </div>
      `;
      
      mockTasksContainer.insertAdjacentHTML('beforeend', taskHtml);
      taskIndex++;
      setTimeout(renderNextTask, 500); // interval between tasks rendering
    } else {
      // Simulation complete
      isSimulating = false;
      btnSimulate.disabled = false;
      mockMicBtn.classList.remove('active');
    }
  }

  renderNextTask();
}

// 4. Initialize
document.addEventListener('DOMContentLoaded', () => {
  detectAndInitLanguage();
  initContactForm();
});

// 5. Contact Form Logic
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn = document.getElementById('contactSubmitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const spinner = document.getElementById('contactSpinner');
  const responseDiv = document.getElementById('contactResponse');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Disable form
    submitBtn.disabled = true;
    btnText.style.opacity = '0';
    spinner.classList.remove('hidden');
    responseDiv.classList.add('hidden');
    responseDiv.className = 'contact-response hidden';

    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value
    };

    try {
      const res = await fetch('https://voxflow-contact-worker.moslyharm.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        responseDiv.textContent = translations[currentLanguage].contact_success || 'Message sent successfully!';
        responseDiv.classList.add('success');
        form.reset();
      } else {
        throw new Error(data.error || 'Failed to send');
      }
    } catch (err) {
      responseDiv.textContent = translations[currentLanguage].contact_error || 'Error sending message. Please try again later.';
      responseDiv.classList.add('error');
    } finally {
      responseDiv.classList.remove('hidden');
      submitBtn.disabled = false;
      btnText.style.opacity = '1';
      spinner.classList.add('hidden');
      
      // Hide response after 5 seconds
      setTimeout(() => {
        responseDiv.classList.add('hidden');
      }, 5000);
    }
  });
}
