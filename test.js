'use strict';

const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const rollupNodeResolve = require('rollup-plugin-node-resolve');
const test = require('tape');

function runTest(arrayToSentenceJa, description) {
  test(description, t => {
    t.strictEqual(arrayToSentenceJa.name, 'arrayToSentenceJa', 'should have a function name.');

    t.strictEqual(
      arrayToSentenceJa(['a', 'b', 'c']),
      'a、bおよびc',
      'should join all elements of an array and create a string.'
    );

    t.strictEqual(
      arrayToSentenceJa(['右', '左', '上', '下'], {
        separator: 'と',
        lastSeparator: '、そして'
      }),
      '右と左と上、そして下',
      'should override separators via options.'
    );

    t.throws(
      () => arrayToSentenceJa('foo', null),
      /^TypeError.*foo is not an array\. Expected an array\./,
      'should throw a type error when the first argument is not an array.'
    );

    t.throws(
      () => arrayToSentenceJa([], {separator: false}),
      /^TypeError.*false is not a string\. `separator` option must be a string\./,
      'should throw a type error when `separator` option is not a string.'
    );

    t.throws(
      () => arrayToSentenceJa([], {lastSeparator: true}),
      /^TypeError.*true is not a string\. `lastSeparator` option must be a string\./,
      'should throw a type error when `lastSeparator` option is not a string.'
    );

    t.end();
  });
}

rollup({
  entry: require('./package.json')['jsnext:main'],
  plugins: rollupNodeResolve({jsnext: true})
}).then(bundle => {
  runTest(require('.'), 'require(\'array-to-sentence-ja\')');
  runTest(requireFromString(bundle.generate({format: 'cjs'}).code), 'Module exports');
});
