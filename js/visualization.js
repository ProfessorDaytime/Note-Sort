/*
  Arguments -
    array of data points to draw
    list of indices that are important
*/
function draw(frameData, importantIndices) {
  //Width and height
  var w = 500;
  var h = 200;
  var barPadding =1;

  //Create SVG element
  var svg = d3.select("#myDiv")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

  svg.selectAll("rect")
   .data(frameData)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
      return i * (w / frameData.length);
   })
   .attr("y", function(d) {
      return h - (d * 4);
   })
   .attr("width", w / frameData.length - barPadding)
   .attr("height", function(d) {
      return d * 4;
   })
   .attr("fill", function(d) {
      if(contains(importantIndices, d)){
      return("White");
      }
      else{
    return "rgb(0, 0, " + (d * 10) + ")";}
   });
}

/*
  Draws all frames in passed frames array
  Set global variable paused to "paused" animation
  Set global variable "stepActive" to play animation for one frame
  Set global variable "frame" to change which frame we are currently playing
  Set global variable "frames" to change the list of frames which will be drawn
*/
function drawFrames(){
  setTimeout(function(){
    if(!paused || stepActive){
      var currFrame = frames[frame];

      //Get the bar graph values for the frame
      var currGraphVals = currFrame.data.map(function(obj){
        return obj.index;
      });

      d3.select("svg").remove();
      draw(currGraphVals, currFrame.importantIndices);

      writeSteps(quicksortCode, currFrame.algorithmSteps);

      //Play notes associated with current frame
      for(noteIndex of currFrame.importantIndices){
        if(noteIndex >=0 && noteIndex <= currFrame.data.length-1){
          var noteFilePath = currFrame.data[noteIndex].noteFile;
          var audio = new Audio(noteFilePath);
          audio.play();
        }
      }

      frame++;
    }
    stepActive = false;

    //Continue to loop until we reach the last frame or a breakout is triggered
    if( frame < frames.length )
    {
      drawFrames();
    }
  }, 100/sliderVal)
}

function writeSteps(stepsArr, selectedSteps) {
  $('#algStepsDiv').html('');
  for (var i = 0; i < stepsArr.length; i++) {
    var html = ""
    for (var j = 0; j < selectedSteps.length; j++) {
      if (i == selectedSteps[j]) {
        html = "<span class='mainAlgStep'>"+stepsArr[i]+"</span><br />";
        break;
      }
      else {
        html = "<span class='algStep'>"+stepsArr[i]+"</span><br />";
      }
    }
    $('#algStepsDiv').append(html);
  }
}
