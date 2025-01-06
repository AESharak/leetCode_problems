/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    var splittedS = s.split("");
    var splittedT = t.split("");
    result = 0;
    splittedS.forEach((char,idx)=>{
        if(t.includes(char)){
           result += Math.abs(idx - t.indexOf(char));
        }else{

        result += idx;
        }
    });
    return result ;
};