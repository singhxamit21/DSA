//Best Time to Buy and Sell Stock is a problem we have the stock price of future stocks in array format
//so you have to tell on which day you will buy and on which day you will sell so that you can have a maximum profit


const maxProfitWithDays = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  let buyDay = 0;
  let sellDay = 0;
  let tempBuyDay = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      tempBuyDay = i;
    }

    const potentialProfit = prices[i] - minPrice;
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
      buyDay = tempBuyDay;
      sellDay = i;
    }
  }

  return {
    maxProfit,
    buyDay,
    sellDay
  };
};

const result = maxProfitWithDays([7, 1, 5, 3, 6, 4]);
console.log(`Max profit: ${result.maxProfit}, Buy on day ${result.buyDay}, Sell on day ${result.sellDay}`);
