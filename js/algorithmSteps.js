var writeSteps = function(stepsArr, stepIndex){
  $('#algStepsDiv').html('');
  for(var i = 0; i<stepsArr.length; i++){
    var html = ""
    if(i == stepIndex){
      html ="<span class='mainAlgStep'>"+stepsArr[i]+"</span><br />";
    }
    else{
      html ="<span class='algStep'>"+stepsArr[i]+"</span><br />";
    }
    $('#algStepsDiv').append(html);
  }
};
