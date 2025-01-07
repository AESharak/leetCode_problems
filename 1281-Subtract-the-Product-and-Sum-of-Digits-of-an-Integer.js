/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return (n.toString().split("").reduce((product, char) => parseInt(char) * product,1) -
    n.toString().split("").reduce((product, char) => parseInt(char) + product,0));
    
};