const convertToCelsius = function (degreesF) {
  let formulaToCelcius = ((degreesF - 32) * 5) / 9;
  let roundedResults = Math.round(formulaToCelcius * 10) / 10;
  return roundedResults;
};

const convertToFahrenheit = function (degreesC) {
  let formulaToFahrenheit = degreesC * (9 / 5) + 32;
  let roundedResults = Math.round(formulaToFahrenheit * 10) / 10;
  return roundedResults;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
