//Excercise 6 - Mergue arrays (solved)

/*
---> Function takes two arrays.
---> Function return a new array containing
     all elements from the first two 
*/

function mergeArrays(arr1, arr2) {
  // Your code goes here...
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2], [3, 4]));

//=============================================
//Excercise 7 - Is Item Omnipresent
/*
---> Function takes an array of nested arrays
---> The excercise provides an item that needs to be found
     within the nested arrays.
---> Should return true if the item is present in all of the arrays.
---> Otherwise returns false.
*/

function isItemOmnipresent(arrayOfArrays, item) {
  // Your code goes here...
}

const nestedArrays = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];

console.log(isItemOmnipresent(nestedArrays, 3));
