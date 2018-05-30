
'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var booleanProcess = true;
    var comparison = arr[i];
    for (var j = 0; j < i; j++) {
      var container = arr[j];
      if (comparison <= container && booleanProcess) {
        arr.splice(i, 1);
        if (j === 0) {
        arr.unshift(comparison);
        booleanProcess = false;
        } else {
        arr.splice(j, 0, comparison);
        booleanProcess = false;
        }
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  var beginningIndex = 0;
  var endingIndex = array.length - 1;
  var booleanStopper = false;
  while (booleanStopper !== true) {
    if (beginningIndex >= endingIndex ) {
      booleanStopper = true;
      return -1;
    }
    var midIndex = Math.floor((beginningIndex + endingIndex) / 2);
    var midContent = array[midIndex]
    // console.log(midContent);
    // console.log(midIndex);
    if (midContent === search) {
      booleanStopper = true;
      return midIndex;
    } else if (midContent < search) {
      let nxtArray = [];
      beginningIndex = midIndex + 1;
    } else if (midContent > search) {
      let nxtArray = [];
      endingIndex = midIndex - 1;
    }
  }
  // console.log(array[mid]);
  // return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted);
console.log(binarySearch(20, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(arrayGanjilSorted);
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binarySearch}
