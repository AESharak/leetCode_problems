/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const stonesOccur = {};
    let foundTimes = 0;
    for (let i = 0 ; i < stones.length; i++){
        stonesOccur[stones[i]] = (stonesOccur[stones[i]] || 0) + 1;
    }
    for (let i = 0 ; i < jewels.length ; i++){
        if (stones.includes(jewels[i])) {
            foundTimes += stonesOccur[jewels[i]]
        }
    }
    return foundTimes;
};