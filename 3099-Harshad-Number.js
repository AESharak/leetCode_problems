/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  const digitsSum = x
    .toString()
    .split("")
    .map((digit) => +digit)
    .reduce((acc, currVal) => acc + currVal, 0);
  return x % digitsSum === 0 ? digitsSum : -1;
};