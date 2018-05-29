'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
// var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

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

function binarySearch (search, array) {
  // Your searching code
  var mid = array.length/2
  if(array[mid] === search){
    return mid
  }else if(search < array[mid]){
    arr.splice(mid,array.length)
    return binarySearch(search, array)
  }else if(search > array[mid]){
    array.splice(arr[0],mid)
  }
 console.log(search);
 
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
// var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
