myApp.controller('GameController', ['$scope', function($scope) {
	$scope.bingo = new Bingo();
	$scope.players = [new Player(1), new Player(2)];
	$scope.cardsPerPlayer = 9;
	$scope.showCards = false;
	$scope.bingoCard = new BingoCard();

	$scope.toggleCards = function() {
		if ( $scope.showCards === false ) {
			$scope.showCards = true;
		} else {
			$scope.showCards = false;
		}
	};

	$scope.highlightCalledNumbers = function() {
		var calledNumbers = $scope.bingo.usedNumbers;
		console.log(calledNumbers);
		for ( var x = 0; x < calledNumbers.length; x++ ) {
			var num = calledNumbers[x].slice(1);
			$scope.bingo.highlightPlayerCard(num);
		}
	};

	$scope.showPlayer = function() {
		$scope.playerInfo = $scope.players[$scope.selectedPlayer - 1];
		setTimeout( function() { 
			$scope.highlightCalledNumbers();
		}, 1000);
	};

	$scope.distributeCards = function() {
		
		// generate numbers and assign them to players
		for ( var i = 0; i < $scope.players.length; i++ ) {
			for ( var x = 0; x < $scope.cardsPerPlayer; x++) { 
				$scope.players[i].cards.push($scope.bingoCard.generateBingoCardNumbers());
			}
		}
	};
	$scope.distributeCards(); // remove later when there is game creation

}]);