var typeIsObject = (function () {
  'use strict';

  function isObject(value) {
    var type = typeof value;
    return (type === 'object' || type === 'function') && value !== null;
  }

  return isObject;

}());
