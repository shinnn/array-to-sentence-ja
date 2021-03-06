# array-to-sentence-ja

[![npm version](https://img.shields.io/npm/v/array-to-sentence-ja.svg)](https://www.npmjs.com/package/array-to-sentence-ja)
[![Build Status](https://travis-ci.com/shinnn/array-to-sentence-ja.svg?branch=master)](https://travis-ci.com/shinnn/array-to-sentence-ja)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-to-sentence-ja.svg)](https://coveralls.io/github/shinnn/array-to-sentence-ja?branch=master)

Japanese version of [array-to-sentence](https://github.com/shinnn/array-to-sentence):

> Join all elements of an array and create a human-readable string

```javascript
import arrayToSentenceJa from 'array-to-sentence-ja';

arrayToSentenceJa(['春', '夏', '秋', '冬']); //=> '春、夏、秋および冬'
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install array-to-sentence-ja
```

## API

### arrayToSentenceJa(*array* [, *options*])

*array*: `Array<any>`  
*options*: `Object`  
Return: `string`

Almost the same as [array-to-sentence](https://github.com/shinnn/array-to-sentence#arraytosentencearray--options), except that [`separator`](https://github.com/shinnn/array-to-sentence#optionsseparator) option defaults to `'、'`, and [`lastSeparator`](https://github.com/shinnn/array-to-sentence#optionslastseparator) option defaults to `'および'`.

```javascript
arrayToSentenceJa(['春', '夏', '秋', '冬'], {lastSeparator: '、そして'}); //=> '春、夏、秋、そして冬'
```

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
