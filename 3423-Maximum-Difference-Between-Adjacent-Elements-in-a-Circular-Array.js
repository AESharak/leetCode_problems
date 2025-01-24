/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  let maxDifference = Math.abs(nums[0] - nums.at(-1));
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const difference = Math.abs(nums[i] - nums[i + 1]);
    if (difference > maxDifference) maxDifference = difference;
  }
  return maxDifference;
};