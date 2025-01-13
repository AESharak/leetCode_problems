/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const twoNums = {};
  for (let i = 0; i < nums.length; i++) {
    twoNums[nums[i]] = (twoNums[nums[i]] || 0) + 1;
  }
  return Object.keys(twoNums).filter(key => twoNums[key] >=2).map(num => +num);
};
