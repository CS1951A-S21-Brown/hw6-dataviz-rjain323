// Add your JavaScript code here
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
let graph_1_width = (MAX_WIDTH / 2) - 10, graph_1_height = 250;
let graph_2_width = (MAX_WIDTH / 2) - 10, graph_2_height = 275;
let graph_3_width = MAX_WIDTH / 2, graph_3_height = 575;
let svg = d3.select('#graph2')
    .append("svg")
    .attr("width", graph_2_width+margin.left + margin.right + 200)     // HINT: width
    .attr("height", graph_2_height + margin.top + margin.bottom + 100)     // HINT: height
    .append("g")
    // .attr("transform", `translate(${margin.left}, ${graph_1_height + margin.top})`);    // HINT: transform
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");


    d3.csv("../data/football.csv").then(function(data) {

        // console.log(data)
      // When reading the csv, I must format variables:
        var yearCount = {};
        data.forEach(function (d) {
       
            if (d.home_score > d.away_score) {
                    d.winner = d.home_team;
            } else if (d.home_score < d.away_score) {
                    d.winner = d.away_team;
            } else {
                    d.winner = "tie";
            }
        });

        
        wins = d3.group(data, d => d.winner)
        // console.log(wins)
        var countryAndCount = []
        function makeCountryWinsDict(value, key, map) {
           
            data.forEach(function (d) {
                if (d.winner === key) {
                    d.wins = value.length
                }
        })
    }
    wins.forEach(makeCountryWinsDict);
    // console.log("data", data) 

    home_games_played = d3.group(data, d=> d.home_team)
    // console.log('home_games_played', home_games_played)
    function makeHomeGames(value, key, map) {
        data.forEach(function (d) {
            if (d.home_team === key) {
                d.games = value.length
            }
    })
    }
    home_games_played.forEach(makeHomeGames)
    // console.log("data + home games ", data)


    away_games_played = d3.group(data, d=> d.away_team) 
    console.log('away_games_played', away_games_played)
    function makeAwayGames(value, key, map) {
        data.forEach(function (d) {
            if (d.home_team === key) {
                d.games = d.games + value.length
            }
    })
}
    away_games_played.forEach(makeAwayGames)
    // console.log("data + total games", data)
    
    countries = []
    win_percent = []
    data.forEach(function (d) {
        dict = {}
        if (countries.includes(d.home_team) === false) {
            if (d.winner != "tie" && d.winner === d.home_team) {
            dict.country = d.home_team
            dict.win_perc = (d.wins/d.games)
            if (d.home_team === "Brazil") {
                console.log("Brazil win percent", dict.win_perc)
            }

            dict.win = d.wins 
            dict.games = d.games
            win_percent.push(
                dict
            )
            countries.push(d.home_team)
        }
    }
    }
    )
    console.log("win_percent", win_percent)
    win_percent.sort(function(b,a) {
        return a.win_perc - b.win_perc
    })
   
    console.log("win_percent 2", win_percent)
    top_10 = win_percent.slice(0,10)
    console.log("top 10", top_10)

    let title = svg.append("text")
    .attr("transform", `translate(${(graph_2_width - margin.right) / 2}, ${-10})`)       // HINT: Place this at the top middle edge of the graph
    .style("text-anchor", "middle")
    .style("font-size", 15);

    title.text(`Top Performing Countries in the Past 150 Years`);

    var x = d3.scaleBand()
    .range([ 0, graph_2_width ])
    .domain(top_10.map(function(d) { return d.country; }))
    .padding(0.3);

    svg.append("g")
    .attr("transform", "translate(0," + graph_2_height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");


    let y = d3.scaleLinear()
        .domain([0, 1])
        .range([(graph_2_height) ,0]);
    
    svg.append("g")
        .call(d3.axisLeft(y).tickSize(0).tickPadding(10));
    
  var Tooltip = d3.select("#graph2")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px")

var mouseover = function(d) {
  Tooltip
    .style("opacity", 1)
  d3.select(this)
    .style("stroke", "blue")
    .style("opacity", 1)
}

var mouseleave = function(d) {
  Tooltip
    .style("opacity", 0)
  d3.select(this)
    .style("stroke", "none")
    .style("opacity", 0.8)
}

var mousemove = function(d) {
    Tooltip
      .html("Number of wins: " + d.win)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }

    svg.selectAll("bar")
        .data(top_10)
        .enter()
        .append("rect")
          .attr("x", function(d) { return x(d.country); })
          .attr("y", function(d) { return y(d.win_perc); })
          .attr("width", x.bandwidth())
          .attr("height", function(d) { return graph_2_height  - y(d.win_perc); })
          .attr("fill", "#69b3a2")
        .on('mouseover', mouseover)
        .on('mousemove', mousemove)
        .on('mouseleave', mouseleave)
    svg.append("text")
        .attr("transform", `translate(${(graph_2_width) / 2},
                                        ${(graph_2_height + margin.top + margin.bottom + 30)})`)       // HINT: Place this at the bottom middle edge of the graph
        .style("text-anchor", "middle")
        .text("Countries");

    svg.append("text")
        .attr("transform", `translate(-100, ${(graph_2_height - margin.top - margin.bottom) / 2})`)       // HINT: Place this at the center left edge of the graph
        .style("text-anchor", "middle")
        .text("Winning Percentage");
    });