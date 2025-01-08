/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  let min = calculateDigitSum(nums[0]);

  nums.forEach((num) => {
    let sum = calculateDigitSum(num);
    if (sum < min) min = sum;
  });
  return min;
};

const calculateDigitSum = (num) =>
  num
    .toString()
    .split("")
    .reduce((acc, currVal) => acc + +currVal, 0);