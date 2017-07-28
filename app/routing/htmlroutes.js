//Routes
var path = require('path');

module.exports =function(app){
	app.get("/survey", function (req, res){
		res.sendFile(path.join(__dirname, "/..public/survey.html"));
	});

	app.use(function(res, res){
		res.sendFile(path.join(__dirname, "/../public/index.html"));
	});
};