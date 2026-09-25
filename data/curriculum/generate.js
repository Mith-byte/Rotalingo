const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/Güneş Asena/Desktop/Rotalingo/data/curriculum/a2-ileri.ts';

// Helper to generate TText
const t = (tr, en, ar, fa, ru) => ({ tr, en, ar, fa, ru });

const unitsData = [
  {
    id: 'a2i_is', emoji: '💼', color: 'from-slate-500 to-slate-700',
    title: t('İş Görüşmesi', 'Job Interview', 'مقابلة عمل', 'مصاحبه کاری', 'Собеседование'),
    desc: t('İş arama ve görüşme', 'Job search and interviews', 'البحث عن عمل', 'کاریابی', 'Поиск работы'),
    vocab: ['özgeçmiş', 'deneyim', 'maaş', 'pozisyon', 'aday', 'referans', 'sözleşme', 'müdür', 'şirket', 'görev'],
    guidebook: {
      vocabulary: [
        { word: 'özgeçmiş', translation: t('özgeçmiş', 'resume', 'سيرة ذاتية', 'رزومه', 'резюме') },
        { word: 'deneyim', translation: t('deneyim', 'experience', 'خبرة', 'تجربه', 'опыт') },
        { word: 'maaş', translation: t('maaş', 'salary', 'راتب', 'حقوق', 'зарплата') },
        { word: 'pozisyon', translation: t('pozisyon', 'position', 'منصب', 'موقعیت', 'должность') },
        { word: 'aday', translation: t('aday', 'candidate', 'مرشح', 'نامزد', 'кандидат') },
        { word: 'referans', translation: t('referans', 'reference', 'مرجع', 'مرجع', 'рекомендация') },
        { word: 'sözleşme', translation: t('sözleşme', 'contract', 'عقد', 'قرارداد', 'контракт') },
        { word: 'müdür', translation: t('müdür', 'manager', 'مدير', 'مدیر', 'менеджер') },
        { word: 'şirket', translation: t('şirket', 'company', 'شركة', 'شرکت', 'компания') },
        { word: 'görev', translation: t('görev', 'duty', 'مهمة', 'وظیفه', 'обязанность') }
      ],
      keyPhrases: [
        { phrase: 'Neden bu işi istiyorsunuz?', translation: t('Neden bu işi istiyorsunuz?', 'Why do you want this job?', 'لماذا تريد هذا العمل؟', 'چرا این شغل را می‌خواهید؟', 'Почему вы хотите эту работу?') },
        { phrase: 'Daha önce nerede çalıştınız?', translation: t('Daha önce nerede çalıştınız?', 'Where did you work before?', 'أين عملت من قبل؟', 'قبلا کجا کار می‌کردید؟', 'Где вы работали раньше?') },
        { phrase: 'Maaş beklentiniz nedir?', translation: t('Maaş beklentiniz nedir?', 'What is your salary expectation?', 'ما هو توقعك للراتب؟', 'انتظار حقوق شما چیست؟', 'Каковы ваши ожидания по зарплате?') },
        { phrase: 'Ne zaman başlayabilirsiniz?', translation: t('Ne zaman başlayabilirsiniz?', 'When can you start?', 'متى يمكنك البدء؟', 'چه زمانی می‌توانید شروع کنید؟', 'Когда вы можете начать?') },
        { phrase: 'Sizi neden işe almalıyız?', translation: t('Sizi neden işe almalıyız?', 'Why should we hire you?', 'لماذا يجب أن نوظفك؟', 'چرا باید شما را استخدام کنیم؟', 'Почему мы должны вас нанять?') }
      ],
      grammarNotes: [
        { title: t('Gelecek Zaman', 'Future Tense', 'المستقبل', 'آینده', 'Будущее время'), explanation: t('Gelecek planları', 'Future plans', 'خطط المستقبل', 'برنامه‌های آینده', 'Планы на будущее') },
        { title: t('Gereklilik Kipi', 'Necessity Mood', 'الضرورة', 'الزام', 'Необходимость'), explanation: t('Meli/malı', 'Must/should', 'يجب', 'باید', 'Должен') }
      ]
    }
  },
  {
    id: 'a2i_hukuk', emoji: '⚖️', color: 'from-gray-500 to-zinc-700',
    title: t('Hukuki Konular', 'Legal Matters', 'مسائل قانونية', 'مسائل حقوقی', 'Правовые вопросы'),
    desc: t('Hukuk ve kurallar', 'Law and rules', 'القانون والقواعد', 'قانون و مقررات', 'Закон и правила'),
    vocab: ['avukat', 'mahkeme', 'dava', 'haklar', 'ihlal', 'şikayet', 'karakol', 'ifade', 'tutuklama', 'suçlama'],
    guidebook: {
      vocabulary: [
        { word: 'avukat', translation: t('avukat', 'lawyer', 'محام', 'وکیل', 'адвокат') },
        { word: 'mahkeme', translation: t('mahkeme', 'court', 'محكمة', 'دادگاه', 'суд') },
        { word: 'dava', translation: t('dava', 'lawsuit', 'دعوى', 'دعوی', 'иск') },
        { word: 'haklar', translation: t('haklar', 'rights', 'حقوق', 'حقوق', 'права') },
        { word: 'ihlal', translation: t('ihlal', 'violation', 'انتهاك', 'نقض', 'нарушение') },
        { word: 'şikayet', translation: t('şikayet', 'complaint', 'شكوى', 'شکایت', 'жалоба') },
        { word: 'karakol', translation: t('karakol', 'police station', 'مخفر', 'پاسگاه', 'полицейский участок') },
        { word: 'ifade', translation: t('ifade', 'statement', 'إفادة', 'اظهارات', 'заявление') },
        { word: 'tutuklama', translation: t('tutuklama', 'arrest', 'اعتقال', 'دستگیری', 'арест') },
        { word: 'suçlama', translation: t('suçlama', 'accusation', 'اتهام', 'اتهام', 'обвинение') }
      ],
      keyPhrases: [
        { phrase: 'Şikayetçi olmak istiyorum.', translation: t('Şikayetçi olmak istiyorum.', 'I want to file a complaint.', 'أريد تقديم شكوى.', 'می‌خواهم شکایت کنم.', 'Я хочу подать жалобу.') },
        { phrase: 'Avukatımı aramak istiyorum.', translation: t('Avukatımı aramak istiyorum.', 'I want to call my lawyer.', 'أريد الاتصال بمحامي.', 'می‌خواهم با وکیلم تماس بگیرم.', 'Я хочу позвонить своему адвокату.') },
        { phrase: 'Haklarımı biliyorum.', translation: t('Haklarımı biliyorum.', 'I know my rights.', 'أعرف حقوقي.', 'حقوقم را می‌دانم.', 'Я знаю свои права.') },
        { phrase: 'İfade vermek için geldim.', translation: t('İfade vermek için geldim.', 'I came to give a statement.', 'جئت لتقديم إفادة.', 'برای دادن اظهارات آمدم.', 'Я пришел дать показания.') },
        { phrase: 'Bu yasal değil.', translation: t('Bu yasal değil.', 'This is not legal.', 'هذا ليس قانونيا.', 'این قانونی نیست.', 'Это незаконно.') }
      ],
      grammarNotes: [
        { title: t('Zarf Fiiller', 'Adverbial Clauses', 'ظروف', 'قیدها', 'Деепричастия'), explanation: t('İken, madan', 'While, without', 'بينما، بدون', 'در حالی که، بدون', 'Пока, без') },
        { title: t('Edilgen Çatı', 'Passive Voice', 'المجهول', 'مجهول', 'Пассивный залог') , explanation: t('Yapıldı, edildi', 'Was done', 'تم', 'انجام شد', 'Было сделано') }
      ]
    }
  },
  {
    id: 'a2i_seyahat', emoji: '✈️', color: 'from-sky-500 to-cyan-600',
    title: t('Seyahat', 'Travel', 'سفر', 'سفر', 'Путешествие'),
    desc: t('Seyahat ve tatil', 'Travel and holidays', 'السفر والعطلات', 'سفر و تعطیلات', 'Путешествия и отпуск'),
    vocab: ['gezi', 'tur', 'rehber', 'müze', 'bilet', 'ücret', 'harita', 'giriş', 'konaklamak', 'rezervasyon'],
    guidebook: {
      vocabulary: [
        { word: 'gezi', translation: t('gezi', 'trip', 'رحلة', 'سفر', 'поездка') },
        { word: 'tur', translation: t('tur', 'tour', 'جولة', 'تور', 'тур') },
        { word: 'rehber', translation: t('rehber', 'guide', 'دليل', 'راهنما', 'гид') },
        { word: 'müze', translation: t('müze', 'museum', 'متحف', 'موزه', 'музей') },
        { word: 'bilet', translation: t('bilet', 'ticket', 'تذكرة', 'بلیط', 'билет') },
        { word: 'ücret', translation: t('ücret', 'fee', 'أجرة', 'هزینه', 'плата') },
        { word: 'harita', translation: t('harita', 'map', 'خريطة', 'نقشه', 'карта') },
        { word: 'giriş', translation: t('giriş', 'entrance', 'دخول', 'ورودی', 'вход') },
        { word: 'konaklamak', translation: t('konaklamak', 'to stay', 'إقامة', 'اقامت', 'проживать') },
        { word: 'rezervasyon', translation: t('rezervasyon', 'reservation', 'حجز', 'رزرو', 'бронирование') }
      ],
      keyPhrases: [
        { phrase: 'Müze giriş ücreti ne kadar?', translation: t('Müze giriş ücreti ne kadar?', 'How much is the museum entrance fee?', 'كم رسوم دخول المتحف؟', 'هزینه ورودی موزه چقدر است؟', 'Сколько стоит вход в музей?') },
        { phrase: 'İki kişilik oda istiyorum.', translation: t('İki kişilik oda istiyorum.', 'I want a double room.', 'أريد غرفة مزدوجة.', 'اتاق دو نفره می‌خواهم.', 'Я хочу двухместный номер.') },
        { phrase: 'Turlar saat kaçta başlıyor?', translation: t('Turlar saat kaçta başlıyor?', 'What time do the tours start?', 'متى تبدأ الجولات؟', 'تورها چه ساعتی شروع می‌شوند؟', 'Во сколько начинаются туры?') },
        { phrase: 'Haritadan gösterebilir misiniz?', translation: t('Haritadan gösterebilir misiniz?', 'Can you show it on the map?', 'هل يمكنك إظهاره على الخريطة؟', 'می‌توانید روی نقشه نشان دهید؟', 'Можете показать на карте?') },
        { phrase: 'Rezervasyonum vardı.', translation: t('Rezervasyonum vardı.', 'I had a reservation.', 'كان لدي حجز.', 'رزرو داشتم.', 'У меня была бронь.') }
      ],
      grammarNotes: [
        { title: t('Dolaylı Anlatım', 'Reported Speech', 'الكلام المنقول', 'نقل قول غیرمستقیم', 'Косвенная речь'), explanation: t('Dedi ki', 'Said that', 'قال أن', 'گفت که', 'Сказал, что') },
        { title: t('Karşılaştırma', 'Comparisons', 'مقارنة', 'مقایسه', 'Сравнения'), explanation: t('Daha, en', 'More, most', 'أكثر، الأكثر', 'بیشتر، بیشترین', 'Более, самый') }
      ]
    }
  },
  {
    id: 'a2i_kultur', emoji: '🎭', color: 'from-fuchsia-500 to-pink-600',
    title: t('Kültür & Gelenekler', 'Culture & Customs', 'الثقافة والتقاليد', 'فرهنگ و رسوم', 'Культура и обычаи'),
    desc: t('Kültürel olaylar', 'Cultural events', 'أحداث ثقافية', 'رویدادهای فرهنگی', 'Культурные события'),
    vocab: ['bayram', 'kutlama', 'düğün', 'cenaze', 'gelenekler', 'hediye', 'davet', 'tebrikler', 'taziye', 'ziyaret'],
    guidebook: {
      vocabulary: [
        { word: 'bayram', translation: t('bayram', 'holiday', 'عيد', 'عید', 'праздник') },
        { word: 'kutlama', translation: t('kutlama', 'celebration', 'احتفال', 'جشن', 'празднование') },
        { word: 'düğün', translation: t('düğün', 'wedding', 'زفاف', 'عروسی', 'свадьба') },
        { word: 'cenaze', translation: t('cenaze', 'funeral', 'جنازة', 'تشییع جنازه', 'похороны') },
        { word: 'gelenekler', translation: t('gelenekler', 'traditions', 'تقاليد', 'رسوم', 'традиции') },
        { word: 'hediye', translation: t('hediye', 'gift', 'هدية', 'هدیه', 'подарок') },
        { word: 'davet', translation: t('davet', 'invitation', 'دعوة', 'دعوت', 'приглашение') },
        { word: 'tebrikler', translation: t('tebrikler', 'congratulations', 'تهانينا', 'تبریک', 'поздравления') },
        { word: 'taziye', translation: t('taziye', 'condolence', 'تعزية', 'تسلیت', 'соболезнование') },
        { word: 'ziyaret', translation: t('ziyaret', 'visit', 'زيارة', 'دیدار', 'визит') }
      ],
      keyPhrases: [
        { phrase: 'Bayramınız kutlu olsun.', translation: t('Bayramınız kutlu olsun.', 'Happy Eid/Holiday.', 'عيدكم مبارك.', 'عیدتان مبارک.', 'С праздником.') },
        { phrase: 'Başınız sağ olsun.', translation: t('Başınız sağ olsun.', 'My condolences.', 'البقاء لله.', 'تسلیت می‌گویم.', 'Мои соболезнования.') },
        { phrase: 'Tebrik ederim.', translation: t('Tebrik ederim.', 'Congratulations.', 'مبروك.', 'تبریک می‌گویم.', 'Поздравляю.') },
        { phrase: 'Allah mesut etsin.', translation: t('Allah mesut etsin.', 'May God make you happy (wedding).', 'بالرفاه والبنين.', 'خوشبخت بشوید.', 'Да благословит вас Бог.') },
        { phrase: 'Ziyaretinize geldik.', translation: t('Ziyaretinize geldik.', 'We came to visit you.', 'جئنا لزيارتكم.', 'برای دیدن شما آمدیم.', 'Мы пришли навестить вас.') }
      ],
      grammarNotes: [
        { title: t('Dilek Kipi', 'Optative Mood', 'التمني', 'وجه تمنایی', 'Желательное наклонение'), explanation: t('Ayım, eyle', 'Let me, let us', 'دعني', 'بگذارید', 'Давайте') },
        { title: t('İsim Tamlamaları', 'Noun Compounds', 'الإضافة', 'ترکیبات اسمی', 'Именные словосочетания'), explanation: t('Kapı kolu', 'Door handle', 'مقبض الباب', 'دستگیره در', 'Дверная ручка') }
      ]
    }
  },
  {
    id: 'a2i_ileri', emoji: '💬', color: 'from-indigo-500 to-violet-600',
    title: t('İleri Konuşma', 'Advanced Conversation', 'محادثة متقدمة', 'مکالمه پیشرفته', 'Продвинутый разговор'),
    desc: t('Fikir beyan etme', 'Expressing opinions', 'التعبير عن الآراء', 'ابراز عقیده', 'Выражение мнений'),
    vocab: ['fikir', 'tartışma', 'öneri', 'anlaşmazlık', 'uzlaşma', 'kanaat', 'savunmak', 'katılmak', 'konu', 'özetlemek'],
    guidebook: {
      vocabulary: [
        { word: 'fikir', translation: t('fikir', 'idea/opinion', 'فكرة/رأي', 'ایده/نظر', 'идея/мнение') },
        { word: 'tartışma', translation: t('tartışma', 'discussion', 'نقاش', 'بحث', 'обсуждение') },
        { word: 'öneri', translation: t('öneri', 'suggestion', 'اقتراح', 'پیشنهاد', 'предложение') },
        { word: 'anlaşmazlık', translation: t('anlaşmazlık', 'disagreement', 'خلاف', 'اختلاف', 'разногласие') },
        { word: 'uzlaşma', translation: t('uzlaşma', 'compromise', 'تسوية', 'سازش', 'компромисс') },
        { word: 'kanaat', translation: t('kanaat', 'conviction', 'قناعة', 'اعتقاد', 'убеждение') },
        { word: 'savunmak', translation: t('savunmak', 'to defend', 'دفاع', 'دفاع کردن', 'защищать') },
        { word: 'katılmak', translation: t('katılmak', 'to agree/join', 'موافقة/انضمام', 'موافقت کردن', 'соглашаться/участвовать') },
        { word: 'konu', translation: t('konu', 'subject', 'موضوع', 'موضوع', 'тема') },
        { word: 'özetlemek', translation: t('özetlemek', 'to summarize', 'تلخيص', 'خلاصه کردن', 'резюмировать') }
      ],
      keyPhrases: [
        { phrase: 'Bence haklısınız.', translation: t('Bence haklısınız.', 'I think you are right.', 'أعتقد أنك على حق.', 'به نظرم حق با شماست.', 'Я думаю, вы правы.') },
        { phrase: 'Size katılmıyorum.', translation: t('Size katılmıyorum.', 'I disagree with you.', 'لا أتفق معك.', 'با شما موافق نیستم.', 'Я с вами не согласен.') },
        { phrase: 'Benim fikrim şu yönde...', translation: t('Benim fikrim şu yönde...', 'My opinion is...', 'رأيي هو...', 'نظر من این است...', 'Мое мнение...') },
        { phrase: 'Kısaca özetlemek gerekirse...', translation: t('Kısaca özetlemek gerekirse...', 'To summarize briefly...', 'باختصار...', 'به طور خلاصه...', 'Вкратце...') },
        { phrase: 'Bu konuda ne düşünüyorsunuz?', translation: t('Bu konuda ne düşünüyorsunuz?', 'What do you think about this?', 'ما رأيك في هذا؟', 'در این مورد چه فکر می‌کنید؟', 'Что вы думаете об этом?') }
      ],
      grammarNotes: [
        { title: t('Bağlaçlar', 'Conjunctions', 'الروابط', 'حروف ربط', 'Союзы'), explanation: t('Ancak, oysa', 'However, whereas', 'ومع ذلك', 'با این حال', 'Однако') },
        { title: t('Şart Kipleri', 'Conditionals', 'الشرط', 'شرطی', 'Условные наклонения'), explanation: t('Eğer olursa', 'If it happens', 'إذا حدث', 'اگر بشود', 'Если случится') }
      ]
    }
  }
];

function generateUnitLessons(unit, unitIndex) {
  const lessons = [];
  const baseSlug = unit.id;
  
  // Lesson 1: MC 1 (5 items)
  lessons.push({
    id: baseSlug + '_1',
    type: 'vocabulary',
    title: t('Kelime 1', 'Vocab 1', 'مفردات 1', 'واژگان ۱', 'Словарь 1'),
    xpReward: 25, coinReward: 12,
    exercises: Array.from({length: 5}).map((_, i) => ({
      id: baseSlug + '_1_mc_' + i,
      type: 'multiple_choice',
      question: t('Doğru çeviriyi seçin', 'Select correct translation', 'اختر الترجمة الصحيحة', 'ترجمه صحیح را انتخاب کنید', 'Выберите правильный перевод'),
      options: [
        { text: t(unit.vocab[i], unit.vocab[i], unit.vocab[i], unit.vocab[i], unit.vocab[i]), isCorrect: true },
        { text: t('yanlış', 'wrong', 'خطأ', 'غلط', 'неправильно'), isCorrect: false }
      ]
    }))
  });

  // Lesson 2: DD 1 (5 pairs)
  lessons.push({
    id: baseSlug + '_2',
    type: 'practice',
    title: t('Eşleştirme 1', 'Matching 1', 'مطابقة 1', 'تطابق ۱', 'Сопоставление 1'),
    xpReward: 25, coinReward: 12,
    exercises: [{
      id: baseSlug + '_2_dd_0',
      type: 'drag_drop',
      prompt: t('Kelimeleri eşleştirin', 'Match words', 'طابق الكلمات', 'کلمات را تطبیق دهید', 'Сопоставьте слова'),
      pairs: Array.from({length: 5}).map((_, i) => ({
        left: t(unit.vocab[i], unit.vocab[i], unit.vocab[i], unit.vocab[i], unit.vocab[i]),
        right: t('anlam ' + i, 'meaning ' + i, 'معنى ' + i, 'معنی ' + i, 'значение ' + i)
      }))
    }]
  });

  // Lesson 3: MC 2 (5 items)
  lessons.push({
    id: baseSlug + '_3',
    type: 'vocabulary',
    title: t('Kelime 2', 'Vocab 2', 'مفردات 2', 'واژگان ۲', 'Словарь 2'),
    xpReward: 25, coinReward: 12,
    exercises: Array.from({length: 5}).map((_, i) => ({
      id: baseSlug + '_3_mc_' + i,
      type: 'multiple_choice',
      question: t('Doğru çeviriyi seçin', 'Select correct translation', 'اختر الترجمة الصحيحة', 'ترجمه صحیح را انتخاب کنید', 'Выберите правильный перевод'),
      options: [
        { text: t(unit.vocab[i+5], unit.vocab[i+5], unit.vocab[i+5], unit.vocab[i+5], unit.vocab[i+5]), isCorrect: true },
        { text: t('yanlış', 'wrong', 'خطأ', 'غلط', 'неправильно'), isCorrect: false }
      ]
    }))
  });

  // Lesson 4: RPG Typing 1
  lessons.push({
    id: baseSlug + '_4',
    type: 'rpg',
    title: t('Senaryo 1', 'Scenario 1', 'سيناريو 1', 'سناریو ۱', 'Сценарий 1'),
    xpReward: 40, coinReward: 20,
    exercises: [{
      id: baseSlug + '_4_rpg_0',
      type: 'rpg_typing',
      scenarioTitle: t('Senaryo Başlıyor', 'Scenario Begins', 'يبدأ السيناريو', 'سناریو شروع می‌شود', 'Сценарий начинается'),
      startNodeId: 'node_1',
      nodes: [{
        id: 'node_1',
        npcText: t('Merhaba.', 'Hello.', 'مرحبا.', 'سلام.', 'Привет.'),
        prompt: t('Yanıtla', 'Reply', 'رد', 'پاسخ', 'Ответить'),
        matches: [{ target: 'Merhaba', hint: t('Merhaba', 'Hello', 'مرحبا', 'سلام', 'Привет'), nextNodeId: 'node_2', deductsHeart: false }],
        fallbackNextNodeId: 'node_2'
      }, {
        id: 'node_2',
        npcText: t('Nasılsın?', 'How are you?', 'كيف حالك؟', 'حالت چطور است؟', 'Как дела?'),
        prompt: t('Yanıtla', 'Reply', 'رد', 'پاسخ', 'Ответить'),
        matches: [{ target: 'İyiyim', hint: t('İyiyim', 'I am fine', 'أنا بخير', 'خوبم', 'Я в порядке'), nextNodeId: null, deductsHeart: false }],
        fallbackNextNodeId: null
      }]
    }]
  });

  // Lesson 5: Sentences (3 WO + 2 FIB)
  lessons.push({
    id: baseSlug + '_5',
    type: 'grammar',
    title: t('Cümleler 1', 'Sentences 1', 'جمل 1', 'جملات ۱', 'Предложения 1'),
    xpReward: 25, coinReward: 12,
    exercises: [
      ...Array.from({length: 3}).map((_, i) => ({
        id: baseSlug + '_5_wo_' + i,
        type: 'word_order',
        prompt: t('Cümleyi kur', 'Build sentence', 'ابن الجملة', 'جمله بسازید', 'Постройте предложение'),
        words: [
          t('Ben', 'I', 'أنا', 'من', 'Я'),
          t('gidiyorum', 'go', 'أذهب', 'می‌روم', 'иду')
        ],
        correctOrder: [0, 1]
      })),
      ...Array.from({length: 2}).map((_, i) => ({
        id: baseSlug + '_5_fib_' + i,
        type: 'fill_in_blank',
        sentenceTemplate: t('O {blank} gidiyor.', 'He {blank} goes.', 'هو {blank} يذهب.', 'او {blank} می‌رود.', 'Он {blank} идет.'),
        correctAnswer: 'oraya',
        hint: t('oraya', 'there', 'إلى هناك', 'آنجا', 'туда')
      }))
    ]
  });

  // Lesson 6: MC 3 (5 items)
  lessons.push({
    id: baseSlug + '_6',
    type: 'vocabulary',
    title: t('Kelime 3', 'Vocab 3', 'مفردات 3', 'واژگان ۳', 'Словарь 3'),
    xpReward: 25, coinReward: 12,
    exercises: Array.from({length: 5}).map((_, i) => ({
      id: baseSlug + '_6_mc_' + i,
      type: 'multiple_choice',
      question: t('Doğru kelime', 'Correct word', 'الكلمة الصحيحة', 'کلمه صحیح', 'Правильное слово'),
      options: [
        { text: t('Doğru', 'Right', 'صحيح', 'درست', 'Правильно'), isCorrect: true },
        { text: t('Yanlış', 'Wrong', 'خطأ', 'غلط', 'Неправильно'), isCorrect: false }
      ]
    }))
  });

  // Lesson 7: DD 2 (5 pairs)
  lessons.push({
    id: baseSlug + '_7',
    type: 'practice',
    title: t('Eşleştirme 2', 'Matching 2', 'مطابقة 2', 'تطابق ۲', 'Сопоставление 2'),
    xpReward: 25, coinReward: 12,
    exercises: [{
      id: baseSlug + '_7_dd_0',
      type: 'drag_drop',
      prompt: t('Eşleştir', 'Match', 'طابق', 'تطبیق', 'Сопоставьте'),
      pairs: Array.from({length: 5}).map((_, i) => ({
        left: t(unit.vocab[i+2] || unit.vocab[0], 'word ' + i, 'كلمة ' + i, 'کلمه ' + i, 'слово ' + i),
        right: t('anlam ' + i, 'meaning ' + i, 'معنى ' + i, 'معنی ' + i, 'значение ' + i)
      }))
    }]
  });

  // Lesson 8: RPG Typing 2
  lessons.push({
    id: baseSlug + '_8',
    type: 'rpg',
    title: t('Senaryo 2', 'Scenario 2', 'سيناريو 2', 'سناریو ۲', 'Сценарий 2'),
    xpReward: 40, coinReward: 20,
    exercises: [{
      id: baseSlug + '_8_rpg_0',
      type: 'rpg_typing',
      scenarioTitle: t('Devam', 'Continue', 'استمر', 'ادامه', 'Продолжить'),
      startNodeId: 'n1',
      nodes: [{
        id: 'n1',
        npcText: t('Ne düşünüyorsun?', 'What do you think?', 'ما رأيك؟', 'چه فکر می‌کنی؟', 'Что вы думаете?'),
        prompt: t('Yanıtla', 'Reply', 'رد', 'پاسخ', 'Ответить'),
        matches: [{ target: 'Harika', hint: t('Harika', 'Great', 'عظيم', 'عالی', 'Отлично'), nextNodeId: null, deductsHeart: false }],
        fallbackNextNodeId: null
      }]
    }]
  });

  // Lesson 9: Boss Fight (4 MC, 2 WO, 2 FIB)
  lessons.push({
    id: baseSlug + '_9',
    type: 'boss',
    title: t('Bölüm Sonu Canavarı', 'Boss Fight', 'زعيم النهاية', 'غول آخر', 'Босс-битва'),
    xpReward: 75, coinReward: 40,
    exercises: [
      ...Array.from({length: 4}).map((_, i) => ({
        id: baseSlug + '_9_mc_' + i,
        type: 'multiple_choice',
        question: t('Seçiniz', 'Select', 'اختر', 'انتخاب کنید', 'Выберите'),
        options: [
          { text: t('A', 'A', 'A', 'A', 'A'), isCorrect: true },
          { text: t('B', 'B', 'B', 'B', 'B'), isCorrect: false }
        ]
      })),
      ...Array.from({length: 2}).map((_, i) => ({
        id: baseSlug + '_9_wo_' + i,
        type: 'word_order',
        prompt: t('Sırala', 'Order', 'رتب', 'مرتب کنید', 'Упорядочите'),
        words: [
          t('Bunu', 'This', 'هذا', 'این را', 'Это'),
          t('yap', 'do', 'افعل', 'انجام بده', 'делай')
        ],
        correctOrder: [0, 1]
      })),
      ...Array.from({length: 2}).map((_, i) => ({
        id: baseSlug + '_9_fib_' + i,
        type: 'fill_in_blank',
        sentenceTemplate: t('O {blank} geldi.', 'He came {blank}.', 'هو جاء {blank}.', 'او {blank} آمد.', 'Он пришел {blank}.'),
        correctAnswer: 'hızlıca',
        hint: t('hızlıca', 'quickly', 'بسرعة', 'سریع', 'быстро')
      }))
    ]
  });

  return lessons;
}

const levelData = {
  id: 'a2_ileri',
  title: t('A2 İleri', 'A2 Advanced', 'A2 متقدم', 'A2 پیشرفته', 'A2 Продвинутый'),
  description: t('A2 seviyesinin ikinci yarısı', 'Second half of A2 level', 'النصف الثاني من مستوى A2', 'نیمه دوم سطح A2', 'Вторая половина уровня A2'),
  order: 4,
  units: unitsData.map((u, i) => ({
    id: u.id,
    emoji: u.emoji,
    color: u.color,
    title: u.title,
    description: u.desc,
    guidebook: u.guidebook,
    lessons: generateUnitLessons(u, i)
  }))
};

let contentBody = JSON.stringify(levelData, null, 2);
// Remove quotes from keys
contentBody = contentBody.replace(/"([^"]+)":/g, '$1:');

const fileContent = "import type { Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGTypingExercise, TText, UnitGuidebook } from '../types';\n\nexport const a2IleriLevel: Level = " + contentBody + ";\n";

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Successfully generated curriculum to:', targetPath);
