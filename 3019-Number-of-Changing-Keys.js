/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  const lowerCaseSSplitted = s.toLowerCase();
  let temp;
  let count = -1;
  for (let i = 0; i < lowerCaseSSplitted.length; i++) {
    if (temp !== lowerCaseSSplitted[i]) {
      temp = lowerCaseSSplitted[i];
      count++;
    }
  }
  return count;
};