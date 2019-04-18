const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { isValidUser, addPost } = require("./dbConnection");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.post("/login", function(req, res) {
  const userData = JSON.parse(req.body);
  isValidUser(userData, res);
});

app.post("/addPost", function(req, res) {
  const userData = JSON.parse(req.body);
  addPost(userData, res);
});
app.use(express.static("build", { extensions: ["html"] }));

module.exports = app;
