const convertToCelsius = function (tempF) {
  if (tempF === 32) return 0;
  const calcC = (tempF - 32) * (5 / 9);

  return parseFloat(calcC.toFixed(1));
};

const convertToFahrenheit = function (tempC) {
  if (tempC === 0) return 32;
  const calcF = tempC * (9 / 5) + 32;
  return parseFloat(calcF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
