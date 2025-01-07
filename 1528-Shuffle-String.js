/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const kidWithMostKandies = Math.max(...candies);
  return candies.map((kidCandies) =>
    kidCandies + extraCandies >= kidWithMostKandies ? true : false
  );
};