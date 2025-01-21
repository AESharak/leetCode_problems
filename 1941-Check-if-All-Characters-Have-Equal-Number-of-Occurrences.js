/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const sObj = {};
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = (sObj[s[i]] || 0) + 1;
  }
  return Object.values(sObj).every((val) => val === sObj[s[0]]);
};