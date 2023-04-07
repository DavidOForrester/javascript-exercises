const repeatString = function (string, num) {
  let resultString = "";
  if (num < 0) {
    return (resultString = "ERROR");
  } else {
    for (let i = 0; i < num; i++) {
      resultString = resultString + string;
    }
    return resultString;
  }
};

// Do not edit below this line
module.exports = repeatString;
