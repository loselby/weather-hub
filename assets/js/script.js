// declare variables related to API call
var APIkey = "7bf5850a0af8a9b096b521ae4589d3bf";
var cityState;
var queryURL ="http://api.openweathermap.org/data/2.5/weather?q=" + cityState + "&appid=" + APIkey;

fetch(queryURL)