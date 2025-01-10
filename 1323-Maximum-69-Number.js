/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const splittedDigits = num.toString().split("");
  if (splittedDigits.every((num) => num === "9")) return num;
  splittedDigits[splittedDigits.indexOf("6")] = "9";
  return +splittedDigits.join("");
};