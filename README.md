# type-is-object

A utility to check if `value` is not `null` and its type is `object`.

## Installation

Using [npm](https://www.npmjs.com/package/type-is-object)

```console
npm i type-is-object
```

## Usage

```js
const isObject = require('type-is-object');

// on "undefined" -> false
console.log(isObject());

// on "null" -> false
console.log(isObject(null));

// on "number" -> false
console.log(isObject(100));

// on "string" -> false
console.log(isObject('foo'));

// on "boolean" -> false
console.log(isObject(true));

// on "plain object" -> true
console.log(isObject({ a: 100, b: 200 }));

// on "array" -> true
console.log(isObject([1, 2, 3]));

// on "function" -> true
console.log(
  isObject(function() {
    return 'bar';
  })
);
```

## Contributing

If you find any issues, feel free to submit a pull request

## Author

[iClusterDev](https://github.com/iClusterDev)

## License

This project is under the [MIT](LICENSE.md) License
