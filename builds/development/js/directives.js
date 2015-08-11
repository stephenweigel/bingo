// // Directives
angular.module('myApp.directives', []);
angular.module('myApp.directives')
.directive('bingoScoreboard', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/bingo_scoreboard.html'
	};
})

.directive('numberOfPlayers', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/number_of_players.html'
	};
})

.directive('gameStatus', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/game_status.html'
	};
})

.directive('gameSpeed', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/game_speed.html'
	};
})

.directive('gameButtons', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/game_buttons.html'
	};
})

.directive('playerSelection', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/player_selection.html'
	};
})

.directive('playerCards', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/directives/player_cards.html'
	};
});