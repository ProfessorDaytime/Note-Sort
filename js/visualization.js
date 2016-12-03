/*
  Arguments -
    array of data points to draw
    list of indices that are important
*/
function draw(frameData, importantIndices) {
  //Width and height
  var w = 500;
  var h = 400;
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
      return h-(h/frameData.length) * (d);
   })
   .attr("width", w / frameData.length - barPadding)
   .attr("height", function(d) {
      return (h/frameData.length) * (d);
   })
   .attr("fill", function(d) {
      if(contains(importantIndices, d)){
      return("White");
      }
      else{
        if(d == 0){
          return "(103,200,255)"
        }
        else{
          var r = Math.round(103+145*(d/(frameData.length-1)));
          var g = Math.round(200-190*(d/(frameData.length-1)));
          var b = Math.round(255-107*(d/(frameData.length-1)));
          return "rgb("+ r +","+ g +","+ b +")";
        }
      }
   });
}

/*
  Draws all frames in passed frames array
  Variable loop num acts as an ID for the draw loop.  We only want one drawing at a time so we use it break the loop if loopNum != currLoop
  Set global variable paused to "paused" animation
  Set global variable "stepActive" to play animation for one frame
  Set global variable "frame" to change which frame we are currently playing
  Set global variable "frames" to change the list of frames which will be drawn

*/
function drawFramesAndPlaySong(loopNum){
  setTimeout(function(){
    if((!paused || stepActive) && loopNum == currLoop){
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

    //Continue to loop until we reach the last frame or a new loop is created
    if( frame < frames.length && frames.length>0 && loopNum == currLoop )
      drawFramesAndPlaySong(loopNum);
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
