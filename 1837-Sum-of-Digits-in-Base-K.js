/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    return (n).toString(k).split("").reduce((acc,currVal)=> acc + +currVal,0)
};