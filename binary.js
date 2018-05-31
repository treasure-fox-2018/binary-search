'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  /*
    PSEUDOCODE SELECTION SORT

    FOR 'i' equals 0 and 'i' < length of 'arr' and increament 'i'
      SET 'min' equals 'arr' ke - 'i'
      SET 'index' equals 'i'
      
        FOR 'j' equals 'i' and 'j' < length of 'arr' and increament 'j'
          IF 'min' > 'arr' ke- 'j'
            THEN 
            'min' equals 'arr' ke- 'j'
            'index' equals 'j' 
          ENDIF
        ENDLOOP

        SET 'temp' equals'arr' ke- 'i'
        'arr' ke- 'i' equals 'arr' ke- 'index'
        'arr' ke- 'index' equals 'temp'
    ENDLOOP

    DISPLAY 'arr'
  */

  for (let i = 0; i < arr.length; i++) {
    var min = arr[i]
    var index = i
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]
        index = j
      }
    }
    var temp = arr[i]
    arr[i] = arr[index]
    arr[index] = temp
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
/*
  PSEUDOCODE binary_search
  
  SET 'indexAwal' equals 0
  SET 'indexAkhir' equals length of 'array' substract by 1
  SET 'isFind'

  WHILE 'indexAwal' <= 'indexAkhir' AND not 'isFind'
    DO
      SET 'mid' equals ('indexAwal' + 'indexAKhir') div 2

      IF 'array' ke- 'mid' equals 'search'
        THEN 
          'isFind' equals TRUE
        ELSE
      IF 'array' ke- 'mid' < 'search'
        THEN 
          'indexAwal' equals 'mid' + 1
        ELSE  
          'indexAkhir' equals mid - 1
      ENDIF
  ENDLOOP

  IF 'isFind' 
    THEN 
      DISPLAY 'mid'
  ENDIF

  DISPLAY -1
*/

  var indexAwal = 0
  var indexAkhir = array.length - 1
  var isFind

  while (indexAwal <= indexAkhir && !isFind) {
      var mid = Math.floor((indexAwal + indexAkhir) / 2)
      if (array[mid] == search) {
        isFind = true
      }else
      if (array[mid] < search) {
        indexAwal = mid + 1
      }else{
        indexAkhir = mid - 1
      }
  }

  if (isFind) {
    return mid
  }  
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(arrayGenapSorted);

var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted);


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
