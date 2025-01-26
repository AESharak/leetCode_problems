/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const sorted = num.toString().split("").sort((a,b)=> +a - +b);
    return +(sorted[0]+sorted[2]) + +(sorted[1] + sorted[3])
};