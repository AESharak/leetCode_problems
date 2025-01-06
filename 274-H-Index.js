/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    return citations.sort((a, b) => b - a)
        .filter((citation, index) => citation > index).length;
};