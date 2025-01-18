/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     const uniqueNums = [...(new Set(nums))];
        if (uniqueNums.length !== nums.length) return true;
        return false;
};