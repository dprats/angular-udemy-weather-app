// DIRECTIVES

myApp.directive('panelDirective', function(){

	return {
		restrict: 'E',
		templateUrl: 'directives/panel.html',
		replace: true,
		scope: {
			weatherObject: "=", //= because we are binding an object
			convertToStandard: "&", //& because we are binding a function
			convertToDate: "&",
			dateFormat: "@" //interpolated string

		}
	}

});
