import {
  stringLength, stringReverse, calculator, capitalize,
} from './main';

describe('stringLength', () => {
  test('returns the correct length of a string', () => {
    const str = '123456';
    const res = stringLength(str);
    expect(res).toBe(6);
  });

  test('errors out for empty strings', () => {
    const empty = '';
    expect(() => stringLength(empty)).toThrow('String length outside bounds');
  });

  test('errors out for empty strings', () => {
    // Arrange
    const longStr = '12345678910';
    expect(() => stringLength(longStr)).toThrow('String length outside bounds');
  });
});

describe('stringReverse', () => {
  test('reverses a string', () => {
    const string = 'string';
    expect(stringReverse(string)).toBe('gnirts');
  });

  test('reverses a palindrome', () => {
    const palindrome = 'neuquen';
    expect(stringReverse(palindrome)).toBe(palindrome);
  });
});

describe('calculator', () => {
  describe('add', () => {
    test('add two integers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('add two floats', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('add two floats fails to equal', () => {
      expect(calculator.add(0.1, 0.2)).not.toBe(0.3);
    });
  });

  describe('subtract', () => {
    test('subtract two integers', () => {
      expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test('subtract two floats', () => {
      expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
    });

    test('integer additive inverse', () => {
      expect(calculator.subtract(1, 1)).toBe(0);
    });
  });

  describe('multiply', () => {
    test('multiply two integers', () => {
      expect(calculator.multiply(2, 2)).toBe(4);
    });

    test('integer multiplication identity element', () => {
      expect(calculator.multiply(1, 5)).toBe(5);
    });

    test('multiply two floats', () => {
      expect(calculator.multiply(3.0, 0.2)).toBeCloseTo(0.6);
    });
  });

  describe('divide', () => {
    test('divide two integers', () => {
      expect(calculator.divide(2, 2)).toBe(1);
    });

    test('divide two floats', () => {
      expect(calculator.divide(3.0, 0.2)).toBeCloseTo(15.0);
    });

    test('division by zero', () => {
      expect(calculator.divide(1, 0)).toBe(Infinity);
    });
  });
});

describe('capitalize', () => {
  test('capitalize lowecase string', () => {
    const string = 'string';
    const res = capitalize(string);
    expect(res).toBe('String');
  });
  test('capitalize a capitalized string', () => {
    const string = 'String';
    const res = capitalize(string);
    expect(res).toBe(string);
  });
  test('capitalize a string with leading spaces', () => {
    const string = '   string';
    const res = capitalize(string);
    expect(res).toBe('   String');
  });
});
