/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((_, index,arr)=> arr.reduce((acc,currVal,i)=>{
        if (index >=i){
            return acc + currVal
        }
        return acc;
    } ,0));
};