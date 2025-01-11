/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let startIdx = 0;
  let endIdx = numbers.length - 1;

  while (startIdx !== endIdx) {
    let sum = numbers[startIdx] + numbers[endIdx];
    if (sum > target) {
      endIdx--;
    } else if (sum < target) {
      startIdx++;
    } else {
      break;
    }
  }
  return [startIdx + 1, endIdx + 1];
};