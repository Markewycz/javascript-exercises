const leapYears = function (year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
// Do not edit below this line
module.exports = leapYears;

// I had problem with logic here
// const leapYears = function (year) {
//   if (year % 100 === 0 && !(year % 400 === 0) && !(year % 4 ===)) {
//     return false;
//   } else if (year % 4 === 0 && year % 400 === 0) {
//     return true;
//   }
// };

// NEED TO PRACTICE IT
