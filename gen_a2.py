import json

def T(tr, en, ar, fa, ru): return f"{{ tr: {json.dumps(tr)}, en: {json.dumps(en)}, ar: {json.dumps(ar)}, fa: {json.dumps(fa)}, ru: {json.dumps(ru)} }}"

def mc(idx, w, en, ar, fa, ru): return f"{{ id: 'mc_{idx}', type: 'multiple_choice', question: {T(w, en, ar, fa, ru)}, options: [{T(w, en, ar, fa, ru)}, {T('other1', 'other1', 'أخرى1', 'دیگر1', 'другой1')}, {T('other2', 'other2', 'أخرى2', 'دیگر2', 'другой2')}], correctOptionIndex: 0, xp: 20, coins: 10 }}"

def dd(idx, p): 
    pairs = [f"{{ id: 'p{i}', left: {json.dumps(p[i][0])}, right: {T(p[i][1], p[i][2], p[i][3], p[i][4], p[i][5])} }}" for i in range(5)]
    return f"{{ id: 'dd_{idx}', type: 'drag_drop', pairs: [{', '.join(pairs)}], xp: 20, coins: 10 }}"

def wo(idx, s, w, en, ar, fa, ru): return f"{{ id: 'wo_{idx}', type: 'word_order', sentence: {json.dumps(s)}, translation: {T(s, en, ar, fa, ru)}, words: {json.dumps(w)}, xp: 20, coins: 10 }}"
def fib(idx, s, b_idx, w, ops, en, ar, fa, ru): return f"{{ id: 'fib_{idx}', type: 'fill_in_blank', sentence: {json.dumps(s)}, translation: {T(s, en, ar, fa, ru)}, blankIndex: {b_idx}, words: {json.dumps(w)}, options: {json.dumps(ops)}, xp: 20, coins: 10 }}"
def rpg(idx, sc_tr, sc_en, sc_ar, sc_fa, sc_ru):
    return f"""{{ id: 'rpg_{idx}', type: 'rpg', scenario: {T(sc_tr, sc_en, sc_ar, sc_fa, sc_ru)}, nodes: [
      {{ id: 'n1', npcText: 'Merhaba, size nasıl yardımcı olabilirim?', options: [ {{ id: 'o1', text: 'Evet, lütfen.', isCorrect: true, responseTone: 'success', nextNodeId: 'n2' }}] }},
      {{ id: 'n2', npcText: 'Peki, işlemlerinizi başlatıyorum.', options: [ {{ id: 'o1', text: 'Teşekkürler.', isCorrect: true, responseTone: 'success', nextNodeId: 'end' }}] }},
      {{ id: 'end', npcText: 'İyi günler.', options: [] }}
    ], xp: 35, coins: 15 }}"""

# Generate 9 lessons pattern
def gen_unit(u_id, title, desc, emoji, color, vocab1, vocab2, sent1, sent2, rpg1, rpg2):
    ls = []
    
    # 1: vocab (5 MC)
    ex1 = [mc(f"{u_id}_1_{i}", *v) for i, v in enumerate(vocab1)]
    ls.append(f"{{ id: '{u_id}_1', title: 'Vocabulary 1', type: 'vocabulary', exercises: [{', '.join(ex1)}] }}")
    
    # 2: practice (5 DD)
    dd_pairs = [[v[0], v[1], v[1], v[2], v[3], v[4]] for v in vocab1]
    ls.append(f"{{ id: '{u_id}_2', title: 'Practice 1', type: 'practice', exercises: [{dd(f'{u_id}_2_1', dd_pairs)}] }}")
    
    # 3: sentence building (3 WO, 2 FIB)
    ex3 = [
        wo(f"{u_id}_3_1", sent1[0][0], sent1[0][1], sent1[0][2], sent1[0][3], sent1[0][4], sent1[0][5]),
        wo(f"{u_id}_3_2", sent1[1][0], sent1[1][1], sent1[1][2], sent1[1][3], sent1[1][4], sent1[1][5]),
        wo(f"{u_id}_3_3", sent1[2][0], sent1[2][1], sent1[2][2], sent1[2][3], sent1[2][4], sent1[2][5]),
        fib(f"{u_id}_3_4", sent1[3][0], 1, sent1[3][1], sent1[3][2], sent1[3][3], sent1[3][4], sent1[3][5], sent1[3][6]),
        fib(f"{u_id}_3_5", sent1[4][0], 1, sent1[4][1], sent1[4][2], sent1[4][3], sent1[4][4], sent1[4][5], sent1[4][6])
    ]
    ls.append(f"{{ id: '{u_id}_3', title: 'Sentences 1', type: 'sentence_building', exercises: [{', '.join(ex3)}] }}")
    
    # 4: rpg
    ls.append(f"{{ id: '{u_id}_4', title: 'RPG 1', type: 'rpg', exercises: [{rpg(f'{u_id}_4_1', *rpg1)}] }}")
    
    # 5: vocab 2
    ex5 = [mc(f"{u_id}_5_{i}", *v) for i, v in enumerate(vocab2)]
    ls.append(f"{{ id: '{u_id}_5', title: 'Vocabulary 2', type: 'vocabulary', exercises: [{', '.join(ex5)}] }}")
    
    # 6: practice 2
    dd_pairs2 = [[v[0], v[1], v[1], v[2], v[3], v[4]] for v in vocab2]
    ls.append(f"{{ id: '{u_id}_6', title: 'Practice 2', type: 'practice', exercises: [{dd(f'{u_id}_6_1', dd_pairs2)}] }}")
    
    # 7: sentence 2
    ex7 = [
        wo(f"{u_id}_7_1", sent2[0][0], sent2[0][1], sent2[0][2], sent2[0][3], sent2[0][4], sent2[0][5]),
        wo(f"{u_id}_7_2", sent2[1][0], sent2[1][1], sent2[1][2], sent2[1][3], sent2[1][4], sent2[1][5]),
        wo(f"{u_id}_7_3", sent2[2][0], sent2[2][1], sent2[2][2], sent2[2][3], sent2[2][4], sent2[2][5]),
        fib(f"{u_id}_7_4", sent2[3][0], 1, sent2[3][1], sent2[3][2], sent2[3][3], sent2[3][4], sent2[3][5], sent2[3][6]),
        fib(f"{u_id}_7_5", sent2[4][0], 1, sent2[4][1], sent2[4][2], sent2[4][3], sent2[4][4], sent2[4][5], sent2[4][6])
    ]
    ls.append(f"{{ id: '{u_id}_7', title: 'Sentences 2', type: 'sentence_building', exercises: [{', '.join(ex7)}] }}")
    
    # 8: rpg 2
    ls.append(f"{{ id: '{u_id}_8', title: 'RPG 2', type: 'rpg', exercises: [{rpg(f'{u_id}_8_1', *rpg2)}] }}")
    
    # 9: boss (mix)
    ex9 = ex1[:2] + ex5[:2] + [ex3[0], ex7[0], ex3[3], ex7[3]]
    ls.append(f"{{ id: '{u_id}_9', title: 'Boss Fight', type: 'boss_fight', exercises: [{', '.join(ex9)}] }}")
    
    return f"{{ id: '{u_id}', title: {json.dumps(title)}, description: {json.dumps(desc)}, emoji: '{emoji}', color: '{color}', lessons: [{','.join(ls)}] }}"

u_list = []

# u2: Banka
u2 = gen_unit(
    'a2_banka', 'Banka & Para (Bank & Money)', 'Banking tasks.', '🏦', 'from-emerald-500 to-green-700',
    [('hesap açmak', 'open account', 'فتح حساب', 'باز کردن حساب', 'открыть счет'), ('IBAN', 'IBAN', 'ايبان', 'شبا', 'IBAN'), ('havale', 'transfer', 'حوالة', 'حواله', 'перевод'), ('EFT', 'EFT', 'تحويل', 'انتقال', 'EFT'), ('ATM', 'ATM', 'صراف آلي', 'خودپرداز', 'банкомат')],
    [('kredi', 'credit', 'ائتمان', 'اعتبار', 'кредит'), ('taksit', 'installment', 'قسط', 'قسط', 'рассрочка'), ('faiz', 'interest', 'فائدة', 'بهره', 'процент'), ('kur', 'exchange rate', 'سعر الصرف', 'نرخ ارز', 'курс'), ('döviz', 'foreign currency', 'عملة أجنبية', 'ارز', 'валюта')],
    [('Hesap açmak istiyorum.', ['Hesap', 'açmak', 'istiyorum.'], 'I want to open an account.', 'أريد فتح حساب.', 'می‌خواهم حساب باز کنم.', 'Я хочу открыть счет.'),
     ('IBAN numaram nedir?', ['IBAN', 'numaram', 'nedir?'], 'What is my IBAN?', 'ما هو رقم الآيبان الخاص بي؟', 'شماره شبا من چیست؟', 'Какой у меня IBAN?'),
     ('Para transferi yapmak istiyorum.', ['Para', 'transferi', 'yapmak', 'istiyorum.'], 'I want to transfer money.', 'أريد تحويل المال.', 'می‌خواهم پول انتقال دهم.', 'Я хочу перевести деньги.'),
     ('Kartım ATM de [kaldı].', ['Kartım', 'ATM', 'de', 'kaldı.'], ['kaldı.', 'gitti.', 'oldu.'], 'My card is stuck in the ATM.', 'بطاقتي عالقة في الصراف الآلي.', 'کارتم در خودپرداز گیر کرده است.', 'Моя карта застряла в банкомате.'),
     ('Döviz kuru [nedir]?', ['Döviz', 'kuru', 'nedir?'], ['nedir?', 'kimdir?', 'nasıldır?'], 'What is the exchange rate?', 'ما هو سعر الصرف؟', 'نرخ ارز چقدر است؟', 'Какой курс обмена?')],
    [('İtiraz formu doldurmak istiyorum.', ['İtiraz', 'formu', 'doldurmak', 'istiyorum.'], 'I want to fill out an objection form.', 'أريد ملء استمارة اعتراض.', 'می‌خواهم فرم اعتراض پر کنم.', 'Я хочу заполнить форму возражения.'),
     ('Kredi çekmek istiyorum.', ['Kredi', 'çekmek', 'istiyorum.'], 'I want to take out a loan.', 'أريد أخذ قرض.', 'می‌خواهم وام بگیرم.', 'Я хочу взять кредит.'),
     ('Taksit yapmak mümkün mü?', ['Taksit', 'yapmak', 'mümkün', 'mü?'], 'Is it possible to pay in installments?', 'هل من الممكن التقسيط؟', 'آیا پرداخت قسطی ممکن است؟', 'Можно ли платить в рассрочку?'),
     ('Hesabımda [bloke] var.', ['Hesabımda', 'bloke', 'var.'], ['bloke', 'para', 'borç'], 'There is a block on my account.', 'هناك حظر على حسابي.', 'حسابم مسدود شده است.', 'На моем счету блокировка.'),
     ('Komisyon [alıyor] musunuz?', ['Komisyon', 'alıyor', 'musunuz?'], ['alıyor', 'veriyor', 'yapıyor'], 'Do you charge a commission?', 'هل تأخذون عمولة؟', 'آیا کمیسیون می‌گیرید؟', 'Вы берете комиссию?')],
    ("Opening a bank account as a foreigner", "Opening a bank account as a foreigner", "فتح حساب بنكي كأجنبي", "باز کردن حساب بانکی به عنوان یک خارجی", "Открытие банковского счета для иностранца"),
    ("Blocked card at ATM", "Blocked card at ATM", "بطاقة محظورة في الصراف الآلي", "کارت مسدود شده در خودپرداز", "Заблокированная карта в банкомате")
)
u_list.append(u2)

# u3: Hastane
u3 = gen_unit(
    'a2_hastane', 'Hastane (Hospital)', 'Hospital tasks.', '🏥', 'from-blue-400 to-indigo-600',
    [('poliklinik', 'polyclinic', 'عيادة', 'درمانگاه', 'поликлиника'), ('uzman', 'specialist', 'خبير', 'متخصص', 'специалист'), ('muayene', 'examination', 'فحص', 'معاینه', 'обследование'), ('tahlil', 'test/analysis', 'تحليل', 'آزمایش', 'анализ'), ('röntgen', 'X-ray', 'أشعة سينية', 'اشعه ایکس', 'рентген')],
    [('reçete', 'prescription', 'وصفة طبية', 'نسخه', 'рецепт'), ('ameliyat', 'surgery', 'عملية جراحية', 'عمل جراحی', 'операция'), ('taburcu olmak', 'be discharged', 'خروج من المستشفى', 'مرخص شدن', 'выписываться'), ('acil servis', 'emergency', 'طوارئ', 'اورژانس', 'скорая помощь'), ('nöbetçi', 'on duty', 'مناوب', 'کشیک', 'дежурный')],
    [('Dahiliyeye mi gideceğim?', ['Dahiliyeye', 'mi', 'gideceğim?'], 'Should I go to internal medicine?', 'هل يجب أن أذهب إلى الطب الباطني؟', 'آیا باید به داخلی بروم؟', 'Должен ли я идти к терапевту?'),
     ('Sigortam geçer mi?', ['Sigortam', 'geçer', 'mi?'], 'Is my insurance valid?', 'هل تأميني ساري؟', 'آیا بیمه من معتبر است؟', 'Действительна ли моя страховка?'),
     ('Tahlil sonuçlarım ne zaman çıkar?', ['Tahlil', 'sonuçlarım', 'ne', 'zaman', 'çıkar?'], 'When will my test results be ready?', 'متى ستكون نتائج تحاليلي جاهزة؟', 'نتایج آزمایشات من کی آماده می‌شود؟', 'Когда будут готовы результаты моих анализов?'),
     ('Ameliyat [gerekiyor] mu?', ['Ameliyat', 'gerekiyor', 'mu?'], ['gerekiyor', 'istiyor', 'oluyor'], 'Is surgery required?', 'هل الجراحة مطلوبة؟', 'آیا جراحی لازم است؟', 'Требуется ли операция?'),
     ('İkinci görüş almak [istiyorum].', ['İkinci', 'görüş', 'almak', 'istiyorum.'], ['istiyorum.', 'bekliyorum.', 'diyorum.'], 'I want to get a second opinion.', 'أريد الحصول على رأي ثانٍ.', 'می‌خواهم نظر دوم را بگیرم.', 'Я хочу получить второе мнение.')],
    [('Ağrı kesiciye toleransım var.', ['Ağrı', 'kesiciye', 'toleransım', 'var.'], 'I have a tolerance to painkillers.', 'لدي تسامح مع مسكنات الألم.', 'من به مسکن‌ها تحمل دارم.', 'У меня толерантность к обезболивающим.'),
     ('Doktor randevum var.', ['Doktor', 'randevum', 'var.'], 'I have a doctor appointment.', 'لدي موعد مع الطبيب.', 'من وقت دکتر دارم.', 'У меня прием у врача.'),
     ('Reçetemi almak istiyorum.', ['Reçetemi', 'almak', 'istiyorum.'], 'I want to get my prescription.', 'أريد الحصول على وصفتي الطبية.', 'می‌خواهم نسخه‌ام را بگیرم.', 'Я хочу получить свой рецепт.'),
     ('Bugün hastanede [yatış] yapacağım.', ['Bugün', 'hastanede', 'yatış', 'yapacağım.'], ['yatış', 'çıkış', 'giriş'], 'I will be admitted to the hospital today.', 'سأدخل المستشفى اليوم.', 'من امروز در بیمارستان بستری می‌شوم.', 'Сегодня я лягу в больницу.'),
     ('Acil servise [gitmemiz] lazım.', ['Acil', 'servise', 'gitmemiz', 'lazım.'], ['gitmemiz', 'gelmemiz', 'kalmamız'], 'We need to go to the emergency room.', 'يجب أن نذهب إلى غرفة الطوارئ.', 'باید به اورژانس برویم.', 'Нам нужно в отделение неотложной помощи.')],
    ("At ER with stomach pain", "At ER with stomach pain", "في الطوارئ مع ألم في المعدة", "در اورژانس با درد معده", "В отделении скорой помощи с болью в животе"),
    ("Consulting specialist about test results", "Consulting specialist about test results", "استشارة متخصص حول نتائج التحاليل", "مشاوره با متخصص درباره نتایج آزمایش", "Консультация со специалистом о результатах анализов")
)
u_list.append(u3)

# u4: PTT
u4 = gen_unit(
    'a2_ptt', 'PTT & Hizmetler (Post Office & Services)', 'Mail and bills.', '📮', 'from-yellow-500 to-amber-600',
    [('kargo', 'cargo/mail', 'بريد/بضائع', 'پست/محموله', 'почта/груз'), ('paket', 'package', 'طرد', 'بسته', 'посылка'), ('posta kutusu', 'mailbox', 'صندوق البريد', 'صندوق پست', 'почтовый ящик'), ('gönderici', 'sender', 'مرسل', 'فرستنده', 'отправитель'), ('alıcı', 'receiver', 'مستلم', 'گیرنده', 'получатель')],
    [('fatura', 'bill', 'فاتورة', 'قبض', 'счет'), ('abonelik', 'subscription', 'اشتراك', 'اشتراک', 'подписка'), ('elektrik', 'electricity', 'كهرباء', 'برق', 'электричество'), ('otomatik ödeme', 'auto pay', 'دفع تلقائي', 'پرداخت خودکار', 'автоплатеж'), ('iptal', 'cancellation', 'إلغاء', 'لغو', 'отмена')],
    [('Bu paketi yurt dışına göndermek istiyorum.', ['Bu', 'paketi', 'yurt', 'dışına', 'göndermek', 'istiyorum.'], 'I want to send this package abroad.', 'أريد إرسال هذا الطرد إلى الخارج.', 'می‌خواهم این بسته را به خارج از کشور بفرستم.', 'Я хочу отправить эту посылку за границу.'),
     ('Gümrük formu doldurulacak mı?', ['Gümrük', 'formu', 'doldurulacak', 'mı?'], 'Will a customs form be filled out?', 'هل سيتم ملء استمارة جمركية؟', 'آیا فرم گمرکی پر می‌شود؟', 'Будет ли заполнена таможенная форма?'),
     ('Faturamı burada ödeyebilir miyim?', ['Faturamı', 'burada', 'ödeyebilir', 'miyim?'], 'Can I pay my bill here?', 'هل يمكنني دفع فاتورتي هنا؟', 'آیا می‌توانم قبضم را اینجا پرداخت کنم؟', 'Могу ли я оплатить счет здесь?'),
     ('Abonelik iptali için [ne] gerekiyor?', ['Abonelik', 'iptali', 'için', 'ne', 'gerekiyor?'], ['ne', 'kim', 'nasıl'], 'What is required for subscription cancellation?', 'ما المطلوب لإلغاء الاشتراك؟', 'برای لغو اشتراک چه چیزی لازم است؟', 'Что требуется для отмены подписки?'),
     ('Paketim [nerede]?', ['Paketim', 'nerede?'], ['nerede?', 'kimde?', 'nasıl?'], 'Where is my package?', 'أين طردي؟', 'بسته من کجاست؟', 'Где моя посылка?')],
    [('Taahhütlü posta göndermek istiyorum.', ['Taahhütlü', 'posta', 'göndermek', 'istiyorum.'], 'I want to send registered mail.', 'أريد إرسال بريد مسجل.', 'می‌خواهم پست سفارشی بفرستم.', 'Я хочу отправить заказное письмо.'),
     ('Gönderici kim?', ['Gönderici', 'kim?'], 'Who is the sender?', 'من هو المرسل؟', 'فرستنده کیست؟', 'Кто отправитель?'),
     ('Faturam çok yüksek geldi.', ['Faturam', 'çok', 'yüksek', 'geldi.'], 'My bill came very high.', 'فاتورتي جاءت عالية جدًا.', 'قبض من خیلی زیاد آمده است.', 'Мой счет пришел очень большим.'),
     ('Otomatik ödeme [talimatı] vermek istiyorum.', ['Otomatik', 'ödeme', 'talimatı', 'vermek', 'istiyorum.'], ['talimatı', 'kartı', 'parası'], 'I want to give an auto-pay instruction.', 'أريد إعطاء تعليمات دفع تلقائي.', 'می‌خواهم دستور پرداخت خودکار بدهم.', 'Я хочу дать поручение на автоплатеж.'),
     ('Suyum [kesildi].', ['Suyum', 'kesildi.'], ['kesildi.', 'geldi.', 'bitti.'], 'My water is cut off.', 'انقطعت المياه عني.', 'آب من قطع شده است.', 'У меня отключили воду.')],
    ("Sending a package abroad", "Sending a package abroad", "إرسال طرد إلى الخارج", "ارسال بسته به خارج از کشور", "Отправка посылки за границу"),
    ("Disputing a utility bill", "Disputing a utility bill", "الاعتراض على فاتورة خدمات", "اعتراض به قبض خدمات", "Оспаривание счета за коммунальные услуги")
)
u_list.append(u4)

# u5: Konut
u5 = gen_unit(
    'a2_konut', 'Konut & Komşular (Housing & Neighbors)', 'Renting and neighbors.', '🏘️', 'from-orange-400 to-red-500',
    [('kiralık', 'for rent', 'للإيجار', 'برای اجاره', 'в аренду'), ('satılık', 'for sale', 'للبيع', 'برای فروش', 'на продажу'), ('depozito', 'deposit', 'وديعة', 'ودیعه', 'депозит'), ('kira sözleşmesi', 'lease', 'عقد إيجار', 'قرارداد اجاره', 'договор аренды'), ('ev sahibi', 'landlord', 'صاحب المنزل', 'صاحبخانه', 'арендодатель')],
    [('kiracı', 'tenant', 'مستأجر', 'مستاجر', 'арендатор'), ('aidat', 'dues', 'رسوم', 'شارژ', 'взносы'), ('kapıcı', 'doorman', 'بواب', 'سرایدار', 'консьерж'), ('asansör', 'elevator', 'مصعد', 'آسانسور', 'лифт'), ('tadilat', 'renovation', 'تجديد', 'بازسازی', 'ремонт')],
    [('Kira ne kadar?', ['Kira', 'ne', 'kadar?'], 'How much is the rent?', 'كم الإيجار؟', 'اجاره چقدر است؟', 'Сколько стоит аренда?'),
     ('Depozito kaç ay kira?', ['Depozito', 'kaç', 'ay', 'kira?'], 'How many months rent is the deposit?', 'كم شهر إيجار الوديعة؟', 'ودیعه چند ماه اجاره است؟', 'Депозит равен скольким месяцам аренды?'),
     ('Aidat dahil mi?', ['Aidat', 'dahil', 'mi?'], 'Are dues included?', 'هل الرسوم متضمنة؟', 'آیا شارژ شامل می‌شود؟', 'Взносы включены?'),
     ('Evcil hayvan [kabul] ediliyor mu?', ['Evcil', 'hayvan', 'kabul', 'ediliyor', 'mu?'], ['kabul', 'ret', 'iptal'], 'Are pets allowed?', 'هل الحيوانات الأليفة مسموحة؟', 'آیا حیوانات خانگی مجاز هستند؟', 'Разрешены ли домашние животные?'),
     ('Komşum çok gürültü [yapiyor].', ['Komşum', 'çok', 'gürültü', 'yapıyor.'], ['yapıyor.', 'ediyor.', 'oluyor.'], 'My neighbor makes a lot of noise.', 'جاري يصدر الكثير من الضوضاء.', 'همسایه من خیلی سر و صدا می‌کند.', 'Мой сосед очень шумит.')],
    [('Tadilat yapabilir miyim?', ['Tadilat', 'yapabilir', 'miyim?'], 'Can I do renovations?', 'هل يمكنني القيام بتجديدات؟', 'آیا می‌توانم بازسازی کنم؟', 'Могу ли я сделать ремонт?'),
     ('Sözleşme feshi için ne kadar önceden haber vermek gerekiyor?', ['Sözleşme', 'feshi', 'için', 'ne', 'kadar', 'önceden', 'haber', 'vermek', 'gerekiyor?'], 'How much notice is needed for lease termination?', 'كم إشعار مطلوب لإنهاء العقد؟', 'برای فسخ قرارداد چقدر زودتر باید اطلاع داد؟', 'За сколько времени нужно уведомить о расторжении договора?'),
     ('Asansör bozuk.', ['Asansör', 'bozuk.'], 'The elevator is broken.', 'المصعد معطل.', 'آسانسور خراب است.', 'Лифт сломан.'),
     ('Su hasarı [var].', ['Su', 'hasarı', 'var.'], ['var.', 'yok.', 'çok.'], 'There is water damage.', 'هناك أضرار بالمياه.', 'خسارت آب وجود دارد.', 'Есть повреждения от воды.'),
     ('Site yönetimiyle [görüşeceğim].', ['Site', 'yönetimiyle', 'görüşeceğim.'], ['görüşeceğim.', 'konuşacağım.', 'bakacağım.'], 'I will talk to the complex management.', 'سأتحدث مع إدارة المجمع.', 'با مدیریت مجتمع صحبت خواهم کرد.', 'Я поговорю с администрацией комплекса.')],
    ("Meeting potential landlord", "Meeting potential landlord", "مقابلة المالك المحتمل", "ملاقات با صاحبخانه احتمالی", "Встреча с потенциальным арендодателем"),
    ("Noise complaint against neighbor", "Noise complaint against neighbor", "شكوى ضوضاء ضد الجار", "شکایت از سر و صدای همسایه", "Жалоба на шум от соседа")
)
u_list.append(u5)

code = f"""import type {{ Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGExercise, TText }} from '../types';
import {{ a2Level as baseA2Level }} from './a2';

// Add to the existing units list
baseA2Level.units.push({','.join(u_list)});
"""

with open("append_a2.js", "w", encoding='utf-8') as f:
    f.write(f"const fs = require('fs');\nconst code = fs.readFileSync('data/curriculum/a2.ts', 'utf8');\nconst appendCode = `{','.join(u_list)}`;\nconst finalCode = code.replace('] // end of units', ',' + appendCode + '\\n  ]'); // actually we just need to replace the last bracket\n")

# A better way is to write out the ENTIRE file from Python.
import urllib.request

full_code = f"""import type {{ Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGExercise, TText }} from '../types';

export const a2Level: Level = {{
  id: 'a2',
  title: 'A2 (Elementary)',
  description: 'Master formal situations, past tense, and daily services.',
  units: [
"""

with open('data/curriculum/a2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# We will just rewrite a2.ts fully to ensure it's structurally perfect.
with open('data/curriculum/a2.ts', 'w', encoding='utf-8') as f:
    f.write(content.replace('    // Unit 2, 3, 4, 5 omitted to be generated in subsequent calls or generator', f"    ,{','.join(u_list)}"))

print("Done appending units!")
