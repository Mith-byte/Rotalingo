import type { Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGExercise, TText } from '../types';

export const a1IleriLevel: Level = {
  id: 'a1_ileri',
  title: { tr: 'A1 İleri', en: 'Upper Beginner', ar: 'مبتدئ متقدم', fa: 'مبتدی پیشرفته', ru: 'Продвинутый начинающий' },
  description: { tr: 'Günlük diyaloglar ve temel iletişim.', en: 'Daily dialogues and basic communication.', ar: 'حوارات يومية وتواصل أساسي.', fa: 'مکالمات روزمره و ارتباطات پایه.', ru: 'Повседневные диалоги и базовое общение.' },
  order: 2,
  units: [
    {
      id: 'a1i_ulasim',
      title: { tr: 'Ulaşım', en: 'Transport', ar: 'مواصلات', fa: 'حمل و نقل', ru: 'Транспорт' },
      description: { tr: 'Seyahat ve yön bulma', en: 'Travel and navigation', ar: 'السفر والملاحة', fa: 'سفر و جهت یابی', ru: 'Путешествия и навигация' },
      order: 1,
      emoji: '🚌',
      color: 'from-cyan-400 to-blue-500',
      lessons: [
        {
          id: 'a1i_ulasim_1', type: 'vocabulary', title: { tr: 'Araçlar', en: 'Vehicles', ar: 'مركبات', fa: 'وسایل نقلیه', ru: 'Транспортные средства' }, xp: 20, coins: 15,
          exercises: [
            { id: 'a1i_ulasim_1_mc_1', type: 'multiple_choice',
              question: { tr: 'otobüs', en: 'bus', ar: 'حافلة', fa: 'اتوبوس', ru: 'автобус' },
              options: [
                { id: 'o1', text: { tr: 'otobüs', en: 'bus', ar: 'حافلة', fa: 'اتوبوس', ru: 'автобус' }, isCorrect: true },
                { id: 'o2', text: { tr: 'metro', en: 'subway', ar: 'مترو', fa: 'مترو', ru: 'метро' }, isCorrect: false },
                { id: 'o3', text: { tr: 'uçak', en: 'airplane', ar: 'طائرة', fa: 'هواپیما', ru: 'самолет' }, isCorrect: false },
                { id: 'o4', text: { tr: 'tren', en: 'train', ar: 'قطار', fa: 'قطار', ru: 'поезд' }, isCorrect: false }
              ] },
            { id: 'a1i_ulasim_1_mc_2', type: 'multiple_choice',
              question: { tr: 'taksi', en: 'taxi', ar: 'تاكسي', fa: 'تاکسی', ru: 'такси' },
              options: [
                { id: 'o1', text: { tr: 'taksi', en: 'taxi', ar: 'تاكسي', fa: 'تاکسی', ru: 'такси' }, isCorrect: true },
                { id: 'o2', text: { tr: 'vapur', en: 'ferry', ar: 'عبارة', fa: 'کشتی', ru: 'паром' }, isCorrect: false },
                { id: 'o3', text: { tr: 'tramvay', en: 'tram', ar: 'ترامواي', fa: 'تراموا', ru: 'трамвай' }, isCorrect: false },
                { id: 'o4', text: { tr: 'durak', en: 'stop', ar: 'موقف', fa: 'ایستگاه', ru: 'остановка' }, isCorrect: false }
              ] },
            { id: 'a1i_ulasim_1_mc_3', type: 'multiple_choice',
              question: { tr: 'durak', en: 'stop', ar: 'موقف', fa: 'ایستگاه', ru: 'остановка' },
              options: [
                { id: 'o1', text: { tr: 'gar', en: 'station', ar: 'محطة', fa: 'ایستگاه راه آهن', ru: 'вокзал' }, isCorrect: false },
                { id: 'o2', text: { tr: 'durak', en: 'stop', ar: 'موقف', fa: 'ایستگاه', ru: 'остановка' }, isCorrect: true },
                { id: 'o3', text: { tr: 'bilet', en: 'ticket', ar: 'تذكرة', fa: 'بلیط', ru: 'билет' }, isCorrect: false },
                { id: 'o4', text: { tr: 'metro', en: 'subway', ar: 'مترو', fa: 'مترو', ru: 'метро' }, isCorrect: false }
              ] },
            { id: 'a1i_ulasim_1_mc_4', type: 'multiple_choice',
              question: { tr: 'bilet', en: 'ticket', ar: 'تذكرة', fa: 'بلیط', ru: 'билет' },
              options: [
                { id: 'o1', text: { tr: 'terminal', en: 'terminal', ar: 'صالة', fa: 'پایانه', ru: 'терминал' }, isCorrect: false },
                { id: 'o2', text: { tr: 'uçak', en: 'airplane', ar: 'طائرة', fa: 'هواپیما', ru: 'самолет' }, isCorrect: false },
                { id: 'o3', text: { tr: 'bilet', en: 'ticket', ar: 'تذكرة', fa: 'بلیط', ru: 'билет' }, isCorrect: true },
                { id: 'o4', text: { tr: 'vapur', en: 'ferry', ar: 'عبارة', fa: 'کشتی', ru: 'паром' }, isCorrect: false }
              ] },
            { id: 'a1i_ulasim_1_mc_5', type: 'multiple_choice',
              question: { tr: 'uçak', en: 'airplane', ar: 'طائرة', fa: 'هواپیما', ru: 'самолет' },
              options: [
                { id: 'o1', text: { tr: 'uçak', en: 'airplane', ar: 'طائرة', fa: 'هواپیما', ru: 'самолет' }, isCorrect: true },
                { id: 'o2', text: { tr: 'havalimanı', en: 'airport', ar: 'مطار', fa: 'فرودگاه', ru: 'аэропорт' }, isCorrect: false },
                { id: 'o3', text: { tr: 'tramvay', en: 'tram', ar: 'ترامواي', fa: 'تراموا', ru: 'трамвай' }, isCorrect: false },
                { id: 'o4', text: { tr: 'minibüs', en: 'minibus', ar: 'حافلة صغيرة', fa: 'مینی‌بوس', ru: 'маршрутка' }, isCorrect: false }
              ] }
          ]
        },
        {
          id: 'a1i_ulasim_2', type: 'practice', title: { tr: 'Araçlar Eşleştirme', en: 'Match Vehicles', ar: 'مطابقة', fa: 'تطبیق', ru: 'Сопоставление' }, xp: 20, coins: 15,
          exercises: [
            { id: 'a1i_ulasim_2_dd_1', type: 'drag_drop',
              pairs: [
                { id: 'p1', tr: 'metro', translation: { en: 'subway', ar: 'مترو', fa: 'مترو', ru: 'метро' } },
                { id: 'p2', tr: 'tren', translation: { en: 'train', ar: 'قطار', fa: 'قطار', ru: 'поезд' } },
                { id: 'p3', tr: 'havalimanı', translation: { en: 'airport', ar: 'مطار', fa: 'فرودگاه', ru: 'аэропорт' } },
                { id: 'p4', tr: 'terminal', translation: { en: 'terminal', ar: 'صالة', fa: 'پایانه', ru: 'терминал' } },
                { id: 'p5', tr: 'vapur', translation: { en: 'ferry', ar: 'عبارة', fa: 'کشتی', ru: 'паром' } }
              ] }
          ]
        },
        {
          id: 'a1i_ulasim_3', type: 'sentence_building', title: { tr: 'Bilet Almak', en: 'Buying Tickets', ar: 'شراء تذاكر', fa: 'خرید بلیط', ru: 'Покупка билета' }, xp: 20, coins: 15,
          exercises: [
            { id: 'a1i_ulasim_3_wo_1', type: 'word_order',
              sentence: { tr: 'Nereye gidiyorsunuz', en: 'Where are you going', ar: 'إلى أين تذهب', fa: 'کجا می‌روید', ru: 'Куда вы едете' },
              words: [{ id: 'w1', text: 'Nereye' }, { id: 'w2', text: 'gidiyorsunuz' }] },
            { id: 'a1i_ulasim_3_wo_2', type: 'word_order',
              sentence: { tr: 'Bilet nereden alınır', en: 'Where to buy tickets', ar: 'من أين تشترى التذاكر', fa: 'بلیط از کجا خریده می‌شود', ru: 'Где купить билет' },
              words: [{ id: 'w1', text: 'Bilet' }, { id: 'w2', text: 'nereden' }, { id: 'w3', text: 'alınır' }] },
            { id: 'a1i_ulasim_3_wo_3', type: 'word_order',
              sentence: { tr: 'Kaçıncı durakta ineceğim', en: 'Which stop will I get off at', ar: 'في أي موقف سأنزل', fa: 'در کدام ایستگاه پیاده می‌شوم', ru: 'На какой остановке мне выходить' },
              words: [{ id: 'w1', text: 'Kaçıncı' }, { id: 'w2', text: 'durakta' }, { id: 'w3', text: 'ineceğim' }] },
            { id: 'a1i_ulasim_3_fib_1', type: 'fill_in_blank',
              sentence: { tr: 'Beni oraya _ mısınız?', en: 'Can you drop me there?', ar: 'هل يمكنك تركي هناك؟', fa: 'می‌توانید من را آنجا پیاده کنید؟', ru: 'Можете высадить меня там?' },
              blank: { id: 'b1', answer: 'bırakır', options: ['bırakır', 'alır', 'gider'] } },
            { id: 'a1i_ulasim_3_fib_2', type: 'fill_in_blank',
              sentence: { tr: 'Şurada _ yapmak istiyorum.', en: 'I want to transfer there.', ar: 'أريد أن أبدل هناك.', fa: 'می‌خواهم آنجا خط عوض کنم.', ru: 'Я хочу сделать пересадку там.' },
              blank: { id: 'b1', answer: 'aktarma', options: ['aktarma', 'bilet', 'durak'] } }
          ]
        },
        {
          id: 'a1i_ulasim_4', type: 'rpg', title: { tr: 'Otobüs Bileti', en: 'Bus Ticket', ar: 'تذكرة حافلة', fa: 'بلیط اتوبوس', ru: 'Билет на автобус' }, xp: 30, coins: 20,
          exercises: [
            { id: 'a1i_ulasim_4_rpg_1', type: 'rpg',
              scenario: { tr: 'Otobüs bileti alıyorsun.', en: 'You are buying a bus ticket.', ar: 'تشتري تذكرة حافلة.', fa: 'داری بلیط اتوبوس می‌خری.', ru: 'Вы покупаете билет на автобус.' },
              nodes: [
                {
                  id: 'n1', npcText: { tr: 'Merhaba, nereye bilet bakıyorsunuz?', en: 'Hello, where are you looking for a ticket to?', ar: 'مرحباً، إلى أين تريد تذكرة؟', fa: 'سلام، برای کجا بلیط می‌خواهید؟', ru: 'Здравствуйте, куда вы ищете билет?' },
                  options: [
                    { id: 'o1', text: { tr: 'Ankara\'ya bilet istiyorum.', en: 'I want a ticket to Ankara.', ar: 'أريد تذكرة إلى أنقرة.', fa: 'یک بلیط برای آنکارا می‌خواهم.', ru: 'Мне нужен билет в Анкару.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' },
                    { id: 'o2', text: { tr: 'Bir tane ekmek lütfen.', en: 'One bread please.', ar: 'خبز واحد من فضلك.', fa: 'یک نان لطفا.', ru: 'Один хлеб, пожалуйста.' }, isCorrect: false, deductsHeart: true, responseTone: 'negative', nextNodeId: 'n2' }
                  ]
                },
                {
                  id: 'n2', npcText: { tr: 'Saat 14:00 için var. Uygun mu?', en: 'There is one for 14:00. Is it okay?', ar: 'هناك واحدة للساعة 14:00. هل يناسبك؟', fa: 'برای ساعت ۱۴:۰۰ هست. مناسبه؟', ru: 'Есть на 14:00. Подходит?' },
                  options: [
                    { id: 'o1', text: { tr: 'Evet, uygun.', en: 'Yes, it is fine.', ar: 'نعم، مناسب.', fa: 'بله، مناسب است.', ru: 'Да, подходит.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' },
                    { id: 'o2', text: { tr: 'Daha erken var mı?', en: 'Is there an earlier one?', ar: 'هل هناك وقت أبكر؟', fa: 'زودتر هم هست؟', ru: 'Есть раньше?' }, isCorrect: true, deductsHeart: false, responseTone: 'alternative', nextNodeId: 'n3' }
                  ]
                },
                {
                  id: 'n3', npcText: { tr: 'Tamam, biletiniz hazır. İyi yolculuklar.', en: 'Okay, your ticket is ready. Have a good trip.', ar: 'حسناً، تذكرتك جاهزة. رحلة سعيدة.', fa: 'باشه، بلیط شما آماده است. سفر خوبی داشته باشید.', ru: 'Хорошо, ваш билет готов. Счастливого пути.' },
                  options: [
                    { id: 'o1', text: { tr: 'Teşekkür ederim.', en: 'Thank you.', ar: 'شكراً لك.', fa: 'متشکرم.', ru: 'Спасибо.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_ulasim_5', type: 'vocabulary', title: { tr: 'Ulaşım Sözlüğü', en: 'Transport Vocab', ar: 'مفردات', fa: 'لغات', ru: 'Словарь' }, xp: 20, coins: 15,
          exercises: [
            { id: 'a1i_ulasim_5_mc_1', type: 'multiple_choice', question: { tr: 'güzergah', en: 'route', ar: 'طريق', fa: 'مسیر', ru: 'маршрут' },
              options: [{ id: 'o1', text: { tr: 'güzergah', en: 'route', ar: 'طريق', fa: 'مسیر', ru: 'маршрут' }, isCorrect: true }, { id: 'o2', text: { tr: 'durak', en: 'stop', ar: 'موقف', fa: 'ایستگاه', ru: 'остановка' }, isCorrect: false }] },
            { id: 'a1i_ulasim_5_mc_2', type: 'multiple_choice', question: { tr: 'dolmuş', en: 'minibus', ar: 'دولموش (حافلة صغيرة)', fa: 'مینی‌بوس', ru: 'маршрутка (долмуш)' },
              options: [{ id: 'o1', text: { tr: 'metro', en: 'subway', ar: 'مترو', fa: 'مترو', ru: 'метро' }, isCorrect: false }, { id: 'o2', text: { tr: 'dolmuş', en: 'minibus', ar: 'دولموش', fa: 'مینی‌بوس', ru: 'маршрутка' }, isCorrect: true }] },
            { id: 'a1i_ulasim_5_mc_3', type: 'multiple_choice', question: { tr: 'gar', en: 'train station', ar: 'محطة قطار', fa: 'ایستگاه قطار', ru: 'железнодорожный вокзал' },
              options: [{ id: 'o1', text: { tr: 'gar', en: 'train station', ar: 'محطة قطار', fa: 'ایستگاه', ru: 'вокзал' }, isCorrect: true }, { id: 'o2', text: { tr: 'vapur', en: 'ferry', ar: 'عبارة', fa: 'کشتی', ru: 'паром' }, isCorrect: false }] },
            { id: 'a1i_ulasim_5_mc_4', type: 'multiple_choice', question: { tr: 'tramvay', en: 'tram', ar: 'ترامواي', fa: 'تراموا', ru: 'трамвай' },
              options: [{ id: 'o1', text: { tr: 'tramvay', en: 'tram', ar: 'ترامواي', fa: 'تراموا', ru: 'трамвай' }, isCorrect: true }, { id: 'o2', text: { tr: 'uçak', en: 'plane', ar: 'طائرة', fa: 'هواپیما', ru: 'самолет' }, isCorrect: false }] },
            { id: 'a1i_ulasim_5_mc_5', type: 'multiple_choice', question: { tr: 'minibüs', en: 'minibus', ar: 'حافلة صغيرة', fa: 'مینی‌بوس', ru: 'маршрутка' },
              options: [{ id: 'o1', text: { tr: 'taksi', en: 'taxi', ar: 'تاكسي', fa: 'تاکسی', ru: 'такси' }, isCorrect: false }, { id: 'o2', text: { tr: 'minibüs', en: 'minibus', ar: 'حافلة صغيرة', fa: 'مینی‌بوس', ru: 'маршрутка' }, isCorrect: true }] }
          ]
        },
        {
          id: 'a1i_ulasim_6', type: 'practice', title: { tr: 'Yolculuk', en: 'Journey', ar: 'رحلة', fa: 'سفر', ru: 'Поездка' }, xp: 20, coins: 15,
          exercises: [
            { id: 'a1i_ulasim_6_dd_1', type: 'drag_drop',
              pairs: [
                { id: 'p1', tr: 'güzergah', translation: { en: 'route', ar: 'طريق', fa: 'مسیر', ru: 'маршрут' } },
                { id: 'p2', tr: 'dolmuş', translation: { en: 'shared taxi', ar: 'دولموش', fa: 'مینی‌بوس', ru: 'маршрутка' } },
                { id: 'p3', tr: 'tramvay', translation: { en: 'tram', ar: 'ترامواي', fa: 'تراموا', ru: 'трамвай' } },
                { id: 'p4', tr: 'bilet', translation: { en: 'ticket', ar: 'تذكرة', fa: 'بلیط', ru: 'билет' } },
                { id: 'p5', tr: 'durak', translation: { en: 'stop', ar: 'موقف', fa: 'ایستگاه', ru: 'остановка' } }
              ] }
          ]
        },
        {
          id: 'a1i_ulasim_7', type: 'sentence_building', title: { tr: 'Taksi', en: 'Taxi', ar: 'تاكسي', fa: 'تاکسی', ru: 'Такси' }, xp: 20, coins: 15,
          exercises: [
            { id: 'a1i_ulasim_7_wo_1', type: 'word_order',
              sentence: { tr: 'Beni meydana bırakır mısınız', en: 'Can you drop me at the square', ar: 'هل يمكنك تركي في الميدان', fa: 'می‌توانید مرا در میدان پیاده کنید', ru: 'Можете высадить меня на площади' },
              words: [{ id: 'w1', text: 'Beni' }, { id: 'w2', text: 'meydana' }, { id: 'w3', text: 'bırakır' }, { id: 'w4', text: 'mısınız' }] },
            { id: 'a1i_ulasim_7_wo_2', type: 'word_order',
              sentence: { tr: 'Aktarma yapmak gerekiyor mu', en: 'Is it necessary to transfer', ar: 'هل يلزم التبديل', fa: 'آیا نیاز به خط عوض کردن است', ru: 'Нужно ли делать пересадку' },
              words: [{ id: 'w1', text: 'Aktarma' }, { id: 'w2', text: 'yapmak' }, { id: 'w3', text: 'gerekiyor' }, { id: 'w4', text: 'mu' }] },
            { id: 'a1i_ulasim_7_wo_3', type: 'word_order',
              sentence: { tr: 'Taksi çok pahalı', en: 'Taxi is very expensive', ar: 'التاكسي غالي جدا', fa: 'تاکسی خیلی گران است', ru: 'Такси очень дорогое' },
              words: [{ id: 'w1', text: 'Taksi' }, { id: 'w2', text: 'çok' }, { id: 'w3', text: 'pahalı' }] },
            { id: 'a1i_ulasim_7_fib_1', type: 'fill_in_blank',
              sentence: { tr: 'Sonraki _ inmek istiyorum.', en: 'I want to get off at the next stop.', ar: 'أريد النزول في الموقف التالي.', fa: 'می‌خواهم در ایستگاه بعدی پیاده شوم.', ru: 'Я хочу выйти на следующей остановке.' },
              blank: { id: 'b1', answer: 'durakta', options: ['durakta', 'bilet', 'gar'] } },
            { id: 'a1i_ulasim_7_fib_2', type: 'fill_in_blank',
              sentence: { tr: 'Bu otobüsün _ neresi?', en: 'What is the route of this bus?', ar: 'ما هو مسار هذه الحافلة؟', fa: 'مسیر این اتوبوس کجاست؟', ru: 'Какой маршрут у этого автобуса?' },
              blank: { id: 'b1', answer: 'güzergahı', options: ['güzergahı', 'terminali', 'durak'] } }
          ]
        },
        {
          id: 'a1i_ulasim_8', type: 'rpg', title: { tr: 'Taksi Yolculuğu', en: 'Taxi Ride', ar: 'ركوب تاكسي', fa: 'سوار تاکسی', ru: 'Поездка на такси' }, xp: 30, coins: 20,
          exercises: [
            { id: 'a1i_ulasim_8_rpg_1', type: 'rpg',
              scenario: { tr: 'Taksidesiniz ve şoförle konuşuyorsunuz.', en: 'You are in a taxi talking to the driver.', ar: 'أنت في التاكسي تتحدث مع السائق.', fa: 'در تاکسی هستید و با راننده صحبت می‌کنید.', ru: 'Вы в такси и разговариваете с водителем.' },
              nodes: [
                {
                  id: 'n1', npcText: { tr: 'Hoş geldiniz, nereye gidiyoruz?', en: 'Welcome, where are we going?', ar: 'أهلاً، إلى أين نذهب؟', fa: 'خوش آمدید، کجا می‌رویم؟', ru: 'Добро пожаловать, куда едем?' },
                  options: [
                    { id: 'o1', text: { tr: 'Havalimanına lütfen.', en: 'To the airport please.', ar: 'إلى المطار من فضلك.', fa: 'به فرودگاه لطفا.', ru: 'В аэропорт, пожалуйста.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' },
                    { id: 'o2', text: { tr: 'Beni burada bırakın.', en: 'Leave me here.', ar: 'اتركني هنا.', fa: 'مرا اینجا پیاده کنید.', ru: 'Оставьте меня здесь.' }, isCorrect: true, deductsHeart: false, responseTone: 'alternative', nextNodeId: 'n2' }
                  ]
                },
                {
                  id: 'n2', npcText: { tr: 'Trafik biraz yoğun, otobandan gidelim mi?', en: 'Traffic is a bit heavy, should we take the highway?', ar: 'الزحام شديد قليلاً، هل نأخذ الطريق السريع؟', fa: 'ترافیک کمی سنگین است، از بزرگراه برویم؟', ru: 'Пробки, поедем по шоссе?' },
                  options: [
                    { id: 'o1', text: { tr: 'Evet, hızlı gidelim.', en: 'Yes, let\'s go fast.', ar: 'نعم، لنذهب بسرعة.', fa: 'بله، سریع برویم.', ru: 'Да, поедем быстрее.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' },
                    { id: 'o2', text: { tr: 'Uçmak istiyorum.', en: 'I want to fly.', ar: 'أريد أن أطير.', fa: 'می‌خواهم پرواز کنم.', ru: 'Я хочу лететь.' }, isCorrect: false, deductsHeart: true, responseTone: 'negative', nextNodeId: 'n3' }
                  ]
                },
                {
                  id: 'n3', npcText: { tr: 'Geldik. 200 lira tuttu.', en: 'We arrived. It cost 200 liras.', ar: 'وصلنا. التكلفة 200 ليرة.', fa: 'رسیدیم. ۲۰۰ لیر شد.', ru: 'Приехали. С вас 200 лир.' },
                  options: [
                    { id: 'o1', text: { tr: 'Buyurun, teşekkürler.', en: 'Here you go, thanks.', ar: 'تفضل، شكراً.', fa: 'بفرمایید، ممنون.', ru: 'Вот, спасибо.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_ulasim_9', type: 'boss_fight', title: { tr: 'Ulaşım Sınavı', en: 'Transport Test', ar: 'اختبار المواصلات', fa: 'امتحان حمل و نقل', ru: 'Тест по транспорту' }, xp: 50, coins: 30,
          exercises: [
            { id: 'a1i_ulasim_9_mc_1', type: 'multiple_choice', question: { tr: 'tramvay', en: 'tram', ar: 'ترامواي', fa: 'تراموا', ru: 'трамвай' }, options: [{ id: 'o1', text: { tr: 'tramvay', en: 'tram', ar: 'ترام', fa: 'تراموا', ru: 'трамвай' }, isCorrect: true }, { id: 'o2', text: { tr: 'taksi', en: 'taxi', ar: 'تاكسي', fa: 'تاکسی', ru: 'такси' }, isCorrect: false }] },
            { id: 'a1i_ulasim_9_mc_2', type: 'multiple_choice', question: { tr: 'durak', en: 'stop', ar: 'موقف', fa: 'ایستگاه', ru: 'остановка' }, options: [{ id: 'o1', text: { tr: 'durak', en: 'stop', ar: 'موقف', fa: 'ایستگاه', ru: 'остановка' }, isCorrect: true }, { id: 'o2', text: { tr: 'bilet', en: 'ticket', ar: 'تذكرة', fa: 'بلیط', ru: 'билет' }, isCorrect: false }] },
            { id: 'a1i_ulasim_9_mc_3', type: 'multiple_choice', question: { tr: 'gar', en: 'station', ar: 'محطة', fa: 'ایستگاه راه آهن', ru: 'вокзал' }, options: [{ id: 'o1', text: { tr: 'gar', en: 'station', ar: 'محطة', fa: 'ایستگاه', ru: 'вокзал' }, isCorrect: true }, { id: 'o2', text: { tr: 'uçak', en: 'plane', ar: 'طائرة', fa: 'هواپیما', ru: 'самолет' }, isCorrect: false }] },
            { id: 'a1i_ulasim_9_mc_4', type: 'multiple_choice', question: { tr: 'havalimanı', en: 'airport', ar: 'مطار', fa: 'فرودگاه', ru: 'аэропорт' }, options: [{ id: 'o1', text: { tr: 'havalimanı', en: 'airport', ar: 'مطار', fa: 'فرودگاه', ru: 'аэропорт' }, isCorrect: true }, { id: 'o2', text: { tr: 'vapur', en: 'ferry', ar: 'عبارة', fa: 'کشتی', ru: 'паром' }, isCorrect: false }] },
            { id: 'a1i_ulasim_9_wo_1', type: 'word_order', sentence: { tr: 'Beni merkeze bırakır mısınız', en: 'Can you drop me at the center', ar: 'هل يمكنك تركي في المركز', fa: 'می‌توانید مرا در مرکز پیاده کنید', ru: 'Можете высадить меня в центре' }, words: [{ id: 'w1', text: 'Beni' }, { id: 'w2', text: 'merkeze' }, { id: 'w3', text: 'bırakır' }, { id: 'w4', text: 'mısınız' }] },
            { id: 'a1i_ulasim_9_wo_2', type: 'word_order', sentence: { tr: 'Bilet nereden alınır', en: 'Where are tickets bought', ar: 'من أين تشترى التذاكر', fa: 'بلیط از کجا خریده می‌شود', ru: 'Где купить билет' }, words: [{ id: 'w1', text: 'Bilet' }, { id: 'w2', text: 'nereden' }, { id: 'w3', text: 'alınır' }] },
            { id: 'a1i_ulasim_9_fib_1', type: 'fill_in_blank', sentence: { tr: 'Ben _ inmek istiyorum.', en: 'I want to get off at the stop.', ar: 'أريد النزول في الموقف.', fa: 'می‌خواهم در ایستگاه پیاده شوم.', ru: 'Я хочу выйти на остановке.' }, blank: { id: 'b1', answer: 'durakta', options: ['durakta', 'bilet', 'gar'] } },
            { id: 'a1i_ulasim_9_fib_2', type: 'fill_in_blank', sentence: { tr: 'Burada _ yapmam lazım.', en: 'I need to make a transfer here.', ar: 'يجب أن أبدل هنا.', fa: 'اینجا باید خط عوض کنم.', ru: 'Здесь мне нужно сделать пересадку.' }, blank: { id: 'b1', answer: 'aktarma', options: ['aktarma', 'uçak', 'taksi'] } }
          ]
        }
      ]
    },
    {
      id: 'a1i_okul', title: { tr: 'Okul', en: 'School', ar: 'مدرسة', fa: 'مدرسه', ru: 'Школа' }, description: { tr: 'Eğitim ve sınıf', en: 'Education and classroom', ar: 'التعليم والصف', fa: 'آموزش و کلاس', ru: 'Образование и класс' }, order: 2, emoji: '🏫', color: 'from-lime-400 to-green-500',
      lessons: [
        {
          id: 'a1i_okul_1', type: 'vocabulary', title: { tr: 'Sınıf Eşyaları', en: 'Classroom Items', ar: 'أشياء الصف', fa: 'وسایل کلاس', ru: 'Школьные принадлежности' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'kalem', en: 'pen', ar: 'قلم', fa: 'قلم', ru: 'ручка' }, options: [{ id: 'o1', text: { tr: 'kalem', en: 'pen', ar: 'قلم', fa: 'قلم', ru: 'ручка' }, isCorrect: true }, { id: 'o2', text: { tr: 'silgi', en: 'eraser', ar: 'ممحاة', fa: 'پاک کن', ru: 'ластик' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'defter', en: 'notebook', ar: 'دفتر', fa: 'دفتر', ru: 'тетрадь' }, options: [{ id: 'o1', text: { tr: 'kitap', en: 'book', ar: 'كتاب', fa: 'کتاب', ru: 'книга' }, isCorrect: false }, { id: 'o2', text: { tr: 'defter', en: 'notebook', ar: 'دفتر', fa: 'دفتر', ru: 'тетрадь' }, isCorrect: true }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'kitap', en: 'book', ar: 'كتاب', fa: 'کتاب', ru: 'книга' }, options: [{ id: 'o1', text: { tr: 'kitap', en: 'book', ar: 'كتاب', fa: 'کتاب', ru: 'книга' }, isCorrect: true }, { id: 'o2', text: { tr: 'sıra', en: 'desk', ar: 'مقعد', fa: 'میز', ru: 'парта' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'tahta', en: 'board', ar: 'سبورة', fa: 'تخته', ru: 'доска' }, options: [{ id: 'o1', text: { tr: 'tahta', en: 'board', ar: 'سبورة', fa: 'تخته', ru: 'доска' }, isCorrect: true }, { id: 'o2', text: { tr: 'kalem', en: 'pen', ar: 'قلم', fa: 'قلم', ru: 'ручка' }, isCorrect: false }] },
            { id: 'e5', type: 'multiple_choice', question: { tr: 'silgi', en: 'eraser', ar: 'ممحاة', fa: 'پاک کن', ru: 'ластик' }, options: [{ id: 'o1', text: { tr: 'silgi', en: 'eraser', ar: 'ممحاة', fa: 'پاک کن', ru: 'ластик' }, isCorrect: true }, { id: 'o2', text: { tr: 'defter', en: 'notebook', ar: 'دفتر', fa: 'دفتر', ru: 'тетрадь' }, isCorrect: false }] }
          ]
        },
        {
          id: 'a1i_okul_2', type: 'practice', title: { tr: 'Eşyalar Eşleştirme', en: 'Match Items', ar: 'مطابقة', fa: 'تطبیق', ru: 'Сопоставление' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'drag_drop', pairs: [
              { id: 'p1', tr: 'öğretmen', translation: { en: 'teacher', ar: 'معلم', fa: 'معلم', ru: 'учитель' } },
              { id: 'p2', tr: 'öğrenci', translation: { en: 'student', ar: 'طالب', fa: 'دانش‌آموز', ru: 'студент' } },
              { id: 'p3', tr: 'sınıf', translation: { en: 'class', ar: 'صف', fa: 'کلاس', ru: 'класс' } },
              { id: 'p4', tr: 'okul', translation: { en: 'school', ar: 'مدرسة', fa: 'مدرسه', ru: 'школа' } },
              { id: 'p5', tr: 'ders', translation: { en: 'lesson', ar: 'درس', fa: 'درس', ru: 'урок' } }
            ]}
          ]
        },
        {
          id: 'a1i_okul_3', type: 'sentence_building', title: { tr: 'Okulda', en: 'At School', ar: 'في المدرسة', fa: 'در مدرسه', ru: 'В школе' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'word_order', sentence: { tr: 'Tekrar söyler misiniz', en: 'Can you say it again', ar: 'هل يمكنك أن تقولها مرة أخرى', fa: 'می‌توانید دوباره بگویید', ru: 'Можете сказать еще раз' }, words: [{ id: 'w1', text: 'Tekrar' }, { id: 'w2', text: 'söyler' }, { id: 'w3', text: 'misiniz' }] },
            { id: 'e2', type: 'word_order', sentence: { tr: 'Türkçe kursuna gidiyorum', en: 'I am going to a Turkish course', ar: 'أنا ذاهب إلى دورة لغة تركية', fa: 'من به کلاس ترکی می‌روم', ru: 'Я хожу на курсы турецкого' }, words: [{ id: 'w1', text: 'Türkçe' }, { id: 'w2', text: 'kursuna' }, { id: 'w3', text: 'gidiyorum' }] },
            { id: 'e3', type: 'word_order', sentence: { tr: 'Bu kelime ne anlama geliyor', en: 'What does this word mean', ar: 'ماذا تعني هذه الكلمة', fa: 'این کلمه چه معنایی دارد', ru: 'Что означает это слово' }, words: [{ id: 'w1', text: 'Bu' }, { id: 'w2', text: 'kelime' }, { id: 'w3', text: 'ne' }, { id: 'w4', text: 'anlama' }, { id: 'w5', text: 'geliyor' }] },
            { id: 'e4', type: 'fill_in_blank', sentence: { tr: 'Ödev ne zaman _ edilecek?', en: 'When will the homework be submitted?', ar: 'متى سيتم تسليم الواجب؟', fa: 'تکلیف چه زمانی تحویل داده می‌شود؟', ru: 'Когда нужно сдать домашнее задание?' }, blank: { id: 'b1', answer: 'teslim', options: ['teslim', 'kalem', 'okul'] } },
            { id: 'e5', type: 'fill_in_blank', sentence: { tr: 'Öğretmen tahtaya _ yazdı.', en: 'The teacher wrote on the board.', ar: 'المعلم كتب على السبورة.', fa: 'معلم روی تخته نوشت.', ru: 'Учитель написал на доске.' }, blank: { id: 'b1', answer: 'yazı', options: ['yazı', 'silgi', 'sıra'] } }
          ]
        },
        {
          id: 'a1i_okul_4', type: 'rpg', title: { tr: 'İlk Gün', en: 'First Day', ar: 'اليوم الأول', fa: 'روز اول', ru: 'Первый день' }, xp: 30, coins: 20,
          exercises: [
            { id: 'e1', type: 'rpg', scenario: { tr: 'Türkçe kursunda öğretmeninle konuşuyorsun.', en: 'Talking to your teacher at the Turkish course.', ar: 'تتحدث مع معلمك في دورة اللغة التركية.', fa: 'با معلمت در کلاس ترکی صحبت می‌کنی.', ru: 'Разговор с учителем на курсах турецкого.' },
              nodes: [
                { id: 'n1', npcText: { tr: 'Merhaba, sınıfımıza hoş geldin!', en: 'Hello, welcome to our class!', ar: 'مرحباً، أهلاً بك في صفنا!', fa: 'سلام، به کلاس ما خوش آمدید!', ru: 'Здравствуйте, добро пожаловать в наш класс!' },
                  options: [
                    { id: 'o1', text: { tr: 'Hoş buldum, teşekkürler.', en: 'Thanks for having me.', ar: 'شكراً لك.', fa: 'ممنون.', ru: 'Спасибо.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' }
                  ]
                },
                { id: 'n2', npcText: { tr: 'Nerelisin ve neden Türkçe öğreniyorsun?', en: 'Where are you from and why are you learning Turkish?', ar: 'من أين أنت ولماذا تتعلم التركية؟', fa: 'اهل کجایی و چرا ترکی یاد می‌گیری؟', ru: 'Откуда вы и почему учите турецкий?' },
                  options: [
                    { id: 'o1', text: { tr: 'Ben İngiltereliyim. Türkiye\'yi seviyorum.', en: 'I am from England. I love Turkey.', ar: 'أنا من إنجلترا. أحب تركيا.', fa: 'من اهل انگلستانم. ترکیه را دوست دارم.', ru: 'Я из Англии. Я люблю Турцию.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' },
                    { id: 'o2', text: { tr: 'Biraz kahve lütfen.', en: 'Some coffee please.', ar: 'بعض القهوة من فضلك.', fa: 'کمی قهوه لطفا.', ru: 'Кофе, пожалуйста.' }, isCorrect: false, deductsHeart: true, responseTone: 'negative', nextNodeId: 'n3' }
                  ]
                },
                { id: 'n3', npcText: { tr: 'Çok güzel, derse başlayalım.', en: 'Very nice, let\'s start the lesson.', ar: 'جميل جداً، لنبدأ الدرس.', fa: 'خیلی عالی، بیا درس را شروع کنیم.', ru: 'Отлично, давайте начнем урок.' },
                  options: [
                    { id: 'o1', text: { tr: 'Tamam öğretmenim.', en: 'Okay teacher.', ar: 'حسناً معلمي.', fa: 'باشه معلم.', ru: 'Хорошо, учитель.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_okul_5', type: 'vocabulary', title: { tr: 'Sınav ve Not', en: 'Exam and Grades', ar: 'امتحان وعلامات', fa: 'امتحان و نمره', ru: 'Экзамен и оценки' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'ödev', en: 'homework', ar: 'واجب', fa: 'تکلیف', ru: 'домашнее задание' }, options: [{ id: 'o1', text: { tr: 'ödev', en: 'homework', ar: 'واجب', fa: 'تکلیف', ru: 'домашнее задание' }, isCorrect: true }, { id: 'o2', text: { tr: 'okul', en: 'school', ar: 'مدرسة', fa: 'مدرسه', ru: 'школа' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'sınav', en: 'exam', ar: 'امتحان', fa: 'امتحان', ru: 'экзамен' }, options: [{ id: 'o1', text: { tr: 'sınav', en: 'exam', ar: 'امتحان', fa: 'امتحان', ru: 'экзамен' }, isCorrect: true }, { id: 'o2', text: { tr: 'silgi', en: 'eraser', ar: 'ممحاة', fa: 'پاک کن', ru: 'ластик' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'not', en: 'grade', ar: 'علامة', fa: 'نمره', ru: 'оценка' }, options: [{ id: 'o1', text: { tr: 'not', en: 'grade', ar: 'علامة', fa: 'نمره', ru: 'оценка' }, isCorrect: true }, { id: 'o2', text: { tr: 'ders', en: 'lesson', ar: 'درس', fa: 'درس', ru: 'урок' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'kütüphane', en: 'library', ar: 'مكتبة', fa: 'کتابخانه', ru: 'библиотека' }, options: [{ id: 'o1', text: { tr: 'kütüphane', en: 'library', ar: 'مكتبة', fa: 'کتابخانه', ru: 'библиотека' }, isCorrect: true }, { id: 'o2', text: { tr: 'öğrenci', en: 'student', ar: 'طالب', fa: 'دانش‌آموز', ru: 'студент' }, isCorrect: false }] },
            { id: 'e5', type: 'multiple_choice', question: { tr: 'öğretmen', en: 'teacher', ar: 'معلم', fa: 'معلم', ru: 'учитель' }, options: [{ id: 'o1', text: { tr: 'öğretmen', en: 'teacher', ar: 'معلم', fa: 'معلم', ru: 'учитель' }, isCorrect: true }, { id: 'o2', text: { tr: 'okul', en: 'school', ar: 'مدرسة', fa: 'مدرسه', ru: 'школа' }, isCorrect: false }] }
          ]
        },
        {
          id: 'a1i_okul_6', type: 'practice', title: { tr: 'Terimler', en: 'Terms', ar: 'مصطلحات', fa: 'اصطلاحات', ru: 'Термины' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'drag_drop', pairs: [
              { id: 'p1', tr: 'ödev', translation: { en: 'homework', ar: 'واجب', fa: 'تکلیف', ru: 'домашнее задание' } },
              { id: 'p2', tr: 'sınav', translation: { en: 'exam', ar: 'امتحان', fa: 'امتحان', ru: 'экзамен' } },
              { id: 'p3', tr: 'not', translation: { en: 'grade', ar: 'علامة', fa: 'نمره', ru: 'оценка' } },
              { id: 'p4', tr: 'kütüphane', translation: { en: 'library', ar: 'مكتبة', fa: 'کتابخانه', ru: 'библиотека' } },
              { id: 'p5', tr: 'öğrenci', translation: { en: 'student', ar: 'طالب', fa: 'دانش‌آموز', ru: 'студент' } }
            ]}
          ]
        },
        {
          id: 'a1i_okul_7', type: 'sentence_building', title: { tr: 'Kütüphanede', en: 'In the Library', ar: 'في المكتبة', fa: 'در کتابخانه', ru: 'В библиотеке' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'word_order', sentence: { tr: 'Anlayamadım', en: 'I didn\'t understand', ar: 'لم أفهم', fa: 'متوجه نشدم', ru: 'Я не понял' }, words: [{ id: 'w1', text: 'Anlayamadım' }] },
            { id: 'e2', type: 'word_order', sentence: { tr: 'Bir kitap almak istiyorum', en: 'I want to borrow a book', ar: 'أريد أن أستعير كتاباً', fa: 'می‌خواهم یک کتاب امانت بگیرم', ru: 'Я хочу взять книгу' }, words: [{ id: 'w1', text: 'Bir' }, { id: 'w2', text: 'kitap' }, { id: 'w3', text: 'almak' }, { id: 'w4', text: 'istiyorum' }] },
            { id: 'e3', type: 'word_order', sentence: { tr: 'Sınav çok zordu', en: 'The exam was very difficult', ar: 'الامتحان كان صعباً جداً', fa: 'امتحان خیلی سخت بود', ru: 'Экзамен был очень сложным' }, words: [{ id: 'w1', text: 'Sınav' }, { id: 'w2', text: 'çok' }, { id: 'w3', text: 'zordu' }] },
            { id: 'e4', type: 'fill_in_blank', sentence: { tr: 'Ben Türkçe _ gidiyorum.', en: 'I am going to the Turkish course.', ar: 'أنا ذاهب إلى دورة اللغة التركية.', fa: 'من به کلاس ترکی می‌روم.', ru: 'Я хожу на курсы турецкого.' }, blank: { id: 'b1', answer: 'kursuna', options: ['kursuna', 'kitap', 'ödev'] } },
            { id: 'e5', type: 'fill_in_blank', sentence: { tr: 'Sessiz olun, burası _.', en: 'Be quiet, this is a library.', ar: 'كونوا هادئين، هذه مكتبة.', fa: 'ساکت باشید، اینجا کتابخانه است.', ru: 'Тише, это библиотека.' }, blank: { id: 'b1', answer: 'kütüphane', options: ['kütüphane', 'silgi', 'kalem'] } }
          ]
        },
        {
          id: 'a1i_okul_8', type: 'rpg', title: { tr: 'Kütüphanede', en: 'At the Library', ar: 'في المكتبة', fa: 'در کتابخانه', ru: 'В библиотеке' }, xp: 30, coins: 20,
          exercises: [
            { id: 'e1', type: 'rpg', scenario: { tr: 'Kütüphaneciye bir sözlük soruyorsun.', en: 'Asking the librarian for a dictionary.', ar: 'تسأل أمين المكتبة عن قاموس.', fa: 'از کتابدار درباره فرهنگ لغت می‌پرسی.', ru: 'Спрашиваете у библиотекаря словарь.' },
              nodes: [
                { id: 'n1', npcText: { tr: 'Buyurun, nasıl yardımcı olabilirim?', en: 'Yes, how can I help?', ar: 'تفضل، كيف يمكنني المساعدة؟', fa: 'بفرمایید، چطور می‌توانم کمک کنم؟', ru: 'Слушаю, чем могу помочь?' },
                  options: [
                    { id: 'o1', text: { tr: 'Türkçe-İngilizce sözlük nerede?', en: 'Where is the Turkish-English dictionary?', ar: 'أين قاموس تركي-إنجليزي؟', fa: 'فرهنگ لغت ترکی-انگلیسی کجاست؟', ru: 'Где турецко-английский словарь?' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' }
                  ]
                },
                { id: 'n2', npcText: { tr: 'İkinci rafta bulabilirsiniz.', en: 'You can find it on the second shelf.', ar: 'يمكنك العثور عليه في الرف الثاني.', fa: 'می‌توانید در قفسه دوم پیدایش کنید.', ru: 'Вы найдете его на второй полке.' },
                  options: [
                    { id: 'o1', text: { tr: 'Teşekkürler.', en: 'Thanks.', ar: 'شكراً.', fa: 'ممنون.', ru: 'Спасибо.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' }
                  ]
                },
                { id: 'n3', npcText: { tr: 'Rica ederim, iyi çalışmalar.', en: 'You are welcome, have a good study.', ar: 'عفواً، دراسة موفقة.', fa: 'خواهش می‌کنم، مطالعه خوبی داشته باشید.', ru: 'Пожалуйста, успешной учебы.' },
                  options: [
                    { id: 'o1', text: { tr: 'Görüşmek üzere.', en: 'See you.', ar: 'إلى اللقاء.', fa: 'به امید دیدار.', ru: 'Увидимся.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_okul_9', type: 'boss_fight', title: { tr: 'Okul Sınavı', en: 'School Test', ar: 'اختبار المدرسة', fa: 'امتحان مدرسه', ru: 'Школьный тест' }, xp: 50, coins: 30,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'kalem', en: 'pen', ar: 'قلم', fa: 'قلم', ru: 'ручка' }, options: [{ id: 'o1', text: { tr: 'kalem', en: 'pen', ar: 'قلم', fa: 'قلم', ru: 'ручка' }, isCorrect: true }, { id: 'o2', text: { tr: 'okul', en: 'school', ar: 'مدرسة', fa: 'مدرسه', ru: 'школа' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'ödev', en: 'homework', ar: 'واجب', fa: 'تکلیف', ru: 'домашнее задание' }, options: [{ id: 'o1', text: { tr: 'ödev', en: 'homework', ar: 'واجب', fa: 'تکلیف', ru: 'домашнее задание' }, isCorrect: true }, { id: 'o2', text: { tr: 'silgi', en: 'eraser', ar: 'ممحاة', fa: 'پاک کن', ru: 'ластик' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'sınıf', en: 'class', ar: 'صف', fa: 'کلاس', ru: 'класс' }, options: [{ id: 'o1', text: { tr: 'sınıf', en: 'class', ar: 'صف', fa: 'کلاس', ru: 'класс' }, isCorrect: true }, { id: 'o2', text: { tr: 'not', en: 'grade', ar: 'علامة', fa: 'نمره', ru: 'оценка' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'öğretmen', en: 'teacher', ar: 'معلم', fa: 'معلم', ru: 'учитель' }, options: [{ id: 'o1', text: { tr: 'öğretmen', en: 'teacher', ar: 'معلم', fa: 'معلم', ru: 'учитель' }, isCorrect: true }, { id: 'o2', text: { tr: 'sıra', en: 'desk', ar: 'مقعد', fa: 'میز', ru: 'парта' }, isCorrect: false }] },
            { id: 'e5', type: 'word_order', sentence: { tr: 'Bu kelime ne anlama geliyor', en: 'What does this word mean', ar: 'ماذا تعني هذه الكلمة', fa: 'این کلمه چه معنایی دارد', ru: 'Что означает это слово' }, words: [{ id: 'w1', text: 'Bu' }, { id: 'w2', text: 'kelime' }, { id: 'w3', text: 'ne' }, { id: 'w4', text: 'anlama' }, { id: 'w5', text: 'geliyor' }] },
            { id: 'e6', type: 'word_order', sentence: { tr: 'Sınav çok zordu', en: 'The exam was very hard', ar: 'الامتحان كان صعباً جداً', fa: 'امتحان خیلی سخت بود', ru: 'Экзамен был очень трудным' }, words: [{ id: 'w1', text: 'Sınav' }, { id: 'w2', text: 'çok' }, { id: 'w3', text: 'zordu' }] },
            { id: 'e7', type: 'fill_in_blank', sentence: { tr: 'Tekrar söyler _?', en: 'Can you say it again?', ar: 'هل يمكنك أن تقولها مرة أخرى؟', fa: 'می‌توانید دوباره بگویید؟', ru: 'Можете повторить?' }, blank: { id: 'b1', answer: 'misiniz', options: ['misiniz', 'mi', 'musunuz'] } },
            { id: 'e8', type: 'fill_in_blank', sentence: { tr: 'Bugün çok _ var.', en: 'There is a lot of homework today.', ar: 'هناك الكثير من الواجبات اليوم.', fa: 'امروز تکالیف زیادی داریم.', ru: 'Сегодня много домашнего задания.' }, blank: { id: 'b1', answer: 'ödev', options: ['ödev', 'okul', 'sınıf'] } }
          ]
        }
      ]
    },
    {
      id: 'a1i_alisveris', title: { tr: 'Alışveriş', en: 'Shopping', ar: 'تسوق', fa: 'خرید', ru: 'Покупки' }, description: { tr: 'Kıyafet ve mağazalar', en: 'Clothes and stores', ar: 'ملابس ومتاجر', fa: 'لباس و فروشگاه‌ها', ru: 'Одежда и магазины' }, order: 3, emoji: '🛍️', color: 'from-fuchsia-400 to-pink-500',
      lessons: [
        {
          id: 'a1i_alisveris_1', type: 'vocabulary', title: { tr: 'Kıyafetler', en: 'Clothes', ar: 'ملابس', fa: 'لباس‌ها', ru: 'Одежда' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'gömlek', en: 'shirt', ar: 'قميص', fa: 'پیراهن', ru: 'рубашка' }, options: [{ id: 'o1', text: { tr: 'gömlek', en: 'shirt', ar: 'قميص', fa: 'پیراهن', ru: 'рубашка' }, isCorrect: true }, { id: 'o2', text: { tr: 'pantolon', en: 'pants', ar: 'بنطلون', fa: 'شلوار', ru: 'брюки' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'pantolon', en: 'pants', ar: 'بنطلون', fa: 'شلوار', ru: 'брюки' }, options: [{ id: 'o1', text: { tr: 'pantolon', en: 'pants', ar: 'بنطلون', fa: 'شلوار', ru: 'брюки' }, isCorrect: true }, { id: 'o2', text: { tr: 'etek', en: 'skirt', ar: 'تنورة', fa: 'دامن', ru: 'юбка' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'etek', en: 'skirt', ar: 'تنورة', fa: 'دامن', ru: 'юбка' }, options: [{ id: 'o1', text: { tr: 'etek', en: 'skirt', ar: 'تنورة', fa: 'دامن', ru: 'юбка' }, isCorrect: true }, { id: 'o2', text: { tr: 'elbise', en: 'dress', ar: 'فستان', fa: 'لباس', ru: 'платье' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'elbise', en: 'dress', ar: 'فستان', fa: 'لباس', ru: 'платье' }, options: [{ id: 'o1', text: { tr: 'elbise', en: 'dress', ar: 'فستان', fa: 'لباس', ru: 'платье' }, isCorrect: true }, { id: 'o2', text: { tr: 'ceket', en: 'jacket', ar: 'سترة', fa: 'کت', ru: 'куртка' }, isCorrect: false }] },
            { id: 'e5', type: 'multiple_choice', question: { tr: 'ceket', en: 'jacket', ar: 'سترة', fa: 'کت', ru: 'куртка' }, options: [{ id: 'o1', text: { tr: 'ceket', en: 'jacket', ar: 'سترة', fa: 'کت', ru: 'куртка' }, isCorrect: true }, { id: 'o2', text: { tr: 'ayakkabı', en: 'shoes', ar: 'حذاء', fa: 'کفش', ru: 'обувь' }, isCorrect: false }] }
          ]
        },
        {
          id: 'a1i_alisveris_2', type: 'practice', title: { tr: 'Kıyafet Eşleştirme', en: 'Match Clothes', ar: 'مطابقة', fa: 'تطبیق', ru: 'Сопоставление' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'drag_drop', pairs: [
              { id: 'p1', tr: 'ayakkabı', translation: { en: 'shoes', ar: 'حذاء', fa: 'کفش', ru: 'обувь' } },
              { id: 'p2', tr: 'çanta', translation: { en: 'bag', ar: 'حقيبة', fa: 'کیف', ru: 'сумка' } },
              { id: 'p3', tr: 'kemer', translation: { en: 'belt', ar: 'حزام', fa: 'کمربند', ru: 'ремень' } },
              { id: 'p4', tr: 'şapka', translation: { en: 'hat', ar: 'قبعة', fa: 'کلاه', ru: 'шляпа' } },
              { id: 'p5', tr: 'atkı', translation: { en: 'scarf', ar: 'وشاح', fa: 'شال', ru: 'шарф' } }
            ]}
          ]
        },
        {
          id: 'a1i_alisveris_3', type: 'sentence_building', title: { tr: 'Mağazada', en: 'In the Store', ar: 'في المتجر', fa: 'در فروشگاه', ru: 'В магазине' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'word_order', sentence: { tr: 'Deneyebilir miyim', en: 'Can I try it on', ar: 'هل يمكنني تجربته', fa: 'می‌توانم امتحان کنم', ru: 'Могу я примерить' }, words: [{ id: 'w1', text: 'Deneyebilir' }, { id: 'w2', text: 'miyim' }] },
            { id: 'e2', type: 'word_order', sentence: { tr: 'Başka rengi var mı', en: 'Is there another color', ar: 'هل هناك لون آخر', fa: 'آیا رنگ دیگری دارد', ru: 'Есть другой цвет' }, words: [{ id: 'w1', text: 'Başka' }, { id: 'w2', text: 'rengi' }, { id: 'w3', text: 'var' }, { id: 'w4', text: 'mı' }] },
            { id: 'e3', type: 'word_order', sentence: { tr: 'Bu çok büyük', en: 'This is too big', ar: 'هذا كبير جداً', fa: 'این خیلی بزرگ است', ru: 'Это слишком велико' }, words: [{ id: 'w1', text: 'Bu' }, { id: 'w2', text: 'çok' }, { id: 'w3', text: 'büyük' }] },
            { id: 'e4', type: 'fill_in_blank', sentence: { tr: 'İndirim _ mı?', en: 'Is there a discount?', ar: 'هل هناك خصم؟', fa: 'آیا تخفیف دارد؟', ru: 'Есть скидка?' }, blank: { id: 'b1', answer: 'var', options: ['var', 'yok', 'mı'] } },
            { id: 'e5', type: 'fill_in_blank', sentence: { tr: 'Bunu iade _ miyim?', en: 'Can I return this?', ar: 'هل يمكنني إرجاع هذا؟', fa: 'می‌توانم این را پس بدهم؟', ru: 'Могу я вернуть это?' }, blank: { id: 'b1', answer: 'edebilir', options: ['edebilir', 'alabilir', 'gidebilir'] } }
          ]
        },
        {
          id: 'a1i_alisveris_4', type: 'rpg', title: { tr: 'Kıyafet Alışverişi', en: 'Clothes Shopping', ar: 'تسوق الملابس', fa: 'خرید لباس', ru: 'Покупка одежды' }, xp: 30, coins: 20,
          exercises: [
            { id: 'e1', type: 'rpg', scenario: { tr: 'Kıyafet deniyorsun ve satıcıyla konuşuyorsun.', en: 'Trying on clothes and talking to the seller.', ar: 'تجرب الملابس وتتحدث مع البائع.', fa: 'لباس امتحان می‌کنی و با فروشنده صحبت می‌کنی.', ru: 'Примеряете одежду и разговариваете с продавцом.' },
              nodes: [
                { id: 'n1', npcText: { tr: 'Nasıl oldu, beğendiniz mi?', en: 'How was it, did you like it?', ar: 'كيف كان، هل أعجبك؟', fa: 'چطور بود، خوشتان آمد؟', ru: 'Как вам, понравилось?' },
                  options: [
                    { id: 'o1', text: { tr: 'Bu çok büyük. Bir küçüğü var mı?', en: 'This is too big. Do you have a smaller one?', ar: 'هذا كبير جداً. هل لديك مقاس أصغر؟', fa: 'این خیلی بزرگ است. کوچکترش را دارید؟', ru: 'Это слишком велико. Есть размер поменьше?' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' }
                  ]
                },
                { id: 'n2', npcText: { tr: 'Evet, hemen getiriyorum. Rengi nasıl?', en: 'Yes, bringing it right away. How is the color?', ar: 'نعم، سأحضره فوراً. كيف هو اللون؟', fa: 'بله، الان می‌آورم. رنگش چطور است؟', ru: 'Да, сейчас принесу. Как вам цвет?' },
                  options: [
                    { id: 'o1', text: { tr: 'Rengi güzel ama başka rengi var mı?', en: 'The color is nice but do you have another color?', ar: 'اللون جميل ولكن هل هناك لون آخر؟', fa: 'رنگش زیباست اما آیا رنگ دیگری دارید؟', ru: 'Цвет красивый, но есть другой цвет?' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' },
                    { id: 'o2', text: { tr: 'Ben uçak istiyorum.', en: 'I want a plane.', ar: 'أريد طائرة.', fa: 'من هواپیما می‌خواهم.', ru: 'Я хочу самолет.' }, isCorrect: false, deductsHeart: true, responseTone: 'negative', nextNodeId: 'n3' }
                  ]
                },
                { id: 'n3', npcText: { tr: 'Siyah ve mavi var. Buyurun siyah olanı.', en: 'We have black and blue. Here is the black one.', ar: 'لدينا أسود وأزرق. تفضل الأسود.', fa: 'مشکی و آبی داریم. بفرمایید این مشکی.', ru: 'Есть черный и синий. Вот черный.' },
                  options: [
                    { id: 'o1', text: { tr: 'Teşekkürler, bunu alıyorum.', en: 'Thanks, I will take this.', ar: 'شكراً، سآخذ هذا.', fa: 'ممنون، این را برمی‌دارم.', ru: 'Спасибо, я возьму это.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_alisveris_5', type: 'vocabulary', title: { tr: 'Renkler', en: 'Colors', ar: 'ألوان', fa: 'رنگ‌ها', ru: 'Цвета' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'kırmızı', en: 'red', ar: 'أحمر', fa: 'قرمز', ru: 'красный' }, options: [{ id: 'o1', text: { tr: 'kırmızı', en: 'red', ar: 'أحمر', fa: 'قرمز', ru: 'красный' }, isCorrect: true }, { id: 'o2', text: { tr: 'mavi', en: 'blue', ar: 'أزرق', fa: 'آبی', ru: 'синий' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'yeşil', en: 'green', ar: 'أخضر', fa: 'سبز', ru: 'зеленый' }, options: [{ id: 'o1', text: { tr: 'yeşil', en: 'green', ar: 'أخضر', fa: 'سبز', ru: 'зеленый' }, isCorrect: true }, { id: 'o2', text: { tr: 'sarı', en: 'yellow', ar: 'أصفر', fa: 'زرد', ru: 'желтый' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'siyah', en: 'black', ar: 'أسود', fa: 'سیاه', ru: 'черный' }, options: [{ id: 'o1', text: { tr: 'siyah', en: 'black', ar: 'أسود', fa: 'سیاه', ru: 'черный' }, isCorrect: true }, { id: 'o2', text: { tr: 'beyaz', en: 'white', ar: 'أبيض', fa: 'سفید', ru: 'белый' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'beyaz', en: 'white', ar: 'أبيض', fa: 'سفید', ru: 'белый' }, options: [{ id: 'o1', text: { tr: 'beyaz', en: 'white', ar: 'أبيض', fa: 'سفید', ru: 'белый' }, isCorrect: true }, { id: 'o2', text: { tr: 'gri', en: 'gray', ar: 'رمادي', fa: 'خاکستری', ru: 'серый' }, isCorrect: false }] },
            { id: 'e5', type: 'multiple_choice', question: { tr: 'kahverengi', en: 'brown', ar: 'بني', fa: 'قهوه‌ای', ru: 'коричневый' }, options: [{ id: 'o1', text: { tr: 'kahverengi', en: 'brown', ar: 'بني', fa: 'قهوه‌ای', ru: 'коричневый' }, isCorrect: true }, { id: 'o2', text: { tr: 'sarı', en: 'yellow', ar: 'أصفر', fa: 'زرد', ru: 'желтый' }, isCorrect: false }] }
          ]
        },
        {
          id: 'a1i_alisveris_6', type: 'practice', title: { tr: 'Renk Eşleştirme', en: 'Match Colors', ar: 'مطابقة الألوان', fa: 'تطبیق رنگ‌ها', ru: 'Сопоставление цветов' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'drag_drop', pairs: [
              { id: 'p1', tr: 'kırmızı', translation: { en: 'red', ar: 'أحمر', fa: 'قرمز', ru: 'красный' } },
              { id: 'p2', tr: 'mavi', translation: { en: 'blue', ar: 'أزرق', fa: 'آبی', ru: 'синий' } },
              { id: 'p3', tr: 'yeşil', translation: { en: 'green', ar: 'أخضر', fa: 'سبز', ru: 'зеленый' } },
              { id: 'p4', tr: 'siyah', translation: { en: 'black', ar: 'أسود', fa: 'سیاه', ru: 'черный' } },
              { id: 'p5', tr: 'beyaz', translation: { en: 'white', ar: 'أبيض', fa: 'سفید', ru: 'белый' } }
            ]}
          ]
        },
        {
          id: 'a1i_alisveris_7', type: 'sentence_building', title: { tr: 'İade', en: 'Return', ar: 'إرجاع', fa: 'پس دادن', ru: 'Возврат' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'word_order', sentence: { tr: 'Bunu iade etmek istiyorum', en: 'I want to return this', ar: 'أريد إرجاع هذا', fa: 'می‌خواهم این را پس بدهم', ru: 'Я хочу вернуть это' }, words: [{ id: 'w1', text: 'Bunu' }, { id: 'w2', text: 'iade' }, { id: 'w3', text: 'etmek' }, { id: 'w4', text: 'istiyorum' }] },
            { id: 'e2', type: 'word_order', sentence: { tr: 'Kaç bedene ihtiyacınız var', en: 'What size do you need', ar: 'ما المقاس الذي تحتاجه', fa: 'چه سایزی نیاز دارید', ru: 'Какой размер вам нужен' }, words: [{ id: 'w1', text: 'Kaç' }, { id: 'w2', text: 'bedene' }, { id: 'w3', text: 'ihtiyacınız' }, { id: 'w4', text: 'var' }] },
            { id: 'e3', type: 'word_order', sentence: { tr: 'Fişiniz yanınızda mı', en: 'Do you have your receipt with you', ar: 'هل معك إيصالك', fa: 'آیا رسید همراهتان است', ru: 'У вас с собой чек' }, words: [{ id: 'w1', text: 'Fişiniz' }, { id: 'w2', text: 'yanınızda' }, { id: 'w3', text: 'mı' }] },
            { id: 'e4', type: 'fill_in_blank', sentence: { tr: 'Bunun _ rengi var mı?', en: 'Does this have another color?', ar: 'هل هناك لون آخر لهذا؟', fa: 'آیا این رنگ دیگری دارد؟', ru: 'У этого есть другой цвет?' }, blank: { id: 'b1', answer: 'başka', options: ['başka', 'beden', 'fiş'] } },
            { id: 'e5', type: 'fill_in_blank', sentence: { tr: 'Bu kazak çok _.', en: 'This sweater is very small.', ar: 'هذا السترة صغيرة جداً.', fa: 'این پلیور خیلی کوچک است.', ru: 'Этот свитер очень маленький.' }, blank: { id: 'b1', answer: 'küçük', options: ['küçük', 'büyük', 'yeşil'] } }
          ]
        },
        {
          id: 'a1i_alisveris_8', type: 'rpg', title: { tr: 'İade İşlemi', en: 'Return Process', ar: 'عملية الإرجاع', fa: 'فرآیند پس دادن', ru: 'Процесс возврата' }, xp: 30, coins: 20,
          exercises: [
            { id: 'e1', type: 'rpg', scenario: { tr: 'Bir ürünü iade etmek için mağazadasın.', en: 'You are at the store to return an item.', ar: 'أنت في المتجر لإرجاع منتج.', fa: 'در فروشگاه هستید تا یک محصول را پس بدهید.', ru: 'Вы в магазине, чтобы вернуть товар.' },
              nodes: [
                { id: 'n1', npcText: { tr: 'Merhaba, nasıl yardımcı olabilirim?', en: 'Hello, how can I help?', ar: 'مرحباً، كيف يمكنني المساعدة؟', fa: 'سلام، چطور می‌توانم کمک کنم؟', ru: 'Здравствуйте, чем могу помочь?' },
                  options: [
                    { id: 'o1', text: { tr: 'Bu gömleği iade etmek istiyorum.', en: 'I want to return this shirt.', ar: 'أريد إرجاع هذا القميص.', fa: 'می‌خواهم این پیراهن را پس بدهم.', ru: 'Я хочу вернуть эту рубашку.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' }
                  ]
                },
                { id: 'n2', npcText: { tr: 'Tabii, fişiniz yanınızda mı?', en: 'Sure, do you have your receipt with you?', ar: 'بالطبع، هل معك الإيصال؟', fa: 'البته، آیا رسید همراهتان است؟', ru: 'Конечно, чек у вас с собой?' },
                  options: [
                    { id: 'o1', text: { tr: 'Evet, işte burada.', en: 'Yes, here it is.', ar: 'نعم، ها هو.', fa: 'بله، بفرمایید.', ru: 'Да, вот он.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' }
                  ]
                },
                { id: 'n3', npcText: { tr: 'İşleminiz tamam. Paranızı iade ettik.', en: 'Your transaction is complete. We refunded your money.', ar: 'اكتملت المعاملة. قمنا بإرجاع أموالك.', fa: 'عملیات شما انجام شد. پولتان را پس دادیم.', ru: 'Готово. Мы вернули вам деньги.' },
                  options: [
                    { id: 'o1', text: { tr: 'Teşekkürler, iyi günler.', en: 'Thanks, have a good day.', ar: 'شكراً، طاب يومك.', fa: 'ممنون، روز بخیر.', ru: 'Спасибо, хорошего дня.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_alisveris_9', type: 'boss_fight', title: { tr: 'Alışveriş Sınavı', en: 'Shopping Test', ar: 'اختبار التسوق', fa: 'امتحان خرید', ru: 'Тест по покупкам' }, xp: 50, coins: 30,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'gömlek', en: 'shirt', ar: 'قميص', fa: 'پیراهن', ru: 'рубашка' }, options: [{ id: 'o1', text: { tr: 'gömlek', en: 'shirt', ar: 'قميص', fa: 'پیراهن', ru: 'рубашка' }, isCorrect: true }, { id: 'o2', text: { tr: 'pantolon', en: 'pants', ar: 'بنطلون', fa: 'شلوار', ru: 'брюки' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'ayakkabı', en: 'shoes', ar: 'حذاء', fa: 'کفش', ru: 'обувь' }, options: [{ id: 'o1', text: { tr: 'ayakkabı', en: 'shoes', ar: 'حذاء', fa: 'کفش', ru: 'обувь' }, isCorrect: true }, { id: 'o2', text: { tr: 'şapka', en: 'hat', ar: 'قبعة', fa: 'کلاه', ru: 'шляпа' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'kırmızı', en: 'red', ar: 'أحمر', fa: 'قرمز', ru: 'красный' }, options: [{ id: 'o1', text: { tr: 'kırmızı', en: 'red', ar: 'أحمر', fa: 'قرمز', ru: 'красный' }, isCorrect: true }, { id: 'o2', text: { tr: 'siyah', en: 'black', ar: 'أسود', fa: 'سیاه', ru: 'черный' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'iade', en: 'return', ar: 'إرجاع', fa: 'پس دادن', ru: 'возврат' }, options: [{ id: 'o1', text: { tr: 'iade', en: 'return', ar: 'إرجاع', fa: 'پس دادن', ru: 'возврат' }, isCorrect: true }, { id: 'o2', text: { tr: 'fiş', en: 'receipt', ar: 'إيصال', fa: 'رسید', ru: 'чек' }, isCorrect: false }] },
            { id: 'e5', type: 'word_order', sentence: { tr: 'Başka rengi var mı', en: 'Is there another color', ar: 'هل هناك لون آخر', fa: 'آیا رنگ دیگری دارد', ru: 'Есть другой цвет' }, words: [{ id: 'w1', text: 'Başka' }, { id: 'w2', text: 'rengi' }, { id: 'w3', text: 'var' }, { id: 'w4', text: 'mı' }] },
            { id: 'e6', type: 'word_order', sentence: { tr: 'Bunu iade etmek istiyorum', en: 'I want to return this', ar: 'أريد إرجاع هذا', fa: 'می‌خواهم این را پس بدهم', ru: 'Я хочу вернуть это' }, words: [{ id: 'w1', text: 'Bunu' }, { id: 'w2', text: 'iade' }, { id: 'w3', text: 'etmek' }, { id: 'w4', text: 'istiyorum' }] },
            { id: 'e7', type: 'fill_in_blank', sentence: { tr: 'İndirim var _?', en: 'Is there a discount?', ar: 'هل هناك خصم؟', fa: 'تخفیف هست؟', ru: 'Есть скидка?' }, blank: { id: 'b1', answer: 'mı', options: ['mı', 'mi', 'mu'] } },
            { id: 'e8', type: 'fill_in_blank', sentence: { tr: 'Bu çok _, biraz küçük var mı?', en: 'This is very big, is there a smaller one?', ar: 'هذا كبير جداً، هل يوجد أصغر قليلاً؟', fa: 'این خیلی بزرگ است، آیا کمی کوچکتر دارید؟', ru: 'Это очень большое, есть поменьше?' }, blank: { id: 'b1', answer: 'büyük', options: ['büyük', 'küçük', 'güzel'] } }
          ]
        }
      ]
    },
    {
      id: 'a1i_saglik', title: { tr: 'Sağlık', en: 'Health', ar: 'صحة', fa: 'سلامتی', ru: 'Здоровье' }, description: { tr: 'Vücut ve eczane', en: 'Body and pharmacy', ar: 'الجسم والصيدلية', fa: 'بدن و داروخانه', ru: 'Тело и аптека' }, order: 4, emoji: '💊', color: 'from-red-400 to-rose-600',
      lessons: [
        {
          id: 'a1i_saglik_1', type: 'vocabulary', title: { tr: 'Vücut Bölümleri', en: 'Body Parts', ar: 'أجزاء الجسم', fa: 'اعضای بدن', ru: 'Части тела' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'baş', en: 'head', ar: 'رأس', fa: 'سر', ru: 'голова' }, options: [{ id: 'o1', text: { tr: 'baş', en: 'head', ar: 'رأس', fa: 'سر', ru: 'голова' }, isCorrect: true }, { id: 'o2', text: { tr: 'göz', en: 'eye', ar: 'عين', fa: 'چشم', ru: 'глаз' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'kulak', en: 'ear', ar: 'أذن', fa: 'گوش', ru: 'ухо' }, options: [{ id: 'o1', text: { tr: 'kulak', en: 'ear', ar: 'أذن', fa: 'گوش', ru: 'ухо' }, isCorrect: true }, { id: 'o2', text: { tr: 'burun', en: 'nose', ar: 'أنف', fa: 'بینی', ru: 'нос' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'ağız', en: 'mouth', ar: 'فم', fa: 'دهان', ru: 'рот' }, options: [{ id: 'o1', text: { tr: 'ağız', en: 'mouth', ar: 'فم', fa: 'دهان', ru: 'рот' }, isCorrect: true }, { id: 'o2', text: { tr: 'boyun', en: 'neck', ar: 'رقبة', fa: 'گردن', ru: 'шея' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'omuz', en: 'shoulder', ar: 'كتف', fa: 'شانه', ru: 'плечо' }, options: [{ id: 'o1', text: { tr: 'omuz', en: 'shoulder', ar: 'كتف', fa: 'شانه', ru: 'плечо' }, isCorrect: true }, { id: 'o2', text: { tr: 'sırt', en: 'back', ar: 'ظهر', fa: 'پشت', ru: 'спина' }, isCorrect: false }] },
            { id: 'e5', type: 'multiple_choice', question: { tr: 'bacak', en: 'leg', ar: 'ساق', fa: 'پا', ru: 'нога' }, options: [{ id: 'o1', text: { tr: 'bacak', en: 'leg', ar: 'ساق', fa: 'پا', ru: 'нога' }, isCorrect: true }, { id: 'o2', text: { tr: 'ayak', en: 'foot', ar: 'قدم', fa: 'پا (مچ به پایین)', ru: 'стопа' }, isCorrect: false }] }
          ]
        },
        {
          id: 'a1i_saglik_2', type: 'practice', title: { tr: 'Vücut Eşleştirme', en: 'Match Body Parts', ar: 'مطابقة أجزاء الجسم', fa: 'تطبیق اعضای بدن', ru: 'Сопоставление частей тела' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'drag_drop', pairs: [
              { id: 'p1', tr: 'göz', translation: { en: 'eye', ar: 'عين', fa: 'چشم', ru: 'глаз' } },
              { id: 'p2', tr: 'burun', translation: { en: 'nose', ar: 'أنف', fa: 'بینی', ru: 'нос' } },
              { id: 'p3', tr: 'el', translation: { en: 'hand', ar: 'يد', fa: 'دست', ru: 'рука' } },
              { id: 'p4', tr: 'parmak', translation: { en: 'finger', ar: 'إصبع', fa: 'انگشت', ru: 'палец' } },
              { id: 'p5', tr: 'diz', translation: { en: 'knee', ar: 'ركبة', fa: 'زانو', ru: 'колено' } }
            ]}
          ]
        },
        {
          id: 'a1i_saglik_3', type: 'sentence_building', title: { tr: 'Hastalıklar', en: 'Illnesses', ar: 'أمراض', fa: 'بیماری‌ها', ru: 'Болезни' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'word_order', sentence: { tr: 'Başım ağrıyor', en: 'My head hurts', ar: 'رأسي يؤلمني', fa: 'سرم درد می‌کند', ru: 'У меня болит голова' }, words: [{ id: 'w1', text: 'Başım' }, { id: 'w2', text: 'ağrıyor' }] },
            { id: 'e2', type: 'word_order', sentence: { tr: 'Ateşim var', en: 'I have a fever', ar: 'لدي حمى', fa: 'تب دارم', ru: 'У меня температура' }, words: [{ id: 'w1', text: 'Ateşim' }, { id: 'w2', text: 'var' }] },
            { id: 'e3', type: 'word_order', sentence: { tr: 'Alerjim var', en: 'I have an allergy', ar: 'لدي حساسية', fa: 'آلرژی دارم', ru: 'У меня аллергия' }, words: [{ id: 'w1', text: 'Alerjim' }, { id: 'w2', text: 'var' }] },
            { id: 'e4', type: 'fill_in_blank', sentence: { tr: 'Midem _.', en: 'My stomach hurts.', ar: 'معدتي تؤلمني.', fa: 'معده‌ام درد می‌کند.', ru: 'У меня болит живот.' }, blank: { id: 'b1', answer: 'ağrıyor', options: ['ağrıyor', 'yanıyor', 'var'] } },
            { id: 'e5', type: 'fill_in_blank', sentence: { tr: 'Çok kötü _.', en: 'I have a very bad cough.', ar: 'لدي سعال سيء جداً.', fa: 'سرفه خیلی بدی دارم.', ru: 'У меня очень сильный кашель.' }, blank: { id: 'b1', answer: 'öksürüğüm', options: ['öksürüğüm', 'ateşim', 'nezlem'] } }
          ]
        },
        {
          id: 'a1i_saglik_4', type: 'rpg', title: { tr: 'Eczanede', en: 'At the Pharmacy', ar: 'في الصيدلية', fa: 'در داروخانه', ru: 'В аптеке' }, xp: 30, coins: 20,
          exercises: [
            { id: 'e1', type: 'rpg', scenario: { tr: 'Eczanede ilaç alıyorsun.', en: 'You are buying medicine at the pharmacy.', ar: 'أنت تشتري الدواء من الصيدلية.', fa: 'در حال خرید دارو از داروخانه هستید.', ru: 'Вы покупаете лекарство в аптеке.' },
              nodes: [
                { id: 'n1', npcText: { tr: 'Geçmiş olsun, şikayetiniz nedir?', en: 'Get well soon, what is your complaint?', ar: 'أتمنى لك الشفاء، مما تشتكي؟', fa: 'سلامت باشید، مشکل شما چیست؟', ru: 'Выздоравливайте, на что жалуетесь?' },
                  options: [
                    { id: 'o1', text: { tr: 'Başım çok ağrıyor. Ağrı kesici var mı?', en: 'My head hurts a lot. Do you have painkillers?', ar: 'رأسي يؤلمني كثيراً. هل لديك مسكن للألم؟', fa: 'سرم خیلی درد می‌کند. آیا مسکن دارید؟', ru: 'У меня очень болит голова. Есть обезболивающее?' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' }
                  ]
                },
                { id: 'n2', npcText: { tr: 'Evet var. Başka bir şey lazım mı?', en: 'Yes we do. Do you need anything else?', ar: 'نعم لدينا. هل تحتاج إلى أي شيء آخر؟', fa: 'بله داریم. چیز دیگری لازم دارید؟', ru: 'Да, есть. Нужно что-то еще?' },
                  options: [
                    { id: 'o1', text: { tr: 'Hayır, teşekkürler. Ne kadar?', en: 'No, thanks. How much is it?', ar: 'لا، شكراً. كم السعر؟', fa: 'نه، ممنون. چقدر می‌شود؟', ru: 'Нет, спасибо. Сколько стоит?' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' }
                  ]
                },
                { id: 'n3', npcText: { tr: '50 Lira. Günde iki kere tok karnına için.', en: '50 Liras. Take it twice a day on a full stomach.', ar: '50 ليرة. تناوله مرتين في اليوم بعد الأكل.', fa: '۵۰ لیر. روزی دو بار بعد از غذا بخورید.', ru: '50 лир. Принимайте два раза в день на сытый желудок.' },
                  options: [
                    { id: 'o1', text: { tr: 'Tamam, sağ olun.', en: 'Okay, thank you.', ar: 'حسناً، شكراً.', fa: 'باشه، ممنون.', ru: 'Хорошо, спасибо.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_saglik_5', type: 'vocabulary', title: { tr: 'Tıbbi Terimler', en: 'Medical Terms', ar: 'مصطلحات طبية', fa: 'اصطلاحات پزشکی', ru: 'Медицинские термины' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'reçete', en: 'prescription', ar: 'وصفة طبية', fa: 'نسخه', ru: 'рецепт' }, options: [{ id: 'o1', text: { tr: 'reçete', en: 'prescription', ar: 'وصفة', fa: 'نسخه', ru: 'рецепт' }, isCorrect: true }, { id: 'o2', text: { tr: 'ilaç', en: 'medicine', ar: 'دواء', fa: 'دارو', ru: 'лекарство' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'randevu', en: 'appointment', ar: 'موعد', fa: 'نوبت', ru: 'встреча/прием' }, options: [{ id: 'o1', text: { tr: 'randevu', en: 'appointment', ar: 'موعد', fa: 'نوبت', ru: 'прием' }, isCorrect: true }, { id: 'o2', text: { tr: 'doktor', en: 'doctor', ar: 'طبيب', fa: 'دکتر', ru: 'врач' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'ağrı kesici', en: 'painkiller', ar: 'مسكن ألم', fa: 'مسکن درد', ru: 'обезболивающее' }, options: [{ id: 'o1', text: { tr: 'ağrı kesici', en: 'painkiller', ar: 'مسكن ألم', fa: 'مسکن درد', ru: 'обезболивающее' }, isCorrect: true }, { id: 'o2', text: { tr: 'ateş', en: 'fever', ar: 'حمى', fa: 'تب', ru: 'температура' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'sigorta', en: 'insurance', ar: 'تأمين', fa: 'بیمه', ru: 'страховка' }, options: [{ id: 'o1', text: { tr: 'sigorta', en: 'insurance', ar: 'تأمين', fa: 'بیمه', ru: 'страховка' }, isCorrect: true }, { id: 'o2', text: { tr: 'kart', en: 'card', ar: 'بطاقة', fa: 'کارت', ru: 'карта' }, isCorrect: false }] },
            { id: 'e5', type: 'multiple_choice', question: { tr: 'bulantı', en: 'nausea', ar: 'غثيان', fa: 'حالت تهوع', ru: 'тошнота' }, options: [{ id: 'o1', text: { tr: 'bulantı', en: 'nausea', ar: 'غثيان', fa: 'حالت تهوع', ru: 'тошнота' }, isCorrect: true }, { id: 'o2', text: { tr: 'nezle', en: 'cold', ar: 'زكام', fa: 'سرماخوردگی', ru: 'простуда' }, isCorrect: false }] }
          ]
        },
        {
          id: 'a1i_saglik_6', type: 'practice', title: { tr: 'Tıbbi Eşleştirme', en: 'Medical Match', ar: 'مطابقة طبية', fa: 'تطبیق پزشکی', ru: 'Медицинское сопоставление' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'drag_drop', pairs: [
              { id: 'p1', tr: 'reçete', translation: { en: 'prescription', ar: 'وصفة', fa: 'نسخه', ru: 'рецепт' } },
              { id: 'p2', tr: 'randevu', translation: { en: 'appointment', ar: 'موعد', fa: 'نوبت', ru: 'прием' } },
              { id: 'p3', tr: 'ağrı kesici', translation: { en: 'painkiller', ar: 'مسكن ألم', fa: 'مسکن درد', ru: 'обезболивающее' } },
              { id: 'p4', tr: 'sigorta', translation: { en: 'insurance', ar: 'تأمين', fa: 'بیمه', ru: 'страховка' } },
              { id: 'p5', tr: 'bulantı', translation: { en: 'nausea', ar: 'غثيان', fa: 'حالت تهوع', ru: 'тошнота' } }
            ]}
          ]
        },
        {
          id: 'a1i_saglik_7', type: 'sentence_building', title: { tr: 'Doktorda', en: 'At the Doctor', ar: 'عند الطبيب', fa: 'نزد دکتر', ru: 'У врача' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'word_order', sentence: { tr: 'Randevu almak istiyorum', en: 'I want to make an appointment', ar: 'أريد حجز موعد', fa: 'می‌خواهم وقت بگیرم', ru: 'Я хочу записаться на прием' }, words: [{ id: 'w1', text: 'Randevu' }, { id: 'w2', text: 'almak' }, { id: 'w3', text: 'istiyorum' }] },
            { id: 'e2', type: 'word_order', sentence: { tr: 'Reçete yazabilir misiniz', en: 'Can you write a prescription', ar: 'هل يمكنك كتابة وصفة طبية', fa: 'می‌توانید نسخه بنویسید', ru: 'Можете выписать рецепт' }, words: [{ id: 'w1', text: 'Reçete' }, { id: 'w2', text: 'yazabilir' }, { id: 'w3', text: 'misiniz' }] },
            { id: 'e3', type: 'word_order', sentence: { tr: 'Sigorta kartım yanımda', en: 'I have my insurance card with me', ar: 'بطاقة التأمين معي', fa: 'کارت بیمه‌ام همراهم است', ru: 'Моя страховая карта со мной' }, words: [{ id: 'w1', text: 'Sigorta' }, { id: 'w2', text: 'kartım' }, { id: 'w3', text: 'yanımda' }] },
            { id: 'e4', type: 'fill_in_blank', sentence: { tr: 'Bugün kendimi çok _ hissediyorum.', en: 'I feel very bad today.', ar: 'أشعر بسوء شديد اليوم.', fa: 'امروز حالم خیلی بد است.', ru: 'Сегодня я чувствую себя очень плохо.' }, blank: { id: 'b1', answer: 'kötü', options: ['kötü', 'iyi', 'hasta'] } },
            { id: 'e5', type: 'fill_in_blank', sentence: { tr: 'Doktora _ gerekiyor.', en: 'I need to go to the doctor.', ar: 'يجب أن أذهب إلى الطبيب.', fa: 'باید به دکتر بروم.', ru: 'Мне нужно к врачу.' }, blank: { id: 'b1', answer: 'gitmem', options: ['gitmem', 'gelmem', 'yapmam'] } }
          ]
        },
        {
          id: 'a1i_saglik_8', type: 'rpg', title: { tr: 'Randevu Alma', en: 'Making an Appointment', ar: 'حجز موعد', fa: 'وقت گرفتن', ru: 'Запись на прием' }, xp: 30, coins: 20,
          exercises: [
            { id: 'e1', type: 'rpg', scenario: { tr: 'Hastaneyi arayıp randevu alıyorsun.', en: 'You are calling the hospital to make an appointment.', ar: 'أنت تتصل بالمستشفى لحجز موعد.', fa: 'به بیمارستان زنگ می‌زنید تا وقت بگیرید.', ru: 'Вы звоните в больницу, чтобы записаться на прием.' },
              nodes: [
                { id: 'n1', npcText: { tr: 'Merkez Hastanesi, buyurun.', en: 'Central Hospital, go ahead.', ar: 'مستشفى المركز، تفضل.', fa: 'بیمارستان مرکزی، بفرمایید.', ru: 'Центральная больница, слушаю.' },
                  options: [
                    { id: 'o1', text: { tr: 'Merhaba, doktordan randevu almak istiyorum.', en: 'Hello, I want to make an appointment with a doctor.', ar: 'مرحباً، أريد حجز موعد مع طبيب.', fa: 'سلام، می‌خواهم از دکتر وقت بگیرم.', ru: 'Здравствуйте, я хочу записаться на прием к врачу.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' }
                  ]
                },
                { id: 'n2', npcText: { tr: 'Hangi bölüm için randevu istiyorsunuz?', en: 'Which department do you want an appointment for?', ar: 'لأي قسم تريد الموعد؟', fa: 'برای کدام بخش وقت می‌خواهید؟', ru: 'В какое отделение вы хотите записаться?' },
                  options: [
                    { id: 'o1', text: { tr: 'Dahiliye lütfen.', en: 'Internal medicine please.', ar: 'الطب الباطني من فضلك.', fa: 'داخلی لطفا.', ru: 'Терапевтическое, пожалуйста.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' }
                  ]
                },
                { id: 'n3', npcText: { tr: 'Yarın saat 10:00 uygun mu?', en: 'Is tomorrow at 10:00 okay?', ar: 'هل غداً الساعة 10:00 مناسب؟', fa: 'فردا ساعت ۱۰:۰۰ مناسب است؟', ru: 'Завтра в 10:00 подходит?' },
                  options: [
                    { id: 'o1', text: { tr: 'Evet, çok uygun.', en: 'Yes, very suitable.', ar: 'نعم، مناسب جداً.', fa: 'بله، خیلی مناسب است.', ru: 'Да, очень подходит.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_saglik_9', type: 'boss_fight', title: { tr: 'Sağlık Sınavı', en: 'Health Test', ar: 'اختبار الصحة', fa: 'امتحان سلامتی', ru: 'Тест по здоровью' }, xp: 50, coins: 30,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'baş', en: 'head', ar: 'رأس', fa: 'سر', ru: 'голова' }, options: [{ id: 'o1', text: { tr: 'baş', en: 'head', ar: 'رأس', fa: 'سر', ru: 'голова' }, isCorrect: true }, { id: 'o2', text: { tr: 'göz', en: 'eye', ar: 'عين', fa: 'چشم', ru: 'глаз' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'reçete', en: 'prescription', ar: 'وصفة', fa: 'نسخه', ru: 'рецепт' }, options: [{ id: 'o1', text: { tr: 'reçete', en: 'prescription', ar: 'وصفة', fa: 'نسخه', ru: 'рецепт' }, isCorrect: true }, { id: 'o2', text: { tr: 'ilaç', en: 'medicine', ar: 'دواء', fa: 'دارو', ru: 'лекарство' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'ağrı kesici', en: 'painkiller', ar: 'مسكن ألم', fa: 'مسکن درد', ru: 'обезболивающее' }, options: [{ id: 'o1', text: { tr: 'ağrı kesici', en: 'painkiller', ar: 'مسكن ألم', fa: 'مسکن درد', ru: 'обезболивающее' }, isCorrect: true }, { id: 'o2', text: { tr: 'ateş', en: 'fever', ar: 'حمى', fa: 'تب', ru: 'температура' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'sigorta', en: 'insurance', ar: 'تأمين', fa: 'بیمه', ru: 'страховка' }, options: [{ id: 'o1', text: { tr: 'sigorta', en: 'insurance', ar: 'تأمين', fa: 'بیمه', ru: 'страховка' }, isCorrect: true }, { id: 'o2', text: { tr: 'kart', en: 'card', ar: 'بطاقة', fa: 'کارت', ru: 'карта' }, isCorrect: false }] },
            { id: 'e5', type: 'word_order', sentence: { tr: 'Başım ağrıyor', en: 'My head hurts', ar: 'رأسي يؤلمني', fa: 'سرم درد می‌کند', ru: 'У меня болит голова' }, words: [{ id: 'w1', text: 'Başım' }, { id: 'w2', text: 'ağrıyor' }] },
            { id: 'e6', type: 'word_order', sentence: { tr: 'Randevu almak istiyorum', en: 'I want to make an appointment', ar: 'أريد حجز موعد', fa: 'می‌خواهم وقت بگیرم', ru: 'Я хочу записаться на прием' }, words: [{ id: 'w1', text: 'Randevu' }, { id: 'w2', text: 'almak' }, { id: 'w3', text: 'istiyorum' }] },
            { id: 'e7', type: 'fill_in_blank', sentence: { tr: 'Benim ateşim _.', en: 'I have a fever.', ar: 'لدي حمى.', fa: 'من تب دارم.', ru: 'У меня температура.' }, blank: { id: 'b1', answer: 'var', options: ['var', 'yok', 'mı'] } },
            { id: 'e8', type: 'fill_in_blank', sentence: { tr: 'Reçete yazabilir _?', en: 'Can you write a prescription?', ar: 'هل يمكنك كتابة وصفة؟', fa: 'می‌توانید نسخه بنویسید؟', ru: 'Можете выписать рецепт?' }, blank: { id: 'b1', answer: 'misiniz', options: ['misiniz', 'mi', 'musunuz'] } }
          ]
        }
      ]
    },
    {
      id: 'a1i_yon', title: { tr: 'Yön Tarifi', en: 'Directions', ar: 'اتجاهات', fa: 'آدرس دادن', ru: 'Направления' }, description: { tr: 'Yol bulma', en: 'Finding the way', ar: 'إيجاد الطريق', fa: 'پیدا کردن مسیر', ru: 'Поиск пути' }, order: 5, emoji: '🗺️', color: 'from-yellow-400 to-amber-500',
      lessons: [
        {
          id: 'a1i_yon_1', type: 'vocabulary', title: { tr: 'Yönler', en: 'Directions', ar: 'اتجاهات', fa: 'جهت‌ها', ru: 'Направления' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'sol', en: 'left', ar: 'يسار', fa: 'چپ', ru: 'лево' }, options: [{ id: 'o1', text: { tr: 'sol', en: 'left', ar: 'يسار', fa: 'چپ', ru: 'лево' }, isCorrect: true }, { id: 'o2', text: { tr: 'sağ', en: 'right', ar: 'يمين', fa: 'راست', ru: 'право' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'sağ', en: 'right', ar: 'يمين', fa: 'راست', ru: 'право' }, options: [{ id: 'o1', text: { tr: 'sağ', en: 'right', ar: 'يمين', fa: 'راست', ru: 'право' }, isCorrect: true }, { id: 'o2', text: { tr: 'düz', en: 'straight', ar: 'مستقيم', fa: 'مستقیم', ru: 'прямо' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'düz', en: 'straight', ar: 'مستقيم', fa: 'مستقیم', ru: 'прямо' }, options: [{ id: 'o1', text: { tr: 'düz', en: 'straight', ar: 'مستقيم', fa: 'مستقیم', ru: 'прямо' }, isCorrect: true }, { id: 'o2', text: { tr: 'geri', en: 'back', ar: 'خلف', fa: 'عقب', ru: 'назад' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'yakın', en: 'near', ar: 'قريب', fa: 'نزدیک', ru: 'близко' }, options: [{ id: 'o1', text: { tr: 'yakın', en: 'near', ar: 'قريب', fa: 'نزدیک', ru: 'близко' }, isCorrect: true }, { id: 'o2', text: { tr: 'uzak', en: 'far', ar: 'بعيد', fa: 'دور', ru: 'далеко' }, isCorrect: false }] },
            { id: 'e5', type: 'multiple_choice', question: { tr: 'uzak', en: 'far', ar: 'بعيد', fa: 'دور', ru: 'далеко' }, options: [{ id: 'o1', text: { tr: 'uzak', en: 'far', ar: 'بعيد', fa: 'دور', ru: 'далеко' }, isCorrect: true }, { id: 'o2', text: { tr: 'sol', en: 'left', ar: 'يسار', fa: 'چپ', ru: 'лево' }, isCorrect: false }] }
          ]
        },
        {
          id: 'a1i_yon_2', type: 'practice', title: { tr: 'Yön Eşleştirme', en: 'Match Directions', ar: 'مطابقة الاتجاهات', fa: 'تطبیق جهت‌ها', ru: 'Сопоставление направлений' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'drag_drop', pairs: [
              { id: 'p1', tr: 'sol', translation: { en: 'left', ar: 'يسار', fa: 'چپ', ru: 'лево' } },
              { id: 'p2', tr: 'sağ', translation: { en: 'right', ar: 'يمين', fa: 'راست', ru: 'право' } },
              { id: 'p3', tr: 'düz', translation: { en: 'straight', ar: 'مستقيم', fa: 'مستقیم', ru: 'прямо' } },
              { id: 'p4', tr: 'yakın', translation: { en: 'near', ar: 'قريب', fa: 'نزدیک', ru: 'близко' } },
              { id: 'p5', tr: 'uzak', translation: { en: 'far', ar: 'بعيد', fa: 'دور', ru: 'далеко' } }
            ]}
          ]
        },
        {
          id: 'a1i_yon_3', type: 'sentence_building', title: { tr: 'Sorma', en: 'Asking', ar: 'سؤال', fa: 'پرسیدن', ru: 'Спрашивать' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'word_order', sentence: { tr: 'Nerede', en: 'Where', ar: 'أين', fa: 'کجا', ru: 'Где' }, words: [{ id: 'w1', text: 'Nerede' }] },
            { id: 'e2', type: 'word_order', sentence: { tr: 'Nasıl gidebilirim', en: 'How can I go', ar: 'كيف يمكنني الذهاب', fa: 'چطور می‌توانم بروم', ru: 'Как мне добраться' }, words: [{ id: 'w1', text: 'Nasıl' }, { id: 'w2', text: 'gidebilirim' }] },
            { id: 'e3', type: 'word_order', sentence: { tr: 'Yürüyerek mi', en: 'By walking', ar: 'مشياً على الأقدام', fa: 'پیاده', ru: 'Пешком' }, words: [{ id: 'w1', text: 'Yürüyerek' }, { id: 'w2', text: 'mi' }] },
            { id: 'e4', type: 'fill_in_blank', sentence: { tr: 'Banka tam _.', en: 'The bank is right across.', ar: 'البنك في الجهة المقابلة تماماً.', fa: 'بانک دقیقا روبروست.', ru: 'Банк прямо напротив.' }, blank: { id: 'b1', answer: 'karşısında', options: ['karşısında', 'yanında', 'arkasında'] } },
            { id: 'e5', type: 'fill_in_blank', sentence: { tr: 'İkinci sokaktan sağa _.', en: 'Turn right from the second street.', ar: 'استدر يميناً من الشارع الثاني.', fa: 'از خیابان دوم به راست بپیچید.', ru: 'Поверните направо на второй улице.' }, blank: { id: 'b1', answer: 'dönün', options: ['dönün', 'gidin', 'durun'] } }
          ]
        },
        {
          id: 'a1i_yon_4', type: 'rpg', title: { tr: 'Turiste Yardım', en: 'Helping a Tourist', ar: 'مساعدة سائح', fa: 'کمک به توریست', ru: 'Помощь туристу' }, xp: 30, coins: 20,
          exercises: [
            { id: 'e1', type: 'rpg', scenario: { tr: 'Kaybolmuş bir turist sana Kapalıçarşı\'yı soruyor.', en: 'A lost tourist asks you for the Grand Bazaar.', ar: 'سائح تائه يسألك عن البازار الكبير.', fa: 'یک توریست گم شده از شما آدرس بازار بزرگ را می‌پرسد.', ru: 'Заблудившийся турист спрашивает вас о Гранд-базаре.' },
              nodes: [
                { id: 'n1', npcText: { tr: 'Afedersiniz, Kapalıçarşı nerede?', en: 'Excuse me, where is the Grand Bazaar?', ar: 'عفواً، أين البازار الكبير؟', fa: 'ببخشید، بازار بزرگ کجاست؟', ru: 'Простите, где Гранд-базар?' },
                  options: [
                    { id: 'o1', text: { tr: 'Düz gidin, sonra sola dönün.', en: 'Go straight, then turn left.', ar: 'اذهب مستقيماً، ثم استدر يساراً.', fa: 'مستقیم بروید، سپس به چپ بپیچید.', ru: 'Идите прямо, затем поверните налево.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' }
                  ]
                },
                { id: 'n2', npcText: { tr: 'Çok uzak mı? Yürüyerek gidebilir miyim?', en: 'Is it very far? Can I go by walking?', ar: 'هل هو بعيد جداً؟ هل يمكنني الذهاب مشياً؟', fa: 'خیلی دور است؟ می‌توانم پیاده بروم؟', ru: 'Это очень далеко? Я могу дойти пешком?' },
                  options: [
                    { id: 'o1', text: { tr: 'Hayır, yakın. Sadece 5 dakika.', en: 'No, it\'s near. Only 5 minutes.', ar: 'لا، قريب. 5 دقائق فقط.', fa: 'نه، نزدیک است. فقط ۵ دقیقه.', ru: 'Нет, это близко. Всего 5 минут.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' }
                  ]
                },
                { id: 'n3', npcText: { tr: 'Çok teşekkür ederim, iyi günler!', en: 'Thank you very much, have a good day!', ar: 'شكراً جزيلاً، طاب يومك!', fa: 'خیلی ممنون، روز بخیر!', ru: 'Большое спасибо, хорошего дня!' },
                  options: [
                    { id: 'o1', text: { tr: 'Rica ederim, iyi günler.', en: 'You are welcome, have a good day.', ar: 'عفواً، طاب يومك.', fa: 'خواهش می‌کنم، روز بخیر.', ru: 'Пожалуйста, хорошего дня.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_yon_5', type: 'vocabulary', title: { tr: 'Yerler', en: 'Places', ar: 'أماكن', fa: 'مکان‌ها', ru: 'Места' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'köşe', en: 'corner', ar: 'زاوية', fa: 'گوشه', ru: 'угол' }, options: [{ id: 'o1', text: { tr: 'köşe', en: 'corner', ar: 'زاوية', fa: 'گوشه', ru: 'угол' }, isCorrect: true }, { id: 'o2', text: { tr: 'kavşak', en: 'intersection', ar: 'تقاطع', fa: 'تقاطع', ru: 'перекресток' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'kavşak', en: 'intersection', ar: 'تقاطع', fa: 'تقاطع', ru: 'перекресток' }, options: [{ id: 'o1', text: { tr: 'kavşak', en: 'intersection', ar: 'تقاطع', fa: 'تقاطع', ru: 'перекресток' }, isCorrect: true }, { id: 'o2', text: { tr: 'trafik ışığı', en: 'traffic light', ar: 'إشارة مرور', fa: 'چراغ راهنمایی', ru: 'светофор' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'trafik ışığı', en: 'traffic light', ar: 'إشارة مرور', fa: 'چراغ راهنمایی', ru: 'светофор' }, options: [{ id: 'o1', text: { tr: 'trafik ışığı', en: 'traffic light', ar: 'إشارة مرور', fa: 'چراغ راهنمایی', ru: 'светофор' }, isCorrect: true }, { id: 'o2', text: { tr: 'yaya geçidi', en: 'crosswalk', ar: 'ممر مشاة', fa: 'خط عابر پیاده', ru: 'пешеходный переход' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'alt geçit', en: 'underpass', ar: 'نفق', fa: 'زیرگذر', ru: 'подземный переход' }, options: [{ id: 'o1', text: { tr: 'alt geçit', en: 'underpass', ar: 'نفق', fa: 'زیرگذر', ru: 'подземный переход' }, isCorrect: true }, { id: 'o2', text: { tr: 'üst geçit', en: 'overpass', ar: 'جسر مشاة', fa: 'روگذر', ru: 'надземный переход' }, isCorrect: false }] },
            { id: 'e5', type: 'multiple_choice', question: { tr: 'üst geçit', en: 'overpass', ar: 'جسر مشاة', fa: 'روگذر', ru: 'надземный переход' }, options: [{ id: 'o1', text: { tr: 'üst geçit', en: 'overpass', ar: 'جسر مشاة', fa: 'روگذر', ru: 'надземный переход' }, isCorrect: true }, { id: 'o2', text: { tr: 'köşe', en: 'corner', ar: 'زاوية', fa: 'گوشه', ru: 'угол' }, isCorrect: false }] }
          ]
        },
        {
          id: 'a1i_yon_6', type: 'practice', title: { tr: 'Yer Eşleştirme', en: 'Match Places', ar: 'مطابقة الأماكن', fa: 'تطبیق مکان‌ها', ru: 'Сопоставление мест' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'drag_drop', pairs: [
              { id: 'p1', tr: 'köşe', translation: { en: 'corner', ar: 'زاوية', fa: 'گوشه', ru: 'угол' } },
              { id: 'p2', tr: 'kavşak', translation: { en: 'intersection', ar: 'تقاطع', fa: 'تقاطع', ru: 'перекресток' } },
              { id: 'p3', tr: 'trafik ışığı', translation: { en: 'traffic light', ar: 'إشارة مرور', fa: 'چراغ راهنمایی', ru: 'светофор' } },
              { id: 'p4', tr: 'alt geçit', translation: { en: 'underpass', ar: 'نفق', fa: 'زیرگذر', ru: 'подземный переход' } },
              { id: 'p5', tr: 'yaya geçidi', translation: { en: 'crosswalk', ar: 'ممر مشاة', fa: 'خط عابر پیاده', ru: 'пешеходный переход' } }
            ]}
          ]
        },
        {
          id: 'a1i_yon_7', type: 'sentence_building', title: { tr: 'Yol Gösterme', en: 'Showing the Way', ar: 'إظهار الطريق', fa: 'نشان دادن راه', ru: 'Показывать путь' }, xp: 20, coins: 15,
          exercises: [
            { id: 'e1', type: 'word_order', sentence: { tr: 'İlk sokaktan sağa dönün', en: 'Turn right from the first street', ar: 'استدر يميناً من الشارع الأول', fa: 'از اولین خیابان به راست بپیچید', ru: 'Поверните направо на первой улице' }, words: [{ id: 'w1', text: 'İlk' }, { id: 'w2', text: 'sokaktan' }, { id: 'w3', text: 'sağa' }, { id: 'w4', text: 'dönün' }] },
            { id: 'e2', type: 'word_order', sentence: { tr: 'Hastane postahanenin arkasında', en: 'The hospital is behind the post office', ar: 'المستشفى خلف مكتب البريد', fa: 'بیمارستان پشت اداره پست است', ru: 'Больница находится позади почты' }, words: [{ id: 'w1', text: 'Hastane' }, { id: 'w2', text: 'postahanenin' }, { id: 'w3', text: 'arkasında' }] },
            { id: 'e3', type: 'word_order', sentence: { tr: 'Köşede bir banka var', en: 'There is a bank at the corner', ar: 'هناك بنك في الزاوية', fa: 'در گوشه یک بانک است', ru: 'На углу есть банк' }, words: [{ id: 'w1', text: 'Köşede' }, { id: 'w2', text: 'bir' }, { id: 'w3', text: 'banka' }, { id: 'w4', text: 'var' }] },
            { id: 'e4', type: 'fill_in_blank', sentence: { tr: 'Kavşaktan sola _.', en: 'Turn left from the intersection.', ar: 'استدر يساراً من التقاطع.', fa: 'از تقاطع به چپ بپیچید.', ru: 'На перекрестке поверните налево.' }, blank: { id: 'b1', answer: 'dönün', options: ['dönün', 'gidin', 'durun'] } },
            { id: 'e5', type: 'fill_in_blank', sentence: { tr: 'Otel tam _.', en: 'The hotel is right across.', ar: 'الفندق في الجهة المقابلة تماماً.', fa: 'هتل دقیقا روبروست.', ru: 'Отель прямо напротив.' }, blank: { id: 'b1', answer: 'karşısında', options: ['karşısında', 'yanında', 'arkasında'] } }
          ]
        },
        {
          id: 'a1i_yon_8', type: 'rpg', title: { tr: 'Yol Tarifi Etme', en: 'Explaining Directions', ar: 'شرح الاتجاهات', fa: 'توضیح آدرس', ru: 'Объяснение маршрута' }, xp: 30, coins: 20,
          exercises: [
            { id: 'e1', type: 'rpg', scenario: { tr: 'Bir arkadaşına evin yolunu tarif ediyorsun.', en: 'You are explaining the way to your house to a friend.', ar: 'أنت تشرح الطريق إلى منزلك لصديق.', fa: 'داری آدرس خانه‌ات را به یک دوست توضیح می‌دهی.', ru: 'Вы объясняете другу дорогу к своему дому.' },
              nodes: [
                { id: 'n1', npcText: { tr: 'Duraktayım, şimdi nereye gitmeliyim?', en: 'I am at the stop, where should I go now?', ar: 'أنا في الموقف، إلى أين يجب أن أذهب الآن؟', fa: 'در ایستگاه هستم، الان کجا باید بروم؟', ru: 'Я на остановке, куда мне идти дальше?' },
                  options: [
                    { id: 'o1', text: { tr: 'Duraktan dümdüz yürü.', en: 'Walk straight from the stop.', ar: 'امش مستقيماً من الموقف.', fa: 'از ایستگاه مستقیم راه برو.', ru: 'Иди прямо от остановки.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n2' }
                  ]
                },
                { id: 'n2', npcText: { tr: 'Tamam, ileride bir market var.', en: 'Okay, there is a market ahead.', ar: 'حسناً، هناك متجر في الأمام.', fa: 'باشه، جلوتر یک مارکت هست.', ru: 'Хорошо, впереди есть магазин.' },
                  options: [
                    { id: 'o1', text: { tr: 'Marketten sağa dön. Evim köşede.', en: 'Turn right at the market. My house is at the corner.', ar: 'استدر يميناً عند المتجر. منزلي في الزاوية.', fa: 'از مارکت به راست بپیچ. خانه‌ام در گوشه است.', ru: 'Поверни направо у магазина. Мой дом на углу.' }, isCorrect: true, deductsHeart: false, responseTone: 'success', nextNodeId: 'n3' }
                  ]
                },
                { id: 'n3', npcText: { tr: 'Gördüm! Geliyorum.', en: 'I saw it! I am coming.', ar: 'رأيته! أنا قادم.', fa: 'دیدم! دارم می‌آیم.', ru: 'Вижу! Иду.' },
                  options: [
                    { id: 'o1', text: { tr: 'Süper, bekliyorum.', en: 'Super, I am waiting.', ar: 'ممتاز، أنا أنتظر.', fa: 'عالی، منتظرم.', ru: 'Супер, жду.' }, isCorrect: true, deductsHeart: false, responseTone: 'success' }
                  ]
                }
              ] }
          ]
        },
        {
          id: 'a1i_yon_9', type: 'boss_fight', title: { tr: 'Yön Sınavı', en: 'Directions Test', ar: 'اختبار الاتجاهات', fa: 'امتحان جهت‌ها', ru: 'Тест по направлениям' }, xp: 50, coins: 30,
          exercises: [
            { id: 'e1', type: 'multiple_choice', question: { tr: 'sağ', en: 'right', ar: 'يمين', fa: 'راست', ru: 'право' }, options: [{ id: 'o1', text: { tr: 'sağ', en: 'right', ar: 'يمين', fa: 'راست', ru: 'право' }, isCorrect: true }, { id: 'o2', text: { tr: 'sol', en: 'left', ar: 'يسار', fa: 'چپ', ru: 'лево' }, isCorrect: false }] },
            { id: 'e2', type: 'multiple_choice', question: { tr: 'düz', en: 'straight', ar: 'مستقيم', fa: 'مستقیم', ru: 'прямо' }, options: [{ id: 'o1', text: { tr: 'düz', en: 'straight', ar: 'مستقيم', fa: 'مستقیم', ru: 'прямо' }, isCorrect: true }, { id: 'o2', text: { tr: 'geri', en: 'back', ar: 'خلف', fa: 'عقب', ru: 'назад' }, isCorrect: false }] },
            { id: 'e3', type: 'multiple_choice', question: { tr: 'yakın', en: 'near', ar: 'قريب', fa: 'نزدیک', ru: 'близко' }, options: [{ id: 'o1', text: { tr: 'yakın', en: 'near', ar: 'قريب', fa: 'نزدیک', ru: 'близко' }, isCorrect: true }, { id: 'o2', text: { tr: 'uzak', en: 'far', ar: 'بعيد', fa: 'دور', ru: 'далеко' }, isCorrect: false }] },
            { id: 'e4', type: 'multiple_choice', question: { tr: 'köşe', en: 'corner', ar: 'زاوية', fa: 'گوشه', ru: 'угол' }, options: [{ id: 'o1', text: { tr: 'köşe', en: 'corner', ar: 'زاوية', fa: 'گوشه', ru: 'угол' }, isCorrect: true }, { id: 'o2', text: { tr: 'kavşak', en: 'intersection', ar: 'تقاطع', fa: 'تقاطع', ru: 'перекресток' }, isCorrect: false }] },
            { id: 'e5', type: 'word_order', sentence: { tr: 'İlk sokaktan sağa dönün', en: 'Turn right from the first street', ar: 'استدر يميناً من الشارع الأول', fa: 'از اولین خیابان به راست بپیچید', ru: 'Поверните направо на первой улице' }, words: [{ id: 'w1', text: 'İlk' }, { id: 'w2', text: 'sokaktan' }, { id: 'w3', text: 'sağa' }, { id: 'w4', text: 'dönün' }] },
            { id: 'e6', type: 'word_order', sentence: { tr: 'Nasıl gidebilirim', en: 'How can I go', ar: 'كيف يمكنني الذهاب', fa: 'چطور می‌توانم بروم', ru: 'Как мне добраться' }, words: [{ id: 'w1', text: 'Nasıl' }, { id: 'w2', text: 'gidebilirim' }] },
            { id: 'e7', type: 'fill_in_blank', sentence: { tr: 'Kavşaktan _ dönün.', en: 'Turn left at the intersection.', ar: 'استدر يساراً عند التقاطع.', fa: 'از تقاطع به چپ بپیچید.', ru: 'На перекрестке поверните налево.' }, blank: { id: 'b1', answer: 'sola', options: ['sola', 'sağa', 'düz'] } },
            { id: 'e8', type: 'fill_in_blank', sentence: { tr: 'Banka _.', en: 'The bank is near.', ar: 'البنك قريب.', fa: 'بانک نزدیک است.', ru: 'Банк близко.' }, blank: { id: 'b1', answer: 'yakın', options: ['yakın', 'uzak', 'sol'] } }
          ]
        }
      ]
    }
  ]
};
