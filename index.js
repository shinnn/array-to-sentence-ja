/*!
 * array-to-sentence-ja | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-to-sentence-ja
*/
'use strict';

var arrayToSentence = require('array-to-sentence');
var objectAssign = require('object-assign');

module.exports = function arrayToSentenceJa(arr, options) {
  return arrayToSentence(arr, objectAssign({
    separator: '、',
    lastSeparator: 'および'
  }, options));
};
