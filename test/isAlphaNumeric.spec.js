const isAlphaNumeric = require('@src/isAlphaNumeric');

describe('isAlphaNumeric', () => {
  it('"a" should be alphaNumerc', () => {
    expect(isAlphaNumeric('a')).toBe(true);
  });
  it('"a1" should be alphaNumerc', () => {
    expect(isAlphaNumeric('a1')).toBe(true);
  });
  it('"a 1" should not be alphaNumerc', () => {
    expect(isAlphaNumeric('a 1')).toBe(false);
  });
  it('"," should not be alphaNumerc', () => {
    expect(isAlphaNumeric(',')).toBe(false);
  });
  it('"" should be alphaNumerc', () => {
    expect(isAlphaNumeric('')).toBe(true);
  });
});
