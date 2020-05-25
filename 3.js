// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
	const map = {};
	let left = 0;
	return s.split("").reduce((max, curr, idx) => {
		left = map[curr] >= left ? map[curr] + 1 : left;
		map[curr] = idx;
		return Math.max(max, idx - left + 1);
	}, 0);
}

/*
//left is the number of repeating letters
// first iteration "abcabcbb"
left = 0
map = 
{
  'a': 0,
}
max = (0, 0-0+1) = 1

//second iteration
left =  0
map = {
  'a' : 0,
  'b' : 1
}
max = (1, 1-0+1) = 2

//third iteration
left = 0
map = {
  'a' : 0,
  'b' : 1,
  'c' : 2
}
max = (2, 2-0+1) = 3

//fourth iteration
left = 1;
map = {
  'a' : 3,
  'b' : 1,
  'c' : 2
}
max=(3, 3-1+1) = 3

//fifth iteration
left = 2 
map = {
  'a' : 3,
  'b' : 4,
  'c' : 2
}
max = (3, 4-2+1) = 3
*/
