//Shuffles array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

//Check if array contains value
function contains(arr, val) {
    for(value of arr){
        if(value == val){
            return true;
        }
    }
    return false;
};

//Clears current state and triggers breakout of running algorithms
function clear(){
	paused = true;//Keeps graph from being drawn in frame draw loop
	stepActive = false;//When active, draws a single frame then becomes inactive
	frames = [];//Stores frames to draw
	frame = 0;//Stores current frame
	d3.select("svg").remove();
	runningAlgorithm = "";
	$("#pauseButton").text("Play");
};

function selectSong(songName){
  song = songs[songName];
  $("#resetButton").trigger("click");
};

function playAlgorithm(algFunc, algName){
  clear();
  currLoop++;
  runningAlgorithm = algName;
  //Initialize song
  var shuffeledSong = shuffle(song);
  //Run sort to generate frames
  algFunc(JSON.parse(JSON.stringify(shuffeledSong)), 0, shuffeledSong.length-1);
  addSongFrames();
  var code;
  if (algName == "bubbleSort") {
    code = bubblesortCode;
  }
  else if (algName == "mergeSort") {
    code = mergesortCode;
  }
  else if (algName == "quickSort") {
    code = quicksortCode;
  }
  else if (algName == "insertSort") {
    code = insertsortCode;
  }
  else if (algName == "selectSort") {
    code = selectsortCode;
  }
  else if (algName == "cocktailSort") {
    code = cocktailsortCode;
  }
  //Draw first initial state
  draw(shuffeledSong.map(function(obj){return obj.index;}),[]);
  writeSteps(code, [0]);
  drawFramesAndPlaySong(currLoop, algName);
}
