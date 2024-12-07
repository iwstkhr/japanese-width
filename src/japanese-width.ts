/** Kana Map whose keys are full-width  */
export const kanaMapFullToHalf = new Map([
  ['ガ', 'ｶﾞ'],
  ['ギ', 'ｷﾞ'],
  ['グ', 'ｸﾞ'],
  ['ゲ', 'ｹﾞ'],
  ['ゴ', 'ｺﾞ'],
  ['ザ', 'ｻﾞ'],
  ['ジ', 'ｼﾞ'],
  ['ズ', 'ｽﾞ'],
  ['ゼ', 'ｾﾞ'],
  ['ゾ', 'ｿﾞ'],
  ['ダ', 'ﾀﾞ'],
  ['ヂ', 'ﾁﾞ'],
  ['ヅ', 'ﾂﾞ'],
  ['デ', 'ﾃﾞ'],
  ['ド', 'ﾄﾞ'],
  ['バ', 'ﾊﾞ'],
  ['ビ', 'ﾋﾞ'],
  ['ブ', 'ﾌﾞ'],
  ['ベ', 'ﾍﾞ'],
  ['ボ', 'ﾎﾞ'],
  ['パ', 'ﾊﾟ'],
  ['ピ', 'ﾋﾟ'],
  ['プ', 'ﾌﾟ'],
  ['ペ', 'ﾍﾟ'],
  ['ポ', 'ﾎﾟ'],
  ['ヴ', 'ｳﾞ'],
  ['ヷ', 'ﾜﾞ'],
  ['ヺ', 'ｦﾞ'],
  ['ア', 'ｱ'],
  ['イ', 'ｲ'],
  ['ウ', 'ｳ'],
  ['エ', 'ｴ'],
  ['オ', 'ｵ'],
  ['カ', 'ｶ'],
  ['キ', 'ｷ'],
  ['ク', 'ｸ'],
  ['ケ', 'ｹ'],
  ['コ', 'ｺ'],
  ['サ', 'ｻ'],
  ['シ', 'ｼ'],
  ['ス', 'ｽ'],
  ['セ', 'ｾ'],
  ['ソ', 'ｿ'],
  ['タ', 'ﾀ'],
  ['チ', 'ﾁ'],
  ['ツ', 'ﾂ'],
  ['テ', 'ﾃ'],
  ['ト', 'ﾄ'],
  ['ナ', 'ﾅ'],
  ['ニ', 'ﾆ'],
  ['ヌ', 'ﾇ'],
  ['ネ', 'ﾈ'],
  ['ノ', 'ﾉ'],
  ['ハ', 'ﾊ'],
  ['ヒ', 'ﾋ'],
  ['フ', 'ﾌ'],
  ['ヘ', 'ﾍ'],
  ['ホ', 'ﾎ'],
  ['マ', 'ﾏ'],
  ['ミ', 'ﾐ'],
  ['ム', 'ﾑ'],
  ['メ', 'ﾒ'],
  ['モ', 'ﾓ'],
  ['ヤ', 'ﾔ'],
  ['ユ', 'ﾕ'],
  ['ヨ', 'ﾖ'],
  ['ラ', 'ﾗ'],
  ['リ', 'ﾘ'],
  ['ル', 'ﾙ'],
  ['レ', 'ﾚ'],
  ['ロ', 'ﾛ'],
  ['ワ', 'ﾜ'],
  ['ヲ', 'ｦ'],
  ['ン', 'ﾝ'],
  ['ァ', 'ｧ'],
  ['ィ', 'ｨ'],
  ['ゥ', 'ｩ'],
  ['ェ', 'ｪ'],
  ['ォ', 'ｫ'],
  ['ッ', 'ｯ'],
  ['ャ', 'ｬ'],
  ['ュ', 'ｭ'],
  ['ョ', 'ｮ'],
]);
/** Kana Map whose keys are full-width  */
export const kanaMapHalfToFull = new Map(
  Array.from(kanaMapFullToHalf.entries()).map((entry) => {
    const [key, value] = entry;
    return [value, key];
  }),
);
/** Punctuation mark Map whose keys are full-width */
export const punctuationMarkMapFullToHalf = new Map([
  ['。', '｡'],
  ['、', '､'],
  ['ー', 'ｰ'],
  ['「', '｢'],
  ['」', '｣'],
  ['・', '･'],
]);
/** Punctuation mark Map whose keys are half-width */
export const punctuationMarkMapHalfToFull = new Map(
  Array.from(punctuationMarkMapFullToHalf.entries()).map((entry) => {
    const [key, value] = entry;
    return [value, key];
  }),
);
/** Symbol Map whose keys are full-width */
export const symbolMapFullToHalf = new Map([
  ['〜', '~'],
  ['！', '!'],
  ['＠', '@'],
  ['＃', '#'],
  ['＄', '$'],
  ['％', '%'],
  ['＾', '^'],
  ['＆', '&'],
  ['＊', '*'],
  ['（', '('],
  ['）', ')'],
  ['＿', '_'],
  ['＝', '='],
  ['＋', '+'],
  ['［', '['],
  ['］', ']'],
  ['｛', '{'],
  ['｝', '}'],
  ['￥', '\\'],
  ['｜', '|'],
  ['；', ';'],
  ['：', ':'],
  ['＇', ';'],
  ['＂', '"'],
  ['＜', '<'],
  ['＞', '>'],
  ['？', '?'],
  ['　', ' '],
]);
/** Symbol Map whose keys are half-width */
export const symbolMapHalfToFull = new Map(
  Array.from(symbolMapFullToHalf.entries()).map((entry) => {
    const [key, value] = entry;
    return [value, key];
  }),
);

/**
 * Convert full-width characters to half-width ones.
 *
 * @param src
 */
export const toHalfWidth = (src: string): string => {
  let result = toHalfWidthAlphaNumeric(src);
  result = toHalfWidthKana(result);
  result = toHalfWidthPunctuationMark(result);
  result = toHalfWidthSymbol(result);
  return result;
};

/**
 * Convert half-width characters to full-width ones.
 *
 * @param src
 */
export const toFullWidth = (src: string): string => {
  let result = toFullWidthAlphaNumeric(src);
  result = toFullWidthKana(result);
  result = toFullWidthPunctuationMark(result);
  result = toFullWidthSymbol(result);
  return result;
};

/**
 * Convert full-width alphanumeric characters to half-width ones.
 *
 * @private
 */
const toHalfWidthAlphaNumeric = (src: string): string => {
  return src.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
    String.fromCharCode(s.charCodeAt(0) - 0xfee0),
  );
};

/**
 * Convert half-width alphanumeric characters to full-width ones.
 *
 * @param src
 * @private
 */
const toFullWidthAlphaNumeric = (src: string): string => {
  return src.replace(/[A-Za-z0-9]/g, (s) =>
    String.fromCharCode(s.charCodeAt(0) + 0xfee0),
  );
};

/**
 * Convert full-width kana characters to half-width ones.
 *
 * @param src
 * @private
 */
const toHalfWidthKana = (src: string): string => {
  const keys = Array.from(kanaMapFullToHalf.keys()).join('|');
  return src.replace(
    new RegExp(`(${keys})`, 'g'),
    (s) => kanaMapFullToHalf.get(s) || '',
  );
};

/**
 * Convert half-width kana characters to full-width ones.
 *
 * @param src
 * @private
 */
const toFullWidthKana = (src: string): string => {
  const keys = Array.from(kanaMapHalfToFull.keys()).join('|');
  return src.replace(
    new RegExp(`(${keys})`, 'g'),
    (s) => kanaMapHalfToFull.get(s) || '',
  );
};

/**
 * Convert full-width punctuation mark to half-width ones.
 *
 * @param src
 * @private
 */
const toHalfWidthPunctuationMark = (src: string): string => {
  const keys = Array.from(punctuationMarkMapFullToHalf.keys()).join('|');
  return src.replace(
    new RegExp(`(${keys})`, 'g'),
    (s) => punctuationMarkMapFullToHalf.get(s) || '',
  );
};

/**
 * Convert half-width punctuation mark to full-width ones.
 *
 * @param src
 * @private
 */
const toFullWidthPunctuationMark = (src: string): string => {
  const keys = Array.from(punctuationMarkMapHalfToFull.keys()).join('|');
  return src.replace(
    new RegExp(`(${keys})`, 'g'),
    (s) => punctuationMarkMapHalfToFull.get(s) || '',
  );
};

/**
 * Convert full-width symbol to half-width ones.
 *
 * @param src
 * @private
 */
const toHalfWidthSymbol = (src: string): string => {
  const keys = Array.from(symbolMapFullToHalf.keys()).join('|');
  return src.replace(
    new RegExp(`(${keys})`, 'g'),
    (s) => symbolMapFullToHalf.get(s) || '',
  );
};

/**
 * Convert half-width symbol to full-width ones.
 *
 * @param src
 * @private
 */
const toFullWidthSymbol = (src: string): string => {
  const keys = Array.from(symbolMapHalfToFull.keys())
    .map((key) => `\\${key}`)
    .join('|');
  return src.replace(
    new RegExp(`(${keys})`, 'g'),
    (s) => symbolMapHalfToFull.get(s) || '',
  );
};
