const sumAll = function (numOne, numTwo) {
  if (numOne < 0 || numTwo < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
    return "ERROR";
  }

  if (numOne > numTwo) {
    [numOne, numTwo] = [numTwo, numOne];
  }

  let currentNumber = 0;
  for (numOne; numOne <= numTwo; numOne++) {
    currentNumber += numOne;
  }

  return currentNumber;
};

// Do not edit below this line
module.exports = sumAll;
