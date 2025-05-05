/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyDay = 0;
  let sellDay = 1;
  let maxP = 0;

  while (sellDay < prices.length) {
    if (prices[buyDay] < prices[sellDay]) {
      const profit = prices[sellDay] - prices[buyDay];
      maxP = Math.max(maxP, profit);
    } else {
      buyDay = sellDay;
    }
    sellDay += 1;
  }
  return maxP;
};