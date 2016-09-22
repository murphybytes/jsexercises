
module.exports = function(ar){
  quick_sort(ar,0,ar.length-1);
  return ar;
}

function quick_sort(ar, low, high ) {
  if((high - low) > 0 ){
    var p = partition(ar, low, high);
    quick_sort(ar, low, p - 1);
    quick_sort(ar, p + 1, high);
  }
}

function partition(ar, low, high) {
  var p = high;
  var firstHigh = low;
  for(i=low; i<high; i++){
    if(ar[i] < ar[p]){
      swap(ar, i, firstHigh);
      firstHigh++;
    }
  }
  swap(ar, p, firstHigh);
  return firstHigh;
}

function swap(ar, i, j) {
  var tmp = ar[i];
  ar[i] = ar[j];
  ar[j] = tmp;
}
