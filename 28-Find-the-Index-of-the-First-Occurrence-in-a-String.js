/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === \\) return 0;
    const haystackLen = haystack.length;
    const needleLen = needle.length;

    for (let i = 0 ; i <= haystackLen - needleLen; i++){
        let matched = true;
        for (let j = 0; j < needleLen; j++){
            if (haystack[i+j] !== needle[j]){
                matched = false;
                break;
            }
        }
        if (matched) return i;
    }

    return -1;
};