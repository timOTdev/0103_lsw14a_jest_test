const multiplyByTen = num => {
  if (!num) return 0;
  if (typeof num === 'string') throw new Error('Value must be a number');
  return num * 10;
};

const subtractFive = num => {
  return num - 5;
};

const areSameLength = (str1, str2) => {
  if (!str1 || !str2 || typeof str1 !== 'string' || typeof str2 !== 'string') return null;
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (!x || !y) return null;
  return JSON.stringify(x) === JSON.stringify(y);
};

const someApiCall = () => {
  return new Promise(resolve => resolve => setTimeout(resolve, 250))
}

function add() {
  return Array.from(arguments).reduce((sum, number) => {
    return sum + number;
  }, 0);
}

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  someApiCall,
  add,
}