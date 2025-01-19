/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numsOccur = {};
  let oldVar, newVar;
  for (let i = 0; i < nums.length; i++) {
    const numsStr = nums[i].toString();
    if (!(numsStr in numsOccur)) {
      numsOccur[numsStr] = i;
    } else {
      newVar = i;
      oldVar = numsOccur[numsStr];
      if (Math.abs(oldVar - newVar) <= k) {
        return true;
      }
      numsOccur[numsStr] = i;
    }
  }

  return false;
};
