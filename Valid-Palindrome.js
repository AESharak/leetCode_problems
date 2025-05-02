/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    while (start < end && !isAlphanNumeric(s[start].toLowerCase())) {
      start++;
    }
    while (start < end && !isAlphanNumeric(s[end].toLowerCase())) {
      end--;
    }
    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
    start++;
    end--;
  }
  return true;
};

function isAlphanNumeric(char) {
  if (
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
    (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
    char === \\
  ) {
    return true;
  }
  return false;
}

/*
 an alternative with more space will be taken 
 var isPalindromeMaxSpace = function (s) {
  let lowerCasedStr = s.toLowerCase();
  const arr = [];
  for (let i = 0; i < lowerCasedStr.length; i++) {
    if (
      (lowerCasedStr.charCodeAt(i) >= 97 &&
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

*/