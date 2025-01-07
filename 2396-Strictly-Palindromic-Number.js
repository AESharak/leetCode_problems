/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i < n - 1; i++) {
    let noRepresentation = n.toString(i);
    console.log(noRepresentation);
    if (!isPalindrome(noRepresentation)) return false;
  }

  return true;
};

function isPalindrome(number) {
 const numberStr = number.toString();
  const reversedStr = numberStr.split("").reverse().join("");
  return numberStr === reversedStr;
}