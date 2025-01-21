/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = (numsObj[nums[i]] || 0) + 1;
  }
  return Object.entries(numsObj).reduce((acc, currVal) => {
    if (currVal[1] > 1) {
      return acc;
    } else {
      return acc + +currVal[0];
    }
  }, 0);
};