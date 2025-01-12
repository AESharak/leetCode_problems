/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
   var firstNums = nums.slice(0,n);
   var lastNums = nums.slice(n,nums.length);
    var newNums = [];
    for (let i = 0; i < n; i++){
        newNums.push(firstNums[i]);
        newNums.push(lastNums[i]);
    }
    return newNums;
};