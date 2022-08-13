
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
// app.use(express.static('public'));
app.use(express.static(__dirname + "/public", {
  index: false, 
  immutable: true, 
  cacheControl: true,
  maxAge: "30d"
}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values


module.exports = app;