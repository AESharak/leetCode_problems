/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++){
        result += helper(s[i]) * (i+1);
    }
    return result;
};

function helper(char){
    return 26 - (char.charCodeAt() - 'a'.charCodeAt());
}