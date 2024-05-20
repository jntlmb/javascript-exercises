const reverseString = function (myString) {
  let splittedArray = myString.split("");
  let reversedArray = splittedArray.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
