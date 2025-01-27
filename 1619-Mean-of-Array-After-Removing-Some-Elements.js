/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  const removedCount = Math.floor(arr.length * 0.05);
  const trimmedArr = arr.slice(removedCount, arr.length - removedCount);
  return trimmedArr.reduce((acc, cur) => acc + cur, 0) / trimmedArr.length;
};