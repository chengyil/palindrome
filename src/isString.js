module.exports = function isString(word) {
  if (word == null) {
    return false;
  }
  const type = typeof word;
  return type === 'string' ||
   (type === 'object' &&
    Object.prototype.toString.call(word) === '[object String]');
};
