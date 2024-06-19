//Best Time to Buy and Sell Stock is a problem we have the stock price of future stocks in array format
//so you have to tell on which day you will buy and on which day you will sell so that you can have a maximum profit


function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))    //output 5
console.log(maxProfit([7,6,4,3,1]))      //output 0