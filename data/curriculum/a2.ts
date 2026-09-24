import type { Level, Unit, Lesson, MCExercise, DragDropExercise, WordOrderExercise, FIBExercise, RPGExercise, TText } from '../types';

export const a2Level: Level = {
  id: 'a2',
  code: 'A2',
  name: { tr: "A2 (Temel)", en: "A2 (Elementary)", ar: "A2 (\u0627\u0628\u062a\u062f\u0627\u0626\u064a)", fa: "A2 (\u0627\u0628\u062a\u062f\u0627\u06cc\u06cc)", ru: "A2 (\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0439)" },
  units: [{ id: 'a2_devlet', unitNumber: 1, name: { tr: "Devlet Dairesi", en: "Government Office", ar: "\u062f\u0627\u0626\u0631\u0629 \u062d\u0643\u0648\u0645\u064a\u0629", fa: "\u0627\u062f\u0627\u0631\u0647 \u062f\u0648\u0644\u062a\u06cc", ru: "\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435" }, emoji: '🏛️', color: 'from-slate-400 to-slate-600', lessons: [{ id: 'a2_devlet_1', lessonNumber: 1, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 1", en: "Vocab 1", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 1", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 1", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_devlet_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "evrak", translation: { tr: "evrak", en: "document", ar: "\u0648\u062b\u064a\u0642\u0629", fa: "\u0633\u0646\u062f", ru: "\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ba\u015fvuru", translation: { tr: "ba\u015fvuru", en: "application", ar: "\u0637\u0644\u0628", fa: "\u062f\u0631\u062e\u0648\u0627\u0633\u062a", ru: "\u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_1_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kimlik", translation: { tr: "kimlik", en: "ID", ar: "\u0647\u0648\u064a\u0629", fa: "\u0647\u0648\u06cc\u062a", ru: "\u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_1_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "randevu", translation: { tr: "randevu", en: "appointment", ar: "\u0645\u0648\u0639\u062f", fa: "\u0642\u0631\u0627\u0631", ru: "\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_1_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "onay", translation: { tr: "onay", en: "approval", ar: "\u0645\u0648\u0627\u0641\u0642\u0629", fa: "\u062a\u0627\u06cc\u06cc\u062f", ru: "\u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u0435" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_devlet_2', lessonNumber: 2, lessonType: 'practice', title: { tr: "Pratik 1", en: "Practice 1", ar: "\u062a\u062f\u0631\u064a\u0628 1", fa: "\u062a\u0645\u0631\u06cc\u0646 1", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_devlet_2_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "evrak", translation: { tr: "document", en: "document", ar: "\u0648\u062b\u064a\u0642\u0629", fa: "\u0633\u0646\u062f", ru: "\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442" } }, { id: 'p2', turkish: "ba\u015fvuru", translation: { tr: "application", en: "application", ar: "\u0637\u0644\u0628", fa: "\u062f\u0631\u062e\u0648\u0627\u0633\u062a", ru: "\u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435" } }, { id: 'p3', turkish: "kimlik", translation: { tr: "ID", en: "ID", ar: "\u0647\u0648\u064a\u0629", fa: "\u0647\u0648\u06cc\u062a", ru: "\u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435" } }, { id: 'p4', turkish: "randevu", translation: { tr: "appointment", en: "appointment", ar: "\u0645\u0648\u0639\u062f", fa: "\u0642\u0631\u0627\u0631", ru: "\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435" } }, { id: 'p5', turkish: "onay", translation: { tr: "approval", en: "approval", ar: "\u0645\u0648\u0627\u0641\u0642\u0629", fa: "\u062a\u0627\u06cc\u06cc\u062f", ru: "\u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u0435" } }]
    }] },{ id: 'a2_devlet_3', lessonNumber: 3, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 1", en: "Sentences 1", ar: "\u062c\u0645\u0644 1", fa: "\u062c\u0645\u0644\u0627\u062a 1", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_devlet_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["istiyorum", "Ba\u015fvurmak"],
      correctOrder: ["Ba\u015fvurmak", "istiyorum"],
      translation: { tr: "Ba\u015fvurmak istiyorum.", en: "I want to apply.", ar: "\u0623\u0631\u064a\u062f \u0627\u0644\u062a\u0642\u062f\u064a\u0645.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0647\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435." }
    }, {
      id: 'a2_devlet_3_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["yan\u0131mda", "Kimli\u011fim"],
      correctOrder: ["Kimli\u011fim", "yan\u0131mda"],
      translation: { tr: "Kimli\u011fim yan\u0131mda.", en: "My ID is with me.", ar: "\u0647\u0648\u064a\u062a\u064a \u0645\u0639\u064a.", fa: "\u0647\u0648\u06cc\u062a \u0645\u0646 \u0628\u0627 \u0645\u0646 \u0627\u0633\u062a.", ru: "\u041c\u043e\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u0441\u043e \u043c\u043d\u043e\u0439." }
    }, {
      id: 'a2_devlet_3_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["ald\u0131m", "Randevu"],
      correctOrder: ["Randevu", "ald\u0131m"],
      translation: { tr: "Randevu ald\u0131m.", en: "I made an appointment.", ar: "\u0644\u0642\u062f \u0623\u062e\u0630\u062a \u0645\u0648\u0639\u062f\u0627.", fa: "\u0642\u0631\u0627\u0631 \u06af\u0631\u0641\u062a\u0645.", ru: "\u042f \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0435\u043c." }
    }, {
      id: 'a2_devlet_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Benim ad\u0131m ____.",
      correctAnswers: ["Ali"],
      wordBank: ["Ali", "Masa", "Kalem"],
      translation: { tr: "Benim ad\u0131m Ali.", en: "My name is Ali.", ar: "\u0627\u0633\u0645\u064a \u0639\u0644\u064a.", fa: "\u0646\u0627\u0645 \u0645\u0646 \u0639\u0644\u06cc \u0627\u0633\u062a.", ru: "\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043b\u0438." }
    }, {
      id: 'a2_devlet_3_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Buras\u0131 ____ dairesi.",
      correctAnswers: ["Devlet"],
      wordBank: ["Devlet", "Banka", "Ev"],
      translation: { tr: "Buras\u0131 devlet dairesi.", en: "This is a government office.", ar: "\u0647\u0630\u0647 \u062f\u0627\u0626\u0631\u0629 \u062d\u0643\u0648\u0645\u064a\u0629.", fa: "\u0627\u06cc\u0646 \u0627\u062f\u0627\u0631\u0647 \u062f\u0648\u0644\u062a\u06cc \u0627\u0633\u062a.", ru: "\u042d\u0442\u043e \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435." }
    }] },{ id: 'a2_devlet_4', lessonNumber: 4, lessonType: 'rpg', title: { tr: "Diyalog 1", en: "Dialogue 1", ar: "\u062d\u0648\u0627\u0631 1", fa: "\u06af\u0641\u062a\u06af\u0648 1", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 1" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_devlet_4_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu", en: "RPG Scenario", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_devlet_5', lessonNumber: 5, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 2", en: "Vocab 2", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 2", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 2", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_devlet_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ret", translation: { tr: "ret", en: "rejection", ar: "\u0631\u0641\u0636", fa: "\u0631\u062f", ru: "\u043e\u0442\u043a\u0430\u0437" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "dilek\u00e7e", translation: { tr: "dilek\u00e7e", en: "petition", ar: "\u0639\u0631\u064a\u0636\u0629", fa: "\u0639\u0631\u06cc\u0636\u0647", ru: "\u043f\u0435\u0442\u0438\u0446\u0438\u044f" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_5_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "noter", translation: { tr: "noter", en: "notary", ar: "\u0643\u0627\u062a\u0628 \u0639\u062f\u0644", fa: "\u062f\u0641\u062a\u0631 \u0627\u0633\u0646\u0627\u062f", ru: "\u043d\u043e\u0442\u0430\u0440\u0438\u0443\u0441" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_5_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "m\u00fch\u00fcr", translation: { tr: "m\u00fch\u00fcr", en: "stamp", ar: "\u062e\u062a\u0645", fa: "\u0645\u0647\u0631", ru: "\u043f\u0435\u0447\u0430\u0442\u044c" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_5_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "pasaport", translation: { tr: "pasaport", en: "passport", ar: "\u062c\u0648\u0627\u0632 \u0633\u0641\u0631", fa: "\u06af\u0630\u0631\u0646\u0627\u0645\u0647", ru: "\u043f\u0430\u0441\u043f\u043e\u0440\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_devlet_6', lessonNumber: 6, lessonType: 'practice', title: { tr: "Pratik 2", en: "Practice 2", ar: "\u062a\u062f\u0631\u064a\u0628 2", fa: "\u062a\u0645\u0631\u06cc\u0646 2", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_devlet_6_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "ret", translation: { tr: "rejection", en: "rejection", ar: "\u0631\u0641\u0636", fa: "\u0631\u062f", ru: "\u043e\u0442\u043a\u0430\u0437" } }, { id: 'p2', turkish: "dilek\u00e7e", translation: { tr: "petition", en: "petition", ar: "\u0639\u0631\u064a\u0636\u0629", fa: "\u0639\u0631\u06cc\u0636\u0647", ru: "\u043f\u0435\u0442\u0438\u0446\u0438\u044f" } }, { id: 'p3', turkish: "noter", translation: { tr: "notary", en: "notary", ar: "\u0643\u0627\u062a\u0628 \u0639\u062f\u0644", fa: "\u062f\u0641\u062a\u0631 \u0627\u0633\u0646\u0627\u062f", ru: "\u043d\u043e\u0442\u0430\u0440\u0438\u0443\u0441" } }, { id: 'p4', turkish: "m\u00fch\u00fcr", translation: { tr: "stamp", en: "stamp", ar: "\u062e\u062a\u0645", fa: "\u0645\u0647\u0631", ru: "\u043f\u0435\u0447\u0430\u0442\u044c" } }, { id: 'p5', turkish: "pasaport", translation: { tr: "passport", en: "passport", ar: "\u062c\u0648\u0627\u0632 \u0633\u0641\u0631", fa: "\u06af\u0630\u0631\u0646\u0627\u0645\u0647", ru: "\u043f\u0430\u0441\u043f\u043e\u0440\u0442" } }]
    }] },{ id: 'a2_devlet_7', lessonNumber: 7, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 2", en: "Sentences 2", ar: "\u062c\u0645\u0644 2", fa: "\u062c\u0645\u0644\u0627\u062a 2", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_devlet_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["istiyorum", "Ba\u015fvurmak"],
      correctOrder: ["Ba\u015fvurmak", "istiyorum"],
      translation: { tr: "Ba\u015fvurmak istiyorum.", en: "I want to apply.", ar: "\u0623\u0631\u064a\u062f \u0627\u0644\u062a\u0642\u062f\u064a\u0645.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0647\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435." }
    }, {
      id: 'a2_devlet_7_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["yan\u0131mda", "Kimli\u011fim"],
      correctOrder: ["Kimli\u011fim", "yan\u0131mda"],
      translation: { tr: "Kimli\u011fim yan\u0131mda.", en: "My ID is with me.", ar: "\u0647\u0648\u064a\u062a\u064a \u0645\u0639\u064a.", fa: "\u0647\u0648\u06cc\u062a \u0645\u0646 \u0628\u0627 \u0645\u0646 \u0627\u0633\u062a.", ru: "\u041c\u043e\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u0441\u043e \u043c\u043d\u043e\u0439." }
    }, {
      id: 'a2_devlet_7_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["ald\u0131m", "Randevu"],
      correctOrder: ["Randevu", "ald\u0131m"],
      translation: { tr: "Randevu ald\u0131m.", en: "I made an appointment.", ar: "\u0644\u0642\u062f \u0623\u062e\u0630\u062a \u0645\u0648\u0639\u062f\u0627.", fa: "\u0642\u0631\u0627\u0631 \u06af\u0631\u0641\u062a\u0645.", ru: "\u042f \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0435\u043c." }
    }, {
      id: 'a2_devlet_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Benim ad\u0131m ____.",
      correctAnswers: ["Ali"],
      wordBank: ["Ali", "Masa", "Kalem"],
      translation: { tr: "Benim ad\u0131m Ali.", en: "My name is Ali.", ar: "\u0627\u0633\u0645\u064a \u0639\u0644\u064a.", fa: "\u0646\u0627\u0645 \u0645\u0646 \u0639\u0644\u06cc \u0627\u0633\u062a.", ru: "\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043b\u0438." }
    }, {
      id: 'a2_devlet_7_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Buras\u0131 ____ dairesi.",
      correctAnswers: ["Devlet"],
      wordBank: ["Devlet", "Banka", "Ev"],
      translation: { tr: "Buras\u0131 devlet dairesi.", en: "This is a government office.", ar: "\u0647\u0630\u0647 \u062f\u0627\u0626\u0631\u0629 \u062d\u0643\u0648\u0645\u064a\u0629.", fa: "\u0627\u06cc\u0646 \u0627\u062f\u0627\u0631\u0647 \u062f\u0648\u0644\u062a\u06cc \u0627\u0633\u062a.", ru: "\u042d\u0442\u043e \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435." }
    }] },{ id: 'a2_devlet_8', lessonNumber: 8, lessonType: 'rpg', title: { tr: "Diyalog 2", en: "Dialogue 2", ar: "\u062d\u0648\u0627\u0631 2", fa: "\u06af\u0641\u062a\u06af\u0648 2", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 2" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_devlet_8_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu 2", en: "RPG Scenario 2", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG 2", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG 2", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG 2" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_devlet_9', lessonNumber: 9, lessonType: 'boss_fight', title: { tr: "Patron Sava\u015f\u0131", en: "Boss Fight", ar: "\u0645\u0639\u0631\u0643\u0629 \u0627\u0644\u0632\u0639\u064a\u0645", fa: "\u0645\u0628\u0627\u0631\u0632\u0647 \u0628\u0627 \u0631\u0626\u06cc\u0633", ru: "\u0411\u043e\u0441\u0441 \u0431\u043e\u0439" }, xpReward: 70, coinReward: 35, exercises: [{
      id: 'a2_devlet_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "evrak", translation: { tr: "evrak", en: "document", ar: "\u0648\u062b\u064a\u0642\u0629", fa: "\u0633\u0646\u062f", ru: "\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ba\u015fvuru", translation: { tr: "ba\u015fvuru", en: "application", ar: "\u0637\u0644\u0628", fa: "\u062f\u0631\u062e\u0648\u0627\u0633\u062a", ru: "\u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ret", translation: { tr: "ret", en: "rejection", ar: "\u0631\u0641\u0636", fa: "\u0631\u062f", ru: "\u043e\u0442\u043a\u0430\u0437" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "dilek\u00e7e", translation: { tr: "dilek\u00e7e", en: "petition", ar: "\u0639\u0631\u064a\u0636\u0629", fa: "\u0639\u0631\u06cc\u0636\u0647", ru: "\u043f\u0435\u0442\u0438\u0446\u0438\u044f" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_devlet_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["istiyorum", "Ba\u015fvurmak"],
      correctOrder: ["Ba\u015fvurmak", "istiyorum"],
      translation: { tr: "Ba\u015fvurmak istiyorum.", en: "I want to apply.", ar: "\u0623\u0631\u064a\u062f \u0627\u0644\u062a\u0642\u062f\u064a\u0645.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0647\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435." }
    }, {
      id: 'a2_devlet_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["istiyorum", "Ba\u015fvurmak"],
      correctOrder: ["Ba\u015fvurmak", "istiyorum"],
      translation: { tr: "Ba\u015fvurmak istiyorum.", en: "I want to apply.", ar: "\u0623\u0631\u064a\u062f \u0627\u0644\u062a\u0642\u062f\u064a\u0645.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0647\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435." }
    }, {
      id: 'a2_devlet_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Benim ad\u0131m ____.",
      correctAnswers: ["Ali"],
      wordBank: ["Ali", "Masa", "Kalem"],
      translation: { tr: "Benim ad\u0131m Ali.", en: "My name is Ali.", ar: "\u0627\u0633\u0645\u064a \u0639\u0644\u064a.", fa: "\u0646\u0627\u0645 \u0645\u0646 \u0639\u0644\u06cc \u0627\u0633\u062a.", ru: "\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043b\u0438." }
    }, {
      id: 'a2_devlet_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Benim ad\u0131m ____.",
      correctAnswers: ["Ali"],
      wordBank: ["Ali", "Masa", "Kalem"],
      translation: { tr: "Benim ad\u0131m Ali.", en: "My name is Ali.", ar: "\u0627\u0633\u0645\u064a \u0639\u0644\u064a.", fa: "\u0646\u0627\u0645 \u0645\u0646 \u0639\u0644\u06cc \u0627\u0633\u062a.", ru: "\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0410\u043b\u0438." }
    }] }] },{ id: 'a2_banka', unitNumber: 2, name: { tr: "Banka", en: "Bank", ar: "\u0628\u0646\u0643", fa: "\u0628\u0627\u0646\u06a9", ru: "\u0411\u0430\u043d\u043a" }, emoji: '🏦', color: 'from-emerald-500 to-green-700', lessons: [{ id: 'a2_banka_1', lessonNumber: 1, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 1", en: "Vocab 1", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 1", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 1", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_banka_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "hesap", translation: { tr: "hesap", en: "account", ar: "\u062d\u0633\u0627\u0628", fa: "\u062d\u0633\u0627\u0628", ru: "\u0441\u0447\u0435\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "para", translation: { tr: "para", en: "money", ar: "\u0645\u0627\u0644", fa: "\u067e\u0648\u0644", ru: "\u0434\u0435\u043d\u044c\u0433\u0438" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_1_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kredi", translation: { tr: "kredi", en: "credit", ar: "\u0627\u0626\u062a\u0645\u0627\u0646", fa: "\u0627\u0639\u062a\u0628\u0627\u0631", ru: "\u043a\u0440\u0435\u0434\u0438\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_1_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kart", translation: { tr: "kart", en: "card", ar: "\u0628\u0637\u0627\u0642\u0629", fa: "\u06a9\u0627\u0631\u062a", ru: "\u043a\u0430\u0440\u0442\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_1_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "\u015fifre", translation: { tr: "\u015fifre", en: "password", ar: "\u0643\u0644\u0645\u0629 \u0633\u0631", fa: "\u0631\u0645\u0632", ru: "\u043f\u0430\u0440\u043e\u043b\u044c" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_banka_2', lessonNumber: 2, lessonType: 'practice', title: { tr: "Pratik 1", en: "Practice 1", ar: "\u062a\u062f\u0631\u064a\u0628 1", fa: "\u062a\u0645\u0631\u06cc\u0646 1", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_banka_2_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "hesap", translation: { tr: "account", en: "account", ar: "\u062d\u0633\u0627\u0628", fa: "\u062d\u0633\u0627\u0628", ru: "\u0441\u0447\u0435\u0442" } }, { id: 'p2', turkish: "para", translation: { tr: "money", en: "money", ar: "\u0645\u0627\u0644", fa: "\u067e\u0648\u0644", ru: "\u0434\u0435\u043d\u044c\u0433\u0438" } }, { id: 'p3', turkish: "kredi", translation: { tr: "credit", en: "credit", ar: "\u0627\u0626\u062a\u0645\u0627\u0646", fa: "\u0627\u0639\u062a\u0628\u0627\u0631", ru: "\u043a\u0440\u0435\u0434\u0438\u0442" } }, { id: 'p4', turkish: "kart", translation: { tr: "card", en: "card", ar: "\u0628\u0637\u0627\u0642\u0629", fa: "\u06a9\u0627\u0631\u062a", ru: "\u043a\u0430\u0440\u0442\u0430" } }, { id: 'p5', turkish: "\u015fifre", translation: { tr: "password", en: "password", ar: "\u0643\u0644\u0645\u0629 \u0633\u0631", fa: "\u0631\u0645\u0632", ru: "\u043f\u0430\u0440\u043e\u043b\u044c" } }]
    }] },{ id: 'a2_banka_3', lessonNumber: 3, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 1", en: "Sentences 1", ar: "\u062c\u0645\u0644 1", fa: "\u062c\u0645\u0644\u0627\u062a 1", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_banka_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["istiyorum", "Hesap", "a\u00e7mak"],
      correctOrder: ["Hesap", "a\u00e7mak", "istiyorum"],
      translation: { tr: "Hesap a\u00e7mak istiyorum.", en: "I want to open an account.", ar: "\u0623\u0631\u064a\u062f \u0641\u062a\u062d \u062d\u0633\u0627\u0628.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_banka_3_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["\u00e7ekece\u011fim", "Para"],
      correctOrder: ["Para", "\u00e7ekece\u011fim"],
      translation: { tr: "Para \u00e7ekece\u011fim.", en: "I will withdraw money.", ar: "\u0633\u0623\u0633\u062d\u0628 \u0627\u0644\u0645\u0627\u0644.", fa: "\u067e\u0648\u0644 \u0628\u0631\u062f\u0627\u0634\u062a \u0645\u06cc\u200c\u06a9\u0646\u0645.", ru: "\u042f \u0441\u043d\u0438\u043c\u0443 \u0434\u0435\u043d\u044c\u0433\u0438." }
    }, {
      id: 'a2_banka_3_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["unuttum", "\u015eifremi"],
      correctOrder: ["\u015eifremi", "unuttum"],
      translation: { tr: "\u015eifremi unuttum.", en: "I forgot my password.", ar: "\u0644\u0642\u062f \u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u064a.", fa: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062e\u0648\u062f \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06a9\u0631\u062f\u0645.", ru: "\u042f \u0437\u0430\u0431\u044b\u043b \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c." }
    }, {
      id: 'a2_banka_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bir ____ a\u00e7mak istiyorum.",
      correctAnswers: ["hesap"],
      wordBank: ["hesap", "kap\u0131", "kitap"],
      translation: { tr: "Bir hesap a\u00e7mak istiyorum.", en: "I want to open an account.", ar: "\u0623\u0631\u064a\u062f \u0641\u062a\u062d \u062d\u0633\u0627\u0628.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_banka_3_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Kredi ____ almak istiyorum.",
      correctAnswers: ["kart\u0131"],
      wordBank: ["kart\u0131", "paras\u0131", "hesab\u0131"],
      translation: { tr: "Kredi kart\u0131 almak istiyorum.", en: "I want to get a credit card.", ar: "\u0623\u0631\u064a\u062f \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062a\u0645\u0627\u0646.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u06a9\u0627\u0631\u062a \u0627\u0639\u062a\u0628\u0627\u0631\u06cc \u0628\u06af\u06cc\u0631\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443." }
    }] },{ id: 'a2_banka_4', lessonNumber: 4, lessonType: 'rpg', title: { tr: "Diyalog 1", en: "Dialogue 1", ar: "\u062d\u0648\u0627\u0631 1", fa: "\u06af\u0641\u062a\u06af\u0648 1", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 1" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_banka_4_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu", en: "RPG Scenario", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_banka_5', lessonNumber: 5, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 2", en: "Vocab 2", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 2", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 2", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_banka_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "faiz", translation: { tr: "faiz", en: "interest", ar: "\u0641\u0627\u0626\u062f\u0629", fa: "\u0628\u0647\u0631\u0647", ru: "\u043f\u0440\u043e\u0446\u0435\u043d\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kur", translation: { tr: "kur", en: "exchange rate", ar: "\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641", fa: "\u0646\u0631\u062e \u0627\u0631\u0632", ru: "\u043a\u0443\u0440\u0441" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_5_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "d\u00f6viz", translation: { tr: "d\u00f6viz", en: "foreign currency", ar: "\u0639\u0645\u0644\u0629 \u0623\u062c\u0646\u0628\u064a\u0629", fa: "\u0627\u0631\u0632", ru: "\u0432\u0430\u043b\u044e\u0442\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_5_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "komisyon", translation: { tr: "komisyon", en: "commission", ar: "\u0639\u0645\u0648\u0644\u0629", fa: "\u06a9\u0645\u06cc\u0633\u06cc\u0648\u0646", ru: "\u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044f" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_5_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "bloke", translation: { tr: "bloke", en: "block", ar: "\u062d\u0638\u0631", fa: "\u0645\u0633\u062f\u0648\u062f", ru: "\u0431\u043b\u043e\u043a" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_banka_6', lessonNumber: 6, lessonType: 'practice', title: { tr: "Pratik 2", en: "Practice 2", ar: "\u062a\u062f\u0631\u064a\u0628 2", fa: "\u062a\u0645\u0631\u06cc\u0646 2", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_banka_6_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "faiz", translation: { tr: "interest", en: "interest", ar: "\u0641\u0627\u0626\u062f\u0629", fa: "\u0628\u0647\u0631\u0647", ru: "\u043f\u0440\u043e\u0446\u0435\u043d\u0442" } }, { id: 'p2', turkish: "kur", translation: { tr: "exchange rate", en: "exchange rate", ar: "\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641", fa: "\u0646\u0631\u062e \u0627\u0631\u0632", ru: "\u043a\u0443\u0440\u0441" } }, { id: 'p3', turkish: "d\u00f6viz", translation: { tr: "foreign currency", en: "foreign currency", ar: "\u0639\u0645\u0644\u0629 \u0623\u062c\u0646\u0628\u064a\u0629", fa: "\u0627\u0631\u0632", ru: "\u0432\u0430\u043b\u044e\u0442\u0430" } }, { id: 'p4', turkish: "komisyon", translation: { tr: "commission", en: "commission", ar: "\u0639\u0645\u0648\u0644\u0629", fa: "\u06a9\u0645\u06cc\u0633\u06cc\u0648\u0646", ru: "\u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044f" } }, { id: 'p5', turkish: "bloke", translation: { tr: "block", en: "block", ar: "\u062d\u0638\u0631", fa: "\u0645\u0633\u062f\u0648\u062f", ru: "\u0431\u043b\u043e\u043a" } }]
    }] },{ id: 'a2_banka_7', lessonNumber: 7, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 2", en: "Sentences 2", ar: "\u062c\u0645\u0644 2", fa: "\u062c\u0645\u0644\u0627\u062a 2", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_banka_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["istiyorum", "Hesap", "a\u00e7mak"],
      correctOrder: ["Hesap", "a\u00e7mak", "istiyorum"],
      translation: { tr: "Hesap a\u00e7mak istiyorum.", en: "I want to open an account.", ar: "\u0623\u0631\u064a\u062f \u0641\u062a\u062d \u062d\u0633\u0627\u0628.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_banka_7_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["\u00e7ekece\u011fim", "Para"],
      correctOrder: ["Para", "\u00e7ekece\u011fim"],
      translation: { tr: "Para \u00e7ekece\u011fim.", en: "I will withdraw money.", ar: "\u0633\u0623\u0633\u062d\u0628 \u0627\u0644\u0645\u0627\u0644.", fa: "\u067e\u0648\u0644 \u0628\u0631\u062f\u0627\u0634\u062a \u0645\u06cc\u200c\u06a9\u0646\u0645.", ru: "\u042f \u0441\u043d\u0438\u043c\u0443 \u0434\u0435\u043d\u044c\u0433\u0438." }
    }, {
      id: 'a2_banka_7_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["unuttum", "\u015eifremi"],
      correctOrder: ["\u015eifremi", "unuttum"],
      translation: { tr: "\u015eifremi unuttum.", en: "I forgot my password.", ar: "\u0644\u0642\u062f \u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u064a.", fa: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062e\u0648\u062f \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06a9\u0631\u062f\u0645.", ru: "\u042f \u0437\u0430\u0431\u044b\u043b \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c." }
    }, {
      id: 'a2_banka_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bir ____ a\u00e7mak istiyorum.",
      correctAnswers: ["hesap"],
      wordBank: ["hesap", "kap\u0131", "kitap"],
      translation: { tr: "Bir hesap a\u00e7mak istiyorum.", en: "I want to open an account.", ar: "\u0623\u0631\u064a\u062f \u0641\u062a\u062d \u062d\u0633\u0627\u0628.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_banka_7_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Kredi ____ almak istiyorum.",
      correctAnswers: ["kart\u0131"],
      wordBank: ["kart\u0131", "paras\u0131", "hesab\u0131"],
      translation: { tr: "Kredi kart\u0131 almak istiyorum.", en: "I want to get a credit card.", ar: "\u0623\u0631\u064a\u062f \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062a\u0645\u0627\u0646.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u06a9\u0627\u0631\u062a \u0627\u0639\u062a\u0628\u0627\u0631\u06cc \u0628\u06af\u06cc\u0631\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443." }
    }] },{ id: 'a2_banka_8', lessonNumber: 8, lessonType: 'rpg', title: { tr: "Diyalog 2", en: "Dialogue 2", ar: "\u062d\u0648\u0627\u0631 2", fa: "\u06af\u0641\u062a\u06af\u0648 2", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 2" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_banka_8_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu 2", en: "RPG Scenario 2", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG 2", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG 2", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG 2" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_banka_9', lessonNumber: 9, lessonType: 'boss_fight', title: { tr: "Patron Sava\u015f\u0131", en: "Boss Fight", ar: "\u0645\u0639\u0631\u0643\u0629 \u0627\u0644\u0632\u0639\u064a\u0645", fa: "\u0645\u0628\u0627\u0631\u0632\u0647 \u0628\u0627 \u0631\u0626\u06cc\u0633", ru: "\u0411\u043e\u0441\u0441 \u0431\u043e\u0439" }, xpReward: 70, coinReward: 35, exercises: [{
      id: 'a2_banka_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "hesap", translation: { tr: "hesap", en: "account", ar: "\u062d\u0633\u0627\u0628", fa: "\u062d\u0633\u0627\u0628", ru: "\u0441\u0447\u0435\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "para", translation: { tr: "para", en: "money", ar: "\u0645\u0627\u0644", fa: "\u067e\u0648\u0644", ru: "\u0434\u0435\u043d\u044c\u0433\u0438" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "faiz", translation: { tr: "faiz", en: "interest", ar: "\u0641\u0627\u0626\u062f\u0629", fa: "\u0628\u0647\u0631\u0647", ru: "\u043f\u0440\u043e\u0446\u0435\u043d\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kur", translation: { tr: "kur", en: "exchange rate", ar: "\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641", fa: "\u0646\u0631\u062e \u0627\u0631\u0632", ru: "\u043a\u0443\u0440\u0441" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_banka_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["istiyorum", "Hesap", "a\u00e7mak"],
      correctOrder: ["Hesap", "a\u00e7mak", "istiyorum"],
      translation: { tr: "Hesap a\u00e7mak istiyorum.", en: "I want to open an account.", ar: "\u0623\u0631\u064a\u062f \u0641\u062a\u062d \u062d\u0633\u0627\u0628.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_banka_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["istiyorum", "Hesap", "a\u00e7mak"],
      correctOrder: ["Hesap", "a\u00e7mak", "istiyorum"],
      translation: { tr: "Hesap a\u00e7mak istiyorum.", en: "I want to open an account.", ar: "\u0623\u0631\u064a\u062f \u0641\u062a\u062d \u062d\u0633\u0627\u0628.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_banka_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bir ____ a\u00e7mak istiyorum.",
      correctAnswers: ["hesap"],
      wordBank: ["hesap", "kap\u0131", "kitap"],
      translation: { tr: "Bir hesap a\u00e7mak istiyorum.", en: "I want to open an account.", ar: "\u0623\u0631\u064a\u062f \u0641\u062a\u062d \u062d\u0633\u0627\u0628.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_banka_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bir ____ a\u00e7mak istiyorum.",
      correctAnswers: ["hesap"],
      wordBank: ["hesap", "kap\u0131", "kitap"],
      translation: { tr: "Bir hesap a\u00e7mak istiyorum.", en: "I want to open an account.", ar: "\u0623\u0631\u064a\u062f \u0641\u062a\u062d \u062d\u0633\u0627\u0628.", fa: "\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0645 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646\u0645.", ru: "\u042f \u0445\u043e\u0447\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0447\u0435\u0442." }
    }] }] },{ id: 'a2_hastane', unitNumber: 3, name: { tr: "Hastane", en: "Hospital", ar: "\u0645\u0633\u062a\u0634\u0641\u0649", fa: "\u0628\u06cc\u0645\u0627\u0631\u0633\u062a\u0627\u0646", ru: "\u0411\u043e\u043b\u044c\u043d\u0438\u0446\u0430" }, emoji: '🏥', color: 'from-blue-400 to-indigo-600', lessons: [{ id: 'a2_hastane_1', lessonNumber: 1, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 1", en: "Vocab 1", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 1", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 1", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_hastane_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "doktor", translation: { tr: "doktor", en: "doctor", ar: "\u0637\u0628\u064a\u0628", fa: "\u062f\u06a9\u062a\u0631", ru: "\u0432\u0440\u0430\u0447" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "hasta", translation: { tr: "hasta", en: "patient", ar: "\u0645\u0631\u064a\u0636", fa: "\u0628\u06cc\u0645\u0627\u0631", ru: "\u043f\u0430\u0446\u0438\u0435\u043d\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_1_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ila\u00e7", translation: { tr: "ila\u00e7", en: "medicine", ar: "\u062f\u0648\u0627\u0621", fa: "\u062f\u0627\u0631\u0648", ru: "\u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_1_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "re\u00e7ete", translation: { tr: "re\u00e7ete", en: "prescription", ar: "\u0648\u0635\u0641\u0629 \u0637\u0628\u064a\u0629", fa: "\u0646\u0633\u062e\u0647", ru: "\u0440\u0435\u0446\u0435\u043f\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_1_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "a\u011fr\u0131", translation: { tr: "a\u011fr\u0131", en: "pain", ar: "\u0623\u0644\u0645", fa: "\u062f\u0631\u062f", ru: "\u0431\u043e\u043b\u044c" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_hastane_2', lessonNumber: 2, lessonType: 'practice', title: { tr: "Pratik 1", en: "Practice 1", ar: "\u062a\u062f\u0631\u064a\u0628 1", fa: "\u062a\u0645\u0631\u06cc\u0646 1", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_hastane_2_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "doktor", translation: { tr: "doctor", en: "doctor", ar: "\u0637\u0628\u064a\u0628", fa: "\u062f\u06a9\u062a\u0631", ru: "\u0432\u0440\u0430\u0447" } }, { id: 'p2', turkish: "hasta", translation: { tr: "patient", en: "patient", ar: "\u0645\u0631\u064a\u0636", fa: "\u0628\u06cc\u0645\u0627\u0631", ru: "\u043f\u0430\u0446\u0438\u0435\u043d\u0442" } }, { id: 'p3', turkish: "ila\u00e7", translation: { tr: "medicine", en: "medicine", ar: "\u062f\u0648\u0627\u0621", fa: "\u062f\u0627\u0631\u0648", ru: "\u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e" } }, { id: 'p4', turkish: "re\u00e7ete", translation: { tr: "prescription", en: "prescription", ar: "\u0648\u0635\u0641\u0629 \u0637\u0628\u064a\u0629", fa: "\u0646\u0633\u062e\u0647", ru: "\u0440\u0435\u0446\u0435\u043f\u0442" } }, { id: 'p5', turkish: "a\u011fr\u0131", translation: { tr: "pain", en: "pain", ar: "\u0623\u0644\u0645", fa: "\u062f\u0631\u062f", ru: "\u0431\u043e\u043b\u044c" } }]
    }] },{ id: 'a2_hastane_3', lessonNumber: 3, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 1", en: "Sentences 1", ar: "\u062c\u0645\u0644 1", fa: "\u062c\u0645\u0644\u0627\u062a 1", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_hastane_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["hastay\u0131m", "\u00c7ok"],
      correctOrder: ["\u00c7ok", "hastay\u0131m"],
      translation: { tr: "\u00c7ok hastay\u0131m.", en: "I am very sick.", ar: "\u0623\u0646\u0627 \u0645\u0631\u064a\u0636 \u062c\u062f\u0627.", fa: "\u0645\u0646 \u062e\u06cc\u0644\u06cc \u0628\u06cc\u0645\u0627\u0631 \u0647\u0633\u062a\u0645.", ru: "\u042f \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u0435\u043d." }
    }, {
      id: 'a2_hastane_3_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["a\u011fr\u0131yor", "Ba\u015f\u0131m"],
      correctOrder: ["Ba\u015f\u0131m", "a\u011fr\u0131yor"],
      translation: { tr: "Ba\u015f\u0131m a\u011fr\u0131yor.", en: "My head hurts.", ar: "\u0631\u0623\u0633\u064a \u064a\u0624\u0644\u0645\u0646\u064a.", fa: "\u0633\u0631\u0645 \u062f\u0631\u062f \u0645\u06cc\u200c\u06a9\u0646\u062f.", ru: "\u0423 \u043c\u0435\u043d\u044f \u0431\u043e\u043b\u0438\u0442 \u0433\u043e\u043b\u043e\u0432\u0430." }
    }, {
      id: 'a2_hastane_3_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["alaca\u011f\u0131m", "\u0130la\u00e7"],
      correctOrder: ["\u0130la\u00e7", "alaca\u011f\u0131m"],
      translation: { tr: "\u0130la\u00e7 alaca\u011f\u0131m.", en: "I will buy medicine.", ar: "\u0633\u0623\u0634\u062a\u0631\u064a \u062f\u0648\u0627\u0621.", fa: "\u062f\u0627\u0631\u0648 \u062e\u0648\u0627\u0647\u0645 \u062e\u0631\u06cc\u062f.", ru: "\u042f \u043a\u0443\u043f\u043b\u044e \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e." }
    }, {
      id: 'a2_hastane_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bana bir ____ yazar m\u0131s\u0131n\u0131z?",
      correctAnswers: ["re\u00e7ete"],
      wordBank: ["re\u00e7ete", "kitap", "mektup"],
      translation: { tr: "Bana bir re\u00e7ete yazar m\u0131s\u0131n\u0131z?", en: "Can you write me a prescription?", ar: "\u0647\u0644 \u064a\u0645\u0643\u0646\u0643 \u0623\u0646 \u062a\u0643\u062a\u0628 \u0644\u064a \u0648\u0635\u0641\u0629 \u0637\u0628\u064a\u0629\u061f", fa: "\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0631\u0627\u06cc\u0645 \u0646\u0633\u062e\u0647 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\u061f", ru: "\u041d\u0435 \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0432\u044b \u0432\u044b\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u043d\u0435 \u0440\u0435\u0446\u0435\u043f\u0442?" }
    }, {
      id: 'a2_hastane_3_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bug\u00fcn ____ eczane nerede?",
      correctAnswers: ["n\u00f6bet\u00e7i"],
      wordBank: ["n\u00f6bet\u00e7i", "a\u00e7\u0131k", "kapal\u0131"],
      translation: { tr: "Bug\u00fcn n\u00f6bet\u00e7i eczane nerede?", en: "Where is the pharmacy on duty today?", ar: "\u0623\u064a\u0646 \u0635\u064a\u062f\u0644\u064a\u0629 \u0627\u0644\u0645\u0646\u0627\u0648\u0628\u0629 \u0627\u0644\u064a\u0648\u0645\u061f", fa: "\u062f\u0627\u0631\u0648\u062e\u0627\u0646\u0647 \u06a9\u0634\u06cc\u06a9 \u0627\u0645\u0631\u0648\u0632 \u06a9\u062c\u0627\u0633\u062a\u061f", ru: "\u0413\u0434\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0434\u0435\u0436\u0443\u0440\u043d\u0430\u044f \u0430\u043f\u0442\u0435\u043a\u0430?" }
    }] },{ id: 'a2_hastane_4', lessonNumber: 4, lessonType: 'rpg', title: { tr: "Diyalog 1", en: "Dialogue 1", ar: "\u062d\u0648\u0627\u0631 1", fa: "\u06af\u0641\u062a\u06af\u0648 1", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 1" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_hastane_4_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu", en: "RPG Scenario", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_hastane_5', lessonNumber: 5, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 2", en: "Vocab 2", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 2", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 2", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_hastane_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ameliyat", translation: { tr: "ameliyat", en: "surgery", ar: "\u0639\u0645\u0644\u064a\u0629 \u062c\u0631\u0627\u062d\u064a\u0629", fa: "\u062c\u0631\u0627\u062d\u06cc", ru: "\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "tahlil", translation: { tr: "tahlil", en: "test", ar: "\u062a\u062d\u0644\u064a\u0644", fa: "\u0622\u0632\u0645\u0627\u06cc\u0634", ru: "\u0430\u043d\u0430\u043b\u0438\u0437" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_5_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "r\u00f6ntgen", translation: { tr: "r\u00f6ntgen", en: "x-ray", ar: "\u0623\u0634\u0639\u0629 \u0633\u064a\u0646\u064a\u0629", fa: "\u0627\u0634\u0639\u0647 \u0627\u06cc\u06a9\u0633", ru: "\u0440\u0435\u043d\u0442\u0433\u0435\u043d" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_5_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "acil", translation: { tr: "acil", en: "emergency", ar: "\u0637\u0648\u0627\u0631\u0626", fa: "\u0627\u0648\u0631\u0698\u0627\u0646\u0633", ru: "\u0441\u043a\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_5_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "n\u00f6bet\u00e7i", translation: { tr: "n\u00f6bet\u00e7i", en: "on duty", ar: "\u0645\u0646\u0627\u0648\u0628", fa: "\u06a9\u0634\u06cc\u06a9", ru: "\u0434\u0435\u0436\u0443\u0440\u043d\u044b\u0439" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_hastane_6', lessonNumber: 6, lessonType: 'practice', title: { tr: "Pratik 2", en: "Practice 2", ar: "\u062a\u062f\u0631\u064a\u0628 2", fa: "\u062a\u0645\u0631\u06cc\u0646 2", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_hastane_6_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "ameliyat", translation: { tr: "surgery", en: "surgery", ar: "\u0639\u0645\u0644\u064a\u0629 \u062c\u0631\u0627\u062d\u064a\u0629", fa: "\u062c\u0631\u0627\u062d\u06cc", ru: "\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f" } }, { id: 'p2', turkish: "tahlil", translation: { tr: "test", en: "test", ar: "\u062a\u062d\u0644\u064a\u0644", fa: "\u0622\u0632\u0645\u0627\u06cc\u0634", ru: "\u0430\u043d\u0430\u043b\u0438\u0437" } }, { id: 'p3', turkish: "r\u00f6ntgen", translation: { tr: "x-ray", en: "x-ray", ar: "\u0623\u0634\u0639\u0629 \u0633\u064a\u0646\u064a\u0629", fa: "\u0627\u0634\u0639\u0647 \u0627\u06cc\u06a9\u0633", ru: "\u0440\u0435\u043d\u0442\u0433\u0435\u043d" } }, { id: 'p4', turkish: "acil", translation: { tr: "emergency", en: "emergency", ar: "\u0637\u0648\u0627\u0631\u0626", fa: "\u0627\u0648\u0631\u0698\u0627\u0646\u0633", ru: "\u0441\u043a\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c" } }, { id: 'p5', turkish: "n\u00f6bet\u00e7i", translation: { tr: "on duty", en: "on duty", ar: "\u0645\u0646\u0627\u0648\u0628", fa: "\u06a9\u0634\u06cc\u06a9", ru: "\u0434\u0435\u0436\u0443\u0440\u043d\u044b\u0439" } }]
    }] },{ id: 'a2_hastane_7', lessonNumber: 7, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 2", en: "Sentences 2", ar: "\u062c\u0645\u0644 2", fa: "\u062c\u0645\u0644\u0627\u062a 2", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_hastane_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["hastay\u0131m", "\u00c7ok"],
      correctOrder: ["\u00c7ok", "hastay\u0131m"],
      translation: { tr: "\u00c7ok hastay\u0131m.", en: "I am very sick.", ar: "\u0623\u0646\u0627 \u0645\u0631\u064a\u0636 \u062c\u062f\u0627.", fa: "\u0645\u0646 \u062e\u06cc\u0644\u06cc \u0628\u06cc\u0645\u0627\u0631 \u0647\u0633\u062a\u0645.", ru: "\u042f \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u0435\u043d." }
    }, {
      id: 'a2_hastane_7_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["a\u011fr\u0131yor", "Ba\u015f\u0131m"],
      correctOrder: ["Ba\u015f\u0131m", "a\u011fr\u0131yor"],
      translation: { tr: "Ba\u015f\u0131m a\u011fr\u0131yor.", en: "My head hurts.", ar: "\u0631\u0623\u0633\u064a \u064a\u0624\u0644\u0645\u0646\u064a.", fa: "\u0633\u0631\u0645 \u062f\u0631\u062f \u0645\u06cc\u200c\u06a9\u0646\u062f.", ru: "\u0423 \u043c\u0435\u043d\u044f \u0431\u043e\u043b\u0438\u0442 \u0433\u043e\u043b\u043e\u0432\u0430." }
    }, {
      id: 'a2_hastane_7_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["alaca\u011f\u0131m", "\u0130la\u00e7"],
      correctOrder: ["\u0130la\u00e7", "alaca\u011f\u0131m"],
      translation: { tr: "\u0130la\u00e7 alaca\u011f\u0131m.", en: "I will buy medicine.", ar: "\u0633\u0623\u0634\u062a\u0631\u064a \u062f\u0648\u0627\u0621.", fa: "\u062f\u0627\u0631\u0648 \u062e\u0648\u0627\u0647\u0645 \u062e\u0631\u06cc\u062f.", ru: "\u042f \u043a\u0443\u043f\u043b\u044e \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e." }
    }, {
      id: 'a2_hastane_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bana bir ____ yazar m\u0131s\u0131n\u0131z?",
      correctAnswers: ["re\u00e7ete"],
      wordBank: ["re\u00e7ete", "kitap", "mektup"],
      translation: { tr: "Bana bir re\u00e7ete yazar m\u0131s\u0131n\u0131z?", en: "Can you write me a prescription?", ar: "\u0647\u0644 \u064a\u0645\u0643\u0646\u0643 \u0623\u0646 \u062a\u0643\u062a\u0628 \u0644\u064a \u0648\u0635\u0641\u0629 \u0637\u0628\u064a\u0629\u061f", fa: "\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0631\u0627\u06cc\u0645 \u0646\u0633\u062e\u0647 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\u061f", ru: "\u041d\u0435 \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0432\u044b \u0432\u044b\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u043d\u0435 \u0440\u0435\u0446\u0435\u043f\u0442?" }
    }, {
      id: 'a2_hastane_7_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bug\u00fcn ____ eczane nerede?",
      correctAnswers: ["n\u00f6bet\u00e7i"],
      wordBank: ["n\u00f6bet\u00e7i", "a\u00e7\u0131k", "kapal\u0131"],
      translation: { tr: "Bug\u00fcn n\u00f6bet\u00e7i eczane nerede?", en: "Where is the pharmacy on duty today?", ar: "\u0623\u064a\u0646 \u0635\u064a\u062f\u0644\u064a\u0629 \u0627\u0644\u0645\u0646\u0627\u0648\u0628\u0629 \u0627\u0644\u064a\u0648\u0645\u061f", fa: "\u062f\u0627\u0631\u0648\u062e\u0627\u0646\u0647 \u06a9\u0634\u06cc\u06a9 \u0627\u0645\u0631\u0648\u0632 \u06a9\u062c\u0627\u0633\u062a\u061f", ru: "\u0413\u0434\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0434\u0435\u0436\u0443\u0440\u043d\u0430\u044f \u0430\u043f\u0442\u0435\u043a\u0430?" }
    }] },{ id: 'a2_hastane_8', lessonNumber: 8, lessonType: 'rpg', title: { tr: "Diyalog 2", en: "Dialogue 2", ar: "\u062d\u0648\u0627\u0631 2", fa: "\u06af\u0641\u062a\u06af\u0648 2", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 2" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_hastane_8_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu 2", en: "RPG Scenario 2", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG 2", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG 2", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG 2" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_hastane_9', lessonNumber: 9, lessonType: 'boss_fight', title: { tr: "Patron Sava\u015f\u0131", en: "Boss Fight", ar: "\u0645\u0639\u0631\u0643\u0629 \u0627\u0644\u0632\u0639\u064a\u0645", fa: "\u0645\u0628\u0627\u0631\u0632\u0647 \u0628\u0627 \u0631\u0626\u06cc\u0633", ru: "\u0411\u043e\u0441\u0441 \u0431\u043e\u0439" }, xpReward: 70, coinReward: 35, exercises: [{
      id: 'a2_hastane_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "doktor", translation: { tr: "doktor", en: "doctor", ar: "\u0637\u0628\u064a\u0628", fa: "\u062f\u06a9\u062a\u0631", ru: "\u0432\u0440\u0430\u0447" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "hasta", translation: { tr: "hasta", en: "patient", ar: "\u0645\u0631\u064a\u0636", fa: "\u0628\u06cc\u0645\u0627\u0631", ru: "\u043f\u0430\u0446\u0438\u0435\u043d\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ameliyat", translation: { tr: "ameliyat", en: "surgery", ar: "\u0639\u0645\u0644\u064a\u0629 \u062c\u0631\u0627\u062d\u064a\u0629", fa: "\u062c\u0631\u0627\u062d\u06cc", ru: "\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "tahlil", translation: { tr: "tahlil", en: "test", ar: "\u062a\u062d\u0644\u064a\u0644", fa: "\u0622\u0632\u0645\u0627\u06cc\u0634", ru: "\u0430\u043d\u0430\u043b\u0438\u0437" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_hastane_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["hastay\u0131m", "\u00c7ok"],
      correctOrder: ["\u00c7ok", "hastay\u0131m"],
      translation: { tr: "\u00c7ok hastay\u0131m.", en: "I am very sick.", ar: "\u0623\u0646\u0627 \u0645\u0631\u064a\u0636 \u062c\u062f\u0627.", fa: "\u0645\u0646 \u062e\u06cc\u0644\u06cc \u0628\u06cc\u0645\u0627\u0631 \u0647\u0633\u062a\u0645.", ru: "\u042f \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u0435\u043d." }
    }, {
      id: 'a2_hastane_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["hastay\u0131m", "\u00c7ok"],
      correctOrder: ["\u00c7ok", "hastay\u0131m"],
      translation: { tr: "\u00c7ok hastay\u0131m.", en: "I am very sick.", ar: "\u0623\u0646\u0627 \u0645\u0631\u064a\u0636 \u062c\u062f\u0627.", fa: "\u0645\u0646 \u062e\u06cc\u0644\u06cc \u0628\u06cc\u0645\u0627\u0631 \u0647\u0633\u062a\u0645.", ru: "\u042f \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u0435\u043d." }
    }, {
      id: 'a2_hastane_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bana bir ____ yazar m\u0131s\u0131n\u0131z?",
      correctAnswers: ["re\u00e7ete"],
      wordBank: ["re\u00e7ete", "kitap", "mektup"],
      translation: { tr: "Bana bir re\u00e7ete yazar m\u0131s\u0131n\u0131z?", en: "Can you write me a prescription?", ar: "\u0647\u0644 \u064a\u0645\u0643\u0646\u0643 \u0623\u0646 \u062a\u0643\u062a\u0628 \u0644\u064a \u0648\u0635\u0641\u0629 \u0637\u0628\u064a\u0629\u061f", fa: "\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0631\u0627\u06cc\u0645 \u0646\u0633\u062e\u0647 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\u061f", ru: "\u041d\u0435 \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0432\u044b \u0432\u044b\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u043d\u0435 \u0440\u0435\u0446\u0435\u043f\u0442?" }
    }, {
      id: 'a2_hastane_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bana bir ____ yazar m\u0131s\u0131n\u0131z?",
      correctAnswers: ["re\u00e7ete"],
      wordBank: ["re\u00e7ete", "kitap", "mektup"],
      translation: { tr: "Bana bir re\u00e7ete yazar m\u0131s\u0131n\u0131z?", en: "Can you write me a prescription?", ar: "\u0647\u0644 \u064a\u0645\u0643\u0646\u0643 \u0623\u0646 \u062a\u0643\u062a\u0628 \u0644\u064a \u0648\u0635\u0641\u0629 \u0637\u0628\u064a\u0629\u061f", fa: "\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0631\u0627\u06cc\u0645 \u0646\u0633\u062e\u0647 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\u061f", ru: "\u041d\u0435 \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0432\u044b \u0432\u044b\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u043d\u0435 \u0440\u0435\u0446\u0435\u043f\u0442?" }
    }] }] },{ id: 'a2_ptt', unitNumber: 4, name: { tr: "Posta", en: "Post", ar: "\u0628\u0631\u064a\u062f", fa: "\u067e\u0633\u062a", ru: "\u041f\u043e\u0447\u0442\u0430" }, emoji: '📮', color: 'from-yellow-500 to-amber-600', lessons: [{ id: 'a2_ptt_1', lessonNumber: 1, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 1", en: "Vocab 1", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 1", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 1", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_ptt_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kargo", translation: { tr: "kargo", en: "cargo", ar: "\u0628\u0631\u064a\u062f", fa: "\u067e\u0633\u062a", ru: "\u043f\u043e\u0447\u0442\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "paket", translation: { tr: "paket", en: "package", ar: "\u0637\u0631\u062f", fa: "\u0628\u0633\u062a\u0647", ru: "\u043f\u043e\u0441\u044b\u043b\u043a\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_1_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "g\u00f6nderici", translation: { tr: "g\u00f6nderici", en: "sender", ar: "\u0645\u0631\u0633\u0644", fa: "\u0641\u0631\u0633\u062a\u0646\u062f\u0647", ru: "\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_1_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "al\u0131c\u0131", translation: { tr: "al\u0131c\u0131", en: "receiver", ar: "\u0645\u0633\u062a\u0644\u0645", fa: "\u06af\u06cc\u0631\u0646\u062f\u0647", ru: "\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_1_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "fatura", translation: { tr: "fatura", en: "bill", ar: "\u0641\u0627\u062a\u0648\u0631\u0629", fa: "\u0642\u0628\u0636", ru: "\u0441\u0447\u0435\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_ptt_2', lessonNumber: 2, lessonType: 'practice', title: { tr: "Pratik 1", en: "Practice 1", ar: "\u062a\u062f\u0631\u064a\u0628 1", fa: "\u062a\u0645\u0631\u06cc\u0646 1", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_ptt_2_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "kargo", translation: { tr: "cargo", en: "cargo", ar: "\u0628\u0631\u064a\u062f", fa: "\u067e\u0633\u062a", ru: "\u043f\u043e\u0447\u0442\u0430" } }, { id: 'p2', turkish: "paket", translation: { tr: "package", en: "package", ar: "\u0637\u0631\u062f", fa: "\u0628\u0633\u062a\u0647", ru: "\u043f\u043e\u0441\u044b\u043b\u043a\u0430" } }, { id: 'p3', turkish: "g\u00f6nderici", translation: { tr: "sender", en: "sender", ar: "\u0645\u0631\u0633\u0644", fa: "\u0641\u0631\u0633\u062a\u0646\u062f\u0647", ru: "\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c" } }, { id: 'p4', turkish: "al\u0131c\u0131", translation: { tr: "receiver", en: "receiver", ar: "\u0645\u0633\u062a\u0644\u0645", fa: "\u06af\u06cc\u0631\u0646\u062f\u0647", ru: "\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c" } }, { id: 'p5', turkish: "fatura", translation: { tr: "bill", en: "bill", ar: "\u0641\u0627\u062a\u0648\u0631\u0629", fa: "\u0642\u0628\u0636", ru: "\u0441\u0447\u0435\u0442" } }]
    }] },{ id: 'a2_ptt_3', lessonNumber: 3, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 1", en: "Sentences 1", ar: "\u062c\u0645\u0644 1", fa: "\u062c\u0645\u0644\u0627\u062a 1", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_ptt_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["g\u00f6nderece\u011fim", "Paket"],
      correctOrder: ["Paket", "g\u00f6nderece\u011fim"],
      translation: { tr: "Paket g\u00f6nderece\u011fim.", en: "I will send a package.", ar: "\u0633\u0623\u0631\u0633\u0644 \u0637\u0631\u062f\u0627.", fa: "\u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0641\u0631\u0633\u062a\u0645.", ru: "\u042f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044e \u043f\u043e\u0441\u044b\u043b\u043a\u0443." }
    }, {
      id: 'a2_ptt_3_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["\u00f6deyece\u011fim", "Fatura"],
      correctOrder: ["Fatura", "\u00f6deyece\u011fim"],
      translation: { tr: "Fatura \u00f6deyece\u011fim.", en: "I will pay a bill.", ar: "\u0633\u0623\u062f\u0641\u0639 \u0641\u0627\u062a\u0648\u0631\u0629.", fa: "\u0642\u0628\u0636 \u067e\u0631\u062f\u0627\u062e\u062a \u0645\u06cc\u200c\u06a9\u0646\u0645.", ru: "\u042f \u043e\u043f\u043b\u0430\u0447\u0443 \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_ptt_3_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["kesildi", "Elektrik"],
      correctOrder: ["Elektrik", "kesildi"],
      translation: { tr: "Elektrik kesildi.", en: "Electricity is cut.", ar: "\u0627\u0646\u0642\u0637\u0639\u062a \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621.", fa: "\u0628\u0631\u0642 \u0642\u0637\u0639 \u0634\u062f.", ru: "\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u043b\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e." }
    }, {
      id: 'a2_ptt_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bu ____ yurt d\u0131\u015f\u0131na gidecek.",
      correctAnswers: ["paketi"],
      wordBank: ["paketi", "kargosu", "faturas\u0131"],
      translation: { tr: "Bu paketi yurt d\u0131\u015f\u0131na gidecek.", en: "This package will go abroad.", ar: "\u0647\u0630\u0627 \u0627\u0644\u0637\u0631\u062f \u0633\u064a\u0630\u0647\u0628 \u0625\u0644\u0649 \u0627\u0644\u062e\u0627\u0631\u062c.", fa: "\u0627\u06cc\u0646 \u0628\u0633\u062a\u0647 \u0628\u0647 \u062e\u0627\u0631\u062c \u0627\u0632 \u06a9\u0634\u0648\u0631 \u0645\u06cc\u200c\u0631\u0648\u062f.", ru: "\u042d\u0442\u0430 \u043f\u043e\u0441\u044b\u043b\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0443." }
    }, {
      id: 'a2_ptt_3_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Otomatik ____ talimat\u0131 verdim.",
      correctAnswers: ["\u00f6deme"],
      wordBank: ["\u00f6deme", "alma", "verme"],
      translation: { tr: "Otomatik \u00f6deme talimat\u0131 verdim.", en: "I gave auto-pay instruction.", ar: "\u0623\u0639\u0637\u064a\u062a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u0627\u0644\u062f\u0641\u0639 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a.", fa: "\u062f\u0633\u062a\u0648\u0631 \u067e\u0631\u062f\u0627\u062e\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u062f\u0627\u062f\u0645.", ru: "\u042f \u0434\u0430\u043b \u043f\u043e\u0440\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0430\u0432\u0442\u043e\u043f\u043b\u0430\u0442\u0435\u0436." }
    }] },{ id: 'a2_ptt_4', lessonNumber: 4, lessonType: 'rpg', title: { tr: "Diyalog 1", en: "Dialogue 1", ar: "\u062d\u0648\u0627\u0631 1", fa: "\u06af\u0641\u062a\u06af\u0648 1", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 1" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_ptt_4_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu", en: "RPG Scenario", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_ptt_5', lessonNumber: 5, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 2", en: "Vocab 2", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 2", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 2", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_ptt_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "elektrik", translation: { tr: "elektrik", en: "electricity", ar: "\u0643\u0647\u0631\u0628\u0627\u0621", fa: "\u0628\u0631\u0642", ru: "\u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "su", translation: { tr: "su", en: "water", ar: "\u0645\u0627\u0621", fa: "\u0622\u0628", ru: "\u0432\u043e\u0434\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_5_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "do\u011falgaz", translation: { tr: "do\u011falgaz", en: "gas", ar: "\u063a\u0627\u0632", fa: "\u06af\u0627\u0632", ru: "\u0433\u0430\u0437" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_5_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "abonelik", translation: { tr: "abonelik", en: "subscription", ar: "\u0627\u0634\u062a\u0631\u0627\u0643", fa: "\u0627\u0634\u062a\u0631\u0627\u06a9", ru: "\u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_5_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "iptal", translation: { tr: "iptal", en: "cancellation", ar: "\u0625\u0644\u063a\u0627\u0621", fa: "\u0644\u063a\u0648", ru: "\u043e\u0442\u043c\u0435\u043d\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_ptt_6', lessonNumber: 6, lessonType: 'practice', title: { tr: "Pratik 2", en: "Practice 2", ar: "\u062a\u062f\u0631\u064a\u0628 2", fa: "\u062a\u0645\u0631\u06cc\u0646 2", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_ptt_6_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "elektrik", translation: { tr: "electricity", en: "electricity", ar: "\u0643\u0647\u0631\u0628\u0627\u0621", fa: "\u0628\u0631\u0642", ru: "\u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e" } }, { id: 'p2', turkish: "su", translation: { tr: "water", en: "water", ar: "\u0645\u0627\u0621", fa: "\u0622\u0628", ru: "\u0432\u043e\u0434\u0430" } }, { id: 'p3', turkish: "do\u011falgaz", translation: { tr: "gas", en: "gas", ar: "\u063a\u0627\u0632", fa: "\u06af\u0627\u0632", ru: "\u0433\u0430\u0437" } }, { id: 'p4', turkish: "abonelik", translation: { tr: "subscription", en: "subscription", ar: "\u0627\u0634\u062a\u0631\u0627\u0643", fa: "\u0627\u0634\u062a\u0631\u0627\u06a9", ru: "\u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430" } }, { id: 'p5', turkish: "iptal", translation: { tr: "cancellation", en: "cancellation", ar: "\u0625\u0644\u063a\u0627\u0621", fa: "\u0644\u063a\u0648", ru: "\u043e\u0442\u043c\u0435\u043d\u0430" } }]
    }] },{ id: 'a2_ptt_7', lessonNumber: 7, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 2", en: "Sentences 2", ar: "\u062c\u0645\u0644 2", fa: "\u062c\u0645\u0644\u0627\u062a 2", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_ptt_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["g\u00f6nderece\u011fim", "Paket"],
      correctOrder: ["Paket", "g\u00f6nderece\u011fim"],
      translation: { tr: "Paket g\u00f6nderece\u011fim.", en: "I will send a package.", ar: "\u0633\u0623\u0631\u0633\u0644 \u0637\u0631\u062f\u0627.", fa: "\u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0641\u0631\u0633\u062a\u0645.", ru: "\u042f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044e \u043f\u043e\u0441\u044b\u043b\u043a\u0443." }
    }, {
      id: 'a2_ptt_7_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["\u00f6deyece\u011fim", "Fatura"],
      correctOrder: ["Fatura", "\u00f6deyece\u011fim"],
      translation: { tr: "Fatura \u00f6deyece\u011fim.", en: "I will pay a bill.", ar: "\u0633\u0623\u062f\u0641\u0639 \u0641\u0627\u062a\u0648\u0631\u0629.", fa: "\u0642\u0628\u0636 \u067e\u0631\u062f\u0627\u062e\u062a \u0645\u06cc\u200c\u06a9\u0646\u0645.", ru: "\u042f \u043e\u043f\u043b\u0430\u0447\u0443 \u0441\u0447\u0435\u0442." }
    }, {
      id: 'a2_ptt_7_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["kesildi", "Elektrik"],
      correctOrder: ["Elektrik", "kesildi"],
      translation: { tr: "Elektrik kesildi.", en: "Electricity is cut.", ar: "\u0627\u0646\u0642\u0637\u0639\u062a \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621.", fa: "\u0628\u0631\u0642 \u0642\u0637\u0639 \u0634\u062f.", ru: "\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u043b\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e." }
    }, {
      id: 'a2_ptt_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bu ____ yurt d\u0131\u015f\u0131na gidecek.",
      correctAnswers: ["paketi"],
      wordBank: ["paketi", "kargosu", "faturas\u0131"],
      translation: { tr: "Bu paketi yurt d\u0131\u015f\u0131na gidecek.", en: "This package will go abroad.", ar: "\u0647\u0630\u0627 \u0627\u0644\u0637\u0631\u062f \u0633\u064a\u0630\u0647\u0628 \u0625\u0644\u0649 \u0627\u0644\u062e\u0627\u0631\u062c.", fa: "\u0627\u06cc\u0646 \u0628\u0633\u062a\u0647 \u0628\u0647 \u062e\u0627\u0631\u062c \u0627\u0632 \u06a9\u0634\u0648\u0631 \u0645\u06cc\u200c\u0631\u0648\u062f.", ru: "\u042d\u0442\u0430 \u043f\u043e\u0441\u044b\u043b\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0443." }
    }, {
      id: 'a2_ptt_7_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Otomatik ____ talimat\u0131 verdim.",
      correctAnswers: ["\u00f6deme"],
      wordBank: ["\u00f6deme", "alma", "verme"],
      translation: { tr: "Otomatik \u00f6deme talimat\u0131 verdim.", en: "I gave auto-pay instruction.", ar: "\u0623\u0639\u0637\u064a\u062a \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u0627\u0644\u062f\u0641\u0639 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a.", fa: "\u062f\u0633\u062a\u0648\u0631 \u067e\u0631\u062f\u0627\u062e\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u062f\u0627\u062f\u0645.", ru: "\u042f \u0434\u0430\u043b \u043f\u043e\u0440\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0430\u0432\u0442\u043e\u043f\u043b\u0430\u0442\u0435\u0436." }
    }] },{ id: 'a2_ptt_8', lessonNumber: 8, lessonType: 'rpg', title: { tr: "Diyalog 2", en: "Dialogue 2", ar: "\u062d\u0648\u0627\u0631 2", fa: "\u06af\u0641\u062a\u06af\u0648 2", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 2" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_ptt_8_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu 2", en: "RPG Scenario 2", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG 2", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG 2", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG 2" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_ptt_9', lessonNumber: 9, lessonType: 'boss_fight', title: { tr: "Patron Sava\u015f\u0131", en: "Boss Fight", ar: "\u0645\u0639\u0631\u0643\u0629 \u0627\u0644\u0632\u0639\u064a\u0645", fa: "\u0645\u0628\u0627\u0631\u0632\u0647 \u0628\u0627 \u0631\u0626\u06cc\u0633", ru: "\u0411\u043e\u0441\u0441 \u0431\u043e\u0439" }, xpReward: 70, coinReward: 35, exercises: [{
      id: 'a2_ptt_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kargo", translation: { tr: "kargo", en: "cargo", ar: "\u0628\u0631\u064a\u062f", fa: "\u067e\u0633\u062a", ru: "\u043f\u043e\u0447\u0442\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "paket", translation: { tr: "paket", en: "package", ar: "\u0637\u0631\u062f", fa: "\u0628\u0633\u062a\u0647", ru: "\u043f\u043e\u0441\u044b\u043b\u043a\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "elektrik", translation: { tr: "elektrik", en: "electricity", ar: "\u0643\u0647\u0631\u0628\u0627\u0621", fa: "\u0628\u0631\u0642", ru: "\u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "su", translation: { tr: "su", en: "water", ar: "\u0645\u0627\u0621", fa: "\u0622\u0628", ru: "\u0432\u043e\u0434\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_ptt_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["g\u00f6nderece\u011fim", "Paket"],
      correctOrder: ["Paket", "g\u00f6nderece\u011fim"],
      translation: { tr: "Paket g\u00f6nderece\u011fim.", en: "I will send a package.", ar: "\u0633\u0623\u0631\u0633\u0644 \u0637\u0631\u062f\u0627.", fa: "\u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0641\u0631\u0633\u062a\u0645.", ru: "\u042f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044e \u043f\u043e\u0441\u044b\u043b\u043a\u0443." }
    }, {
      id: 'a2_ptt_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["g\u00f6nderece\u011fim", "Paket"],
      correctOrder: ["Paket", "g\u00f6nderece\u011fim"],
      translation: { tr: "Paket g\u00f6nderece\u011fim.", en: "I will send a package.", ar: "\u0633\u0623\u0631\u0633\u0644 \u0637\u0631\u062f\u0627.", fa: "\u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0641\u0631\u0633\u062a\u0645.", ru: "\u042f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044e \u043f\u043e\u0441\u044b\u043b\u043a\u0443." }
    }, {
      id: 'a2_ptt_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bu ____ yurt d\u0131\u015f\u0131na gidecek.",
      correctAnswers: ["paketi"],
      wordBank: ["paketi", "kargosu", "faturas\u0131"],
      translation: { tr: "Bu paketi yurt d\u0131\u015f\u0131na gidecek.", en: "This package will go abroad.", ar: "\u0647\u0630\u0627 \u0627\u0644\u0637\u0631\u062f \u0633\u064a\u0630\u0647\u0628 \u0625\u0644\u0649 \u0627\u0644\u062e\u0627\u0631\u062c.", fa: "\u0627\u06cc\u0646 \u0628\u0633\u062a\u0647 \u0628\u0647 \u062e\u0627\u0631\u062c \u0627\u0632 \u06a9\u0634\u0648\u0631 \u0645\u06cc\u200c\u0631\u0648\u062f.", ru: "\u042d\u0442\u0430 \u043f\u043e\u0441\u044b\u043b\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0443." }
    }, {
      id: 'a2_ptt_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Bu ____ yurt d\u0131\u015f\u0131na gidecek.",
      correctAnswers: ["paketi"],
      wordBank: ["paketi", "kargosu", "faturas\u0131"],
      translation: { tr: "Bu paketi yurt d\u0131\u015f\u0131na gidecek.", en: "This package will go abroad.", ar: "\u0647\u0630\u0627 \u0627\u0644\u0637\u0631\u062f \u0633\u064a\u0630\u0647\u0628 \u0625\u0644\u0649 \u0627\u0644\u062e\u0627\u0631\u062c.", fa: "\u0627\u06cc\u0646 \u0628\u0633\u062a\u0647 \u0628\u0647 \u062e\u0627\u0631\u062c \u0627\u0632 \u06a9\u0634\u0648\u0631 \u0645\u06cc\u200c\u0631\u0648\u062f.", ru: "\u042d\u0442\u0430 \u043f\u043e\u0441\u044b\u043b\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0443." }
    }] }] },{ id: 'a2_konut', unitNumber: 5, name: { tr: "Konut", en: "Housing", ar: "\u0625\u0633\u0643\u0627\u0646", fa: "\u0645\u0633\u06a9\u0646", ru: "\u0416\u0438\u043b\u044c\u0435" }, emoji: '🏘️', color: 'from-orange-400 to-red-500', lessons: [{ id: 'a2_konut_1', lessonNumber: 1, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 1", en: "Vocab 1", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 1", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 1", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_konut_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ev", translation: { tr: "ev", en: "house", ar: "\u0645\u0646\u0632\u0644", fa: "\u062e\u0627\u0646\u0647", ru: "\u0434\u043e\u043c" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kiral\u0131k", translation: { tr: "kiral\u0131k", en: "for rent", ar: "\u0644\u0644\u0625\u064a\u062c\u0627\u0631", fa: "\u0628\u0631\u0627\u06cc \u0627\u062c\u0627\u0631\u0647", ru: "\u0432 \u0430\u0440\u0435\u043d\u0434\u0443" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_1_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "sat\u0131l\u0131k", translation: { tr: "sat\u0131l\u0131k", en: "for sale", ar: "\u0644\u0644\u0628\u064a\u0639", fa: "\u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634", ru: "\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_1_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "depozito", translation: { tr: "depozito", en: "deposit", ar: "\u0648\u062f\u064a\u0639\u0629", fa: "\u0648\u062f\u06cc\u0639\u0647", ru: "\u0434\u0435\u043f\u043e\u0437\u0438\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_1_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kira", translation: { tr: "kira", en: "rent", ar: "\u0625\u064a\u062c\u0627\u0631", fa: "\u0627\u062c\u0627\u0631\u0647", ru: "\u0430\u0440\u0435\u043d\u0434\u0430" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_konut_2', lessonNumber: 2, lessonType: 'practice', title: { tr: "Pratik 1", en: "Practice 1", ar: "\u062a\u062f\u0631\u064a\u0628 1", fa: "\u062a\u0645\u0631\u06cc\u0646 1", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_konut_2_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "ev", translation: { tr: "house", en: "house", ar: "\u0645\u0646\u0632\u0644", fa: "\u062e\u0627\u0646\u0647", ru: "\u0434\u043e\u043c" } }, { id: 'p2', turkish: "kiral\u0131k", translation: { tr: "for rent", en: "for rent", ar: "\u0644\u0644\u0625\u064a\u062c\u0627\u0631", fa: "\u0628\u0631\u0627\u06cc \u0627\u062c\u0627\u0631\u0647", ru: "\u0432 \u0430\u0440\u0435\u043d\u0434\u0443" } }, { id: 'p3', turkish: "sat\u0131l\u0131k", translation: { tr: "for sale", en: "for sale", ar: "\u0644\u0644\u0628\u064a\u0639", fa: "\u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634", ru: "\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443" } }, { id: 'p4', turkish: "depozito", translation: { tr: "deposit", en: "deposit", ar: "\u0648\u062f\u064a\u0639\u0629", fa: "\u0648\u062f\u06cc\u0639\u0647", ru: "\u0434\u0435\u043f\u043e\u0437\u0438\u0442" } }, { id: 'p5', turkish: "kira", translation: { tr: "rent", en: "rent", ar: "\u0625\u064a\u062c\u0627\u0631", fa: "\u0627\u062c\u0627\u0631\u0647", ru: "\u0430\u0440\u0435\u043d\u0434\u0430" } }]
    }] },{ id: 'a2_konut_3', lessonNumber: 3, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 1", en: "Sentences 1", ar: "\u062c\u0645\u0644 1", fa: "\u062c\u0645\u0644\u0627\u062a 1", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 1" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_konut_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["kadar", "ne", "Kira"],
      correctOrder: ["Kira", "ne", "kadar"],
      translation: { tr: "Kira ne kadar?", en: "How much is rent?", ar: "\u0643\u0645 \u0627\u0644\u0625\u064a\u062c\u0627\u0631\u061f", fa: "\u0627\u062c\u0627\u0631\u0647 \u0686\u0642\u062f\u0631 \u0627\u0633\u062a\u061f", ru: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u0430\u0440\u0435\u043d\u0434\u0430?" }
    }, {
      id: 'a2_konut_3_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["verece\u011fim", "Depozito"],
      correctOrder: ["Depozito", "verece\u011fim"],
      translation: { tr: "Depozito verece\u011fim.", en: "I will give a deposit.", ar: "\u0633\u0623\u0639\u0637\u064a \u0648\u062f\u064a\u0639\u0629.", fa: "\u0648\u062f\u06cc\u0639\u0647 \u0645\u06cc\u200c\u062f\u0647\u0645.", ru: "\u042f \u0434\u0430\u043c \u0434\u0435\u043f\u043e\u0437\u0438\u0442." }
    }, {
      id: 'a2_konut_3_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["bozuk", "Asans\u00f6r"],
      correctOrder: ["Asans\u00f6r", "bozuk"],
      translation: { tr: "Asans\u00f6r bozuk.", en: "The elevator is broken.", ar: "\u0627\u0644\u0645\u0635\u0639\u062f \u0645\u0639\u0637\u0644.", fa: "\u0622\u0633\u0627\u0646\u0633\u0648\u0631 \u062e\u0631\u0627\u0628 \u0627\u0633\u062a.", ru: "\u041b\u0438\u0444\u0442 \u0441\u043b\u043e\u043c\u0430\u043d." }
    }, {
      id: 'a2_konut_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Evimiz ____.",
      correctAnswers: ["kiral\u0131k"],
      wordBank: ["kiral\u0131k", "sat\u0131l\u0131k", "b\u00fcy\u00fck"],
      translation: { tr: "Evimiz kiral\u0131k.", en: "Our house is for rent.", ar: "\u0645\u0646\u0632\u0644\u0646\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631.", fa: "\u062e\u0627\u0646\u0647 \u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u062c\u0627\u0631\u0647 \u0627\u0633\u062a.", ru: "\u041d\u0430\u0448 \u0434\u043e\u043c \u0432 \u0430\u0440\u0435\u043d\u0434\u0443." }
    }, {
      id: 'a2_konut_3_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Ayl\u0131k ____ \u00e7ok y\u00fcksek.",
      correctAnswers: ["aidat"],
      wordBank: ["aidat", "para", "fatura"],
      translation: { tr: "Ayl\u0131k aidat \u00e7ok y\u00fcksek.", en: "Monthly dues are very high.", ar: "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0634\u0647\u0631\u064a\u0629 \u0639\u0627\u0644\u064a\u0629 \u062c\u062f\u0627.", fa: "\u0634\u0627\u0631\u0698 \u0645\u0627\u0647\u0627\u0646\u0647 \u062e\u06cc\u0644\u06cc \u0632\u06cc\u0627\u062f \u0627\u0633\u062a.", ru: "\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0432\u0437\u043d\u043e\u0441\u044b \u043e\u0447\u0435\u043d\u044c \u0432\u044b\u0441\u043e\u043a\u0438\u0435." }
    }] },{ id: 'a2_konut_4', lessonNumber: 4, lessonType: 'rpg', title: { tr: "Diyalog 1", en: "Dialogue 1", ar: "\u062d\u0648\u0627\u0631 1", fa: "\u06af\u0641\u062a\u06af\u0648 1", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 1" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_konut_4_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu", en: "RPG Scenario", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_konut_5', lessonNumber: 5, lessonType: 'vocabulary', title: { tr: "Kelime: B\u00f6l\u00fcm 2", en: "Vocab 2", ar: "\u0645\u0641\u0631\u062f\u0627\u062a 2", fa: "\u0648\u0627\u0698\u06af\u0627\u0646 2", ru: "\u0421\u043b\u043e\u0432\u0430\u0440\u044c 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_konut_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kom\u015fu", translation: { tr: "kom\u015fu", en: "neighbor", ar: "\u062c\u0627\u0631", fa: "\u0647\u0645\u0633\u0627\u06cc\u0647", ru: "\u0441\u043e\u0441\u0435\u0434" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "aidat", translation: { tr: "aidat", en: "dues", ar: "\u0631\u0633\u0648\u0645", fa: "\u0634\u0627\u0631\u0698", ru: "\u0432\u0437\u043d\u043e\u0441\u044b" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_5_2',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "asans\u00f6r", translation: { tr: "asans\u00f6r", en: "elevator", ar: "\u0645\u0635\u0639\u062f", fa: "\u0622\u0633\u0627\u0646\u0633\u0648\u0631", ru: "\u043b\u0438\u0444\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_5_3',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "tadilat", translation: { tr: "tadilat", en: "renovation", ar: "\u062a\u062c\u062f\u064a\u062f", fa: "\u0628\u0627\u0632\u0633\u0627\u0632\u06cc", ru: "\u0440\u0435\u043c\u043e\u043d\u0442" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_5_4',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kap\u0131c\u0131", translation: { tr: "kap\u0131c\u0131", en: "doorman", ar: "\u0628\u0648\u0627\u0628", fa: "\u0633\u0631\u0627\u06cc\u062f\u0627\u0631", ru: "\u043a\u043e\u043d\u0441\u044c\u0435\u0440\u0436" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }] },{ id: 'a2_konut_6', lessonNumber: 6, lessonType: 'practice', title: { tr: "Pratik 2", en: "Practice 2", ar: "\u062a\u062f\u0631\u064a\u0628 2", fa: "\u062a\u0645\u0631\u06cc\u0646 2", ru: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_konut_6_1',
      type: 'drag_drop',
      prompt: { tr: "E\u015fle\u015ftirin", en: "Match", ar: "\u062a\u0637\u0627\u0628\u0642", fa: "\u062a\u0637\u0627\u0628\u0642", ru: "\u0421\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435" },
      pairs: [{ id: 'p1', turkish: "kom\u015fu", translation: { tr: "neighbor", en: "neighbor", ar: "\u062c\u0627\u0631", fa: "\u0647\u0645\u0633\u0627\u06cc\u0647", ru: "\u0441\u043e\u0441\u0435\u0434" } }, { id: 'p2', turkish: "aidat", translation: { tr: "dues", en: "dues", ar: "\u0631\u0633\u0648\u0645", fa: "\u0634\u0627\u0631\u0698", ru: "\u0432\u0437\u043d\u043e\u0441\u044b" } }, { id: 'p3', turkish: "asans\u00f6r", translation: { tr: "elevator", en: "elevator", ar: "\u0645\u0635\u0639\u062f", fa: "\u0622\u0633\u0627\u0646\u0633\u0648\u0631", ru: "\u043b\u0438\u0444\u0442" } }, { id: 'p4', turkish: "tadilat", translation: { tr: "renovation", en: "renovation", ar: "\u062a\u062c\u062f\u064a\u062f", fa: "\u0628\u0627\u0632\u0633\u0627\u0632\u06cc", ru: "\u0440\u0435\u043c\u043e\u043d\u0442" } }, { id: 'p5', turkish: "kap\u0131c\u0131", translation: { tr: "doorman", en: "doorman", ar: "\u0628\u0648\u0627\u0628", fa: "\u0633\u0631\u0627\u06cc\u062f\u0627\u0631", ru: "\u043a\u043e\u043d\u0441\u044c\u0435\u0440\u0436" } }]
    }] },{ id: 'a2_konut_7', lessonNumber: 7, lessonType: 'sentence_building', title: { tr: "C\u00fcmle Kurma 2", en: "Sentences 2", ar: "\u062c\u0645\u0644 2", fa: "\u062c\u0645\u0644\u0627\u062a 2", ru: "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f 2" }, xpReward: 20, coinReward: 10, exercises: [{
      id: 'a2_konut_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["kadar", "ne", "Kira"],
      correctOrder: ["Kira", "ne", "kadar"],
      translation: { tr: "Kira ne kadar?", en: "How much is rent?", ar: "\u0643\u0645 \u0627\u0644\u0625\u064a\u062c\u0627\u0631\u061f", fa: "\u0627\u062c\u0627\u0631\u0647 \u0686\u0642\u062f\u0631 \u0627\u0633\u062a\u061f", ru: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u0430\u0440\u0435\u043d\u0434\u0430?" }
    }, {
      id: 'a2_konut_7_2',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["verece\u011fim", "Depozito"],
      correctOrder: ["Depozito", "verece\u011fim"],
      translation: { tr: "Depozito verece\u011fim.", en: "I will give a deposit.", ar: "\u0633\u0623\u0639\u0637\u064a \u0648\u062f\u064a\u0639\u0629.", fa: "\u0648\u062f\u06cc\u0639\u0647 \u0645\u06cc\u200c\u062f\u0647\u0645.", ru: "\u042f \u0434\u0430\u043c \u0434\u0435\u043f\u043e\u0437\u0438\u0442." }
    }, {
      id: 'a2_konut_7_3',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["bozuk", "Asans\u00f6r"],
      correctOrder: ["Asans\u00f6r", "bozuk"],
      translation: { tr: "Asans\u00f6r bozuk.", en: "The elevator is broken.", ar: "\u0627\u0644\u0645\u0635\u0639\u062f \u0645\u0639\u0637\u0644.", fa: "\u0622\u0633\u0627\u0646\u0633\u0648\u0631 \u062e\u0631\u0627\u0628 \u0627\u0633\u062a.", ru: "\u041b\u0438\u0444\u0442 \u0441\u043b\u043e\u043c\u0430\u043d." }
    }, {
      id: 'a2_konut_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Evimiz ____.",
      correctAnswers: ["kiral\u0131k"],
      wordBank: ["kiral\u0131k", "sat\u0131l\u0131k", "b\u00fcy\u00fck"],
      translation: { tr: "Evimiz kiral\u0131k.", en: "Our house is for rent.", ar: "\u0645\u0646\u0632\u0644\u0646\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631.", fa: "\u062e\u0627\u0646\u0647 \u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u062c\u0627\u0631\u0647 \u0627\u0633\u062a.", ru: "\u041d\u0430\u0448 \u0434\u043e\u043c \u0432 \u0430\u0440\u0435\u043d\u0434\u0443." }
    }, {
      id: 'a2_konut_7_5',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Ayl\u0131k ____ \u00e7ok y\u00fcksek.",
      correctAnswers: ["aidat"],
      wordBank: ["aidat", "para", "fatura"],
      translation: { tr: "Ayl\u0131k aidat \u00e7ok y\u00fcksek.", en: "Monthly dues are very high.", ar: "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0634\u0647\u0631\u064a\u0629 \u0639\u0627\u0644\u064a\u0629 \u062c\u062f\u0627.", fa: "\u0634\u0627\u0631\u0698 \u0645\u0627\u0647\u0627\u0646\u0647 \u062e\u06cc\u0644\u06cc \u0632\u06cc\u0627\u062f \u0627\u0633\u062a.", ru: "\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0432\u0437\u043d\u043e\u0441\u044b \u043e\u0447\u0435\u043d\u044c \u0432\u044b\u0441\u043e\u043a\u0438\u0435." }
    }] },{ id: 'a2_konut_8', lessonNumber: 8, lessonType: 'rpg', title: { tr: "Diyalog 2", en: "Dialogue 2", ar: "\u062d\u0648\u0627\u0631 2", fa: "\u06af\u0641\u062a\u06af\u0648 2", ru: "\u0414\u0438\u0430\u043b\u043e\u0433 2" }, xpReward: 35, coinReward: 15, exercises: [{
      id: 'a2_konut_8_1',
      type: 'rpg_dialogue',
      scenario: { tr: "RPG Senaryosu 2", en: "RPG Scenario 2", ar: "\u0633\u064a\u0646\u0627\u0631\u064a\u0648 RPG 2", fa: "\u0633\u0646\u0627\u0631\u06cc\u0648 RPG 2", ru: "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 RPG 2" },
      scenarioEmoji: '🗣️',
      startNodeId: 'n1',
      nodes: [
        {
          nodeId: 'n1', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "Merhaba, size nas\u0131l yard\u0131mc\u0131 olabilirim?", en: "Hello, how can I help you?", ar: "\u0645\u0631\u062d\u0628\u0627\u060c \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0645\u0633\u0627\u0639\u062f\u062a\u0643\u061f", fa: "\u0633\u0644\u0627\u0645\u060c \u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0645 \u06a9\u0645\u06a9 \u06a9\u0646\u0645\u061f", ru: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0433\u0443 \u043f\u043e\u043c\u043e\u0447\u044c?" },
          options: [
            { id: 'o1', turkish: 'Evet, lütfen.', hint: { tr: "Yes, please.", en: "Yes, please.", ar: "\u0646\u0639\u0645 \u0645\u0646 \u0641\u0636\u0644\u0643.", fa: "\u0628\u0644\u0647 \u0644\u0637\u0641\u0627.", ru: "\u0414\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430." }, isCorrect: true, deductsHeart: false, responseTone: 'success', npcResponse: { tr: "Peki, i\u015fleminizi yap\u0131yorum.", en: "Okay, processing.", ar: "\u062d\u0633\u0646\u0627\u060c \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0641\u064a\u0630.", fa: "\u0628\u0627\u0634\u0647\u060c \u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645.", ru: "\u0425\u043e\u0440\u043e\u0448\u043e, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e." }, nextNodeId: 'end' }
          ]
        },
        {
          nodeId: 'end', npcName: 'Görevli', npcEmoji: '👤',
          npcText: { tr: "\u0130yi g\u00fcnler.", en: "Have a good day.", ar: "\u064a\u0648\u0645 \u0633\u0639\u064a\u062f.", fa: "\u0631\u0648\u0632 \u0628\u062e\u06cc\u0631.", ru: "\u0425\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u0434\u043d\u044f." },
          options: [], isFinal: true
        }
      ]
    }] },{ id: 'a2_konut_9', lessonNumber: 9, lessonType: 'boss_fight', title: { tr: "Patron Sava\u015f\u0131", en: "Boss Fight", ar: "\u0645\u0639\u0631\u0643\u0629 \u0627\u0644\u0632\u0639\u064a\u0645", fa: "\u0645\u0628\u0627\u0631\u0632\u0647 \u0628\u0627 \u0631\u0626\u06cc\u0633", ru: "\u0411\u043e\u0441\u0441 \u0431\u043e\u0439" }, xpReward: 70, coinReward: 35, exercises: [{
      id: 'a2_konut_1_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "ev", translation: { tr: "ev", en: "house", ar: "\u0645\u0646\u0632\u0644", fa: "\u062e\u0627\u0646\u0647", ru: "\u0434\u043e\u043c" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_1_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kiral\u0131k", translation: { tr: "kiral\u0131k", en: "for rent", ar: "\u0644\u0644\u0625\u064a\u062c\u0627\u0631", fa: "\u0628\u0631\u0627\u06cc \u0627\u062c\u0627\u0631\u0647", ru: "\u0432 \u0430\u0440\u0435\u043d\u0434\u0443" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_5_0',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "kom\u015fu", translation: { tr: "kom\u015fu", en: "neighbor", ar: "\u062c\u0627\u0631", fa: "\u0647\u0645\u0633\u0627\u06cc\u0647", ru: "\u0441\u043e\u0441\u0435\u0434" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_5_1',
      type: 'multiple_choice',
      prompt: { tr: "Bu kelimenin anlam\u0131 nedir?", en: "What does this mean?", ar: "\u0645\u0627\u0630\u0627 \u064a\u0639\u0646\u064a \u0647\u0630\u0627\u061f", fa: "\u0627\u06cc\u0646 \u0628\u0647 \u0686\u0647 \u0645\u0639\u0646\u0627\u0633\u062a\u061f", ru: "\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442?" },
      options: [
        { id: 'o1', turkish: "aidat", translation: { tr: "aidat", en: "dues", ar: "\u0631\u0633\u0648\u0645", fa: "\u0634\u0627\u0631\u0698", ru: "\u0432\u0437\u043d\u043e\u0441\u044b" }, isCorrect: true },
        { id: 'o2', turkish: 'yanlış', translation: { tr: "yanl\u0131\u015f", en: "wrong", ar: "\u062e\u0627\u0637\u0626", fa: "\u0627\u0634\u062a\u0628\u0627\u0647", ru: "\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e" }, isCorrect: false },
        { id: 'o3', turkish: 'hata', translation: { tr: "hata", en: "error", ar: "\u062e\u0637\u0623", fa: "\u062e\u0637\u0627", ru: "\u043e\u0448\u0438\u0431\u043a\u0430" }, isCorrect: false }
      ]
    }, {
      id: 'a2_konut_3_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["kadar", "ne", "Kira"],
      correctOrder: ["Kira", "ne", "kadar"],
      translation: { tr: "Kira ne kadar?", en: "How much is rent?", ar: "\u0643\u0645 \u0627\u0644\u0625\u064a\u062c\u0627\u0631\u061f", fa: "\u0627\u062c\u0627\u0631\u0647 \u0686\u0642\u062f\u0631 \u0627\u0633\u062a\u061f", ru: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u0430\u0440\u0435\u043d\u0434\u0430?" }
    }, {
      id: 'a2_konut_7_1',
      type: 'word_order',
      prompt: { tr: "C\u00fcmleyi kurun", en: "Build the sentence", ar: "\u0642\u0645 \u0628\u0628\u0646\u0627\u0621 \u0627\u0644\u062c\u0645\u0644\u0629", fa: "\u062c\u0645\u0644\u0647 \u0628\u0633\u0627\u0632\u06cc\u062f", ru: "\u041f\u043e\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435" },
      scrambledWords: ["kadar", "ne", "Kira"],
      correctOrder: ["Kira", "ne", "kadar"],
      translation: { tr: "Kira ne kadar?", en: "How much is rent?", ar: "\u0643\u0645 \u0627\u0644\u0625\u064a\u062c\u0627\u0631\u061f", fa: "\u0627\u062c\u0627\u0631\u0647 \u0686\u0642\u062f\u0631 \u0627\u0633\u062a\u061f", ru: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u0430\u0440\u0435\u043d\u0434\u0430?" }
    }, {
      id: 'a2_konut_3_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Evimiz ____.",
      correctAnswers: ["kiral\u0131k"],
      wordBank: ["kiral\u0131k", "sat\u0131l\u0131k", "b\u00fcy\u00fck"],
      translation: { tr: "Evimiz kiral\u0131k.", en: "Our house is for rent.", ar: "\u0645\u0646\u0632\u0644\u0646\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631.", fa: "\u062e\u0627\u0646\u0647 \u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u062c\u0627\u0631\u0647 \u0627\u0633\u062a.", ru: "\u041d\u0430\u0448 \u0434\u043e\u043c \u0432 \u0430\u0440\u0435\u043d\u0434\u0443." }
    }, {
      id: 'a2_konut_7_4',
      type: 'fill_in_the_blank',
      prompt: { tr: "Bo\u015flu\u011fu doldurun", en: "Fill in the blank", ar: "\u0627\u0645\u0644\u0623 \u0627\u0644\u0641\u0631\u0627\u063a", fa: "\u062c\u0627\u06cc \u062e\u0627\u0644\u06cc \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f", ru: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a" },
      sentenceTemplate: "Evimiz ____.",
      correctAnswers: ["kiral\u0131k"],
      wordBank: ["kiral\u0131k", "sat\u0131l\u0131k", "b\u00fcy\u00fck"],
      translation: { tr: "Evimiz kiral\u0131k.", en: "Our house is for rent.", ar: "\u0645\u0646\u0632\u0644\u0646\u0627 \u0644\u0644\u0625\u064a\u062c\u0627\u0631.", fa: "\u062e\u0627\u0646\u0647 \u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u062c\u0627\u0631\u0647 \u0627\u0633\u062a.", ru: "\u041d\u0430\u0448 \u0434\u043e\u043c \u0432 \u0430\u0440\u0435\u043d\u0434\u0443." }
    }] }] }]
};
