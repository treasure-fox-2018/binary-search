'use strict';

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  
  for(var x=0; x<arr.length; x++) {
    var bun=arr[x]
    for(var y=x-1; y>=0; y--) {

      if(arr[y]>bun) {
        arr[y+1]=arr[y]
      } else {
        break
      }
    }
    arr[y+1]=bun
  }

  return arr
}

function binary_search(search, array) {
  let indexMin = 0;
  let indexMax = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    let checkIndex = Math.floor((indexMin + indexMax) / 2);
    if (array[checkIndex] > search) {
      indexMax = checkIndex;
    } else if (array[checkIndex] < search) {
      indexMin = checkIndex;
    } else {
      return checkIndex;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);
// Driver code
console.log(binary_search(8, arrayGenapSorted));
console.log(binary_search(10, arrayGenapSorted));
console.log(binary_search(33, arrayGenapSorted));

console.log(binary_search(53, arrayGanjilSorted));
console.log(binary_search(3, arrayGanjilSorted));
console.log(binary_search(2, arrayGanjilSorted));

module.exports = {
  binary_search,
};
