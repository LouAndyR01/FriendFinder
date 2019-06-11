var path = require('path');
var friends = require('../data/friends');

module.exports = function (app) {
	
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

		// calculating for the best friend match //
    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userDataScore = req.body.scores;
        var difference;
        var totalDifference = 1000;
        var match = {
            name: null,
            photo: null
        };

		 // checking friends for best match, checking difference in scores //
        for (var i = 0; i < friends.length; i++) {
            if (userData.name !== friends[i].name) {
                difference = 0;
                for (var j = 0; j < friends[i].scores.length; j++) {
                    difference += Math.abs(
                        parseInt(userDataScore[j]) - parseInt(friends[i].scores[j])
                    );
                }
                if (difference < totalDifference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    totalDifference = difference;
                }
            }
        }
        return res.json(match);
    });
}