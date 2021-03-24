const isString = require('./isString');
const isAlphaNumeric = require('./isAlphaNumeric');
const caseInsensitiveEqual = require('./caseInsensitiveEqual');

function isPalindromeStep(word, lowerIndex, upperIndex) {
  if (lowerIndex >= upperIndex) {
    return true;
  } else if (!isAlphaNumeric(word[lowerIndex])) {
    return isPalindromeStep(word, lowerIndex + 1, upperIndex);
  } else if (!isAlphaNumeric(word[upperIndex])) {
    return isPalindromeStep(word, lowerIndex + 1, upperIndex);
  } else {
    return caseInsensitiveEqual(word[lowerIndex], word[upperIndex]) &&
    isPalindromeStep(word, lowerIndex + 1, upperIndex - 1);
  }
}

module.exports = function isPalindrome(word) {
  if (!isString(word)) {
    return true;
  }
  return isPalindromeStep(word, 0, word.length - 1);
};
