// PSUEDOCODE

// FUNCTION with PARAMETER 'array'
//   SET 'temp' with value 0
//
//   FOR i LESS THAN parameter from i EQUAL to 0
//     SET 'ubah' with value 0
//     FOR j LESS THA parameter from j EQUAL to 0
//       IF 'array[j]' LESS THAN 'array[ubah]'
//       'ubah' SIGN TO j
//     END FOR
//
//     'temp' SING TO 'array[i]'
//     'array[i]' SIGN TO 'array[ubah]'
//     'array[ubah]' SIGN TO 'temp'
//   END FOR
// END FUNCTION

'use strict';

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
	// Your sorting code
	var temp = 0;

	for (var i = 0; i < arr.length; i++) {
		var ubah = i;

		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[ubah]) ubah = j;
		}
		//proses swap mencari terkecil
		temp = arr[i];
		arr[i] = arr[ubah];
		arr[ubah] = temp;
	}
	return arr;
}
// PSUEDOCODE
//
// FUNCTION with parameter 'search,array'
//
// SET nilaiTengah with 'Math.Floor(array.length / 2)'
//
// IF 'search' STRICT EQUAL 'array[nilaiTengah]'
//   RETURN 'nilaiTengah';
// ELSE IF 'search' MORE THAN 'array[nilaiTengah]'
//   RETURN parmeter with 'search' , 'array.splice' with 'nilaiTengah, array.length -1'
// ELSE IF 'search' LESS THAN 'array[nilaiTengah]'
//   RETURN parameter with 'search, array.slice' with '0, nilaiTengah'
// ELSE
//   RETURN -1
// END IF
//
// END FUNCTION


function binarySearch(search, array) {
	// Your searching code

	var nilaiTengah = Math.floor(array.length / 2);

	if (search === array[nilaiTengah]) {
		return nilaiTengah;
	} else if (search > array[nilaiTengah]) {
		return binarySearch(search, array.splice(nilaiTengah, array.length - 1));
	} else if (search < array[nilaiTengah]) {
		return binarySearch(search, array.splice(0, nilaiTengah));
	} else {
		return -1;
	}
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

module.exports = {
	binary_search,
};
