import type { UnitGuidebook } from '../types';

export const guidebooks: Record<string, UnitGuidebook> = {
  'a1_selamlasma': {
    title: {
      tr: "Selamlaşma ve Tanışma",
      en: "Greetings and Introductions",
      ar: "التحيات والتعارف",
      fa: "احوالپرسی و آشنایی",
      ru: "Приветствия и знакомство"
    },
    description: {
      tr: "Bu ünitede temel selamlaşma ifadelerini ve kendinizi tanıtmayı öğreneceksiniz.",
      en: "In this unit, you will learn basic greetings and how to introduce yourself.",
      ar: "في هذه الوحدة، ستتعلم عبارات التحية الأساسية وكيفية تقديم نفسك.",
      fa: "در این درس با اصطلاحات اولیه احوالپرسی و نحوه معرفی خود آشنا می‌شوید.",
      ru: "В этом уроке вы выучите базовые приветствия и как представить себя."
    },
    vocabulary: [
      { word: "Merhaba", translation: { tr: "Merhaba", en: "Hello", ar: "مرحباً", fa: "سلام", ru: "Здравствуйте" } },
      { word: "Günaydın", translation: { tr: "Günaydın", en: "Good morning", ar: "صباح الخير", fa: "صبح بخیر", ru: "Доброе утро" } },
      { word: "İyi günler", translation: { tr: "İyi günler", en: "Good day / Have a nice day", ar: "طاب يومك", fa: "روز بخیر", ru: "Добрый день" } },
      { word: "İyi akşamlar", translation: { tr: "İyi akşamlar", en: "Good evening", ar: "مساء الخير", fa: "عصر بخیر", ru: "Добрый вечер" } },
      { word: "İyi geceler", translation: { tr: "İyi geceler", en: "Good night", ar: "تصبح على خير", fa: "شب بخیر", ru: "Спокойной ночи" } },
      { word: "Hoşça kal", translation: { tr: "Hoşça kal", en: "Goodbye", ar: "وداعاً", fa: "خداحافظ", ru: "До свидания" } },
      { word: "Görüşürüz", translation: { tr: "Görüşürüz", en: "See you", ar: "أراك لاحقاً", fa: "می‌بینمت", ru: "Увидимся" } },
      { word: "Teşekkür ederim", translation: { tr: "Teşekkür ederim", en: "Thank you", ar: "شكراً لك", fa: "متشکرم", ru: "Спасибо" } },
      { word: "Nasılsın?", translation: { tr: "Nasılsın?", en: "How are you?", ar: "كيف حالك؟", fa: "حالت چطور است؟", ru: "Как дела?" } },
      { word: "İyiyim", translation: { tr: "İyiyim", en: "I am fine", ar: "أنا بخير", fa: "خوبم", ru: "Я в порядке" } }
    ],
    keyPhrases: [
      {
        phrase: "Benim adım Ali.",
        translation: { tr: "Benim adım Ali.", en: "My name is Ali.", ar: "اسمي علي.", fa: "اسم من علی است.", ru: "Меня зовут Али." }
      },
      {
        phrase: "Memnun oldum.",
        translation: { tr: "Memnun oldum.", en: "Nice to meet you.", ar: "تشرفت بلقائك.", fa: "از آشنایی با شما خوشبختم.", ru: "Приятно познакомиться." }
      },
      {
        phrase: "Senin adın ne?",
        translation: { tr: "Senin adın ne?", en: "What is your name?", ar: "ما اسمك؟", fa: "اسم شما چیست؟", ru: "Как тебя зовут?" }
      },
      {
        phrase: "Nerelisin?",
        translation: { tr: "Nerelisin?", en: "Where are you from?", ar: "من أين أنت؟", fa: "اهل کجا هستید؟", ru: "Откуда ты?" }
      },
      {
        phrase: "Ben Türkiyeliyim.",
        translation: { tr: "Ben Türkiyeliyim.", en: "I am from Turkey.", ar: "أنا من تركيا.", fa: "من اهل ترکیه هستم.", ru: "Я из Турции." }
      }
    ],
    grammarNotes: [
      {
        title: {
          tr: "Kişi Zamirleri (Ben, Sen, O...)",
          en: "Personal Pronouns (I, You, He/She/It...)",
          ar: "الضمائر الشخصية",
          fa: "ضمایر شخصی",
          ru: "Личные местоимения"
        },
        explanation: {
          tr: "Türkçede cinsiyet ayrımı yoktur. 'O', he/she/it için kullanılır.",
          en: "Turkish has no gender for pronouns. 'O' is used for he, she, and it.",
          ar: "لا يوجد جنس للضمائر في اللغة التركية. 'O' تستخدم له ولها ولغير العاقل.",
          fa: "در زبان ترکی جنسیت برای ضمایر وجود ندارد. 'O' برای او (مرد/زن) و آن استفاده می‌شود.",
          ru: "В турецком языке нет родов для местоимений. 'O' используется для он, она, оно."
        },
        examples: [
          {
            tr: "Ben öğrenciyim.",
            translation: { tr: "Ben öğrenciyim.", en: "I am a student.", ar: "أنا طالب.", fa: "من دانشجو هستم.", ru: "Я студент." }
          },
          {
            tr: "O öğretmen.",
            translation: { tr: "O öğretmen.", en: "He/She is a teacher.", ar: "هو/هي معلم/ة.", fa: "او معلم است.", ru: "Он/Она учитель." }
          }
        ]
      },
      {
        title: {
          tr: "Soru Eki: mi/mı/mu/mü",
          en: "Question Particle: mi/mı/mu/mü",
          ar: "أداة الاستفهام",
          fa: "پسوند پرسشی",
          ru: "Вопросительная частица"
        },
        explanation: {
          tr: "Evet/hayır soruları yapmak için kullanılır. Ünlü uyumuna uyar.",
          en: "Used to make yes/no questions. It follows vowel harmony.",
          ar: "تستخدم لتكوين أسئلة نعم/لا. وتتبع التوافق الصوتي.",
          fa: "برای ساختن سوالات بله/خیر استفاده می‌شود و از قانون هماهنگی حروف صدادار پیروی می‌کند.",
          ru: "Используется для вопросов да/нет. Подчиняется гармонии гласных."
        },
        examples: [
          {
            tr: "Sen iyi misin?",
            translation: { tr: "Sen iyi misin?", en: "Are you okay?", ar: "هل أنت بخير؟", fa: "آیا شما خوب هستید؟", ru: "Ты в порядке?" }
          }
        ]
      }
    ]
  },
  'a1_pazar': {
    title: {
      tr: "Pazar ve Yiyecekler",
      en: "Market and Food",
      ar: "السوق والطعام",
      fa: "بازار و غذاها",
      ru: "Рынок и еда"
    },
    description: {
      tr: "Pazarda alışveriş yapmayı ve temel yiyecekleri öğreneceksiniz.",
      en: "You will learn how to shop at the market and basic food vocabulary.",
      ar: "ستتعلم كيفية التسوق في السوق ومفردات الطعام الأساسية.",
      fa: "شما با نحوه خرید در بازار و لغات پایه غذاها آشنا خواهید شد.",
      ru: "Вы научитесь делать покупки на рынке и выучите базовые слова о еде."
    },
    vocabulary: [
      { word: "Elma", translation: { tr: "Elma", en: "Apple", ar: "تفاحة", fa: "سیب", ru: "Яблоко" } },
      { word: "Ekmek", translation: { tr: "Ekmek", en: "Bread", ar: "خبز", fa: "نان", ru: "Хлеб" } },
      { word: "Su", translation: { tr: "Su", en: "Water", ar: "ماء", fa: "آب", ru: "Вода" } },
      { word: "Süt", translation: { tr: "Süt", en: "Milk", ar: "حليب", fa: "شیر", ru: "Молоко" } },
      { word: "Peynir", translation: { tr: "Peynir", en: "Cheese", ar: "جبنة", fa: "پنیر", ru: "Сыр" } },
      { word: "Domates", translation: { tr: "Domates", en: "Tomato", ar: "طماطم", fa: "گوجه فرنگی", ru: "Помидор" } },
      { word: "Yumurta", translation: { tr: "Yumurta", en: "Egg", ar: "بيضة", fa: "تخم مرغ", ru: "Яйцо" } },
      { word: "Kilo", translation: { tr: "Kilo", en: "Kilo", ar: "كيلو", fa: "کیلو", ru: "Килограмм" } },
      { word: "Taze", translation: { tr: "Taze", en: "Fresh", ar: "طازج", fa: "تازه", ru: "Свежий" } },
      { word: "Pahalı", translation: { tr: "Pahalı", en: "Expensive", ar: "غالي", fa: "گران", ru: "Дорогой" } }
    ],
    keyPhrases: [
      {
        phrase: "Bir kilo elma ne kadar?",
        translation: { tr: "Bir kilo elma ne kadar?", en: "How much is one kilo of apples?", ar: "بكم كيلو التفاح؟", fa: "یک کیلو سیب چقدر است؟", ru: "Сколько стоит килограмм яблок?" }
      },
      {
        phrase: "İki ekmek lütfen.",
        translation: { tr: "İki ekmek lütfen.", en: "Two breads, please.", ar: "خبزان من فضلك.", fa: "دو عدد نان لطفاً.", ru: "Два хлеба, пожалуйста." }
      },
      {
        phrase: "Çok pahalı.",
        translation: { tr: "Çok pahalı.", en: "It is very expensive.", ar: "غالي جداً.", fa: "خیلی گران است.", ru: "Очень дорого." }
      },
      {
        phrase: "Kolay gelsin.",
        translation: { tr: "Kolay gelsin.", en: "May it be easy for you (working).", ar: "يعطيك العافية.", fa: "خسته نباشید.", ru: "Бог в помощь (пожелание работающему)." }
      },
      {
        phrase: "Hayırlı işler.",
        translation: { tr: "Hayırlı işler.", en: "Have a good business day.", ar: "أتمنى لك عملاً موفقاً.", fa: "کسب و کار خوبی داشته باشید.", ru: "Удачной торговли." }
      }
    ],
    grammarNotes: [
      {
        title: {
          tr: "Var / Yok",
          en: "There is / There isn't (Have / Don't have)",
          ar: "يوجد / لا يوجد",
          fa: "وجود دارد / وجود ندارد",
          ru: "Есть / Нет"
        },
        explanation: {
          tr: "'Var' bulunma, 'Yok' bulunmama durumunu ifade eder.",
          en: "'Var' means there is / has. 'Yok' means there isn't / doesn't have.",
          ar: "'Var' تعني يوجد / لدي. 'Yok' تعني لا يوجد / ليس لدي.",
          fa: "'Var' به معنی هست / وجود دارد است. 'Yok' به معنی نیست / وجود ندارد است.",
          ru: "'Var' означает есть / имеется. 'Yok' означает нет / отсутствует."
        },
        examples: [
          {
            tr: "Elma var mı?",
            translation: { tr: "Elma var mı?", en: "Are there apples?", ar: "هل يوجد تفاح؟", fa: "سیب دارید؟ (آیا سیب هست؟)", ru: "Есть яблоки?" }
          },
          {
            tr: "Hayır, elma yok.",
            translation: { tr: "Hayır, elma yok.", en: "No, there are no apples.", ar: "لا، لا يوجد تفاح.", fa: "نه، سیب نداریم.", ru: "Нет, яблок нет." }
          }
        ]
      },
      {
        title: {
          tr: "Miktar Bildiren Kelimeler",
          en: "Words Expressing Quantity",
          ar: "الكلمات الدالة على الكمية",
          fa: "کلمات نشان دهنده مقدار",
          ru: "Слова, выражающие количество"
        },
        explanation: {
          tr: "'Çok', 'Az', 'Biraz' gibi kelimeler miktarı belirtir.",
          en: "Words like 'Çok' (a lot), 'Az' (a little/few), 'Biraz' (some/a little) express quantity.",
          ar: "كلمات مثل 'Çok' (كثيراً)، 'Az' (قليلاً)، 'Biraz' (بعضاً) تعبر عن الكمية.",
          fa: "کلماتی مانند 'Çok' (خیلی)، 'Az' (کم)، 'Biraz' (کمی) مقدار را مشخص می‌کنند.",
          ru: "Такие слова, как 'Çok' (много), 'Az' (мало), 'Biraz' (немного), выражают количество."
        },
        examples: [
          {
            tr: "Biraz peynir istiyorum.",
            translation: { tr: "Biraz peynir istiyorum.", en: "I want some cheese.", ar: "أريد بعض الجبن.", fa: "کمی پنیر می‌خواهم.", ru: "Я хочу немного сыра." }
          }
        ]
      }
    ]
  },
  'a1_ev_aile': {
    title: { tr: "Ev ve Aile", en: "Home and Family", ar: "البيت والعائلة", fa: "خانه و خانواده", ru: "Дом и семья" },
    description: { tr: "Aile üyelerini tanıtma ve ev eşyaları.", en: "Introducing family members and house items.", ar: "التعريف بأفراد الأسرة وأثاث المنزل.", fa: "معرفی اعضای خانواده و وسایل خانه.", ru: "Представление членов семьи и предметы домашнего обихода." },
    vocabulary: [
      { word: "Anne", translation: { tr: "Anne", en: "Mother", ar: "أم", fa: "مادر", ru: "Мама" } },
      { word: "Baba", translation: { tr: "Baba", en: "Father", ar: "أب", fa: "پدر", ru: "Папа" } },
      { word: "Kardeş", translation: { tr: "Kardeş", en: "Sibling", ar: "أخ/أخت", fa: "برادر/خواهر", ru: "Брат/Сестра" } },
      { word: "Ev", translation: { tr: "Ev", en: "House", ar: "بيت", fa: "خانه", ru: "Дом" } },
      { word: "Oda", translation: { tr: "Oda", en: "Room", ar: "غرفة", fa: "اتاق", ru: "Комната" } },
      { word: "Masa", translation: { tr: "Masa", en: "Table", ar: "طاولة", fa: "میز", ru: "Стол" } },
      { word: "Sandalye", translation: { tr: "Sandalye", en: "Chair", ar: "كرسي", fa: "صندلی", ru: "Стул" } },
      { word: "Büyük", translation: { tr: "Büyük", en: "Big", ar: "كبير", fa: "بزرگ", ru: "Большой" } },
      { word: "Küçük", translation: { tr: "Küçük", en: "Small", ar: "صغير", fa: "کوچک", ru: "Маленький" } },
      { word: "Çocuk", translation: { tr: "Çocuk", en: "Child", ar: "طفل", fa: "بچه", ru: "Ребенок" } }
    ],
    keyPhrases: [
      { phrase: "Bu benim annem.", translation: { tr: "Bu benim annem.", en: "This is my mother.", ar: "هذه أمي.", fa: "این مادر من است.", ru: "Это моя мама." } },
      { phrase: "O senin kardeşin mi?", translation: { tr: "O senin kardeşin mi?", en: "Is that your sibling?", ar: "هل هذا أخوك؟", fa: "آیا او برادر/خواهر شماست؟", ru: "Это твой брат/сестра?" } },
      { phrase: "Benim iki çocuğum var.", translation: { tr: "Benim iki çocuğum var.", en: "I have two children.", ar: "لدي طفلان.", fa: "من دو فرزند دارم.", ru: "У меня двое детей." } },
      { phrase: "Evimiz çok büyük.", translation: { tr: "Evimiz çok büyük.", en: "Our house is very big.", ar: "بيتنا كبير جداً.", fa: "خانه ما خیلی بزرگ است.", ru: "Наш дом очень большой." } },
      { phrase: "Odada bir masa var.", translation: { tr: "Odada bir masa var.", en: "There is a table in the room.", ar: "توجد طاولة في الغرفة.", fa: "در اتاق یک میز وجود دارد.", ru: "В комнате есть стол." } }
    ],
    grammarNotes: [
      {
        title: { tr: "İyelik Ekleri (Benim, Senin...)", en: "Possessive Suffixes", ar: "لواحق الملكية", fa: "پسوندهای ملکی", ru: "Притяжательные аффиксы" },
        explanation: { tr: "Sahiplik bildirir. (Benim arabam, senin evin)", en: "Indicates possession. (My car, your house)", ar: "تشير إلى الملكية. (سيارتي، بيتك)", fa: "نشان دهنده مالکیت است. (ماشین من، خانه تو)", ru: "Указывает на принадлежность. (Моя машина, твой дом)" },
        examples: [
          { tr: "Benim evim.", translation: { tr: "Benim evim.", en: "My house.", ar: "بيتي.", fa: "خانه من.", ru: "Мой дом." } },
          { tr: "Senin adın.", translation: { tr: "Senin adın.", en: "Your name.", ar: "اسمك.", fa: "اسم تو.", ru: "Твое имя." } }
        ]
      },
      {
        title: { tr: "Bulunma Hali (-da/-de/-ta/-te)", en: "Locative Case (-da/-de/-ta/-te)", ar: "حالة التواجد (في/على)", fa: "حالت مکانی (در/روی)", ru: "Местный падеж (в/на)" },
        explanation: { tr: "Bir şeyin nerede olduğunu gösterir.", en: "Shows where something is located (in/on/at).", ar: "تبين مكان وجود الشيء (في/على/عند).", fa: "نشان می‌دهد چیزی در کجا قرار دارد (در/روی/پیش).", ru: "Показывает, где что-то находится (в/на/у)." },
        examples: [
          { tr: "Evde", translation: { tr: "Evde", en: "At home", ar: "في البيت", fa: "در خانه", ru: "Дома" } },
          { tr: "Masada", translation: { tr: "Masada", en: "On the table", ar: "على الطاولة", fa: "روی میز", ru: "На столе" } }
        ]
      }
    ]
  },
  'a1_kafe': {
    title: { tr: "Kafe ve Restoran", en: "Cafe and Restaurant", ar: "المقهى والمطعم", fa: "کافه و رستوران", ru: "Кафе и ресторан" },
    description: { tr: "Sipariş verme ve hesap ödeme.", en: "Ordering and paying the bill.", ar: "الطلب ودفع الحساب.", fa: "سفارش دادن و پرداخت صورتحساب.", ru: "Заказ и оплата счета." },
    vocabulary: [
      { word: "Çay", translation: { tr: "Çay", en: "Tea", ar: "شاي", fa: "چای", ru: "Чай" } },
      { word: "Kahve", translation: { tr: "Kahve", en: "Coffee", ar: "قهوة", fa: "قهوه", ru: "Кофе" } },
      { word: "Hesap", translation: { tr: "Hesap", en: "Bill / Check", ar: "الحساب", fa: "صورتحساب", ru: "Счет" } },
      { word: "Menü", translation: { tr: "Menü", en: "Menu", ar: "القائمة", fa: "منو", ru: "Меню" } },
      { word: "Garson", translation: { tr: "Garson", en: "Waiter", ar: "نادل", fa: "گارسون", ru: "Официант" } },
      { word: "Tavuk", translation: { tr: "Tavuk", en: "Chicken", ar: "دجاج", fa: "مرغ", ru: "Курица" } },
      { word: "Et", translation: { tr: "Et", en: "Meat", ar: "لحم", fa: "گوشت", ru: "Мясо" } },
      { word: "Sıcak", translation: { tr: "Sıcak", en: "Hot", ar: "ساخن", fa: "گرم", ru: "Горячий" } },
      { word: "Soğuk", translation: { tr: "Soğuk", en: "Cold", ar: "بارد", fa: "سرد", ru: "Холодный" } },
      { word: "Tatlı", translation: { tr: "Tatlı", en: "Dessert / Sweet", ar: "حلوى", fa: "شیرینی / شیرین", ru: "Десерт / Сладкий" } }
    ],
    keyPhrases: [
      { phrase: "Bir çay alabilir miyim?", translation: { tr: "Bir çay alabilir miyim?", en: "Can I get a tea?", ar: "هل يمكنني الحصول على شاي؟", fa: "می‌توانم یک چای داشته باشم؟", ru: "Можно мне чай?" } },
      { phrase: "Hesap lütfen.", translation: { tr: "Hesap lütfen.", en: "The bill, please.", ar: "الحساب من فضلك.", fa: "صورتحساب لطفاً.", ru: "Счет, пожалуйста." } },
      { phrase: "Menüyü görebilir miyim?", translation: { tr: "Menüyü görebilir miyim?", en: "Can I see the menu?", ar: "هل يمكنني رؤية القائمة؟", fa: "می‌توانم منو را ببینم؟", ru: "Можно посмотреть меню?" } },
      { phrase: "Ben tavuk istiyorum.", translation: { tr: "Ben tavuk istiyorum.", en: "I want chicken.", ar: "أريد دجاجاً.", fa: "من مرغ می‌خواهم.", ru: "Я хочу курицу." } },
      { phrase: "Bu çok lezzetli.", translation: { tr: "Bu çok lezzetli.", en: "This is very delicious.", ar: "هذا لذيذ جداً.", fa: "این خیلی خوشمزه است.", ru: "Это очень вкусно." } }
    ],
    grammarNotes: [
      {
        title: { tr: "İstemek Fiili", en: "Verb: To Want (İstemek)", ar: "فعل الإرادة (İstemek)", fa: "فعل خواستن (İstemek)", ru: "Глагол: Хотеть (İstemek)" },
        explanation: { tr: "Bir şeyi talep ederken kullanılır.", en: "Used when requesting something.", ar: "يستخدم عند طلب شيء ما.", fa: "هنگام درخواست چیزی استفاده می‌شود.", ru: "Используется при запросе чего-либо." },
        examples: [
          { tr: "Kahve istiyorum.", translation: { tr: "Kahve istiyorum.", en: "I want coffee.", ar: "أريد قهوة.", fa: "قهوه می‌خواهم.", ru: "Я хочу кофе." } }
        ]
      },
      {
        title: { tr: "Nezaket İfadeleri", en: "Politeness Phrases", ar: "عبارات التهذيب", fa: "عبارات مودبانه", ru: "Вежливые выражения" },
        explanation: { tr: "Rica ederken 'lütfen', '-bilir miyim' kullanılır.", en: "Use 'lütfen' (please) or '-abilir miyim' (can I?) for polite requests.", ar: "استخدم 'lütfen' (من فضلك) أو '-abilir miyim' (هل يمكنني؟) للطلبات المهذبة.", fa: "برای درخواست مودبانه از 'lütfen' (لطفاً) یا '-ebilir miyim' (می‌توانم؟) استفاده کنید.", ru: "Для вежливых просьб используйте 'lütfen' (пожалуйста) или '-abilir miyim' (могу ли я?)." },
        examples: [
          { tr: "Su lütfen.", translation: { tr: "Su lütfen.", en: "Water, please.", ar: "ماء من فضلك.", fa: "آب لطفاً.", ru: "Воду, пожалуйста." } }
        ]
      }
    ]
  },
  'a1_sayilar': {
    title: { tr: "Sayılar ve Zaman", en: "Numbers and Time", ar: "الأرقام والوقت", fa: "اعداد و زمان", ru: "Числа и время" },
    description: { tr: "Sayıları sayma ve saati söyleme.", en: "Counting numbers and telling the time.", ar: "عد الأرقام وإخبار الوقت.", fa: "شمارش اعداد و گفتن ساعت.", ru: "Счет чисел и определение времени." },
    vocabulary: [
      { word: "Bir", translation: { tr: "Bir", en: "One", ar: "واحد", fa: "یک", ru: "Один" } },
      { word: "İki", translation: { tr: "İki", en: "Two", ar: "اثنان", fa: "دو", ru: "Два" } },
      { word: "Üç", translation: { tr: "Üç", en: "Three", ar: "ثلاثة", fa: "سه", ru: "Три" } },
      { word: "On", translation: { tr: "On", en: "Ten", ar: "عشرة", fa: "ده", ru: "Десять" } },
      { word: "Yüz", translation: { tr: "Yüz", en: "Hundred", ar: "مائة", fa: "صد", ru: "Сто" } },
      { word: "Saat", translation: { tr: "Saat", en: "Hour / Clock", ar: "ساعة", fa: "ساعت", ru: "Час / Часы" } },
      { word: "Dakika", translation: { tr: "Dakika", en: "Minute", ar: "دقيقة", fa: "دقیقه", ru: "Минута" } },
      { word: "Bugün", translation: { tr: "Bugün", en: "Today", ar: "اليوم", fa: "امروز", ru: "Сегодня" } },
      { word: "Yarın", translation: { tr: "Yarın", en: "Tomorrow", ar: "غداً", fa: "فردا", ru: "Завтра" } },
      { word: "Dün", translation: { tr: "Dün", en: "Yesterday", ar: "أمس", fa: "دیروز", ru: "Вчера" } }
    ],
    keyPhrases: [
      { phrase: "Saat kaç?", translation: { tr: "Saat kaç?", en: "What time is it?", ar: "كم الساعة؟", fa: "ساعت چند است؟", ru: "Который час?" } },
      { phrase: "Saat iki.", translation: { tr: "Saat iki.", en: "It is two o'clock.", ar: "الساعة الثانية.", fa: "ساعت دو است.", ru: "Два часа." } },
      { phrase: "Bugün günlerden ne?", translation: { tr: "Bugün günlerden ne?", en: "What day is it today?", ar: "ما هو اليوم؟", fa: "امروز چه روزی است؟", ru: "Какой сегодня день?" } },
      { phrase: "Benim yaşım yirmi.", translation: { tr: "Benim yaşım yirmi.", en: "I am twenty years old.", ar: "عمري عشرون عاماً.", fa: "من بیست سال دارم.", ru: "Мне двадцать лет." } },
      { phrase: "Dün evdeydim.", translation: { tr: "Dün evdeydim.", en: "I was at home yesterday.", ar: "كنت في البيت أمس.", fa: "دیروز در خانه بودم.", ru: "Вчера я был дома." } }
    ],
    grammarNotes: [
      {
        title: { tr: "Saat Sorma ve Söyleme", en: "Asking and Telling Time", ar: "السؤال عن الوقت وإخباره", fa: "پرسیدن و گفتن زمان", ru: "Вопросы о времени и ответы" },
        explanation: { tr: "Tam saatlerde sadece sayıyı söyleriz. (Saat beş)", en: "For full hours, we just say the number. (Saat beş = Five o'clock)", ar: "في الساعات التامة، نقول الرقم فقط. (Saat beş = الساعة الخامسة)", fa: "برای ساعت‌های کامل فقط عدد را می‌گوییم. (Saat beş = ساعت پنج)", ru: "Для полных часов мы просто называем число. (Saat beş = Пять часов)" },
        examples: [
          { tr: "Saat üç.", translation: { tr: "Saat üç.", en: "It is 3 o'clock.", ar: "الساعة الثالثة.", fa: "ساعت سه است.", ru: "Три часа." } }
        ]
      },
      {
        title: { tr: "Çoğul Ekleri (-lar/-ler)", en: "Plural Suffixes (-lar/-ler)", ar: "لواحق الجمع", fa: "پسوندهای جمع", ru: "Аффиксы множественного числа" },
        explanation: { tr: "Kelimenin son ünlüsüne göre -lar veya -ler gelir.", en: "Depending on the last vowel, -lar or -ler is added.", ar: "بناءً على آخر حرف صوتي، تضاف -lar أو -ler.", fa: "بسته به آخرین حرف صدادار، -lar یا -ler اضافه می‌شود.", ru: "В зависимости от последней гласной добавляется -lar или -ler." },
        examples: [
          { tr: "Saatler", translation: { tr: "Saatler", en: "Clocks / Hours", ar: "ساعات", fa: "ساعت‌ها", ru: "Часы" } },
          { tr: "Çocuklar", translation: { tr: "Çocuklar", en: "Children", ar: "أطفال", fa: "بچه‌ها", ru: "Дети" } }
        ]
      }
    ]
  },
  'a1i_ulasim': {
    title: { tr: "Ulaşım", en: "Transport", ar: "المواصلات", fa: "حمل و نقل", ru: "Транспорт" },
    description: { tr: "Araçlar ve seyahat.", en: "Vehicles and traveling.", ar: "المركبات والسفر.", fa: "وسایل نقلیه و سفر.", ru: "Транспортные средства и путешествия." },
    vocabulary: [
      { word: "Otobüs", translation: { tr: "Otobüs", en: "Bus", ar: "حافلة", fa: "اتوبوس", ru: "Автобус" } },
      { word: "Tren", translation: { tr: "Tren", en: "Train", ar: "قطار", fa: "قطار", ru: "Поезд" } },
      { word: "Uçak", translation: { tr: "Uçak", en: "Airplane", ar: "طائرة", fa: "هواپیما", ru: "Самолет" } },
      { word: "Araba", translation: { tr: "Araba", en: "Car", ar: "سيارة", fa: "ماشین", ru: "Машина" } },
      { word: "Bilet", translation: { tr: "Bilet", en: "Ticket", ar: "تذكرة", fa: "بلیط", ru: "Билет" } },
      { word: "Durak", translation: { tr: "Durak", en: "Stop / Station", ar: "موقف", fa: "ایستگاه", ru: "Остановка" } },
      { word: "Yolcu", translation: { tr: "Yolcu", en: "Passenger", ar: "مسافر", fa: "مسافر", ru: "Пассажир" } },
      { word: "Havalimanı", translation: { tr: "Havalimanı", en: "Airport", ar: "مطار", fa: "فرودگاه", ru: "Аэропорт" } },
      { word: "İnmek", translation: { tr: "İnmek", en: "To get off", ar: "للنزول", fa: "پیاده شدن", ru: "Выходить" } },
      { word: "Binmek", translation: { tr: "Binmek", en: "To get on", ar: "للركوب", fa: "سوار شدن", ru: "Садиться (в транспорт)" } }
    ],
    keyPhrases: [
      { phrase: "Otobüs durağı nerede?", translation: { tr: "Otobüs durağı nerede?", en: "Where is the bus stop?", ar: "أين موقف الحافلة؟", fa: "ایستگاه اتوبوس کجاست؟", ru: "Где автобусная остановка?" } },
      { phrase: "Bir bilet lütfen.", translation: { tr: "Bir bilet lütfen.", en: "One ticket, please.", ar: "تذكرة واحدة من فضلك.", fa: "یک بلیط لطفاً.", ru: "Один билет, пожалуйста." } },
      { phrase: "Trene biniyorum.", translation: { tr: "Trene biniyorum.", en: "I am getting on the train.", ar: "أنا أركب القطار.", fa: "دارم سوار قطار می‌شوم.", ru: "Я сажусь в поезд." } },
      { phrase: "Havalimanına nasıl giderim?", translation: { tr: "Havalimanına nasıl giderim?", en: "How do I go to the airport?", ar: "كيف أذهب إلى المطار؟", fa: "چگونه به فرودگاه بروم؟", ru: "Как мне добраться до аэропорта?" } },
      { phrase: "Burada inebilir miyim?", translation: { tr: "Burada inebilir miyim?", en: "Can I get off here?", ar: "هل يمكنني النزول هنا؟", fa: "می‌توانم اینجا پیاده شوم؟", ru: "Могу ли я выйти здесь?" } }
    ],
    grammarNotes: [
      {
        title: { tr: "Yönelme Hali (-a/-e)", en: "Dative Case (-a/-e)", ar: "حالة التوجه (إلى)", fa: "حالت جهتی (به)", ru: "Дательный падеж (в/на/к)" },
        explanation: { tr: "Bir yere gitmeyi ifade eder.", en: "Expresses moving towards a place (to).", ar: "تعبر عن الذهاب إلى مكان ما.", fa: "نشان دهنده رفتن به جایی است.", ru: "Выражает движение к месту (в/на)." },
        examples: [
          { tr: "Eve gidiyorum.", translation: { tr: "Eve gidiyorum.", en: "I am going home.", ar: "أنا ذاهب إلى البيت.", fa: "دارم به خانه می‌روم.", ru: "Я иду домой." } }
        ]
      },
      {
        title: { tr: "Ayrılma Hali (-dan/-den)", en: "Ablative Case (-dan/-den)", ar: "حالة الانفصال (من)", fa: "حالت مبدأ (از)", ru: "Исходный падеж (из/от)" },
        explanation: { tr: "Bir yerden ayrılmayı ifade eder.", en: "Expresses leaving from a place (from).", ar: "تعبر عن المغادرة من مكان ما.", fa: "نشان دهنده ترک کردن یک مکان است (از).", ru: "Выражает отправление из места (от/из)." },
        examples: [
          { tr: "Otobüsten iniyorum.", translation: { tr: "Otobüsten iniyorum.", en: "I am getting off the bus.", ar: "أنزل من الحافلة.", fa: "از اتوبوس پیاده می‌شوم.", ru: "Я выхожу из автобуса." } }
        ]
      }
    ]
  },
  'a1i_okul': {
    title: { tr: "Okul ve Sınıf", en: "School and Class", ar: "المدرسة والصف", fa: "مدرسه و کلاس", ru: "Школа и класс" },
    description: { tr: "Eğitim ve sınıf içi kelimeler.", en: "Education and classroom vocabulary.", ar: "التعليم ومفردات داخل الصف.", fa: "آموزش و لغات مربوط به کلاس.", ru: "Образование и школьная лексика." },
    vocabulary: [
      { word: "Okul", translation: { tr: "Okul", en: "School", ar: "مدرسة", fa: "مدرسه", ru: "Школа" } },
      { word: "Sınıf", translation: { tr: "Sınıf", en: "Classroom", ar: "صف", fa: "کلاس", ru: "Класс" } },
      { word: "Öğretmen", translation: { tr: "Öğretmen", en: "Teacher", ar: "معلم", fa: "معلم", ru: "Учитель" } },
      { word: "Öğrenci", translation: { tr: "Öğrenci", en: "Student", ar: "طالب", fa: "دانش‌آموز / دانشجو", ru: "Ученик / Студент" } },
      { word: "Kitap", translation: { tr: "Kitap", en: "Book", ar: "كتاب", fa: "کتاب", ru: "Книга" } },
      { word: "Defter", translation: { tr: "Defter", en: "Notebook", ar: "دفتر", fa: "دفتر", ru: "Тетрадь" } },
      { word: "Kalem", translation: { tr: "Kalem", en: "Pen / Pencil", ar: "قلم", fa: "قلم / مداد", ru: "Ручка / Карандаш" } },
      { word: "Ders", translation: { tr: "Ders", en: "Lesson", ar: "درس", fa: "درس", ru: "Урок" } },
      { word: "Sınav", translation: { tr: "Sınav", en: "Exam", ar: "امتحان", fa: "امتحان", ru: "Экзамен" } },
      { word: "Anlamak", translation: { tr: "Anlamak", en: "To understand", ar: "للفهم", fa: "فهمیدن", ru: "Понимать" } }
    ],
    keyPhrases: [
      { phrase: "Anlamıyorum.", translation: { tr: "Anlamıyorum.", en: "I don't understand.", ar: "أنا لا أفهم.", fa: "نمی‌فهمم.", ru: "Я не понимаю." } },
      { phrase: "Tekrar edebilir misiniz?", translation: { tr: "Tekrar edebilir misiniz?", en: "Can you repeat, please?", ar: "هل يمكنك التكرار من فضلك؟", fa: "می‌توانید تکرار کنید؟", ru: "Можете повторить, пожалуйста?" } },
      { phrase: "Soru sorabilir miyim?", translation: { tr: "Soru sorabilir miyim?", en: "Can I ask a question?", ar: "هل يمكنني طرح سؤال؟", fa: "می‌توانم سوالی بپرسم؟", ru: "Можно задать вопрос?" } },
      { phrase: "Kitabı açın.", translation: { tr: "Kitabı açın.", en: "Open the book.", ar: "افتحوا الكتاب.", fa: "کتاب را باز کنید.", ru: "Откройте книгу." } },
      { phrase: "Ben öğrenciyim.", translation: { tr: "Ben öğrenciyim.", en: "I am a student.", ar: "أنا طالب.", fa: "من دانش‌آموز هستم.", ru: "Я ученик." } }
    ],
    grammarNotes: [
      {
        title: { tr: "Emir Kipi (Aç, Oku...)", en: "Imperative Mood", ar: "صيغة الأمر", fa: "وجه امری", ru: "Повелительное наклонение" },
        explanation: { tr: "Tavsiye veya emir verirken kullanılır.", en: "Used to give commands or advice.", ar: "يستخدم لإعطاء الأوامر أو النصائح.", fa: "برای دادن دستور یا نصیحت استفاده می‌شود.", ru: "Используется для команд или советов." },
        examples: [
          { tr: "Oku!", translation: { tr: "Oku!", en: "Read!", ar: "اقرأ!", fa: "بخوان!", ru: "Читай!" } },
          { tr: "Lütfen dinleyin.", translation: { tr: "Lütfen dinleyin.", en: "Please listen. (formal/plural)", ar: "استمعوا من فضلكم.", fa: "لطفاً گوش دهید.", ru: "Пожалуйста, слушайте." } }
        ]
      },
      {
        title: { tr: "Şimdiki Zaman Olumsuz (-mı/-mi/-mu/-mü)", en: "Present Continuous Negative", ar: "الزمن الحاضر المستمر (نفي)", fa: "زمان حال استمراری منفی", ru: "Отрицание в настоящем длительном времени" },
        explanation: { tr: "Şu an yapılmayan bir eylemi belirtir.", en: "Indicates an action not happening right now.", ar: "يشير إلى فعل لا يحدث الآن.", fa: "نشان دهنده عملی است که الان در حال انجام نیست.", ru: "Указывает на действие, которое не происходит сейчас." },
        examples: [
          { tr: "Anlamıyorum.", translation: { tr: "Anlamıyorum.", en: "I am not understanding. (I don't understand)", ar: "أنا لا أفهم.", fa: "من نمی‌فهمم.", ru: "Я не понимаю." } }
        ]
      }
    ]
  },
  'a1i_alisveris': {
    title: { tr: "Alışveriş ve Kıyafetler", en: "Shopping and Clothes", ar: "التسوق والملابس", fa: "خرید و لباس‌ها", ru: "Шопинг и одежда" },
    description: { tr: "Mağazada alışveriş yapma ve kıyafet isimleri.", en: "Shopping in a store and clothing names.", ar: "التسوق في المتجر وأسماء الملابس.", fa: "خرید در فروشگاه و نام لباس‌ها.", ru: "Шопинг в магазине и названия одежды." },
    vocabulary: [
      { word: "Kıyafet", translation: { tr: "Kıyafet", en: "Clothes", ar: "ملابس", fa: "لباس", ru: "Одежда" } },
      { word: "Gömlek", translation: { tr: "Gömlek", en: "Shirt", ar: "قميص", fa: "پیراهن", ru: "Рубашка" } },
      { word: "Pantolon", translation: { tr: "Pantolon", en: "Trousers / Pants", ar: "بنطلون", fa: "شلوار", ru: "Брюки" } },
      { word: "Ayakkabı", translation: { tr: "Ayakkabı", en: "Shoe", ar: "حذاء", fa: "کفش", ru: "Обувь" } },
      { word: "Ceket", translation: { tr: "Ceket", en: "Jacket", ar: "سترة", fa: "ژاکت / کت", ru: "Куртка / Пиджак" } },
      { word: "Renk", translation: { tr: "Renk", en: "Color", ar: "لون", fa: "رنگ", ru: "Цвет" } },
      { word: "Siyah", translation: { tr: "Siyah", en: "Black", ar: "أسود", fa: "سیاه", ru: "Черный" } },
      { word: "Beyaz", translation: { tr: "Beyaz", en: "White", ar: "أبيض", fa: "سفید", ru: "Белый" } },
      { word: "Beden", translation: { tr: "Beden", en: "Size (Clothing)", ar: "مقاس", fa: "سایز / اندازه", ru: "Размер" } },
      { word: "Denemek", translation: { tr: "Denemek", en: "To try on / attempt", ar: "للتجربة", fa: "امتحان کردن / پوشیدن", ru: "Примерять / Пробовать" } }
    ],
    keyPhrases: [
      { phrase: "Bu ne kadar?", translation: { tr: "Bu ne kadar?", en: "How much is this?", ar: "بكم هذا؟", fa: "این چقدر است؟", ru: "Сколько это стоит?" } },
      { phrase: "Bunu denemek istiyorum.", translation: { tr: "Bunu denemek istiyorum.", en: "I want to try this on.", ar: "أريد تجربة هذا.", fa: "می‌خواهم این را امتحان کنم.", ru: "Я хочу это примерить." } },
      { phrase: "Daha büyüğü var mı?", translation: { tr: "Daha büyüğü var mı?", en: "Is there a bigger one?", ar: "هل يوجد مقاس أكبر؟", fa: "آیا بزرگترش هست؟", ru: "Есть ли размер побольше?" } },
      { phrase: "Başka renk var mı?", translation: { tr: "Başka renk var mı?", en: "Are there other colors?", ar: "هل يوجد لون آخر؟", fa: "رنگ دیگری دارید؟", ru: "Есть ли другие цвета?" } },
      { phrase: "Alıyorum.", translation: { tr: "Alıyorum.", en: "I am buying it. (I'll take it)", ar: "سأشتريه.", fa: "می‌خرمش.", ru: "Я беру это." } }
    ],
    grammarNotes: [
      {
        title: { tr: "Sıfatlarda Karşılaştırma (Daha)", en: "Comparatives (Daha)", ar: "المقارنة (Daha)", fa: "صفت برتر (Daha)", ru: "Сравнительная степень (Daha)" },
        explanation: { tr: "'Daha', sıfatın derecesini artırır (more / -er).", en: "'Daha' is used to make comparative adjectives (more / -er).", ar: "'Daha' تستخدم للمقارنة (أكثر).", fa: "'Daha' برای ساخت صفت برتر استفاده می‌شود (تر).", ru: "'Daha' используется для сравнительной степени (более / -ее)." },
        examples: [
          { tr: "Daha ucuz", translation: { tr: "Daha ucuz", en: "Cheaper", ar: "أرخص", fa: "ارزان‌تر", ru: "Дешевле" } }
        ]
      },
      {
        title: { tr: "İşaret Sıfatları (Bu, Şu, O)", en: "Demonstrative Adjectives", ar: "أسماء الإشارة", fa: "صفات اشاره", ru: "Указательные местоимения" },
        explanation: { tr: "Nesneleri işaret ederken kullanılır.", en: "Used to point out objects (this, that, it).", ar: "تستخدم للإشارة إلى الأشياء.", fa: "برای اشاره به اشیاء استفاده می‌شود (این، آن).", ru: "Используется для указания на объекты (этот, тот)." },
        examples: [
          { tr: "Bu gömlek", translation: { tr: "Bu gömlek", en: "This shirt", ar: "هذا القميص", fa: "این پیراهن", ru: "Эта рубашка" } },
          { tr: "O ayakkabı", translation: { tr: "O ayakkabı", en: "That shoe", ar: "ذلك الحذاء", fa: "آن کفش", ru: "Та обувь" } }
        ]
      }
    ]
  },
  'a1i_saglik': {
    title: { tr: "Sağlık ve Eczane", en: "Health and Pharmacy", ar: "الصحة والصيدلية", fa: "سلامتی و داروخانه", ru: "Здоровье и аптека" },
    description: { tr: "Hastanede ve eczanede kullanılabilecek ifadeler.", en: "Phrases to use at the hospital and pharmacy.", ar: "عبارات تستخدم في المستشفى والصيدلية.", fa: "عبارات مورد استفاده در بیمارستان و داروخانه.", ru: "Фразы для больницы и аптеки." },
    vocabulary: [
      { word: "Doktor", translation: { tr: "Doktor", en: "Doctor", ar: "طبيب", fa: "دکتر", ru: "Врач" } },
      { word: "Hasta", translation: { tr: "Hasta", en: "Patient / Sick", ar: "مريض", fa: "بیمار", ru: "Больной / Пациент" } },
      { word: "Hastane", translation: { tr: "Hastane", en: "Hospital", ar: "مستشفى", fa: "بیمارستان", ru: "Больница" } },
      { word: "Eczane", translation: { tr: "Eczane", en: "Pharmacy", ar: "صيدلية", fa: "داروخانه", ru: "Аптека" } },
      { word: "İlaç", translation: { tr: "İlaç", en: "Medicine", ar: "دواء", fa: "دارو", ru: "Лекарство" } },
      { word: "Ağrı", translation: { tr: "Ağrı", en: "Pain / Ache", ar: "ألم", fa: "درد", ru: "Боль" } },
      { word: "Ateş", translation: { tr: "Ateş", en: "Fever / Fire", ar: "حمى / نار", fa: "تب / آتش", ru: "Температура / Огонь" } },
      { word: "Baş", translation: { tr: "Baş", en: "Head", ar: "رأس", fa: "سر", ru: "Голова" } },
      { word: "Mide", translation: { tr: "Mide", en: "Stomach", ar: "معدة", fa: "معده", ru: "Желудок" } },
      { word: "Yardım", translation: { tr: "Yardım", en: "Help", ar: "مساعدة", fa: "کمک", ru: "Помощь" } }
    ],
    keyPhrases: [
      { phrase: "Hastayım.", translation: { tr: "Hastayım.", en: "I am sick.", ar: "أنا مريض.", fa: "من بیمارم.", ru: "Я болен." } },
      { phrase: "Başım ağrıyor.", translation: { tr: "Başım ağrıyor.", en: "My head hurts. (I have a headache)", ar: "رأسي يؤلمني.", fa: "سرم درد می‌کند.", ru: "У меня болит голова." } },
      { phrase: "Yardım eder misiniz?", translation: { tr: "Yardım eder misiniz?", en: "Can you help me?", ar: "هل يمكنك مساعدتي؟", fa: "می‌توانید به من کمک کنید؟", ru: "Можете помочь?" } },
      { phrase: "Nöbetçi eczane nerede?", translation: { tr: "Nöbetçi eczane nerede?", en: "Where is the pharmacy on duty?", ar: "أين الصيدلية المناوبة؟", fa: "داروخانه شبانه‌روزی کجاست؟", ru: "Где дежурная аптека?" } },
      { phrase: "Geçmiş olsun.", translation: { tr: "Geçmiş olsun.", en: "Get well soon.", ar: "أتمنى لك الشفاء العاجل.", fa: "بلا به دور باشد. (زودتر خوب شوید)", ru: "Выздоравливайте." } }
    ],
    grammarNotes: [
      {
        title: { tr: "Geniş Zamanla Rica (-ır mısın?)", en: "Polite Request with Aorist Tense", ar: "الطلب المهذب", fa: "درخواست مودبانه با زمان گسترده", ru: "Вежливая просьба с широким временем" },
        explanation: { tr: "Geniş zamanın soru hali ricalarda kullanılır.", en: "The question form of the aorist tense is used for polite requests.", ar: "صيغة السؤال في الزمن الواسع تستخدم للطلبات المهذبة.", fa: "حالت سوالی زمان گسترده برای درخواست‌های مودبانه استفاده می‌شود.", ru: "Вопросительная форма широкого времени используется для вежливых просьб." },
        examples: [
          { tr: "Bana yardım eder misiniz?", translation: { tr: "Bana yardım eder misiniz?", en: "Would you help me?", ar: "هل لك أن تساعدني؟", fa: "آیا به من کمک می‌کنید؟", ru: "Не могли бы вы мне помочь?" } }
        ]
      },
      {
        title: { tr: "İyelik ve Beden Bölümleri", en: "Possession and Body Parts", ar: "الملكية وأجزاء الجسم", fa: "مالکیت و اعضای بدن", ru: "Принадлежность и части тела" },
        explanation: { tr: "Bedensel şikayetlerde iyelik eki kullanılır.", en: "Possessive suffixes are used when talking about physical complaints.", ar: "تستخدم لواحق الملكية عند التحدث عن الشكاوى الجسدية.", fa: "پسوندهای ملکی هنگام صحبت در مورد شکایات جسمی استفاده می‌شود.", ru: "Притяжательные аффиксы используются при разговоре о физических жалобах." },
        examples: [
          { tr: "Başım", translation: { tr: "Başım", en: "My head", ar: "رأسي", fa: "سر من", ru: "Моя голова" } },
          { tr: "Midesi", translation: { tr: "Midesi", en: "His/Her stomach", ar: "معدته/ها", fa: "معده او", ru: "Его/Ее желудок" } }
        ]
      }
    ]
  },
  'a1i_yon': {
    title: { tr: "Yön Sorma ve Tarif", en: "Directions", ar: "الاتجاهات", fa: "آدرس پرسیدن و جهت‌ها", ru: "Направления" },
    description: { tr: "Adres sorma ve yön tarif etme.", en: "Asking for and giving directions.", ar: "السؤال عن العنوان ووصف الاتجاهات.", fa: "پرسیدن آدرس و راهنمایی مسیر.", ru: "Как спросить и объяснить дорогу." },
    vocabulary: [
      { word: "Sağ", translation: { tr: "Sağ", en: "Right", ar: "يمين", fa: "راست", ru: "Право" } },
      { word: "Sol", translation: { tr: "Sol", en: "Left", ar: "يسار", fa: "چپ", ru: "Лево" } },
      { word: "Düz", translation: { tr: "Düz", en: "Straight", ar: "مباشرة", fa: "مستقیم", ru: "Прямо" } },
      { word: "Sokak", translation: { tr: "Sokak", en: "Street", ar: "شارع", fa: "خیابان", ru: "Улица" } },
      { word: "Cadde", translation: { tr: "Cadde", en: "Avenue", ar: "شارع رئيسي", fa: "خیابان اصلی", ru: "Проспект" } },
      { word: "Banka", translation: { tr: "Banka", en: "Bank", ar: "بنك", fa: "بانک", ru: "Банк" } },
      { word: "Postane", translation: { tr: "Postane", en: "Post office", ar: "مكتب بريد", fa: "اداره پست", ru: "Почта" } },
      { word: "Yakın", translation: { tr: "Yakın", en: "Near / Close", ar: "قريب", fa: "نزدیک", ru: "Близко" } },
      { word: "Uzak", translation: { tr: "Uzak", en: "Far", ar: "بعيد", fa: "دور", ru: "Далеко" } },
      { word: "Harita", translation: { tr: "Harita", en: "Map", ar: "خريطة", fa: "نقشه", ru: "Карта" } }
    ],
    keyPhrases: [
      { phrase: "Affedersiniz, banka nerede?", translation: { tr: "Affedersiniz, banka nerede?", en: "Excuse me, where is the bank?", ar: "عذراً، أين البنك؟", fa: "ببخشید، بانک کجاست؟", ru: "Извините, где банк?" } },
      { phrase: "Düz gidin.", translation: { tr: "Düz gidin.", en: "Go straight.", ar: "امشِ للأمام مباشرة.", fa: "مستقیم بروید.", ru: "Идите прямо." } },
      { phrase: "Sağa dönün.", translation: { tr: "Sağa dönün.", en: "Turn right.", ar: "اتجه يميناً.", fa: "به راست بپیچید.", ru: "Поверните направо." } },
      { phrase: "Sola dönün.", translation: { tr: "Sola dönün.", en: "Turn left.", ar: "اتجه يساراً.", fa: "به چپ بپیچید.", ru: "Поверните налево." } },
      { phrase: "Burası çok yakın.", translation: { tr: "Burası çok yakın.", en: "This place is very close.", ar: "هذا المكان قريب جداً.", fa: "اینجا خیلی نزدیک است.", ru: "Это очень близко." } }
    ],
    grammarNotes: [
      {
        title: { tr: "Emir Kipi Çoğul/Nazik (Gidin, Dönün)", en: "Imperative Formal/Plural", ar: "صيغة الأمر المهذب/الجمع", fa: "وجه امری جمع/مودبانه", ru: "Повелительное наклонение Мн.ч./Вежливое" },
        explanation: { tr: "Tanımadığınız kişilere yön tarif ederken kullanılır.", en: "Used when giving directions to people you don't know well.", ar: "تستخدم عند وصف الاتجاهات لأشخاص لا تعرفهم جيداً.", fa: "هنگام راهنمایی مسیر به افراد ناشناس استفاده می‌شود.", ru: "Используется при объяснении дороги незнакомым людям." },
        examples: [
          { tr: "Sağa dönün.", translation: { tr: "Sağa dönün.", en: "Turn right. (formal)", ar: "استدر يميناً.", fa: "به راست بپیچید.", ru: "Поверните направо." } }
        ]
      },
      {
        title: { tr: "Yer Yön Edatları", en: "Prepositions of Place/Direction", ar: "حروف جر المكان والاتجاه", fa: "حروف اضافه مکان/جهت", ru: "Предлоги места/направления" },
        explanation: { tr: "Bir şeyin diğerine göre konumunu belirtir.", en: "Indicates the position of something relative to another.", ar: "تشير إلى موقع شيء بالنسبة لشيء آخر.", fa: "موقعیت چیزی را نسبت به چیز دیگری مشخص می‌کند.", ru: "Указывает на положение чего-либо относительно другого." },
        examples: [
          { tr: "Bankanın yanında.", translation: { tr: "Bankanın yanında.", en: "Next to the bank.", ar: "بجانب البنك.", fa: "کنار بانک.", ru: "Рядом с банком." } },
          { tr: "Postanenin karşısında.", translation: { tr: "Postanenin karşısında.", en: "Opposite the post office.", ar: "مقابل مكتب البريد.", fa: "روبروی اداره پست.", ru: "Напротив почты." } }
        ]
      }
    ]
  }
};
