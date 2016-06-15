# array-to-sentence-ja

[![NPM version](https://img.shields.io/npm/v/array-to-sentence-ja.svg)](https://www.npmjs.com/package/array-to-sentence-ja)
[![Build Status](https://travis-ci.org/shinnn/array-to-sentence-ja.svg?branch=master)](https://travis-ci.org/shinnn/array-to-sentence-ja)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-to-sentence-ja.svg)](https://coveralls.io/github/shinnn/array-to-sentence-ja?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/array-to-sentence-ja.svg)](https://david-dm.org/shinnn/array-to-sentence-ja)
[![devDependency Status](https://david-dm.org/shinnn/array-to-sentence-ja/dev-status.svg)](https://david-dm.org/shinnn/array-to-sentence-ja#info=devDependencies)

Japanese-friendly version of [array-to-sentence](https://github.com/shinnn/array-to-sentence):

> Join all elements of an array and create a human-readable string

```javascript
import arrayToSentenceJa from 'array-to-sentence-ja';

arrayToSentenceJa(['春', '夏', '秋', '冬']); //=> '春、夏、秋および冬'
```

## Installation

#### [npm](https://www.npmjs.com/)

```
npm install array-to-sentence-ja
```

#### [Bower](http://bower.io/)

```
bower install array-to-sentence-ja
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/array-to-sentence-ja/master/browser.js)

## API

### arrayToSentenceJa(*array* [, *options*])

*array*: `Array` of any values  
*options*: `Object`  
Return: `String`

Almost the same as [array-to-sentence](https://github.com/shinnn/array-to-sentence#arraytosentencearray--options), except that [`separator`](https://github.com/shinnn/array-to-sentence#optionsseparator) option defaults to `'、'`, and [`lastSeparator`](https://github.com/shinnn/array-to-sentence#optionslastseparator) option defaults to `'および'`.

```javascript
arrayToSentenceJa(['春', '夏', '秋', '冬'], {lastSeparator: '、そして'}); //=> '春、夏、秋、そして冬'
```
## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
