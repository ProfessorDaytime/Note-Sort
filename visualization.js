function draw(passedData) {
  //Width and height
  var w = 500;
  var h = 200;
  var barPadding = 1;
  var dataset = [];
  for(var i = 0; i<passedData.data.length-1;i++){
    dataset.push(passedData.data[i].index);
  }
  //Create SVG element
  var svg = d3.select("#myDiv")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

  svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
      return i * (w / dataset.length);
   })
   .attr("y", function(d) {
      return h - (d * 4);
   })
   .attr("width", w / dataset.length - barPadding)
   .attr("height", function(d) {
      return d * 4;
   })
   .attr("fill", function(d) {
    return "rgb(0, 0, " + (d * 10) + ")";
   });

  /*svg.selectAll("text")
   .data(passedData)
   .enter()
   .append("text")
   .text(function(d) {
      return d;
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
      return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
   })
   .attr("y", function(d) {
      return h - (d * 4) + 14;
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white");*/
}

function redraw(passedData, importantIndices) {
  //Width and height
  var w = 500;
  var h = 200;
  var barPadding =1;

  /*var dataset = [];
  for(var i = 0; i<passedData.data.length-1;i++){
    dataset.push(passedData.data[i].index);
  }*/

  //Create SVG element
  var svg = d3.select("#myDiv")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

  svg.selectAll("rect")
   .data(passedData)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
      return i * (w / passedData.length);
   })
   .attr("y", function(d) {
      return h - (d * 4);
   })
   .attr("width", w / passedData.length - barPadding)
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

  /*svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
      return d;
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
      return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
   })
   .attr("y", function(d) {
      return h - (d * 4) + 14;
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white");*/
}

var contains = function(arr, val) {
    for(value of arr){
        if(value == val){
            return true;
        }
    }
    return false;
};
