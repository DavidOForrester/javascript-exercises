const reverseString = function (word) {
  let reversedWord = "";

  reversedWord = word.split("").reverse().join("");

  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
