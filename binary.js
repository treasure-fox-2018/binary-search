'use strict'
// algorithm
// ownSort
// angka pertama dianggap sudah sorted
// angka selanjutnya (a) dibandingkan dengan angka sebelumnya b // (a-1) = 0 untuk iterasi pertama // loop pertama dimulai dari a = 1 dan (a-1) menjadi b dari loop kedua
//   bila angka a lebih kecil dari angka b maka tukar posisi kedua angka tersebut
//   lakukan hingga b = 0 // agar dapat terus dibandingkan hingga a-1 = 0 perlu menggunakan nested loop untuk array yg sama // ubah (a-1) menjadi b
// munculkan arr
// binarySearch
// pastikan array sudah ter-sorted
// tentukan panjang array
// bagi panjang array dengan 2 lalu bulatkan (untuk antisipasi bila panjang array ganjil)
//   gunakan hasil perhitungan tersebut sebagai index untuk mendapatkan value dari array
//     bila nilai binaryLength sama dengan 0 dan array  dengan index binaryLength tidak sama dengan search
//       munculkan -1
//     bila nilai binaryLength sama dengan panjang array dikurang 1 dan array dengan index binaryLength tidak sama dengan search
//       munculkan -1
//     bila kemunculan prevBinaryLength kurang dari binaryLength lebih dari jumlah index dibagi 2
//       munculkan -1
//     bila value yg didapat sama dengan nilai search
//       maka munculkan nilai index array tersebut
//     bila value tidak sama dengan nilai search
//       bila value lebih besar dari nilai search
//         tentukan nilai binaryLength dengan menghitung rata-rata dari nilai binaryLength awal dan prevBinaryLength lalu bulatkan ke bawah
//         lalu ulangi looping hingga mendapat index dari nilai search
//       bila value lebih kecil dari nilai search
//         tentukan nilai binaryLength dengan menghitung rata-rata dari nilai binaryLength awal dan index terakhir lalu bulatkan ke atas
//         lalu ulangi looping hingga mendapat index dari nilai search

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var a = 1; a < arr.length; a++) {
    for (var b = 0; b < arr.length; b++) {
      if (arr[a] < arr[b]) {
        var move = arr[a]
        arr[a] = arr[b]
        arr[b] = move
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  var current = false
  var binaryLength = Math.floor(array.length / 2)
  var prevBinaryLength = 0
  var count = 0
  while (current === false) {
    if (binaryLength === 0 && array[0] != search) {
      return -1
    } else if (binaryLength === array.length-1 && array[array.length-1] != search) {
      return -1
    } else if (prevBinaryLength < binaryLength && count > Math.floor(array.length / 2)) {
      return -1
    }
    if (array[binaryLength] === search) {
      current = true
      return binaryLength;
    } else {
      if (array[binaryLength] > search) {
        current = false
        binaryLength = Math.floor((binaryLength+prevBinaryLength) / 2)
      if (prevBinaryLength === binaryLength) {
        prevBinaryLength = 0
      } else {
        prevBinaryLength = binaryLength
      }
      if (prevBinaryLength < binaryLength) {
        count++
      }
      }
      if (array[binaryLength] < search) {
        current = false
        prevBinaryLength = binaryLength
        binaryLength = Math.ceil((binaryLength+(array.length)-1) / 2)
      }
      if (prevBinaryLength < binaryLength) {
        count++
      }
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
// console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(89, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
// console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
