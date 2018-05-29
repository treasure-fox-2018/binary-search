'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var a = 0; a < arr.length; a++) {
    for (var b = a+1; b < arr.length; b++) {
      if (arr[b] < arr[a]) {
        var contain = arr[a]
        arr[a] = arr[b]
        arr[b] = contain
      }
    }
  }
  return arr
}

function binary_search(search, array) {
  // Your searching code
  // console.log(search)
  var index = (array.length - 1) / 2
  var spliceArrLow = array.slice(0, index)
  var spliceArrHigh = array.slice(index, array.length-1)
  console.log(spliceArrLow, 'high : ', spliceArrHigh , search)
  if (search < array[index]) {
    for (var a = 0; a < spliceArrLow.length; a++) {
      var idx;
      if (search === spliceArrLow[a]) {
        return a
      }
    }
    if (idx === undefined) {
      return -1
    }
  } else if (search > array[index]) {
    for (var b = 0; b < spliceArrHigh.length; b++) {
      var idx;
      if (search === spliceArrHigh[b]) {
        return idx = b + spliceArrLow.length
      }
    }
    if (idx === undefined) {
      return -1
    }
    
  } else if (search === array[index]){
    for (var c = 0; c < spliceArrLow.length; c++) {
      var idx;
      if (search === spliceArrLow[c]) {
        return idx = c
      }
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(12, arrayGenapSorted))
console.log(binary_search(32, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}