const sumAll = function (min, max) {
  let sum = 0;
  if (
    min > 0 &&
    max > 0 &&
    typeof min === "number" &&
    typeof max === "number"
  ) {
    if (min > max) {
      for (max; max <= min; max++) {
        console.log(min, max);
        sum += max;
      }
    } else {
      for (min; min <= max; min++) {
        console.log(min, max);
        sum += min;
      }
    }
  } else return "ERROR";
  console.log(sum);
  return sum;
};

// Almost the same solution, I could use isInteger() method to filter type of variable from arguments and just use temp variable to switch values instead using two loops in if code blocks

// Do not edit below this line
module.exports = sumAll;
