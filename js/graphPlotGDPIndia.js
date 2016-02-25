// ref : http://bl.ocks.org/mbostock/3885304

var init = function(){
   margin = {top: 20, right: 20, bottom: 30, left: 40},
    windowWidth=$(".WH").width(),//383,
    windowHeight=$(".WH").height();//340;

// function setWindowWidthHeight(w,h)
// {
//   windowWidth=$(".WH").width();
//   windowHeight=$(".WH").height();
// }

   width = windowWidth - margin.left - margin.right,
      height = windowHeight - margin.top - margin.bottom;

   x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

   y = d3.scale.linear()
    .range([height, 0]);

   xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(yearFormatter);

   yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

   svg = d3.select(".gbox").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong style='color:blue' </strong>"+d.year+"<span style='color:blue'> : " + d.gdp + "</span>";
    })
}
init();

  function yearFormatter(d) {
    return d.substr(2,2);
  }

  var dispGrph = function(){ d3.json("../jsons/gdpIndiaData.json",
  function(error, data) {

    svg.call(tip);

    x.domain(data.map(
      function(d) {
        return d.year;
      }));
      // y.domain([-10, d3.max(data,
    y.domain([-6, d3.max(data,
      function(d) {
         return d.gdp;
       })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
      .attr("transform", "rotate(0)")
      .attr("x", 1)
      .attr("dx", "176em")
      .style("text-anchor", "end")
      .text("Year");

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("GDP");

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x",
      function(d) {
        return x(d.year);
      })
      .attr("width", x.rangeBand())
      .attr("y",
      function(d) {
        return y(d.gdp);
      })
      .attr("height",
      function(d) {
        return height - y(d.gdp);
      })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
  });
}
dispGrph();

function removeGraph(){
  d3.select("svg").remove();
}
