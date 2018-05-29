'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let z = 0; z < arr.length; z ++){
    for(let k = z; k < arr.length; k++){
      if(arr[k] < arr[z]){
        let temp = arr[z];
        arr[z] = arr[k];
        arr[k] = temp;
      }
    }
  }
  // Your sorting code
  return arr
}

function binarySearch (search, array) {
  for(let z = 0; z < array.length; z ++){
    if(array[z] == search){
      return z;
    }
  }
  // Your searching code
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

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
