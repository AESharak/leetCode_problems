/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  let numsNew = [...nums];
  for (let i = 0; i < k; i++) {
    numsNew[numsNew.indexOf(Math.min(...numsNew))] =
      Math.min(...numsNew) * multiplier;
  }
  return numsNew;
};
