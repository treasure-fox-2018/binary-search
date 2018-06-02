'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i = 0; i<arr.length; i++){
    var min = i
    for(var j = i; j<arr.length; j++){
      if(arr[j]<arr[min]){
        min = j;
      }
    }
    if(min != i){
      var temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  // console.log(arr)
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var arrAwal=0
  var arrAkhir=array.length-1
    while(arrAwal <= arrAkhir){
      var mid=Math.floor((arrAkhir+arrAwal)/2)
      if(array[mid] === search){
        return mid
      }
      if(array[mid] > search){
        arrAkhir=mid-1

      }else {
        arrAwal=mid+1
      }
      // console.log(mid)
      // debugger
    }
    return -1
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
