'use strict';

const arrayToSentenceJa = require('.');
const test = require('tape');

test('arrayToSentenceJa()', t => {
	t.equal(arrayToSentenceJa.name, 'arrayToSentenceJa', 'should have a function name.');

	t.equal(
		arrayToSentenceJa(['a', 'b', 'c']),
		'a、bおよびc',
		'should join all elements of an array and create a string.'
	);

	t.equal(
		arrayToSentenceJa(['右', '左', '上', '下'], {
			separator: 'と',
			lastSeparator: '、そして'
		}),
		'右と左と上、そして下',
		'should override separators via options.'
	);

	t.throws(
		() => arrayToSentenceJa('foo', null),
		/^TypeError.*Expected an array, but got a non-array value foo\./,
		'should throw a type error when the first argument is not an array.'
	);

	t.throws(
		() => arrayToSentenceJa([], {separator: false}),
		/^TypeError.*Expected `separator` option to be a string, but got a non-string value false\./,
		'should throw a type error when `separator` option is not a string.'
	);

	t.throws(
		() => arrayToSentenceJa([], {lastSeparator: true}),
		/^TypeError.*Expected `lastSeparator` option to be a string, but got a non-string value true\./,
		'should throw a type error when `lastSeparator` option is not a string.'
	);

	t.end();
});
