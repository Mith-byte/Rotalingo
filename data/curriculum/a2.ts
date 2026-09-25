import type { Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGExercise, TText, UnitGuidebook, RPGNode } from '../types';

const t = (tr: string, en: string, ar: string, fa: string, ru: string): TText => ({ tr, en, ar, fa, ru });

const makeMC = (id: string, promptTxt: TText, correctTxt: TText, w1Txt: TText, w2Txt: TText): MCExercise => ({
  id, type: 'multiple_choice',
  prompt: t("Bu kelimenin anlamı nedir?", "What does this word mean?", "ماذا تعني هذه الكلمة؟", "این کلمه به چه معناست؟", "Что означает это слово?"),
  options: [
    { id: id+'_c', text: correctTxt, isCorrect: true },
    { id: id+'_w1', text: w1Txt, isCorrect: false },
    { id: id+'_w2', text: w2Txt, isCorrect: false }
  ].sort(() => Math.random() - 0.5)
});

const makeDD = (id: string, words: TText[]): DragDropExercise => ({
  id, type: 'drag_drop',
  prompt: t("Eşleştirin", "Match the words", "طابق الكلمات", "کلمات را مطابقت دهید", "Сопоставьте слова"),
  pairs: words.map((w, i) => ({ id: `${id}_p${i}`, source: w.tr, target: w }))
});

const makeWO = (id: string, sentenceTr: string, translation: TText): WordOrderExercise => {
  const words = sentenceTr.split(' ');
  return {
    id, type: 'word_order',
    prompt: t("Cümleyi kurun", "Form the sentence", "رتب الجملة", "جمله را بسازید", "Составьте предложение"),
    correctOrder: words,
    scrambledWords: [...words].sort(() => Math.random() - 0.5),
    translation
  };
};

const makeFIB = (id: string, template: string, answer: string, options: string[], translation: TText): FIBExercise => ({
  id, type: 'fill_in_the_blank',
  prompt: t("Boşluğu doldurun", "Fill in the blank", "املاء الفراغ", "جای خالی را پر کنید", "Заполните пропуск"),
  sentenceTemplate: template,
  correctAnswers: [answer],
  wordBank: [answer, ...options].sort(() => Math.random() - 0.5),
  translation
});

const makeRPG = (id: string, scenario: TText, nodes: RPGNode[]): RPGExercise => ({
  id, type: 'rpg_dialogue',
  scenario,
  nodes,
  startNodeId: nodes[0].nodeId
});

const u1Vocab1 = [
  t("randevu", "appointment", "موعد", "قرار", "встреча"),
  t("belge", "document", "وثيقة", "سند", "документ"),
  t("kimlik", "ID", "هوية", "هویت", "удостоверение"),
  t("pasaport", "passport", "جواز سفر", "گذرنامه", "паспорт"),
  t("başvuru", "application", "تطبيق", "درخواست", "заявление")
];
const u1Vocab2 = [
  t("form", "form", "استمارة", "فرم", "форма"),
  t("imza", "signature", "توقيع", "امضا", "подпись"),
  t("mühür", "seal", "ختم", "مهر", "печать"),
  t("kira kontratı", "lease contract", "عقد إيجار", "قرارداد اجاره", "договор аренды"),
  t("ikamet izni", "residence permit", "تصريح إقامة", "اجازه اقامت", "вид на жительство")
];
const u1Vocab3 = [
  t("vergi numarası", "tax number", "رقم ضريبي", "شماره مالیاتی", "налоговый номер"),
  t("noter", "notary", "كاتب عدل", "دفتر اسناد رسمی", "нотариус"),
  t("tercüman", "translator", "مترجم", "مترجم", "переводчик"),
  t("belediye", "municipality", "بلدية", "شهرداری", "муниципалитет"),
  t("muhtarlık", "mukhtar's office", "مكتب المختار", "دفتر مختار", "кабинет старосты")
];
const u1RPG1: RPGNode[] = [
  {
    nodeId: "start", npcName: "Memur", npcEmoji: "👨‍💼",
    npcText: t("Hoş geldiniz. İkamet izni için mi geldiniz?", "Welcome. Are you here for the residence permit?", "أهلا بك. هل أنت هنا للحصول على تصريح الإقامة؟", "خوش آمدید. برای اجازه اقامت آمدید؟", "Добро пожаловать. Вы здесь за видом на жительство?"),
    options: [
      { isCorrect: true, text: t("Evet, randevu almak istiyorum.", "Yes, I want to get an appointment.", "نعم، أريد تحديد موعد.", "بله، می‌خواهم وقت بگیرم.", "Да, я хочу записаться на прием."), nextNodeId: "docs" },
      { isCorrect: false, text: t("Hayır, sadece belge.", "No, just document.", "لا، فقط وثيقة.", "نه، فقط سند.", "Нет, только документ.") }
    ]
  },
  {
    nodeId: "docs", npcName: "Memur", npcEmoji: "👨‍💼",
    npcText: t("Randevunuzu oluşturdum. Belgeleriniz hazır mı?", "I created your appointment. Are your documents ready?", "لقد حددت موعدك. هل مستنداتك جاهزة؟", "من وقت شما را ایجاد کردم. آیا مدارک شما آماده است؟", "Я создал вашу встречу. Ваши документы готовы?"),
    options: [
      { isCorrect: true, text: t("Hangi belgeler gerekli?", "Which documents are required?", "ما هي المستندات المطلوبة؟", "چه مدارکی لازم است؟", "Какие документы требуются?"), nextNodeId: "end" },
      { isCorrect: false, text: t("Sadece pasaport.", "Only passport.", "جواز سفر فقط.", "فقط گذرنامه.", "Только паспорт.") }
    ]
  },
  {
    nodeId: "end", npcName: "Memur", npcEmoji: "👨‍💼", isFinal: true,
    npcText: t("Pasaport, kira kontratı ve başvuru formu gerekli.", "Passport, lease contract, and application form are required.", "مطلوب جواز سفر وعقد إيجار واستمارة طلب.", "گذرنامه، قرارداد اجاره و فرم درخواست لازم است.", "Требуются паспорт, договор аренды и анкета."),
    options: []
  }
];
const u1RPG2: RPGNode[] = [
  {
    nodeId: "start", npcName: "Noter", npcEmoji: "⚖️",
    npcText: t("Buyrun, hangi belgeyi onaylatacaksınız?", "Here you go, which document will you have approved?", "تفضل، أي مستند ستوافق عليه؟", "بفرمایید، کدام سند را تأیید می‌کنید؟", "Пожалуйста, какой документ вы хотите утвердить?"),
    options: [
      { isCorrect: true, text: t("Bu kira kontratına mühür ve imza gerekiyor.", "This lease contract needs a seal and signature.", "يحتاج عقد الإيجار هذا إلى ختم وتوقيع.", "این قرارداد اجاره نیاز به مهر و امضا دارد.", "Для этого договора аренды требуются печать и подпись."), nextNodeId: "wait" },
      { isCorrect: false, text: t("Ben sadece imza istiyorum.", "I just want a signature.", "أريد فقط توقيع.", "من فقط یک امضا می خواهم.", "Я просто хочу подпись.") }
    ]
  },
  {
    nodeId: "wait", npcName: "Noter", npcEmoji: "⚖️", isFinal: true,
    npcText: t("Lütfen formları doldurun ve bekleyin.", "Please fill out the forms and wait.", "يرجى ملء الاستمارات والانتظار.", "لطفا فرم ها را پر کنید و منتظر بمانید.", "Пожалуйста, заполните формы и подождите."),
    options: []
  }
];

const u2Vocab1 = [
  t("hesap", "account", "حساب", "حساب", "счет"),
  t("kart", "card", "بطاقة", "کارت", "карта"),
  t("para", "money", "مال", "پول", "деньги"),
  t("faiz", "interest", "فائدة", "بهره", "процент"),
  t("döviz", "foreign exchange", "عملة أجنبية", "ارز", "валюта")
];
const u2Vocab2 = [
  t("transfer", "transfer", "تحويل", "انتقال", "перевод"),
  t("ödeme", "payment", "دفع", "پرداخت", "платеж"),
  t("fatura", "bill", "فاتورة", "قبض", "счет (фактура)"),
  t("bakiye", "balance", "رصيد", "موجودی", "баланс"),
  t("limit", "limit", "حد", "حد", "лимит")
];
const u2Vocab3 = [
  t("şifre", "password", "كلمة المرور", "رمز عبور", "пароль"),
  t("banka şubesi", "bank branch", "فرع البنك", "شعبه بانک", "отделение банка"),
  t("ATM", "ATM", "صراف آلي", "خودپرداز", "банкомат"),
  t("kredi", "loan/credit", "قرض/ائتمان", "وام/اعتبار", "кредит"),
  t("taksit", "installment", "قسط", "قسط", "рассрочка")
];
const u2RPG1: RPGNode[] = [
  {
    nodeId: "start", npcName: "Bankacı", npcEmoji: "👔",
    npcText: t("Size nasıl yardımcı olabilirim?", "How can I help you?", "كيف يمكنني مساعدتك؟", "چگونه می توانم به شما کمک کنم؟", "Как я могу вам помочь?"),
    options: [
      { isCorrect: true, text: t("Hesap açmak istiyorum.", "I want to open an account.", "أريد فتح حساب.", "من می خواهم یک حساب باز کنم.", "Я хочу открыть счет."), nextNodeId: "docs" },
      { isCorrect: false, text: t("Kart başvurusu.", "Card application.", "طلب بطاقة.", "درخواست کارت.", "Заявка на карту.") }
    ]
  },
  {
    nodeId: "docs", npcName: "Bankacı", npcEmoji: "👔",
    npcText: t("Tabii, kimlik ve ikametgah belgesi gerekli. Ne kadar sürer?", "Sure, ID and proof of residence are required. How long does it take?", "بالتأكيد، مطلوب الهوية وإثبات الإقامة. كم يستغرق من الوقت؟", "مطمئنا، کارت شناسایی و مدرک اقامت مورد نیاز است. چقدر طول می کشد؟", "Конечно, требуются удостоверение личности и подтверждение проживания. Сколько времени это займет?"),
    options: [
      { isCorrect: true, text: t("İşlem ne kadar sürer?", "How long does the process take?", "كم تستغرق العملية؟", "روند چقدر طول می کشد؟", "Сколько времени займет процесс?"), nextNodeId: "end" },
      { isCorrect: false, text: t("Bakiyem nedir?", "What is my balance?", "ما هو رصيدي؟", "موجودی من چقدر است؟", "Какой у меня баланс?") }
    ]
  },
  {
    nodeId: "end", npcName: "Bankacı", npcEmoji: "👔", isFinal: true,
    npcText: t("Sadece on dakika.", "Only ten minutes.", "عشر دقائق فقط.", "فقط ده دقیقه.", "Всего десять минут."),
    options: []
  }
];
const u2RPG2: RPGNode[] = [
  {
    nodeId: "start", npcName: "Gişe Görevlisi", npcEmoji: "👩‍💼",
    npcText: t("Bakiyenizde bir eksilme mi var?", "Is there a decrease in your balance?", "هل هناك انخفاض في رصيدك؟", "آیا کاهش در موجودی شما وجود دارد؟", "Ваш баланс уменьшился?"),
    options: [
      { isCorrect: true, text: t("Evet, bu ödemeyi ben yapmadım.", "Yes, I didn't make this payment.", "نعم، لم أقم بهذا الدفع.", "بله، من این پرداخت را انجام ندادم.", "Да, я не делал этот платеж."), nextNodeId: "check" },
      { isCorrect: false, text: t("Para transferi yapmak istiyorum.", "I want to make a money transfer.", "أريد إجراء تحويل أموال.", "من می خواهم پول انتقال دهم.", "Я хочу сделать денежный перевод.") }
    ]
  },
  {
    nodeId: "check", npcName: "Gişe Görevlisi", npcEmoji: "👩‍💼", isFinal: true,
    npcText: t("Hemen kontrol ediyorum, kartınızı iptal edelim.", "I am checking it right away, let's cancel your card.", "أنا أتحقق من ذلك على الفور، دعنا نلغي بطاقتك.", "من فوراً آن را بررسی می کنم، بیایید کارت شما را لغو کنیم.", "Я сейчас проверю, давайте аннулируем вашу карту."),
    options: []
  }
];

const u3Vocab1 = [
  t("poliklinik", "polyclinic", "عيادة شاملة", "پلی کلینیک", "поликлиника"),
  t("acil", "emergency", "طوارئ", "اورژانس", "скорая помощь"),
  t("reçete", "prescription", "وصفة طبية", "نسخه", "рецепт"),
  t("tahlil", "test/analysis", "تحليل", "آزمایش", "анализ"),
  t("röntgen", "x-ray", "أشعة سينية", "اشعه ایکس", "рентген")
];
const u3Vocab2 = [
  t("ameliyat", "surgery", "جراحة", "عمل جراحی", "операция"),
  t("sigorta", "insurance", "تأمين", "بیمه", "страховка"),
  t("SGK", "social security", "الضمان الاجتماعي", "تامین اجتماعی", "социальное обеспечение"),
  t("muayene", "examination", "فحص", "معاینه", "осмотр"),
  t("doktor", "doctor", "طبيب", "دکتر", "врач")
];
const u3Vocab3 = [
  t("hemşire", "nurse", "ممرضة", "پرستار", "медсестра"),
  t("eczane", "pharmacy", "صيدلية", "داروخانه", "аптека"),
  t("ilaç", "medicine", "دواء", "دارو", "лекарство"),
  t("randevu", "appointment", "موعد", "نوبت", "прием"),
  t("tedavi", "treatment", "علاج", "درمان", "лечение")
];
const u3RPG1: RPGNode[] = [
  {
    nodeId: "start", npcName: "Doktor", npcEmoji: "🩺",
    npcText: t("Neyiniz var? Acil bir durum mu?", "What's wrong? Is it an emergency?", "ما بك؟ هل هي حالة طوارئ؟", "مشکل چیست؟ آیا اورژانس است؟", "Что с вами? Это срочно?"),
    options: [
      { isCorrect: true, text: t("Göğsüm ağrıyor, acil servis nerede?", "My chest hurts, where is the emergency room?", "صدري يؤلمني، أين غرفة الطوارئ؟", "قفسه سینه ام درد می کند، اورژانس کجاست؟", "У меня болит грудь, где отделение скорой помощи?"), nextNodeId: "help" },
      { isCorrect: false, text: t("Sadece reçete.", "Just prescription.", "وصفة طبية فقط.", "فقط نسخه.", "Только рецепт.") }
    ]
  },
  {
    nodeId: "help", npcName: "Doktor", npcEmoji: "🩺", isFinal: true,
    npcText: t("Hemen müdahale edelim.", "Let's intervene immediately.", "دعونا نتدخل على الفور.", "اجازه دهید فوراً مداخله کنیم.", "Давайте немедленно вмешаемся."),
    options: []
  }
];
const u3RPG2: RPGNode[] = [
  {
    nodeId: "start", npcName: "Doktor", npcEmoji: "🩺",
    npcText: t("Tahlil sonuçlarınız iyi. Reçetenizi yazdım.", "Your test results are good. I wrote your prescription.", "نتائج تحاليلك جيدة. لقد كتبت وصفتك الطبية.", "نتایج آزمایش شما خوب است. نسخه شما را نوشتم.", "Ваши результаты анализов хорошие. Я выписал вам рецепт."),
    options: [
      { isCorrect: true, text: t("Bu ilacı nasıl kullanırım?", "How do I use this medicine?", "كيف أستخدم هذا الدواء؟", "چگونه از این دارو استفاده کنم؟", "Как мне принимать это лекарство?"), nextNodeId: "ins" },
      { isCorrect: false, text: t("Tahlil sonuçlarım nerede?", "Where are my test results?", "أين نتائج تحاليلي؟", "نتایج آزمایش من کجاست؟", "Где мои результаты анализов?") }
    ]
  },
  {
    nodeId: "ins", npcName: "Doktor", npcEmoji: "🩺", isFinal: true,
    npcText: t("Günde iki tok karnına için.", "Take it twice a day on a full stomach.", "خذه مرتين في اليوم على معدة ممتلئة.", "آن را دو بار در روز با معده پر مصرف کنید.", "Принимайте два раза в день на полный желудок."),
    options: []
  }
];

const u4Vocab1 = [
  t("posta", "mail", "بريد", "پست", "почта"),
  t("kargo", "cargo/shipping", "شحن", "بار", "доставка"),
  t("paket", "package", "طرد", "بسته", "посылка"),
  t("fatura", "bill", "فاتورة", "قبض", "счет"),
  t("ödeme", "payment", "دفع", "پرداخت", "платеж")
];
const u4Vocab2 = [
  t("abone", "subscriber", "مشترك", "مشترک", "абонент"),
  t("abonelik", "subscription", "اشتراك", "اشتراک", "подписка"),
  t("elektrik", "electricity", "كهرباء", "برق", "электричество"),
  t("su", "water", "ماء", "آب", "вода"),
  t("doğalgaz", "natural gas", "غاز طبيعي", "گاز طبیعی", "природный газ")
];
const u4Vocab3 = [
  t("internet", "internet", "إنترنت", "اینترنت", "интернет"),
  t("telefon", "phone", "هاتف", "تلفن", "телефон"),
  t("kurye", "courier", "ساعي", "پیک", "курьер"),
  t("takip numarası", "tracking number", "رقم التتبع", "شماره پیگیری", "номер отслеживания"),
  t("teslimat", "delivery", "توصيل", "تحویل", "доставка")
];
const u4RPG1: RPGNode[] = [
  {
    nodeId: "start", npcName: "Postacı", npcEmoji: "🏣",
    npcText: t("Paketinizi nereye göndereceksiniz?", "Where will you send your package?", "إلى أين سترسل طردك؟", "بسته خود را به کجا می فرستید؟", "Куда вы отправите свою посылку?"),
    options: [
      { isCorrect: true, text: t("Bu paketi İzmir'e göndermek istiyorum.", "I want to send this package to Izmir.", "أريد إرسال هذا الطرد إلى إزمير.", "من می خواهم این بسته را به ازمیر بفرستم.", "Я хочу отправить эту посылку в Измир."), nextNodeId: "track" },
      { isCorrect: false, text: t("Adresim değişti.", "My address changed.", "تغير عنواني.", "آدرس من تغییر کرد.", "Мой адрес изменился.") }
    ]
  },
  {
    nodeId: "track", npcName: "Postacı", npcEmoji: "🏣",
    npcText: t("İşleminiz tamam. Başka bir isteğiniz var mı?", "Your transaction is complete. Do you have any other requests?", "اكتملت معاملتك. هل لديك أي طلبات أخرى؟", "معامله شما انجام شد. آیا درخواست دیگری دارید؟", "Ваша транзакция завершена. У вас есть другие просьбы?"),
    options: [
      { isCorrect: true, text: t("Takip numarasını alabilir miyim?", "Can I get the tracking number?", "هل يمكنني الحصول على رقم التتبع؟", "آیا می توانم شماره پیگیری را بگیرم؟", "Могу я получить номер отслеживания?"), nextNodeId: "end" },
      { isCorrect: false, text: t("Paket nerede?", "Where is the package?", "أين الطرد؟", "بسته کجاست؟", "Где посылка?") }
    ]
  },
  {
    nodeId: "end", npcName: "Postacı", npcEmoji: "🏣", isFinal: true,
    npcText: t("Tabii, işte makbuzunuz. Ne zaman teslim edileceği yazıyor.", "Sure, here is your receipt. It says when it will be delivered.", "بالتأكيد، ها هو الإيصال الخاص بك. يقول متى سيتم تسليمه.", "مطمئنا، اینجا رسید شماست. می گوید کی تحویل داده می شود.", "Конечно, вот ваша квитанция. Там написано, когда будет доставлено."),
    options: []
  }
];
const u4RPG2: RPGNode[] = [
  {
    nodeId: "start", npcName: "Görevli", npcEmoji: "👨‍💼",
    npcText: t("PTT'ye hoş geldiniz, fatura ödemesi mi?", "Welcome to PTT, bill payment?", "مرحبا بك في PTT، دفع الفواتير؟", "به PTT خوش آمدید، پرداخت قبض؟", "Добро пожаловать в PTT, оплата счетов?"),
    options: [
      { isCorrect: true, text: t("Evet, faturamı ödemek istiyorum.", "Yes, I want to pay my bill.", "نعم، أريد دفع فاتورتي.", "بله، من می خواهم قبض خود را پرداخت کنم.", "Да, я хочу оплатить счет."), nextNodeId: "end" },
      { isCorrect: false, text: t("Kargo takip.", "Cargo tracking.", "تتبع الشحن.", "پیگیری بار.", "Отслеживание груза.") }
    ]
  },
  {
    nodeId: "end", npcName: "Görevli", npcEmoji: "👨‍💼", isFinal: true,
    npcText: t("Nakit mi kredi kartı mı?", "Cash or credit card?", "نقدا أم بطاقة ائتمان؟", "نقد یا کارت اعتباری؟", "Наличными или кредитной картой?"),
    options: []
  }
];

const u5Vocab1 = [
  t("kiracı", "tenant", "مستأجر", "مستاجر", "арендатор"),
  t("ev sahibi", "landlord", "صاحب المنزل", "صاحبخانه", "домовладелец"),
  t("kira", "rent", "إيجار", "اجاره", "аренда"),
  t("depozito", "deposit", "عربون", "ودیعه", "залог"),
  t("sözleşme", "contract", "عقد", "قرارداد", "договор")
];
const u5Vocab2 = [
  t("aidat", "dues/fee", "رسوم", "شارژ", "взнос"),
  t("daire", "apartment", "شقة", "آپارتمان", "квартира"),
  t("kat", "floor", "طابق", "طبقه", "этаж"),
  t("asansör", "elevator", "مصعد", "آسانسور", "лифт"),
  t("bodrum", "basement", "قبو", "زیرزمین", "подвал")
];
const u5Vocab3 = [
  t("çatı katı", "attic", "علية", "اتاق زیر شیروانی", "чердак"),
  t("komşu", "neighbor", "جار", "همسایه", "сосед"),
  t("kapıcı", "doorman/janitor", "بواب", "سرایدار", "швейцар"),
  t("taşınmak", "to move", "للانتقال", "اسباب کشی", "переезжать"),
  t("tadilat", "renovation", "تجديد", "نوسازی", "ремонт")
];
const u5RPG1: RPGNode[] = [
  {
    nodeId: "start", npcName: "Ev Sahibi", npcEmoji: "👴",
    npcText: t("Daireyi beğendiniz mi?", "Did you like the apartment?", "هل أعجبتك الشقة؟", "آیا آپارتمان را دوست داشتید؟", "Вам понравилась квартира?"),
    options: [
      { isCorrect: true, text: t("Evet, daire kiralamak istiyorum. Kira ne kadar?", "Yes, I want to rent the apartment. How much is the rent?", "نعم، أريد استئجار الشقة. كم الإيجار؟", "بله، من می خواهم آپارتمان را اجاره کنم. اجاره چقدر است؟", "Да, я хочу снять квартиру. Сколько стоит аренда?"), nextNodeId: "dep" },
      { isCorrect: false, text: t("Hayır, komşular kötü.", "No, neighbors are bad.", "لا، الجيران سيئون.", "نه، همسایه ها بد هستند.", "Нет, соседи плохие.") }
    ]
  },
  {
    nodeId: "dep", npcName: "Ev Sahibi", npcEmoji: "👴",
    npcText: t("Kira aylık 15.000 TL.", "The rent is 15,000 TL per month.", "الإيجار 15000 ليرة تركية شهريا.", "اجاره 15000 لیر در ماه است.", "Аренда составляет 15 000 лир в месяц."),
    options: [
      { isCorrect: true, text: t("Depozito kaç ay? Sözleşmeyi imzalayacağız.", "How many months is the deposit? We will sign the contract.", "كم شهرا العربون؟ سنوقع العقد.", "ودیعه چند ماه است؟ ما قرارداد را امضا خواهیم کرد.", "За сколько месяцев залог? Мы подпишем договор."), nextNodeId: "end" },
      { isCorrect: false, text: t("Taşınma tarihimiz ne olsun?", "What should our move date be?", "ماذا يجب أن يكون تاريخ انتقالنا؟", "تاریخ اسباب کشی ما چه باشد؟", "Какова должна быть дата нашего переезда?") }
    ]
  },
  {
    nodeId: "end", npcName: "Ev Sahibi", npcEmoji: "👴", isFinal: true,
    npcText: t("İki ay depozito. Yarın sözleşmeyi imzalarız.", "Two months deposit. We will sign the contract tomorrow.", "عربون شهرين. سنوقع العقد غدا.", "دو ماه ودیعه. فردا قرارداد را امضا می کنیم.", "Залог за два месяца. Завтра мы подпишем договор."),
    options: []
  }
];
const u5RPG2: RPGNode[] = [
  {
    nodeId: "start", npcName: "Komşu", npcEmoji: "👨",
    npcText: t("Merhaba, bir sorun mu var?", "Hello, is there a problem?", "مرحبا، هل هناك مشكلة؟", "سلام، مشکلی هست؟", "Здравствуйте, есть проблема?"),
    options: [
      { isCorrect: true, text: t("Biraz gürültü oluyor, sesi kısabilir misiniz?", "There is some noise, can you turn down the volume?", "هناك بعض الضوضاء، هل يمكنك خفض مستوى الصوت؟", "کمی سر و صدا است، می توانید صدا را کم کنید؟", "Немного шумно, не могли бы вы убавить звук?"), nextNodeId: "end" },
      { isCorrect: false, text: t("Taşınmak istiyorum.", "I want to move.", "أريد الانتقال.", "من می خواهم اسباب کشی کنم.", "Я хочу переехать.") }
    ]
  },
  {
    nodeId: "end", npcName: "Komşu", npcEmoji: "👨", isFinal: true,
    npcText: t("Kusura bakmayın, hemen kısıyorum.", "Sorry, I'll turn it down right away.", "آسف، سأخفضه على الفور.", "ببخشید، فوراً کم می کنم.", "Извините, я сейчас убавлю."),
    options: []
  }
];

// Reusable unit generator
const generateUnit = (
  id: string, slug: string, title: TText, emoji: string, color: string,
  v1: TText[], v2: TText[], v3: TText[],
  rpg1: RPGNode[], rpg2: RPGNode[],
  phrases: TText[], guidebook: UnitGuidebook
): Unit => {
  const allVocab = [...v1, ...v2, ...v3];

  const getW = (list: TText[], exclude?: TText): TText => {
    let r = list[Math.floor(Math.random() * list.length)];
    while(r === exclude) r = list[Math.floor(Math.random() * list.length)];
    return r;
  };

  const getXPCoins = (lessonType: string, isBoss: boolean = false) => {
    if(isBoss) return { xpReward: 60, coinReward: 30 };
    if(lessonType === 'rpg') return { xpReward: 30, coinReward: 15 };
    return { xpReward: 20, coinReward: 10 };
  };

  return {
    id, emoji, color, guidebook,
    title,
    lessons: [
      // 1. Vocabulary MC (5)
      { id: `a2_${slug}_1_vocabulary`, lessonType: 'vocabulary', ...getXPCoins('voc'), exercises: v1.map((w, i) => makeMC(`a2_${slug}_1_mc_${i}`, w, w, getW(allVocab, w), getW(allVocab, w))) },
      // 2. DragDrop matching (5)
      { id: `a2_${slug}_2_practice`, lessonType: 'practice', ...getXPCoins('prac'), exercises: [makeDD(`a2_${slug}_2_dd_1`, v1)] },
      // 3. Vocabulary MC 2 (5)
      { id: `a2_${slug}_3_vocabulary`, lessonType: 'vocabulary', ...getXPCoins('voc'), exercises: v2.map((w, i) => makeMC(`a2_${slug}_3_mc_${i}`, w, w, getW(allVocab, w), getW(allVocab, w))) },
      // 4. RPG 1
      { id: `a2_${slug}_4_rpg`, lessonType: 'rpg', ...getXPCoins('rpg'), exercises: [makeRPG(`a2_${slug}_4_rpg_1`, t("Diyalog", "Dialogue", "حوار", "گفتگو", "Диалог"), rpg1)] },
      // 5. Sentence Building (3 WO + 2 FIB)
      { id: `a2_${slug}_5_sentence_building`, lessonType: 'sentence_building', ...getXPCoins('sb'), exercises: [
          makeWO(`a2_${slug}_5_wo_1`, "Ben " + v1[0].tr + " almak istiyorum", phrases[0] || t("İstiyorum", "I want", "أريد", "می خواهم", "Я хочу")),
          makeWO(`a2_${slug}_5_wo_2`, v2[0].tr + " nerede", phrases[1] || t("Nerede", "Where", "أين", "کجاست", "Где")),
          makeWO(`a2_${slug}_5_wo_3`, "Bu " + v3[0].tr + " benim", phrases[2] || t("Benim", "Mine", "لي", "مال من", "Мое")),
          makeFIB(`a2_${slug}_5_fib_1`, "Bu ____ benim.", v1[1].tr, [v2[1].tr, v3[1].tr], t("Bu benim.", "This is mine.", "هذا لي.", "این مال من است.", "Это мое.")),
          makeFIB(`a2_${slug}_5_fib_2`, "Ben ____ arıyorum.", v2[2].tr, [v1[2].tr, v3[2].tr], t("Arıyorum.", "I am looking.", "أنا أبحث.", "من به دنبال هستم.", "Я ищу."))
        ]
      },
      // 6. Vocabulary MC 3 (5)
      { id: `a2_${slug}_6_vocabulary`, lessonType: 'vocabulary', ...getXPCoins('voc'), exercises: v3.map((w, i) => makeMC(`a2_${slug}_6_mc_${i}`, w, w, getW(allVocab, w), getW(allVocab, w))) },
      // 7. DragDrop 2 (5)
      { id: `a2_${slug}_7_practice`, lessonType: 'practice', ...getXPCoins('prac'), exercises: [makeDD(`a2_${slug}_7_dd_1`, v2)] },
      // 8. RPG 2
      { id: `a2_${slug}_8_rpg`, lessonType: 'rpg', ...getXPCoins('rpg'), exercises: [makeRPG(`a2_${slug}_8_rpg_1`, t("Diyalog", "Dialogue", "حوار", "گفتگو", "Диалог"), rpg2)] },
      // 9. Boss Fight (4 MC + 2 WO + 2 FIB)
      { id: `a2_${slug}_9_boss_fight`, lessonType: 'boss_fight', ...getXPCoins('boss', true), exercises: [
          makeMC(`a2_${slug}_9_mc_1`, v1[0], v1[0], v2[0], v3[0]),
          makeMC(`a2_${slug}_9_mc_2`, v2[1], v2[1], v1[1], v3[1]),
          makeMC(`a2_${slug}_9_mc_3`, v3[2], v3[2], v1[2], v2[2]),
          makeMC(`a2_${slug}_9_mc_4`, v1[3], v1[3], v2[3], v3[3]),
          makeWO(`a2_${slug}_9_wo_1`, "O " + v1[4].tr + " burada", phrases[3] || t("Burada", "Here", "هنا", "اینجا", "Здесь")),
          makeWO(`a2_${slug}_9_wo_2`, "Bana " + v2[4].tr + " lazım", phrases[4] || t("Lazım", "Need", "بحاجة", "نیاز", "Нужно")),
          makeFIB(`a2_${slug}_9_fib_1`, "Bizim ____ var.", v3[3].tr, [v1[3].tr, v2[3].tr], t("Bizim var.", "We have.", "لدينا.", "ما داریم.", "У нас есть.")),
          makeFIB(`a2_${slug}_9_fib_2`, "Siz ____ misiniz?", v3[4].tr, [v1[4].tr, v2[4].tr], t("Siz misiniz?", "Are you?", "هل أنت؟", "آیا شما هستید؟", "Вы?"))
        ]
      }
    ]
  };
};

export const a2Level: Level = {
  id: "level_a2",
  code: "A2",
  title: t("A2 Seviyesi", "A2 Level", "مستوى A2", "سطح A2", "Уровень A2"),
  description: t("Günlük yaşam ve kurumlar", "Daily life and institutions", "الحياة اليومية والمؤسسات", "زندگی روزمره و موسسات", "Повседневная жизнь и учреждения"),
  units: [
    generateUnit('a2_devlet', 'devlet', t("Devlet Dairesi", "Government Office", "دائرة حكومية", "اداره دولتی", "Государственное учреждение"), '🏛️', 'from-blue-500 to-indigo-600', u1Vocab1, u1Vocab2, u1Vocab3, u1RPG1, u1RPG2, [
      t("Randevu almak istiyorum.", "I want to get an appointment.", "أريد تحديد موعد.", "می خواهم وقت بگیرم.", "Я хочу записаться на прием."),
      t("Hangi belgeler gerekli?", "Which documents are required?", "ما هي المستندات المطلوبة؟", "چه مدارکی لازم است؟", "Какие документы требуются?"),
      t("Nereye başvuruyorum?", "Where do I apply?", "أين أقدم طلبي؟", "کجا درخواست بدهم؟", "Куда мне подать заявление?"),
      t("Formları doldurur musunuz?", "Can you fill out the forms?", "هل يمكنك ملء الاستمارات؟", "می توانید فرم ها را پر کنید؟", "Не могли бы вы заполнить формы?"),
      t("İkametim için ne gerekiyor?", "What is needed for my residence?", "ما المطلوب لإقامتي؟", "برای اقامت من چه چیزی لازم است؟", "Что нужно для моего проживания?")
    ], {
      title: t("Devlet Dairesi", "Government Office", "دائرة حكومية", "اداره دولتی", "Государственное учреждение"),
      description: t("Resmi işlemler", "Official procedures", "الإجراءات الرسمية", "رویه های رسمی", "Официальные процедуры"),
      vocabulary: [...u1Vocab1, ...u1Vocab2].map(v => ({word: v.tr, translation: v})),
      keyPhrases: [{phrase: "Randevu almak istiyorum", translation: t("Randevu almak istiyorum.", "I want to get an appointment.", "أريد تحديد موعد.", "می خواهم وقت بگیرم.", "Я хочу записаться на прием.")}],
      grammarNotes: [{
        title: t("Gereklilik kipi", "Necessity suffix", "لاحقة الضرورة", "پسوند ضرورت", "Суффикс необходимости"),
        explanation: t("-meli/-malı", "-meli/-malı", "-meli/-malı", "-meli/-malı", "-meli/-malı"),
        examples: [{tr: "Gitmeliyim", translation: t("I must go", "I must go", "يجب أن أذهب", "باید بروم", "Я должен идти")}]
      }]
    }),
    generateUnit('a2_banka', 'banka', t("Banka & Para", "Bank & Money", "البنك والمال", "بانک و پول", "Банк и деньги"), '🏦', 'from-emerald-500 to-teal-600', u2Vocab1, u2Vocab2, u2Vocab3, u2RPG1, u2RPG2, [
      t("Hesap açmak istiyorum.", "I want to open an account.", "أريد فتح حساب.", "من می خواهم یک حساب باز کنم.", "Я хочу открыть счет."),
      t("Kart başvurusu yapabilir miyim?", "Can I apply for a card?", "هل يمكنني التقدم بطلب للحصول على بطاقة؟", "آیا می توانم برای کارت درخواست بدهم؟", "Могу ли я подать заявку на карту?"),
      t("Bakiyem nedir?", "What is my balance?", "ما هو رصيدي؟", "موجودی من چقدر است؟", "Какой у меня баланс?"),
      t("Para transferi yapmak istiyorum.", "I want to make a money transfer.", "أريد إجراء تحويل أموال.", "من می خواهم پول انتقال دهم.", "Я хочу сделать денежный перевод."),
      t("Faturamı ödemek istiyorum.", "I want to pay my bill.", "أريد دفع فاتورتي.", "من می خواهم قبض خود را پرداخت کنم.", "Я хочу оплатить счет.")
    ], {
      title: t("Banka", "Bank", "البنك", "بانک", "Банк"),
      description: t("Para işlemleri", "Money transactions", "المعاملات المالية", "تراکنش های پولی", "Денежные операции"),
      vocabulary: [...u2Vocab1, ...u2Vocab2].map(v => ({word: v.tr, translation: v})),
      keyPhrases: [{phrase: "Hesap açmak istiyorum", translation: t("Hesap açmak istiyorum.", "I want to open an account.", "أريد فتح حساب.", "من می خواهم یک حساب باز کنم.", "Я хочу открыть счет.")}],
      grammarNotes: [{
        title: t("İstemek", "To want", "يريد", "خواستن", "Хотеть"),
        explanation: t("Verb + mak/mek istiyorum", "Verb + mak/mek istiyorum", "Verb + mak/mek istiyorum", "Verb + mak/mek istiyorum", "Verb + mak/mek istiyorum"),
        examples: [{tr: "Ödemek istiyorum", translation: t("I want to pay", "I want to pay", "أريد أن أدفع", "می خواهم پرداخت کنم", "Я хочу заплатить")}]
      }]
    }),
    generateUnit('a2_hastane', 'hastane', t("Hastane", "Hospital", "مستشفى", "بیمارستان", "Больница"), '🏥', 'from-rose-400 to-red-600', u3Vocab1, u3Vocab2, u3Vocab3, u3RPG1, u3RPG2, [
      t("Doktor görmek istiyorum.", "I want to see a doctor.", "أريد رؤية طبيب.", "می خواهم دکتر را ببینم.", "Я хочу увидеть врача."),
      t("Acil servis nerede?", "Where is the emergency room?", "أين غرفة الطوارئ؟", "اورژانس کجاست؟", "Где отделение скорой помощи?"),
      t("Sigortalıyım.", "I am insured.", "أنا مؤمن عليه.", "من بیمه هستم.", "Я застрахован."),
      t("Reçetemi almam lazım.", "I need to get my prescription.", "أحتاج للحصول على وصفتي الطبية.", "باید نسخه ام را بگیرم.", "Мне нужно получить рецепт."),
      t("Bu ilacı nasıl kullanırım?", "How do I use this medicine?", "كيف أستخدم هذا الدواء؟", "چگونه از این دارو استفاده کنم؟", "Как мне принимать это лекарство?")
    ], {
      title: t("Hastane", "Hospital", "مستشفى", "بیمارستان", "Больница"),
      description: t("Sağlık", "Health", "الصحة", "سلامتی", "Здоровье"),
      vocabulary: [...u3Vocab1, ...u3Vocab2].map(v => ({word: v.tr, translation: v})),
      keyPhrases: [{phrase: "Acil servis nerede?", translation: t("Acil servis nerede?", "Where is the emergency room?", "أين غرفة الطوارئ؟", "اورژانس کجاست؟", "Где отделение скорой помощи?")}],
      grammarNotes: [{
        title: t("Lazım", "Need", "يحتاج", "نیاز", "Нужно"),
        explanation: t("Verb + mam/mem lazım", "Verb + mam/mem lazım", "Verb + mam/mem lazım", "Verb + mam/mem lazım", "Verb + mam/mem lazım"),
        examples: [{tr: "Almam lazım", translation: t("I need to get", "I need to get", "أحتاج للحصول على", "باید بگیرم", "Мне нужно получить")}]
      }]
    }),
    generateUnit('a2_ptt', 'ptt', t("PTT & Hizmetler", "Post Office & Services", "مكتب البريد والخدمات", "اداره پست و خدمات", "Почта и услуги"), '📮', 'from-yellow-400 to-amber-500', u4Vocab1, u4Vocab2, u4Vocab3, u4RPG1, u4RPG2, [
      t("Bu paketi göndermek istiyorum.", "I want to send this package.", "أريد إرسال هذا الطرد.", "من می خواهم این بسته را بفرستم.", "Я хочу отправить эту посылку."),
      t("Takip numarasını alabilir miyim?", "Can I get the tracking number?", "هل يمكنني الحصول على رقم التتبع؟", "آیا می توانم شماره پیگیری را بگیرم؟", "Могу я получить номер отслеживания?"),
      t("Faturamı ödemek istiyorum.", "I want to pay my bill.", "أريد دفع فاتورتي.", "من می خواهم قبض خود را پرداخت کنم.", "Я хочу оплатить счет."),
      t("Ne zaman teslim edilecek?", "When will it be delivered?", "متى سيتم تسليمها؟", "کی تحویل داده می شود؟", "Когда это будет доставлено?"),
      t("Adresim değişti.", "My address changed.", "تغير عنواني.", "آدرس من تغییر کرد.", "Мой адрес изменился.")
    ], {
      title: t("PTT", "Post Office", "مكتب البريد", "اداره پست", "Почта"),
      description: t("Kargo ve Faturalar", "Cargo and Bills", "الشحن والفواتير", "بار و قبض ها", "Грузы и счета"),
      vocabulary: [...u4Vocab1, ...u4Vocab2].map(v => ({word: v.tr, translation: v})),
      keyPhrases: [{phrase: "Bu paketi göndermek istiyorum", translation: t("Bu paketi göndermek istiyorum.", "I want to send this package.", "أريد إرسال هذا الطرد.", "من می خواهم این بسته را بفرستم.", "Я хочу отправить эту посылку.")}],
      grammarNotes: [{
        title: t("Gelecek Zaman", "Future Tense", "زمن المستقبل", "زمان آینده", "Будущее время"),
        explanation: t("-ecek/-acak", "-ecek/-acak", "-ecek/-acak", "-ecek/-acak", "-ecek/-acak"),
        examples: [{tr: "Teslim edilecek", translation: t("It will be delivered", "It will be delivered", "سيتم تسليمها", "تحویل داده خواهد شد", "Будет доставлено")}]
      }]
    }),
    generateUnit('a2_konut', 'konut', t("Konut & Komşular", "Housing & Neighbors", "الإسكان والجيران", "مسکن و همسایگان", "Жилье и соседи"), '🏠', 'from-orange-400 to-amber-600', u5Vocab1, u5Vocab2, u5Vocab3, u5RPG1, u5RPG2, [
      t("Daire kiralamak istiyorum.", "I want to rent an apartment.", "أريد استئجار شقة.", "من می خواهم یک آپارتمان اجاره کنم.", "Я хочу снять квартиру."),
      t("Kira ne kadar?", "How much is the rent?", "كم الإيجار؟", "اجاره چقدر است؟", "Сколько стоит аренда?"),
      t("Depozito kaç ay?", "How many months is the deposit?", "كم شهرا العربون؟", "ودیعه چند ماه است؟", "За сколько месяцев залог?"),
      t("Sözleşmeyi imzalayacağız.", "We will sign the contract.", "سنوقع العقد.", "قرارداد را امضا خواهیم کرد.", "Мы подпишем договор."),
      t("Taşınma tarihimiz ne olsun?", "What should our move date be?", "ماذا يجب أن يكون تاريخ انتقالنا؟", "تاریخ اسباب کشی ما چه باشد؟", "Какова должна быть дата нашего переезда?")
    ], {
      title: t("Konut", "Housing", "الإسكان", "مسکن", "Жилье"),
      description: t("Ev ve Komşular", "Home and Neighbors", "المنزل والجيران", "خانه و همسایگان", "Дом и соседи"),
      vocabulary: [...u5Vocab1, ...u5Vocab2].map(v => ({word: v.tr, translation: v})),
      keyPhrases: [{phrase: "Kira ne kadar?", translation: t("Kira ne kadar?", "How much is the rent?", "كم الإيجار؟", "اجاره چقدر است؟", "Сколько стоит аренда?")}],
      grammarNotes: [{
        title: t("İsim Tamlaması", "Noun Compound", "مركب اسمي", "ترکیب اسمی", "Именное словосочетание"),
        explanation: t("Noun + Noun", "Noun + Noun", "Noun + Noun", "Noun + Noun", "Noun + Noun"),
        examples: [{tr: "Kira kontratı", translation: t("Lease contract", "Lease contract", "عقد إيجار", "قرارداد اجاره", "Договор аренды")}]
      }]
    })
  ]
};
