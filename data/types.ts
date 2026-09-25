// ============================================================
// Rotalingo — Core Type Definitions (v2 — schema-aligned)
// Uses the actual field names produced by curriculum writers.
// ============================================================

// ── i18n text object ─────────────────────────────────────────
export interface TText {
  tr: string; // Turkish — the language being learned
  en: string; // English UI translation
  ar: string; // Arabic UI translation
  fa: string; // Persian UI translation
  ru: string; // Russian UI translation
}

// ── Helper: get text in user's locale ───────────────────────
export function tlocale(text: TText | Record<string, string>, locale: string): string {
  return (text as Record<string, string>)[locale] ?? (text as Record<string, string>)['en'] ?? '';
}

// ── Exercise types ────────────────────────────────────────────
export type ExerciseType =
  | 'multiple_choice'
  | 'image_match'
  | 'drag_drop'
  | 'drag_and_drop'      // alias
  | 'word_order'
  | 'fill_in_the_blank'
  | 'fill_in_blank'        // alias produced by subagents
  | 'rpg_dialogue'
  | 'rpg'                  // alias produced by subagents
  | 'rpg_typing';

// ── Multiple Choice ───────────────────────────────────────────
// MCOption accepts both `turkish` (canonical) and `text` (subagent alias)
export interface MCOption extends Partial<TText> {
  id?: string;             // Subagents occasionally omit id
  turkish?: string;
  tr?: string;             // Subagent alias
  en?: string;             // Subagent alias
  ar?: string;             // Subagent alias
  fa?: string;             // Subagent alias
  ru?: string;             // Subagent alias
  text?: TText | string;   // Subagents used text: TText or text: string
  translation?: TText;
  isCorrect?: boolean;     // Subagents sometimes omit this
  emoji?: string;
}

export interface MCExercise {
  id: string;
  type: 'multiple_choice' | 'image_match';
  prompt?: TText;          // Canonical field
  question?: TText | string; // Subagent alias (often TText)
  targetTurkish?: string;
  targetEmoji?: string;
  options: MCOption[];
  correctAnswerIndex?: number; // Subagent alias
  hint?: TText;
}

// ── Drag & Drop ───────────────────────────────────────────────
export interface DragDropPair {
  id?: string;
  turkish?: string;   // Canonical
  tr?: string;        // Subagent alias
  word?: string | TText; // Subagent alias
  translation?: TText | Omit<TText, 'tr'>; // Some subagents omitted 'tr' from translation
  target?: TText | string; // Subagent alias
  emoji?: string;
  source?: string;    // Alias used by some
}

export interface DragDropExercise {
  id: string;
  type: 'drag_drop' | 'drag_and_drop';
  prompt?: TText;
  question?: TText;
  pairs: DragDropPair[];
}

// ── Word Order ────────────────────────────────────────────────
export type WordToken = string | { id?: string; text: string };

export interface WordOrderExercise {
  id: string;
  type: 'word_order';
  prompt?: TText;
  question?: TText;
  // Canonical fields
  scrambledWords?: string[];
  correctOrder?: string[];
  translation?: TText | string;
  // Subagent aliases
  sentence?: TText | string;   // Contains the full sentence
  words?: WordToken[]; // Scrambled word tokens
}

// ── Fill in the Blank ─────────────────────────────────────────
export interface BlankOption {
  id?: string;
  answer: string;
  options?: string[];
}

export interface FIBExercise {
  id: string;
  type: 'fill_in_the_blank' | 'fill_in_blank';
  prompt?: TText;
  question?: TText;
  // Canonical fields
  sentenceTemplate?: string;
  correctAnswers?: string[];
  wordBank?: string[];
  translation?: TText | string;
  hint?: TText;
  // Subagent aliases
  sentence?: TText | string;
  textParts?: string[]; // Subagent alias
  missingWord?: string; // Subagent alias
  options?: string[];   // Subagent alias
  blank?: BlankOption;
}

// ── RPG Dialogue ──────────────────────────────────────────────
export type RPGResponseTone = 'success' | 'alternative' | 'negative';

export interface RPGOption {
  id?: string;
  turkish?: string;
  text?: TText | string;  // Subagent alias
  hint?: TText;
  isCorrect: boolean;
  deductsHeart?: boolean;
  responseTone?: RPGResponseTone;
  npcResponse?: TText | string;
  response?: TText;       // Subagent alias
  nextNodeId?: string;
  next?: string;          // Subagent alias
}

export interface RPGNode {
  nodeId?: string;
  id?: string;            // Subagent alias
  npcName?: string;
  name?: string;          // Subagent alias
  npcEmoji?: string;
  emoji?: string;         // Subagent alias
  npcText?: TText;
  text?: TText;           // Subagent alias
  options: RPGOption[];
  isFinal?: boolean;
}

export interface RPGExercise {
  id: string;
  type: 'rpg_dialogue' | 'rpg';
  scenario?: TText;
  scenarioEmoji?: string;
  nodes: RPGNode[];
  startNodeId?: string;
  startNode?: string;     // Subagent alias
}

// ── RPG Typing (A2 İleri only) ────────────────────────────────
export interface TypingMatch {
  keywords: string[];
  responseTone: RPGResponseTone;
  npcResponse: TText;
  nextNodeId?: string;
}

export interface RPGTypingNode {
  nodeId?: string;
  id?: string;
  npcName?: string;
  name?: string;
  npcEmoji?: string;
  emoji?: string;
  npcText?: TText;
  text?: TText;
  matches: TypingMatch[];
  fallbackResponse: TText;
  isFinal?: boolean;
}

export interface RPGTypingExercise {
  id: string;
  type: 'rpg_typing';
  scenario?: TText;
  scenarioEmoji?: string;
  nodes: RPGTypingNode[];
  startNodeId?: string;
}

// ── Union ─────────────────────────────────────────────────────
export type Exercise =
  | MCExercise
  | DragDropExercise
  | WordOrderExercise
  | FIBExercise
  | RPGExercise
  | RPGTypingExercise;

// ── Lesson ────────────────────────────────────────────────────
export type LessonType =
  | 'vocabulary'
  | 'practice'
  | 'sentence_building'
  | 'rpg'
  | 'boss_fight';

export interface Lesson {
  id: string;
  lessonNumber?: number;
  type?: string;          // Subagent used 'type' instead of 'lessonType'
  lessonType?: LessonType;
  title?: TText | string;
  name?: TText | string;  // Subagent alias
  xpReward?: number;
  xp?: number;            // Subagent alias
  coinReward?: number;
  coins?: number;         // Subagent alias
  exercises: Exercise[];
}

// ── Guidebook ───────────────────────────────────────────────────
export interface UnitGuidebook {
  title: TText;
  description: TText;
  vocabulary: { word: string; translation: TText }[];
  keyPhrases: { phrase: string; translation: TText }[];
  grammarNotes: {
    title: TText;
    explanation: TText;
    examples: { tr: string; translation: TText }[];
  }[];
}

// ── Unit ──────────────────────────────────────────────────────
export interface Unit {
  id: string;
  unitNumber?: number;
  order?: number;         // Subagent alias
  name?: TText | string;
  title?: TText | string;          // Subagent alias
  description?: TText | string;    // Subagent alias
  emoji: string;
  color?: string;
  themeColor?: string;    // Subagent alias
  guidebook?: UnitGuidebook;
  lessons: Lesson[];
}

// ── Level ─────────────────────────────────────────────────────
export type LevelCode = 'A1' | 'A1 İleri' | 'A2' | 'A2 İleri';

export interface Level {
  id: string;
  number?: number;        // Subagent alias
  order?: number;         // Subagent alias
  code?: LevelCode;
  level?: string;         // Subagent alias
  name?: TText | string;
  title?: TText | string; // Subagent alias
  description?: TText | string; // Subagent alias
  units: Unit[];
}

// ── Accessor helpers (handle field name aliases) ──────────────

/** Get display text from a node's npcText field (either npcText or text) */
export function getNodeText(node: RPGNode | RPGTypingNode): TText {
  return (node.npcText ?? node.text ?? { tr: '', en: '', ar: '', fa: '', ru: '' }) as TText;
}

/** Get node ID (either nodeId or id) */
export function getNodeId(node: RPGNode | RPGTypingNode): string {
  return node.nodeId ?? node.id ?? '';
}

/** Get NPC name (either npcName or name) */
export function getNodeName(node: RPGNode | RPGTypingNode): string {
  return node.npcName ?? node.name ?? 'NPC';
}

/** Get NPC emoji (either npcEmoji or emoji) */
export function getNodeEmoji(node: RPGNode | RPGTypingNode): string {
  return node.npcEmoji ?? node.emoji ?? '🗣️';
}

/** Get the primary display text from an MCOption */
export function getMCOptionPrimary(opt: MCOption, locale: string): string {
  if (opt.turkish) return opt.turkish;
  if (opt.tr) return opt.tr;
  if (opt.text) {
    if (typeof opt.text === 'string') return opt.text;
    return tlocale(opt.text, locale);
  }
  return '';
}

/** Get the translation hint from an MCOption */
export function getMCOptionTranslation(opt: MCOption, locale: string): string | undefined {
  if (opt.translation) return tlocale(opt.translation, locale);
  if (opt.text && typeof opt.text !== 'string') {
    const t = tlocale(opt.text, locale);
    const tr = (opt.text as TText).tr ?? '';
    return t !== tr ? t : undefined;
  }
  return undefined;
}

/** Get exercise prompt in locale */
export function getExercisePrompt(ex: Exercise, locale: string): string {
  const e = ex as unknown as Record<string, unknown>;
  const prompt = (e['prompt'] ?? e['question']) as TText | string | undefined;
  if (!prompt) return '';
  if (typeof prompt === 'string') return prompt;
  return tlocale(prompt, locale);
}

/** Get the turkish text of a DragDropPair */
export function getPairTurkish(pair: DragDropPair): string {
  if (pair.turkish) return pair.turkish;
  if (pair.tr) return pair.tr;
  if (pair.source) return pair.source;
  if (typeof pair.word === 'string') return pair.word;
  if (pair.word && typeof pair.word === 'object' && 'tr' in pair.word) return pair.word.tr;
  return '';
}

/** Get the translation of a DragDropPair */
export function getPairTranslation(pair: DragDropPair, locale: string): string {
  if (pair.target) {
    return typeof pair.target === 'string' ? pair.target : tlocale(pair.target, locale);
  }
  if (!pair.translation) {
    if (pair.word && typeof pair.word === 'object') return tlocale(pair.word, locale);
    return '';
  }
  const t = pair.translation as Record<string, string>;
  // Translation may be missing 'tr' field
  if (locale === 'tr') return getPairTurkish(pair);
  return t[locale] ?? t['en'] ?? '';
}

/** Get scrambled words from a WordOrderExercise */
export function getWordOrderWords(ex: WordOrderExercise): string[] {
  if (ex.scrambledWords) return ex.scrambledWords;
  if (ex.words) return ex.words.map((w) => typeof w === 'string' ? w : w.text);
  // Fallback: extract from sentence and shuffle
  const sentence = typeof ex.sentence === 'string' ? ex.sentence : (ex.sentence?.tr ?? '');
  return sentence.split(' ').sort(() => Math.random() - 0.5);
}

/** Get correct order from a WordOrderExercise */
export function getWordOrderCorrect(ex: WordOrderExercise): string[] {
  if (ex.correctOrder) return ex.correctOrder;
  if (ex.words) return ex.words.map((w) => typeof w === 'string' ? w : w.text);
  const sentence = typeof ex.sentence === 'string' ? ex.sentence : (ex.sentence?.tr ?? '');
  return sentence.split(' ');
}

/** Get sentence translation for WordOrder */
export function getWordOrderTranslation(ex: WordOrderExercise, locale: string): string {
  if (ex.translation) {
    return typeof ex.translation === 'string' ? ex.translation : tlocale(ex.translation, locale);
  }
  if (ex.sentence) {
    return typeof ex.sentence === 'string' ? ex.sentence : tlocale(ex.sentence, locale);
  }
  return '';
}

/** Get sentence template for FIB */
export function getFIBTemplate(ex: FIBExercise): string {
  if (ex.sentenceTemplate) return ex.sentenceTemplate;
  if (ex.textParts && ex.textParts.length >= 2) {
    return ex.textParts.join('____');
  }
  const tr = typeof ex.sentence === 'string' ? ex.sentence : (ex.sentence?.tr ?? '');
  if (tr) {
    const answer = ex.blank?.answer ?? ex.correctAnswers?.[0] ?? ex.missingWord ?? '';
    return tr.replace(answer, '____');
  }
  return '';
}

/** Get correct answers for FIB */
export function getFIBAnswers(ex: FIBExercise): string[] {
  if (ex.correctAnswers) return ex.correctAnswers;
  if (ex.blank?.answer) return [ex.blank.answer];
  if (ex.missingWord) return [ex.missingWord];
  return [];
}

/** Get word bank for FIB */
export function getFIBWordBank(ex: FIBExercise): string[] {
  if (ex.wordBank) return ex.wordBank;
  if (ex.blank?.options) return ex.blank.options;
  return [];
}

/** Get FIB translation */
export function getFIBTranslation(ex: FIBExercise, locale: string): string {
  if (ex.translation) {
    return typeof ex.translation === 'string' ? ex.translation : tlocale(ex.translation, locale);
  }
  if (ex.sentence) {
    return typeof ex.sentence === 'string' ? ex.sentence : tlocale(ex.sentence, locale);
  }
  return '';
}

/** Get RPG scenario text */
export function getRPGScenario(ex: RPGExercise | RPGTypingExercise, locale: string): string {
  if (ex.scenario) return tlocale(ex.scenario, locale);
  return '';
}

/** Get RPG start node ID */
export function getRPGStartNodeId(ex: RPGExercise | RPGTypingExercise): string {
  return ex.startNodeId ?? (ex as { startNode?: string }).startNode ?? ex.nodes[0]?.nodeId ?? ex.nodes[0]?.id ?? 'node_1';
}

/** Get lesson XP reward */
export function getLessonXP(lesson: Lesson): number {
  return lesson.xpReward ?? lesson.xp ?? 15;
}

/** Get lesson coin reward */
export function getLessonCoins(lesson: Lesson): number {
  return lesson.coinReward ?? lesson.coins ?? 8;
}

// ── Progress helpers ──────────────────────────────────────────
export function isLessonUnlocked(
  lessonId: string,
  unit: Unit,
  completedLessons: Set<string>
): boolean {
  const idx = unit.lessons.findIndex((l) => l.id === lessonId);
  if (idx === 0) return true;
  const prev = unit.lessons[idx - 1];
  return completedLessons.has(prev.id);
}

export function isUnitUnlocked(
  unit: Unit,
  level: Level,
  completedLessons: Set<string>
): boolean {
  const idx = level.units.findIndex((u) => u.id === unit.id);
  if (idx === 0) return true;
  const prevUnit = level.units[idx - 1];
  return prevUnit.lessons.every((l) => completedLessons.has(l.id));
}

export function isLevelUnlocked(
  level: Level,
  curriculum: Level[],
  completedLessons: Set<string>
): boolean {
  const idx = curriculum.findIndex((l) => l.id === level.id);
  if (idx === 0) return true;
  const prevLevel = curriculum[idx - 1];
  return prevLevel.units.every((u) =>
    u.lessons.every((l) => completedLessons.has(l.id))
  );
}

/** Fisher-Yates shuffle — pure, returns new array */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
