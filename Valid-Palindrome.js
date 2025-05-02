/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let lowerCasedStr = s.toLowerCase();
  const arr = [];
  for (let i = 0; i < lowerCasedStr.length; i++) {
    if (
     ( lowerCasedStr.charCodeAt(i) >= 97 &&
      lowerCasedStr.charCodeAt(i) <= 122) ||
      (lowerCasedStr.charCodeAt(i) >= 48 && lowerCasedStr.charCodeAt(i) <= 57)
    ) {
      arr.push(lowerCasedStr[i]);
    }
  }
 
  const reversedArr = arr.slice().reverse();

  for (let index = 0; index < reversedArr.length; index++) {
    if (reversedArr[index] !== arr[index]) {
      return false;
    }
  }
  return true;
};