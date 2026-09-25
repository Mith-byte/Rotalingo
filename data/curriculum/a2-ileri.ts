import type { Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGTypingExercise, TText, UnitGuidebook } from '../types';

export const a2IleriLevel: Level = {
  id: "a2_ileri",
  title: {
    tr: "A2 İleri",
    en: "A2 Advanced",
    ar: "A2 متقدم",
    fa: "A2 پیشرفته",
    ru: "A2 Продвинутый"
  },
  description: {
    tr: "A2 seviyesinin ikinci yarısı",
    en: "Second half of A2 level",
    ar: "النصف الثاني من مستوى A2",
    fa: "نیمه دوم سطح A2",
    ru: "Вторая половина уровня A2"
  },
  order: 4,
  units: [
    {
      id: "a2i_is",
      emoji: "💼",
      color: "from-slate-500 to-slate-700",
      title: {
        tr: "İş Görüşmesi",
        en: "Job Interview",
        ar: "مقابلة عمل",
        fa: "مصاحبه کاری",
        ru: "Собеседование"
      },
      description: {
        tr: "İş arama ve görüşme",
        en: "Job search and interviews",
        ar: "البحث عن عمل",
        fa: "کاریابی",
        ru: "Поиск работы"
      },
      guidebook: {
        vocabulary: [
          {
            word: "özgeçmiş",
            translation: {
              tr: "özgeçmiş",
              en: "resume",
              ar: "سيرة ذاتية",
              fa: "رزومه",
              ru: "резюме"
            }
          },
          {
            word: "deneyim",
            translation: {
              tr: "deneyim",
              en: "experience",
              ar: "خبرة",
              fa: "تجربه",
              ru: "опыт"
            }
          },
          {
            word: "maaş",
            translation: {
              tr: "maaş",
              en: "salary",
              ar: "راتب",
              fa: "حقوق",
              ru: "зарплата"
            }
          },
          {
            word: "pozisyon",
            translation: {
              tr: "pozisyon",
              en: "position",
              ar: "منصب",
              fa: "موقعیت",
              ru: "должность"
            }
          },
          {
            word: "aday",
            translation: {
              tr: "aday",
              en: "candidate",
              ar: "مرشح",
              fa: "نامزد",
              ru: "кандидат"
            }
          },
          {
            word: "referans",
            translation: {
              tr: "referans",
              en: "reference",
              ar: "مرجع",
              fa: "مرجع",
              ru: "рекомендация"
            }
          },
          {
            word: "sözleşme",
            translation: {
              tr: "sözleşme",
              en: "contract",
              ar: "عقد",
              fa: "قرارداد",
              ru: "контракт"
            }
          },
          {
            word: "müdür",
            translation: {
              tr: "müdür",
              en: "manager",
              ar: "مدير",
              fa: "مدیر",
              ru: "менеджер"
            }
          },
          {
            word: "şirket",
            translation: {
              tr: "şirket",
              en: "company",
              ar: "شركة",
              fa: "شرکت",
              ru: "компания"
            }
          },
          {
            word: "görev",
            translation: {
              tr: "görev",
              en: "duty",
              ar: "مهمة",
              fa: "وظیفه",
              ru: "обязанность"
            }
          }
        ],
        keyPhrases: [
          {
            phrase: "Neden bu işi istiyorsunuz?",
            translation: {
              tr: "Neden bu işi istiyorsunuz?",
              en: "Why do you want this job?",
              ar: "لماذا تريد هذا العمل؟",
              fa: "چرا این شغل را می‌خواهید؟",
              ru: "Почему вы хотите эту работу?"
            }
          },
          {
            phrase: "Daha önce nerede çalıştınız?",
            translation: {
              tr: "Daha önce nerede çalıştınız?",
              en: "Where did you work before?",
              ar: "أين عملت من قبل؟",
              fa: "قبلا کجا کار می‌کردید؟",
              ru: "Где вы работали раньше?"
            }
          },
          {
            phrase: "Maaş beklentiniz nedir?",
            translation: {
              tr: "Maaş beklentiniz nedir?",
              en: "What is your salary expectation?",
              ar: "ما هو توقعك للراتب؟",
              fa: "انتظار حقوق شما چیست؟",
              ru: "Каковы ваши ожидания по зарплате?"
            }
          },
          {
            phrase: "Ne zaman başlayabilirsiniz?",
            translation: {
              tr: "Ne zaman başlayabilirsiniz?",
              en: "When can you start?",
              ar: "متى يمكنك البدء؟",
              fa: "چه زمانی می‌توانید شروع کنید؟",
              ru: "Когда вы можете начать?"
            }
          },
          {
            phrase: "Sizi neden işe almalıyız?",
            translation: {
              tr: "Sizi neden işe almalıyız?",
              en: "Why should we hire you?",
              ar: "لماذا يجب أن نوظفك؟",
              fa: "چرا باید شما را استخدام کنیم؟",
              ru: "Почему мы должны вас нанять?"
            }
          }
        ],
        grammarNotes: [
          {
            title: {
              tr: "Gelecek Zaman",
              en: "Future Tense",
              ar: "المستقبل",
              fa: "آینده",
              ru: "Будущее время"
            },
            explanation: {
              tr: "Gelecek planları",
              en: "Future plans",
              ar: "خطط المستقبل",
              fa: "برنامه‌های آینده",
              ru: "Планы на будущее"
            }
          },
          {
            title: {
              tr: "Gereklilik Kipi",
              en: "Necessity Mood",
              ar: "الضرورة",
              fa: "الزام",
              ru: "Необходимость"
            },
            explanation: {
              tr: "Meli/malı",
              en: "Must/should",
              ar: "يجب",
              fa: "باید",
              ru: "Должен"
            }
          }
        ]
      },
      lessons: [
        {
          id: "a2i_is_1",
          type: "vocabulary",
          title: {
            tr: "Kelime 1",
            en: "Vocab 1",
            ar: "مفردات 1",
            fa: "واژگان ۱",
            ru: "Словарь 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_is_1_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "özgeçmiş",
                    en: "özgeçmiş",
                    ar: "özgeçmiş",
                    fa: "özgeçmiş",
                    ru: "özgeçmiş"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_1_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "deneyim",
                    en: "deneyim",
                    ar: "deneyim",
                    fa: "deneyim",
                    ru: "deneyim"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_1_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "maaş",
                    en: "maaş",
                    ar: "maaş",
                    fa: "maaş",
                    ru: "maaş"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_1_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "pozisyon",
                    en: "pozisyon",
                    ar: "pozisyon",
                    fa: "pozisyon",
                    ru: "pozisyon"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_1_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "aday",
                    en: "aday",
                    ar: "aday",
                    fa: "aday",
                    ru: "aday"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_is_2",
          type: "practice",
          title: {
            tr: "Eşleştirme 1",
            en: "Matching 1",
            ar: "مطابقة 1",
            fa: "تطابق ۱",
            ru: "Сопоставление 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_is_2_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Kelimeleri eşleştirin",
                en: "Match words",
                ar: "طابق الكلمات",
                fa: "کلمات را تطبیق دهید",
                ru: "Сопоставьте слова"
              },
              pairs: [
                {
                  left: {
                    tr: "özgeçmiş",
                    en: "özgeçmiş",
                    ar: "özgeçmiş",
                    fa: "özgeçmiş",
                    ru: "özgeçmiş"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "deneyim",
                    en: "deneyim",
                    ar: "deneyim",
                    fa: "deneyim",
                    ru: "deneyim"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "maaş",
                    en: "maaş",
                    ar: "maaş",
                    fa: "maaş",
                    ru: "maaş"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "pozisyon",
                    en: "pozisyon",
                    ar: "pozisyon",
                    fa: "pozisyon",
                    ru: "pozisyon"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "aday",
                    en: "aday",
                    ar: "aday",
                    fa: "aday",
                    ru: "aday"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_is_3",
          type: "vocabulary",
          title: {
            tr: "Kelime 2",
            en: "Vocab 2",
            ar: "مفردات 2",
            fa: "واژگان ۲",
            ru: "Словарь 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_is_3_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "referans",
                    en: "referans",
                    ar: "referans",
                    fa: "referans",
                    ru: "referans"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_3_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "sözleşme",
                    en: "sözleşme",
                    ar: "sözleşme",
                    fa: "sözleşme",
                    ru: "sözleşme"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_3_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "müdür",
                    en: "müdür",
                    ar: "müdür",
                    fa: "müdür",
                    ru: "müdür"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_3_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "şirket",
                    en: "şirket",
                    ar: "şirket",
                    fa: "şirket",
                    ru: "şirket"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_3_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "görev",
                    en: "görev",
                    ar: "görev",
                    fa: "görev",
                    ru: "görev"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_is_4",
          type: "rpg",
          title: {
            tr: "Senaryo 1",
            en: "Scenario 1",
            ar: "سيناريو 1",
            fa: "سناریو ۱",
            ru: "Сценарий 1"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_is_4_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Senaryo Başlıyor",
                en: "Scenario Begins",
                ar: "يبدأ السيناريو",
                fa: "سناریو شروع می‌شود",
                ru: "Сценарий начинается"
              },
              startNodeId: "node_1",
              nodes: [
                {
                  id: "node_1",
                  npcText: {
                    tr: "Merhaba.",
                    en: "Hello.",
                    ar: "مرحبا.",
                    fa: "سلام.",
                    ru: "Привет."
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Merhaba",
                      hint: {
                        tr: "Merhaba",
                        en: "Hello",
                        ar: "مرحبا",
                        fa: "سلام",
                        ru: "Привет"
                      },
                      nextNodeId: "node_2",
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: "node_2"
                },
                {
                  id: "node_2",
                  npcText: {
                    tr: "Nasılsın?",
                    en: "How are you?",
                    ar: "كيف حالك؟",
                    fa: "حالت چطور است؟",
                    ru: "Как дела?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "İyiyim",
                      hint: {
                        tr: "İyiyim",
                        en: "I am fine",
                        ar: "أنا بخير",
                        fa: "خوبم",
                        ru: "Я в порядке"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_is_5",
          type: "grammar",
          title: {
            tr: "Cümleler 1",
            en: "Sentences 1",
            ar: "جمل 1",
            fa: "جملات ۱",
            ru: "Предложения 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_is_5_wo_0",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_is_5_wo_1",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_is_5_wo_2",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_is_5_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            },
            {
              id: "a2i_is_5_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            }
          ]
        },
        {
          id: "a2i_is_6",
          type: "vocabulary",
          title: {
            tr: "Kelime 3",
            en: "Vocab 3",
            ar: "مفردات 3",
            fa: "واژگان ۳",
            ru: "Словарь 3"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_is_6_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_6_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_6_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_6_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_6_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_is_7",
          type: "practice",
          title: {
            tr: "Eşleştirme 2",
            en: "Matching 2",
            ar: "مطابقة 2",
            fa: "تطابق ۲",
            ru: "Сопоставление 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_is_7_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Eşleştir",
                en: "Match",
                ar: "طابق",
                fa: "تطبیق",
                ru: "Сопоставьте"
              },
              pairs: [
                {
                  left: {
                    tr: "maaş",
                    en: "word 0",
                    ar: "كلمة 0",
                    fa: "کلمه 0",
                    ru: "слово 0"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "pozisyon",
                    en: "word 1",
                    ar: "كلمة 1",
                    fa: "کلمه 1",
                    ru: "слово 1"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "aday",
                    en: "word 2",
                    ar: "كلمة 2",
                    fa: "کلمه 2",
                    ru: "слово 2"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "referans",
                    en: "word 3",
                    ar: "كلمة 3",
                    fa: "کلمه 3",
                    ru: "слово 3"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "sözleşme",
                    en: "word 4",
                    ar: "كلمة 4",
                    fa: "کلمه 4",
                    ru: "слово 4"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_is_8",
          type: "rpg",
          title: {
            tr: "Senaryo 2",
            en: "Scenario 2",
            ar: "سيناريو 2",
            fa: "سناریو ۲",
            ru: "Сценарий 2"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_is_8_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Devam",
                en: "Continue",
                ar: "استمر",
                fa: "ادامه",
                ru: "Продолжить"
              },
              startNodeId: "n1",
              nodes: [
                {
                  id: "n1",
                  npcText: {
                    tr: "Ne düşünüyorsun?",
                    en: "What do you think?",
                    ar: "ما رأيك؟",
                    fa: "چه فکر می‌کنی؟",
                    ru: "Что вы думаете?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Harika",
                      hint: {
                        tr: "Harika",
                        en: "Great",
                        ar: "عظيم",
                        fa: "عالی",
                        ru: "Отлично"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_is_9",
          type: "boss",
          title: {
            tr: "Bölüm Sonu Canavarı",
            en: "Boss Fight",
            ar: "زعيم النهاية",
            fa: "غول آخر",
            ru: "Босс-битва"
          },
          xpReward: 75,
          coinReward: 40,
          exercises: [
            {
              id: "a2i_is_9_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_9_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_9_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_9_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_is_9_wo_0",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_is_9_wo_1",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_is_9_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            },
            {
              id: "a2i_is_9_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            }
          ]
        }
      ]
    },
    {
      id: "a2i_hukuk",
      emoji: "⚖️",
      color: "from-gray-500 to-zinc-700",
      title: {
        tr: "Hukuki Konular",
        en: "Legal Matters",
        ar: "مسائل قانونية",
        fa: "مسائل حقوقی",
        ru: "Правовые вопросы"
      },
      description: {
        tr: "Hukuk ve kurallar",
        en: "Law and rules",
        ar: "القانون والقواعد",
        fa: "قانون و مقررات",
        ru: "Закон и правила"
      },
      guidebook: {
        vocabulary: [
          {
            word: "avukat",
            translation: {
              tr: "avukat",
              en: "lawyer",
              ar: "محام",
              fa: "وکیل",
              ru: "адвокат"
            }
          },
          {
            word: "mahkeme",
            translation: {
              tr: "mahkeme",
              en: "court",
              ar: "محكمة",
              fa: "دادگاه",
              ru: "суд"
            }
          },
          {
            word: "dava",
            translation: {
              tr: "dava",
              en: "lawsuit",
              ar: "دعوى",
              fa: "دعوی",
              ru: "иск"
            }
          },
          {
            word: "haklar",
            translation: {
              tr: "haklar",
              en: "rights",
              ar: "حقوق",
              fa: "حقوق",
              ru: "права"
            }
          },
          {
            word: "ihlal",
            translation: {
              tr: "ihlal",
              en: "violation",
              ar: "انتهاك",
              fa: "نقض",
              ru: "нарушение"
            }
          },
          {
            word: "şikayet",
            translation: {
              tr: "şikayet",
              en: "complaint",
              ar: "شكوى",
              fa: "شکایت",
              ru: "жалоба"
            }
          },
          {
            word: "karakol",
            translation: {
              tr: "karakol",
              en: "police station",
              ar: "مخفر",
              fa: "پاسگاه",
              ru: "полицейский участок"
            }
          },
          {
            word: "ifade",
            translation: {
              tr: "ifade",
              en: "statement",
              ar: "إفادة",
              fa: "اظهارات",
              ru: "заявление"
            }
          },
          {
            word: "tutuklama",
            translation: {
              tr: "tutuklama",
              en: "arrest",
              ar: "اعتقال",
              fa: "دستگیری",
              ru: "арест"
            }
          },
          {
            word: "suçlama",
            translation: {
              tr: "suçlama",
              en: "accusation",
              ar: "اتهام",
              fa: "اتهام",
              ru: "обвинение"
            }
          }
        ],
        keyPhrases: [
          {
            phrase: "Şikayetçi olmak istiyorum.",
            translation: {
              tr: "Şikayetçi olmak istiyorum.",
              en: "I want to file a complaint.",
              ar: "أريد تقديم شكوى.",
              fa: "می‌خواهم شکایت کنم.",
              ru: "Я хочу подать жалобу."
            }
          },
          {
            phrase: "Avukatımı aramak istiyorum.",
            translation: {
              tr: "Avukatımı aramak istiyorum.",
              en: "I want to call my lawyer.",
              ar: "أريد الاتصال بمحامي.",
              fa: "می‌خواهم با وکیلم تماس بگیرم.",
              ru: "Я хочу позвонить своему адвокату."
            }
          },
          {
            phrase: "Haklarımı biliyorum.",
            translation: {
              tr: "Haklarımı biliyorum.",
              en: "I know my rights.",
              ar: "أعرف حقوقي.",
              fa: "حقوقم را می‌دانم.",
              ru: "Я знаю свои права."
            }
          },
          {
            phrase: "İfade vermek için geldim.",
            translation: {
              tr: "İfade vermek için geldim.",
              en: "I came to give a statement.",
              ar: "جئت لتقديم إفادة.",
              fa: "برای دادن اظهارات آمدم.",
              ru: "Я пришел дать показания."
            }
          },
          {
            phrase: "Bu yasal değil.",
            translation: {
              tr: "Bu yasal değil.",
              en: "This is not legal.",
              ar: "هذا ليس قانونيا.",
              fa: "این قانونی نیست.",
              ru: "Это незаконно."
            }
          }
        ],
        grammarNotes: [
          {
            title: {
              tr: "Zarf Fiiller",
              en: "Adverbial Clauses",
              ar: "ظروف",
              fa: "قیدها",
              ru: "Деепричастия"
            },
            explanation: {
              tr: "İken, madan",
              en: "While, without",
              ar: "بينما، بدون",
              fa: "در حالی که، بدون",
              ru: "Пока, без"
            }
          },
          {
            title: {
              tr: "Edilgen Çatı",
              en: "Passive Voice",
              ar: "المجهول",
              fa: "مجهول",
              ru: "Пассивный залог"
            },
            explanation: {
              tr: "Yapıldı, edildi",
              en: "Was done",
              ar: "تم",
              fa: "انجام شد",
              ru: "Было сделано"
            }
          }
        ]
      },
      lessons: [
        {
          id: "a2i_hukuk_1",
          type: "vocabulary",
          title: {
            tr: "Kelime 1",
            en: "Vocab 1",
            ar: "مفردات 1",
            fa: "واژگان ۱",
            ru: "Словарь 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_hukuk_1_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "avukat",
                    en: "avukat",
                    ar: "avukat",
                    fa: "avukat",
                    ru: "avukat"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_1_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "mahkeme",
                    en: "mahkeme",
                    ar: "mahkeme",
                    fa: "mahkeme",
                    ru: "mahkeme"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_1_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "dava",
                    en: "dava",
                    ar: "dava",
                    fa: "dava",
                    ru: "dava"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_1_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "haklar",
                    en: "haklar",
                    ar: "haklar",
                    fa: "haklar",
                    ru: "haklar"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_1_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "ihlal",
                    en: "ihlal",
                    ar: "ihlal",
                    fa: "ihlal",
                    ru: "ihlal"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_hukuk_2",
          type: "practice",
          title: {
            tr: "Eşleştirme 1",
            en: "Matching 1",
            ar: "مطابقة 1",
            fa: "تطابق ۱",
            ru: "Сопоставление 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_hukuk_2_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Kelimeleri eşleştirin",
                en: "Match words",
                ar: "طابق الكلمات",
                fa: "کلمات را تطبیق دهید",
                ru: "Сопоставьте слова"
              },
              pairs: [
                {
                  left: {
                    tr: "avukat",
                    en: "avukat",
                    ar: "avukat",
                    fa: "avukat",
                    ru: "avukat"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "mahkeme",
                    en: "mahkeme",
                    ar: "mahkeme",
                    fa: "mahkeme",
                    ru: "mahkeme"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "dava",
                    en: "dava",
                    ar: "dava",
                    fa: "dava",
                    ru: "dava"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "haklar",
                    en: "haklar",
                    ar: "haklar",
                    fa: "haklar",
                    ru: "haklar"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "ihlal",
                    en: "ihlal",
                    ar: "ihlal",
                    fa: "ihlal",
                    ru: "ihlal"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_hukuk_3",
          type: "vocabulary",
          title: {
            tr: "Kelime 2",
            en: "Vocab 2",
            ar: "مفردات 2",
            fa: "واژگان ۲",
            ru: "Словарь 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_hukuk_3_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "şikayet",
                    en: "şikayet",
                    ar: "şikayet",
                    fa: "şikayet",
                    ru: "şikayet"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_3_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "karakol",
                    en: "karakol",
                    ar: "karakol",
                    fa: "karakol",
                    ru: "karakol"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_3_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "ifade",
                    en: "ifade",
                    ar: "ifade",
                    fa: "ifade",
                    ru: "ifade"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_3_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "tutuklama",
                    en: "tutuklama",
                    ar: "tutuklama",
                    fa: "tutuklama",
                    ru: "tutuklama"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_3_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "suçlama",
                    en: "suçlama",
                    ar: "suçlama",
                    fa: "suçlama",
                    ru: "suçlama"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_hukuk_4",
          type: "rpg",
          title: {
            tr: "Senaryo 1",
            en: "Scenario 1",
            ar: "سيناريو 1",
            fa: "سناریو ۱",
            ru: "Сценарий 1"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_hukuk_4_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Senaryo Başlıyor",
                en: "Scenario Begins",
                ar: "يبدأ السيناريو",
                fa: "سناریو شروع می‌شود",
                ru: "Сценарий начинается"
              },
              startNodeId: "node_1",
              nodes: [
                {
                  id: "node_1",
                  npcText: {
                    tr: "Merhaba.",
                    en: "Hello.",
                    ar: "مرحبا.",
                    fa: "سلام.",
                    ru: "Привет."
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Merhaba",
                      hint: {
                        tr: "Merhaba",
                        en: "Hello",
                        ar: "مرحبا",
                        fa: "سلام",
                        ru: "Привет"
                      },
                      nextNodeId: "node_2",
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: "node_2"
                },
                {
                  id: "node_2",
                  npcText: {
                    tr: "Nasılsın?",
                    en: "How are you?",
                    ar: "كيف حالك؟",
                    fa: "حالت چطور است؟",
                    ru: "Как дела?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "İyiyim",
                      hint: {
                        tr: "İyiyim",
                        en: "I am fine",
                        ar: "أنا بخير",
                        fa: "خوبم",
                        ru: "Я в порядке"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_hukuk_5",
          type: "grammar",
          title: {
            tr: "Cümleler 1",
            en: "Sentences 1",
            ar: "جمل 1",
            fa: "جملات ۱",
            ru: "Предложения 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_hukuk_5_wo_0",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_hukuk_5_wo_1",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_hukuk_5_wo_2",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_hukuk_5_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            },
            {
              id: "a2i_hukuk_5_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            }
          ]
        },
        {
          id: "a2i_hukuk_6",
          type: "vocabulary",
          title: {
            tr: "Kelime 3",
            en: "Vocab 3",
            ar: "مفردات 3",
            fa: "واژگان ۳",
            ru: "Словарь 3"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_hukuk_6_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_6_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_6_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_6_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_6_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_hukuk_7",
          type: "practice",
          title: {
            tr: "Eşleştirme 2",
            en: "Matching 2",
            ar: "مطابقة 2",
            fa: "تطابق ۲",
            ru: "Сопоставление 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_hukuk_7_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Eşleştir",
                en: "Match",
                ar: "طابق",
                fa: "تطبیق",
                ru: "Сопоставьте"
              },
              pairs: [
                {
                  left: {
                    tr: "dava",
                    en: "word 0",
                    ar: "كلمة 0",
                    fa: "کلمه 0",
                    ru: "слово 0"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "haklar",
                    en: "word 1",
                    ar: "كلمة 1",
                    fa: "کلمه 1",
                    ru: "слово 1"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "ihlal",
                    en: "word 2",
                    ar: "كلمة 2",
                    fa: "کلمه 2",
                    ru: "слово 2"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "şikayet",
                    en: "word 3",
                    ar: "كلمة 3",
                    fa: "کلمه 3",
                    ru: "слово 3"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "karakol",
                    en: "word 4",
                    ar: "كلمة 4",
                    fa: "کلمه 4",
                    ru: "слово 4"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_hukuk_8",
          type: "rpg",
          title: {
            tr: "Senaryo 2",
            en: "Scenario 2",
            ar: "سيناريو 2",
            fa: "سناریو ۲",
            ru: "Сценарий 2"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_hukuk_8_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Devam",
                en: "Continue",
                ar: "استمر",
                fa: "ادامه",
                ru: "Продолжить"
              },
              startNodeId: "n1",
              nodes: [
                {
                  id: "n1",
                  npcText: {
                    tr: "Ne düşünüyorsun?",
                    en: "What do you think?",
                    ar: "ما رأيك؟",
                    fa: "چه فکر می‌کنی؟",
                    ru: "Что вы думаете?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Harika",
                      hint: {
                        tr: "Harika",
                        en: "Great",
                        ar: "عظيم",
                        fa: "عالی",
                        ru: "Отлично"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_hukuk_9",
          type: "boss",
          title: {
            tr: "Bölüm Sonu Canavarı",
            en: "Boss Fight",
            ar: "زعيم النهاية",
            fa: "غول آخر",
            ru: "Босс-битва"
          },
          xpReward: 75,
          coinReward: 40,
          exercises: [
            {
              id: "a2i_hukuk_9_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_9_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_9_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_9_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_hukuk_9_wo_0",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_hukuk_9_wo_1",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_hukuk_9_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            },
            {
              id: "a2i_hukuk_9_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            }
          ]
        }
      ]
    },
    {
      id: "a2i_seyahat",
      emoji: "✈️",
      color: "from-sky-500 to-cyan-600",
      title: {
        tr: "Seyahat",
        en: "Travel",
        ar: "سفر",
        fa: "سفر",
        ru: "Путешествие"
      },
      description: {
        tr: "Seyahat ve tatil",
        en: "Travel and holidays",
        ar: "السفر والعطلات",
        fa: "سفر و تعطیلات",
        ru: "Путешествия и отпуск"
      },
      guidebook: {
        vocabulary: [
          {
            word: "gezi",
            translation: {
              tr: "gezi",
              en: "trip",
              ar: "رحلة",
              fa: "سفر",
              ru: "поездка"
            }
          },
          {
            word: "tur",
            translation: {
              tr: "tur",
              en: "tour",
              ar: "جولة",
              fa: "تور",
              ru: "тур"
            }
          },
          {
            word: "rehber",
            translation: {
              tr: "rehber",
              en: "guide",
              ar: "دليل",
              fa: "راهنما",
              ru: "гид"
            }
          },
          {
            word: "müze",
            translation: {
              tr: "müze",
              en: "museum",
              ar: "متحف",
              fa: "موزه",
              ru: "музей"
            }
          },
          {
            word: "bilet",
            translation: {
              tr: "bilet",
              en: "ticket",
              ar: "تذكرة",
              fa: "بلیط",
              ru: "билет"
            }
          },
          {
            word: "ücret",
            translation: {
              tr: "ücret",
              en: "fee",
              ar: "أجرة",
              fa: "هزینه",
              ru: "плата"
            }
          },
          {
            word: "harita",
            translation: {
              tr: "harita",
              en: "map",
              ar: "خريطة",
              fa: "نقشه",
              ru: "карта"
            }
          },
          {
            word: "giriş",
            translation: {
              tr: "giriş",
              en: "entrance",
              ar: "دخول",
              fa: "ورودی",
              ru: "вход"
            }
          },
          {
            word: "konaklamak",
            translation: {
              tr: "konaklamak",
              en: "to stay",
              ar: "إقامة",
              fa: "اقامت",
              ru: "проживать"
            }
          },
          {
            word: "rezervasyon",
            translation: {
              tr: "rezervasyon",
              en: "reservation",
              ar: "حجز",
              fa: "رزرو",
              ru: "бронирование"
            }
          }
        ],
        keyPhrases: [
          {
            phrase: "Müze giriş ücreti ne kadar?",
            translation: {
              tr: "Müze giriş ücreti ne kadar?",
              en: "How much is the museum entrance fee?",
              ar: "كم رسوم دخول المتحف؟",
              fa: "هزینه ورودی موزه چقدر است؟",
              ru: "Сколько стоит вход в музей?"
            }
          },
          {
            phrase: "İki kişilik oda istiyorum.",
            translation: {
              tr: "İki kişilik oda istiyorum.",
              en: "I want a double room.",
              ar: "أريد غرفة مزدوجة.",
              fa: "اتاق دو نفره می‌خواهم.",
              ru: "Я хочу двухместный номер."
            }
          },
          {
            phrase: "Turlar saat kaçta başlıyor?",
            translation: {
              tr: "Turlar saat kaçta başlıyor?",
              en: "What time do the tours start?",
              ar: "متى تبدأ الجولات؟",
              fa: "تورها چه ساعتی شروع می‌شوند؟",
              ru: "Во сколько начинаются туры?"
            }
          },
          {
            phrase: "Haritadan gösterebilir misiniz?",
            translation: {
              tr: "Haritadan gösterebilir misiniz?",
              en: "Can you show it on the map?",
              ar: "هل يمكنك إظهاره على الخريطة؟",
              fa: "می‌توانید روی نقشه نشان دهید؟",
              ru: "Можете показать на карте?"
            }
          },
          {
            phrase: "Rezervasyonum vardı.",
            translation: {
              tr: "Rezervasyonum vardı.",
              en: "I had a reservation.",
              ar: "كان لدي حجز.",
              fa: "رزرو داشتم.",
              ru: "У меня была бронь."
            }
          }
        ],
        grammarNotes: [
          {
            title: {
              tr: "Dolaylı Anlatım",
              en: "Reported Speech",
              ar: "الكلام المنقول",
              fa: "نقل قول غیرمستقیم",
              ru: "Косвенная речь"
            },
            explanation: {
              tr: "Dedi ki",
              en: "Said that",
              ar: "قال أن",
              fa: "گفت که",
              ru: "Сказал, что"
            }
          },
          {
            title: {
              tr: "Karşılaştırma",
              en: "Comparisons",
              ar: "مقارنة",
              fa: "مقایسه",
              ru: "Сравнения"
            },
            explanation: {
              tr: "Daha, en",
              en: "More, most",
              ar: "أكثر، الأكثر",
              fa: "بیشتر، بیشترین",
              ru: "Более, самый"
            }
          }
        ]
      },
      lessons: [
        {
          id: "a2i_seyahat_1",
          type: "vocabulary",
          title: {
            tr: "Kelime 1",
            en: "Vocab 1",
            ar: "مفردات 1",
            fa: "واژگان ۱",
            ru: "Словарь 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_seyahat_1_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "gezi",
                    en: "gezi",
                    ar: "gezi",
                    fa: "gezi",
                    ru: "gezi"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_1_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "tur",
                    en: "tur",
                    ar: "tur",
                    fa: "tur",
                    ru: "tur"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_1_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "rehber",
                    en: "rehber",
                    ar: "rehber",
                    fa: "rehber",
                    ru: "rehber"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_1_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "müze",
                    en: "müze",
                    ar: "müze",
                    fa: "müze",
                    ru: "müze"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_1_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "bilet",
                    en: "bilet",
                    ar: "bilet",
                    fa: "bilet",
                    ru: "bilet"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_seyahat_2",
          type: "practice",
          title: {
            tr: "Eşleştirme 1",
            en: "Matching 1",
            ar: "مطابقة 1",
            fa: "تطابق ۱",
            ru: "Сопоставление 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_seyahat_2_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Kelimeleri eşleştirin",
                en: "Match words",
                ar: "طابق الكلمات",
                fa: "کلمات را تطبیق دهید",
                ru: "Сопоставьте слова"
              },
              pairs: [
                {
                  left: {
                    tr: "gezi",
                    en: "gezi",
                    ar: "gezi",
                    fa: "gezi",
                    ru: "gezi"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "tur",
                    en: "tur",
                    ar: "tur",
                    fa: "tur",
                    ru: "tur"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "rehber",
                    en: "rehber",
                    ar: "rehber",
                    fa: "rehber",
                    ru: "rehber"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "müze",
                    en: "müze",
                    ar: "müze",
                    fa: "müze",
                    ru: "müze"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "bilet",
                    en: "bilet",
                    ar: "bilet",
                    fa: "bilet",
                    ru: "bilet"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_seyahat_3",
          type: "vocabulary",
          title: {
            tr: "Kelime 2",
            en: "Vocab 2",
            ar: "مفردات 2",
            fa: "واژگان ۲",
            ru: "Словарь 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_seyahat_3_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "ücret",
                    en: "ücret",
                    ar: "ücret",
                    fa: "ücret",
                    ru: "ücret"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_3_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "harita",
                    en: "harita",
                    ar: "harita",
                    fa: "harita",
                    ru: "harita"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_3_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "giriş",
                    en: "giriş",
                    ar: "giriş",
                    fa: "giriş",
                    ru: "giriş"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_3_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "konaklamak",
                    en: "konaklamak",
                    ar: "konaklamak",
                    fa: "konaklamak",
                    ru: "konaklamak"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_3_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "rezervasyon",
                    en: "rezervasyon",
                    ar: "rezervasyon",
                    fa: "rezervasyon",
                    ru: "rezervasyon"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_seyahat_4",
          type: "rpg",
          title: {
            tr: "Senaryo 1",
            en: "Scenario 1",
            ar: "سيناريو 1",
            fa: "سناریو ۱",
            ru: "Сценарий 1"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_seyahat_4_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Senaryo Başlıyor",
                en: "Scenario Begins",
                ar: "يبدأ السيناريو",
                fa: "سناریو شروع می‌شود",
                ru: "Сценарий начинается"
              },
              startNodeId: "node_1",
              nodes: [
                {
                  id: "node_1",
                  npcText: {
                    tr: "Merhaba.",
                    en: "Hello.",
                    ar: "مرحبا.",
                    fa: "سلام.",
                    ru: "Привет."
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Merhaba",
                      hint: {
                        tr: "Merhaba",
                        en: "Hello",
                        ar: "مرحبا",
                        fa: "سلام",
                        ru: "Привет"
                      },
                      nextNodeId: "node_2",
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: "node_2"
                },
                {
                  id: "node_2",
                  npcText: {
                    tr: "Nasılsın?",
                    en: "How are you?",
                    ar: "كيف حالك؟",
                    fa: "حالت چطور است؟",
                    ru: "Как дела?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "İyiyim",
                      hint: {
                        tr: "İyiyim",
                        en: "I am fine",
                        ar: "أنا بخير",
                        fa: "خوبم",
                        ru: "Я в порядке"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_seyahat_5",
          type: "grammar",
          title: {
            tr: "Cümleler 1",
            en: "Sentences 1",
            ar: "جمل 1",
            fa: "جملات ۱",
            ru: "Предложения 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_seyahat_5_wo_0",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_seyahat_5_wo_1",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_seyahat_5_wo_2",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_seyahat_5_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            },
            {
              id: "a2i_seyahat_5_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            }
          ]
        },
        {
          id: "a2i_seyahat_6",
          type: "vocabulary",
          title: {
            tr: "Kelime 3",
            en: "Vocab 3",
            ar: "مفردات 3",
            fa: "واژگان ۳",
            ru: "Словарь 3"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_seyahat_6_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_6_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_6_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_6_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_6_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_seyahat_7",
          type: "practice",
          title: {
            tr: "Eşleştirme 2",
            en: "Matching 2",
            ar: "مطابقة 2",
            fa: "تطابق ۲",
            ru: "Сопоставление 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_seyahat_7_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Eşleştir",
                en: "Match",
                ar: "طابق",
                fa: "تطبیق",
                ru: "Сопоставьте"
              },
              pairs: [
                {
                  left: {
                    tr: "rehber",
                    en: "word 0",
                    ar: "كلمة 0",
                    fa: "کلمه 0",
                    ru: "слово 0"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "müze",
                    en: "word 1",
                    ar: "كلمة 1",
                    fa: "کلمه 1",
                    ru: "слово 1"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "bilet",
                    en: "word 2",
                    ar: "كلمة 2",
                    fa: "کلمه 2",
                    ru: "слово 2"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "ücret",
                    en: "word 3",
                    ar: "كلمة 3",
                    fa: "کلمه 3",
                    ru: "слово 3"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "harita",
                    en: "word 4",
                    ar: "كلمة 4",
                    fa: "کلمه 4",
                    ru: "слово 4"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_seyahat_8",
          type: "rpg",
          title: {
            tr: "Senaryo 2",
            en: "Scenario 2",
            ar: "سيناريو 2",
            fa: "سناریو ۲",
            ru: "Сценарий 2"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_seyahat_8_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Devam",
                en: "Continue",
                ar: "استمر",
                fa: "ادامه",
                ru: "Продолжить"
              },
              startNodeId: "n1",
              nodes: [
                {
                  id: "n1",
                  npcText: {
                    tr: "Ne düşünüyorsun?",
                    en: "What do you think?",
                    ar: "ما رأيك؟",
                    fa: "چه فکر می‌کنی؟",
                    ru: "Что вы думаете?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Harika",
                      hint: {
                        tr: "Harika",
                        en: "Great",
                        ar: "عظيم",
                        fa: "عالی",
                        ru: "Отлично"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_seyahat_9",
          type: "boss",
          title: {
            tr: "Bölüm Sonu Canavarı",
            en: "Boss Fight",
            ar: "زعيم النهاية",
            fa: "غول آخر",
            ru: "Босс-битва"
          },
          xpReward: 75,
          coinReward: 40,
          exercises: [
            {
              id: "a2i_seyahat_9_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_9_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_9_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_9_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_seyahat_9_wo_0",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_seyahat_9_wo_1",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_seyahat_9_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            },
            {
              id: "a2i_seyahat_9_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            }
          ]
        }
      ]
    },
    {
      id: "a2i_kultur",
      emoji: "🎭",
      color: "from-fuchsia-500 to-pink-600",
      title: {
        tr: "Kültür & Gelenekler",
        en: "Culture & Customs",
        ar: "الثقافة والتقاليد",
        fa: "فرهنگ و رسوم",
        ru: "Культура и обычаи"
      },
      description: {
        tr: "Kültürel olaylar",
        en: "Cultural events",
        ar: "أحداث ثقافية",
        fa: "رویدادهای فرهنگی",
        ru: "Культурные события"
      },
      guidebook: {
        vocabulary: [
          {
            word: "bayram",
            translation: {
              tr: "bayram",
              en: "holiday",
              ar: "عيد",
              fa: "عید",
              ru: "праздник"
            }
          },
          {
            word: "kutlama",
            translation: {
              tr: "kutlama",
              en: "celebration",
              ar: "احتفال",
              fa: "جشن",
              ru: "празднование"
            }
          },
          {
            word: "düğün",
            translation: {
              tr: "düğün",
              en: "wedding",
              ar: "زفاف",
              fa: "عروسی",
              ru: "свадьба"
            }
          },
          {
            word: "cenaze",
            translation: {
              tr: "cenaze",
              en: "funeral",
              ar: "جنازة",
              fa: "تشییع جنازه",
              ru: "похороны"
            }
          },
          {
            word: "gelenekler",
            translation: {
              tr: "gelenekler",
              en: "traditions",
              ar: "تقاليد",
              fa: "رسوم",
              ru: "традиции"
            }
          },
          {
            word: "hediye",
            translation: {
              tr: "hediye",
              en: "gift",
              ar: "هدية",
              fa: "هدیه",
              ru: "подарок"
            }
          },
          {
            word: "davet",
            translation: {
              tr: "davet",
              en: "invitation",
              ar: "دعوة",
              fa: "دعوت",
              ru: "приглашение"
            }
          },
          {
            word: "tebrikler",
            translation: {
              tr: "tebrikler",
              en: "congratulations",
              ar: "تهانينا",
              fa: "تبریک",
              ru: "поздравления"
            }
          },
          {
            word: "taziye",
            translation: {
              tr: "taziye",
              en: "condolence",
              ar: "تعزية",
              fa: "تسلیت",
              ru: "соболезнование"
            }
          },
          {
            word: "ziyaret",
            translation: {
              tr: "ziyaret",
              en: "visit",
              ar: "زيارة",
              fa: "دیدار",
              ru: "визит"
            }
          }
        ],
        keyPhrases: [
          {
            phrase: "Bayramınız kutlu olsun.",
            translation: {
              tr: "Bayramınız kutlu olsun.",
              en: "Happy Eid/Holiday.",
              ar: "عيدكم مبارك.",
              fa: "عیدتان مبارک.",
              ru: "С праздником."
            }
          },
          {
            phrase: "Başınız sağ olsun.",
            translation: {
              tr: "Başınız sağ olsun.",
              en: "My condolences.",
              ar: "البقاء لله.",
              fa: "تسلیت می‌گویم.",
              ru: "Мои соболезнования."
            }
          },
          {
            phrase: "Tebrik ederim.",
            translation: {
              tr: "Tebrik ederim.",
              en: "Congratulations.",
              ar: "مبروك.",
              fa: "تبریک می‌گویم.",
              ru: "Поздравляю."
            }
          },
          {
            phrase: "Allah mesut etsin.",
            translation: {
              tr: "Allah mesut etsin.",
              en: "May God make you happy (wedding).",
              ar: "بالرفاه والبنين.",
              fa: "خوشبخت بشوید.",
              ru: "Да благословит вас Бог."
            }
          },
          {
            phrase: "Ziyaretinize geldik.",
            translation: {
              tr: "Ziyaretinize geldik.",
              en: "We came to visit you.",
              ar: "جئنا لزيارتكم.",
              fa: "برای دیدن شما آمدیم.",
              ru: "Мы пришли навестить вас."
            }
          }
        ],
        grammarNotes: [
          {
            title: {
              tr: "Dilek Kipi",
              en: "Optative Mood",
              ar: "التمني",
              fa: "وجه تمنایی",
              ru: "Желательное наклонение"
            },
            explanation: {
              tr: "Ayım, eyle",
              en: "Let me, let us",
              ar: "دعني",
              fa: "بگذارید",
              ru: "Давайте"
            }
          },
          {
            title: {
              tr: "İsim Tamlamaları",
              en: "Noun Compounds",
              ar: "الإضافة",
              fa: "ترکیبات اسمی",
              ru: "Именные словосочетания"
            },
            explanation: {
              tr: "Kapı kolu",
              en: "Door handle",
              ar: "مقبض الباب",
              fa: "دستگیره در",
              ru: "Дверная ручка"
            }
          }
        ]
      },
      lessons: [
        {
          id: "a2i_kultur_1",
          type: "vocabulary",
          title: {
            tr: "Kelime 1",
            en: "Vocab 1",
            ar: "مفردات 1",
            fa: "واژگان ۱",
            ru: "Словарь 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_kultur_1_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "bayram",
                    en: "bayram",
                    ar: "bayram",
                    fa: "bayram",
                    ru: "bayram"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_1_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "kutlama",
                    en: "kutlama",
                    ar: "kutlama",
                    fa: "kutlama",
                    ru: "kutlama"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_1_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "düğün",
                    en: "düğün",
                    ar: "düğün",
                    fa: "düğün",
                    ru: "düğün"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_1_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "cenaze",
                    en: "cenaze",
                    ar: "cenaze",
                    fa: "cenaze",
                    ru: "cenaze"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_1_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "gelenekler",
                    en: "gelenekler",
                    ar: "gelenekler",
                    fa: "gelenekler",
                    ru: "gelenekler"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_kultur_2",
          type: "practice",
          title: {
            tr: "Eşleştirme 1",
            en: "Matching 1",
            ar: "مطابقة 1",
            fa: "تطابق ۱",
            ru: "Сопоставление 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_kultur_2_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Kelimeleri eşleştirin",
                en: "Match words",
                ar: "طابق الكلمات",
                fa: "کلمات را تطبیق دهید",
                ru: "Сопоставьте слова"
              },
              pairs: [
                {
                  left: {
                    tr: "bayram",
                    en: "bayram",
                    ar: "bayram",
                    fa: "bayram",
                    ru: "bayram"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "kutlama",
                    en: "kutlama",
                    ar: "kutlama",
                    fa: "kutlama",
                    ru: "kutlama"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "düğün",
                    en: "düğün",
                    ar: "düğün",
                    fa: "düğün",
                    ru: "düğün"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "cenaze",
                    en: "cenaze",
                    ar: "cenaze",
                    fa: "cenaze",
                    ru: "cenaze"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "gelenekler",
                    en: "gelenekler",
                    ar: "gelenekler",
                    fa: "gelenekler",
                    ru: "gelenekler"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_kultur_3",
          type: "vocabulary",
          title: {
            tr: "Kelime 2",
            en: "Vocab 2",
            ar: "مفردات 2",
            fa: "واژگان ۲",
            ru: "Словарь 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_kultur_3_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "hediye",
                    en: "hediye",
                    ar: "hediye",
                    fa: "hediye",
                    ru: "hediye"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_3_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "davet",
                    en: "davet",
                    ar: "davet",
                    fa: "davet",
                    ru: "davet"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_3_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "tebrikler",
                    en: "tebrikler",
                    ar: "tebrikler",
                    fa: "tebrikler",
                    ru: "tebrikler"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_3_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "taziye",
                    en: "taziye",
                    ar: "taziye",
                    fa: "taziye",
                    ru: "taziye"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_3_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "ziyaret",
                    en: "ziyaret",
                    ar: "ziyaret",
                    fa: "ziyaret",
                    ru: "ziyaret"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_kultur_4",
          type: "rpg",
          title: {
            tr: "Senaryo 1",
            en: "Scenario 1",
            ar: "سيناريو 1",
            fa: "سناریو ۱",
            ru: "Сценарий 1"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_kultur_4_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Senaryo Başlıyor",
                en: "Scenario Begins",
                ar: "يبدأ السيناريو",
                fa: "سناریو شروع می‌شود",
                ru: "Сценарий начинается"
              },
              startNodeId: "node_1",
              nodes: [
                {
                  id: "node_1",
                  npcText: {
                    tr: "Merhaba.",
                    en: "Hello.",
                    ar: "مرحبا.",
                    fa: "سلام.",
                    ru: "Привет."
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Merhaba",
                      hint: {
                        tr: "Merhaba",
                        en: "Hello",
                        ar: "مرحبا",
                        fa: "سلام",
                        ru: "Привет"
                      },
                      nextNodeId: "node_2",
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: "node_2"
                },
                {
                  id: "node_2",
                  npcText: {
                    tr: "Nasılsın?",
                    en: "How are you?",
                    ar: "كيف حالك؟",
                    fa: "حالت چطور است؟",
                    ru: "Как дела?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "İyiyim",
                      hint: {
                        tr: "İyiyim",
                        en: "I am fine",
                        ar: "أنا بخير",
                        fa: "خوبم",
                        ru: "Я в порядке"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_kultur_5",
          type: "grammar",
          title: {
            tr: "Cümleler 1",
            en: "Sentences 1",
            ar: "جمل 1",
            fa: "جملات ۱",
            ru: "Предложения 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_kultur_5_wo_0",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_kultur_5_wo_1",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_kultur_5_wo_2",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_kultur_5_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            },
            {
              id: "a2i_kultur_5_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            }
          ]
        },
        {
          id: "a2i_kultur_6",
          type: "vocabulary",
          title: {
            tr: "Kelime 3",
            en: "Vocab 3",
            ar: "مفردات 3",
            fa: "واژگان ۳",
            ru: "Словарь 3"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_kultur_6_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_6_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_6_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_6_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_6_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_kultur_7",
          type: "practice",
          title: {
            tr: "Eşleştirme 2",
            en: "Matching 2",
            ar: "مطابقة 2",
            fa: "تطابق ۲",
            ru: "Сопоставление 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_kultur_7_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Eşleştir",
                en: "Match",
                ar: "طابق",
                fa: "تطبیق",
                ru: "Сопоставьте"
              },
              pairs: [
                {
                  left: {
                    tr: "düğün",
                    en: "word 0",
                    ar: "كلمة 0",
                    fa: "کلمه 0",
                    ru: "слово 0"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "cenaze",
                    en: "word 1",
                    ar: "كلمة 1",
                    fa: "کلمه 1",
                    ru: "слово 1"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "gelenekler",
                    en: "word 2",
                    ar: "كلمة 2",
                    fa: "کلمه 2",
                    ru: "слово 2"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "hediye",
                    en: "word 3",
                    ar: "كلمة 3",
                    fa: "کلمه 3",
                    ru: "слово 3"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "davet",
                    en: "word 4",
                    ar: "كلمة 4",
                    fa: "کلمه 4",
                    ru: "слово 4"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_kultur_8",
          type: "rpg",
          title: {
            tr: "Senaryo 2",
            en: "Scenario 2",
            ar: "سيناريو 2",
            fa: "سناریو ۲",
            ru: "Сценарий 2"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_kultur_8_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Devam",
                en: "Continue",
                ar: "استمر",
                fa: "ادامه",
                ru: "Продолжить"
              },
              startNodeId: "n1",
              nodes: [
                {
                  id: "n1",
                  npcText: {
                    tr: "Ne düşünüyorsun?",
                    en: "What do you think?",
                    ar: "ما رأيك؟",
                    fa: "چه فکر می‌کنی؟",
                    ru: "Что вы думаете?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Harika",
                      hint: {
                        tr: "Harika",
                        en: "Great",
                        ar: "عظيم",
                        fa: "عالی",
                        ru: "Отлично"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_kultur_9",
          type: "boss",
          title: {
            tr: "Bölüm Sonu Canavarı",
            en: "Boss Fight",
            ar: "زعيم النهاية",
            fa: "غول آخر",
            ru: "Босс-битва"
          },
          xpReward: 75,
          coinReward: 40,
          exercises: [
            {
              id: "a2i_kultur_9_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_9_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_9_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_9_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_kultur_9_wo_0",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_kultur_9_wo_1",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_kultur_9_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            },
            {
              id: "a2i_kultur_9_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            }
          ]
        }
      ]
    },
    {
      id: "a2i_ileri",
      emoji: "💬",
      color: "from-indigo-500 to-violet-600",
      title: {
        tr: "İleri Konuşma",
        en: "Advanced Conversation",
        ar: "محادثة متقدمة",
        fa: "مکالمه پیشرفته",
        ru: "Продвинутый разговор"
      },
      description: {
        tr: "Fikir beyan etme",
        en: "Expressing opinions",
        ar: "التعبير عن الآراء",
        fa: "ابراز عقیده",
        ru: "Выражение мнений"
      },
      guidebook: {
        vocabulary: [
          {
            word: "fikir",
            translation: {
              tr: "fikir",
              en: "idea/opinion",
              ar: "فكرة/رأي",
              fa: "ایده/نظر",
              ru: "идея/мнение"
            }
          },
          {
            word: "tartışma",
            translation: {
              tr: "tartışma",
              en: "discussion",
              ar: "نقاش",
              fa: "بحث",
              ru: "обсуждение"
            }
          },
          {
            word: "öneri",
            translation: {
              tr: "öneri",
              en: "suggestion",
              ar: "اقتراح",
              fa: "پیشنهاد",
              ru: "предложение"
            }
          },
          {
            word: "anlaşmazlık",
            translation: {
              tr: "anlaşmazlık",
              en: "disagreement",
              ar: "خلاف",
              fa: "اختلاف",
              ru: "разногласие"
            }
          },
          {
            word: "uzlaşma",
            translation: {
              tr: "uzlaşma",
              en: "compromise",
              ar: "تسوية",
              fa: "سازش",
              ru: "компромисс"
            }
          },
          {
            word: "kanaat",
            translation: {
              tr: "kanaat",
              en: "conviction",
              ar: "قناعة",
              fa: "اعتقاد",
              ru: "убеждение"
            }
          },
          {
            word: "savunmak",
            translation: {
              tr: "savunmak",
              en: "to defend",
              ar: "دفاع",
              fa: "دفاع کردن",
              ru: "защищать"
            }
          },
          {
            word: "katılmak",
            translation: {
              tr: "katılmak",
              en: "to agree/join",
              ar: "موافقة/انضمام",
              fa: "موافقت کردن",
              ru: "соглашаться/участвовать"
            }
          },
          {
            word: "konu",
            translation: {
              tr: "konu",
              en: "subject",
              ar: "موضوع",
              fa: "موضوع",
              ru: "тема"
            }
          },
          {
            word: "özetlemek",
            translation: {
              tr: "özetlemek",
              en: "to summarize",
              ar: "تلخيص",
              fa: "خلاصه کردن",
              ru: "резюмировать"
            }
          }
        ],
        keyPhrases: [
          {
            phrase: "Bence haklısınız.",
            translation: {
              tr: "Bence haklısınız.",
              en: "I think you are right.",
              ar: "أعتقد أنك على حق.",
              fa: "به نظرم حق با شماست.",
              ru: "Я думаю, вы правы."
            }
          },
          {
            phrase: "Size katılmıyorum.",
            translation: {
              tr: "Size katılmıyorum.",
              en: "I disagree with you.",
              ar: "لا أتفق معك.",
              fa: "با شما موافق نیستم.",
              ru: "Я с вами не согласен."
            }
          },
          {
            phrase: "Benim fikrim şu yönde...",
            translation: {
              tr: "Benim fikrim şu yönde...",
              en: "My opinion is...",
              ar: "رأيي هو...",
              fa: "نظر من این است...",
              ru: "Мое мнение..."
            }
          },
          {
            phrase: "Kısaca özetlemek gerekirse...",
            translation: {
              tr: "Kısaca özetlemek gerekirse...",
              en: "To summarize briefly...",
              ar: "باختصار...",
              fa: "به طور خلاصه...",
              ru: "Вкратце..."
            }
          },
          {
            phrase: "Bu konuda ne düşünüyorsunuz?",
            translation: {
              tr: "Bu konuda ne düşünüyorsunuz?",
              en: "What do you think about this?",
              ar: "ما رأيك في هذا؟",
              fa: "در این مورد چه فکر می‌کنید؟",
              ru: "Что вы думаете об этом?"
            }
          }
        ],
        grammarNotes: [
          {
            title: {
              tr: "Bağlaçlar",
              en: "Conjunctions",
              ar: "الروابط",
              fa: "حروف ربط",
              ru: "Союзы"
            },
            explanation: {
              tr: "Ancak, oysa",
              en: "However, whereas",
              ar: "ومع ذلك",
              fa: "با این حال",
              ru: "Однако"
            }
          },
          {
            title: {
              tr: "Şart Kipleri",
              en: "Conditionals",
              ar: "الشرط",
              fa: "شرطی",
              ru: "Условные наклонения"
            },
            explanation: {
              tr: "Eğer olursa",
              en: "If it happens",
              ar: "إذا حدث",
              fa: "اگر بشود",
              ru: "Если случится"
            }
          }
        ]
      },
      lessons: [
        {
          id: "a2i_ileri_1",
          type: "vocabulary",
          title: {
            tr: "Kelime 1",
            en: "Vocab 1",
            ar: "مفردات 1",
            fa: "واژگان ۱",
            ru: "Словарь 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_ileri_1_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "fikir",
                    en: "fikir",
                    ar: "fikir",
                    fa: "fikir",
                    ru: "fikir"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_1_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "tartışma",
                    en: "tartışma",
                    ar: "tartışma",
                    fa: "tartışma",
                    ru: "tartışma"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_1_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "öneri",
                    en: "öneri",
                    ar: "öneri",
                    fa: "öneri",
                    ru: "öneri"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_1_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "anlaşmazlık",
                    en: "anlaşmazlık",
                    ar: "anlaşmazlık",
                    fa: "anlaşmazlık",
                    ru: "anlaşmazlık"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_1_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "uzlaşma",
                    en: "uzlaşma",
                    ar: "uzlaşma",
                    fa: "uzlaşma",
                    ru: "uzlaşma"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_ileri_2",
          type: "practice",
          title: {
            tr: "Eşleştirme 1",
            en: "Matching 1",
            ar: "مطابقة 1",
            fa: "تطابق ۱",
            ru: "Сопоставление 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_ileri_2_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Kelimeleri eşleştirin",
                en: "Match words",
                ar: "طابق الكلمات",
                fa: "کلمات را تطبیق دهید",
                ru: "Сопоставьте слова"
              },
              pairs: [
                {
                  left: {
                    tr: "fikir",
                    en: "fikir",
                    ar: "fikir",
                    fa: "fikir",
                    ru: "fikir"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "tartışma",
                    en: "tartışma",
                    ar: "tartışma",
                    fa: "tartışma",
                    ru: "tartışma"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "öneri",
                    en: "öneri",
                    ar: "öneri",
                    fa: "öneri",
                    ru: "öneri"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "anlaşmazlık",
                    en: "anlaşmazlık",
                    ar: "anlaşmazlık",
                    fa: "anlaşmazlık",
                    ru: "anlaşmazlık"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "uzlaşma",
                    en: "uzlaşma",
                    ar: "uzlaşma",
                    fa: "uzlaşma",
                    ru: "uzlaşma"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_ileri_3",
          type: "vocabulary",
          title: {
            tr: "Kelime 2",
            en: "Vocab 2",
            ar: "مفردات 2",
            fa: "واژگان ۲",
            ru: "Словарь 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_ileri_3_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "kanaat",
                    en: "kanaat",
                    ar: "kanaat",
                    fa: "kanaat",
                    ru: "kanaat"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_3_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "savunmak",
                    en: "savunmak",
                    ar: "savunmak",
                    fa: "savunmak",
                    ru: "savunmak"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_3_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "katılmak",
                    en: "katılmak",
                    ar: "katılmak",
                    fa: "katılmak",
                    ru: "katılmak"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_3_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "konu",
                    en: "konu",
                    ar: "konu",
                    fa: "konu",
                    ru: "konu"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_3_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru çeviriyi seçin",
                en: "Select correct translation",
                ar: "اختر الترجمة الصحيحة",
                fa: "ترجمه صحیح را انتخاب کنید",
                ru: "Выберите правильный перевод"
              },
              options: [
                {
                  text: {
                    tr: "özetlemek",
                    en: "özetlemek",
                    ar: "özetlemek",
                    fa: "özetlemek",
                    ru: "özetlemek"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "yanlış",
                    en: "wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_ileri_4",
          type: "rpg",
          title: {
            tr: "Senaryo 1",
            en: "Scenario 1",
            ar: "سيناريو 1",
            fa: "سناریو ۱",
            ru: "Сценарий 1"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_ileri_4_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Senaryo Başlıyor",
                en: "Scenario Begins",
                ar: "يبدأ السيناريو",
                fa: "سناریو شروع می‌شود",
                ru: "Сценарий начинается"
              },
              startNodeId: "node_1",
              nodes: [
                {
                  id: "node_1",
                  npcText: {
                    tr: "Merhaba.",
                    en: "Hello.",
                    ar: "مرحبا.",
                    fa: "سلام.",
                    ru: "Привет."
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Merhaba",
                      hint: {
                        tr: "Merhaba",
                        en: "Hello",
                        ar: "مرحبا",
                        fa: "سلام",
                        ru: "Привет"
                      },
                      nextNodeId: "node_2",
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: "node_2"
                },
                {
                  id: "node_2",
                  npcText: {
                    tr: "Nasılsın?",
                    en: "How are you?",
                    ar: "كيف حالك؟",
                    fa: "حالت چطور است؟",
                    ru: "Как дела?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "İyiyim",
                      hint: {
                        tr: "İyiyim",
                        en: "I am fine",
                        ar: "أنا بخير",
                        fa: "خوبم",
                        ru: "Я в порядке"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_ileri_5",
          type: "grammar",
          title: {
            tr: "Cümleler 1",
            en: "Sentences 1",
            ar: "جمل 1",
            fa: "جملات ۱",
            ru: "Предложения 1"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_ileri_5_wo_0",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_ileri_5_wo_1",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_ileri_5_wo_2",
              type: "word_order",
              prompt: {
                tr: "Cümleyi kur",
                en: "Build sentence",
                ar: "ابن الجملة",
                fa: "جمله بسازید",
                ru: "Постройте предложение"
              },
              words: [
                {
                  tr: "Ben",
                  en: "I",
                  ar: "أنا",
                  fa: "من",
                  ru: "Я"
                },
                {
                  tr: "gidiyorum",
                  en: "go",
                  ar: "أذهب",
                  fa: "می‌روم",
                  ru: "иду"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_ileri_5_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            },
            {
              id: "a2i_ileri_5_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} gidiyor.",
                en: "He {blank} goes.",
                ar: "هو {blank} يذهب.",
                fa: "او {blank} می‌رود.",
                ru: "Он {blank} идет."
              },
              correctAnswer: "oraya",
              hint: {
                tr: "oraya",
                en: "there",
                ar: "إلى هناك",
                fa: "آنجا",
                ru: "туда"
              }
            }
          ]
        },
        {
          id: "a2i_ileri_6",
          type: "vocabulary",
          title: {
            tr: "Kelime 3",
            en: "Vocab 3",
            ar: "مفردات 3",
            fa: "واژگان ۳",
            ru: "Словарь 3"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_ileri_6_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_6_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_6_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_6_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_6_mc_4",
              type: "multiple_choice",
              question: {
                tr: "Doğru kelime",
                en: "Correct word",
                ar: "الكلمة الصحيحة",
                fa: "کلمه صحیح",
                ru: "Правильное слово"
              },
              options: [
                {
                  text: {
                    tr: "Doğru",
                    en: "Right",
                    ar: "صحيح",
                    fa: "درست",
                    ru: "Правильно"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "Yanlış",
                    en: "Wrong",
                    ar: "خطأ",
                    fa: "غلط",
                    ru: "Неправильно"
                  },
                  isCorrect: false
                }
              ]
            }
          ]
        },
        {
          id: "a2i_ileri_7",
          type: "practice",
          title: {
            tr: "Eşleştirme 2",
            en: "Matching 2",
            ar: "مطابقة 2",
            fa: "تطابق ۲",
            ru: "Сопоставление 2"
          },
          xpReward: 25,
          coinReward: 12,
          exercises: [
            {
              id: "a2i_ileri_7_dd_0",
              type: "drag_drop",
              prompt: {
                tr: "Eşleştir",
                en: "Match",
                ar: "طابق",
                fa: "تطبیق",
                ru: "Сопоставьте"
              },
              pairs: [
                {
                  left: {
                    tr: "öneri",
                    en: "word 0",
                    ar: "كلمة 0",
                    fa: "کلمه 0",
                    ru: "слово 0"
                  },
                  right: {
                    tr: "anlam 0",
                    en: "meaning 0",
                    ar: "معنى 0",
                    fa: "معنی 0",
                    ru: "значение 0"
                  }
                },
                {
                  left: {
                    tr: "anlaşmazlık",
                    en: "word 1",
                    ar: "كلمة 1",
                    fa: "کلمه 1",
                    ru: "слово 1"
                  },
                  right: {
                    tr: "anlam 1",
                    en: "meaning 1",
                    ar: "معنى 1",
                    fa: "معنی 1",
                    ru: "значение 1"
                  }
                },
                {
                  left: {
                    tr: "uzlaşma",
                    en: "word 2",
                    ar: "كلمة 2",
                    fa: "کلمه 2",
                    ru: "слово 2"
                  },
                  right: {
                    tr: "anlam 2",
                    en: "meaning 2",
                    ar: "معنى 2",
                    fa: "معنی 2",
                    ru: "значение 2"
                  }
                },
                {
                  left: {
                    tr: "kanaat",
                    en: "word 3",
                    ar: "كلمة 3",
                    fa: "کلمه 3",
                    ru: "слово 3"
                  },
                  right: {
                    tr: "anlam 3",
                    en: "meaning 3",
                    ar: "معنى 3",
                    fa: "معنی 3",
                    ru: "значение 3"
                  }
                },
                {
                  left: {
                    tr: "savunmak",
                    en: "word 4",
                    ar: "كلمة 4",
                    fa: "کلمه 4",
                    ru: "слово 4"
                  },
                  right: {
                    tr: "anlam 4",
                    en: "meaning 4",
                    ar: "معنى 4",
                    fa: "معنی 4",
                    ru: "значение 4"
                  }
                }
              ]
            }
          ]
        },
        {
          id: "a2i_ileri_8",
          type: "rpg",
          title: {
            tr: "Senaryo 2",
            en: "Scenario 2",
            ar: "سيناريو 2",
            fa: "سناریو ۲",
            ru: "Сценарий 2"
          },
          xpReward: 40,
          coinReward: 20,
          exercises: [
            {
              id: "a2i_ileri_8_rpg_0",
              type: "rpg_typing",
              scenarioTitle: {
                tr: "Devam",
                en: "Continue",
                ar: "استمر",
                fa: "ادامه",
                ru: "Продолжить"
              },
              startNodeId: "n1",
              nodes: [
                {
                  id: "n1",
                  npcText: {
                    tr: "Ne düşünüyorsun?",
                    en: "What do you think?",
                    ar: "ما رأيك؟",
                    fa: "چه فکر می‌کنی؟",
                    ru: "Что вы думаете?"
                  },
                  prompt: {
                    tr: "Yanıtla",
                    en: "Reply",
                    ar: "رد",
                    fa: "پاسخ",
                    ru: "Ответить"
                  },
                  matches: [
                    {
                      target: "Harika",
                      hint: {
                        tr: "Harika",
                        en: "Great",
                        ar: "عظيم",
                        fa: "عالی",
                        ru: "Отлично"
                      },
                      nextNodeId: null,
                      deductsHeart: false
                    }
                  ],
                  fallbackNextNodeId: null
                }
              ]
            }
          ]
        },
        {
          id: "a2i_ileri_9",
          type: "boss",
          title: {
            tr: "Bölüm Sonu Canavarı",
            en: "Boss Fight",
            ar: "زعيم النهاية",
            fa: "غول آخر",
            ru: "Босс-битва"
          },
          xpReward: 75,
          coinReward: 40,
          exercises: [
            {
              id: "a2i_ileri_9_mc_0",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_9_mc_1",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_9_mc_2",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_9_mc_3",
              type: "multiple_choice",
              question: {
                tr: "Seçiniz",
                en: "Select",
                ar: "اختر",
                fa: "انتخاب کنید",
                ru: "Выберите"
              },
              options: [
                {
                  text: {
                    tr: "A",
                    en: "A",
                    ar: "A",
                    fa: "A",
                    ru: "A"
                  },
                  isCorrect: true
                },
                {
                  text: {
                    tr: "B",
                    en: "B",
                    ar: "B",
                    fa: "B",
                    ru: "B"
                  },
                  isCorrect: false
                }
              ]
            },
            {
              id: "a2i_ileri_9_wo_0",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_ileri_9_wo_1",
              type: "word_order",
              prompt: {
                tr: "Sırala",
                en: "Order",
                ar: "رتب",
                fa: "مرتب کنید",
                ru: "Упорядочите"
              },
              words: [
                {
                  tr: "Bunu",
                  en: "This",
                  ar: "هذا",
                  fa: "این را",
                  ru: "Это"
                },
                {
                  tr: "yap",
                  en: "do",
                  ar: "افعل",
                  fa: "انجام بده",
                  ru: "делай"
                }
              ],
              correctOrder: [
                0,
                1
              ]
            },
            {
              id: "a2i_ileri_9_fib_0",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            },
            {
              id: "a2i_ileri_9_fib_1",
              type: "fill_in_blank",
              sentenceTemplate: {
                tr: "O {blank} geldi.",
                en: "He came {blank}.",
                ar: "هو جاء {blank}.",
                fa: "او {blank} آمد.",
                ru: "Он пришел {blank}."
              },
              correctAnswer: "hızlıca",
              hint: {
                tr: "hızlıca",
                en: "quickly",
                ar: "بسرعة",
                fa: "سریع",
                ru: "быстро"
              }
            }
          ]
        }
      ]
    }
  ]
};
