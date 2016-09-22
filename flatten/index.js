
module.exports = function(ar) {
  var flattened = [];
  flatten(ar,flattened);
  return flattened;
};

function flatten(ar, flattened) {

  ar.forEach(function(elt,idx,ar){
    if( Array.isArray(elt) ) {
      flatten(elt, flattened);
    } else {
      flattened.push(elt);
    }
  });

};
