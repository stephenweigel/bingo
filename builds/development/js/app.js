var myApp = angular.module('myApp', ['ngRoute']);

// Routes

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'views/home.html',
			controller: 'GameController'
		}).
		when('/cards', {
			templateUrl: 'views/cards.html',
			controller: 'CardsController'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);

// Controllers

angular.module('appControllers',[]);


