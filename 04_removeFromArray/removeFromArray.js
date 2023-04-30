const removeFromArray = function (arr, ...numbers) {
  // for (num of numbers) {
  //   for (arrNum of arr) {
  //     if (arrNum === num) {
  //       arrNum -= 1;
  //       arr.splice(arrNum, 1);
  //     }
  //   }
  // }
  const newArray = [];

  arr.forEach((item) => {
    if (!numbers.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};
// Almost got it, forgot about forEach and includes which makes perfect pair for tasks like this
// Do not edit below this line
module.exports = removeFromArray;
