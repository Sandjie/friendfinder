var path = require('path');
var bodyParser = require('body-parser');
var express = require("express");

// Create express app instance.
var app = express();



//Express app uses to parse info
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.get('/', function (req, res) {
  res.send('hello world')
})