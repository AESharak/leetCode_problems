/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let digitArr = [];
  nums.slice().forEach((num) => {
    let digits = num.toString().split("");
    for (const digit of digits) {
      digitArr.push(digit);
    }
  });

  return Math.abs(
    nums.reduce((acc, currVal) => acc + currVal, 0) - digitArr.reduce((acc, currVal) => acc + parseInt(currVal), 0)
  );
};
