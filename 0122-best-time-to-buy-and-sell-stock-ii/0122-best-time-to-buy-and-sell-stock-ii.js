/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profits = [0]; 
    // var lowestProfit = prices[0];
    for(let i = 1; i < prices.length; i++) {
        const lowestProfit = prices[i-1];
        if (lowestProfit <= prices[i]) {
            var profit = prices[i] - lowestProfit;
            console.log(lowestProfit,prices[i],profit);
            profits.push(profit);
        }
        // else {
        //         lowestProfit = prices[i];
        // }    
    }
    return profits.reduce((a,b) => a+b, 0); 
};