/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums1Unique = [...(new Set(nums1))];
    const result = [];
    for (let i =0 ; i < nums1Unique.length; i++){
        if (nums2.indexOf(nums1Unique[i]) !== -1){
            result.push(nums1Unique[i]);
        }
    }
    return result
};