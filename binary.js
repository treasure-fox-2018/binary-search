'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

/* PSEUDOCODE

1. PROCEDURE ownSort with parameter arr
	1a. FOR i = 0 to length off arr
		1a.a FOR j = 0 to length off arr
			1a.a.a. IF arr indeks i less than arr indeks j THEN
				SET temp with value of arr indeks j
				SET arr indeks j with value of arr indeks i
				SET arr indeks i with value of temp
			END IF
		END FOR
	END FOR

	return arr
*/
function ownSort(arr) {
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[i] < arr[j]){
        var temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

/* PSEUDOCODE
PROCEDURE binarySearch with parameter search and array
	SET middle with calculation Math floor of length of array / 2 

	IF searc equal to array indeks middle THEN
		return middle
	ELSE IF search greater than array indeks middle THEN
		return PROCEDURE binary with parameter search and splice of array from indeks middle to length of array -1
	ELSE IF search less than array indeks middle THEN
		return PROCEDURE binarySearch with parameter search and splice of array from indeks 0 to middle
	ELSE 
		return -1
*/
function binarySearch (search, array) {
  var middle = Math.floor(array.length / 2)
  
  if(search === array[middle]){
    return middle;
  } else if(search > array[middle]){
    return binarySearch(search, array.splice(middle, array.length-1));
  } else if(search < array[middle]){
    return binarySearch(search,array.splice(0, middle));
  } else {
    return -1
  }
  
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
