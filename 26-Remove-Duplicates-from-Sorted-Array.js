/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = 0;
    let temp;
    for (let i =0 ; i< nums.length; i++){
        if (nums[i] !== temp){
            nums[k] = nums[i];
            temp = nums[i];
            k++
        }
    }
    return k
};