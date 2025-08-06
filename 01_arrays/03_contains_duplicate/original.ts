function containsDuplicate(nums: number[]): boolean {
	const map = {};
	for (const number of nums) {
		if (Object.hasOwnProperty.call(map, number)) {
			return true;
		}
		map[number] = "";
	}
	return false;
}
