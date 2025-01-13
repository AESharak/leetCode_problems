/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const smallerThan = [];
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        value++;
      }
    }
    smallerThan.push(value);
    value = 0;
  }
  return smallerThan;
};