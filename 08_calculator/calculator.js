const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let multiply = 1;
  for (let i = 0; i < array.length; i++) {
    multiply *=  array[i];
  }
  return multiply;
};

const power = function (numOne, numTwo) {
  return (Math.pow(numOne, numTwo));
};

const factorial = function (number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
