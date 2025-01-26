/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let result = 0;
  const length = strs.length
  for (let i = 0; i < length; i++) {
    const convertingToNumber = +strs[i];
    if (isNaN(convertingToNumber)) {
      result = Math.max(result, strs[i].length);
    } else {
      result = Math.max(result, convertingToNumber);
    }
  }
  return result;
};