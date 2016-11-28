var frames = [];

function swap(array, i, j) {
  var t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function quicksort(A, lo, hi) {
  frames.push({data:A, algorithmSteps:[0, 1], importantIndices[lo, hi]});
  if (lo < hi) {
    frames.push({data:A, algorithmSteps:[0, 2], importantIndices[lo, hi]});
    var p = partition(A, lo, hi);
    frames.push({data:A, algorithmSteps:[0, 3], importantIndices[lo, hi]});
    quicksort(A, lo, p - 1);
    frames.push({data:A, algorithmSteps:[0, 4], importantIndices[lo, hi]});
    quicksort(A, p + 1, hi);
  }
}

function partition(A, lo, hi) {
  frames.push({data:A, algorithmSteps:[6, 7], importantIndices[hi]});
  var pivot = A[hi]
  frames.push({data:A, algorithmSteps:[6, 8], importantIndices[lo]});
  var i = lo;
  frames.push({data:A, algorithmSteps:[6, 9], importantIndices[lo, hi]});
  for (var j = lo; j < hi; j++) {
    frames.push({data:A, algorithmSteps:[6, 10], importantIndices[j, hi]});
    if (A[j] <= pivot) {
      frames.push({data:A, algorithmSteps:[6, 11], importantIndices[i, j]});
      swap(A, i, j);
      frames.push({data:A, algorithmSteps:[6, 12], importantIndices[i]});
      i++;
    }
  }
  frames.push({data:A, algorithmSteps:[6, 13], importantIndices[i, hi]});
  swap(A, i, hi);
  frames.push({data:A, algorithmSteps:[6, 14], importantIndices[i]});
  return i;
}
