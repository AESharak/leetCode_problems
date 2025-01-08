/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const positive = nums.filter((num) => num >= 0);
  const negative = nums.filter((num) => num < 0);
  let result = [];
  let isPositive = true;
  let j = 0;
  let k = 0;
  nums.forEach((_) => {
    isPositive ? result.push(positive[k++]) : result.push(negative[j++]);
    isPositive = !isPositive;
  });
  return result;
};