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

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
	var temp = [];
	arr[1]
		.toLowerCase()
		.split("")
		.forEach((e) => {
			temp.push(arr[0].toLowerCase().split("").includes(e));
			console.log(temp);
		});
	return temp.includes(false) ? false : true;
}
mutation(["hello", "Hello"]);

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

function getIndexToIns(arr, num) {
	let arr_sorted = arr.sort((a, b) => a - b);
	if (arr_sorted.length === 0) {
		return 0;
	} else if (num >= Math.max(...arr_sorted)) {
		return arr_sorted.length;
	}
	for (var i = 0; i < arr_sorted.length; i++) {
		if (num <= arr_sorted[i]) {
			return arr_sorted.indexOf(arr_sorted[i]);
		}
	}
}
getIndexToIns([], 1);

// remove all falsy values
function bouncer(arr) {
	let newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (Boolean(arr[i]) !== false) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

bouncer([7, "ate", "", false, 9]);

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
function frankenSplice(arr1, arr2, n) {
	let arr3 = arr2.slice();
	arr1.forEach((e, idx) => {
		arr3.splice(n + idx, 0, e);
	});
	return arr3;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  let result = [];
  str.toLowerCase().split(' ').forEach(e => {
    result.push(e[0].toUpperCase().concat(e.slice(1)));
  });
  return result.join(' ');
}
titleCase("sHoRt AnD sToUt")
