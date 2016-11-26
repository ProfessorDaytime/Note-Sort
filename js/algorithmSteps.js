var writeSteps = function(stepsArr, selectedSteps) {
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
};
