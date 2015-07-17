//SERVICES

myApp.service('cityService', function(){

	this.city = 'Boston';

});

myApp.service('weatherService', ['$resource', function($resource){

	this.GetWeather = function(city, days){

			var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
			callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

			return weatherApi.get({
				q: city, cnt: days
			});

	}

}]);