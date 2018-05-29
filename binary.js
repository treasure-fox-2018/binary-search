'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

/*
 PSEUDOCODE SORT

 FOR `a` = 0 to Length of `arr`
  STORE `target` with value `arr[a]`
  FOR `b` = `a-1` to `b` >= 0 AND `arr[b]` > `target`
    `arr[`b` ADD By 1]` = `arr[b]`
    `b` ADD By 1
  ENDFOR
  `arr[`b` ADD By 1]` = `target`
  `a` ADD By 1 
 ENDFOR

 DISPLAY `arr`
*/

function ownSort(arr) {
  //sort ganjil
  for (var a = 0; a < arr.length; a++) {
    var target = arr[a]
    for (var b = a - 1; b >= 0 && (arr[b] > target); b--) {
      arr[b + 1] = arr[b]
    }
    arr[b + 1] = target
  }
  
  return arr
}

/*
  PSEUDOCODE Binary Search

  STORE `indexAwal` with value 0
  STORE `indexAkhir` with value Length of `array`

  WHILE `indexAwal` <= `indexAkhir`
    STORE `indexMiddle` with value `indexAwal` ADD By `indexAkhir` DIV 2

    IF `array[`indexMiddle`]` < `search` THEN
      `indexAwal` = `indexMiddle` ADD By 1
    ELSE IF `array[`indexMiddle`]` > `search` THEN
      `indexAkhir` = `indexMiddle` SUBSTRACT 1
    ELSE 
      DISPLAY `indexMiddle`
    ENDIF
  ENDWHILE

  DISPLAY -1
*/

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
