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
})
.get('/app.js', function(req,res){
	console.log('called app.js');
	res.sendFile(path.join(__dirname + '/app.js'));

})
.get('/pages/main.html', function(req,res){
	console.log('main requested');
	res.sendFile(path.join(__dirname + '/pages/main.html'));
})
.get('/pages/forecast.html', function(req,res){
	console.log('forecast requested');
	res.sendFile(path.join(__dirname + '/pages/forecast.html'));
})
.get('/routes.js', function(req,res){
	console.log('called routes.js');
	res.sendFile(path.join(__dirname + '/routes.js'));

})
.get('/services.js', function(req,res){
	res.sendFile(path.join(__dirname + '/services.js'));

})
.get('/controllers.js', function(req,res){
	console.log('called controllers.js');
	res.sendFile(path.join(__dirname + '/controllers.js'));

})
.get('/directives.js', function(req,res){
	console.log('called directives.js');
	res.sendFile(path.join(__dirname + '/directives.js'));

})
.get('/directives/panel.html', function(req,res){
	console.log('panel directive requested');
	res.sendFile(path.join(__dirname + '/directives/panel.html'));
});


app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});