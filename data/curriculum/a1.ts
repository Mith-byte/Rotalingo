import type { Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGExercise, TText } from '../types';

export const a1Level: Level = {
  "id": "a1",
  "title": "A1 - Başlangıç (Beginner)",
  "description": "Temel Türkçe (Basic Turkish)",
  "units": [
    {
      "id": "a1_selamlasma",
      "title": "Selamlaşma",
      "description": "Selamlaşma (A1)",
      "emoji": "👋",
      "color": "from-pink-400 to-rose-500",
      "lessons": [
        {
          "id": "a1_selamlasma_1",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_selamlasma_1_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Merhaba",
                "en": "Hello",
                "ar": "مرحباً",
                "fa": "سلام",
                "ru": "Привет"
              },
              "options": [
                {
                  "tr": "Merhaba",
                  "en": "Hello",
                  "ar": "مرحباً",
                  "fa": "سلام",
                  "ru": "Привет"
                },
                {
                  "tr": "Affedersiniz",
                  "en": "Excuse me",
                  "ar": "معذرة",
                  "fa": "ببخشید",
                  "ru": "Извините"
                },
                {
                  "tr": "Özür dilerim",
                  "en": "I apologize",
                  "ar": "أعتذر",
                  "fa": "عذرخواهی می‌کنم",
                  "ru": "Прошу прощения"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_selamlasma_1_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Günaydın",
                "en": "Good morning",
                "ar": "صباح الخير",
                "fa": "صبح بخیر",
                "ru": "Доброе утро"
              },
              "options": [
                {
                  "tr": "Merhaba",
                  "en": "Hello",
                  "ar": "مرحباً",
                  "fa": "سلام",
                  "ru": "Привет"
                },
                {
                  "tr": "Günaydın",
                  "en": "Good morning",
                  "ar": "صباح الخير",
                  "fa": "صبح بخیر",
                  "ru": "Доброе утро"
                },
                {
                  "tr": "İyi günler",
                  "en": "Good day",
                  "ar": "طاب يومك",
                  "fa": "روز بخیر",
                  "ru": "Добрый день"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_selamlasma_1_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "İyi günler",
                "en": "Good day",
                "ar": "طاب يومك",
                "fa": "روز بخیر",
                "ru": "Добрый день"
              },
              "options": [
                {
                  "tr": "Hayır",
                  "en": "No",
                  "ar": "لا",
                  "fa": "نه",
                  "ru": "Нет"
                },
                {
                  "tr": "Evet",
                  "en": "Yes",
                  "ar": "نعم",
                  "fa": "بله",
                  "ru": "Да"
                },
                {
                  "tr": "İyi günler",
                  "en": "Good day",
                  "ar": "طاب يومك",
                  "fa": "روز بخیر",
                  "ru": "Добрый день"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_selamlasma_1_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "İyi akşamlar",
                "en": "Good evening",
                "ar": "مساء الخير",
                "fa": "عصر بخیر",
                "ru": "Добрый вечер"
              },
              "options": [
                {
                  "tr": "İyi akşamlar",
                  "en": "Good evening",
                  "ar": "مساء الخير",
                  "fa": "عصر بخیر",
                  "ru": "Добрый вечер"
                },
                {
                  "tr": "Lütfen",
                  "en": "Please",
                  "ar": "رجاءً",
                  "fa": "لطفاً",
                  "ru": "Пожалуйста"
                },
                {
                  "tr": "Hayır",
                  "en": "No",
                  "ar": "لا",
                  "fa": "نه",
                  "ru": "Нет"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_selamlasma_1_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "İyi geceler",
                "en": "Good night",
                "ar": "تصبح على خير",
                "fa": "شب بخیر",
                "ru": "Спокойной ночи"
              },
              "options": [
                {
                  "tr": "İyi geceler",
                  "en": "Good night",
                  "ar": "تصبح على خير",
                  "fa": "شب بخیر",
                  "ru": "Спокойной ночи"
                },
                {
                  "tr": "Merhaba",
                  "en": "Hello",
                  "ar": "مرحباً",
                  "fa": "سلام",
                  "ru": "Привет"
                },
                {
                  "tr": "Hayır",
                  "en": "No",
                  "ar": "لا",
                  "fa": "نه",
                  "ru": "Нет"
                }
              ],
              "correctAnswerIndex": 0
            }
          ]
        },
        {
          "id": "a1_selamlasma_2",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_selamlasma_2_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Merhaba",
                    "en": "Hello",
                    "ar": "مرحباً",
                    "fa": "سلام",
                    "ru": "Привет"
                  },
                  "translation": {
                    "tr": "Hello",
                    "en": "Hello",
                    "ar": "مرحباً",
                    "fa": "سلام",
                    "ru": "Привет"
                  }
                },
                {
                  "word": {
                    "tr": "Günaydın",
                    "en": "Good morning",
                    "ar": "صباح الخير",
                    "fa": "صبح بخیر",
                    "ru": "Доброе утро"
                  },
                  "translation": {
                    "tr": "Good morning",
                    "en": "Good morning",
                    "ar": "صباح الخير",
                    "fa": "صبح بخیر",
                    "ru": "Доброе утро"
                  }
                },
                {
                  "word": {
                    "tr": "İyi günler",
                    "en": "Good day",
                    "ar": "طاب يومك",
                    "fa": "روز بخیر",
                    "ru": "Добрый день"
                  },
                  "translation": {
                    "tr": "Good day",
                    "en": "Good day",
                    "ar": "طاب يومك",
                    "fa": "روز بخیر",
                    "ru": "Добрый день"
                  }
                },
                {
                  "word": {
                    "tr": "İyi akşamlar",
                    "en": "Good evening",
                    "ar": "مساء الخير",
                    "fa": "عصر بخیر",
                    "ru": "Добрый вечер"
                  },
                  "translation": {
                    "tr": "Good evening",
                    "en": "Good evening",
                    "ar": "مساء الخير",
                    "fa": "عصر بخیر",
                    "ru": "Добрый вечер"
                  }
                },
                {
                  "word": {
                    "tr": "İyi geceler",
                    "en": "Good night",
                    "ar": "تصبح على خير",
                    "fa": "شب بخیر",
                    "ru": "Спокойной ночи"
                  },
                  "translation": {
                    "tr": "Good night",
                    "en": "Good night",
                    "ar": "تصبح على خير",
                    "fa": "شب بخیر",
                    "ru": "Спокойной ночи"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_selamlasma_3",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_selamlasma_3_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Benim adım Ahmet",
                "en": "My name is Ahmet",
                "ar": "اسمي أحمد",
                "fa": "اسم من احمد است",
                "ru": "Меня зовут Ахмет"
              },
              "correctOrder": [
                "Benim",
                "adım",
                "Ahmet"
              ],
              "words": [
                "Benim",
                "adım",
                "Ahmet"
              ]
            },
            {
              "id": "a1_selamlasma_3_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Ben Türkiye'den geliyorum",
                "en": "I come from Turkey",
                "ar": "أنا من تركيا",
                "fa": "من از ترکیه می‌آیم",
                "ru": "Я из Турции"
              },
              "correctOrder": [
                "Ben",
                "Türkiye'den",
                "geliyorum"
              ],
              "words": [
                "Türkiye'den",
                "Ben",
                "geliyorum"
              ]
            },
            {
              "id": "a1_selamlasma_3_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Yirmi yaşındayım",
                "en": "I am twenty years old",
                "ar": "عمري عشرون عاماً",
                "fa": "بیست سالمه",
                "ru": "Мне двадцать лет"
              },
              "correctOrder": [
                "Yirmi",
                "yaşındayım"
              ],
              "words": [
                "yaşındayım",
                "Yirmi"
              ]
            },
            {
              "id": "a1_selamlasma_3_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " öğrenciyim"
              ],
              "missingWord": "Ben",
              "options": [
                "Ben",
                "Yanlış1",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_selamlasma_3_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " oldum"
              ],
              "missingWord": "Memnun",
              "options": [
                "Yanlış2",
                "Memnun",
                "Yanlış1"
              ]
            }
          ]
        },
        {
          "id": "a1_selamlasma_4",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_selamlasma_4_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Dil kursunda ilk tanışma",
                "en": "First meeting at a language course",
                "ar": "اللقاء الأول في دورة اللغة",
                "fa": "اولین ملاقات در کلاس زبان",
                "ru": "Первая встреча на языковых курсах"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Merhaba, benim adım Ali. Senin adın ne?",
                    "en": "Hello, my name is Ali. What is your name?",
                    "ar": "مرحباً، اسمي علي. ما اسمك؟",
                    "fa": "سلام، اسم من علی است. اسم تو چیست؟",
                    "ru": "Привет, меня зовут Али. Как тебя зовут?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Merhaba, benim adım Ayşe.",
                        "en": "Hello, my name is Ayşe.",
                        "ar": "مرحباً، اسمي عائشة.",
                        "fa": "سلام، اسم من عایشه است.",
                        "ru": "Привет, меня зовут Айше."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Ben yirmi yaşındayım.",
                        "en": "I am twenty years old.",
                        "ar": "عمري عشرون عاماً.",
                        "fa": "بیست سالمه.",
                        "ru": "Мне двадцать лет."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Bir kilo elma lütfen.",
                        "en": "One kilo of apples please.",
                        "ar": "كيلو تفاح من فضلك.",
                        "fa": "یک کیلو سیب لطفاً.",
                        "ru": "Один килограмм яблок, пожалуйста."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Memnun oldum. Nerelisin?",
                    "en": "Nice to meet you. Where are you from?",
                    "ar": "سعدت بلقائك. من أين أنت؟",
                    "fa": "خوشبختم. اهل کجایی؟",
                    "ru": "Приятно познакомиться. Откуда ты?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Ben İngiltere'den geliyorum.",
                        "en": "I come from England.",
                        "ar": "أنا من إنجلترا.",
                        "fa": "من از انگلستان می‌آیم.",
                        "ru": "Я из Англии."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Öğrenciyim.",
                        "en": "I am a student.",
                        "ar": "أنا طالب.",
                        "fa": "من دانشجو هستم.",
                        "ru": "Я студент."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "İyi geceler.",
                        "en": "Good night.",
                        "ar": "تصبح على خير.",
                        "fa": "شب بخیر.",
                        "ru": "Спокойной ночи."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_selamlasma_5",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_selamlasma_5_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Nasılsın?",
                "en": "How are you?",
                "ar": "كيف حالك؟",
                "fa": "حالت چطوره؟",
                "ru": "Как дела?"
              },
              "options": [
                {
                  "tr": "İyi akşamlar",
                  "en": "Good evening",
                  "ar": "مساء الخير",
                  "fa": "عصر بخیر",
                  "ru": "Добрый вечер"
                },
                {
                  "tr": "Affedersiniz",
                  "en": "Excuse me",
                  "ar": "معذرة",
                  "fa": "ببخشید",
                  "ru": "Извините"
                },
                {
                  "tr": "Nasılsın?",
                  "en": "How are you?",
                  "ar": "كيف حالك؟",
                  "fa": "حالت چطوره؟",
                  "ru": "Как дела?"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_selamlasma_5_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "İyiyim",
                "en": "I am fine",
                "ar": "أنا بخير",
                "fa": "من خوبم",
                "ru": "Я в порядке"
              },
              "options": [
                {
                  "tr": "Evet",
                  "en": "Yes",
                  "ar": "نعم",
                  "fa": "بله",
                  "ru": "Да"
                },
                {
                  "tr": "Teşekkür ederim",
                  "en": "Thank you",
                  "ar": "شكراً لك",
                  "fa": "متشکرم",
                  "ru": "Спасибо"
                },
                {
                  "tr": "İyiyim",
                  "en": "I am fine",
                  "ar": "أنا بخير",
                  "fa": "من خوبم",
                  "ru": "Я в порядке"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_selamlasma_5_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Teşekkür ederim",
                "en": "Thank you",
                "ar": "شكراً لك",
                "fa": "متشکرم",
                "ru": "Спасибо"
              },
              "options": [
                {
                  "tr": "Affedersiniz",
                  "en": "Excuse me",
                  "ar": "معذرة",
                  "fa": "ببخشید",
                  "ru": "Извините"
                },
                {
                  "tr": "Özür dilerim",
                  "en": "I apologize",
                  "ar": "أعتذر",
                  "fa": "عذرخواهی می‌کنم",
                  "ru": "Прошу прощения"
                },
                {
                  "tr": "Teşekkür ederim",
                  "en": "Thank you",
                  "ar": "شكراً لك",
                  "fa": "متشکرم",
                  "ru": "Спасибо"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_selamlasma_5_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Görüşürüz",
                "en": "See you",
                "ar": "أراك لاحقاً",
                "fa": "می‌بینمت",
                "ru": "Увидимся"
              },
              "options": [
                {
                  "tr": "Nasılsın?",
                  "en": "How are you?",
                  "ar": "كيف حالك؟",
                  "fa": "حالت چطوره؟",
                  "ru": "Как дела?"
                },
                {
                  "tr": "Lütfen",
                  "en": "Please",
                  "ar": "رجاءً",
                  "fa": "لطفاً",
                  "ru": "Пожалуйста"
                },
                {
                  "tr": "Görüşürüz",
                  "en": "See you",
                  "ar": "أراك لاحقاً",
                  "fa": "می‌بینمت",
                  "ru": "Увидимся"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_selamlasma_5_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Hoşçakal",
                "en": "Goodbye",
                "ar": "وداعاً",
                "fa": "خداحافظ",
                "ru": "Прощай"
              },
              "options": [
                {
                  "tr": "İyi akşamlar",
                  "en": "Good evening",
                  "ar": "مساء الخير",
                  "fa": "عصر بخیر",
                  "ru": "Добрый вечер"
                },
                {
                  "tr": "Evet",
                  "en": "Yes",
                  "ar": "نعم",
                  "fa": "بله",
                  "ru": "Да"
                },
                {
                  "tr": "Hoşçakal",
                  "en": "Goodbye",
                  "ar": "وداعاً",
                  "fa": "خداحافظ",
                  "ru": "Прощай"
                }
              ],
              "correctAnswerIndex": 2
            }
          ]
        },
        {
          "id": "a1_selamlasma_6",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_selamlasma_6_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Nasılsın?",
                    "en": "How are you?",
                    "ar": "كيف حالك؟",
                    "fa": "حالت چطوره؟",
                    "ru": "Как дела?"
                  },
                  "translation": {
                    "tr": "How are you?",
                    "en": "How are you?",
                    "ar": "كيف حالك؟",
                    "fa": "حالت چطوره؟",
                    "ru": "Как дела?"
                  }
                },
                {
                  "word": {
                    "tr": "İyiyim",
                    "en": "I am fine",
                    "ar": "أنا بخير",
                    "fa": "من خوبم",
                    "ru": "Я в порядке"
                  },
                  "translation": {
                    "tr": "I am fine",
                    "en": "I am fine",
                    "ar": "أنا بخير",
                    "fa": "من خوبم",
                    "ru": "Я в порядке"
                  }
                },
                {
                  "word": {
                    "tr": "Teşekkür ederim",
                    "en": "Thank you",
                    "ar": "شكراً لك",
                    "fa": "متشکرم",
                    "ru": "Спасибо"
                  },
                  "translation": {
                    "tr": "Thank you",
                    "en": "Thank you",
                    "ar": "شكراً لك",
                    "fa": "متشکرم",
                    "ru": "Спасибо"
                  }
                },
                {
                  "word": {
                    "tr": "Görüşürüz",
                    "en": "See you",
                    "ar": "أراك لاحقاً",
                    "fa": "می‌بینمت",
                    "ru": "Увидимся"
                  },
                  "translation": {
                    "tr": "See you",
                    "en": "See you",
                    "ar": "أراك لاحقاً",
                    "fa": "می‌بینمت",
                    "ru": "Увидимся"
                  }
                },
                {
                  "word": {
                    "tr": "Hoşçakal",
                    "en": "Goodbye",
                    "ar": "وداعاً",
                    "fa": "خداحافظ",
                    "ru": "Прощай"
                  },
                  "translation": {
                    "tr": "Goodbye",
                    "en": "Goodbye",
                    "ar": "وداعاً",
                    "fa": "خداحافظ",
                    "ru": "Прощай"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_selamlasma_7",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_selamlasma_7_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Benim adım Ahmet",
                "en": "My name is Ahmet",
                "ar": "اسمي أحمد",
                "fa": "اسم من احمد است",
                "ru": "Меня зовут Ахмет"
              },
              "correctOrder": [
                "Benim",
                "adım",
                "Ahmet"
              ],
              "words": [
                "Ahmet",
                "adım",
                "Benim"
              ]
            },
            {
              "id": "a1_selamlasma_7_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Ben Türkiye'den geliyorum",
                "en": "I come from Turkey",
                "ar": "أنا من تركيا",
                "fa": "من از ترکیه می‌آیم",
                "ru": "Я из Турции"
              },
              "correctOrder": [
                "Ben",
                "Türkiye'den",
                "geliyorum"
              ],
              "words": [
                "Ben",
                "Türkiye'den",
                "geliyorum"
              ]
            },
            {
              "id": "a1_selamlasma_7_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Yirmi yaşındayım",
                "en": "I am twenty years old",
                "ar": "عمري عشرون عاماً",
                "fa": "بیست سالمه",
                "ru": "Мне двадцать лет"
              },
              "correctOrder": [
                "Yirmi",
                "yaşındayım"
              ],
              "words": [
                "Yirmi",
                "yaşındayım"
              ]
            },
            {
              "id": "a1_selamlasma_7_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " öğrenciyim"
              ],
              "missingWord": "Ben",
              "options": [
                "Ben",
                "Yanlış1",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_selamlasma_7_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " oldum"
              ],
              "missingWord": "Memnun",
              "options": [
                "Yanlış1",
                "Yanlış2",
                "Memnun"
              ]
            }
          ]
        },
        {
          "id": "a1_selamlasma_8",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_selamlasma_8_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Komşuyla karşılaşma",
                "en": "Running into a neighbor",
                "ar": "لقاء الجار",
                "fa": "برخورد با همسایه",
                "ru": "Встреча с соседом"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Günaydın, nasılsın?",
                    "en": "Good morning, how are you?",
                    "ar": "صباح الخير، كيف حالك؟",
                    "fa": "صبح بخیر، حالت چطوره؟",
                    "ru": "Доброе утро, как дела?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Günaydın, iyiyim. Siz nasılsınız?",
                        "en": "Good morning, I am fine. How are you?",
                        "ar": "صباح الخير، أنا بخير. كيف حالكم؟",
                        "fa": "صبح بخیر، من خوبم. شما چطورید؟",
                        "ru": "Доброе утро, я в порядке. Как вы?"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Teşekkürler, fena değil.",
                        "en": "Thanks, not bad.",
                        "ar": "شكراً، لست سيئاً.",
                        "fa": "ممنون، بد نیستم.",
                        "ru": "Спасибо, неплохо."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Evet.",
                        "en": "Yes.",
                        "ar": "نعم.",
                        "fa": "بله.",
                        "ru": "Да."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Ben de iyiyim, teşekkür ederim. İyi günler!",
                    "en": "I am fine too, thank you. Have a good day!",
                    "ar": "أنا بخير أيضاً، شكراً لك. طاب يومك!",
                    "fa": "من هم خوبم، متشکرم. روز بخیر!",
                    "ru": "Я тоже в порядке, спасибо. Хорошего дня!"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "İyi günler!",
                        "en": "Have a good day!",
                        "ar": "طاب يومك!",
                        "fa": "روز بخیر!",
                        "ru": "Хорошего дня!"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Görüşürüz!",
                        "en": "See you!",
                        "ar": "أراك لاحقاً!",
                        "fa": "می‌بینمت!",
                        "ru": "Увидимся!"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Hayır.",
                        "en": "No.",
                        "ar": "لا.",
                        "fa": "نه.",
                        "ru": "Нет."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_selamlasma_9",
          "type": "boss_fight",
          "xpReward": 50,
          "coinReward": 25,
          "exercises": [
            {
              "id": "a1_selamlasma_9_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Affedersiniz",
                "en": "Excuse me",
                "ar": "معذرة",
                "fa": "ببخشید",
                "ru": "Извините"
              },
              "options": [
                {
                  "tr": "Affedersiniz",
                  "en": "Excuse me",
                  "ar": "معذرة",
                  "fa": "ببخشید",
                  "ru": "Извините"
                },
                {
                  "tr": "Teşekkür ederim",
                  "en": "Thank you",
                  "ar": "شكراً لك",
                  "fa": "متشکرم",
                  "ru": "Спасибо"
                },
                {
                  "tr": "İyi günler",
                  "en": "Good day",
                  "ar": "طاب يومك",
                  "fa": "روز بخیر",
                  "ru": "Добрый день"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_selamlasma_9_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Özür dilerim",
                "en": "I apologize",
                "ar": "أعتذر",
                "fa": "عذرخواهی می‌کنم",
                "ru": "Прошу прощения"
              },
              "options": [
                {
                  "tr": "İyi günler",
                  "en": "Good day",
                  "ar": "طاب يومك",
                  "fa": "روز بخیر",
                  "ru": "Добрый день"
                },
                {
                  "tr": "İyi geceler",
                  "en": "Good night",
                  "ar": "تصبح على خير",
                  "fa": "شب بخیر",
                  "ru": "Спокойной ночи"
                },
                {
                  "tr": "Özür dilerim",
                  "en": "I apologize",
                  "ar": "أعتذر",
                  "fa": "عذرخواهی می‌کنم",
                  "ru": "Прошу прощения"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_selamlasma_9_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Evet",
                "en": "Yes",
                "ar": "نعم",
                "fa": "بله",
                "ru": "Да"
              },
              "options": [
                {
                  "tr": "İyi geceler",
                  "en": "Good night",
                  "ar": "تصبح على خير",
                  "fa": "شب بخیر",
                  "ru": "Спокойной ночи"
                },
                {
                  "tr": "Nasılsın?",
                  "en": "How are you?",
                  "ar": "كيف حالك؟",
                  "fa": "حالت چطوره؟",
                  "ru": "Как дела?"
                },
                {
                  "tr": "Evet",
                  "en": "Yes",
                  "ar": "نعم",
                  "fa": "بله",
                  "ru": "Да"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_selamlasma_9_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Hayır",
                "en": "No",
                "ar": "لا",
                "fa": "نه",
                "ru": "Нет"
              },
              "options": [
                {
                  "tr": "Hayır",
                  "en": "No",
                  "ar": "لا",
                  "fa": "نه",
                  "ru": "Нет"
                },
                {
                  "tr": "Teşekkür ederim",
                  "en": "Thank you",
                  "ar": "شكراً لك",
                  "fa": "متشکرم",
                  "ru": "Спасибо"
                },
                {
                  "tr": "Merhaba",
                  "en": "Hello",
                  "ar": "مرحباً",
                  "fa": "سلام",
                  "ru": "Привет"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_selamlasma_9_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Benim adım Ahmet",
                "en": "My name is Ahmet",
                "ar": "اسمي أحمد",
                "fa": "اسم من احمد است",
                "ru": "Меня зовут Ахмет"
              },
              "correctOrder": [
                "Benim",
                "adım",
                "Ahmet"
              ],
              "words": [
                "Benim",
                "adım",
                "Ahmet"
              ]
            },
            {
              "id": "a1_selamlasma_9_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Ben Türkiye'den geliyorum",
                "en": "I come from Turkey",
                "ar": "أنا من تركيا",
                "fa": "من از ترکیه می‌آیم",
                "ru": "Я из Турции"
              },
              "correctOrder": [
                "Ben",
                "Türkiye'den",
                "geliyorum"
              ],
              "words": [
                "geliyorum",
                "Türkiye'den",
                "Ben"
              ]
            },
            {
              "id": "a1_selamlasma_9_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "Ben ",
                ""
              ],
              "missingWord": "öğrenciyim",
              "options": [
                "Yanlış1",
                "öğrenciyim",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_selamlasma_9_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " oldum"
              ],
              "missingWord": "Memnun",
              "options": [
                "Yanlış1",
                "Yanlış2",
                "Memnun"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a1_pazar",
      "title": "Pazar",
      "description": "Pazar (A1)",
      "emoji": "🛒",
      "color": "from-emerald-400 to-teal-500",
      "lessons": [
        {
          "id": "a1_pazar_1",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_pazar_1_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Elma",
                "en": "Apple",
                "ar": "تفاحة",
                "fa": "سیب",
                "ru": "Яблоко"
              },
              "options": [
                {
                  "tr": "Elma",
                  "en": "Apple",
                  "ar": "تفاحة",
                  "fa": "سیب",
                  "ru": "Яблоко"
                },
                {
                  "tr": "Soğan",
                  "en": "Onion",
                  "ar": "بصل",
                  "fa": "پیاز",
                  "ru": "Лук"
                },
                {
                  "tr": "Muz",
                  "en": "Banana",
                  "ar": "موز",
                  "fa": "موز",
                  "ru": "Банан"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_pazar_1_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Armut",
                "en": "Pear",
                "ar": "كمثرى",
                "fa": "گلابی",
                "ru": "Груша"
              },
              "options": [
                {
                  "tr": "Soğan",
                  "en": "Onion",
                  "ar": "بصل",
                  "fa": "پیاز",
                  "ru": "Лук"
                },
                {
                  "tr": "Armut",
                  "en": "Pear",
                  "ar": "كمثرى",
                  "fa": "گلابی",
                  "ru": "Груша"
                },
                {
                  "tr": "Lira",
                  "en": "Lira",
                  "ar": "ليرة",
                  "fa": "لیر",
                  "ru": "Лира"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_pazar_1_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Muz",
                "en": "Banana",
                "ar": "موز",
                "fa": "موز",
                "ru": "Банан"
              },
              "options": [
                {
                  "tr": "Tane",
                  "en": "Piece",
                  "ar": "قطعة",
                  "fa": "عدد",
                  "ru": "Штука"
                },
                {
                  "tr": "Muz",
                  "en": "Banana",
                  "ar": "موز",
                  "fa": "موز",
                  "ru": "Банан"
                },
                {
                  "tr": "Havuç",
                  "en": "Carrot",
                  "ar": "جزر",
                  "fa": "هویج",
                  "ru": "Морковь"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_pazar_1_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Portakal",
                "en": "Orange",
                "ar": "برتقال",
                "fa": "پرتقال",
                "ru": "Апельсин"
              },
              "options": [
                {
                  "tr": "Portakal",
                  "en": "Orange",
                  "ar": "برتقال",
                  "fa": "پرتقال",
                  "ru": "Апельсин"
                },
                {
                  "tr": "Tane",
                  "en": "Piece",
                  "ar": "قطعة",
                  "fa": "عدد",
                  "ru": "Штука"
                },
                {
                  "tr": "Demet",
                  "en": "Bunch",
                  "ar": "باقة",
                  "fa": "دسته",
                  "ru": "Пучок"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_pazar_1_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Çilek",
                "en": "Strawberry",
                "ar": "فراولة",
                "fa": "توت فرنگی",
                "ru": "Клубника"
              },
              "options": [
                {
                  "tr": "Lira",
                  "en": "Lira",
                  "ar": "ليرة",
                  "fa": "لیر",
                  "ru": "Лира"
                },
                {
                  "tr": "Gram",
                  "en": "Gram",
                  "ar": "غرام",
                  "fa": "گرم",
                  "ru": "Грамм"
                },
                {
                  "tr": "Çilek",
                  "en": "Strawberry",
                  "ar": "فراولة",
                  "fa": "توت فرنگی",
                  "ru": "Клубника"
                }
              ],
              "correctAnswerIndex": 2
            }
          ]
        },
        {
          "id": "a1_pazar_2",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_pazar_2_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Elma",
                    "en": "Apple",
                    "ar": "تفاحة",
                    "fa": "سیب",
                    "ru": "Яблоко"
                  },
                  "translation": {
                    "tr": "Apple",
                    "en": "Apple",
                    "ar": "تفاحة",
                    "fa": "سیب",
                    "ru": "Яблоко"
                  }
                },
                {
                  "word": {
                    "tr": "Armut",
                    "en": "Pear",
                    "ar": "كمثرى",
                    "fa": "گلابی",
                    "ru": "Груша"
                  },
                  "translation": {
                    "tr": "Pear",
                    "en": "Pear",
                    "ar": "كمثرى",
                    "fa": "گلابی",
                    "ru": "Груша"
                  }
                },
                {
                  "word": {
                    "tr": "Muz",
                    "en": "Banana",
                    "ar": "موز",
                    "fa": "موز",
                    "ru": "Банан"
                  },
                  "translation": {
                    "tr": "Banana",
                    "en": "Banana",
                    "ar": "موز",
                    "fa": "موز",
                    "ru": "Банан"
                  }
                },
                {
                  "word": {
                    "tr": "Portakal",
                    "en": "Orange",
                    "ar": "برتقال",
                    "fa": "پرتقال",
                    "ru": "Апельсин"
                  },
                  "translation": {
                    "tr": "Orange",
                    "en": "Orange",
                    "ar": "برتقال",
                    "fa": "پرتقال",
                    "ru": "Апельсин"
                  }
                },
                {
                  "word": {
                    "tr": "Çilek",
                    "en": "Strawberry",
                    "ar": "فراولة",
                    "fa": "توت فرنگی",
                    "ru": "Клубника"
                  },
                  "translation": {
                    "tr": "Strawberry",
                    "en": "Strawberry",
                    "ar": "فراولة",
                    "fa": "توت فرنگی",
                    "ru": "Клубника"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_pazar_3",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_pazar_3_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Ne kadar?",
                "en": "How much?",
                "ar": "كم السعر؟",
                "fa": "چقدر است؟",
                "ru": "Сколько стоит?"
              },
              "correctOrder": [
                "Ne",
                "kadar?"
              ],
              "words": [
                "kadar?",
                "Ne"
              ]
            },
            {
              "id": "a1_pazar_3_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Kaç lira?",
                "en": "How many liras?",
                "ar": "كم ليرة؟",
                "fa": "چند لیر؟",
                "ru": "Сколько лир?"
              },
              "correctOrder": [
                "Kaç",
                "lira?"
              ],
              "words": [
                "lira?",
                "Kaç"
              ]
            },
            {
              "id": "a1_pazar_3_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Çok pahalı!",
                "en": "Too expensive!",
                "ar": "غالي جداً!",
                "fa": "خیلی گران است!",
                "ru": "Слишком дорого!"
              },
              "correctOrder": [
                "Çok",
                "pahalı!"
              ],
              "words": [
                "Çok",
                "pahalı!"
              ]
            },
            {
              "id": "a1_pazar_3_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " mi?"
              ],
              "missingWord": "Taze",
              "options": [
                "Taze",
                "Yanlış1",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_pazar_3_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "Bir kilo ",
                ""
              ],
              "missingWord": "lütfen",
              "options": [
                "Yanlış1",
                "lütfen",
                "Yanlış2"
              ]
            }
          ]
        },
        {
          "id": "a1_pazar_4",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_pazar_4_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Sebze satın alma",
                "en": "Buying vegetables",
                "ar": "شراء الخضروات",
                "fa": "خرید سبزیجات",
                "ru": "Покупка овощей"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Hoş geldiniz, buyurun!",
                    "en": "Welcome, go ahead!",
                    "ar": "أهلاً بك، تفضل!",
                    "fa": "خوش آمدید، بفرمایید!",
                    "ru": "Добро пожаловать, пожалуйста!"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Bir kilo domates ne kadar?",
                        "en": "How much is one kilo of tomatoes?",
                        "ar": "بكم كيلو الطماطم؟",
                        "fa": "یک کیلو گوجه فرنگی چقدر است؟",
                        "ru": "Сколько стоит килограмм помидоров?"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Merhaba, kolay gelsin.",
                        "en": "Hello, may it be easy for you.",
                        "ar": "مرحباً، يعطيك العافية.",
                        "fa": "سلام، خسته نباشید.",
                        "ru": "Здравствуйте, Бог в помощь."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Ben öğrenciyim.",
                        "en": "I am a student.",
                        "ar": "أنا طالب.",
                        "fa": "من دانشجو هستم.",
                        "ru": "Я студент."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Domates 30 lira.",
                    "en": "Tomatoes are 30 liras.",
                    "ar": "الطماطم بـ 30 ليرة.",
                    "fa": "گوجه فرنگی 30 لیر است.",
                    "ru": "Помидоры по 30 лир."
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Bir kilo lütfen.",
                        "en": "One kilo please.",
                        "ar": "كيلو من فضلك.",
                        "fa": "یک کیلو لطفاً.",
                        "ru": "Один килограмм, пожалуйста."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Çok pahalı!",
                        "en": "Too expensive!",
                        "ar": "غالي جداً!",
                        "fa": "خیلی گران است!",
                        "ru": "Слишком дорого!"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Affedersiniz.",
                        "en": "Excuse me.",
                        "ar": "معذرة.",
                        "fa": "ببخشید.",
                        "ru": "Извините."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_pazar_5",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_pazar_5_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Domates",
                "en": "Tomato",
                "ar": "طماطم",
                "fa": "گوجه فرنگی",
                "ru": "Помидор"
              },
              "options": [
                {
                  "tr": "Biber",
                  "en": "Pepper",
                  "ar": "فلفل",
                  "fa": "فلفل",
                  "ru": "Перец"
                },
                {
                  "tr": "Domates",
                  "en": "Tomato",
                  "ar": "طماطم",
                  "fa": "گوجه فرنگی",
                  "ru": "Помидор"
                },
                {
                  "tr": "Havuç",
                  "en": "Carrot",
                  "ar": "جزر",
                  "fa": "هویج",
                  "ru": "Морковь"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_pazar_5_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Patates",
                "en": "Potato",
                "ar": "بطاطس",
                "fa": "سیب زمینی",
                "ru": "Картофель"
              },
              "options": [
                {
                  "tr": "Patates",
                  "en": "Potato",
                  "ar": "بطاطس",
                  "fa": "سیب زمینی",
                  "ru": "Картофель"
                },
                {
                  "tr": "Havuç",
                  "en": "Carrot",
                  "ar": "جزر",
                  "fa": "هویج",
                  "ru": "Морковь"
                },
                {
                  "tr": "Gram",
                  "en": "Gram",
                  "ar": "غرام",
                  "fa": "گرم",
                  "ru": "Грамм"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_pazar_5_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Soğan",
                "en": "Onion",
                "ar": "بصل",
                "fa": "پیاز",
                "ru": "Лук"
              },
              "options": [
                {
                  "tr": "Çilek",
                  "en": "Strawberry",
                  "ar": "فراولة",
                  "fa": "توت فرنگی",
                  "ru": "Клубника"
                },
                {
                  "tr": "Soğan",
                  "en": "Onion",
                  "ar": "بصل",
                  "fa": "پیاز",
                  "ru": "Лук"
                },
                {
                  "tr": "Domates",
                  "en": "Tomato",
                  "ar": "طماطم",
                  "fa": "گوجه فرنگی",
                  "ru": "Помидор"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_pazar_5_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Havuç",
                "en": "Carrot",
                "ar": "جزر",
                "fa": "هویج",
                "ru": "Морковь"
              },
              "options": [
                {
                  "tr": "Havuç",
                  "en": "Carrot",
                  "ar": "جزر",
                  "fa": "هویج",
                  "ru": "Морковь"
                },
                {
                  "tr": "Demet",
                  "en": "Bunch",
                  "ar": "باقة",
                  "fa": "دسته",
                  "ru": "Пучок"
                },
                {
                  "tr": "Elma",
                  "en": "Apple",
                  "ar": "تفاحة",
                  "fa": "سیب",
                  "ru": "Яблоко"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_pazar_5_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Biber",
                "en": "Pepper",
                "ar": "فلفل",
                "fa": "فلفل",
                "ru": "Перец"
              },
              "options": [
                {
                  "tr": "Biber",
                  "en": "Pepper",
                  "ar": "فلفل",
                  "fa": "فلفل",
                  "ru": "Перец"
                },
                {
                  "tr": "Gram",
                  "en": "Gram",
                  "ar": "غرام",
                  "fa": "گرم",
                  "ru": "Грамм"
                },
                {
                  "tr": "Soğan",
                  "en": "Onion",
                  "ar": "بصل",
                  "fa": "پیاز",
                  "ru": "Лук"
                }
              ],
              "correctAnswerIndex": 0
            }
          ]
        },
        {
          "id": "a1_pazar_6",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_pazar_6_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Domates",
                    "en": "Tomato",
                    "ar": "طماطم",
                    "fa": "گوجه فرنگی",
                    "ru": "Помидор"
                  },
                  "translation": {
                    "tr": "Tomato",
                    "en": "Tomato",
                    "ar": "طماطم",
                    "fa": "گوجه فرنگی",
                    "ru": "Помидор"
                  }
                },
                {
                  "word": {
                    "tr": "Patates",
                    "en": "Potato",
                    "ar": "بطاطس",
                    "fa": "سیب زمینی",
                    "ru": "Картофель"
                  },
                  "translation": {
                    "tr": "Potato",
                    "en": "Potato",
                    "ar": "بطاطس",
                    "fa": "سیب زمینی",
                    "ru": "Картофель"
                  }
                },
                {
                  "word": {
                    "tr": "Soğan",
                    "en": "Onion",
                    "ar": "بصل",
                    "fa": "پیاز",
                    "ru": "Лук"
                  },
                  "translation": {
                    "tr": "Onion",
                    "en": "Onion",
                    "ar": "بصل",
                    "fa": "پیاز",
                    "ru": "Лук"
                  }
                },
                {
                  "word": {
                    "tr": "Havuç",
                    "en": "Carrot",
                    "ar": "جزر",
                    "fa": "هویج",
                    "ru": "Морковь"
                  },
                  "translation": {
                    "tr": "Carrot",
                    "en": "Carrot",
                    "ar": "جزر",
                    "fa": "هویج",
                    "ru": "Морковь"
                  }
                },
                {
                  "word": {
                    "tr": "Biber",
                    "en": "Pepper",
                    "ar": "فلفل",
                    "fa": "فلفل",
                    "ru": "Перец"
                  },
                  "translation": {
                    "tr": "Pepper",
                    "en": "Pepper",
                    "ar": "فلفل",
                    "fa": "فلفل",
                    "ru": "Перец"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_pazar_7",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_pazar_7_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Ne kadar?",
                "en": "How much?",
                "ar": "كم السعر؟",
                "fa": "چقدر است؟",
                "ru": "Сколько стоит?"
              },
              "correctOrder": [
                "Ne",
                "kadar?"
              ],
              "words": [
                "kadar?",
                "Ne"
              ]
            },
            {
              "id": "a1_pazar_7_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Kaç lira?",
                "en": "How many liras?",
                "ar": "كم ليرة؟",
                "fa": "چند لیر؟",
                "ru": "Сколько лир?"
              },
              "correctOrder": [
                "Kaç",
                "lira?"
              ],
              "words": [
                "lira?",
                "Kaç"
              ]
            },
            {
              "id": "a1_pazar_7_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Çok pahalı!",
                "en": "Too expensive!",
                "ar": "غالي جداً!",
                "fa": "خیلی گران است!",
                "ru": "Слишком дорого!"
              },
              "correctOrder": [
                "Çok",
                "pahalı!"
              ],
              "words": [
                "pahalı!",
                "Çok"
              ]
            },
            {
              "id": "a1_pazar_7_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " mi?"
              ],
              "missingWord": "Taze",
              "options": [
                "Taze",
                "Yanlış1",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_pazar_7_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " kilo lütfen"
              ],
              "missingWord": "Bir",
              "options": [
                "Bir",
                "Yanlış1",
                "Yanlış2"
              ]
            }
          ]
        },
        {
          "id": "a1_pazar_8",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_pazar_8_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Meyve seçimi",
                "en": "Choosing fruits",
                "ar": "اختيار الفواكه",
                "fa": "انتخاب میوه",
                "ru": "Выбор фруктов"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Elmalarımız çok taze. Alır mısınız?",
                    "en": "Our apples are very fresh. Would you buy some?",
                    "ar": "تفاحنا طازج جداً. هل ترغب بالشراء؟",
                    "fa": "سیب‌های ما خیلی تازه هستند. می‌خرید؟",
                    "ru": "Наши яблоки очень свежие. Возьмете?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Evet, iki kilo lütfen.",
                        "en": "Yes, two kilos please.",
                        "ar": "نعم، كيلوين من فضلك.",
                        "fa": "بله، دو کیلو لطفاً.",
                        "ru": "Да, два килограмма, пожалуйста."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Tatlı mı?",
                        "en": "Are they sweet?",
                        "ar": "هل هي حلوة؟",
                        "fa": "شیرین هستند؟",
                        "ru": "Они сладкие?"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Bozuk param var.",
                        "en": "I have change.",
                        "ar": "لدي فكة.",
                        "fa": "پول خرد دارم.",
                        "ru": "У меня есть мелочь."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Tabii, hemen tartıyorum. Başka bir şey ister misiniz?",
                    "en": "Sure, I am weighing it now. Would you like anything else?",
                    "ar": "بالتأكيد، أزنها الآن. هل تريد أي شيء آخر؟",
                    "fa": "البته، الان وزن می‌کنم. چیز دیگری می‌خواهید؟",
                    "ru": "Конечно, сейчас взвешу. Хотите что-нибудь еще?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Hayır, hepsi bu kadar.",
                        "en": "No, that is all.",
                        "ar": "لا، هذا كل شيء.",
                        "fa": "نه، همین.",
                        "ru": "Нет, это всё."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Biraz da çilek alayım.",
                        "en": "I will take some strawberries too.",
                        "ar": "سآخذ بعض الفراولة أيضاً.",
                        "fa": "کمی هم توت فرنگی می‌گیرم.",
                        "ru": "Возьму еще немного клубники."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Saat kaç?",
                        "en": "What time is it?",
                        "ar": "كم الساعة؟",
                        "fa": "ساعت چند است؟",
                        "ru": "Который час?"
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_pazar_9",
          "type": "boss_fight",
          "xpReward": 50,
          "coinReward": 25,
          "exercises": [
            {
              "id": "a1_pazar_9_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Kilo",
                "en": "Kilo",
                "ar": "كيلو",
                "fa": "کیلو",
                "ru": "Килограмм"
              },
              "options": [
                {
                  "tr": "Kilo",
                  "en": "Kilo",
                  "ar": "كيلو",
                  "fa": "کیلو",
                  "ru": "Килограмм"
                },
                {
                  "tr": "Portakal",
                  "en": "Orange",
                  "ar": "برتقال",
                  "fa": "پرتقال",
                  "ru": "Апельсин"
                },
                {
                  "tr": "Tane",
                  "en": "Piece",
                  "ar": "قطعة",
                  "fa": "عدد",
                  "ru": "Штука"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_pazar_9_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Gram",
                "en": "Gram",
                "ar": "غرام",
                "fa": "گرم",
                "ru": "Грамм"
              },
              "options": [
                {
                  "tr": "Gram",
                  "en": "Gram",
                  "ar": "غرام",
                  "fa": "گرم",
                  "ru": "Грамм"
                },
                {
                  "tr": "Biber",
                  "en": "Pepper",
                  "ar": "فلفل",
                  "fa": "فلفل",
                  "ru": "Перец"
                },
                {
                  "tr": "Elma",
                  "en": "Apple",
                  "ar": "تفاحة",
                  "fa": "سیب",
                  "ru": "Яблоко"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_pazar_9_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Tane",
                "en": "Piece",
                "ar": "قطعة",
                "fa": "عدد",
                "ru": "Штука"
              },
              "options": [
                {
                  "tr": "Patates",
                  "en": "Potato",
                  "ar": "بطاطس",
                  "fa": "سیب زمینی",
                  "ru": "Картофель"
                },
                {
                  "tr": "Tane",
                  "en": "Piece",
                  "ar": "قطعة",
                  "fa": "عدد",
                  "ru": "Штука"
                },
                {
                  "tr": "Gram",
                  "en": "Gram",
                  "ar": "غرام",
                  "fa": "گرم",
                  "ru": "Грамм"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_pazar_9_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Demet",
                "en": "Bunch",
                "ar": "باقة",
                "fa": "دسته",
                "ru": "Пучок"
              },
              "options": [
                {
                  "tr": "Demet",
                  "en": "Bunch",
                  "ar": "باقة",
                  "fa": "دسته",
                  "ru": "Пучок"
                },
                {
                  "tr": "Gram",
                  "en": "Gram",
                  "ar": "غرام",
                  "fa": "گرم",
                  "ru": "Грамм"
                },
                {
                  "tr": "Patates",
                  "en": "Potato",
                  "ar": "بطاطس",
                  "fa": "سیب زمینی",
                  "ru": "Картофель"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_pazar_9_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Ne kadar?",
                "en": "How much?",
                "ar": "كم السعر؟",
                "fa": "چقدر است؟",
                "ru": "Сколько стоит?"
              },
              "correctOrder": [
                "Ne",
                "kadar?"
              ],
              "words": [
                "Ne",
                "kadar?"
              ]
            },
            {
              "id": "a1_pazar_9_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Kaç lira?",
                "en": "How many liras?",
                "ar": "كم ليرة؟",
                "fa": "چند لیر؟",
                "ru": "Сколько лир?"
              },
              "correctOrder": [
                "Kaç",
                "lira?"
              ],
              "words": [
                "Kaç",
                "lira?"
              ]
            },
            {
              "id": "a1_pazar_9_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " mi?"
              ],
              "missingWord": "Taze",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "Taze"
              ]
            },
            {
              "id": "a1_pazar_9_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "Bir kilo ",
                ""
              ],
              "missingWord": "lütfen",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "lütfen"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a1_ev_aile",
      "title": "Ev & Aile",
      "description": "Ev & Aile (A1)",
      "emoji": "🏠",
      "color": "from-amber-400 to-orange-500",
      "lessons": [
        {
          "id": "a1_ev_aile_1",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_ev_aile_1_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Anne",
                "en": "Mother",
                "ar": "أم",
                "fa": "مادر",
                "ru": "Мама"
              },
              "options": [
                {
                  "tr": "Yeni",
                  "en": "New",
                  "ar": "جديد",
                  "fa": "جدید",
                  "ru": "Новый"
                },
                {
                  "tr": "Güzel",
                  "en": "Beautiful",
                  "ar": "جميل",
                  "fa": "زیبا",
                  "ru": "Красивый"
                },
                {
                  "tr": "Anne",
                  "en": "Mother",
                  "ar": "أم",
                  "fa": "مادر",
                  "ru": "Мама"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_ev_aile_1_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Baba",
                "en": "Father",
                "ar": "أب",
                "fa": "پدر",
                "ru": "Папа"
              },
              "options": [
                {
                  "tr": "Mutfak",
                  "en": "Kitchen",
                  "ar": "مطبخ",
                  "fa": "آشپزخانه",
                  "ru": "Кухня"
                },
                {
                  "tr": "Salon",
                  "en": "Living room",
                  "ar": "غرفة المعيشة",
                  "fa": "پذیرایی",
                  "ru": "Гостиная"
                },
                {
                  "tr": "Baba",
                  "en": "Father",
                  "ar": "أب",
                  "fa": "پدر",
                  "ru": "Папа"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_ev_aile_1_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Kardeş",
                "en": "Sibling",
                "ar": "أخ/أخت",
                "fa": "خواهر/برادر",
                "ru": "Брат/Сестра"
              },
              "options": [
                {
                  "tr": "Kardeş",
                  "en": "Sibling",
                  "ar": "أخ/أخت",
                  "fa": "خواهر/برادر",
                  "ru": "Брат/Сестра"
                },
                {
                  "tr": "Salon",
                  "en": "Living room",
                  "ar": "غرفة المعيشة",
                  "fa": "پذیرایی",
                  "ru": "Гостиная"
                },
                {
                  "tr": "Banyo",
                  "en": "Bathroom",
                  "ar": "حمام",
                  "fa": "حمام",
                  "ru": "Ванная"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_ev_aile_1_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Abla",
                "en": "Older sister",
                "ar": "أخت كبرى",
                "fa": "خواهر بزرگتر",
                "ru": "Старшая сестра"
              },
              "options": [
                {
                  "tr": "Abla",
                  "en": "Older sister",
                  "ar": "أخت كبرى",
                  "fa": "خواهر بزرگتر",
                  "ru": "Старшая сестра"
                },
                {
                  "tr": "Yeni",
                  "en": "New",
                  "ar": "جديد",
                  "fa": "جدید",
                  "ru": "Новый"
                },
                {
                  "tr": "Küçük",
                  "en": "Small",
                  "ar": "صغير",
                  "fa": "کوچک",
                  "ru": "Маленький"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_ev_aile_1_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Ağabey",
                "en": "Older brother",
                "ar": "أخ أكبر",
                "fa": "برادر بزرگتر",
                "ru": "Старший брат"
              },
              "options": [
                {
                  "tr": "Salon",
                  "en": "Living room",
                  "ar": "غرفة المعيشة",
                  "fa": "پذیرایی",
                  "ru": "Гостиная"
                },
                {
                  "tr": "Balkon",
                  "en": "Balcony",
                  "ar": "شرفة",
                  "fa": "بالکن",
                  "ru": "Балкон"
                },
                {
                  "tr": "Ağabey",
                  "en": "Older brother",
                  "ar": "أخ أكبر",
                  "fa": "برادر بزرگتر",
                  "ru": "Старший брат"
                }
              ],
              "correctAnswerIndex": 2
            }
          ]
        },
        {
          "id": "a1_ev_aile_2",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_ev_aile_2_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Anne",
                    "en": "Mother",
                    "ar": "أم",
                    "fa": "مادر",
                    "ru": "Мама"
                  },
                  "translation": {
                    "tr": "Mother",
                    "en": "Mother",
                    "ar": "أم",
                    "fa": "مادر",
                    "ru": "Мама"
                  }
                },
                {
                  "word": {
                    "tr": "Baba",
                    "en": "Father",
                    "ar": "أب",
                    "fa": "پدر",
                    "ru": "Папа"
                  },
                  "translation": {
                    "tr": "Father",
                    "en": "Father",
                    "ar": "أب",
                    "fa": "پدر",
                    "ru": "Папа"
                  }
                },
                {
                  "word": {
                    "tr": "Kardeş",
                    "en": "Sibling",
                    "ar": "أخ/أخت",
                    "fa": "خواهر/برادر",
                    "ru": "Брат/Сестра"
                  },
                  "translation": {
                    "tr": "Sibling",
                    "en": "Sibling",
                    "ar": "أخ/أخت",
                    "fa": "خواهر/برادر",
                    "ru": "Брат/Сестра"
                  }
                },
                {
                  "word": {
                    "tr": "Abla",
                    "en": "Older sister",
                    "ar": "أخت كبرى",
                    "fa": "خواهر بزرگتر",
                    "ru": "Старшая сестра"
                  },
                  "translation": {
                    "tr": "Older sister",
                    "en": "Older sister",
                    "ar": "أخت كبرى",
                    "fa": "خواهر بزرگتر",
                    "ru": "Старшая сестра"
                  }
                },
                {
                  "word": {
                    "tr": "Ağabey",
                    "en": "Older brother",
                    "ar": "أخ أكبر",
                    "fa": "برادر بزرگتر",
                    "ru": "Старший брат"
                  },
                  "translation": {
                    "tr": "Older brother",
                    "en": "Older brother",
                    "ar": "أخ أكبر",
                    "fa": "برادر بزرگتر",
                    "ru": "Старший брат"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_ev_aile_3",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_ev_aile_3_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Evimde balkon var",
                "en": "My house has a balcony",
                "ar": "في منزلي شرفة",
                "fa": "خانه‌ام بالکن دارد",
                "ru": "В моем доме есть балкон"
              },
              "correctOrder": [
                "Evimde",
                "balkon",
                "var"
              ],
              "words": [
                "balkon",
                "Evimde",
                "var"
              ]
            },
            {
              "id": "a1_ev_aile_3_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Ailem Ankara'da yaşıyor",
                "en": "My family lives in Ankara",
                "ar": "عائلتي تعيش في أنقرة",
                "fa": "خانواده‌ام در آنکارا زندگی می‌کنند",
                "ru": "Моя семья живет в Анкаре"
              },
              "correctOrder": [
                "Ailem",
                "Ankara'da",
                "yaşıyor"
              ],
              "words": [
                "Ailem",
                "Ankara'da",
                "yaşıyor"
              ]
            },
            {
              "id": "a1_ev_aile_3_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Kaç kardeşin var?",
                "en": "How many siblings do you have?",
                "ar": "كم أخاً/أختاً لديك؟",
                "fa": "چند خواهر/برادر داری؟",
                "ru": "Сколько у тебя братьев/сестер?"
              },
              "correctOrder": [
                "Kaç",
                "kardeşin",
                "var?"
              ],
              "words": [
                "kardeşin",
                "Kaç",
                "var?"
              ]
            },
            {
              "id": "a1_ev_aile_3_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "Benim ",
                " kardeşim var"
              ],
              "missingWord": "iki",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "iki"
              ]
            },
            {
              "id": "a1_ev_aile_3_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "Evimiz ",
                " büyük"
              ],
              "missingWord": "çok",
              "options": [
                "Yanlış1",
                "çok",
                "Yanlış2"
              ]
            }
          ]
        },
        {
          "id": "a1_ev_aile_4",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_ev_aile_4_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Yeni arkadaşa evi anlatma",
                "en": "Describing your home to a new friend",
                "ar": "وصف منزلك لصديق جديد",
                "fa": "توصیف خانه به یک دوست جدید",
                "ru": "Описание дома новому другу"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Evin nerede ve nasıl bir ev?",
                    "en": "Where is your house and what kind of house is it?",
                    "ar": "أين منزلك وكيف يبدو؟",
                    "fa": "خانه‌ات کجاست و چطور خانه‌ای است؟",
                    "ru": "Где твой дом и какой он?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Evim merkezde. Yeni ve büyük bir ev.",
                        "en": "My house is in the center. It is a new and big house.",
                        "ar": "منزلي في المركز. إنه منزل جديد وكبير.",
                        "fa": "خانه‌ام در مرکز است. یک خانه جدید و بزرگ.",
                        "ru": "Мой дом в центре. Это новый и большой дом."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Küçük ama güzel bir evim var.",
                        "en": "I have a small but beautiful house.",
                        "ar": "لدي منزل صغير ولكنه جميل.",
                        "fa": "خانه کوچک اما زیبایی دارم.",
                        "ru": "У меня маленький, но красивый дом."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Benim adım Ahmet.",
                        "en": "My name is Ahmet.",
                        "ar": "اسمي أحمد.",
                        "fa": "اسم من احمد است.",
                        "ru": "Меня зовут Ахмет."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Harika! Balkonu var mı?",
                    "en": "Great! Does it have a balcony?",
                    "ar": "رائع! هل فيه شرفة؟",
                    "fa": "عالیه! بالکن دارد؟",
                    "ru": "Отлично! В нем есть балкон?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Evet, büyük bir balkonu var.",
                        "en": "Yes, it has a big balcony.",
                        "ar": "نعم، فيه شرفة كبيرة.",
                        "fa": "بله، یک بالکن بزرگ دارد.",
                        "ru": "Да, в нем есть большой балкон."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Hayır, yok.",
                        "en": "No, it does not.",
                        "ar": "لا، لا يوجد.",
                        "fa": "نه، ندارد.",
                        "ru": "Нет, нету."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Bir kilo domates.",
                        "en": "One kilo of tomatoes.",
                        "ar": "كيلو طماطم.",
                        "fa": "یک کیلو گوجه.",
                        "ru": "Килограмм помидоров."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_ev_aile_5",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_ev_aile_5_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Oda",
                "en": "Room",
                "ar": "غرفة",
                "fa": "اتاق",
                "ru": "Комната"
              },
              "options": [
                {
                  "tr": "Büyük",
                  "en": "Big",
                  "ar": "كبير",
                  "fa": "بزرگ",
                  "ru": "Большой"
                },
                {
                  "tr": "Anne",
                  "en": "Mother",
                  "ar": "أم",
                  "fa": "مادر",
                  "ru": "Мама"
                },
                {
                  "tr": "Oda",
                  "en": "Room",
                  "ar": "غرفة",
                  "fa": "اتاق",
                  "ru": "Комната"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_ev_aile_5_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Mutfak",
                "en": "Kitchen",
                "ar": "مطبخ",
                "fa": "آشپزخانه",
                "ru": "Кухня"
              },
              "options": [
                {
                  "tr": "Baba",
                  "en": "Father",
                  "ar": "أب",
                  "fa": "پدر",
                  "ru": "Папа"
                },
                {
                  "tr": "Mutfak",
                  "en": "Kitchen",
                  "ar": "مطبخ",
                  "fa": "آشپزخانه",
                  "ru": "Кухня"
                },
                {
                  "tr": "Banyo",
                  "en": "Bathroom",
                  "ar": "حمام",
                  "fa": "حمام",
                  "ru": "Ванная"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_ev_aile_5_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Banyo",
                "en": "Bathroom",
                "ar": "حمام",
                "fa": "حمام",
                "ru": "Ванная"
              },
              "options": [
                {
                  "tr": "Ağabey",
                  "en": "Older brother",
                  "ar": "أخ أكبر",
                  "fa": "برادر بزرگتر",
                  "ru": "Старший брат"
                },
                {
                  "tr": "Baba",
                  "en": "Father",
                  "ar": "أب",
                  "fa": "پدر",
                  "ru": "Папа"
                },
                {
                  "tr": "Banyo",
                  "en": "Bathroom",
                  "ar": "حمام",
                  "fa": "حمام",
                  "ru": "Ванная"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_ev_aile_5_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Salon",
                "en": "Living room",
                "ar": "غرفة المعيشة",
                "fa": "پذیرایی",
                "ru": "Гостиная"
              },
              "options": [
                {
                  "tr": "Salon",
                  "en": "Living room",
                  "ar": "غرفة المعيشة",
                  "fa": "پذیرایی",
                  "ru": "Гостиная"
                },
                {
                  "tr": "Oda",
                  "en": "Room",
                  "ar": "غرفة",
                  "fa": "اتاق",
                  "ru": "Комната"
                },
                {
                  "tr": "Baba",
                  "en": "Father",
                  "ar": "أب",
                  "fa": "پدر",
                  "ru": "Папа"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_ev_aile_5_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Balkon",
                "en": "Balcony",
                "ar": "شرفة",
                "fa": "بالکن",
                "ru": "Балкон"
              },
              "options": [
                {
                  "tr": "Büyük",
                  "en": "Big",
                  "ar": "كبير",
                  "fa": "بزرگ",
                  "ru": "Большой"
                },
                {
                  "tr": "Yeni",
                  "en": "New",
                  "ar": "جديد",
                  "fa": "جدید",
                  "ru": "Новый"
                },
                {
                  "tr": "Balkon",
                  "en": "Balcony",
                  "ar": "شرفة",
                  "fa": "بالکن",
                  "ru": "Балкон"
                }
              ],
              "correctAnswerIndex": 2
            }
          ]
        },
        {
          "id": "a1_ev_aile_6",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_ev_aile_6_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Oda",
                    "en": "Room",
                    "ar": "غرفة",
                    "fa": "اتاق",
                    "ru": "Комната"
                  },
                  "translation": {
                    "tr": "Room",
                    "en": "Room",
                    "ar": "غرفة",
                    "fa": "اتاق",
                    "ru": "Комната"
                  }
                },
                {
                  "word": {
                    "tr": "Mutfak",
                    "en": "Kitchen",
                    "ar": "مطبخ",
                    "fa": "آشپزخانه",
                    "ru": "Кухня"
                  },
                  "translation": {
                    "tr": "Kitchen",
                    "en": "Kitchen",
                    "ar": "مطبخ",
                    "fa": "آشپزخانه",
                    "ru": "Кухня"
                  }
                },
                {
                  "word": {
                    "tr": "Banyo",
                    "en": "Bathroom",
                    "ar": "حمام",
                    "fa": "حمام",
                    "ru": "Ванная"
                  },
                  "translation": {
                    "tr": "Bathroom",
                    "en": "Bathroom",
                    "ar": "حمام",
                    "fa": "حمام",
                    "ru": "Ванная"
                  }
                },
                {
                  "word": {
                    "tr": "Salon",
                    "en": "Living room",
                    "ar": "غرفة المعيشة",
                    "fa": "پذیرایی",
                    "ru": "Гостиная"
                  },
                  "translation": {
                    "tr": "Living room",
                    "en": "Living room",
                    "ar": "غرفة المعيشة",
                    "fa": "پذیرایی",
                    "ru": "Гостиная"
                  }
                },
                {
                  "word": {
                    "tr": "Balkon",
                    "en": "Balcony",
                    "ar": "شرفة",
                    "fa": "بالکن",
                    "ru": "Балкон"
                  },
                  "translation": {
                    "tr": "Balcony",
                    "en": "Balcony",
                    "ar": "شرفة",
                    "fa": "بالکن",
                    "ru": "Балкон"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_ev_aile_7",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_ev_aile_7_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Evimde balkon var",
                "en": "My house has a balcony",
                "ar": "في منزلي شرفة",
                "fa": "خانه‌ام بالکن دارد",
                "ru": "В моем доме есть балкон"
              },
              "correctOrder": [
                "Evimde",
                "balkon",
                "var"
              ],
              "words": [
                "var",
                "Evimde",
                "balkon"
              ]
            },
            {
              "id": "a1_ev_aile_7_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Ailem Ankara'da yaşıyor",
                "en": "My family lives in Ankara",
                "ar": "عائلتي تعيش في أنقرة",
                "fa": "خانواده‌ام در آنکارا زندگی می‌کنند",
                "ru": "Моя семья живет в Анкаре"
              },
              "correctOrder": [
                "Ailem",
                "Ankara'da",
                "yaşıyor"
              ],
              "words": [
                "Ankara'da",
                "Ailem",
                "yaşıyor"
              ]
            },
            {
              "id": "a1_ev_aile_7_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Kaç kardeşin var?",
                "en": "How many siblings do you have?",
                "ar": "كم أخاً/أختاً لديك؟",
                "fa": "چند خواهر/برادر داری؟",
                "ru": "Сколько у тебя братьев/сестер?"
              },
              "correctOrder": [
                "Kaç",
                "kardeşin",
                "var?"
              ],
              "words": [
                "kardeşin",
                "Kaç",
                "var?"
              ]
            },
            {
              "id": "a1_ev_aile_7_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "Benim iki ",
                " var"
              ],
              "missingWord": "kardeşim",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "kardeşim"
              ]
            },
            {
              "id": "a1_ev_aile_7_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "Evimiz çok ",
                ""
              ],
              "missingWord": "büyük",
              "options": [
                "büyük",
                "Yanlış1",
                "Yanlış2"
              ]
            }
          ]
        },
        {
          "id": "a1_ev_aile_8",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_ev_aile_8_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Aile üyelerini tanıtma",
                "en": "Introducing family members",
                "ar": "التعريف بأفراد العائلة",
                "fa": "معرفی اعضای خانواده",
                "ru": "Представление членов семьи"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Ailende kimler var?",
                    "en": "Who is in your family?",
                    "ar": "من هم أفراد عائلتك؟",
                    "fa": "چه کسانی در خانواده‌ات هستند؟",
                    "ru": "Кто есть в твоей семье?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Annem, babam ve bir ablam var.",
                        "en": "I have my mother, my father, and an older sister.",
                        "ar": "لدي أمي، أبي، وأخت كبرى.",
                        "fa": "مادرم، پدرم و یک خواهر بزرگتر دارم.",
                        "ru": "У меня есть мама, папа и старшая сестра."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Ben yalnız yaşıyorum.",
                        "en": "I live alone.",
                        "ar": "أنا أعيش وحدي.",
                        "fa": "من تنها زندگی می‌کنم.",
                        "ru": "Я живу один."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Mutfak büyük.",
                        "en": "The kitchen is big.",
                        "ar": "المطبخ كبير.",
                        "fa": "آشپزخانه بزرگ است.",
                        "ru": "Кухня большая."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Ablan ne iş yapıyor?",
                    "en": "What does your older sister do?",
                    "ar": "ماذا تعمل أختك الكبرى؟",
                    "fa": "خواهر بزرگترت چه کار می‌کند؟",
                    "ru": "Кем работает твоя старшая сестра?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "O öğretmen.",
                        "en": "She is a teacher.",
                        "ar": "إنها معلمة.",
                        "fa": "او معلم است.",
                        "ru": "Она учитель."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "O da öğrenci.",
                        "en": "She is also a student.",
                        "ar": "هي أيضاً طالبة.",
                        "fa": "او هم دانشجو است.",
                        "ru": "Она тоже студентка."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Çok ucuz.",
                        "en": "Very cheap.",
                        "ar": "رخيص جداً.",
                        "fa": "خیلی ارزان است.",
                        "ru": "Очень дешево."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_ev_aile_9",
          "type": "boss_fight",
          "xpReward": 50,
          "coinReward": 25,
          "exercises": [
            {
              "id": "a1_ev_aile_9_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Büyük",
                "en": "Big",
                "ar": "كبير",
                "fa": "بزرگ",
                "ru": "Большой"
              },
              "options": [
                {
                  "tr": "Kardeş",
                  "en": "Sibling",
                  "ar": "أخ/أخت",
                  "fa": "خواهر/برادر",
                  "ru": "Брат/Сестра"
                },
                {
                  "tr": "Büyük",
                  "en": "Big",
                  "ar": "كبير",
                  "fa": "بزرگ",
                  "ru": "Большой"
                },
                {
                  "tr": "Balkon",
                  "en": "Balcony",
                  "ar": "شرفة",
                  "fa": "بالکن",
                  "ru": "Балкон"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_ev_aile_9_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Küçük",
                "en": "Small",
                "ar": "صغير",
                "fa": "کوچک",
                "ru": "Маленький"
              },
              "options": [
                {
                  "tr": "Balkon",
                  "en": "Balcony",
                  "ar": "شرفة",
                  "fa": "بالکن",
                  "ru": "Балкон"
                },
                {
                  "tr": "Küçük",
                  "en": "Small",
                  "ar": "صغير",
                  "fa": "کوچک",
                  "ru": "Маленький"
                },
                {
                  "tr": "Salon",
                  "en": "Living room",
                  "ar": "غرفة المعيشة",
                  "fa": "پذیرایی",
                  "ru": "Гостиная"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_ev_aile_9_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Eski",
                "en": "Old",
                "ar": "قديم",
                "fa": "قدیمی",
                "ru": "Старый"
              },
              "options": [
                {
                  "tr": "Eski",
                  "en": "Old",
                  "ar": "قديم",
                  "fa": "قدیمی",
                  "ru": "Старый"
                },
                {
                  "tr": "Banyo",
                  "en": "Bathroom",
                  "ar": "حمام",
                  "fa": "حمام",
                  "ru": "Ванная"
                },
                {
                  "tr": "Balkon",
                  "en": "Balcony",
                  "ar": "شرفة",
                  "fa": "بالکن",
                  "ru": "Балкон"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_ev_aile_9_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Yeni",
                "en": "New",
                "ar": "جديد",
                "fa": "جدید",
                "ru": "Новый"
              },
              "options": [
                {
                  "tr": "Yeni",
                  "en": "New",
                  "ar": "جديد",
                  "fa": "جدید",
                  "ru": "Новый"
                },
                {
                  "tr": "Banyo",
                  "en": "Bathroom",
                  "ar": "حمام",
                  "fa": "حمام",
                  "ru": "Ванная"
                },
                {
                  "tr": "Abla",
                  "en": "Older sister",
                  "ar": "أخت كبرى",
                  "fa": "خواهر بزرگتر",
                  "ru": "Старшая сестра"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_ev_aile_9_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Evimde balkon var",
                "en": "My house has a balcony",
                "ar": "في منزلي شرفة",
                "fa": "خانه‌ام بالکن دارد",
                "ru": "В моем доме есть балкон"
              },
              "correctOrder": [
                "Evimde",
                "balkon",
                "var"
              ],
              "words": [
                "Evimde",
                "balkon",
                "var"
              ]
            },
            {
              "id": "a1_ev_aile_9_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Ailem Ankara'da yaşıyor",
                "en": "My family lives in Ankara",
                "ar": "عائلتي تعيش في أنقرة",
                "fa": "خانواده‌ام در آنکارا زندگی می‌کنند",
                "ru": "Моя семья живет в Анкаре"
              },
              "correctOrder": [
                "Ailem",
                "Ankara'da",
                "yaşıyor"
              ],
              "words": [
                "Ankara'da",
                "yaşıyor",
                "Ailem"
              ]
            },
            {
              "id": "a1_ev_aile_9_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "Benim iki ",
                " var"
              ],
              "missingWord": "kardeşim",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "kardeşim"
              ]
            },
            {
              "id": "a1_ev_aile_9_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " çok büyük"
              ],
              "missingWord": "Evimiz",
              "options": [
                "Evimiz",
                "Yanlış1",
                "Yanlış2"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a1_kafe",
      "title": "Kafe & Restoran",
      "description": "Kafe & Restoran (A1)",
      "emoji": "☕",
      "color": "from-violet-400 to-purple-600",
      "lessons": [
        {
          "id": "a1_kafe_1",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_kafe_1_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Çay",
                "en": "Tea",
                "ar": "شاي",
                "fa": "چای",
                "ru": "Чай"
              },
              "options": [
                {
                  "tr": "Çay",
                  "en": "Tea",
                  "ar": "شاي",
                  "fa": "چای",
                  "ru": "Чай"
                },
                {
                  "tr": "Su",
                  "en": "Water",
                  "ar": "ماء",
                  "fa": "آب",
                  "ru": "Вода"
                },
                {
                  "tr": "Ekmek",
                  "en": "Bread",
                  "ar": "خبز",
                  "fa": "نان",
                  "ru": "Хлеб"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_kafe_1_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Kahve",
                "en": "Coffee",
                "ar": "قهوة",
                "fa": "قهوه",
                "ru": "Кофе"
              },
              "options": [
                {
                  "tr": "Kahve",
                  "en": "Coffee",
                  "ar": "قهوة",
                  "fa": "قهوه",
                  "ru": "Кофе"
                },
                {
                  "tr": "Tatlı",
                  "en": "Dessert",
                  "ar": "حلوى",
                  "fa": "دسر",
                  "ru": "Десерт"
                },
                {
                  "tr": "Ekmek",
                  "en": "Bread",
                  "ar": "خبز",
                  "fa": "نان",
                  "ru": "Хлеб"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_kafe_1_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Su",
                "en": "Water",
                "ar": "ماء",
                "fa": "آب",
                "ru": "Вода"
              },
              "options": [
                {
                  "tr": "Su",
                  "en": "Water",
                  "ar": "ماء",
                  "fa": "آب",
                  "ru": "Вода"
                },
                {
                  "tr": "Ayran",
                  "en": "Ayran (yoghurt drink)",
                  "ar": "عيران",
                  "fa": "دوغ",
                  "ru": "Айран"
                },
                {
                  "tr": "Tatlı",
                  "en": "Dessert",
                  "ar": "حلوى",
                  "fa": "دسر",
                  "ru": "Десерт"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_kafe_1_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Ayran",
                "en": "Ayran (yoghurt drink)",
                "ar": "عيران",
                "fa": "دوغ",
                "ru": "Айран"
              },
              "options": [
                {
                  "tr": "Ayran",
                  "en": "Ayran (yoghurt drink)",
                  "ar": "عيران",
                  "fa": "دوغ",
                  "ru": "Айран"
                },
                {
                  "tr": "Çay",
                  "en": "Tea",
                  "ar": "شاي",
                  "fa": "چای",
                  "ru": "Чай"
                },
                {
                  "tr": "Ekmek",
                  "en": "Bread",
                  "ar": "خبز",
                  "fa": "نان",
                  "ru": "Хлеб"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_kafe_1_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Çorba",
                "en": "Soup",
                "ar": "حساء",
                "fa": "سوپ",
                "ru": "Суп"
              },
              "options": [
                {
                  "tr": "Afiyet olsun",
                  "en": "Bon appetit",
                  "ar": "بالعافية",
                  "fa": "نوش جان",
                  "ru": "Приятного аппетита"
                },
                {
                  "tr": "Çorba",
                  "en": "Soup",
                  "ar": "حساء",
                  "fa": "سوپ",
                  "ru": "Суп"
                },
                {
                  "tr": "Pilav",
                  "en": "Rice",
                  "ar": "أرز",
                  "fa": "برنج",
                  "ru": "Рис"
                }
              ],
              "correctAnswerIndex": 1
            }
          ]
        },
        {
          "id": "a1_kafe_2",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_kafe_2_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Çay",
                    "en": "Tea",
                    "ar": "شاي",
                    "fa": "چای",
                    "ru": "Чай"
                  },
                  "translation": {
                    "tr": "Tea",
                    "en": "Tea",
                    "ar": "شاي",
                    "fa": "چای",
                    "ru": "Чай"
                  }
                },
                {
                  "word": {
                    "tr": "Kahve",
                    "en": "Coffee",
                    "ar": "قهوة",
                    "fa": "قهوه",
                    "ru": "Кофе"
                  },
                  "translation": {
                    "tr": "Coffee",
                    "en": "Coffee",
                    "ar": "قهوة",
                    "fa": "قهوه",
                    "ru": "Кофе"
                  }
                },
                {
                  "word": {
                    "tr": "Su",
                    "en": "Water",
                    "ar": "ماء",
                    "fa": "آب",
                    "ru": "Вода"
                  },
                  "translation": {
                    "tr": "Water",
                    "en": "Water",
                    "ar": "ماء",
                    "fa": "آب",
                    "ru": "Вода"
                  }
                },
                {
                  "word": {
                    "tr": "Ayran",
                    "en": "Ayran (yoghurt drink)",
                    "ar": "عيران",
                    "fa": "دوغ",
                    "ru": "Айран"
                  },
                  "translation": {
                    "tr": "Ayran (yoghurt drink)",
                    "en": "Ayran (yoghurt drink)",
                    "ar": "عيران",
                    "fa": "دوغ",
                    "ru": "Айран"
                  }
                },
                {
                  "word": {
                    "tr": "Çorba",
                    "en": "Soup",
                    "ar": "حساء",
                    "fa": "سوپ",
                    "ru": "Суп"
                  },
                  "translation": {
                    "tr": "Soup",
                    "en": "Soup",
                    "ar": "حساء",
                    "fa": "سوپ",
                    "ru": "Суп"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_kafe_3",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_kafe_3_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Bir çay lütfen",
                "en": "A tea please",
                "ar": "شاي واحد من فضلك",
                "fa": "یک چای لطفاً",
                "ru": "Один чай, пожалуйста"
              },
              "correctOrder": [
                "Bir",
                "çay",
                "lütfen"
              ],
              "words": [
                "çay",
                "lütfen",
                "Bir"
              ]
            },
            {
              "id": "a1_kafe_3_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Hesap lütfen",
                "en": "Check please",
                "ar": "الحساب من فضلك",
                "fa": "صورتحساب لطفاً",
                "ru": "Счет, пожалуйста"
              },
              "correctOrder": [
                "Hesap",
                "lütfen"
              ],
              "words": [
                "Hesap",
                "lütfen"
              ]
            },
            {
              "id": "a1_kafe_3_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Vejetaryen yemek var mı?",
                "en": "Is there vegetarian food?",
                "ar": "هل يوجد طعام نباتي؟",
                "fa": "غذاي گیاهی دارید؟",
                "ru": "Есть вегетарианская еда?"
              },
              "correctOrder": [
                "Vejetaryen",
                "yemek",
                "var",
                "mı?"
              ],
              "words": [
                "Vejetaryen",
                "yemek",
                "mı?",
                "var"
              ]
            },
            {
              "id": "a1_kafe_3_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " dahil mi?"
              ],
              "missingWord": "Servis",
              "options": [
                "Servis",
                "Yanlış1",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_kafe_3_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " olsun"
              ],
              "missingWord": "Afiyet",
              "options": [
                "Afiyet",
                "Yanlış1",
                "Yanlış2"
              ]
            }
          ]
        },
        {
          "id": "a1_kafe_4",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_kafe_4_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Kafede sipariş verme",
                "en": "Ordering at a café",
                "ar": "الطلب في مقهى",
                "fa": "سفارش در کافه",
                "ru": "Заказ в кафе"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Hoş geldiniz, ne alırdınız?",
                    "en": "Welcome, what would you like?",
                    "ar": "أهلاً بك، ماذا تطلب؟",
                    "fa": "خوش آمدید، چه میل دارید؟",
                    "ru": "Добро пожаловать, что будете заказывать?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Bir kahve lütfen.",
                        "en": "A coffee please.",
                        "ar": "قهوة من فضلك.",
                        "fa": "یک قهوه لطفاً.",
                        "ru": "Один кофе, пожалуйста."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Ne tavsiye edersiniz?",
                        "en": "What do you recommend?",
                        "ar": "بماذا تنصح؟",
                        "fa": "چه چیزی پیشنهاد می‌کنید؟",
                        "ru": "Что посоветуете?"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "İyi geceler.",
                        "en": "Good night.",
                        "ar": "تصبح على خير.",
                        "fa": "شب بخیر.",
                        "ru": "Спокойной ночи."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Tabii, kahvenizi nasıl istersiniz?",
                    "en": "Sure, how would you like your coffee?",
                    "ar": "بالتأكيد، كيف تريد قهوتك؟",
                    "fa": "البته، قهوه‌تان را چطور میل دارید؟",
                    "ru": "Конечно, какой кофе предпочитаете?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Sade lütfen.",
                        "en": "Plain (no sugar) please.",
                        "ar": "سادة من فضلك.",
                        "fa": "ساده لطفاً.",
                        "ru": "Без сахара, пожалуйста."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Sütlü olsun.",
                        "en": "With milk.",
                        "ar": "مع الحليب.",
                        "fa": "با شیر باشد.",
                        "ru": "С молоком."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Balkon var.",
                        "en": "There is a balcony.",
                        "ar": "يوجد شرفة.",
                        "fa": "بالکن دارد.",
                        "ru": "Есть балкон."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_kafe_5",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_kafe_5_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Ekmek",
                "en": "Bread",
                "ar": "خبز",
                "fa": "نان",
                "ru": "Хлеб"
              },
              "options": [
                {
                  "tr": "Çorba",
                  "en": "Soup",
                  "ar": "حساء",
                  "fa": "سوپ",
                  "ru": "Суп"
                },
                {
                  "tr": "Vejetaryen",
                  "en": "Vegetarian",
                  "ar": "نباتي",
                  "fa": "گیاهخوار",
                  "ru": "Вегетарианец"
                },
                {
                  "tr": "Ekmek",
                  "en": "Bread",
                  "ar": "خبز",
                  "fa": "نان",
                  "ru": "Хлеб"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_kafe_5_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Pilav",
                "en": "Rice",
                "ar": "أرز",
                "fa": "برنج",
                "ru": "Рис"
              },
              "options": [
                {
                  "tr": "Pilav",
                  "en": "Rice",
                  "ar": "أرز",
                  "fa": "برنج",
                  "ru": "Рис"
                },
                {
                  "tr": "Tatlı",
                  "en": "Dessert",
                  "ar": "حلوى",
                  "fa": "دسر",
                  "ru": "Десерт"
                },
                {
                  "tr": "Çorba",
                  "en": "Soup",
                  "ar": "حساء",
                  "fa": "سوپ",
                  "ru": "Суп"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_kafe_5_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Kebap",
                "en": "Kebab",
                "ar": "كباب",
                "fa": "کباب",
                "ru": "Кебаб"
              },
              "options": [
                {
                  "tr": "Pilav",
                  "en": "Rice",
                  "ar": "أرز",
                  "fa": "برنج",
                  "ru": "Рис"
                },
                {
                  "tr": "Hesap",
                  "en": "Bill",
                  "ar": "الحساب",
                  "fa": "صورتحساب",
                  "ru": "Счет"
                },
                {
                  "tr": "Kebap",
                  "en": "Kebab",
                  "ar": "كباب",
                  "fa": "کباب",
                  "ru": "Кебаб"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_kafe_5_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Tatlı",
                "en": "Dessert",
                "ar": "حلوى",
                "fa": "دسر",
                "ru": "Десерт"
              },
              "options": [
                {
                  "tr": "Afiyet olsun",
                  "en": "Bon appetit",
                  "ar": "بالعافية",
                  "fa": "نوش جان",
                  "ru": "Приятного аппетита"
                },
                {
                  "tr": "Su",
                  "en": "Water",
                  "ar": "ماء",
                  "fa": "آب",
                  "ru": "Вода"
                },
                {
                  "tr": "Tatlı",
                  "en": "Dessert",
                  "ar": "حلوى",
                  "fa": "دسر",
                  "ru": "Десерт"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_kafe_5_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Dondurma",
                "en": "Ice cream",
                "ar": "آيس كريم",
                "fa": "بستنی",
                "ru": "Мороженое"
              },
              "options": [
                {
                  "tr": "Kebap",
                  "en": "Kebab",
                  "ar": "كباب",
                  "fa": "کباب",
                  "ru": "Кебаб"
                },
                {
                  "tr": "Dondurma",
                  "en": "Ice cream",
                  "ar": "آيس كريم",
                  "fa": "بستنی",
                  "ru": "Мороженое"
                },
                {
                  "tr": "Tatlı",
                  "en": "Dessert",
                  "ar": "حلوى",
                  "fa": "دسر",
                  "ru": "Десерт"
                }
              ],
              "correctAnswerIndex": 1
            }
          ]
        },
        {
          "id": "a1_kafe_6",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_kafe_6_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Ekmek",
                    "en": "Bread",
                    "ar": "خبز",
                    "fa": "نان",
                    "ru": "Хлеб"
                  },
                  "translation": {
                    "tr": "Bread",
                    "en": "Bread",
                    "ar": "خبز",
                    "fa": "نان",
                    "ru": "Хлеб"
                  }
                },
                {
                  "word": {
                    "tr": "Pilav",
                    "en": "Rice",
                    "ar": "أرز",
                    "fa": "برنج",
                    "ru": "Рис"
                  },
                  "translation": {
                    "tr": "Rice",
                    "en": "Rice",
                    "ar": "أرز",
                    "fa": "برنج",
                    "ru": "Рис"
                  }
                },
                {
                  "word": {
                    "tr": "Kebap",
                    "en": "Kebab",
                    "ar": "كباب",
                    "fa": "کباب",
                    "ru": "Кебаб"
                  },
                  "translation": {
                    "tr": "Kebab",
                    "en": "Kebab",
                    "ar": "كباب",
                    "fa": "کباب",
                    "ru": "Кебаб"
                  }
                },
                {
                  "word": {
                    "tr": "Tatlı",
                    "en": "Dessert",
                    "ar": "حلوى",
                    "fa": "دسر",
                    "ru": "Десерт"
                  },
                  "translation": {
                    "tr": "Dessert",
                    "en": "Dessert",
                    "ar": "حلوى",
                    "fa": "دسر",
                    "ru": "Десерт"
                  }
                },
                {
                  "word": {
                    "tr": "Dondurma",
                    "en": "Ice cream",
                    "ar": "آيس كريم",
                    "fa": "بستنی",
                    "ru": "Мороженое"
                  },
                  "translation": {
                    "tr": "Ice cream",
                    "en": "Ice cream",
                    "ar": "آيس كريم",
                    "fa": "بستنی",
                    "ru": "Мороженое"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_kafe_7",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_kafe_7_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Bir çay lütfen",
                "en": "A tea please",
                "ar": "شاي واحد من فضلك",
                "fa": "یک چای لطفاً",
                "ru": "Один чай, пожалуйста"
              },
              "correctOrder": [
                "Bir",
                "çay",
                "lütfen"
              ],
              "words": [
                "Bir",
                "çay",
                "lütfen"
              ]
            },
            {
              "id": "a1_kafe_7_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Hesap lütfen",
                "en": "Check please",
                "ar": "الحساب من فضلك",
                "fa": "صورتحساب لطفاً",
                "ru": "Счет, пожалуйста"
              },
              "correctOrder": [
                "Hesap",
                "lütfen"
              ],
              "words": [
                "Hesap",
                "lütfen"
              ]
            },
            {
              "id": "a1_kafe_7_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Vejetaryen yemek var mı?",
                "en": "Is there vegetarian food?",
                "ar": "هل يوجد طعام نباتي؟",
                "fa": "غذاي گیاهی دارید؟",
                "ru": "Есть вегетарианская еда?"
              },
              "correctOrder": [
                "Vejetaryen",
                "yemek",
                "var",
                "mı?"
              ],
              "words": [
                "Vejetaryen",
                "yemek",
                "var",
                "mı?"
              ]
            },
            {
              "id": "a1_kafe_7_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " dahil mi?"
              ],
              "missingWord": "Servis",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "Servis"
              ]
            },
            {
              "id": "a1_kafe_7_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " olsun"
              ],
              "missingWord": "Afiyet",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "Afiyet"
              ]
            }
          ]
        },
        {
          "id": "a1_kafe_8",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_kafe_8_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Siparişte hata",
                "en": "Error in the order",
                "ar": "خطأ في الطلب",
                "fa": "اشتباه در سفارش",
                "ru": "Ошибка в заказе"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Buyurun, çayınız.",
                    "en": "Here is your tea.",
                    "ar": "تفضل، شايك.",
                    "fa": "بفرمایید، چای شما.",
                    "ru": "Пожалуйста, ваш чай."
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Affedersiniz, ben kahve istemiştim.",
                        "en": "Excuse me, I asked for coffee.",
                        "ar": "عذراً، لقد طلبت قهوة.",
                        "fa": "ببخشید، من قهوه خواسته بودم.",
                        "ru": "Извините, я заказывал кофе."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Sorun değil, çay da içerim.",
                        "en": "No problem, I can drink tea too.",
                        "ar": "لا بأس، سأشرب الشاي أيضاً.",
                        "fa": "مشکلی نیست، چای هم می‌خورم.",
                        "ru": "Ничего страшного, выпью и чай."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Taze mi?",
                        "en": "Is it fresh?",
                        "ar": "هل هو طازج؟",
                        "fa": "تازه است؟",
                        "ru": "Свежий?"
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Çok özür dilerim! Hemen kahvenizi getiriyorum.",
                    "en": "I am so sorry! I will bring your coffee right away.",
                    "ar": "أعتذر بشدة! سأحضر قهوتك حالاً.",
                    "fa": "خیلی عذر می‌خوام! الان قهوه‌تان را می‌آورم.",
                    "ru": "Очень извиняюсь! Сейчас принесу ваш кофе."
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Teşekkürler.",
                        "en": "Thanks.",
                        "ar": "شكراً.",
                        "fa": "ممنون.",
                        "ru": "Спасибо."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Lütfen hızlı olun.",
                        "en": "Please be quick.",
                        "ar": "رجاءً كن سريعاً.",
                        "fa": "لطفاً سریع باشید.",
                        "ru": "Пожалуйста, побыстрее."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Kaç lira?",
                        "en": "How many liras?",
                        "ar": "كم ليرة؟",
                        "fa": "چند لیر؟",
                        "ru": "Сколько лир?"
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_kafe_9",
          "type": "boss_fight",
          "xpReward": 50,
          "coinReward": 25,
          "exercises": [
            {
              "id": "a1_kafe_9_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Hesap",
                "en": "Bill",
                "ar": "الحساب",
                "fa": "صورتحساب",
                "ru": "Счет"
              },
              "options": [
                {
                  "tr": "Hesap",
                  "en": "Bill",
                  "ar": "الحساب",
                  "fa": "صورتحساب",
                  "ru": "Счет"
                },
                {
                  "tr": "Çorba",
                  "en": "Soup",
                  "ar": "حساء",
                  "fa": "سوپ",
                  "ru": "Суп"
                },
                {
                  "tr": "Tatlı",
                  "en": "Dessert",
                  "ar": "حلوى",
                  "fa": "دسر",
                  "ru": "Десерт"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_kafe_9_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Afiyet olsun",
                "en": "Bon appetit",
                "ar": "بالعافية",
                "fa": "نوش جان",
                "ru": "Приятного аппетита"
              },
              "options": [
                {
                  "tr": "Afiyet olsun",
                  "en": "Bon appetit",
                  "ar": "بالعافية",
                  "fa": "نوش جان",
                  "ru": "Приятного аппетита"
                },
                {
                  "tr": "Pilav",
                  "en": "Rice",
                  "ar": "أرز",
                  "fa": "برنج",
                  "ru": "Рис"
                },
                {
                  "tr": "Ayran",
                  "en": "Ayran (yoghurt drink)",
                  "ar": "عيران",
                  "fa": "دوغ",
                  "ru": "Айран"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_kafe_9_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Servis",
                "en": "Service",
                "ar": "الخدمة",
                "fa": "سرویس",
                "ru": "Обслуживание"
              },
              "options": [
                {
                  "tr": "Vejetaryen",
                  "en": "Vegetarian",
                  "ar": "نباتي",
                  "fa": "گیاهخوار",
                  "ru": "Вегетарианец"
                },
                {
                  "tr": "Tatlı",
                  "en": "Dessert",
                  "ar": "حلوى",
                  "fa": "دسر",
                  "ru": "Десерт"
                },
                {
                  "tr": "Servis",
                  "en": "Service",
                  "ar": "الخدمة",
                  "fa": "سرویس",
                  "ru": "Обслуживание"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_kafe_9_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Vejetaryen",
                "en": "Vegetarian",
                "ar": "نباتي",
                "fa": "گیاهخوار",
                "ru": "Вегетарианец"
              },
              "options": [
                {
                  "tr": "Servis",
                  "en": "Service",
                  "ar": "الخدمة",
                  "fa": "سرویس",
                  "ru": "Обслуживание"
                },
                {
                  "tr": "Vejetaryen",
                  "en": "Vegetarian",
                  "ar": "نباتي",
                  "fa": "گیاهخوار",
                  "ru": "Вегетарианец"
                },
                {
                  "tr": "Pilav",
                  "en": "Rice",
                  "ar": "أرز",
                  "fa": "برنج",
                  "ru": "Рис"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_kafe_9_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Bir çay lütfen",
                "en": "A tea please",
                "ar": "شاي واحد من فضلك",
                "fa": "یک چای لطفاً",
                "ru": "Один чай, пожалуйста"
              },
              "correctOrder": [
                "Bir",
                "çay",
                "lütfen"
              ],
              "words": [
                "Bir",
                "lütfen",
                "çay"
              ]
            },
            {
              "id": "a1_kafe_9_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Hesap lütfen",
                "en": "Check please",
                "ar": "الحساب من فضلك",
                "fa": "صورتحساب لطفاً",
                "ru": "Счет, пожалуйста"
              },
              "correctOrder": [
                "Hesap",
                "lütfen"
              ],
              "words": [
                "Hesap",
                "lütfen"
              ]
            },
            {
              "id": "a1_kafe_9_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " dahil mi?"
              ],
              "missingWord": "Servis",
              "options": [
                "Servis",
                "Yanlış1",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_kafe_9_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " olsun"
              ],
              "missingWord": "Afiyet",
              "options": [
                "Yanlış1",
                "Yanlış2",
                "Afiyet"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a1_sayilar",
      "title": "Sayılar & Zaman",
      "description": "Sayılar & Zaman (A1)",
      "emoji": "🔢",
      "color": "from-sky-400 to-blue-600",
      "lessons": [
        {
          "id": "a1_sayilar_1",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_sayilar_1_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Bir",
                "en": "One",
                "ar": "واحد",
                "fa": "یک",
                "ru": "Один"
              },
              "options": [
                {
                  "tr": "Çeyrek",
                  "en": "Quarter",
                  "ar": "ربع",
                  "fa": "ربع",
                  "ru": "Четверть"
                },
                {
                  "tr": "Pazartesi",
                  "en": "Monday",
                  "ar": "الاثنين",
                  "fa": "دوشنبه",
                  "ru": "Понедельник"
                },
                {
                  "tr": "Bir",
                  "en": "One",
                  "ar": "واحد",
                  "fa": "یک",
                  "ru": "Один"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_sayilar_1_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "İki",
                "en": "Two",
                "ar": "اثنان",
                "fa": "دو",
                "ru": "Два"
              },
              "options": [
                {
                  "tr": "İki",
                  "en": "Two",
                  "ar": "اثنان",
                  "fa": "دو",
                  "ru": "Два"
                },
                {
                  "tr": "Hafta",
                  "en": "Week",
                  "ar": "أسبوع",
                  "fa": "هفته",
                  "ru": "Неделя"
                },
                {
                  "tr": "Dört",
                  "en": "Four",
                  "ar": "أربعة",
                  "fa": "چهار",
                  "ru": "Четыре"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_sayilar_1_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Üç",
                "en": "Three",
                "ar": "ثلاثة",
                "fa": "سه",
                "ru": "Три"
              },
              "options": [
                {
                  "tr": "Bir",
                  "en": "One",
                  "ar": "واحد",
                  "fa": "یک",
                  "ru": "Один"
                },
                {
                  "tr": "Dün",
                  "en": "Yesterday",
                  "ar": "أمس",
                  "fa": "دیروز",
                  "ru": "Вчера"
                },
                {
                  "tr": "Üç",
                  "en": "Three",
                  "ar": "ثلاثة",
                  "fa": "سه",
                  "ru": "Три"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_sayilar_1_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Dört",
                "en": "Four",
                "ar": "أربعة",
                "fa": "چهار",
                "ru": "Четыре"
              },
              "options": [
                {
                  "tr": "İki",
                  "en": "Two",
                  "ar": "اثنان",
                  "fa": "دو",
                  "ru": "Два"
                },
                {
                  "tr": "Buçuk",
                  "en": "Half",
                  "ar": "نصف",
                  "fa": "نیم",
                  "ru": "Половина"
                },
                {
                  "tr": "Dört",
                  "en": "Four",
                  "ar": "أربعة",
                  "fa": "چهار",
                  "ru": "Четыре"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_sayilar_1_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Beş",
                "en": "Five",
                "ar": "خمسة",
                "fa": "پنج",
                "ru": "Пять"
              },
              "options": [
                {
                  "tr": "Beş",
                  "en": "Five",
                  "ar": "خمسة",
                  "fa": "پنج",
                  "ru": "Пять"
                },
                {
                  "tr": "Ay",
                  "en": "Month",
                  "ar": "شهر",
                  "fa": "ماه",
                  "ru": "Месяц"
                },
                {
                  "tr": "Bugün",
                  "en": "Today",
                  "ar": "اليوم",
                  "fa": "امروز",
                  "ru": "Сегодня"
                }
              ],
              "correctAnswerIndex": 0
            }
          ]
        },
        {
          "id": "a1_sayilar_2",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_sayilar_2_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Bir",
                    "en": "One",
                    "ar": "واحد",
                    "fa": "یک",
                    "ru": "Один"
                  },
                  "translation": {
                    "tr": "One",
                    "en": "One",
                    "ar": "واحد",
                    "fa": "یک",
                    "ru": "Один"
                  }
                },
                {
                  "word": {
                    "tr": "İki",
                    "en": "Two",
                    "ar": "اثنان",
                    "fa": "دو",
                    "ru": "Два"
                  },
                  "translation": {
                    "tr": "Two",
                    "en": "Two",
                    "ar": "اثنان",
                    "fa": "دو",
                    "ru": "Два"
                  }
                },
                {
                  "word": {
                    "tr": "Üç",
                    "en": "Three",
                    "ar": "ثلاثة",
                    "fa": "سه",
                    "ru": "Три"
                  },
                  "translation": {
                    "tr": "Three",
                    "en": "Three",
                    "ar": "ثلاثة",
                    "fa": "سه",
                    "ru": "Три"
                  }
                },
                {
                  "word": {
                    "tr": "Dört",
                    "en": "Four",
                    "ar": "أربعة",
                    "fa": "چهار",
                    "ru": "Четыре"
                  },
                  "translation": {
                    "tr": "Four",
                    "en": "Four",
                    "ar": "أربعة",
                    "fa": "چهار",
                    "ru": "Четыре"
                  }
                },
                {
                  "word": {
                    "tr": "Beş",
                    "en": "Five",
                    "ar": "خمسة",
                    "fa": "پنج",
                    "ru": "Пять"
                  },
                  "translation": {
                    "tr": "Five",
                    "en": "Five",
                    "ar": "خمسة",
                    "fa": "پنج",
                    "ru": "Пять"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_sayilar_3",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_sayilar_3_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Saat kaç?",
                "en": "What time is it?",
                "ar": "كم الساعة؟",
                "fa": "ساعت چند است؟",
                "ru": "Который час?"
              },
              "correctOrder": [
                "Saat",
                "kaç?"
              ],
              "words": [
                "kaç?",
                "Saat"
              ]
            },
            {
              "id": "a1_sayilar_3_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Saat iki buçuk",
                "en": "It is half past two",
                "ar": "الساعة الثانية والنصف",
                "fa": "ساعت دو و نیم است",
                "ru": "Время два с половиной"
              },
              "correctOrder": [
                "Saat",
                "iki",
                "buçuk"
              ],
              "words": [
                "buçuk",
                "iki",
                "Saat"
              ]
            },
            {
              "id": "a1_sayilar_3_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Bugün günlerden ne?",
                "en": "What day is it today?",
                "ar": "ما هو اليوم؟",
                "fa": "امروز چه روزی است؟",
                "ru": "Какой сегодня день?"
              },
              "correctOrder": [
                "Bugün",
                "günlerden",
                "ne?"
              ],
              "words": [
                "günlerden",
                "Bugün",
                "ne?"
              ]
            },
            {
              "id": "a1_sayilar_3_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "Yarın hafta ",
                ""
              ],
              "missingWord": "sonu",
              "options": [
                "Yanlış1",
                "sonu",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_sayilar_3_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "Ders saat ",
                ""
              ],
              "missingWord": "üçte",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "üçte"
              ]
            }
          ]
        },
        {
          "id": "a1_sayilar_4",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_sayilar_4_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Kuaför randevusu",
                "en": "Hairdresser appointment",
                "ar": "موعد الحلاق",
                "fa": "وقت آرایشگاه",
                "ru": "Запись в парикмахерскую"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Merhaba, randevu almak ister misiniz?",
                    "en": "Hello, would you like to make an appointment?",
                    "ar": "مرحباً، هل ترغب في حجز موعد؟",
                    "fa": "سلام، می‌خواهید وقت بگیرید؟",
                    "ru": "Здравствуйте, хотите записаться?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Evet, yarın için lütfen.",
                        "en": "Yes, for tomorrow please.",
                        "ar": "نعم، ليوم غد من فضلك.",
                        "fa": "بله، برای فردا لطفاً.",
                        "ru": "Да, на завтра, пожалуйста."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Bugün boş musunuz?",
                        "en": "Are you free today?",
                        "ar": "هل أنت متفرغ اليوم؟",
                        "fa": "امروز وقت خالی دارید؟",
                        "ru": "Вы свободны сегодня?"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Bir kahve.",
                        "en": "A coffee.",
                        "ar": "قهوة.",
                        "fa": "یک قهوه.",
                        "ru": "Один кофе."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Yarın saat ikide boşuz. Uygun mu?",
                    "en": "We are free at two tomorrow. Is that suitable?",
                    "ar": "نحن متاحون غداً الساعة الثانية. هل هذا مناسب؟",
                    "fa": "فردا ساعت دو وقت داریم. مناسب است؟",
                    "ru": "Завтра в два часа мы свободны. Вам подходит?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Evet, uygun.",
                        "en": "Yes, suitable.",
                        "ar": "نعم، مناسب.",
                        "fa": "بله، مناسب است.",
                        "ru": "Да, подходит."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Saat üçte olabilir mi?",
                        "en": "Could it be at three?",
                        "ar": "هل يمكن أن يكون في الثالثة؟",
                        "fa": "می‌تونه ساعت سه باشه؟",
                        "ru": "Можно в три часа?"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Ekmek taze mi?",
                        "en": "Is the bread fresh?",
                        "ar": "هل الخبز طازج؟",
                        "fa": "نان تازه است؟",
                        "ru": "Хлеб свежий?"
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_sayilar_5",
          "type": "vocabulary",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_sayilar_5_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Pazartesi",
                "en": "Monday",
                "ar": "الاثنين",
                "fa": "دوشنبه",
                "ru": "Понедельник"
              },
              "options": [
                {
                  "tr": "Pazartesi",
                  "en": "Monday",
                  "ar": "الاثنين",
                  "fa": "دوشنبه",
                  "ru": "Понедельник"
                },
                {
                  "tr": "Salı",
                  "en": "Tuesday",
                  "ar": "الثلاثاء",
                  "fa": "سه شنبه",
                  "ru": "Вторник"
                },
                {
                  "tr": "Yarın",
                  "en": "Tomorrow",
                  "ar": "غداً",
                  "fa": "فردا",
                  "ru": "Завтра"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_sayilar_5_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Salı",
                "en": "Tuesday",
                "ar": "الثلاثاء",
                "fa": "سه شنبه",
                "ru": "Вторник"
              },
              "options": [
                {
                  "tr": "Dört",
                  "en": "Four",
                  "ar": "أربعة",
                  "fa": "چهار",
                  "ru": "Четыре"
                },
                {
                  "tr": "Hafta",
                  "en": "Week",
                  "ar": "أسبوع",
                  "fa": "هفته",
                  "ru": "Неделя"
                },
                {
                  "tr": "Salı",
                  "en": "Tuesday",
                  "ar": "الثلاثاء",
                  "fa": "سه شنبه",
                  "ru": "Вторник"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_sayilar_5_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Bugün",
                "en": "Today",
                "ar": "اليوم",
                "fa": "امروز",
                "ru": "Сегодня"
              },
              "options": [
                {
                  "tr": "Bugün",
                  "en": "Today",
                  "ar": "اليوم",
                  "fa": "امروز",
                  "ru": "Сегодня"
                },
                {
                  "tr": "Ay",
                  "en": "Month",
                  "ar": "شهر",
                  "fa": "ماه",
                  "ru": "Месяц"
                },
                {
                  "tr": "Buçuk",
                  "en": "Half",
                  "ar": "نصف",
                  "fa": "نیم",
                  "ru": "Половина"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_sayilar_5_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Yarın",
                "en": "Tomorrow",
                "ar": "غداً",
                "fa": "فردا",
                "ru": "Завтра"
              },
              "options": [
                {
                  "tr": "Beş",
                  "en": "Five",
                  "ar": "خمسة",
                  "fa": "پنج",
                  "ru": "Пять"
                },
                {
                  "tr": "Yarın",
                  "en": "Tomorrow",
                  "ar": "غداً",
                  "fa": "فردا",
                  "ru": "Завтра"
                },
                {
                  "tr": "Salı",
                  "en": "Tuesday",
                  "ar": "الثلاثاء",
                  "fa": "سه شنبه",
                  "ru": "Вторник"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_sayilar_5_mc_5",
              "type": "multiple_choice",
              "question": {
                "tr": "Dün",
                "en": "Yesterday",
                "ar": "أمس",
                "fa": "دیروز",
                "ru": "Вчера"
              },
              "options": [
                {
                  "tr": "Dün",
                  "en": "Yesterday",
                  "ar": "أمس",
                  "fa": "دیروز",
                  "ru": "Вчера"
                },
                {
                  "tr": "Buçuk",
                  "en": "Half",
                  "ar": "نصف",
                  "fa": "نیم",
                  "ru": "Половина"
                },
                {
                  "tr": "Pazartesi",
                  "en": "Monday",
                  "ar": "الاثنين",
                  "fa": "دوشنبه",
                  "ru": "Понедельник"
                }
              ],
              "correctAnswerIndex": 0
            }
          ]
        },
        {
          "id": "a1_sayilar_6",
          "type": "practice",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_sayilar_6_dd_1",
              "type": "drag_drop",
              "pairs": [
                {
                  "word": {
                    "tr": "Pazartesi",
                    "en": "Monday",
                    "ar": "الاثنين",
                    "fa": "دوشنبه",
                    "ru": "Понедельник"
                  },
                  "translation": {
                    "tr": "Monday",
                    "en": "Monday",
                    "ar": "الاثنين",
                    "fa": "دوشنبه",
                    "ru": "Понедельник"
                  }
                },
                {
                  "word": {
                    "tr": "Salı",
                    "en": "Tuesday",
                    "ar": "الثلاثاء",
                    "fa": "سه شنبه",
                    "ru": "Вторник"
                  },
                  "translation": {
                    "tr": "Tuesday",
                    "en": "Tuesday",
                    "ar": "الثلاثاء",
                    "fa": "سه شنبه",
                    "ru": "Вторник"
                  }
                },
                {
                  "word": {
                    "tr": "Bugün",
                    "en": "Today",
                    "ar": "اليوم",
                    "fa": "امروز",
                    "ru": "Сегодня"
                  },
                  "translation": {
                    "tr": "Today",
                    "en": "Today",
                    "ar": "اليوم",
                    "fa": "امروز",
                    "ru": "Сегодня"
                  }
                },
                {
                  "word": {
                    "tr": "Yarın",
                    "en": "Tomorrow",
                    "ar": "غداً",
                    "fa": "فردا",
                    "ru": "Завтра"
                  },
                  "translation": {
                    "tr": "Tomorrow",
                    "en": "Tomorrow",
                    "ar": "غداً",
                    "fa": "فردا",
                    "ru": "Завтра"
                  }
                },
                {
                  "word": {
                    "tr": "Dün",
                    "en": "Yesterday",
                    "ar": "أمس",
                    "fa": "دیروز",
                    "ru": "Вчера"
                  },
                  "translation": {
                    "tr": "Yesterday",
                    "en": "Yesterday",
                    "ar": "أمس",
                    "fa": "دیروز",
                    "ru": "Вчера"
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "a1_sayilar_7",
          "type": "sentence_building",
          "xpReward": 15,
          "coinReward": 8,
          "exercises": [
            {
              "id": "a1_sayilar_7_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Saat kaç?",
                "en": "What time is it?",
                "ar": "كم الساعة؟",
                "fa": "ساعت چند است؟",
                "ru": "Который час?"
              },
              "correctOrder": [
                "Saat",
                "kaç?"
              ],
              "words": [
                "Saat",
                "kaç?"
              ]
            },
            {
              "id": "a1_sayilar_7_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Saat iki buçuk",
                "en": "It is half past two",
                "ar": "الساعة الثانية والنصف",
                "fa": "ساعت دو و نیم است",
                "ru": "Время два с половиной"
              },
              "correctOrder": [
                "Saat",
                "iki",
                "buçuk"
              ],
              "words": [
                "Saat",
                "iki",
                "buçuk"
              ]
            },
            {
              "id": "a1_sayilar_7_wo_3",
              "type": "word_order",
              "question": {
                "tr": "Bugün günlerden ne?",
                "en": "What day is it today?",
                "ar": "ما هو اليوم؟",
                "fa": "امروز چه روزی است؟",
                "ru": "Какой сегодня день?"
              },
              "correctOrder": [
                "Bugün",
                "günlerden",
                "ne?"
              ],
              "words": [
                "günlerden",
                "Bugün",
                "ne?"
              ]
            },
            {
              "id": "a1_sayilar_7_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " hafta sonu"
              ],
              "missingWord": "Yarın",
              "options": [
                "Yarın",
                "Yanlış1",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_sayilar_7_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "",
                " saat üçte"
              ],
              "missingWord": "Ders",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "Ders"
              ]
            }
          ]
        },
        {
          "id": "a1_sayilar_8",
          "type": "rpg",
          "xpReward": 25,
          "coinReward": 12,
          "exercises": [
            {
              "id": "a1_sayilar_8_rpg_1",
              "type": "rpg",
              "scenario": {
                "tr": "Saati sorma",
                "en": "Asking for the time",
                "ar": "السؤال عن الوقت",
                "fa": "پرسیدن ساعت",
                "ru": "Узнать время"
              },
              "nodes": [
                {
                  "npcText": {
                    "tr": "Efendim, bir şey mi sordunuz?",
                    "en": "Sir/Madam, did you ask something?",
                    "ar": "عفواً، هل سألت عن شيء؟",
                    "fa": "آقا/خانم، چیزی پرسیدید؟",
                    "ru": "Простите, вы что-то спросили?"
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Affedersiniz, saat kaç?",
                        "en": "Excuse me, what time is it?",
                        "ar": "معذرة، كم الساعة؟",
                        "fa": "ببخشید، ساعت چند است؟",
                        "ru": "Извините, который час?"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Evet, bugün günlerden ne?",
                        "en": "Yes, what day is it today?",
                        "ar": "نعم، ما هو اليوم؟",
                        "fa": "بله، امروز چه روزی است؟",
                        "ru": "Да, какой сегодня день?"
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Bir kilo elma.",
                        "en": "One kilo of apples.",
                        "ar": "كيلو تفاح.",
                        "fa": "یک کیلو سیب.",
                        "ru": "Один килограмм яблок."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                },
                {
                  "npcText": {
                    "tr": "Saat dört buçuk.",
                    "en": "It is half past four.",
                    "ar": "الساعة الرابعة والنصف.",
                    "fa": "ساعت چهار و نیم است.",
                    "ru": "Половина пятого."
                  },
                  "options": [
                    {
                      "text": {
                        "tr": "Teşekkür ederim.",
                        "en": "Thank you.",
                        "ar": "شكراً لك.",
                        "fa": "متشکرم.",
                        "ru": "Спасибо."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "success"
                    },
                    {
                      "text": {
                        "tr": "Çok sağ olun.",
                        "en": "Thank you very much.",
                        "ar": "شكراً جزيلاً.",
                        "fa": "خیلی ممنون.",
                        "ru": "Большое спасибо."
                      },
                      "isCorrect": true,
                      "deductsHeart": false,
                      "responseTone": "alternative"
                    },
                    {
                      "text": {
                        "tr": "Kardeşim var.",
                        "en": "I have a sibling.",
                        "ar": "لدي أخ/أخت.",
                        "fa": "خواهر/برادر دارم.",
                        "ru": "У меня есть брат/сестра."
                      },
                      "isCorrect": false,
                      "deductsHeart": true,
                      "responseTone": "negative"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "a1_sayilar_9",
          "type": "boss_fight",
          "xpReward": 50,
          "coinReward": 25,
          "exercises": [
            {
              "id": "a1_sayilar_9_mc_1",
              "type": "multiple_choice",
              "question": {
                "tr": "Saat",
                "en": "Hour/Time",
                "ar": "ساعة",
                "fa": "ساعت",
                "ru": "Час/Время"
              },
              "options": [
                {
                  "tr": "Çeyrek",
                  "en": "Quarter",
                  "ar": "ربع",
                  "fa": "ربع",
                  "ru": "Четверть"
                },
                {
                  "tr": "İki",
                  "en": "Two",
                  "ar": "اثنان",
                  "fa": "دو",
                  "ru": "Два"
                },
                {
                  "tr": "Saat",
                  "en": "Hour/Time",
                  "ar": "ساعة",
                  "fa": "ساعت",
                  "ru": "Час/Время"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_sayilar_9_mc_2",
              "type": "multiple_choice",
              "question": {
                "tr": "Buçuk",
                "en": "Half",
                "ar": "نصف",
                "fa": "نیم",
                "ru": "Половина"
              },
              "options": [
                {
                  "tr": "Buçuk",
                  "en": "Half",
                  "ar": "نصف",
                  "fa": "نیم",
                  "ru": "Половина"
                },
                {
                  "tr": "Çeyrek",
                  "en": "Quarter",
                  "ar": "ربع",
                  "fa": "ربع",
                  "ru": "Четверть"
                },
                {
                  "tr": "Yarın",
                  "en": "Tomorrow",
                  "ar": "غداً",
                  "fa": "فردا",
                  "ru": "Завтра"
                }
              ],
              "correctAnswerIndex": 0
            },
            {
              "id": "a1_sayilar_9_mc_3",
              "type": "multiple_choice",
              "question": {
                "tr": "Çeyrek",
                "en": "Quarter",
                "ar": "ربع",
                "fa": "ربع",
                "ru": "Четверть"
              },
              "options": [
                {
                  "tr": "Beş",
                  "en": "Five",
                  "ar": "خمسة",
                  "fa": "پنج",
                  "ru": "Пять"
                },
                {
                  "tr": "İki",
                  "en": "Two",
                  "ar": "اثنان",
                  "fa": "دو",
                  "ru": "Два"
                },
                {
                  "tr": "Çeyrek",
                  "en": "Quarter",
                  "ar": "ربع",
                  "fa": "ربع",
                  "ru": "Четверть"
                }
              ],
              "correctAnswerIndex": 2
            },
            {
              "id": "a1_sayilar_9_mc_4",
              "type": "multiple_choice",
              "question": {
                "tr": "Hafta",
                "en": "Week",
                "ar": "أسبوع",
                "fa": "هفته",
                "ru": "Неделя"
              },
              "options": [
                {
                  "tr": "Dün",
                  "en": "Yesterday",
                  "ar": "أمس",
                  "fa": "دیروز",
                  "ru": "Вчера"
                },
                {
                  "tr": "Hafta",
                  "en": "Week",
                  "ar": "أسبوع",
                  "fa": "هفته",
                  "ru": "Неделя"
                },
                {
                  "tr": "Pazartesi",
                  "en": "Monday",
                  "ar": "الاثنين",
                  "fa": "دوشنبه",
                  "ru": "Понедельник"
                }
              ],
              "correctAnswerIndex": 1
            },
            {
              "id": "a1_sayilar_9_wo_1",
              "type": "word_order",
              "question": {
                "tr": "Saat kaç?",
                "en": "What time is it?",
                "ar": "كم الساعة؟",
                "fa": "ساعت چند است؟",
                "ru": "Который час?"
              },
              "correctOrder": [
                "Saat",
                "kaç?"
              ],
              "words": [
                "kaç?",
                "Saat"
              ]
            },
            {
              "id": "a1_sayilar_9_wo_2",
              "type": "word_order",
              "question": {
                "tr": "Saat iki buçuk",
                "en": "It is half past two",
                "ar": "الساعة الثانية والنصف",
                "fa": "ساعت دو و نیم است",
                "ru": "Время два с половиной"
              },
              "correctOrder": [
                "Saat",
                "iki",
                "buçuk"
              ],
              "words": [
                "iki",
                "Saat",
                "buçuk"
              ]
            },
            {
              "id": "a1_sayilar_9_fib_1",
              "type": "fill_in_blank",
              "textParts": [
                "Yarın hafta ",
                ""
              ],
              "missingWord": "sonu",
              "options": [
                "Yanlış1",
                "sonu",
                "Yanlış2"
              ]
            },
            {
              "id": "a1_sayilar_9_fib_2",
              "type": "fill_in_blank",
              "textParts": [
                "Ders ",
                " üçte"
              ],
              "missingWord": "saat",
              "options": [
                "Yanlış2",
                "Yanlış1",
                "saat"
              ]
            }
          ]
        }
      ]
    }
  ]
};
