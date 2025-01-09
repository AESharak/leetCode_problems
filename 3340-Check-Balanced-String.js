/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  const nums = num
    .split("")
    .map((num) => +num)
    .reduce(
      (acc, currVal, index) => {
        index % 2 === 0
          ? (acc.evenResult += currVal)
          : (acc.oddResult += currVal);
        return acc;
      },
      { oddResult: 0, evenResult: 0 }
    );
  return nums.evenResult === nums.oddResult;
};