import { getDotCombinations } from './main';

describe('getDotCombinations', () => {
  it('should return correct result for "abc"', () => {
    const argument = 'abc';
    const expectedResult = ['abc', 'a.bc', 'ab.c', 'a.b.c'];

    expect(getDotCombinations(argument)).toEqual(expectedResult);
  });

  it('should return correct result for "abcd"', () => {
    const argument = 'abcd';
    const expectedResult = [
      'abcd',
      'a.bcd',
      'ab.cd',
      'a.b.cd',
      'abc.d',
      'a.bc.d',
      'ab.c.d',
      'a.b.c.d',
    ];

    expect(getDotCombinations(argument)).toEqual(expectedResult);
  });
});
