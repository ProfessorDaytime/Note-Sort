function swap(array, i, j) {
  var t = array[i];
  array[i] = array[j];
  array[j] = t;
}

var cocktailsortCode = ["cocktailSort(A)", "&nbsp sorted = true", "&nbsp while sorted = true", "&nbsp &nbsp for i = 0 to A.length - 2", "&nbsp &nbsp &nbsp if A[i] > A[i + 1]",
"&nbsp &nbsp &nbsp &nbsp swap i with i + 1", "&nbsp &nbsp &nbsp &nbsp sorted = true", "&nbsp &nbsp if sorted not true, break", "&nbsp &nbsp for i = A.length - 2 to 0",
"&nbsp &nbsp &nbsp if A[i] > A[i + 1]", "&nbsp &nbsp &nbsp &nbsp swap i with i + 1", "&nbsp &nbsp &nbsp &nbsp sorted = true"];

function cocktailsort(A) {
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0], importantIndices:[0]});
  var sorted = true;
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[1], importantIndices:[0]});
  while (sorted) {
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[2], importantIndices:[0]});
    for (var i = 0; i < A.length - 2; i++) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[3], importantIndices:[i]});
      if (A[i].index > A[i + 1].index) {
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[4], importantIndices:[i, i + 1]});
        swap(A, i, i + 1);
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[5], importantIndices:[i, i + 1]});
        sorted = true;
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6], importantIndices:[0]});
      }
    }
    if (!sorted) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[7], importantIndices:[0]});
      break;
    }
    sorted = false;
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[8], importantIndices:[0]});
    for (var i = A.length - 2; i > 0; i--) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[9], importantIndices:[i]});
      if (A[i].index > A[i + 1].index) {
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[10], importantIndices:[i, i + 1]});
        swap(A, i, i + 1);
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[11], importantIndices:[i, i + 1]});
        sorted = true;
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[12], importantIndices:[0]});
      }
    }
  }
}

var selectsortCode = ["selectSort(A)", "&nbsp for i = 0 to length", "&nbsp &nbsp min = i", "&nbsp &nbsp for j = i + 1 to length",
"&nbsp &nbsp &nbsp if A[j] < A[min]", "&nbsp &nbsp &nbsp &nbsp min = j", "&nbsp &nbsp if i != min", "&nbsp &nbsp &nbsp swap i with min"];

function selectsort(A) {
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0], importantIndices:[0]});
  for (var i = 0; i < A.length; i++) {
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[1], importantIndices:[i]});
    var min = i;
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[2], importantIndices:[i]});
    for (var j = i + 1; j < A.length; j ++) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[3], importantIndices:[j]});
      if (A[j].index < A[min].index) {
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[4], importantIndices:[j, min]});
        min = j;
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[5], importantIndices:[j, min]});
      }
    }
    if (i != min) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6], importantIndices:[i, min]});
      swap(A, i, min);
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[7], importantIndices:[i, min]});
    }
  }
}

var insertsortCode = ["insertSort(A)", "&nbsp for i = 1 to A.length", "&nbsp &nbsp temp = A[i]", "&nbsp &nbsp for j = i - 1 to 0 where A[j] > temp",
"&nbsp &nbsp &nbsp A[j + 1] = A[j]", "&nbsp &nbsp A[j + 1] = temp"];

function insertsort(A) {
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0], importantIndices:[0]});
  for (var i = 1; i < A.length; i++) {
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[1], importantIndices:[i]});
    var temp = A[i];
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[2], importantIndices:[i]});
    var j = i - 1;
    for (; j >= 0 && A[j].index > temp.index; j--) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[3], importantIndices:[j, i - 1, i]});
      A[j + 1] = A[j];
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[4], importantIndices:[j + 1, j]});
    }
    A[j + 1] = temp;
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[5], importantIndices:[j + 1, i]});
  }
}

function mergesort(A) {
  inplacemergesort(A, 0, A.length - 1);
}

var mergesortCode = ["mergesort(A, first, last)", "&nbsp if first >= last", "&nbsp &nbsp return A", "&nbsp mid = (first + last) / 2", "&nbsp mergesort(A, first, mid)",
"&nbsp mergesort(A, mid + 1, last)", "&nbsp lt = first, rt = mid + 1", "&nbsp while lt <= mid and rt <= last", "&nbsp &nbsp if A[lt] <= A[rt]",
"&nbsp &nbsp &nbsp lt++", "&nbsp &nbsp else", "&nbsp &nbsp &nbsp temp = A[rt]", "&nbsp &nbsp &nbsp for i = rt to lt", "&nbsp &nbsp &nbsp &nbsp A[i] = A[i - 1]",
"&nbsp &nbsp &nbsp A[lt] = temp", "&nbsp &nbsp &nbsp lt++, mid++, rt++"];

function inplacemergesort(A, first, last) {
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0], importantIndices:[0]});
  if (first >= last) {
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[1, 2], importantIndices:[first, last]});
    return A;
  }
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[1], importantIndices:[first, last]});
  var mid = parseInt((first + last) / 2);
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[3], importantIndices:[mid]});
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[4], importantIndices:[first, mid]});
  inplacemergesort(A, first, mid);
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[5], importantIndices:[mid + 1, last]});
  inplacemergesort(A, mid + 1, last);
  var lt = first;
  var rt = mid + 1;
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6], importantIndices:[first, mid + 1]});
  while (lt <= mid && rt <= last) {
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[7], importantIndices:[lt, mid, rt, last]});
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[8], importantIndices:[lt, rt]});
    if (A[lt].index <= A[rt].index) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[9], importantIndices:[lt]});
      lt++;
    }
    else {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[10], importantIndices:[first, mid + 1]});
      var temp = A[rt];
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[11], importantIndices:[rt]});
      for (var i = rt; i > lt; i--) {
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[12], importantIndices:[i, lt]});
        A[i] = A[i - 1];
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[13], importantIndices:[i, i - 1]});
      }
      A[lt] = temp;
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[14], importantIndices:[temp]});
      lt++;
      mid++;
      rt++;
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[15], importantIndices:[lt, rt, mid]});
    }
  }
}

var bubblesortCode = ["bubblesort(A)", "&nbsp for i = 0 to A.length", "&nbsp &nbsp for j = 0 to A.length - i - 1",
"&nbsp &nbsp &nbsp if A[j] > A[j + 1]", "&nbsp &nbsp &nbsp &nbsp swap A[j] with A[j + 1]"];

function bubblesort(A) {
  frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[0], importantIndices:[0]});
  for (var i = 0; i < A.length; i++) {
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[1], importantIndices:[i]});
    for (var j = 0; j < (A.length - i - 1); j++) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[2], importantIndices:[j]});
      if (A[j].index > A[j + 1].index) {
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[3], importantIndices:[j, j + 1]});
        swap(A, j, j + 1);
        frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[4], importantIndices:[j, j + 1]});
      }
    }
  }
}

var quicksortCode = ["quickSort(A, lo, hi)", "&nbsp if lo < hi", "&nbsp&nbsp p = partition(A, lo, hi)",
"&nbsp&nbsp quicksort(A, lo, p - 1)", "&nbsp&nbsp quicksort(A, p + 1, hi)", "", "partition(A, lo, hi)",
"&nbsp pivot = A[hi]", "&nbsp i = lo", "&nbsp for j = lo to hi - 1", "&nbsp&nbsp if A[j] <= pivot",
"&nbsp&nbsp&nbsp swap A[i] with A[j]", "&nbsp&nbsp&nbsp i++", "&nbsp swap A[i] with A[hi]", "&nbsp return i"];

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
    frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 10], importantIndices:[j, hi]});
    if (A[j].index <= pivot) {
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 11], importantIndices:[i, j]});
      swap(A, i, j);
      frames.push({data:JSON.parse(JSON.stringify(A)), algorithmSteps:[6, 12], importantIndices:[i]});
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
