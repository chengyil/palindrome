const isString = require('./isString');
module.exports = function caseInsensitiveEqual(a, b) {
  if (!isString(a) || !isString(b)) {
    return false;
  }
  return a.localeCompare(b, undefined, {sensitivity: 'accent'}) === 0;
};
