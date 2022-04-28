const { Calculator } = require('./task3');

const calculator = new Calculator();

describe('These are tests for Add Method', () => {
  test('Sum of 8 + 7', () => {
    expect(calculator.add(8, 7)).toBe(15);
  });

  test('Sum of 13 + 8', () => {
    expect(calculator.add(13, 8)).toBe(21);
  });

  test('Sum of 21 + 7', () => {
    expect(calculator.add(21, 7)).toBe(28);
  });

  test('Sum of 21 + 7 - this is a fail test', () => {
    expect(calculator.add(21)).toBe(30); // This is a Fail Test
  });

  test('Sum of 21 + 7 - this is a fail test', () => {
    expect(calculator.add(21, 7)).toBe(30); // This is a Fail Test
  });
});

describe('These are tests for Subtract Method', () => {
  test('Difference of 8 & 7', () => {
    expect(calculator.subtract(7, 8)).toBe(1);
  });

  test('Difference of 13 & 8', () => {
    expect(calculator.subtract(13, 8)).toBe(5);
  });

  test('Difference of 21 & 7', () => {
    expect(calculator.subtract(7, 21)).toBe(14);
  });

  test('Difference of 21 & 7 - this is a fail test', () => {
    expect(calculator.subtract(7)).toBe(12); // This is a Fail Test
  });

  test('Difference of 21 & 7 - this is a fail test', () => {
    expect(calculator.subtract(7, 21)).toBe(12); // This is a Fail Test
  });
});

describe('These are tests for Divide Method', () => {
  test('Quotient of 100 & 50', () => {
    expect(calculator.divide(50, 100)).toBe(2);
  });

  test('Quotient of 25 & 5', () => {
    expect(calculator.divide(25, 5)).toBe(5);
  });

  test('Quotient of 66 & 11', () => {
    expect(calculator.divide(11, 66)).toBe(6);
  });

  test('Quotient of 66 & 11 - this is a fail test', () => {
    expect(calculator.divide(11)).toBe(7); // This is a Fail Test
  });

  test('Quotient of 66 & 11 - this is a fail test', () => {
    expect(calculator.divide(11, 66)).toBe(7); // This is a Fail Test
  });
});

describe('These are tests for Multiply Method', () => {
  test('Product of 4 & 3', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test('Product of 10 & 5', () => {
    expect(calculator.multiply(5, 10)).toBe(50);
  });

  test('Product of 8 & 6', () => {
    expect(calculator.multiply(6, 8)).toBe(48);
  });

  test('Product of 8 & 6 - this is a fail test', () => {
    expect(calculator.multiply(6)).toBe(48);// This is a Fail Test
  });

  test('Product of 8 & 6 - this is a fail test', () => {
    expect(calculator.multiply(6, 8)).toBe(14);// This is a Fail Test
  });
});