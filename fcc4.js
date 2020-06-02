// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//arr is arguments[0]
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

//arr is arguments[0]
function destroyer(arr) {
	//arr1 is arr[>= 1]
	var arr1 = Array.from(arguments).slice(1);

	//arr is arguments[0]
	arr = arr.filter((e) => {
		return arr1.includes(e) ? false : true;
	});

	// return updated arr
	return arr;
}
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // 0, 1, 3, 3

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

//Solution 1
function whatIsInAName(collection, source) {
	var srcKeys = Object.keys(source);
	console.log(srcKeys); //["apple", "bat"]
	// filter the collection
	return collection.filter((obj) => {
		for (var i = 0; i < srcKeys.length; i++) {
			if (
				!obj.hasOwnProperty(srcKeys[i]) ||
				obj[srcKeys[i]] !== source[srcKeys[i]]
			) {
				return false;
			}
		}
		return true;
	});
}
whatIsInAName(
	[{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
	{ apple: 1, bat: 2 }
);

// Solution 2
function whatIsInAName(collection, source) {
	var srcKeys = Object.keys(source);
	return collection.filter(function (obj) {
		return srcKeys.every(function (key) {
			return obj.hasOwnProperty(key) && obj[key] === source[key];
		});
	});
}

whatIsInAName(
	[{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
	{ apple: 1, bat: 2 }
);
