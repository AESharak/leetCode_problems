/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  while(num.endsWith("0")){
    num = num.slice(0,-1);
  }
  return num;
};