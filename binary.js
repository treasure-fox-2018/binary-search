'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var min = 0;

  for (var i = 0; i < arr.length; i++) {
      for (var j = i+1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
              min = arr[i];
              arr[i] = arr[j];
              arr[j] = min;
          }
      }
  }
  return arr;
}

// SET `firstIndex` at 0
// SET `lastIndex` at array.length - 1
// SET `midIndex` at SUM of first and last index divided by 2

// WHILE array[midIndex] is NOT EQUAL to the search value AND the first index < last index
//  IF search value < array[midIndex] THEN
//    `lastIndex` is the midIndex - 1
//  ELSE IF seach value > array[midIndex] THEN
//    `firstIndex` is midIndex + 1
//  END IF
// END WHILE
// IF array[midIndex] DOES NOT EQUAL TO the search value
//   RETURN -1 //because the number is non-existent in the array
// END IF

function binary_search (search, array) {
  var firstIndex = 0;
  var lastIndex = array.length - 1;
  var midIndex = Math.floor((firstIndex + lastIndex) / 2);
  // console.log(midIndex);

  while (array[midIndex] != search && firstIndex < lastIndex) {
    if (search < array[midIndex]) {
      lastIndex = midIndex - 1;
    } else if (search > array[midIndex]) {
      firstIndex = midIndex + 1;
    }
    midIndex = Math.floor((firstIndex + lastIndex) / 2);
  }
  if (array[midIndex] !== search) {
    return -1;
  }
  return midIndex;
}

// var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
// var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

// var genapSorted = [8, 10, 10, 18, 22, 22, 32, 40, 90]
// var ganjilSorted = [3, 21, 31, 53, 53, 55, 77, 85, 89]

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))
console.log(binary_search(31, arrayGanjilSorted))
console.log(binary_search(77, arrayGanjilSorted))

module.exports = {
  binary_search
}
