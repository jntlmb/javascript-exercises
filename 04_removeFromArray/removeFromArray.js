const removeFromArray = function (arr, ...values) {
  let newArray = arr.filter((item) => !values.includes(item));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
