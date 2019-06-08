		// loading data and info from friends //
var friends = require("../data/friends");

module.exports = function (app) {
	
		// GET request //
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    var resultsScore = 0;
    var potFriendScores = [];

		// POST request //
    app.post("/api/friends", function (req, res) {

	var surveyResults = req.body.scores;

		// for loop to determine the best match //
	for (var i = 0; i < friends.length; i++) {

		// user's number placed in an array //
		var compScore = friends[i].scores;

		// compares the scores of the user //
		resultsScore = currentUserScore(surveyResults, compScore);

		// Build the array of user compatibility scores //
		potFriendScores.push(resultsScore);
	}

	var index = 0;
	var value = friendScores[0];

		// for loop to compare the index of the lowest score of potential friends //
	for (var i = 0; i < potFriendScores.length; i++) {
		if (potFriendScores[i] < value) {
			value = potFriendScores[i];
			index = i;
	}
}

		// the new friend results //
	console.log("Your new friend's name: " + friends[index].name);

		// sent friend results so it can be send as modal //
	res.send(friends[index]);

		// push new user to array to begin
	friends.push(req.body);

    });
};

var comparisonDifference = 0;

		// Total difference between current user and another user //
function currentUserScore(surveyResults, compScore) {

		// Reset the score for the best matched friend //
    comparisonDifference = 0;

    for (var i = 0; i < surveyResults.length; i++) {

        comparisonDifference += Math.abs(surveyResults[i] - compScore[i]);
    }

    return comparisonDifference;
};




