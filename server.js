var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
//console.log(app);
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);

var friends = [];

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
})

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });

app.post("/newfriend", function(req, res) {
    console.log(res);
    friends.push(req.body);
    res.send(friends);
  });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + 3000);
});
