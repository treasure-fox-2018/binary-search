'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < i; j++){
      let number = arr[i]
      if(arr[i] < arr[j]){
        arr[i] = arr [j]
        arr[j] = number
      }
    }
    debugger;
  }
  return arr
}

function binary_search (search, array) {
  let mid = Math.floor(array.length/2)
  if (array[mid] === search){
    return mid
  }
  else if (search < array[mid]){
    let arrayNew = array.slice(0, mid)
    return binary_search (search, arrayNew)
  }
  else if (search > array[mid]){
    let arrayNew = array.slice(mid + 1, (array.length))
    return binary_search (search, arrayNew)
  }
  else {
    return -1;
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted)) //0
console.log(binary_search(10, arrayGenapSorted)) // 1/2
console.log(binary_search(33, arrayGenapSorted)) //-1

console.log(binary_search(53, arrayGanjilSorted)) // 3/4
console.log(binary_search(3, arrayGanjilSorted)) //0
console.log(binary_search(2, arrayGanjilSorted))//-1

module.exports = {
  binary_search
}
