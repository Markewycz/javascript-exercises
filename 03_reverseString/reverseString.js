const reverseString = function (string) {
  let stringIndex = string.length - 1;
  let reversed = "";
  while (stringIndex >= 0) {
    reversed += string.charAt(stringIndex);

    stringIndex--;
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
