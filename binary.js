'use strict'

//PESUDOCODE
STORE testArrayGenap with [40, 18, 22, 32, 90, 10, 10, 22, 8]
STORE testArrayGanjil with [3, 31, 89, 53, 53, 85, 77, 21, 55]

function of ownSort with parameter arr
  FOR a = 0 to length of arr
    FOR b = a+1 to length of arr
      IF arr[b] < arr[a] THEN
        STORE contain with arr[a]
        SET arr[a] with arr[b]
        SET arr[b] with contain
      END IF
      b+1
    END FOR
    a+1
  END FOR
  DISPLAY arr
END function ownSort

function of binary_search with parameter search AND array
  STORE index with (length of array - 1) DIV 2
  STORE sliceArrLow with slice value array 0 to index
  STORE sliceArrHigh with slice value array index to length of array MINUS by 1

  IF search < array[index] THEN
    FOR a = 0 to length of sliceArrLow
      STORE idx with 0
      IF search STRICT EQUAL sliceArrLow[a] THEN
        DISPLAY a
      END IF
    END FOR
    IF idx STRICT EQUAL 0 THEN
      DISPLAY -1
    END IF
  ELSE IF search > array[index] THEN
    FOR a = 0 to length of sliceArrHigh
      STORE idx with 0
      IF search STRICT EQUAL sliceArrHigh[a] THEN
        DISPLAY b ADDED by length of sliceArrLow
      END IF
    END FOR
    IF idx STRICT EQUAL 0 THEN
    DISPLAY -1
    END IF
  ELSE IF search STRICT EQUAL array[index]
    STORE idx with 0
    FOR c = 0 to length of sliceArrLow
      IF search STRICT EQUAL sliceArrLow[c] THEN
        DISPLAY c
      END IF
    END FOR
    IF idx STRICT EQUAL 0 THEN
    FOR d = 0 to length of sliceArrHigh
      IF search STRICT EQUAL sliceArrHigh[d] THEN
        DISPLAY d ADDED by length of sliceArrLow
      END IF
    END FOR
  END IF
END function binary_search

// JAVASCRIPT
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
  var index = (array.length - 1) / 2
  var sliceArrLow = array.slice(0, index)
  var sliceArrHigh = array.slice(index, array.length-1)
  if (search < array[index]) {
    for (var a = 0; a < sliceArrLow.length; a++) {
      var idx = 0
      if (search === sliceArrLow[a]) {
        return a
      }
    }
    if (idx === 0) {
      return -1
    }
  } else if (search > array[index]) {
    for (var b = 0; b < sliceArrHigh.length; b++) {
      var idx = 0
      if (search === sliceArrHigh[b]) {
        return idx = b + sliceArrLow.length
      }
    }
    if (idx === 0) {
      return -1
    }
    
  } else if (search === array[index]){
    var idx = 0
    for (var c = 0; c < sliceArrLow.length; c++) {
      if (search === sliceArrLow[c]) {
        return idx = c
      }
    }
    if (idx === 0) {
      for (var d = 0; d < sliceArrHigh.length; d++) {
        if (search === spliceArrHigh[d]) {
          return idx = d + sliceArrLow.length
        }
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