// Find the kth largest element in an unsorted array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

var findKthLargest = function (nums, k) {
	return nums.sort((a, b) => b - a)[k - 1];
};
