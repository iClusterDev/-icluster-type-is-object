function isObject(value) {
  var type = typeof value;
  return (type === 'object' || type === 'function') && value !== null;
}

module.exports = isObject;
