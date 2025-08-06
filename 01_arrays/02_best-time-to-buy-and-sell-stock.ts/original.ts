function maxProfit(prices: number[]): number {
	let lowest: null | number = null;
	let profit = 0;

	for (let i = 0; i < prices.length - 1; i++) {
		if (lowest === null || prices[i] < lowest) {
			lowest = prices[i];
		}
		const currentProfit = prices[i + 1] - lowest;
		if (currentProfit > profit) {
			profit = currentProfit;
		}
	}
	return profit;
}
