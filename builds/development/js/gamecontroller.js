myApp.controller('GameController', ['$scope', function($scope) {
	$scope.bingo = new Bingo();
	$scope.preGame = true;
	$scope.gameRunning = false;
	$scope.players = [];
	$scope.cardsPerPlayer = 9;
	$scope.showCards = false;
	$scope.toggleCardsMessage = "Show Player Cards";
	$scope.bingoCard = new BingoCard();
	$scope.gameSpeed = $scope.bingo.gameSpeed;


	$scope.setNumberOfPlayers = function() {
		$scope.players = [];
		for ( var x = 0; x < $scope.numOfPlayers; x++ ) {
			$scope.players.push(new Player(x + 1));
		}
		$scope.distributeCards();

		// reset cards if already showing
		$scope.showCards = false;
		$scope.selectedPlayer = '';
		
	};

	// modify the game speed through the two-way binding
	$scope.setGameSpeed = function() {
		$scope.bingo.gameSpeed = $scope.gameSpeed;
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

	// highlight the called numbers on a players card
	// ** should probably be moved to the BingoCard object
	$scope.highlightCalledNumbers = function() {
		var calledNumbers = $scope.bingo.usedNumbers;
		for ( var x = 0; x < calledNumbers.length; x++ ) {
			var num = calledNumbers[x].slice(1);
			$scope.bingo.highlightPlayerCard(num);
		}
	};

	// highlight free spaces when checking a player's card
	// ** should probably be moved to the BingoCard object
	$scope.highlightFreeSpaces = function() {
		$scope.bingo.highlightPlayerCard('Free');
	};


	// set the playerInfo binding to the selected player in order
	//   to display the player's card and highlight the numbers
	//   on the player's card that have been called
	$scope.showPlayer = function() {
		$scope.playerInfo = $scope.players[$scope.selectedPlayer - 1];
		setTimeout( function() { 
			$scope.highlightFreeSpaces();
			$scope.highlightCalledNumbers();
		}, 1000);
	};

	// assign bingo cards to each of the players
	// ** should probably be moved to the BingoCard object
	$scope.distributeCards = function() {		
		// generate numbers and assign them to players
		for ( var i = 0; i < $scope.players.length; i++ ) {
			for ( var x = 0; x < $scope.cardsPerPlayer; x++) { 
				$scope.players[i].cards
					.push($scope.bingoCard.generateBingoCardNumbers());
			}
		}
	};

	// start the game
	$scope.beginGame = function() {
		// check if the number of players has been selcted
		if ( $scope.players.length ) { // start the game
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
	

}]);