/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const product = n.toString().split("").reduce((product, char) => parseInt(char) * product,1);
    const sum = n.toString().split("").reduce((product, char) => parseInt(char) + product,0);
    return product - sum;
};