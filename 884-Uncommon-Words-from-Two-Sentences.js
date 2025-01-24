/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const occObj = {};
  const oneArr = [...s1.split(" "), ...s2.split(" ")];
  for (let i = 0; i < oneArr.length; i++) {
    occObj[oneArr[i]] = (occObj[oneArr[i]] || 0) + 1;
  }
  return Object.keys(occObj).filter((key) => occObj[key] === 1);
};
