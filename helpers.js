const multiplyByTen = num => {
  if (!num) return 0;
  return num * 10;
};

const subtractFive = num => {
  return num - 5;
};

const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
};

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
}