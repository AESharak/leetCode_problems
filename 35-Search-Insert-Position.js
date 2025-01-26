/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const targetIfFound = nums.indexOf(target);
    if (targetIfFound !== -1) return targetIfFound;
    let i =0;
    while (nums[i] < target){
        i++;
    }
    return i;
};