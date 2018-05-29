'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  //sort ganjil
  for (var a = 0; a < testArrayGanjil.length; a++) {
    var target = testArrayGanjil[a]
    for (var b = a - 1; b >= 0 && (testArrayGanjil[b] > target); b--) {
      testArrayGanjil[b + 1] = testArrayGanjil[b]
    }
    testArrayGanjil[b + 1] = target
  }

  //sort genap
  for (var a = 0; a < testArrayGenap.length; a++) {
    var target = testArrayGenap[a]
    for (var b = a - 1; b >= 0 && (testArrayGenap[b] > target); b--) {
      testArrayGenap[b + 1] = testArrayGenap[b]
    }
    testArrayGenap[b + 1] = target
  }

  return arr
}

function binarySearch(search, array) {

  let indexAwal = 0
  let indexAkhir = array.length;

  while (indexAwal <= indexAkhir) {
    let indexMiddle = Math.floor((indexAwal + indexAkhir) / 2)

    if (array[indexMiddle] < search) {
      indexAwal = indexMiddle + 1
    } else if (array[indexMiddle] > search) {
      indexAkhir = indexMiddle - 1
    } else {
      return indexMiddle
    }
  }
  return -1;

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log('Array genap')
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log('Array ganjil')
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
