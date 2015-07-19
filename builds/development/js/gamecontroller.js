myApp.controller('GameController', ['$scope', function($scope) {
	$scope.bingo = new Bingo();

}]);

function Bingo() {
	this.bingoNumbers = {
		B: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
		I: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
		N: [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
		G: [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
		O: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]
	};
	this.getNumberPairs = function(numSet) {
		var numbers = [];
		$.each(numSet,function (index, value) {
			$.each(value, function(i,v) {
				numbers.push(index + v);
			});
		});
		return numbers;
	};

	this.getNumbers = function() {
		var numbers = [];
		$.each(this.bingoNumbers, function( index, value) {
			$.each(value, function(i,v) {
				numbers.push(v);
			});
		});
		return numbers;
	};

	this.getNextNumber = function() {
		// shuffle available numbers
		var shuffledNumbers = this.shuffle(this.availableNumbers);

		// remove a number from the now shuffled availableNumbers
		var nextNumber = shuffledNumbers.pop();

		// update availableNumbers
		this.availableNumbers = shuffledNumbers;

		// add chosen numbers to usedNumbers array
		this.usedNumbers.push(nextNumber);

		return nextNumber;
	};
	this.shuffle = function (array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	};

	this.highlightNumber = function(number) {
		var num = number.slice(1);
		var cell = $("td").filter(function() {
			return $(this).text() == num;
		});
		$(cell).css("background-color","green");
	};

	this.runGame = function() {
		console.log("gameInterval started");
		this.gameInterval = setInterval(function () {
	        if (newGame.usedNumbers.length > 0 ) {
				newGame.highlightNumber(newGame.currentNumber);
			}
			var currentNumber = newGame.getNextNumber();
			$('#currentNumber').text(currentNumber);
			newGame.currentNumber = currentNumber;
	    },5000);
	};

	this.stopGame = function() {
		console.log("attempting to stop game");
		console.log(this.gameInterval);
		clearInterval(this.gameInterval);
		console.log("attempt made");
		console.log(this.gameInterval);
	};

	this.availableNumbers = this.getNumberPairs(this.bingoNumbers);
	this.usedNumbers = [];
	this.currentNumber = '';
	this.gameInterval;
} // Bingo


// var newGame = new Bingo();

	


// 	$('#nextNumber').on('click', function() {
// 		console.log("starting game");
// 		newGame.runGame();
// 	});

// 	$('#stopGame').on('click', function() {
// 		console.log("stopping game");
// 		newGame.stopGame();
// 	});