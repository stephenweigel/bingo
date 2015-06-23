var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

// Routes

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'views/home.html',
			controller: 'BingoController'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);

// Controllers

var appControllers = angular.module('appControllers',[]);


appControllers.controller('BingoController', ['$scope', function($scope){
	angular.element(document).ready(function () {
		
	}); // document.ready
}]); // BingoController
