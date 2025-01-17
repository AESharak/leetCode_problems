/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split(\\).reduce((acc,currVal) => acc + +currVal,0);
};