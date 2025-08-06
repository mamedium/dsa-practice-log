function containsDuplicate1(nums: number[]): boolean {
	const seen = new Set<number>();
	for (const num of nums) {
		if (seen.has(num)) return true;
		seen.add(num);
	}
	return false;
}

// one liner but bad for interview
function containsDuplicate2(nums: number[]): boolean {
	return new Set(nums).size !== nums.length;
}
