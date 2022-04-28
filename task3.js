class Calculator {
  constructor(result) {
    this.result = result;
  }

  add(x, y) {
    if (x && y) {
      this.result = x + y;
    } else {
      this.error();
    }
    return this.result;
  }

  subtract(x, y) {
    if (x && y) {
      if (x > y) {
        this.result = x - y;
      } else {
        this.result = y - x;
      }
    } else {
      this.error();
    }
    return this.result;
  }

  divide(x, y) {
    if (x && y) {
      if (x > y) {
        this.result = x / y;
      } else {
        this.result = y / x;
      }
    } else {
      this.error();
    }
    return this.result;
  }

  multiply(x, y) {
    if (x && y) {
      this.result = x * y;
    } else {
      this.error();
    }
    return this.result;
  }

  error() {
    const error = 'An error on the test method occur.';
    this.result = error;
  }
}

module.exports = { Calculator };