// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  let idxArr1 = [];
  let idxArr2 = [];
  //empty arrays
  if(arr1.length === 0) {
    return arr2;
  } else if(arr2.length === 0) {
    return arr1;
  } else if(arr2.length === 0 && arr1.length === 0){
    return [];
  } 

  // both array contains unique elements
  arr1.forEach((e) => {
    if(!arr2.includes(e)) idxArr1.push(e);
  });
  arr2.forEach((e => {
    if(!arr1.includes(e)) idxArr2.push(e);
  });
  return [...idxArr1,...idxArr2]; 
 
}

diffArray(["snuffleupagus", "cookie monster", "elmo"], ["snuffleupagus", "cookie monster", "elmo"]);

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

