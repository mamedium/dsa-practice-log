function maxProfit(prices: number[]): number {
	let minPrice = Number.POSITIVE_INFINITY;
	let maxProfit = 0;

	for (const price of prices) {
		if (price < minPrice) {
			minPrice = price;
		} else {
			maxProfit = Math.max(maxProfit, price - minPrice);
		}
	}

	return maxProfit;
}
