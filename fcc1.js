// return largest numbers in subarrays
function largestOfFour(arr) {
	let results = [];
	let max = {};
	for (var i = 0; i < arr.length; i++) {
		max[i] = arr[i][0];
		for (var j = 0; j < arr[i].length; j++) {
			max[i] = Math.max(max[i], arr[i][j]);
		}
		results.push(max[i]);
	}
	return results;
}

largestOfFour([
	[17, 23, 25, 12],
	[25, 7, 34, 48],
	[4, -10, 18, 21],
	[-72, -3, -17, -10],
]);
