const helpers = require('./helpers.js')

describe('helpers.js', () => {
  test('should run tests', () => { })

  it('should run tests using it() in addition to test()', () => {
    // Arrange: setup the world
    // Act: execute the code you're testing
    // Assert check that it works
  })
})

describe('multiplyByTen()', () => {
  // low hanging fruit
  it('should multiply provided number by 10', () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);
  })

  it('should return 0 when called with no value', () => {
    const product = helpers.multiplyByTen();
    expect(product).toBe(0);
  })

  // it('should return 0 when called with a string', () => {
  //   expect(helpers.multiplyByTen('5')).toBe(0);
  //   expect(helpers.multiplyByTen('five')).toBe(0);
  // })

  it('should throw error when called with a string', () => {
    expect(() => helpers.multiplyByTen('5')).toThrow();
  })

})

describe('toEqual() match', () => {
  it('should check deep equality', () => {
    const a = { foo: 'bar' };
    const b = { foo: 'bar' };

    // expect(a).toBe(b); // Will fail
    expect(a).toEqual(b); // Will pass
  })
})

// remember to fail the test first by putting in 101 for expected
// think of edge/corner cases
// TDD Flow: Failing Test (Red) > Passing (Green) --> Refactor
// Decide what is easier to read for the team, not the clever solution

// test for undefined argument
// test for string argument
