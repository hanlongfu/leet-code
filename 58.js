// Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
// return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

var lengthOfLastWord = function (s) {
	var arr = s.trim().split(" ");
	return arr[arr.length - 1] !== "" ? arr[arr.length - 1].length : 0;
};
