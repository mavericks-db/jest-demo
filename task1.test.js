const { stringLength } = require('./task1');

describe('These are tests for stringLength function', () => {
  test('Return character counts of Mavericks', () => {
    expect(stringLength('Mavericks')).toBe(9);
  });

  test('Return character counts of DeLeon', () => {
    expect(stringLength('DeLeon')).toBe(6);
  });

  test('Return character counts of Balitaan', () => {
    expect(stringLength('Balitaan')).toBe(8);
  });

  test('Return character counts of Software', () => {
    expect(stringLength('Software')).toBe(8);
  });

  test('Return character counts of Developer', () => {
    expect(stringLength('Developer')).toBe(9);
  });

  test('Empty String - this is a fail test', () => {
    expect(() => stringLength('')).toThrowError('This is a simulation of fail test');// This is a Fail Test
  });

  test('More than 10 characters - this is a fail test', () => {
    expect(stringLength('Abcdefghijk')).toThrowError('This is a simulation of fail test');// This is a Fail Test
  });
});
