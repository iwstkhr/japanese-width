"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFullWidth = exports.toHalfWidth = exports.symbolMapHalfToFull = exports.symbolMapFullToHalf = exports.punctuationMarkMapHalfToFull = exports.punctuationMarkMapFullToHalf = exports.kanaMapHalfToFull = exports.kanaMapFullToHalf = void 0;
/** Kana Map whose keys are full-width  */
exports.kanaMapFullToHalf = new Map([
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
exports.kanaMapHalfToFull = new Map(Array.from(exports.kanaMapFullToHalf.entries()).map((entry) => {
    const [key, value] = entry;
    return [value, key];
}));
/** Punctuation mark Map whose keys are full-width */
exports.punctuationMarkMapFullToHalf = new Map([
    ['。', '｡'],
    ['、', '､'],
    ['ー', 'ｰ'],
    ['「', '｢'],
    ['」', '｣'],
    ['・', '･'],
]);
/** Punctuation mark Map whose keys are half-width */
exports.punctuationMarkMapHalfToFull = new Map(Array.from(exports.punctuationMarkMapFullToHalf.entries()).map((entry) => {
    const [key, value] = entry;
    return [value, key];
}));
/** Symbol Map whose keys are full-width */
exports.symbolMapFullToHalf = new Map([
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
exports.symbolMapHalfToFull = new Map(Array.from(exports.symbolMapFullToHalf.entries()).map((entry) => {
    const [key, value] = entry;
    return [value, key];
}));
/**
 * Convert full-width characters to half-width ones.
 *
 * @param src
 */
const toHalfWidth = (src) => {
    let result = toHalfWidthAlphaNumeric(src);
    result = toHalfWidthKana(result);
    result = toHalfWidthPunctuationMark(result);
    result = toHalfWidthSymbol(result);
    return result;
};
exports.toHalfWidth = toHalfWidth;
/**
 * Convert half-width characters to full-width ones.
 *
 * @param src
 */
const toFullWidth = (src) => {
    let result = toFullWidthAlphaNumeric(src);
    result = toFullWidthKana(result);
    result = toFullWidthPunctuationMark(result);
    result = toFullWidthSymbol(result);
    return result;
};
exports.toFullWidth = toFullWidth;
/**
 * Convert full-width alphanumeric characters to half-width ones.
 *
 * @private
 */
const toHalfWidthAlphaNumeric = (src) => {
    return src.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
};
/**
 * Convert half-width alphanumeric characters to full-width ones.
 *
 * @param src
 * @private
 */
const toFullWidthAlphaNumeric = (src) => {
    return src.replace(/[A-Za-z0-9]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 0xfee0));
};
/**
 * Convert full-width kana characters to half-width ones.
 *
 * @param src
 * @private
 */
const toHalfWidthKana = (src) => {
    const keys = Array.from(exports.kanaMapFullToHalf.keys()).join('|');
    return src.replace(new RegExp(`(${keys})`, 'g'), (s) => exports.kanaMapFullToHalf.get(s) || '');
};
/**
 * Convert half-width kana characters to full-width ones.
 *
 * @param src
 * @private
 */
const toFullWidthKana = (src) => {
    const keys = Array.from(exports.kanaMapHalfToFull.keys()).join('|');
    return src.replace(new RegExp(`(${keys})`, 'g'), (s) => exports.kanaMapHalfToFull.get(s) || '');
};
/**
 * Convert full-width punctuation mark to half-width ones.
 *
 * @param src
 * @private
 */
const toHalfWidthPunctuationMark = (src) => {
    const keys = Array.from(exports.punctuationMarkMapFullToHalf.keys()).join('|');
    return src.replace(new RegExp(`(${keys})`, 'g'), (s) => exports.punctuationMarkMapFullToHalf.get(s) || '');
};
/**
 * Convert half-width punctuation mark to full-width ones.
 *
 * @param src
 * @private
 */
const toFullWidthPunctuationMark = (src) => {
    const keys = Array.from(exports.punctuationMarkMapHalfToFull.keys()).join('|');
    return src.replace(new RegExp(`(${keys})`, 'g'), (s) => exports.punctuationMarkMapHalfToFull.get(s) || '');
};
/**
 * Convert full-width symbol to half-width ones.
 *
 * @param src
 * @private
 */
const toHalfWidthSymbol = (src) => {
    const keys = Array.from(exports.symbolMapFullToHalf.keys()).join('|');
    return src.replace(new RegExp(`(${keys})`, 'g'), (s) => exports.symbolMapFullToHalf.get(s) || '');
};
/**
 * Convert half-width symbol to full-width ones.
 *
 * @param src
 * @private
 */
const toFullWidthSymbol = (src) => {
    const keys = Array.from(exports.symbolMapHalfToFull.keys())
        .map((key) => `\\${key}`)
        .join('|');
    return src.replace(new RegExp(`(${keys})`, 'g'), (s) => exports.symbolMapHalfToFull.get(s) || '');
};
//# sourceMappingURL=japanese-width.js.map