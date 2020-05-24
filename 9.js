// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
	return x == x.toString().split("").reverse().join("");
};
