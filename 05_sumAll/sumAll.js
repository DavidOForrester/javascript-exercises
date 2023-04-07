const sumAll = function (firstNum, secondNum) {
  result = 0;
  if (firstNum < 0 || secondNum < 0) {
    result = "ERROR";
  } else if (typeof firstNum != "number" || typeof secondNum != "number") {
    result = "ERROR";
  } else if (firstNum < secondNum) {
    for (let i = firstNum; i <= secondNum; i++) {
      result += i;
    }
  } else {
    for (let i = secondNum; i <= firstNum; i++) {
      result += i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
