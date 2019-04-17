const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const addUser = require("./dbConnection");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.post("/addUser", function(req, res) {
  addUser(JSON.parse(req.body));
  res.send("ok");
});
app.use(express.static("build", { extensions: ["html"] }));

module.exports = app;
