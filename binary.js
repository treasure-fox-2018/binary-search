
'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var booleanProcess = false;
    var comparison = arr[i];
    for (var j = 0; j < i; j++) {
      var container = arr[j];
      if (comparison < container) {
        arr.splice(i, 1);
        if (j === 0) {
        arr.unshift(comparison);
        booleanProcess = true;
        } else {
        arr.splice(j, 0, comparison);
        booleanProcess = true;
        }
      }
    }
    if (booleanProcess) {
      i++
    }
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
