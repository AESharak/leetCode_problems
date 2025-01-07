/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
   const wordChar = word.split("");
  const firstPart = wordChar.slice(0, wordChar.indexOf(ch) + 1).reverse();
  return firstPart.join("") + wordChar.slice(wordChar.indexOf(ch) + 1).join("");
};