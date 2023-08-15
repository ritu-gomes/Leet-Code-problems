/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profits = [0]; 
    var lowestProfit = prices[0];
    for(let i = 1; i < prices.length; i++) {
        if (lowestProfit <= prices[i]) {
            var profit = prices[i] - lowestProfit;
            profits.push(profit);
        }else {
                lowestProfit = prices[i];
        }    
    }
    return Math.max(...profits);
};