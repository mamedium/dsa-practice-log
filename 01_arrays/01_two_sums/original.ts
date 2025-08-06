// nums -> list of numbers 1, 2, 3, 4
// target -> 5

// return indexes of two numbers that sums up to the target
// > may assume each input would have exactly one solution
// > not allowed to use same element twice
// > the answer can be in any order

// for i in nums.length

// map = {}

// pairNumber = target - nums[i]

// if map.hasOwnProperty(pairNumber)
//     return [i, map[pairNumber]]
// else
//     map.pairNumber = i

// return []

function twoSum(nums: number[], target: number): number[] {
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (Object.hasOwnProperty.call(map, complement)) {
			return [i, map[complement]];
		}
		map[nums[i]] = i;
	}
	return [];
}
