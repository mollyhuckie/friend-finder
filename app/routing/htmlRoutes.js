var path = require("path");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/reserve.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};