const palindromes = function (phrase) {
    phrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, "");

  return phrase === phrase.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
