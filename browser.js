/*!
 * array-to-sentence-ja | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-to-sentence-ja
*/
window.arrayToSentenceJa = function arrayToSentenceJa(arr, options) {
  'use strict';

  return window.arrayToSentence(arr, Object.assign({
    separator: '、',
    lastSeparator: 'および'
  }, options));
};
