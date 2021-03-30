// Add your JavaScript code here
function changeURL(url){
  window.location = url;

}
const MAX_WIDTH = Math.max(1080, window.innerWidth);
const MAX_HEIGHT = 720;
const margin = {top: 40, right: 100, bottom: 40, left: 175};
/*
columns names: date, home_team, away_team, home_score, away_score, tournament, city, country, neutral

d3.timeParse("%Y-%m-%d")

data.forEach(function(d) {
        var tempDate = parseDate(d.date);
        var tempYear = tempDate.getFullYear();
*/

// Assumes the same graph width, height dimensions as the example dashboard. Feel free to change these if you'd like
function changeURL(url){
  window.location = url;

}
let graph_1_width = (MAX_WIDTH / 2) - 10, graph_1_height = 250;
let graph_2_width = (MAX_WIDTH / 2) - 10, graph_2_height = 275;
let graph_3_width = MAX_WIDTH / 2, graph_3_height = 575;
let svg = d3.select('#graph1')
    .append("svg")
    .attr("width", graph_1_width+margin.left + margin.right)     // HINT: width
    .attr("height", graph_1_height + margin.top + margin.bottom + 100)     // HINT: height
    .append("g")
    // .attr("transform", `translate(${margin.left}, ${graph_1_height + margin.top})`);    // HINT: transform
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");
// d3.csv("../data/artists.csv").then(function(data) {

//     });
var parseDate = d3.timeParse("%Y-%m-%d");

d3.csv("/data/football.csv").then(function(data) {

    console.log(data)
  // When reading the csv, I must format variables:
    var yearCount = {};
    data.forEach(function (d) {
        var tempDate = parseDate(d.date);
        // console.log(tempData)
        var tempYear = tempDate.getFullYear();
        if (yearCount[tempYear] === undefined) {
            yearCount[tempYear] = 1;
            // d.year = tempYear
            d['year'] = tempYear
        } else {
            yearCount[tempYear] = yearCount[tempYear] + 1;
            d['year'] = tempYear
        }
        
    });
    data.forEach(function (d) {
        var tempDate = parseDate(d.date);
        var tempYear = tempDate.getFullYear();
        // d.count = yearCount[tempYear]
        d['count'] = yearCount[tempYear]
    });
    
    databyyear = d3.group(data, d => d.year)
    console.log(databyyear)
    var yearByCount = []
    function makeYearCountDict(value, key, map) {
        if (key > 1899  && key < 1911) {
            dict2 = {}
            dict2['year'] = key
            dict2['count'] = value.length
            console.log("this is key", key)
            var year = key
            var count = value.length
            yearByCount.push(
            
            dict2
            )
        }
    }
    console.log('70')
    databyyear.forEach(makeYearCountDict);
    console.log("yearByCount", yearByCount) 

    let title = svg.append("text")
    .attr("transform", `translate(${(graph_1_width - margin.right) / 2}, ${-10})`)       // HINT: Place this at the top middle edge of the graph
    .style("text-anchor", "middle")
    .style("font-size", 15);

    title.text(`Number of games played between 1900-1910`);

    var x = d3.scaleLinear()
    //   .domain([1900,1910])
      .domain(d3.extent(yearByCount, function(d) { return d.year; }))
      .range([ 0, graph_1_width ]);
      console.log("getting to x axis")
    svg.append("g")
      .attr("transform", "translate(0," + graph_1_height + ")")
      .call(d3.axisBottom(x));
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0,30])
      .range([ graph_1_height, 0 ]);
      console.log("graph 1 height", graph_1_height)
    svg.append("g")
      .call(d3.axisLeft(y));

    svg.append("text")
      .attr("transform", `translate(-100, ${(graph_1_height - margin.top - margin.bottom) / 2})`)       // HINT: Place this at the center left edge of the graph
      .style("text-anchor", "middle")
      .text("Number of Games");

    svg.append("text")
      .attr("transform", `translate(${(graph_2_width) / 2},
                                      ${(graph_1_height + margin.top + margin.bottom)})`)       // HINT: Place this at the bottom middle edge of the graph
      .style("text-anchor", "middle")
      .text("Years");
    // Add the line
    svg.append("path")
      .datum(yearByCount)
      .attr("fill", "none")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.year)})
        .y(function(d) { return y(d.count)})
        )
    // Add the points
    svg
      .append("g")
      .selectAll("dot")
      .data(yearByCount)
      .enter()
      .append("circle")
        // console.log("year printing", d['year'])
        .attr("cx", function(d) { return x(d.year) } )
        .attr("cy", function(d) { return y(d.count)} )
        .attr("r", 5)
        .attr("fill", "#69b3a2")
        console.log("hi")

});

function cleanData(data, comparator, numExamples) {
    return data.sort(comparator).slice(0, 20);
}
