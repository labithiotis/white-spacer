# white-spacer

  Just apply white space before or after `String` or just get `n` white spaces. So simple your `mum` can use it :)

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]

```js
var spacer = require('white-spacer');

console.log(spacer('GET'), '/user');
console.log(spacer('DELETE'), '/user');

```

Will output

```console
GET     /user
DELETE  /user
```

## Installation

```bash
$ npm install white-spacer --save
```

## Options

Pass arguments of `String/Integer` [ `Count`(Integer) , `Before`(Boolean) ]


 ```js
 var spacer = require('white-spacer');

 spacer(6)                   // outputs: "     /user"
 spacer('GET')               // outputs: "GET     /user"
 spacer('DELETE')            // outputs: "DELETE  /user"
 spacer('DELETE',10)         // outputs: "DELETE    /user"
 spacer('DELETE',10, true)   // outputs: "    DELETE/user"

 ```


[npm-image]: https://img.shields.io/npm/v/white-spacer.svg?style=flat
[npm-url]: https://npmjs.org/package/white-spacer
[downloads-image]: https://img.shields.io/npm/dm/white-spacer.svg?style=flat
[downloads-url]: https://npmjs.org/package/white-spacer
[travis-image]: https://img.shields.io/travis/strongloop/white-spacer.svg?style=flat
[travis-url]: https://travis-ci.org/strongloop/white-spacer
[coveralls-image]: https://img.shields.io/coveralls/strongloop/white-spacer.svg?style=flat
[coveralls-url]: https://coveralls.io/r/strongloop/white-spacer?branch=master
