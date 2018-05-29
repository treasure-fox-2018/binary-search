'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var sort = []
  while (arr.length>0) {
    var min = arr[0]
    var idxMin = 0
    for (var i = 0; i < arr.length; i++) {
      if(min>arr[i]){
        min = arr[i]
        idxMin = [i]
      }
    }
    sort.push(min)
    arr.splice(idxMin,1)
  }
  return sort
}

function binary_search (search, array) {
  // Your searching code
  var min = 0
  var max = array.length-1
  var mid
  while(min<=max){
    mid = Math.floor((max+min)/2)
    if (array[mid]==search) {
      return mid;
    }
    else if (array[mid]<search) {
      min = mid+1
    }
    else {
      max = mid-1
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
