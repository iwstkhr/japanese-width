import {
  kanaMapFullToHalf,
  kanaMapHalfToFull,
  punctuationMarkMapFullToHalf,
  punctuationMarkMapHalfToFull,
  symbolMapFullToHalf,
  symbolMapHalfToFull,
  toFullWidth,
  toHalfWidth
} from './japanese-width';

describe('JapaneseWidth', () => {

  it('toHalfWidth', () => {
    const test = 'ＡＺａｚ０９'
      + Array.from(kanaMapFullToHalf.keys()).join('')
      + Array.from(punctuationMarkMapFullToHalf.keys()).join('')
      + Array.from(symbolMapFullToHalf.keys()).join('');
    const values = 'AZaz09'
      + Array.from(kanaMapFullToHalf.values()).join('')
      + Array.from(punctuationMarkMapFullToHalf.values()).join('')
      + Array.from(symbolMapFullToHalf.values()).join('');
    const result = toHalfWidth(test);
    expect(result).toBe(values);
  });

  it('toFullWidth', () => {
    const test = 'AZaz09'
      + Array.from(kanaMapHalfToFull.keys()).join('')
      + Array.from(punctuationMarkMapHalfToFull.keys()).join('')
      + Array.from(symbolMapHalfToFull.keys()).join('');
    const values = 'ＡＺａｚ０９'
      + Array.from(kanaMapHalfToFull.values()).join('')
      + Array.from(punctuationMarkMapHalfToFull.values()).join('')
      + Array.from(symbolMapHalfToFull.values()).join('');
    const result = toFullWidth(test);
    expect(result).toBe(values);
  });

});
