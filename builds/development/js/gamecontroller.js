myApp.controller('GameController', ['$scope', function($scope) {
	$scope.bingo = new Bingo();
	$scope.preGame = true;
	$scope.gameRunning = false;
	$scope.showCards = false;
	$scope.toggleCardsMessage = "Show Player Cards";
	$scope.gameSpeed = $scope.bingo.gameSpeed;


	$scope.setNumberOfPlayers = function() {
		$scope.bingo.setNumberOfPlayers($scope.numOfPlayers);
		$scope.bingo.distributeCards();

		// reset cards if already showing
		$scope.showCards = false;
		$scope.selectedPlayer = '';
		
	};

	// modify the game speed through the two-way binding
	$scope.setGameSpeed = function() {
		$scope.bingo.gameSpeed = $scope.gameSpeed;
	};

	// start the game
	$scope.beginGame = function() {
		// check if the number of players has been selcted
		if ( $scope.bingo.players.length ) { // start the game
			$scope.preGame = false;
			$scope.gameRunning = true;
			$scope.bingo.runGame();
		} else { // alert the user to select the number of players
			alert('Please select the number of players');
		}
	};

	// pause the game
	$scope.pauseGame = function() {
		$scope.gameRunning = false;
		$scope.bingo.stopGame();
	};

	// resume the game
	$scope.resumeGame = function() {
		$scope.gameRunning = true;
		$scope.bingo.runGame();
	};

	// view the player cards to confirm a bingo
	// modify the button text
	$scope.toggleCards = function() {
		if ( $scope.showCards === false ) {
			$scope.showCards = true;
			$scope.toggleCardsMessage = "Hide Player Cards";
		} else {
			$scope.showCards = false;
			$scope.toggleCardsMessage = "Show Player Cards";
		}
	};

	// set the playerInfo binding to the selected player in order
	//   to display the player's card and highlight the numbers
	//   on the player's card that have been called
	$scope.showPlayer = function() {
		$scope.playerInfo = $scope.bingo.players[$scope.selectedPlayer - 1];
		setTimeout( function() { 
			$scope.bingo.highlightFreeSpaces();
			$scope.bingo.highlightCalledNumbers();
		}, 1000);
	};	

}]);