'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var arr2 = [];

while (arr.length > 0) {
  var index = 0;
  var check = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (check > arr[i]) {
      check = arr[i];
      index = i;
    }
  }
  arr2.push(check);
  arr.splice(index, 1);
}
return arr2;
}

function binary_search (search, array) {
  if (search === array[Math.floor(array.length / 2)]) {
    return Math.floor(array.length / 2);
  }else if (search !== array[Math.floor(array.length / 2)]) {
    if (search > array[Math.floor(array.length / 2)]) {
      array.splice(0, [Math.floor(array.length / 2)] + 1);
      return binary_search(search, array)
    }else if (search < array[Math.floor(array.length / 2)]) {
      array.splice(Math.floor(array.length / 2), Math.ceil(array.length / 2));
      return binary_search(search, array)
    }
  }
  return -1;
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
/*
[ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
[ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
[ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
[ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
[ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
[ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]
*/
