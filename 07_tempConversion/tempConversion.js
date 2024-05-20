const convertToCelsius = function (degFahr) {
  return Math.round((degFahr - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (degCel) {
  return Math.round(((degCel * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
