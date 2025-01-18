/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var  isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const sObj = {};
  const tObj = {};
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = (sObj[s[i]] || 0) + 1;
    tObj[t[i]] = (tObj[t[i]] || 0) + 1;
  }
  return Object.keys(sObj).every(key => sObj[key] === tObj[key]);
}