'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

/*
FUNCTION `ownSort` with parameter `arr` THEN
  FOR i = 0 to length of `arr` - 1 THEN
    STORE and SET `sementara` to `arr` on i
    
    FOR j = i-1, j >= 0 & `arr` on j > `sementara`  
      SET `arr` on j+1 to `arr` on j
    j--
    END FOR
    
    SET `arr` on j+1 to `sementara`
    
    i++
  END FOR
END FUNCTION
*/

function ownSort(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    var sementara = arr[i];
    for (var j = i-1; j>=0 && (arr[j] > sementara); j--) {
      arr[j+1] = arr[j]; 
    }
    arr[j+1] = sementara;
    
  }
  console.log(arr)
  // Your sorting code
  return arr
}

/*
PSEUDOCODE Binary Search

FUNCTION `binarySearch` with parameter `search` and `array` THEN

  STORE and SET `lokasiAwal` to 0
  STORE and SET `lokasiAkhir` to length of `array` - 1
  STORE and SET `index` to 1
  
  WHILE `lokasiAwal` <= `lokasiAkhir` THEN
    STORE and SET `lokasiMedian` = Math floor function on average of `lokasiAwal` + `lokasiAkhir`
    
    IF `array` on `lokasiMedian` > `search` THEN
      `lokasiAkhir` = `lokasiMedian` - 1
    ELSE IF `array` on `lokasiMedian` < `search` THEN
      `lokasiAwal` = `lokasiMedian` + 1
    ELSE
      WHILE `lokasiMedian` == `lokasiMedian` - `index` THEN
        SET `lokasiMedian` = `lokasiMedian` - `index`
      END WHILE
      
      RETURN `lokasiMedian`
    END IF
  END WHILE

END FUNCTION

*/

function binarySearch (search, array) {

  var lokasiAwal = 0;
  var lokasiAkhir = array.length - 1;
  var index = 1;
  while (lokasiAwal <= lokasiAkhir) {
    var lokasiMedian = Math.floor((lokasiAwal+lokasiAkhir)/2);

    if (array[lokasiMedian] > search) {
      lokasiAkhir = lokasiMedian - 1;
    }
    else if (array[lokasiMedian] < search) {
      lokasiAwal = lokasiMedian + 1;
    }
    else {
      while (array[lokasiMedian] === array[lokasiMedian - index]) {  
        lokasiMedian = lokasiMedian - index;
      }
      return lokasiMedian;
      
    }
  }
  return -1;
  // Your searching code
  // return 0;
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

// module.exports = {
//   binary_search
// }
