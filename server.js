//simple server to run the angular app

var express = require('express');
var app = express();
var path = require('path');

var PORT = 3000;

app.get('/', function(req,res){

	res.sendFile(path.join(__dirname + '/index.html'));

});

app.get('/app.js', function(req,res){

	res.sendFile(path.join(__dirname + '/app.js'));
});

app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});