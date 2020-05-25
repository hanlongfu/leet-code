// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
	let sub = str.substr(-target.length, target.length);
	return sub === target;
}

confirmEnding("Bastian", "n");

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
	let sub = [];
	for (let i = 0, j = arr.length; i < j; i += size) {
		sub.push(arr.slice(i, i + size));
	}
	return sub;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
