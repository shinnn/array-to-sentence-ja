'use strict';

var arrayToSentence = require('array-to-sentence');

/*!
 * array-to-sentence-ja | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-to-sentence-ja
*/

module.exports = function arrayToSentenceJa(arr, options) {
	return arrayToSentence(arr, Object.assign({
		separator: '、',
		lastSeparator: 'および'
	}, options));
}
