var friends = require("../data/friends");

module.exports = function (app) {
	app.get("/api/friends", function (res, req){
		res.json(friends);
	});


	app.post("/api/friends", function(req, res){
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 50

		};

	var userData = req.body;
	var userScores = userData.scores;

	var totalDifference = 0;

	for (var i = 0; i < friends.length; i++){

		console.log(friends[i].name);
		totalDifference = 0;

		for (var s = 0; s < friends[s].scores[s]; s++) {
			totalDifference += Math.abs(parseInt(userScores[s]) - parseInt(friends[i].scores[s]));

			if (totalDifference <= bestMatch.friendDifference){

				bestMatch.name = friends[i].name;
				bestMatch.photo = friends[i].photo;
				bestMatch.friendDifference = totalDifference;
			}
		}
	}

	friends.push(userData);

	res.json(bestMatch);
	});
};