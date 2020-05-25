// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
	for (var j = 0; j < arguments[0].length; j++) {
		for (var i = 1; i < arguments.length; i++) {
			if (arguments[i] === arguments[0][j]) {
				delete arguments[0][j];
			}
		}
	}
	return arguments[0].filter(Boolean);
}
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // 0, 1, 3, 3
