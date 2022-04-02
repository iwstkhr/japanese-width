"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFullWidth = exports.toHalfWidth = exports.symbolMapHalfToFull = exports.symbolMapFullToHalf = exports.punctuationMarkMapHalfToFull = exports.punctuationMarkMapFullToHalf = exports.kanaMapHalfToFull = exports.kanaMapFullToHalf = void 0;
var tslib_1 = require("tslib");
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
exports.kanaMapHalfToFull = new Map(Array.from(exports.kanaMapFullToHalf.entries()).map(function (entry) {
    var _a = tslib_1.__read(entry, 2), key = _a[0], value = _a[1];
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
exports.punctuationMarkMapHalfToFull = new Map(Array.from(exports.punctuationMarkMapFullToHalf.entries()).map(function (entry) {
    var _a = tslib_1.__read(entry, 2), key = _a[0], value = _a[1];
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
    ['＇', ";"],
    ['＂', '"'],
    ['＜', '<'],
    ['＞', '>'],
    ['？', '?'],
    ['　', ' '],
]);
/** Symbol Map whose keys are half-width */
exports.symbolMapHalfToFull = new Map(Array.from(exports.symbolMapFullToHalf.entries()).map(function (entry) {
    var _a = tslib_1.__read(entry, 2), key = _a[0], value = _a[1];
    return [value, key];
}));
/**
 * Convert full-width characters to half-width ones.
 *
 * @param src
 */
var toHalfWidth = function (src) {
    var result = toHalfWidthAlphaNumeric(src);
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
var toFullWidth = function (src) {
    var result = toFullWidthAlphaNumeric(src);
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
var toHalfWidthAlphaNumeric = function (src) {
    return src.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) { return String.fromCharCode(s.charCodeAt(0) - 0xFEE0); });
};
/**
 * Convert half-width alphanumeric characters to full-width ones.
 *
 * @param src
 * @private
 */
var toFullWidthAlphaNumeric = function (src) {
    return src.replace(/[A-Za-z0-9]/g, function (s) { return String.fromCharCode(s.charCodeAt(0) + 0xFEE0); });
};
/**
 * Convert full-width kana characters to half-width ones.
 *
 * @param src
 * @private
 */
var toHalfWidthKana = function (src) {
    var keys = Array.from(exports.kanaMapFullToHalf.keys()).join('|');
    return src.replace(new RegExp("(".concat(keys, ")"), 'g'), function (s) { return exports.kanaMapFullToHalf.get(s) || ''; });
};
/**
 * Convert half-width kana characters to full-width ones.
 *
 * @param src
 * @private
 */
var toFullWidthKana = function (src) {
    var keys = Array.from(exports.kanaMapHalfToFull.keys()).join('|');
    return src.replace(new RegExp("(".concat(keys, ")"), 'g'), function (s) { return exports.kanaMapHalfToFull.get(s) || ''; });
};
/**
 * Convert full-width punctuation mark to half-width ones.
 *
 * @param src
 * @private
 */
var toHalfWidthPunctuationMark = function (src) {
    var keys = Array.from(exports.punctuationMarkMapFullToHalf.keys()).join('|');
    return src.replace(new RegExp("(".concat(keys, ")"), 'g'), function (s) { return exports.punctuationMarkMapFullToHalf.get(s) || ''; });
};
/**
 * Convert half-width punctuation mark to full-width ones.
 *
 * @param src
 * @private
 */
var toFullWidthPunctuationMark = function (src) {
    var keys = Array.from(exports.punctuationMarkMapHalfToFull.keys()).join('|');
    return src.replace(new RegExp("(".concat(keys, ")"), 'g'), function (s) { return exports.punctuationMarkMapHalfToFull.get(s) || ''; });
};
/**
 * Convert full-width symbol to half-width ones.
 *
 * @param src
 * @private
 */
var toHalfWidthSymbol = function (src) {
    var keys = Array.from(exports.symbolMapFullToHalf.keys()).join('|');
    return src.replace(new RegExp("(".concat(keys, ")"), 'g'), function (s) { return exports.symbolMapFullToHalf.get(s) || ''; });
};
/**
 * Convert half-width symbol to full-width ones.
 *
 * @param src
 * @private
 */
var toFullWidthSymbol = function (src) {
    var keys = Array.from(exports.symbolMapHalfToFull.keys()).map(function (key) { return "\\".concat(key); }).join('|');
    return src.replace(new RegExp("(".concat(keys, ")"), 'g'), function (s) { return exports.symbolMapHalfToFull.get(s) || ''; });
};
//# sourceMappingURL=japanese-width.js.map