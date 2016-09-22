
module.exports = function(arr, key) {
  return binarySearch(arr,key, 0, arr.length)
};

function binarySearch(arr, key, low, high) {

  if( low > high) {
    return -1;
  }

  var middle = Math.floor((low + high)/2);

  if(arr[middle] == key ) {
    return middle;
  }

  if( arr[middle] > key ) {
    return binarySearch(arr,key, low, middle - 1);
  } else {
    return binarySearch(arr,key, middle +1, high);
  }

  return -1;

};
