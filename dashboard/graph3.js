// Add your JavaScript code here
const MAX_WIDTH = Math.max(1080, window.innerWidth);
const MAX_HEIGHT = 720;
const margin = {top: 40, right: 100, bottom: 40, left: 175};
/*
columns names: date, home_team, away_team, home_score, away_score, tournament, city, country, neutral

*/

// Assumes the same graph width, height dimensions as the example dashboard. Feel free to change these if you'd like
let graph_1_width = (MAX_WIDTH / 2) - 10, graph_1_height = 250;
let graph_2_width = (MAX_WIDTH / 2) - 10, graph_2_height = 275;
let graph_3_width = MAX_WIDTH / 2, graph_3_height = 575;
let svg = d3.select('#graph2')
    .append("svg")
    .attr("width", graph_3_width+margin.left + margin.right + 200)     // HINT: width
    .attr("height", graph_3_height + margin.top + margin.bottom + 100)     // HINT: height
    .append("g")
    // .attr("transform", `translate(${margin.left}, ${graph_1_height + margin.top})`);    // HINT: transform
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

    var parseDate = d3.timeParse("%Y-%m-%d");

    let x = d3.scaleLinear()
    .range([0, graph_3_width - margin.left - margin.right]);

// d3.select("#chart")
//     .append("button")
//     .attr("float", "left")
//     .on("click", changewiggle);
// TODO: Create a scale band for the y axis (artist)
let y = d3.scaleBand()
    .range([0, graph_3_height - margin.top - margin.bottom])
    .padding(0.1);  // Improves readability
/*
    Here we will create global references to the x and y axis with a fixed range.
    We will update the domain of the axis in the setData function based on which data source
    is requested.
 */

// Set up reference to count SVG group
let countRef = svg.append("g");
// Set up reference to y axis label to update text in setData
let y_axis_label = svg.append("g");

// TODO: Add x-axis label
svg.append("text")
    .attr("transform", `translate(${(graph_3_width - margin.left - margin.right) / 2},
                                        ${(graph_3_height - margin.top - margin.bottom) + 15})`)       // HINT: Place this at the bottom middle edge of the graph
    .style("text-anchor", "middle")
    .text("Count");
// Since this text will not update, we can declare it outside of the setData function


// TODO: Add y-axis label
let y_axis_text = svg.append("text")
    .attr("transform", `translate(-120, ${(graph_3_height - margin.top - margin.bottom) / 2})`)       // HINT: Place this at the center left edge of the graph
    .style("text-anchor", "middle");

// TODO: Add chart title
let title = svg.append("text")
    .attr("transform", `translate(${(graph_3_width - margin.left - margin.right) / 2}, ${-10})`)       // HINT: Place this at the top middle edge of the graph
    .style("text-anchor", "middle")
    .style("font-size", 15);



function setData(index, attr) { 
d3.csv("/data/football.csv").then(function(data) {

        // console.log(data)
      // When reading the csv, I must format variables:
      data.forEach(function (d) {
        var tempDate = parseDate(d.date);
        // console.log(tempData)
        var tempYear = tempDate.getFullYear();
        d.year = tempYear
      });
      
    //   console.log('data', data)
    
        var data2 = []
        data.forEach(function (d) {
            dict = {}
            if (d.tournament === "FIFA World Cup") {
                if (d.year === 2018 || d.year === 2014) {
                    dict.home_team = d.home_team
                    dict.away_team = d.away_team
                    dict.home_score = d.home_score
                    dict.away_score = d.away_score
                    dict.year = d.year
                    data2.push(
                        dict
                    )
                      
                }
            }
           
        });
        console.log("data2", data2)

        data2.forEach(function (d) {
       
            if (d.home_score > d.away_score) {
                    d.winner = d.home_team;
            } else if (d.home_score < d.away_score) {
                    d.winner = d.away_team;
            } else {
                    d.winner = "tie";
            }
        });
        
        wins = d3.group(data2, d => d.winner)
        console.log(wins)
        var countryAndCount = []
        function makeCountryWinsDict(value, key, map) {
           
            data2.forEach(function (d) {
                if (d.winner === key) {
                    d.wins = value.length
                }
        });
    }
    wins.forEach(makeCountryWinsDict);
    // console.log("data2 + wins", data2) 

    home_games_played = d3.group(data2, d=> d.home_team)
    // console.log('home_games_played', home_games_played)
    function makeHomeGames(value, key, map) {
        data2.forEach(function (d) {
            if (d.home_team === key) {
                d.games1 = value.length
            }
    });
    }
    home_games_played.forEach(makeHomeGames)
    // console.log("data + home games ", data)


    away_games_played = d3.group(data2, d=> d.away_team) 
    console.log('away_games_played', away_games_played)
    function makeAwayGames(value, key, map) {
        data2.forEach(function (d) {
            if (d.home_team === key) {
                d.games = d.games1 + value.length
            }
    });
}
    away_games_played.forEach(makeAwayGames)
    console.log("data2 + total games", data2)
    
    countries = []
    win_percent = []
    data2.forEach(function (d) {
        dict = {}
        if (countries.includes(d.home_team) === false) {
            if (d.winner != "tie" && d.winner === d.home_team) {
            
            dict.country = d.home_team
            dict.win_perc = (d.wins/d.games)
            dict.wins = d.wins 
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
//     // function removeTies(arr, value) {
//     //     return arr.filter(function(ele){

//     //     })
//     // }
    console.log("win_percent 2", win_percent)
    console.log("win_percent 3", win_percent)
    top_15 = win_percent.slice(0,15)
    console.log("top 15", top_15)

num_wins = []
win_p = []
top_15.forEach(function (d) {
    num_wins_dict = {}
    win_p_dict = {}
    num_wins_dict.country = d.country
    num_wins_dict.count = d.wins
    win_p_dict.country = d.country
    win_p_dict.count = d.win_perc
    num_wins.push(
        num_wins_dict
    )
    win_p.push(
        win_p_dict
    )
})
console.log('num_wins', num_wins)
console.log('win p', win_p)

num_wins.sort(function(b,a) {
    return a.count - b.count
})
console.log('num wins sorted', num_wins)
let filenames = [win_p,num_wins]

// TODO: Create a linear scale for the x axis (number of occurrences)



    data = filenames[index]
    x.domain([0, d3.max(data, function(d) {return d.count})])
    y.domain(data.map(function(d) { return d[attr] }));
    // color.domain(data.map(function(d) { return d[attr] }));

    y_axis_label.call(d3.axisLeft(y).tickSize(0).tickPadding(10));

    svg.selectAll("rect").remove();

    let bars = svg.selectAll("rect").data(data);

    bars.enter()
        .append("rect")
        .merge(bars)
        .transition()
        .duration(1000)
        .attr("fill", "#69b3a2")
        // .attr("fill", function(d) { return color(d[attr]) })    // OPTIONAL for students
        .attr("x", x(0))
        .attr("y", function(d) { return y(d[attr]); })               // HINT: Use function(d) { return ...; } to apply styles based on the data point
        .attr("width", function(d) { return x((d.count)); })
        .attr("height",  y.bandwidth());        // HINT: y.bandwidth() makes a reasonable display height

        let counts = countRef.selectAll("text").data(data);

    counts.enter()
        .append("text")
        .merge(counts)
        .transition()
        .duration(1000)
        .attr("x", function(d) { return x(d.count) + 10; })       // HINT: Add a small offset to the right edge of the bar, found by x(d.count)
        .attr("y", function(d) { return y(d[attr]) + 10; })       // HINT: Add a small offset to the top edge of the bar, found by y(d.artist)
        .style("text-anchor", "start")
        .text(function(d) {return d.count;});           // HINT: Get the count of the artist

    y_axis_text.text(sentenceCase(attr));
    title.text(`Top ${sentenceCase(attr)}s in Last Two World Cups`);

    // Remove elements not in use if fewer groups in new dataset
    bars.exit().remove();
    counts.exit().remove();

    
});

}

setData(0, "country")

function sentenceCase(word) {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
}






    
