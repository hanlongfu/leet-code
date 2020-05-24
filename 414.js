// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

var thirdMax = function (nums) {
	var unique = [...new Set(nums)];
	return unique.length >= 3
		? unique.sort((a, b) => b - a)[2]
		: Math.max(...unique);
};
