//simple server to run the angular app

var express = require('express');
var app = express();
var path = require('path');

var PORT = 8000;

app.get('/', function(req,res){

	res.sendFile(path.join(__dirname + '/index.html'));

});

app.get('/index.html', function(req,res){

	res.sendFile(path.join(__dirname + '/index.html'));

});


app.get('/app.js', function(req,res){
	console.log('called app.js');
	res.sendFile(path.join(__dirname + '/app.js'));

});

app.get('/pages/main.html', function(req,res){
	console.log('main requested');
	res.sendFile(path.join(__dirname + '/pages/main.html'));
});

app.get('/pages/forecast.html', function(req,res){
	console.log('forecast requested');
	res.sendFile(path.join(__dirname + '/pages/forecast.html'));
});


app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});