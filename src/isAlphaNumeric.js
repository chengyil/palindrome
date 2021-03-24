const isString = require('./isString');
module.exports = function isAlphaNumeric(word) {
  if (!isString(word)) {
    return false;
  }
  return word.match(/[^a-z0-9]/i) === null;
};
