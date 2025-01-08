/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const copy = [...nums];

    for (let i = 0; i < nums.length; i++){
        nums[i] = copy[copy[i]];
    }
    return nums;
};