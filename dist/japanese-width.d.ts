/** Kana Map whose keys are full-width  */
export declare const kanaMapFullToHalf: Map<string, string>;
/** Kana Map whose keys are full-width  */
export declare const kanaMapHalfToFull: Map<string, string>;
/** Punctuation mark Map whose keys are full-width */
export declare const punctuationMarkMapFullToHalf: Map<string, string>;
/** Punctuation mark Map whose keys are half-width */
export declare const punctuationMarkMapHalfToFull: Map<string, string>;
/** Symbol Map whose keys are full-width */
export declare const symbolMapFullToHalf: Map<string, string>;
/** Symbol Map whose keys are half-width */
export declare const symbolMapHalfToFull: Map<string, string>;
/**
 * Convert full-width characters to half-width ones.
 *
 * @param src
 */
export declare const toHalfWidth: (src: string) => string;
/**
 * Convert half-width characters to full-width ones.
 *
 * @param src
 */
export declare const toFullWidth: (src: string) => string;
