// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newUser = req.body;
  
  
    res.json(newUser);
  });



var database = [];
var guy1 = {
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
var guy2 = {
    "name": "john",
    "photo": "https://millercenter.org/sites/default/files/styles/teaser_thumb_med_2x/public/feat2-Adams_BrooklynMuseum-276x155.jpg?itok=OxnodpCS",
    "scores":[
      3,
      1,
      5,
      5,
      3,
      4,
      4,
      2,
      3,
      1   
    ]  
}
var guy3 = {
    "name": "Will",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOVvfTN9D2vX260_fDV8EZqxwONxfghWYJWpY6LqsHXGuzVud",
    "scores": [
        1,
        3,
        1,
        1,
        3,
        2,
        2,
        4,
        3,
        5 
    ]
}

var results = [];
var number = 0;
function compare(x,y,z) {
for(i=0; i<x.length; i++){
var holder = Math.abs(y.scores[i] - z.scores[i]);
results.push(holder)
    }
}
function compile(x) {
for(i=0; i<x.length; i++){
number = number + x[i]
database.push(number) 
    }
}
compare(guy2.scores, guy1, guy2);
compile(results);
//start listener
app.listen(port);



