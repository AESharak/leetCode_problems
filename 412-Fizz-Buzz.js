/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    for (let i = 0; i < n ; i++){
        let element = i + 1;
        if (element % 3 === 0 && element % 5 === 0  ){
            result[i] = \FizzBuzz\;
        }else if (element % 3 === 0){
            result[i] = \Fizz\;
        }else if (element % 5 === 0){
            result[i] = \Buzz\;
        }else {
        result[i] = element.toString();
        }
    }
    return result
};