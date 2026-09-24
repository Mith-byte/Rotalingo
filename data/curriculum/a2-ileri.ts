import type { Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGExercise, RPGTypingExercise, RPGTypingNode, TypingMatch, TText } from '../types';

export const a2IleriLevel: Level = {
  id: 'a2_ileri',
  number: 4,
  title: { tr: 'A2 İleri', en: 'A2 Advanced', ar: 'A2 متقدم', fa: 'A2 پیشرفته', ru: 'A2 Продвинутый' },
  description: { tr: 'Karmaşık yapılar', en: 'Complex structures', ar: 'هياكل معقدة', fa: 'ساختارهای پیچیده', ru: 'Сложные структуры' },
  units: [
    {
      id: 'a2i_is',
      title: { tr: 'İş Görüşmesi', en: 'Job Interview', ar: 'مقابلة عمل', fa: 'مصاحبه کاری', ru: 'Собеседование' },
      description: { tr: 'İş başvuruları', en: 'Job applications', ar: 'طلبات العمل', fa: 'درخواست\u200cهای کاری', ru: 'Заявления на работу' },
      emoji: '💼',
      themeColor: 'from-indigo-500 to-violet-600',
      lessons: [
        {
          id: 'a2i_is_1',
          type: 'vocabulary',
          title: { tr: 'Kelime 1', en: 'Vocab 1', ar: 'مفردات 1', fa: 'واژگان 1', ru: 'Словарь 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_is_1_mc_0',
            type: 'multiple_choice',
            question: { tr: 'CV', en: 'CV', ar: 'CV', fa: 'CV', ru: 'CV' },
            options: [
              { text: { tr: 'CV', en: 'CV', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_1_mc_1',
            type: 'multiple_choice',
            question: { tr: 'özgeçmiş', en: 'özgeçmiş', ar: 'özgeçmiş', fa: 'özgeçmiş', ru: 'özgeçmiş' },
            options: [
              { text: { tr: 'özgeçmiş', en: 'resume', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_1_mc_2',
            type: 'multiple_choice',
            question: { tr: 'pozisyon', en: 'pozisyon', ar: 'pozisyon', fa: 'pozisyon', ru: 'pozisyon' },
            options: [
              { text: { tr: 'pozisyon', en: 'position', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_1_mc_3',
            type: 'multiple_choice',
            question: { tr: 'deneyim', en: 'deneyim', ar: 'deneyim', fa: 'deneyim', ru: 'deneyim' },
            options: [
              { text: { tr: 'deneyim', en: 'experience', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_1_mc_4',
            type: 'multiple_choice',
            question: { tr: 'referans', en: 'referans', ar: 'referans', fa: 'referans', ru: 'referans' },
            options: [
              { text: { tr: 'referans', en: 'reference', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_is_2',
          type: 'practice',
          title: { tr: 'Pratik 1', en: 'Practice 1', ar: 'ممارسة 1', fa: 'تمرین 1', ru: 'Практика 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_is_2_dd_0',
            type: 'drag_and_drop',
            pairs: [
              { source: 'CV', target: { tr: 'CV', en: 'CV', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_is_2_dd_1',
            type: 'drag_and_drop',
            pairs: [
              { source: 'özgeçmiş', target: { tr: 'resume', en: 'resume', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_is_2_dd_2',
            type: 'drag_and_drop',
            pairs: [
              { source: 'pozisyon', target: { tr: 'position', en: 'position', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_is_2_dd_3',
            type: 'drag_and_drop',
            pairs: [
              { source: 'deneyim', target: { tr: 'experience', en: 'experience', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_is_2_dd_4',
            type: 'drag_and_drop',
            pairs: [
              { source: 'referans', target: { tr: 'reference', en: 'reference', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_is_3',
          type: 'sentence_building',
          title: { tr: 'Cümle 1', en: 'Sentences 1', ar: 'جمل 1', fa: 'جملات 1', ru: 'Предложения 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_is_3_wo_0',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_is_3_wo_1',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_is_3_wo_2',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_is_3_fib_3',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_is_3_fib_4',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_is_4',
          type: 'rpg',
          title: { tr: 'Rol Yapma 1', en: 'Roleplay 1', ar: 'لعب الأدوار 1', fa: 'نقش آفرینی 1', ru: 'Ролевая игра 1' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_is_4_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_is_5',
          type: 'vocabulary',
          title: { tr: 'Kelime 2', en: 'Vocab 2', ar: 'مفردات 2', fa: 'واژگان 2', ru: 'Словарь 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_is_5_mc_5',
            type: 'multiple_choice',
            question: { tr: 'maaş', en: 'maaş', ar: 'maaş', fa: 'maaş', ru: 'maaş' },
            options: [
              { text: { tr: 'maaş', en: 'salary', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_5_mc_6',
            type: 'multiple_choice',
            question: { tr: 'staj', en: 'staj', ar: 'staj', fa: 'staj', ru: 'staj' },
            options: [
              { text: { tr: 'staj', en: 'internship', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_5_mc_7',
            type: 'multiple_choice',
            question: { tr: 'terfi', en: 'terfi', ar: 'terfi', fa: 'terfi', ru: 'terfi' },
            options: [
              { text: { tr: 'terfi', en: 'promotion', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_5_mc_8',
            type: 'multiple_choice',
            question: { tr: 'istifa', en: 'istifa', ar: 'istifa', fa: 'istifa', ru: 'istifa' },
            options: [
              { text: { tr: 'istifa', en: 'resignation', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_5_mc_9',
            type: 'multiple_choice',
            question: { tr: 'prim', en: 'prim', ar: 'prim', fa: 'prim', ru: 'prim' },
            options: [
              { text: { tr: 'prim', en: 'bonus', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_is_6',
          type: 'practice',
          title: { tr: 'Pratik 2', en: 'Practice 2', ar: 'ممارسة 2', fa: 'تمرین 2', ru: 'Практика 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_is_6_dd_5',
            type: 'drag_and_drop',
            pairs: [
              { source: 'maaş', target: { tr: 'salary', en: 'salary', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_is_6_dd_6',
            type: 'drag_and_drop',
            pairs: [
              { source: 'staj', target: { tr: 'internship', en: 'internship', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_is_6_dd_7',
            type: 'drag_and_drop',
            pairs: [
              { source: 'terfi', target: { tr: 'promotion', en: 'promotion', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_is_6_dd_8',
            type: 'drag_and_drop',
            pairs: [
              { source: 'istifa', target: { tr: 'resignation', en: 'resignation', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_is_6_dd_9',
            type: 'drag_and_drop',
            pairs: [
              { source: 'prim', target: { tr: 'bonus', en: 'bonus', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_is_7',
          type: 'sentence_building',
          title: { tr: 'Cümle 2', en: 'Sentences 2', ar: 'جمل 2', fa: 'جملات 2', ru: 'Предложения 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_is_7_wo_5',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_is_7_wo_6',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_is_7_wo_7',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_is_7_fib_8',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_is_7_fib_9',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_is_8',
          type: 'rpg',
          title: { tr: 'Rol Yapma 2', en: 'Roleplay 2', ar: 'لعب الأدوار 2', fa: 'نقش آفرینی 2', ru: 'Ролевая игра 2' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_is_8_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_is_9',
          type: 'boss_fight',
          title: { tr: 'Bölüm Sonu', en: 'Boss Fight', ar: 'معركة الزعيم', fa: 'مبارزه با غول', ru: 'Босс-файт' },
          xpReward: 100,
          coinReward: 50,
          exercises: [
          {
            id: 'a2i_is_9_mc_0',
            type: 'multiple_choice',
            question: { tr: 'CV', en: 'CV', ar: 'CV', fa: 'CV', ru: 'CV' },
            options: [
              { text: { tr: 'CV', en: 'CV', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_9_mc_1',
            type: 'multiple_choice',
            question: { tr: 'özgeçmiş', en: 'özgeçmiş', ar: 'özgeçmiş', fa: 'özgeçmiş', ru: 'özgeçmiş' },
            options: [
              { text: { tr: 'özgeçmiş', en: 'resume', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_9_mc_2',
            type: 'multiple_choice',
            question: { tr: 'pozisyon', en: 'pozisyon', ar: 'pozisyon', fa: 'pozisyon', ru: 'pozisyon' },
            options: [
              { text: { tr: 'pozisyon', en: 'position', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_9_mc_3',
            type: 'multiple_choice',
            question: { tr: 'deneyim', en: 'deneyim', ar: 'deneyim', fa: 'deneyim', ru: 'deneyim' },
            options: [
              { text: { tr: 'deneyim', en: 'experience', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_is_9_wo_4',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_is_9_wo_5',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_is_9_fib_6',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_is_9_fib_7',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        }
      ]
    },
    {
      id: 'a2i_hukuk',
      title: { tr: 'Hukuki Konular', en: 'Legal Matters', ar: 'المسائل القانونية', fa: 'مسائل حقوقی', ru: 'Юридические вопросы' },
      description: { tr: 'Hukuk dili', en: 'Legal language', ar: 'لغة قانونية', fa: 'زبان حقوقی', ru: 'Юридический язык' },
      emoji: '⚖️',
      themeColor: 'from-gray-500 to-slate-700',
      lessons: [
        {
          id: 'a2i_hukuk_1',
          type: 'vocabulary',
          title: { tr: 'Kelime 1', en: 'Vocab 1', ar: 'مفردات 1', fa: 'واژگان 1', ru: 'Словарь 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_hukuk_1_mc_0',
            type: 'multiple_choice',
            question: { tr: 'sözleşme', en: 'sözleşme', ar: 'sözleşme', fa: 'sözleşme', ru: 'sözleşme' },
            options: [
              { text: { tr: 'sözleşme', en: 'contract', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_1_mc_1',
            type: 'multiple_choice',
            question: { tr: 'madde', en: 'madde', ar: 'madde', fa: 'madde', ru: 'madde' },
            options: [
              { text: { tr: 'madde', en: 'clause', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_1_mc_2',
            type: 'multiple_choice',
            question: { tr: 'hüküm', en: 'hüküm', ar: 'hüküm', fa: 'hüküm', ru: 'hüküm' },
            options: [
              { text: { tr: 'hüküm', en: 'provision', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_1_mc_3',
            type: 'multiple_choice',
            question: { tr: 'tazminat', en: 'tazminat', ar: 'tazminat', fa: 'tazminat', ru: 'tazminat' },
            options: [
              { text: { tr: 'tazminat', en: 'compensation', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_1_mc_4',
            type: 'multiple_choice',
            question: { tr: 'dava', en: 'dava', ar: 'dava', fa: 'dava', ru: 'dava' },
            options: [
              { text: { tr: 'dava', en: 'lawsuit', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_hukuk_2',
          type: 'practice',
          title: { tr: 'Pratik 1', en: 'Practice 1', ar: 'ممارسة 1', fa: 'تمرین 1', ru: 'Практика 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_hukuk_2_dd_0',
            type: 'drag_and_drop',
            pairs: [
              { source: 'sözleşme', target: { tr: 'contract', en: 'contract', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_hukuk_2_dd_1',
            type: 'drag_and_drop',
            pairs: [
              { source: 'madde', target: { tr: 'clause', en: 'clause', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_hukuk_2_dd_2',
            type: 'drag_and_drop',
            pairs: [
              { source: 'hüküm', target: { tr: 'provision', en: 'provision', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_hukuk_2_dd_3',
            type: 'drag_and_drop',
            pairs: [
              { source: 'tazminat', target: { tr: 'compensation', en: 'compensation', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_hukuk_2_dd_4',
            type: 'drag_and_drop',
            pairs: [
              { source: 'dava', target: { tr: 'lawsuit', en: 'lawsuit', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_hukuk_3',
          type: 'sentence_building',
          title: { tr: 'Cümle 1', en: 'Sentences 1', ar: 'جمل 1', fa: 'جملات 1', ru: 'Предложения 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_hukuk_3_wo_0',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_hukuk_3_wo_1',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_hukuk_3_wo_2',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_hukuk_3_fib_3',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_hukuk_3_fib_4',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_hukuk_4',
          type: 'rpg',
          title: { tr: 'Rol Yapma 1', en: 'Roleplay 1', ar: 'لعب الأدوار 1', fa: 'نقش آفرینی 1', ru: 'Ролевая игра 1' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_hukuk_4_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_hukuk_5',
          type: 'vocabulary',
          title: { tr: 'Kelime 2', en: 'Vocab 2', ar: 'مفردات 2', fa: 'واژگان 2', ru: 'Словарь 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_hukuk_5_mc_5',
            type: 'multiple_choice',
            question: { tr: 'avukat', en: 'avukat', ar: 'avukat', fa: 'avukat', ru: 'avukat' },
            options: [
              { text: { tr: 'avukat', en: 'lawyer', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_5_mc_6',
            type: 'multiple_choice',
            question: { tr: 'icra', en: 'icra', ar: 'icra', fa: 'icra', ru: 'icra' },
            options: [
              { text: { tr: 'icra', en: 'execution', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_5_mc_7',
            type: 'multiple_choice',
            question: { tr: 'ipotek', en: 'ipotek', ar: 'ipotek', fa: 'ipotek', ru: 'ipotek' },
            options: [
              { text: { tr: 'ipotek', en: 'mortgage', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_5_mc_8',
            type: 'multiple_choice',
            question: { tr: 'kefil', en: 'kefil', ar: 'kefil', fa: 'kefil', ru: 'kefil' },
            options: [
              { text: { tr: 'kefil', en: 'guarantor', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_5_mc_9',
            type: 'multiple_choice',
            question: { tr: 'imza', en: 'imza', ar: 'imza', fa: 'imza', ru: 'imza' },
            options: [
              { text: { tr: 'imza', en: 'signature', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_hukuk_6',
          type: 'practice',
          title: { tr: 'Pratik 2', en: 'Practice 2', ar: 'ممارسة 2', fa: 'تمرین 2', ru: 'Практика 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_hukuk_6_dd_5',
            type: 'drag_and_drop',
            pairs: [
              { source: 'avukat', target: { tr: 'lawyer', en: 'lawyer', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_hukuk_6_dd_6',
            type: 'drag_and_drop',
            pairs: [
              { source: 'icra', target: { tr: 'execution', en: 'execution', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_hukuk_6_dd_7',
            type: 'drag_and_drop',
            pairs: [
              { source: 'ipotek', target: { tr: 'mortgage', en: 'mortgage', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_hukuk_6_dd_8',
            type: 'drag_and_drop',
            pairs: [
              { source: 'kefil', target: { tr: 'guarantor', en: 'guarantor', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_hukuk_6_dd_9',
            type: 'drag_and_drop',
            pairs: [
              { source: 'imza', target: { tr: 'signature', en: 'signature', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_hukuk_7',
          type: 'sentence_building',
          title: { tr: 'Cümle 2', en: 'Sentences 2', ar: 'جمل 2', fa: 'جملات 2', ru: 'Предложения 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_hukuk_7_wo_5',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_hukuk_7_wo_6',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_hukuk_7_wo_7',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_hukuk_7_fib_8',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_hukuk_7_fib_9',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_hukuk_8',
          type: 'rpg',
          title: { tr: 'Rol Yapma 2', en: 'Roleplay 2', ar: 'لعب الأدوار 2', fa: 'نقش آفرینی 2', ru: 'Ролевая игра 2' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_hukuk_8_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_hukuk_9',
          type: 'boss_fight',
          title: { tr: 'Bölüm Sonu', en: 'Boss Fight', ar: 'معركة الزعيم', fa: 'مبارزه با غول', ru: 'Босс-файт' },
          xpReward: 100,
          coinReward: 50,
          exercises: [
          {
            id: 'a2i_hukuk_9_mc_0',
            type: 'multiple_choice',
            question: { tr: 'sözleşme', en: 'sözleşme', ar: 'sözleşme', fa: 'sözleşme', ru: 'sözleşme' },
            options: [
              { text: { tr: 'sözleşme', en: 'contract', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_9_mc_1',
            type: 'multiple_choice',
            question: { tr: 'madde', en: 'madde', ar: 'madde', fa: 'madde', ru: 'madde' },
            options: [
              { text: { tr: 'madde', en: 'clause', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_9_mc_2',
            type: 'multiple_choice',
            question: { tr: 'hüküm', en: 'hüküm', ar: 'hüküm', fa: 'hüküm', ru: 'hüküm' },
            options: [
              { text: { tr: 'hüküm', en: 'provision', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_9_mc_3',
            type: 'multiple_choice',
            question: { tr: 'tazminat', en: 'tazminat', ar: 'tazminat', fa: 'tazminat', ru: 'tazminat' },
            options: [
              { text: { tr: 'tazminat', en: 'compensation', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_hukuk_9_wo_4',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_hukuk_9_wo_5',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_hukuk_9_fib_6',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_hukuk_9_fib_7',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        }
      ]
    },
    {
      id: 'a2i_seyahat',
      title: { tr: 'Seyahat & Turizm', en: 'Travel & Tourism', ar: 'السفر والسياحة', fa: 'سفر و گردشگری', ru: 'Путешествия и туризм' },
      description: { tr: 'Turizm', en: 'Tourism', ar: 'سياحة', fa: 'گردشگری', ru: 'Туризм' },
      emoji: '✈️',
      themeColor: 'from-sky-500 to-teal-600',
      lessons: [
        {
          id: 'a2i_seyahat_1',
          type: 'vocabulary',
          title: { tr: 'Kelime 1', en: 'Vocab 1', ar: 'مفردات 1', fa: 'واژگان 1', ru: 'Словарь 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_seyahat_1_mc_0',
            type: 'multiple_choice',
            question: { tr: 'rezervasyon', en: 'rezervasyon', ar: 'rezervasyon', fa: 'rezervasyon', ru: 'rezervasyon' },
            options: [
              { text: { tr: 'rezervasyon', en: 'reservation', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_1_mc_1',
            type: 'multiple_choice',
            question: { tr: 'bagaj', en: 'bagaj', ar: 'bagaj', fa: 'bagaj', ru: 'bagaj' },
            options: [
              { text: { tr: 'bagaj', en: 'baggage', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_1_mc_2',
            type: 'multiple_choice',
            question: { tr: 'aktarma', en: 'aktarma', ar: 'aktarma', fa: 'aktarma', ru: 'aktarma' },
            options: [
              { text: { tr: 'aktarma', en: 'transfer', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_1_mc_3',
            type: 'multiple_choice',
            question: { tr: 'vize', en: 'vize', ar: 'vize', fa: 'vize', ru: 'vize' },
            options: [
              { text: { tr: 'vize', en: 'visa', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_1_mc_4',
            type: 'multiple_choice',
            question: { tr: 'pasaport', en: 'pasaport', ar: 'pasaport', fa: 'pasaport', ru: 'pasaport' },
            options: [
              { text: { tr: 'pasaport', en: 'passport', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_seyahat_2',
          type: 'practice',
          title: { tr: 'Pratik 1', en: 'Practice 1', ar: 'ممارسة 1', fa: 'تمرین 1', ru: 'Практика 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_seyahat_2_dd_0',
            type: 'drag_and_drop',
            pairs: [
              { source: 'rezervasyon', target: { tr: 'reservation', en: 'reservation', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_seyahat_2_dd_1',
            type: 'drag_and_drop',
            pairs: [
              { source: 'bagaj', target: { tr: 'baggage', en: 'baggage', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_seyahat_2_dd_2',
            type: 'drag_and_drop',
            pairs: [
              { source: 'aktarma', target: { tr: 'transfer', en: 'transfer', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_seyahat_2_dd_3',
            type: 'drag_and_drop',
            pairs: [
              { source: 'vize', target: { tr: 'visa', en: 'visa', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_seyahat_2_dd_4',
            type: 'drag_and_drop',
            pairs: [
              { source: 'pasaport', target: { tr: 'passport', en: 'passport', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_seyahat_3',
          type: 'sentence_building',
          title: { tr: 'Cümle 1', en: 'Sentences 1', ar: 'جمل 1', fa: 'جملات 1', ru: 'Предложения 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_seyahat_3_wo_0',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_seyahat_3_wo_1',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_seyahat_3_wo_2',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_seyahat_3_fib_3',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_seyahat_3_fib_4',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_seyahat_4',
          type: 'rpg',
          title: { tr: 'Rol Yapma 1', en: 'Roleplay 1', ar: 'لعب الأدوار 1', fa: 'نقش آفرینی 1', ru: 'Ролевая игра 1' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_seyahat_4_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_seyahat_5',
          type: 'vocabulary',
          title: { tr: 'Kelime 2', en: 'Vocab 2', ar: 'مفردات 2', fa: 'واژگان 2', ru: 'Словарь 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_seyahat_5_mc_5',
            type: 'multiple_choice',
            question: { tr: 'gümrük', en: 'gümrük', ar: 'gümrük', fa: 'gümrük', ru: 'gümrük' },
            options: [
              { text: { tr: 'gümrük', en: 'customs', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_5_mc_6',
            type: 'multiple_choice',
            question: { tr: 'rehber', en: 'rehber', ar: 'rehber', fa: 'rehber', ru: 'rehber' },
            options: [
              { text: { tr: 'rehber', en: 'guide', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_5_mc_7',
            type: 'multiple_choice',
            question: { tr: 'bilet', en: 'bilet', ar: 'bilet', fa: 'bilet', ru: 'bilet' },
            options: [
              { text: { tr: 'bilet', en: 'ticket', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_5_mc_8',
            type: 'multiple_choice',
            question: { tr: 'sigorta', en: 'sigorta', ar: 'sigorta', fa: 'sigorta', ru: 'sigorta' },
            options: [
              { text: { tr: 'sigorta', en: 'insurance', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_5_mc_9',
            type: 'multiple_choice',
            question: { tr: 'iptal', en: 'iptal', ar: 'iptal', fa: 'iptal', ru: 'iptal' },
            options: [
              { text: { tr: 'iptal', en: 'cancellation', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_seyahat_6',
          type: 'practice',
          title: { tr: 'Pratik 2', en: 'Practice 2', ar: 'ممارسة 2', fa: 'تمرین 2', ru: 'Практика 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_seyahat_6_dd_5',
            type: 'drag_and_drop',
            pairs: [
              { source: 'gümrük', target: { tr: 'customs', en: 'customs', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_seyahat_6_dd_6',
            type: 'drag_and_drop',
            pairs: [
              { source: 'rehber', target: { tr: 'guide', en: 'guide', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_seyahat_6_dd_7',
            type: 'drag_and_drop',
            pairs: [
              { source: 'bilet', target: { tr: 'ticket', en: 'ticket', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_seyahat_6_dd_8',
            type: 'drag_and_drop',
            pairs: [
              { source: 'sigorta', target: { tr: 'insurance', en: 'insurance', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_seyahat_6_dd_9',
            type: 'drag_and_drop',
            pairs: [
              { source: 'iptal', target: { tr: 'cancellation', en: 'cancellation', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_seyahat_7',
          type: 'sentence_building',
          title: { tr: 'Cümle 2', en: 'Sentences 2', ar: 'جمل 2', fa: 'جملات 2', ru: 'Предложения 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_seyahat_7_wo_5',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_seyahat_7_wo_6',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_seyahat_7_wo_7',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_seyahat_7_fib_8',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_seyahat_7_fib_9',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_seyahat_8',
          type: 'rpg',
          title: { tr: 'Rol Yapma 2', en: 'Roleplay 2', ar: 'لعب الأدوار 2', fa: 'نقش آفرینی 2', ru: 'Ролевая игра 2' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_seyahat_8_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_seyahat_9',
          type: 'boss_fight',
          title: { tr: 'Bölüm Sonu', en: 'Boss Fight', ar: 'معركة الزعيم', fa: 'مبارزه با غول', ru: 'Босс-файт' },
          xpReward: 100,
          coinReward: 50,
          exercises: [
          {
            id: 'a2i_seyahat_9_mc_0',
            type: 'multiple_choice',
            question: { tr: 'rezervasyon', en: 'rezervasyon', ar: 'rezervasyon', fa: 'rezervasyon', ru: 'rezervasyon' },
            options: [
              { text: { tr: 'rezervasyon', en: 'reservation', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_9_mc_1',
            type: 'multiple_choice',
            question: { tr: 'bagaj', en: 'bagaj', ar: 'bagaj', fa: 'bagaj', ru: 'bagaj' },
            options: [
              { text: { tr: 'bagaj', en: 'baggage', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_9_mc_2',
            type: 'multiple_choice',
            question: { tr: 'aktarma', en: 'aktarma', ar: 'aktarma', fa: 'aktarma', ru: 'aktarma' },
            options: [
              { text: { tr: 'aktarma', en: 'transfer', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_9_mc_3',
            type: 'multiple_choice',
            question: { tr: 'vize', en: 'vize', ar: 'vize', fa: 'vize', ru: 'vize' },
            options: [
              { text: { tr: 'vize', en: 'visa', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_seyahat_9_wo_4',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_seyahat_9_wo_5',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_seyahat_9_fib_6',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_seyahat_9_fib_7',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        }
      ]
    },
    {
      id: 'a2i_kultur',
      title: { tr: 'Kültür & Sosyal Hayat', en: 'Culture & Social Life', ar: 'الثقافة والحياة الاجتماعية', fa: 'فرهنگ و زندگی اجتماعی', ru: 'Культура и общественная жизнь' },
      description: { tr: 'Gelenekler', en: 'Traditions', ar: 'تقاليد', fa: 'سنت\u200cها', ru: 'Традиции' },
      emoji: '🎭',
      themeColor: 'from-rose-500 to-pink-600',
      lessons: [
        {
          id: 'a2i_kultur_1',
          type: 'vocabulary',
          title: { tr: 'Kelime 1', en: 'Vocab 1', ar: 'مفردات 1', fa: 'واژگان 1', ru: 'Словарь 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_kultur_1_mc_0',
            type: 'multiple_choice',
            question: { tr: 'düğün', en: 'düğün', ar: 'düğün', fa: 'düğün', ru: 'düğün' },
            options: [
              { text: { tr: 'düğün', en: 'wedding', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_1_mc_1',
            type: 'multiple_choice',
            question: { tr: 'nişan', en: 'nişan', ar: 'nişan', fa: 'nişan', ru: 'nişan' },
            options: [
              { text: { tr: 'nişan', en: 'engagement', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_1_mc_2',
            type: 'multiple_choice',
            question: { tr: 'bayram', en: 'bayram', ar: 'bayram', fa: 'bayram', ru: 'bayram' },
            options: [
              { text: { tr: 'bayram', en: 'holiday', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_1_mc_3',
            type: 'multiple_choice',
            question: { tr: 'misafir', en: 'misafir', ar: 'misafir', fa: 'misafir', ru: 'misafir' },
            options: [
              { text: { tr: 'misafir', en: 'guest', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_1_mc_4',
            type: 'multiple_choice',
            question: { tr: 'hediye', en: 'hediye', ar: 'hediye', fa: 'hediye', ru: 'hediye' },
            options: [
              { text: { tr: 'hediye', en: 'gift', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_kultur_2',
          type: 'practice',
          title: { tr: 'Pratik 1', en: 'Practice 1', ar: 'ممارسة 1', fa: 'تمرین 1', ru: 'Практика 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_kultur_2_dd_0',
            type: 'drag_and_drop',
            pairs: [
              { source: 'düğün', target: { tr: 'wedding', en: 'wedding', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_kultur_2_dd_1',
            type: 'drag_and_drop',
            pairs: [
              { source: 'nişan', target: { tr: 'engagement', en: 'engagement', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_kultur_2_dd_2',
            type: 'drag_and_drop',
            pairs: [
              { source: 'bayram', target: { tr: 'holiday', en: 'holiday', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_kultur_2_dd_3',
            type: 'drag_and_drop',
            pairs: [
              { source: 'misafir', target: { tr: 'guest', en: 'guest', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_kultur_2_dd_4',
            type: 'drag_and_drop',
            pairs: [
              { source: 'hediye', target: { tr: 'gift', en: 'gift', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_kultur_3',
          type: 'sentence_building',
          title: { tr: 'Cümle 1', en: 'Sentences 1', ar: 'جمل 1', fa: 'جملات 1', ru: 'Предложения 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_kultur_3_wo_0',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_kultur_3_wo_1',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_kultur_3_wo_2',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_kultur_3_fib_3',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_kultur_3_fib_4',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_kultur_4',
          type: 'rpg',
          title: { tr: 'Rol Yapma 1', en: 'Roleplay 1', ar: 'لعب الأدوار 1', fa: 'نقش آفرینی 1', ru: 'Ролевая игра 1' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_kultur_4_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_kultur_5',
          type: 'vocabulary',
          title: { tr: 'Kelime 2', en: 'Vocab 2', ar: 'مفردات 2', fa: 'واژگان 2', ru: 'Словарь 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_kultur_5_mc_5',
            type: 'multiple_choice',
            question: { tr: 'sofra', en: 'sofra', ar: 'sofra', fa: 'sofra', ru: 'sofra' },
            options: [
              { text: { tr: 'sofra', en: 'table', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_5_mc_6',
            type: 'multiple_choice',
            question: { tr: 'alkol', en: 'alkol', ar: 'alkol', fa: 'alkol', ru: 'alkol' },
            options: [
              { text: { tr: 'alkol', en: 'alcohol', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_5_mc_7',
            type: 'multiple_choice',
            question: { tr: 'oruç', en: 'oruç', ar: 'oruç', fa: 'oruç', ru: 'oruç' },
            options: [
              { text: { tr: 'oruç', en: 'fasting', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_5_mc_8',
            type: 'multiple_choice',
            question: { tr: 'akraba', en: 'akraba', ar: 'akraba', fa: 'akraba', ru: 'akraba' },
            options: [
              { text: { tr: 'akraba', en: 'relative', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_5_mc_9',
            type: 'multiple_choice',
            question: { tr: 'sohbet', en: 'sohbet', ar: 'sohbet', fa: 'sohbet', ru: 'sohbet' },
            options: [
              { text: { tr: 'sohbet', en: 'chat', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_kultur_6',
          type: 'practice',
          title: { tr: 'Pratik 2', en: 'Practice 2', ar: 'ممارسة 2', fa: 'تمرین 2', ru: 'Практика 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_kultur_6_dd_5',
            type: 'drag_and_drop',
            pairs: [
              { source: 'sofra', target: { tr: 'table', en: 'table', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_kultur_6_dd_6',
            type: 'drag_and_drop',
            pairs: [
              { source: 'alkol', target: { tr: 'alcohol', en: 'alcohol', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_kultur_6_dd_7',
            type: 'drag_and_drop',
            pairs: [
              { source: 'oruç', target: { tr: 'fasting', en: 'fasting', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_kultur_6_dd_8',
            type: 'drag_and_drop',
            pairs: [
              { source: 'akraba', target: { tr: 'relative', en: 'relative', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_kultur_6_dd_9',
            type: 'drag_and_drop',
            pairs: [
              { source: 'sohbet', target: { tr: 'chat', en: 'chat', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_kultur_7',
          type: 'sentence_building',
          title: { tr: 'Cümle 2', en: 'Sentences 2', ar: 'جمل 2', fa: 'جملات 2', ru: 'Предложения 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_kultur_7_wo_5',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_kultur_7_wo_6',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_kultur_7_wo_7',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_kultur_7_fib_8',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_kultur_7_fib_9',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_kultur_8',
          type: 'rpg',
          title: { tr: 'Rol Yapma 2', en: 'Roleplay 2', ar: 'لعب الأدوار 2', fa: 'نقش آفرینی 2', ru: 'Ролевая игра 2' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_kultur_8_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_kultur_9',
          type: 'boss_fight',
          title: { tr: 'Bölüm Sonu', en: 'Boss Fight', ar: 'معركة الزعيم', fa: 'مبارزه با غول', ru: 'Босс-файт' },
          xpReward: 100,
          coinReward: 50,
          exercises: [
          {
            id: 'a2i_kultur_9_mc_0',
            type: 'multiple_choice',
            question: { tr: 'düğün', en: 'düğün', ar: 'düğün', fa: 'düğün', ru: 'düğün' },
            options: [
              { text: { tr: 'düğün', en: 'wedding', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_9_mc_1',
            type: 'multiple_choice',
            question: { tr: 'nişan', en: 'nişan', ar: 'nişan', fa: 'nişan', ru: 'nişan' },
            options: [
              { text: { tr: 'nişan', en: 'engagement', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_9_mc_2',
            type: 'multiple_choice',
            question: { tr: 'bayram', en: 'bayram', ar: 'bayram', fa: 'bayram', ru: 'bayram' },
            options: [
              { text: { tr: 'bayram', en: 'holiday', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_9_mc_3',
            type: 'multiple_choice',
            question: { tr: 'misafir', en: 'misafir', ar: 'misafir', fa: 'misafir', ru: 'misafir' },
            options: [
              { text: { tr: 'misafir', en: 'guest', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_kultur_9_wo_4',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_kultur_9_wo_5',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_kultur_9_fib_6',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_kultur_9_fib_7',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        }
      ]
    },
    {
      id: 'a2i_konusma',
      title: { tr: 'İleri Konuşma', en: 'Advanced Conversation', ar: 'محادثة متقدمة', fa: 'مکالمه پیشرفته', ru: 'Продвинутый разговор' },
      description: { tr: 'Tartışma', en: 'Debate', ar: 'نقاش', fa: 'بحث', ru: 'Дебаты' },
      emoji: '💬',
      themeColor: 'from-violet-500 to-purple-700',
      lessons: [
        {
          id: 'a2i_konusma_1',
          type: 'vocabulary',
          title: { tr: 'Kelime 1', en: 'Vocab 1', ar: 'مفردات 1', fa: 'واژگان 1', ru: 'Словарь 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_konusma_1_mc_0',
            type: 'multiple_choice',
            question: { tr: 'iddia', en: 'iddia', ar: 'iddia', fa: 'iddia', ru: 'iddia' },
            options: [
              { text: { tr: 'iddia', en: 'claim', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_1_mc_1',
            type: 'multiple_choice',
            question: { tr: 'kanıt', en: 'kanıt', ar: 'kanıt', fa: 'kanıt', ru: 'kanıt' },
            options: [
              { text: { tr: 'kanıt', en: 'evidence', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_1_mc_2',
            type: 'multiple_choice',
            question: { tr: 'örnek', en: 'örnek', ar: 'örnek', fa: 'örnek', ru: 'örnek' },
            options: [
              { text: { tr: 'örnek', en: 'example', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_1_mc_3',
            type: 'multiple_choice',
            question: { tr: 'sonuç', en: 'sonuç', ar: 'sonuç', fa: 'sonuç', ru: 'sonuç' },
            options: [
              { text: { tr: 'sonuç', en: 'result', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_1_mc_4',
            type: 'multiple_choice',
            question: { tr: 'bence', en: 'bence', ar: 'bence', fa: 'bence', ru: 'bence' },
            options: [
              { text: { tr: 'bence', en: 'in my opinion', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_konusma_2',
          type: 'practice',
          title: { tr: 'Pratik 1', en: 'Practice 1', ar: 'ممارسة 1', fa: 'تمرین 1', ru: 'Практика 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_konusma_2_dd_0',
            type: 'drag_and_drop',
            pairs: [
              { source: 'iddia', target: { tr: 'claim', en: 'claim', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_konusma_2_dd_1',
            type: 'drag_and_drop',
            pairs: [
              { source: 'kanıt', target: { tr: 'evidence', en: 'evidence', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_konusma_2_dd_2',
            type: 'drag_and_drop',
            pairs: [
              { source: 'örnek', target: { tr: 'example', en: 'example', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_konusma_2_dd_3',
            type: 'drag_and_drop',
            pairs: [
              { source: 'sonuç', target: { tr: 'result', en: 'result', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_konusma_2_dd_4',
            type: 'drag_and_drop',
            pairs: [
              { source: 'bence', target: { tr: 'in my opinion', en: 'in my opinion', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_konusma_3',
          type: 'sentence_building',
          title: { tr: 'Cümle 1', en: 'Sentences 1', ar: 'جمل 1', fa: 'جملات 1', ru: 'Предложения 1' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_konusma_3_wo_0',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_konusma_3_wo_1',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_konusma_3_wo_2',
            type: 'word_order',
            sentence: 'Bu bir cümle.',
            translation: { tr: 'Bu bir cümle.', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'bir', 'cümle.']
          },
          {
            id: 'a2i_konusma_3_fib_3',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_konusma_3_fib_4',
            type: 'fill_in_blank',
            sentence: 'Bu bir [cümle].',
            translation: { tr: 'Bu bir [cümle].', en: 'This is a sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_konusma_4',
          type: 'rpg',
          title: { tr: 'Rol Yapma 1', en: 'Roleplay 1', ar: 'لعب الأدوار 1', fa: 'نقش آفرینی 1', ru: 'Ролевая игра 1' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_konusma_4_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_konusma_5',
          type: 'vocabulary',
          title: { tr: 'Kelime 2', en: 'Vocab 2', ar: 'مفردات 2', fa: 'واژگان 2', ru: 'Словарь 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_konusma_5_mc_5',
            type: 'multiple_choice',
            question: { tr: 'sanırım', en: 'sanırım', ar: 'sanırım', fa: 'sanırım', ru: 'sanırım' },
            options: [
              { text: { tr: 'sanırım', en: 'I suppose', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_5_mc_6',
            type: 'multiple_choice',
            question: { tr: 'görüş', en: 'görüş', ar: 'görüş', fa: 'görüş', ru: 'görüş' },
            options: [
              { text: { tr: 'görüş', en: 'opinion', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_5_mc_7',
            type: 'multiple_choice',
            question: { tr: 'aslında', en: 'aslında', ar: 'aslında', fa: 'aslında', ru: 'aslında' },
            options: [
              { text: { tr: 'aslında', en: 'actually', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_5_mc_8',
            type: 'multiple_choice',
            question: { tr: 'kesinlikle', en: 'kesinlikle', ar: 'kesinlikle', fa: 'kesinlikle', ru: 'kesinlikle' },
            options: [
              { text: { tr: 'kesinlikle', en: 'absolutely', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_5_mc_9',
            type: 'multiple_choice',
            question: { tr: 'kısacası', en: 'kısacası', ar: 'kısacası', fa: 'kısacası', ru: 'kısacası' },
            options: [
              { text: { tr: 'kısacası', en: 'in short', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          }
          ]
        },
        {
          id: 'a2i_konusma_6',
          type: 'practice',
          title: { tr: 'Pratik 2', en: 'Practice 2', ar: 'ممارسة 2', fa: 'تمرین 2', ru: 'Практика 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_konusma_6_dd_5',
            type: 'drag_and_drop',
            pairs: [
              { source: 'sanırım', target: { tr: 'I suppose', en: 'I suppose', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_konusma_6_dd_6',
            type: 'drag_and_drop',
            pairs: [
              { source: 'görüş', target: { tr: 'opinion', en: 'opinion', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_konusma_6_dd_7',
            type: 'drag_and_drop',
            pairs: [
              { source: 'aslında', target: { tr: 'actually', en: 'actually', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_konusma_6_dd_8',
            type: 'drag_and_drop',
            pairs: [
              { source: 'kesinlikle', target: { tr: 'absolutely', en: 'absolutely', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          },
          {
            id: 'a2i_konusma_6_dd_9',
            type: 'drag_and_drop',
            pairs: [
              { source: 'kısacası', target: { tr: 'in short', en: 'in short', ar: 'ترجمة', fa: 'ترجمه', ru: 'перевод' } }
            ]
          }
          ]
        },
        {
          id: 'a2i_konusma_7',
          type: 'sentence_building',
          title: { tr: 'Cümle 2', en: 'Sentences 2', ar: 'جمل 2', fa: 'جملات 2', ru: 'Предложения 2' },
          xpReward: 25,
          coinReward: 12,
          exercises: [
          {
            id: 'a2i_konusma_7_wo_5',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_konusma_7_wo_6',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_konusma_7_wo_7',
            type: 'word_order',
            sentence: 'Bu başka bir cümle.',
            translation: { tr: 'Bu başka bir cümle.', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'başka', 'bir', 'cümle.']
          },
          {
            id: 'a2i_konusma_7_fib_8',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_konusma_7_fib_9',
            type: 'fill_in_blank',
            sentence: 'Bu başka bir [cümle].',
            translation: { tr: 'Bu başka bir [cümle].', en: 'This is another sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        },
        {
          id: 'a2i_konusma_8',
          type: 'rpg',
          title: { tr: 'Rol Yapma 2', en: 'Roleplay 2', ar: 'لعب الأدوار 2', fa: 'نقش آفرینی 2', ru: 'Ролевая игра 2' },
          xpReward: 50,
          coinReward: 25,
          exercises: [
          {
            id: 'a2i_konusma_8_rpg_1',
            type: 'rpg_typing',
            scenario: { tr: 'Bir rol yapma senaryosu.', en: 'A roleplay scenario.', ar: 'سيناريو لعب أدوار.', fa: 'یک سناریوی نقش\u200cآفرینی.', ru: 'Ролевой сценарий.' },
            scenarioEmoji: '🗣️',
            startNodeId: 'node1',
            nodes: [
              {
                nodeId: 'node1',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Merhaba, nasılsınız?', en: 'Hello, how are you?', ar: 'مرحبا، كيف حالك؟', fa: 'سلام، چطوری؟', ru: 'Привет, как дела?' },
                matches: [
                  {
                    keywords: ['iyiyim', 'teşekkür', 'sağ'],
                    responseTone: 'success',
                    npcResponse: { tr: 'Harika! Size nasıl yardımcı olabilirim?', en: 'Great! How can I help you?', ar: 'رائع! كيف يمكنني مساعدتك؟', fa: 'عالی! چطور می\u200cتوانم کمک کنم؟', ru: 'Отлично! Чем могу помочь?' },
                    nextNodeId: 'node2'
                  }
                ],
                fallbackResponse: { tr: 'Lütfen daha net konuşun.', en: 'Please speak more clearly.', ar: 'يرجى التحدث بوضوح أكثر.', fa: 'لطفاً واضح\u200cتر صحبت کنید.', ru: 'Пожалуйста, говорите яснее.' }
              },
              {
                nodeId: 'node2',
                npcName: 'Kişi',
                npcEmoji: '👤',
                npcText: { tr: 'Görüşmek üzere.', en: 'See you later.', ar: 'أراك لاحقا.', fa: 'می\u200cبینمت.', ru: 'Увидимся позже.' },
                matches: [],
                fallbackResponse: { tr: 'Hoşça kalın.', en: 'Goodbye.', ar: 'وداعا.', fa: 'خداحافظ.', ru: 'До свидания.' },
                isFinal: true
              }
            ]
          }
          ]
        },
        {
          id: 'a2i_konusma_9',
          type: 'boss_fight',
          title: { tr: 'Bölüm Sonu', en: 'Boss Fight', ar: 'معركة الزعيم', fa: 'مبارزه با غول', ru: 'Босс-файт' },
          xpReward: 100,
          coinReward: 50,
          exercises: [
          {
            id: 'a2i_konusma_9_mc_0',
            type: 'multiple_choice',
            question: { tr: 'iddia', en: 'iddia', ar: 'iddia', fa: 'iddia', ru: 'iddia' },
            options: [
              { text: { tr: 'iddia', en: 'claim', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_9_mc_1',
            type: 'multiple_choice',
            question: { tr: 'kanıt', en: 'kanıt', ar: 'kanıt', fa: 'kanıt', ru: 'kanıt' },
            options: [
              { text: { tr: 'kanıt', en: 'evidence', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_9_mc_2',
            type: 'multiple_choice',
            question: { tr: 'örnek', en: 'örnek', ar: 'örnek', fa: 'örnek', ru: 'örnek' },
            options: [
              { text: { tr: 'örnek', en: 'example', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_9_mc_3',
            type: 'multiple_choice',
            question: { tr: 'sonuç', en: 'sonuç', ar: 'sonuç', fa: 'sonuç', ru: 'sonuç' },
            options: [
              { text: { tr: 'sonuç', en: 'result', ar: 'صحيح', fa: 'درست', ru: 'правильно' }, isCorrect: true },
              { text: { tr: 'yanlış', en: 'wrong', ar: 'خطأ', fa: 'غلط', ru: 'неправильно' }, isCorrect: false }
            ]
          },
          {
            id: 'a2i_konusma_9_wo_4',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_konusma_9_wo_5',
            type: 'word_order',
            sentence: 'Bu karmaşık bir cümle.',
            translation: { tr: 'Bu karmaşık bir cümle.', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' },
            words: ['Bu', 'karmaşık', 'bir', 'cümle.']
          },
          {
            id: 'a2i_konusma_9_fib_6',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          },
          {
            id: 'a2i_konusma_9_fib_7',
            type: 'fill_in_blank',
            sentence: 'Bu karmaşık bir [cümle].',
            translation: { tr: 'Bu karmaşık bir [cümle].', en: 'This is a complex sentence.', ar: 'جملة', fa: 'جمله', ru: 'предложение' }
          }
          ]
        }
      ]
    },
  ]
};
