const isString = require('@src/isString');

describe('isString', () => {
  it('"" should be string', () => {
    expect(isString('')).toBe(true);
  });
  it('"abc" should be string', () => {
    expect(isString('abc')).toBe(true);
  });
  it('boolean should not be string', () => {
    [true, false].forEach((subject) => {
      expect(isString(subject)).toBe(false);
    });
  });
  it('Object should not be string', () => {
    [{}, Object.create(Object.prototype), new (function() {})]
        .forEach((subject) => {
          expect(isString(subject)).toBe(false);
        });
  });
  it('Array should not be string', () => {
    [[], [1]].forEach((subject)=>{
      expect(isString([])).toBe(false);
    });
  });
  it('undefined, null should not be string', () => {
    [undefined, null]
        .forEach((subject) => {
          expect(isString(subject)).toBe(false);
        });
  });
  it('Number should not be string', () => {
    [1, 2, NaN]
        .forEach((subject) => {
          expect(isString(subject)).toBe(false);
        });
  });
  it('Primitive wrapper for String is string', () => {
    // eslint-disable-next-line no-new-wrappers
    expect(isString(new String('1'))).toBe(true);
  });
  it('Primitive wrapper for number is not string', () => {
    // eslint-disable-next-line no-new-wrappers
    expect(isString(new Number(1))).toBe(false);
  });
});
