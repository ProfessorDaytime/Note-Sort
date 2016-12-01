var quicksortCode = ["quickSort(A, lo, hi)", "&nbsp if lo < hi", "&nbsp&nbsp p = partition(A, lo, hi)",
"&nbsp&nbsp quicksort(A, lo, p - 1)", "&nbsp&nbsp quicksort(A, p + 1, hi)", "", "partition(A, lo, hi)",
"&nbsp pivot = A[hi]", "&nbsp i = lo", "&nbsp for j = lo to hi - 1", "&nbsp&nbsp if A[j] <= pivot",
"&nbsp&nbsp&nbsp swap A[i] with A[j]", "&nbsp&nbsp&nbsp i++", "&nbsp swap A[i] with A[hi]", "&nbsp return i"];

function swap(array, i, j) {
  var t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function quicksort(A, lo, hi) {
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0, 1], importantIndices:[lo, hi]});
  if (lo < hi) {
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0, 2], importantIndices:[lo, hi]});
    var p = partition(A, lo, hi);
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0, 3], importantIndices:[lo, hi]});
    quicksort(A, lo, p - 1);
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0, 4], importantIndices:[lo, hi]});
    quicksort(A, p + 1, hi);
  }
}

function partition(A, lo, hi) {
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 7], importantIndices:[hi]});
  var pivot = A[hi].index;
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 8], importantIndices:[lo]});
  var i = lo;
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 9], importantIndices:[lo, hi]});
  for (var j = lo; j < hi; j++) {
    // frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 10], importantIndices:[j, hi]});
    if (A[j].index <= pivot) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 11, 12], importantIndices:[i, j]});
      swap(A, i, j);
      // frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 12], importantIndices:[i]});
      i++;
    }
  }
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 13], importantIndices:[i, hi]});
  swap(A, i, hi);
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 14], importantIndices:[i]});
  return i;
}

function addSongFrames(){
  var lastFrame = frames[frames.length-1];
  for(var i=0; i<lastFrame.data.length; i++){
    frames.push({data:lastFrame.data, algorithmSteps:[0], importantIndices:[i]});
  }
}
