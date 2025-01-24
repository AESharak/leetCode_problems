/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  const result = [];
  for (const word of words) {
    const temp = word.split(separator).filter((word) => word !== "");
    result.push(temp);
  }
  return result.flat();
};