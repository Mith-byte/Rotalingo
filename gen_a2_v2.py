import json

def T(tr, en, ar, fa, ru):
    return f"{{ tr: {json.dumps(tr)}, en: {json.dumps(en)}, ar: {json.dumps(ar)}, fa: {json.dumps(fa)}, ru: {json.dumps(ru)} }}"

def mc(idx, w, en, ar, fa, ru):
    return f"""{{
      id: '{idx}',
      type: 'multiple_choice',
      prompt: {T("Bu kelimenin anlamı nedir?", "What does this mean?", "ماذا يعني هذا؟", "این به چه معناست؟", "Что это значит?")},
      options: [
        {{ id: 'o1', turkish: {json.dumps(w)}, translation: {T(w, en, ar, fa, ru)}, isCorrect: true }},
        {{ id: 'o2', turkish: 'yanlış', translation: {T('yanlış', 'wrong', 'خاطئ', 'اشتباه', 'неправильно')}, isCorrect: false }},
        {{ id: 'o3', turkish: 'hata', translation: {T('hata', 'error', 'خطأ', 'خطا', 'ошибка')}, isCorrect: false }}
      ]
    }}"""

def dd(idx, pairs):
    p_strs = []
    for i, p in enumerate(pairs):
        p_strs.append(f"{{ id: 'p{i+1}', turkish: {json.dumps(p[0])}, translation: {T(p[1], p[1], p[2], p[3], p[4])} }}")
    return f"""{{
      id: '{idx}',
      type: 'drag_drop',
      prompt: {T("Eşleştirin", "Match", "تطابق", "تطابق", "Сопоставьте")},
      pairs: [{', '.join(p_strs)}]
    }}"""

def wo(idx, corr, scram, t_tr, t_en, t_ar, t_fa, t_ru):
    return f"""{{
      id: '{idx}',
      type: 'word_order',
      prompt: {T("Cümleyi kurun", "Build the sentence", "قم ببناء الجملة", "جمله بسازید", "Постройте предложение")},
      scrambledWords: {json.dumps(scram)},
      correctOrder: {json.dumps(corr)},
      translation: {T(t_tr, t_en, t_ar, t_fa, t_ru)}
    }}"""

def fib(idx, tmpl, corr_ans, bank, t_tr, t_en, t_ar, t_fa, t_ru):
    return f"""{{
      id: '{idx}',
      type: 'fill_in_the_blank',
      prompt: {T("Boşluğu doldurun", "Fill in the blank", "املأ الفراغ", "جای خالی را پر کنید", "Заполните пропуск")},
      sentenceTemplate: {json.dumps(tmpl)},
      correctAnswers: {json.dumps(corr_ans)},
      wordBank: {json.dumps(bank)},
      translation: {T(t_tr, t_en, t_ar, t_fa, t_ru)}
    }}"""

def rpg(idx, sc_tr, sc_en, sc_ar, sc_fa, sc_ru):
    return f"""{{
      id: '{idx}',
      type: 'rpg_dialogue',
      scenario: {T(sc_tr, sc_en, sc_ar, sc_fa, sc_ru)},
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {{
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: {T("Merhaba, size nasıl yardımcı olabilirim?", "Hello, how can I help you?", "مرحبا، كيف يمكنني مساعدتك؟", "سلام، چطور می‌توانم کمک کنم؟", "Здравствуйте, чем могу помочь?")},
          options: [
            {{ id: 'o1', turkish: 'Evet, lütfen.', hint: {T("Yes, please.", "Yes, please.", "نعم من فضلك.", "بله لطفا.", "Да, пожалуйста.")}, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: {T("Peki, işleminizi yapıyorum.", "Okay, processing.", "حسنا، جاري التنفيذ.", "باشه، در حال انجام.", "Хорошо, выполняю.")}, nextNodeId: 'end' }}
          ]
        }},
        {{
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: {T("İyi günler.", "Have a good day.", "يوم سعيد.", "روز بخیر.", "Хорошего дня.")},
          options: [], isFinal: true
        }}
      ]
    }}"""

def gen_unit(u_id, u_num, title, title_tr, title_en, title_ar, title_fa, title_ru, emoji, color, vocab1, vocab2, sents):
    ls = []
    
    # L1: vocab
    ex1 = [mc(f"{u_id}_1_{i}", *v) for i, v in enumerate(vocab1)]
    ls.append(f"{{ id: '{u_id}_1', lessonNumber: 1, lessonType: 'vocabulary', title: {T('Kelime: Bölüm 1', 'Vocab 1', 'مفردات 1', 'واژگان 1', 'Словарь 1')}, xpReward: 20, coinReward: 10, exercises: [{', '.join(ex1)}] }}")
    
    # L2: practice
    dd_p1 = [[v[0], v[1], v[2], v[3], v[4]] for v in vocab1]
    ls.append(f"{{ id: '{u_id}_2', lessonNumber: 2, lessonType: 'practice', title: {T('Pratik 1', 'Practice 1', 'تدريب 1', 'تمرین 1', 'Практика 1')}, xpReward: 20, coinReward: 10, exercises: [{dd(f'{u_id}_2_1', dd_p1)}] }}")
    
    # L3: sentences
    ex3 = [
        wo(f"{u_id}_3_1", sents[0][1], sents[0][2], sents[0][3], sents[0][4], sents[0][5], sents[0][6], sents[0][7]),
        wo(f"{u_id}_3_2", sents[1][1], sents[1][2], sents[1][3], sents[1][4], sents[1][5], sents[1][6], sents[1][7]),
        wo(f"{u_id}_3_3", sents[2][1], sents[2][2], sents[2][3], sents[2][4], sents[2][5], sents[2][6], sents[2][7]),
        fib(f"{u_id}_3_4", sents[3][1], sents[3][2], sents[3][3], sents[3][4], sents[3][5], sents[3][6], sents[3][7], sents[3][8]),
        fib(f"{u_id}_3_5", sents[4][1], sents[4][2], sents[4][3], sents[4][4], sents[4][5], sents[4][6], sents[4][7], sents[4][8])
    ]
    ls.append(f"{{ id: '{u_id}_3', lessonNumber: 3, lessonType: 'sentence_building', title: {T('Cümle Kurma 1', 'Sentences 1', 'جمل 1', 'جملات 1', 'Предложения 1')}, xpReward: 20, coinReward: 10, exercises: [{', '.join(ex3)}] }}")
    
    # L4: RPG
    ls.append(f"{{ id: '{u_id}_4', lessonNumber: 4, lessonType: 'rpg', title: {T('Diyalog 1', 'Dialogue 1', 'حوار 1', 'گفتگو 1', 'Диалог 1')}, xpReward: 35, coinReward: 15, exercises: [{rpg(f'{u_id}_4_1', 'RPG Senaryosu', 'RPG Scenario', 'سيناريو RPG', 'سناریو RPG', 'Сценарий RPG')}] }}")
    
    # L5: vocab2
    ex5 = [mc(f"{u_id}_5_{i}", *v) for i, v in enumerate(vocab2)]
    ls.append(f"{{ id: '{u_id}_5', lessonNumber: 5, lessonType: 'vocabulary', title: {T('Kelime: Bölüm 2', 'Vocab 2', 'مفردات 2', 'واژگان 2', 'Словарь 2')}, xpReward: 20, coinReward: 10, exercises: [{', '.join(ex5)}] }}")
    
    # L6: practice2
    dd_p2 = [[v[0], v[1], v[2], v[3], v[4]] for v in vocab2]
    ls.append(f"{{ id: '{u_id}_6', lessonNumber: 6, lessonType: 'practice', title: {T('Pratik 2', 'Practice 2', 'تدريب 2', 'تمرین 2', 'Практика 2')}, xpReward: 20, coinReward: 10, exercises: [{dd(f'{u_id}_6_1', dd_p2)}] }}")
    
    # L7: sentences2
    ex7 = [
        wo(f"{u_id}_7_1", sents[0][1], sents[0][2], sents[0][3], sents[0][4], sents[0][5], sents[0][6], sents[0][7]),
        wo(f"{u_id}_7_2", sents[1][1], sents[1][2], sents[1][3], sents[1][4], sents[1][5], sents[1][6], sents[1][7]),
        wo(f"{u_id}_7_3", sents[2][1], sents[2][2], sents[2][3], sents[2][4], sents[2][5], sents[2][6], sents[2][7]),
        fib(f"{u_id}_7_4", sents[3][1], sents[3][2], sents[3][3], sents[3][4], sents[3][5], sents[3][6], sents[3][7], sents[3][8]),
        fib(f"{u_id}_7_5", sents[4][1], sents[4][2], sents[4][3], sents[4][4], sents[4][5], sents[4][6], sents[4][7], sents[4][8])
    ]
    ls.append(f"{{ id: '{u_id}_7', lessonNumber: 7, lessonType: 'sentence_building', title: {T('Cümle Kurma 2', 'Sentences 2', 'جمل 2', 'جملات 2', 'Предложения 2')}, xpReward: 20, coinReward: 10, exercises: [{', '.join(ex7)}] }}")
    
    # L8: RPG2
    ls.append(f"{{ id: '{u_id}_8', lessonNumber: 8, lessonType: 'rpg', title: {T('Diyalog 2', 'Dialogue 2', 'حوار 2', 'گفتگو 2', 'Диалог 2')}, xpReward: 35, coinReward: 15, exercises: [{rpg(f'{u_id}_8_1', 'RPG Senaryosu 2', 'RPG Scenario 2', 'سيناريو RPG 2', 'سناریو RPG 2', 'Сценарий RPG 2')}] }}")
    
    # L9: boss
    ex9 = ex1[:2] + ex5[:2] + [ex3[0], ex7[0], ex3[3], ex7[3]]
    ls.append(f"{{ id: '{u_id}_9', lessonNumber: 9, lessonType: 'boss_fight', title: {T('Patron Savaşı', 'Boss Fight', 'معركة الزعيم', 'مبارزه با رئیس', 'Босс бой')}, xpReward: 70, coinReward: 35, exercises: [{', '.join(ex9)}] }}")
    
    return f"{{ id: '{u_id}', unitNumber: {u_num}, name: {T(title_tr, title_en, title_ar, title_fa, title_ru)}, emoji: '{emoji}', color: '{color}', lessons: [{','.join(ls)}] }}"

u1 = gen_unit('a2_devlet', 1, 'Devlet Dairesi', 'Devlet Dairesi', 'Government Office', 'دائرة حكومية', 'اداره دولتی', 'Государственное учреждение', '🏛️', 'from-slate-400 to-slate-600', 
  [('evrak', 'document', 'وثيقة', 'سند', 'документ'), ('başvuru', 'application', 'طلب', 'درخواست', 'заявление'), ('kimlik', 'ID', 'هوية', 'هویت', 'удостоверение'), ('randevu', 'appointment', 'موعد', 'قرار', 'назначение'), ('onay', 'approval', 'موافقة', 'تایید', 'одобрение')],
  [('ret', 'rejection', 'رفض', 'رد', 'отказ'), ('dilekçe', 'petition', 'عريضة', 'عریضه', 'петиция'), ('noter', 'notary', 'كاتب عدل', 'دفتر اسناد', 'нотариус'), ('mühür', 'stamp', 'ختم', 'مهر', 'печать'), ('pasaport', 'passport', 'جواز سفر', 'گذرنامه', 'паспорт')],
  [('S1', ['Başvurmak', 'istiyorum'], ['istiyorum', 'Başvurmak'], 'Başvurmak istiyorum.', 'I want to apply.', 'أريد التقديم.', 'می‌خواهم درخواست دهم.', 'Я хочу подать заявление.'),
   ('S2', ['Kimliğim', 'yanımda'], ['yanımda', 'Kimliğim'], 'Kimliğim yanımda.', 'My ID is with me.', 'هويتي معي.', 'هویت من با من است.', 'Мое удостоверение со мной.'),
   ('S3', ['Randevu', 'aldım'], ['aldım', 'Randevu'], 'Randevu aldım.', 'I made an appointment.', 'لقد أخذت موعدا.', 'قرار گرفتم.', 'Я записался на прием.'),
   ('F1', 'Benim adım ____.', ['Ali'], ['Ali', 'Masa', 'Kalem'], 'Benim adım Ali.', 'My name is Ali.', 'اسمي علي.', 'نام من علی است.', 'Меня зовут Али.'),
   ('F2', 'Burası ____ dairesi.', ['Devlet'], ['Devlet', 'Banka', 'Ev'], 'Burası devlet dairesi.', 'This is a government office.', 'هذه دائرة حكومية.', 'این اداره دولتی است.', 'Это государственное учреждение.')]
)

u2 = gen_unit('a2_banka', 2, 'Banka', 'Banka', 'Bank', 'بنك', 'بانک', 'Банк', '🏦', 'from-emerald-500 to-green-700', 
  [('hesap', 'account', 'حساب', 'حساب', 'счет'), ('para', 'money', 'مال', 'پول', 'деньги'), ('kredi', 'credit', 'ائتمان', 'اعتبار', 'кредит'), ('kart', 'card', 'بطاقة', 'کارت', 'карта'), ('şifre', 'password', 'كلمة سر', 'رمز', 'пароль')],
  [('faiz', 'interest', 'فائدة', 'بهره', 'процент'), ('kur', 'exchange rate', 'سعر الصرف', 'نرخ ارز', 'курс'), ('döviz', 'foreign currency', 'عملة أجنبية', 'ارز', 'валюта'), ('komisyon', 'commission', 'عمولة', 'کمیسیون', 'комиссия'), ('bloke', 'block', 'حظر', 'مسدود', 'блок')],
  [('S1', ['Hesap', 'açmak', 'istiyorum'], ['istiyorum', 'Hesap', 'açmak'], 'Hesap açmak istiyorum.', 'I want to open an account.', 'أريد فتح حساب.', 'می‌خواهم حساب باز کنم.', 'Я хочу открыть счет.'),
   ('S2', ['Para', 'çekeceğim'], ['çekeceğim', 'Para'], 'Para çekeceğim.', 'I will withdraw money.', 'سأسحب المال.', 'پول برداشت می‌کنم.', 'Я сниму деньги.'),
   ('S3', ['Şifremi', 'unuttum'], ['unuttum', 'Şifremi'], 'Şifremi unuttum.', 'I forgot my password.', 'لقد نسيت كلمة المرور الخاصة بي.', 'رمز عبور خود را فراموش کردم.', 'Я забыл свой пароль.'),
   ('F1', 'Bir ____ açmak istiyorum.', ['hesap'], ['hesap', 'kapı', 'kitap'], 'Bir hesap açmak istiyorum.', 'I want to open an account.', 'أريد فتح حساب.', 'می‌خواهم حساب باز کنم.', 'Я хочу открыть счет.'),
   ('F2', 'Kredi ____ almak istiyorum.', ['kartı'], ['kartı', 'parası', 'hesabı'], 'Kredi kartı almak istiyorum.', 'I want to get a credit card.', 'أريد الحصول على بطاقة ائتمان.', 'می‌خواهم کارت اعتباری بگیرم.', 'Я хочу получить кредитную карту.')]
)

u3 = gen_unit('a2_hastane', 3, 'Hastane', 'Hastane', 'Hospital', 'مستشفى', 'بیمارستان', 'Больница', '🏥', 'from-blue-400 to-indigo-600', 
  [('doktor', 'doctor', 'طبيب', 'دکتر', 'врач'), ('hasta', 'patient', 'مريض', 'بیمار', 'пациент'), ('ilaç', 'medicine', 'دواء', 'دارو', 'лекарство'), ('reçete', 'prescription', 'وصفة طبية', 'نسخه', 'рецепт'), ('ağrı', 'pain', 'ألم', 'درد', 'боль')],
  [('ameliyat', 'surgery', 'عملية جراحية', 'جراحی', 'операция'), ('tahlil', 'test', 'تحليل', 'آزمایش', 'анализ'), ('röntgen', 'x-ray', 'أشعة سينية', 'اشعه ایکس', 'рентген'), ('acil', 'emergency', 'طوارئ', 'اورژانس', 'скорая помощь'), ('nöbetçi', 'on duty', 'مناوب', 'کشیک', 'дежурный')],
  [('S1', ['Çok', 'hastayım'], ['hastayım', 'Çok'], 'Çok hastayım.', 'I am very sick.', 'أنا مريض جدا.', 'من خیلی بیمار هستم.', 'Я очень болен.'),
   ('S2', ['Başım', 'ağrıyor'], ['ağrıyor', 'Başım'], 'Başım ağrıyor.', 'My head hurts.', 'رأسي يؤلمني.', 'سرم درد می‌کند.', 'У меня болит голова.'),
   ('S3', ['İlaç', 'alacağım'], ['alacağım', 'İlaç'], 'İlaç alacağım.', 'I will buy medicine.', 'سأشتري دواء.', 'دارو خواهم خرید.', 'Я куплю лекарство.'),
   ('F1', 'Bana bir ____ yazar mısınız?', ['reçete'], ['reçete', 'kitap', 'mektup'], 'Bana bir reçete yazar mısınız?', 'Can you write me a prescription?', 'هل يمكنك أن تكتب لي وصفة طبية؟', 'می‌توانید برایم نسخه بنویسید؟', 'Не могли бы вы выписать мне рецепт?'),
   ('F2', 'Bugün ____ eczane nerede?', ['nöbetçi'], ['nöbetçi', 'açık', 'kapalı'], 'Bugün nöbetçi eczane nerede?', 'Where is the pharmacy on duty today?', 'أين صيدلية المناوبة اليوم؟', 'داروخانه کشیک امروز کجاست؟', 'Где сегодня дежурная аптека?')]
)

u4 = gen_unit('a2_ptt', 4, 'Posta', 'Posta', 'Post', 'بريد', 'پست', 'Почта', '📮', 'from-yellow-500 to-amber-600', 
  [('kargo', 'cargo', 'بريد', 'پست', 'почта'), ('paket', 'package', 'طرد', 'بسته', 'посылка'), ('gönderici', 'sender', 'مرسل', 'فرستنده', 'отправитель'), ('alıcı', 'receiver', 'مستلم', 'گیرنده', 'получатель'), ('fatura', 'bill', 'فاتورة', 'قبض', 'счет')],
  [('elektrik', 'electricity', 'كهرباء', 'برق', 'электричество'), ('su', 'water', 'ماء', 'آب', 'вода'), ('doğalgaz', 'gas', 'غاز', 'گاز', 'газ'), ('abonelik', 'subscription', 'اشتراك', 'اشتراک', 'подписка'), ('iptal', 'cancellation', 'إلغاء', 'لغو', 'отмена')],
  [('S1', ['Paket', 'göndereceğim'], ['göndereceğim', 'Paket'], 'Paket göndereceğim.', 'I will send a package.', 'سأرسل طردا.', 'بسته می‌فرستم.', 'Я отправлю посылку.'),
   ('S2', ['Fatura', 'ödeyeceğim'], ['ödeyeceğim', 'Fatura'], 'Fatura ödeyeceğim.', 'I will pay a bill.', 'سأدفع فاتورة.', 'قبض پرداخت می‌کنم.', 'Я оплачу счет.'),
   ('S3', ['Elektrik', 'kesildi'], ['kesildi', 'Elektrik'], 'Elektrik kesildi.', 'Electricity is cut.', 'انقطعت الكهرباء.', 'برق قطع شد.', 'Отключили электричество.'),
   ('F1', 'Bu ____ yurt dışına gidecek.', ['paketi'], ['paketi', 'kargosu', 'faturası'], 'Bu paketi yurt dışına gidecek.', 'This package will go abroad.', 'هذا الطرد سيذهب إلى الخارج.', 'این بسته به خارج از کشور می‌رود.', 'Эта посылка отправится за границу.'),
   ('F2', 'Otomatik ____ talimatı verdim.', ['ödeme'], ['ödeme', 'alma', 'verme'], 'Otomatik ödeme talimatı verdim.', 'I gave auto-pay instruction.', 'أعطيت تعليمات الدفع التلقائي.', 'دستور پرداخت خودکار دادم.', 'Я дал поручение на автоплатеж.')]
)

u5 = gen_unit('a2_konut', 5, 'Konut', 'Konut', 'Housing', 'إسكان', 'مسکن', 'Жилье', '🏘️', 'from-orange-400 to-red-500', 
  [('ev', 'house', 'منزل', 'خانه', 'дом'), ('kiralık', 'for rent', 'للإيجار', 'برای اجاره', 'в аренду'), ('satılık', 'for sale', 'للبيع', 'برای فروش', 'на продажу'), ('depozito', 'deposit', 'وديعة', 'ودیعه', 'депозит'), ('kira', 'rent', 'إيجار', 'اجاره', 'аренда')],
  [('komşu', 'neighbor', 'جار', 'همسایه', 'сосед'), ('aidat', 'dues', 'رسوم', 'شارژ', 'взносы'), ('asansör', 'elevator', 'مصعد', 'آسانسور', 'лифт'), ('tadilat', 'renovation', 'تجديد', 'بازسازی', 'ремонт'), ('kapıcı', 'doorman', 'بواب', 'سرایدار', 'консьерж')],
  [('S1', ['Kira', 'ne', 'kadar'], ['kadar', 'ne', 'Kira'], 'Kira ne kadar?', 'How much is rent?', 'كم الإيجار؟', 'اجاره چقدر است؟', 'Сколько стоит аренда?'),
   ('S2', ['Depozito', 'vereceğim'], ['vereceğim', 'Depozito'], 'Depozito vereceğim.', 'I will give a deposit.', 'سأعطي وديعة.', 'ودیعه می‌دهم.', 'Я дам депозит.'),
   ('S3', ['Asansör', 'bozuk'], ['bozuk', 'Asansör'], 'Asansör bozuk.', 'The elevator is broken.', 'المصعد معطل.', 'آسانسور خراب است.', 'Лифт сломан.'),
   ('F1', 'Evimiz ____.', ['kiralık'], ['kiralık', 'satılık', 'büyük'], 'Evimiz kiralık.', 'Our house is for rent.', 'منزلنا للإيجار.', 'خانه ما برای اجاره است.', 'Наш дом в аренду.'),
   ('F2', 'Aylık ____ çok yüksek.', ['aidat'], ['aidat', 'para', 'fatura'], 'Aylık aidat çok yüksek.', 'Monthly dues are very high.', 'الرسوم الشهرية عالية جدا.', 'شارژ ماهانه خیلی زیاد است.', 'Ежемесячные взносы очень высокие.')]
)

units = [u1, u2, u3, u4, u5]

full_code = f"""import type {{ Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGExercise, TText }} from '../types';

export const a2Level: Level = {{
  id: 'a2',
  code: 'A2',
  name: {T('A2 (Temel)', 'A2 (Elementary)', 'A2 (ابتدائي)', 'A2 (ابتدایی)', 'A2 (Элементарный)')},
  units: [{','.join(units)}]
}};
"""

with open('data/curriculum/a2.ts', 'w', encoding='utf-8') as f:
    f.write(full_code)

print("SUCCESS")
