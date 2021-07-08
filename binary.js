'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
      for (var j = i+1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            // console.log(values[i], values[j]);
              var tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = tmp;
              // console.log(values[i], values[j]);
          }
      }
  }
  // console.log("master" + testArrayGenap);
  // console.log("master" + testArrayGanjil);
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var middle = Math.floor(array.length / 2)

  if(search === array[middle]){
    return middle;
  } else if(search > array[middle]){
    return binary_search(search, array.splice(middle, array.length-1));
  } else if(search < array[middle]){
    return binary_search(search,array.splice(0, middle));
  } else {
    return -1
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
