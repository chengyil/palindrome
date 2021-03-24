const caseInsensitiveEqual = require('@src/caseInsensitiveEqual');

describe('caseInsensitiveEqual', () => {
  it('a, a should be the same', () => {
    expect(caseInsensitiveEqual('a', 'a')).toBe(true);
  });
  it('a, b should be different', () => {
    expect(caseInsensitiveEqual('a', 'b')).toBe(false);
  });

  it('a, A should be different', () => {
    expect(caseInsensitiveEqual('a', 'A')).toBe(true);
  });
  it(', , should be same', () => {
    expect(caseInsensitiveEqual(',', ',')).toBe(true);
  });
  it('. , should be different', () => {
    expect(caseInsensitiveEqual('.', ',')).toBe(false);
  });
});
