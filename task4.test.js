const { capitalize } = require('./task4');

describe('These are tests for capitalize function', () => {
  test('Capitalize mavericks', () => {
    expect(capitalize('mavericks')).toMatch('Mavericks');
  });

  test('Capitalize balitaan', () => {
    expect(capitalize('balitaan')).toMatch('Balitaan');
  });

  test('Capitalize software', () => {
    expect(capitalize('software')).toMatch('Software');
  });

  test('Capitalize Empty String - this is a fail test', () => {
    expect(() => capitalize('')).toThrowError('This is a simulation of fail test');// This is a Fail Test
  });

  test('Capitalize Number 1 - this is a fail test', () => {
    expect(() => capitalize('1')).toThrowError('This is a simulation of fail test');// This is a Fail Test
  });
});