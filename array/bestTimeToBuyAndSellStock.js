//Best Time to Buy and Sell Stock is a problem we have the stock price of future stocks in array format
//so you have to tell on which day you will buy and on which day you will sell so that you can have a maximum profit


const maxProfit = (prices) => {
    let minPrice = prices[0]; // Assume the first day is the cheapest to buy
    let maxProfit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
      // console.log(currentPrice);
  
      // Update minimum price if a lower price is found
      minPrice = Math.min(minPrice, currentPrice);
      // console.log(minPrice);
  
      // Calculate potential profit for selling today
      const potentialProfit = currentPrice - minPrice;
      // console.log(potentialProfit);
  
      // Update maxProfit if a higher profit is found
      maxProfit = Math.max(maxProfit, potentialProfit);
      // console.log(maxProfit);
    }
  
    return maxProfit;
  };
  
  const prices = [7, 1, 5, 3, 6, 4]; //list of stock prices for each day
  const profit = maxProfit(prices);
  console.log("Maximum profit:", profit);

console.log(maxProfit([7,1,5,3,6,4]))    //output 5
console.log(maxProfit([7,6,4,3,1]))      //output 0