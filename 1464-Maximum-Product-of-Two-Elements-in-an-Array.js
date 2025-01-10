/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sortedNums = nums.slice().sort((a,b) => a-b);
    return (sortedNums[nums.length - 1] -1)* (sortedNums[nums.length - 2] - 1); 
};