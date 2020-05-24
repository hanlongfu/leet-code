// Given an input string, reverse the string word by word.
// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.

var reverseWords = function (s) {
	var arr = s.trim().split(" ");
	var newArr = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] !== "") {
			newArr.push(arr[i]);
		}
	}
	return newArr.join(" ");
};
