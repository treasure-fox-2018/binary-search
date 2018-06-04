'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var temp = ''
  for(var i = 0; i < arr.length-1; i++){
    var min = i
    for(var j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j
      }

      if( min !== 1){
        temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var min = 0
  var max = array.length -1
  while(min<=max){
    var mid = Math.floor((max+min)/2)
    if(array[mid] === search){
      return mid
    }else if(array[mid] > search){
      max = mid-1
    }else if(array[mid] < search){
      min = mid+1
    }
  }
    return -1

  
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(90, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
