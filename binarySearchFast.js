
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


Array.prototype.binarySearchFast = function(search,array) {
 var middle = Math.floor(array.length / 2)
 var arraySort = ownSort(array)
  
  if(search === arraySort[middle]){
    return middle;
  } else if(search > arraySort[middle]){
    return binarySearch(middle, arraySort.splice(middle, arraySort.length-1));
  } else if(search < arraySort[middle]){
    return binarySearch(search,arraySort.splice(0, middle));
  } else {
    return -1
  }
};
