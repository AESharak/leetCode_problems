/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(" ")
    .map((word) => ({
      word: word
        .split("")
        .filter((char) => isNaN(char))
        .join(""),
      order: +word
        .split("")
        .filter((char) => !isNaN(char))
        .join(""),
    }))
    .sort((a, b) => a.order - b.order)
    .map((obj) => obj.word)
    .join(" ");
};