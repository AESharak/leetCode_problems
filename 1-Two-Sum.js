/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  let startIdx = 0;
  let endIdx = sortedNumbers.length - 1;
  while (startIdx !== endIdx) {
    let sum = sortedNumbers[startIdx] + sortedNumbers[endIdx];
    if (sum > target) {
      endIdx--;
    } else if (sum < target) {
      startIdx++;
    } else {
      break;
    }
  }
  return [
    numbers.indexOf(sortedNumbers[startIdx]),
    numbers.lastIndexOf(sortedNumbers[endIdx]),
  ];
};