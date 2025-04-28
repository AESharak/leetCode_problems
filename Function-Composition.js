/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // Return a function that takes an argument x
    return function(x) {
        // If empty array, return the identity function result
        if (functions.length === 0) {
            return x;
        }
        
        // Start with the initial value
        let result = x;
        
        // Apply each function from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        
        return result;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */