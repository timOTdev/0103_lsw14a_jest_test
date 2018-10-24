const helpers = require('./helpers.js')

describe('helpers.js', () => {
  describe('jest', () => {
    test('should run tests', () => {
      // test all the things
    });

    it('should run tests using it() in addition to test()', () => {
      // Arrange : setup the world
      // Act : execute the code you're testing
      // Assert : check that it works
    });
  });

  describe('toEqual() match', () => {
    it('should check deep equality', () => {
      const a = { foo: 'bar' };
      const b = { foo: 'bar' };

      // expect(a).toBe(b); // Will fail
      expect(a).toEqual(b); // Will pass
    })
  })

  describe('multiplyByTen()', () => {
    afterAll(() => console.log('after all'))
    beforeAll(() => console.log('before all'))
    afterEach(() => console.log('after each'))
    beforeAll(() => console.log('before each'))

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

  // remember to fail the test first by putting in 101 for expected
  // think of edge/corner cases
  // Decide what is easier to read for the team, not the clever solution

  // DOING ASYNC TESTS
  // 3 ways to do it: callbacks, promises, async/await
  describe('async tests', () => {
    it('using a callback', done => {
      setTimeout(() => done(), 500);
    });

    it('using promises', () => {
      return new Promise(resolve => setTimeout(resolve, 250))
    });

    it('using async/await', async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
    });
  });

  describe('add', () => {
    it('should return the sum of all numbers provided', () => {
      expect(helpers.add(2, 2, 5)).toBe(9);
      expect(helpers.add(1, 2)).toBe(3);
      expect(helpers.add(1, 2, 0, 1, 4, 6)).toBe(14);
    });
  });

})

// TDD Flow: Failing Test (Red) > Passing (Green) --> Refactor
describe('tdd practice', () => {
  describe('areSameLength', () => {
    it('should return true if called with strings of the same length', () => {
      const str1 = 'foo';
      const str2 = 'bar';
      const actual = helpers.areSameLength(str1, str2);
      expect(actual).toBe(true);
    });

    it('should return false if called with strings of different length', () => {
      expect(helpers.areSameLength('ab', 'a')).toBe(false);
    });

    it('should return null if one or both arguments is null or undefined', () => {
      expect(helpers.areSameLength()).toBe(null);
      expect(helpers.areSameLength('a')).toBe(null);
      expect(helpers.areSameLength(undefined, 'a')).toBe(null);
      expect(helpers.areSameLength(null, 'a')).toBe(null);
      expect(helpers.areSameLength('a', null)).toBe(null);
    });

    it('should return null if called with a non string argument', () => {
      expect(helpers.areSameLength({}, 'a')).toBe(null);
      expect(helpers.areSameLength([], 'a')).toBe(null);
      expect(helpers.areSameLength(false, 'a')).toBe(null);
      expect(helpers.areSameLength('a', {})).toBe(null);
      expect(helpers.areSameLength('a', [])).toBe(null);
      expect(helpers.areSameLength('a', true)).toBe(null);
      expect(helpers.areSameLength(1, 3)).toBe(null);
      expect(helpers.areSameLength(() => { })).toBe(null);
    });
  });
})

describe('areEqual', () => {
  it('Should return true if the two provided values are equal', () => {
    const expected = true;
    const numbers = helpers.areEqual(42, 42);
    const strings = helpers.areEqual('string', 'string');
    const arrays = helpers.areEqual(['string'], ['string']);
    const objects = helpers.areEqual({ string: 42 }, { string: 42 });
    const deepObjects = helpers.areEqual(
      { object: { string: 42 } },
      { object: { string: 42 } }
    );

    expect(numbers).toEqual(expected);
    expect(strings).toEqual(expected);
    expect(arrays).toEqual(expected);
    expect(objects).toEqual(expected);
    expect(deepObjects).toEqual(expected);
  });

  it('returns false if the arguments are not the same', () => {
    expect(helpers.areEqual(4, 9)).toBeFalsy();
    expect(helpers.areEqual('hi', '')).toBeFalsy();
  });

  it('should return null if x or y are null or undefined', () => {
    expect(helpers.areEqual(null, 'a')).toBe(null);
    expect(helpers.areEqual(10, null)).toBe(null);
    expect(helpers.areEqual('65', null)).toBe(null);
    expect(helpers.areEqual(undefined, 23)).toBe(null);
  });

  it.skip('should throw error when called with no values', () => {
    expect(helpers.areEqual()).toThrow();
    expect(() => {
      helpers.areEqual(undefined, 2);
    }).toThrow();
    expect(() => {
      helpers.areEqual(3, undefined);
    }).toThrow();
    expect(() => {
      helpers.areEqual(null, 4);
    }).toThrow();
    expect(() => {
      helpers.areEqual(5, null);
    }).toThrow();
  });
})

// user stories have scenarios
// scenarios map nicely to tests

/*

-- USER STORY --
AS A (role)
I WANT (to do something)
SO THAT (I get some value)

as a sales executive
I want to log into the system
so that I can see my leads

given a valid username 
  and valid password
when the user hits the login button
then the system will log the user
  and navigate the user the the dashboard

given a valid username 
  and invalid password
when the user hits the login button
then the system will not log the user in
  and show an error on screan
  and keep the user in the login screen

-- SCENARIO --
GIVEN
  AND
  AND
WHEN
  AND
THEN
  AND
  AND

*/
