//add buttons that take you to the write URL
// Add your JavaScript code here
function changeURL(url){
    window.location = url;

}
// const MAX_WIDTH = Math.max(1080, window.innerWidth);
// const MAX_HEIGHT = 720;
// const margin = {top: 40, right: 100, bottom: 40, left: 175};
// /*
// columns names: date, home_team, away_team, home_score, away_score, tournament, city, country, neutral
// */

// // Assumes the same graph width, height dimensions as the example dashboard. Feel free to change these if you'd like
// let graph_1_width = (MAX_WIDTH / 2) - 10, graph_1_height = 250;
// let graph_2_width = (MAX_WIDTH / 2) - 10, graph_2_height = 275;
// let graph_3_width = MAX_WIDTH / 2, graph_3_height = 575;
// let svg = d3.select('#graph1')
// .append("svg")
// .attr("width", graph_1_width+margin.left + margin.right)     // HINT: width
// .attr("height", graph_1_height + margin.top + margin.bottom + 100)     // HINT: height
// .append("g")
// // .attr("transform", `translate(${margin.left}, ${graph_1_height + margin.top})`);    // HINT: transform
// .attr("transform",
// "translate(" + margin.left + "," + margin.top + ")");
// // d3.csv("../data/artists.csv").then(function(data) {

// //     });
// var parseDate = d3.timeParse("%Y-%m-%d");

// d3.csv("../data/football.csv").then(function(data) {

// console.log(data)
// // When reading the csv, I must format variables:
// var yearCount = {};
// data.forEach(function (d) {
// var tempDate = parseDate(d.date);
// // console.log(tempData)
// var tempYear = tempDate.getFullYear();
// if (yearCount[tempYear] === undefined) {
//     yearCount[tempYear] = 1;
//     // d.year = tempYear
//     d['year'] = tempYear
// } else {
//     yearCount[tempYear] = yearCount[tempYear] + 1;
//     d['year'] = tempYear
// }

// });
// data.forEach(function (d) {
// var tempDate = parseDate(d.date);
// var tempYear = tempDate.getFullYear();
// // d.count = yearCount[tempYear]
// d['count'] = yearCount[tempYear]
// });

// databyyear = d3.group(data, d => d.year)
// console.log(databyyear)
// var yearByCount = []
// function makeYearCountDict(value, key, map) {
// if (key > 1899  && key < 1911) {
//     dict2 = {}
//     dict2['year'] = key
//     dict2['count'] = value.length
//     console.log("this is key", key)
//     var year = key
//     var count = value.length
//     yearByCount.push(
    
//     dict2
//     )
// }
// }
// console.log('70')
// databyyear.forEach(makeYearCountDict);
// console.log("yearByCount", yearByCount) 

// let title = svg.append("text")
// .attr("transform", `translate(${(graph_1_width - margin.right) / 2}, ${-10})`)       // HINT: Place this at the top middle edge of the graph
// .style("text-anchor", "middle")
// .style("font-size", 15);

// title.text(`Number of games played between 1900-1910`);

// var x = d3.scaleLinear()
// //   .domain([1900,1910])
// .domain(d3.extent(yearByCount, function(d) { return d.year; }))
// .range([ 0, graph_1_width ]);
// console.log("getting to x axis")
// svg.append("g")
// .attr("transform", "translate(0," + graph_1_height + ")")
// .call(d3.axisBottom(x));
// // Add Y axis
// var y = d3.scaleLinear()
// .domain([0,30])
// .range([ graph_1_height, 0 ]);
// console.log("graph 1 height", graph_1_height)
// svg.append("g")
// .call(d3.axisLeft(y));

// svg.append("text")
// .attr("transform", `translate(-100, ${(graph_1_height - margin.top - margin.bottom) / 2})`)       // HINT: Place this at the center left edge of the graph
// .style("text-anchor", "middle")
// .text("Number of Games");

// svg.append("text")
// .attr("transform", `translate(${(graph_2_width) / 2},
//                                 ${(graph_1_height + margin.top + margin.bottom)})`)       // HINT: Place this at the bottom middle edge of the graph
// .style("text-anchor", "middle")
// .text("Years");
// // Add the line
// svg.append("path")
// .datum(yearByCount)
// .attr("fill", "none")
// .attr("stroke", "#69b3a2")
// .attr("stroke-width", 1.5)
// .attr("d", d3.line()
// .x(function(d) { return x(d.year)})
// .y(function(d) { return y(d.count)})
// )
// // Add the points
// svg
// .append("g")
// .selectAll("dot")
// .data(yearByCount)
// .enter()
// .append("circle")
// // console.log("year printing", d['year'])
// .attr("cx", function(d) { return x(d.year) } )
// .attr("cy", function(d) { return y(d.count)} )
// .attr("r", 5)
// .attr("fill", "#69b3a2")
// console.log("hi")

// });

// console.log("getting to 132")

// //THIS IS GRAPH 2

// let svg2 = d3.select('#graph2')
// .append("svg")
// .attr("width", graph_2_width+margin.left + margin.right + 200)     // HINT: width
// .attr("height", graph_2_height + margin.top + margin.bottom + 100)     // HINT: height
// .append("g")
// // .attr("transform", `translate(${margin.left}, ${graph_1_height + margin.top})`);    // HINT: transform
// .attr("transform",
// "translate(" + margin.left + "," + margin.top + graph_1_height + 10 + ")");


// d3.csv("../data/football.csv").then(function(data) {

// // console.log(data)
// // When reading the csv, I must format variables:
// var yearCount = {};
// data.forEach(function (d) {

// if (d.home_score > d.away_score) {
//         d.winner = d.home_team;
// } else if (d.home_score < d.away_score) {
//         d.winner = d.away_team;
// } else {
//         d.winner = "tie";
// }
// });


// wins = d3.group(data, d => d.winner)
// // console.log(wins)
// var countryAndCount = []
// function makeCountryWinsDict(value, key, map) {
    
//     data.forEach(function (d) {
//         if (d.winner === key) {
//             d.wins = value.length
//         }
// })
// }
// wins.forEach(makeCountryWinsDict);
// // console.log("data", data) 

// home_games_played = d3.group(data, d=> d.home_team)
// // console.log('home_games_played', home_games_played)
// function makeHomeGames(value, key, map) {
// data.forEach(function (d) {
//     if (d.home_team === key) {
//         d.games = value.length
//     }
// })
// }
// home_games_played.forEach(makeHomeGames)
// // console.log("data + home games ", data)


// away_games_played = d3.group(data, d=> d.away_team) 
// console.log('away_games_played', away_games_played)
// function makeAwayGames(value, key, map) {
// data.forEach(function (d) {
//     if (d.home_team === key) {
//         d.games = d.games + value.length
//     }
// })
// }
// away_games_played.forEach(makeAwayGames)
// // console.log("data + total games", data)

// countries = []
// win_percent = []
// data.forEach(function (d) {
// dict = {}
// if (countries.includes(d.home_team) === false) {
//     if (d.winner != "tie" && d.winner === d.home_team) {
//     dict.country = d.home_team
//     dict.win_perc = (d.wins/d.games)
//     if (d.home_team === "Brazil") {
//         console.log("Brazil win percent", dict.win_perc)
//     }

//     dict.win = d.wins 
//     dict.games = d.games
//     win_percent.push(
//         dict
//     )
//     countries.push(d.home_team)
// }
// }
// }
// )
// console.log("win_percent", win_percent)
// win_percent.sort(function(b,a) {
// return a.win_perc - b.win_perc
// })

// console.log("win_percent 2", win_percent)
// top_10 = win_percent.slice(0,10)
// console.log("top 10", top_10)

// let title = svg2.append("text")
// .attr("transform", `translate(${(graph_2_width - margin.right) / 2}, ${-10})`)       // HINT: Place this at the top middle edge of the graph
// .style("text-anchor", "middle")
// .style("font-size", 15);

// title.text(`Top Performing Countries in the Past 150 Years`);

// var x = d3.scaleBand()
// .range([ 0, graph_2_width ])
// .domain(top_10.map(function(d) { return d.country; }))
// .padding(0.3);

// svg2.append("g")
// .attr("transform", "translate(0," + graph_2_height + ")")
// .call(d3.axisBottom(x))
// .selectAll("text")
// .attr("transform", "translate(-10,0)rotate(-45)")
// .style("text-anchor", "end");


// let y = d3.scaleLinear()
// .domain([0, 1])
// .range([(graph_2_height) ,0]);

// svg2.append("g")
// .call(d3.axisLeft(y).tickSize(0).tickPadding(10));

// var Tooltip = d3.select("#graph2")
// .append("div")
// .style("opacity", 0)
// .attr("class", "tooltip")
// .style("background-color", "white")
// .style("border", "solid")
// .style("border-width", "2px")
// .style("border-radius", "5px")
// .style("padding", "5px")

// var mouseover = function(d) {
// Tooltip
// .style("opacity", 1)
// d3.select(this)
// .style("stroke", "blue")
// .style("opacity", 1)
// }

// var mouseleave = function(d) {
// Tooltip
// .style("opacity", 0)
// d3.select(this)
// .style("stroke", "none")
// .style("opacity", 0.8)
// }

// var mousemove = function(d) {
// Tooltip
// .html("Number of wins: " + d.win)
// .style("left", (d3.mouse(this)[0]+70) + "px")
// .style("top", (d3.mouse(this)[1]) + "px")
// }

// svg2.selectAll("bar")
// .data(top_10)
// .enter()
// .append("rect")
//     .attr("x", function(d) { return x(d.country); })
//     .attr("y", function(d) { return y(d.win_perc) + graph_1_height + 10; })
//     .attr("width", x.bandwidth())
//     .attr("height", function(d) { return graph_2_height  - y(d.win_perc); })
//     .attr("fill", "#69b3a2")
// .on('mouseover', mouseover)
// .on('mousemove', mousemove)
// .on('mouseleave', mouseleave)
// svg2.append("text")
// .attr("transform", `translate(${(graph_2_width) / 2},
//                                 ${(graph_2_height + margin.top + margin.bottom + graph_1_height + 30)})`)       // HINT: Place this at the bottom middle edge of the graph
// .style("text-anchor", "middle")
// .text("Countries");

// svg2.append("text")
// .attr("transform", `translate(-100, ${(graph_2_height - margin.top - margin.bottom) / 2})`)       // HINT: Place this at the center left edge of the graph
// .style("text-anchor", "middle")
// .text("Winning Percentage");
// });


// //SVG3 starsts here

// let svg3 = d3.select('#graph2')
// .append("svg")
// .attr("width", graph_3_width+margin.left + margin.right + 200)     // HINT: width
// .attr("height", graph_3_height + margin.top + margin.bottom + 100)     // HINT: height
// .append("g")
// // .attr("transform", `translate(${margin.left}, ${graph_1_height + margin.top})`);    // HINT: transform
// .attr("transform",
// "translate(" + margin.left + "," + margin.top + graph_2_height+ 10 +graph_1_height+ ")");

// var parseDate = d3.timeParse("%Y-%m-%d");

// let x = d3.scaleLinear()
// .range([0, graph_3_width - margin.left - margin.right]);

// // d3.select("#chart")
// //     .append("button")
// //     .attr("float", "left")
// //     .on("click", changewiggle);
// // TODO: Create a scale band for the y axis (artist)
// let y = d3.scaleBand()
// .range([0, graph_3_height - margin.top - margin.bottom])
// .padding(0.1);  // Improves readability
// /*
// Here we will create global references to the x and y axis with a fixed range.
// We will update the domain of the axis in the setData function based on which data source
// is requested.
// */

// // Set up reference to count SVG group
// let countRef = svg3.append("g");
// // Set up reference to y axis label to update text in setData
// let y_axis_label = svg3.append("g");

// // TODO: Add x-axis label
// svg3.append("text")
// .attr("transform", `translate(${(graph_3_width - margin.left - margin.right) / 2},
//                                 ${(graph_3_height - margin.top - margin.bottom) + 15})`)       // HINT: Place this at the bottom middle edge of the graph
// .style("text-anchor", "middle")
// .text("Count");
// // Since this text will not update, we can declare it outside of the setData function


// // TODO: Add y-axis label
// let y_axis_text = svg3.append("text")
// .attr("transform", `translate(-120, ${(graph_3_height - margin.top - margin.bottom) / 2})`)       // HINT: Place this at the center left edge of the graph
// .style("text-anchor", "middle");

// // TODO: Add chart title
// let title = svg3.append("text")
// .attr("transform", `translate(${(graph_3_width - margin.left - margin.right) / 2}, ${-10})`)       // HINT: Place this at the top middle edge of the graph
// .style("text-anchor", "middle")
// .style("font-size", 15);


// function changeURL(url){
//     window.location = url;

// }
// function setData(index, attr) { 
// d3.csv("../data/football.csv").then(function(data) {

// // console.log(data)
// // When reading the csv, I must format variables:
// data.forEach(function (d) {
// var tempDate = parseDate(d.date);
// // console.log(tempData)
// var tempYear = tempDate.getFullYear();
// d.year = tempYear
// });

// //   console.log('data', data)

// var data2 = []
// data.forEach(function (d) {
//     dict = {}
//     if (d.tournament === "FIFA World Cup") {
//         if (d.year === 2018 || d.year === 2014) {
//             dict.home_team = d.home_team
//             dict.away_team = d.away_team
//             dict.home_score = d.home_score
//             dict.away_score = d.away_score
//             dict.year = d.year
//             data2.push(
//                 dict
//             )
                
//         }
//     }
    
// });
// console.log("data2", data2)

// data2.forEach(function (d) {

//     if (d.home_score > d.away_score) {
//             d.winner = d.home_team;
//     } else if (d.home_score < d.away_score) {
//             d.winner = d.away_team;
//     } else {
//             d.winner = "tie";
//     }
// });

// wins = d3.group(data2, d => d.winner)
// console.log(wins)
// var countryAndCount = []
// function makeCountryWinsDict(value, key, map) {
    
//     data2.forEach(function (d) {
//         if (d.winner === key) {
//             d.wins = value.length
//         }
// });
// }
// wins.forEach(makeCountryWinsDict);
// // console.log("data2 + wins", data2) 

// home_games_played = d3.group(data2, d=> d.home_team)
// // console.log('home_games_played', home_games_played)
// function makeHomeGames(value, key, map) {
// data2.forEach(function (d) {
//     if (d.home_team === key) {
//         d.games1 = value.length
//     }
// });
// }
// home_games_played.forEach(makeHomeGames)
// // console.log("data + home games ", data)


// away_games_played = d3.group(data2, d=> d.away_team) 
// console.log('away_games_played', away_games_played)
// function makeAwayGames(value, key, map) {
// data2.forEach(function (d) {
//     if (d.home_team === key) {
//         d.games = d.games1 + value.length
//     }
// });
// }
// away_games_played.forEach(makeAwayGames)
// console.log("data2 + total games", data2)

// countries = []
// win_percent = []
// data2.forEach(function (d) {
// dict = {}
// if (countries.includes(d.home_team) === false) {
//     if (d.winner != "tie" && d.winner === d.home_team) {
    
//     dict.country = d.home_team
//     dict.win_perc = (d.wins/d.games)
//     dict.wins = d.wins 
//     dict.games = d.games
//     win_percent.push(
//         dict
//     )
//     countries.push(d.home_team)
// }
// } 
// }
// )
// console.log("win_percent", win_percent)
// win_percent.sort(function(b,a) {
// return a.win_perc - b.win_perc
// })

// console.log("win_percent 2", win_percent)
// console.log("win_percent 3", win_percent)
// top_15 = win_percent.slice(0,15)
// console.log("top 15", top_15)

// num_wins = []
// win_p = []
// top_15.forEach(function (d) {
// num_wins_dict = {}
// win_p_dict = {}
// num_wins_dict.country = d.country
// num_wins_dict.count = d.wins
// win_p_dict.country = d.country
// win_p_dict.count = d.win_perc
// num_wins.push(
// num_wins_dict
// )
// win_p.push(
// win_p_dict
// )
// })
// console.log('num_wins', num_wins)
// console.log('win p', win_p)

// num_wins.sort(function(b,a) {
// return a.count - b.count
// })
// console.log('num wins sorted', num_wins)
// let filenames = [win_p,num_wins]

// // TODO: Create a linear scale for the x axis (number of occurrences)



// data = filenames[index]
// x.domain([0, d3.max(data, function(d) {return d.count})])
// y.domain(data.map(function(d) { return d[attr] }));
// // color.domain(data.map(function(d) { return d[attr] }));

// y_axis_label.call(d3.axisLeft(y).tickSize(0).tickPadding(10));

// svg3.selectAll("rect").remove();

// let bars = svg3.selectAll("rect").data(data);

// bars.enter()
// .append("rect")
// .merge(bars)
// .transition()
// .duration(1000)
// .attr("fill", "#69b3a2")
// // .attr("fill", function(d) { return color(d[attr]) })    // OPTIONAL for students
// .attr("x", x(0))
// .attr("y", function(d) { return y(d[attr]); })               // HINT: Use function(d) { return ...; } to apply styles based on the data point
// .attr("width", function(d) { return x((d.count)); })
// .attr("height",  y.bandwidth());        // HINT: y.bandwidth() makes a reasonable display height

// let counts = countRef.selectAll("text").data(data);

// counts.enter()
// .append("text")
// .merge(counts)
// .transition()
// .duration(1000)
// .attr("x", function(d) { return x(d.count) + 10; })       // HINT: Add a small offset to the right edge of the bar, found by x(d.count)
// .attr("y", function(d) { return y(d[attr]) + 10; })       // HINT: Add a small offset to the top edge of the bar, found by y(d.artist)
// .style("text-anchor", "start")
// .text(function(d) {return d.count;});           // HINT: Get the count of the artist

// y_axis_text.text(sentenceCase(attr));
// title.text(`Top ${sentenceCase(attr)}s in Last Two World Cups`);

// // Remove elements not in use if fewer groups in new dataset
// bars.exit().remove();
// counts.exit().remove();


// });

// }

// setData(0, "country")

// function sentenceCase(word) {
// return `${word[0].toUpperCase()}${word.substring(1)}`;
// }

// function cleanData(data, comparator, numExamples) {
// return data.sort(comparator).slice(0, 20);
// }

