//PSEUDOCODE FOR BINARY SEARCH , ASUMME THAT ARRAY INPUT DATA ALREADY SHORTED

/*
FUNCTION "binary_search" WITH INPUT 'search' WITH VALUE ANY NUMBER AND 'array' WITH VALUE ARRAY OF SORTED NUMBER
  STORE AND SET 'found' WITH VALUE BOOLEAN false
  STORE AND SET "bottom" WITH VALUE 0
  STORE AND SET 'top' WITH VALUE = 'array' LENGTH - 1
  STORE 'median' WITH NO VALUE
  WHILE 'bottom' VALUE <= 'top' AND 'found' VALUE = 'false' DO
    SET 'median' VALUE = ROUND DOWN VALUE OF (('top' + 'bottom') DIV BY 2)
    IF 'array'['median'] VALUE  = VALUE OF 'search' THEN
      SET 'found' = 'true'
    ELSE IF 'search' VALUE < VALUE OF 'array'['median'] THEN
      SET 'top' = 'median' - 1
    ELSE IF 'search' VALUE > VALUE OF 'array'['median'] THEN
      SET 'bottom' = 'median' + 1
    END IF
  END WHILE
  IF 'found' VALUE = TRUE THEN
    RETURN 'median'
  ELSE
    RETURN WITH -1

*/
'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 0 ; i < arr.length-1 ; i++) {
    for (let j = i+1; j < arr.length ; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  let found = false;
  let bottom = 0;
  let top = array.length-1;
  let median;
  while (bottom <= top && found === false ) {
    median = Math.floor((top + bottom)/2);
    if (array[median] === search) {
      found = true;
    } else if (search < array[median]) {
      top = median - 1;
    } else if (search > array[median]) {
      bottom = median + 1;
    }
    debugger;
  }
  if (found === true ) {
    return median;
  } else return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
// console.log(arrayGenapSorted)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGanjilSorted)

// Driver code
console.log(binary_search(18, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(31, arrayGanjilSorted))

module.exports = {
  binary_search
}
