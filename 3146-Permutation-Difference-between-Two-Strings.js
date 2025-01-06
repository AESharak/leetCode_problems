/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    result = 0;
    s.split("").forEach((char,idx)=>{
        if(t.includes(char)){
           result += Math.abs(idx - t.indexOf(char));
        }else{
        result += idx;
        }
    });
    return result ;
};