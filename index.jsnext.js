/*!
 * array-to-sentence-ja | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-to-sentence-ja
*/
import arrayToSentence from 'array-to-sentence';

export default function arrayToSentenceJa(arr, options) {
  return arrayToSentence(arr, Object.assign({
    separator: '、',
    lastSeparator: 'および'
  }, options));
}
