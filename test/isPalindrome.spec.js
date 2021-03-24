const isPalindrome = require('@src/isPalindrome');

describe('isPalindrome', () => {
  it('null should be palindrome', () => {
    expect(isPalindrome(null)).toBe(true);
  });
  it('undefined should be palindrome', () => {
    expect(isPalindrome(undefined)).toBe(true);
  });
  it('"" should be palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });
  it('"a" should be palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
  });
  it('"aba" should be palindrome', () => {
    expect(isPalindrome('aba')).toBe(true);
  });
  it('"abA" should be palindrome', () => {
    expect(isPalindrome('aba')).toBe(true);
  });
  it('",ii." should be palindrome', () => {
    expect(isPalindrome(',ii.')).toBe(true);
  });
  it('",ia #iA." should be palindrome', () => {
    expect(isPalindrome(',ia #Ai.')).toBe(true);
  });

  it('",ia #iB." should not be palindrome', () => {
    expect(isPalindrome(',ia #iB.')).toBe(false);
  });
});
