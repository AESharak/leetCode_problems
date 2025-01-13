/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    if (nums.every(num => num% 3 === 0)) return 0;
    let result = 0;
    nums.forEach(num=>{
        if (num % 3 === 1 || num % 3 ===2) {
            result++;
        }
    })
    return result;

};