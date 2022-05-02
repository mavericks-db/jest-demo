const { reverseString } = require('./task2');

describe('These are tests for reverseString function', () => {
  test('Mavericks', () => {
    expect(reverseString('Mavericks')).toMatch('skcirevaM');
  });

  test('Balitaan', () => {
    expect(reverseString('Balitaan')).toMatch('naatilaB');
  });

  test('Software', () => {
    expect(reverseString('Software')).toMatch('erawtfoS');
  });

  test('Developer', () => {
    expect(reverseString('Developer')).toMatch('repoleveD');
  });

  test('Racecar - this is a fail test', () => {
    expect(reverseString('Racecar')).toMatch('Racecar'); // This is a Fail Test
  });

  test('reviveR - this is a fail test', () => {
    expect(reverseString('reviveR')).toMatch('reviveR'); // This is a Fail Test
  });
});