//installing dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//connection made
// console.log("listening on PORT: " + PORT);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// applying the api and html routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
console.log("listening on PORT: " + PORT);
});

