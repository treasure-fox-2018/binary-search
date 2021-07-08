'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {
    // mark 1st element as sorted -> start from index 1 not 0
    // 'extract' element X
    var extracted = arr[i];

    // for j = lastSortedIndex to 0 && if current element j > X
    for (var j = i-1; j > -1 && arr[j] > extracted; j--) {
      // move sorted element to the right by 1
      arr[j+1] = arr[j];
    }

    // insert X here
    arr[j+1] = extracted;
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  var leftIndex = 0;
  var rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    var midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (array[midIndex] === search) {
      return midIndex;
    } else if (search < array[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
