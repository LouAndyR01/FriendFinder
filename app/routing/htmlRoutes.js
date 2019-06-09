    // dependencies package for the html //
var path = require("path");

module.exports = function(app) {

    // html get request for users, displays content //
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

    // default //
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};

