'use strict';

var testCaseArray = [27, 35, 16, 7, 2, 9, 43, 57, 1, 98, 23, 54];

/**
 * @function insertionSort
 * melaksanakan pengurutan menggunakan metode insertion
 * @param {array} nums kumpulan angka acak dalam bentuk array
 * @returns {array} mengembalikan array yang telah diurutkan
 */

function insertionSort(nums) {
    for (var i = 0; i < nums.length; i++) {
        // mark firstElement as base
        let firstElement = nums[i];
        // count backwards to until find the lower one and move the rest one index forward
        for (var j = i - 1; nums[j] > firstElement; j--) {
            nums[j+1] = nums[j];
        }
        nums[j+1] = firstElement;
    }
    return nums;
}

/**
 * @function binary_search
 * mencari dengan menyisir angka tengah dari setiap pencarian
 * @param {integer} input angka integer yang akan dicari and @param {array} testCase kumpulan angka acak dalam bentuk array
 * @returns {boolean} mengembalikan true apabila terdapat angka yang dicari pada array dan mengembalikan -1 apabila tidak ditemukan
 */

function binary_search(input, testCase) {
  let arrayLength = testCase.length;
  let middle = Math.floor(arrayLength/2);
  let sortedArray = insertionSort(testCase);

  if (testCase[middle] === input) {
      return true;
  } else if (testCase[middle] > input) {
      return binary_search(input, testCase.splice(middle, arrayLength-1));
  } else if (testCase[middle] < input) {
      return binary_search(input, testCase.splice(0, middle));
  } else {
      return -1;
  }

}


//TEST CASE
console.log(binary_search(59, testCaseArray));

module.exports = {
    binary_search,
};








//
