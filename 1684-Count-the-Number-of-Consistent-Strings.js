/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    return words.filter(word => 
        // Check if every character in the word is included in allowed
        [...word].every(char => allowed.includes(char))
    ).length;
};