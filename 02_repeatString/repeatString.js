const repeatString = function (string, number) {
  if (number < 0) return "ERROR";
  let combinedString = "";
  while (number) {
    combinedString += string;

    number--;
  }
  return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
