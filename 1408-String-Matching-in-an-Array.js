/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const newWords = words.slice().sort((a, b) => a.length - b.length);
  let found = [];
  for (let i = 0; i < newWords.length; i++) {
    for (let j = i + 1; j < newWords.length; j++) {
      if (newWords[j].includes(newWords[i])) {
        if (!found.includes(newWords[i])) found.push(newWords[i]);
      }
    }
  }
  return found;
};