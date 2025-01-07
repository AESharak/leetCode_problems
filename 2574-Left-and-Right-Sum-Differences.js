/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftSum = [];
  let rightSum = [];
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum.push(leftCount);
    leftCount += nums[i];
  }

  let lastIndexRight = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    rightSum.unshift(rightCount);
    rightCount += nums[lastIndexRight--];
  }
    return leftSum.map((num, index)=> Math.abs( num - rightSum[index]));

};