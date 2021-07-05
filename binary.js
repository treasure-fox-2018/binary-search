'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let a = 0; a < arr.length; a++ ){
    let temp = a;

    for(let b = a; b < arr.length;b++){
        if(arr[temp] > arr[b]){
            temp = b;
        }
    }
    if(temp !== a){
        let tempNum = arr[a]
            arr[a]= arr[temp];
            arr[temp] = tempNum; 
    }
}
return arr;
}

function binary_search (search, array) {
  // Your searching code
  let min = 0;
    let max = array.length - 1;

     while (min <= max) {
        
       let mid = Math.floor((min + max) / 2);
       
       if (search === array[mid]){ 
           return mid;
       }
       else if (array[mid] > search ){ 
           max = mid - 1;
       }
       else{ 
           min = mid + 1;
        }
     }
  
     return -1;
  
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

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
