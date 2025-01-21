/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const firstHalf = s.toLowerCase().slice(0, s.length / 2);
  const secondHalf = s.toLowerCase().slice(s.length / 2);
  if (containsVowels(firstHalf) === containsVowels(secondHalf)) return true;
  return false;
};

function containsVowels(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].includes("a") ||
      s[i].includes("e") ||
      s[i].includes("i") ||
      s[i].includes("o") ||
      s[i].includes("u")
    ) {
      count++;
    }
  }
  return count;
}