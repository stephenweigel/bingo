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
		var cell = $("#bingoScoreboard td").filter(function() {
			return $(this).text() == num;
		});
		$(cell).css("background-color","green");
	};

	this.highlightPlayerCard = function(num) {
		console.log("about to highlight the card");
		console.log("the number: " + num);
		console.log("the selection: ");
		console.log($(".playerCard td") );
		console.log("the filter: ");
		console.log($(".playerCard td").filter(function() { 
			return $(this).text() == Number(num); }));
		$(".playerCard td").filter(function() { 
			return $(this).text() == Number(num); })
		.css("background-color", "green");
		console.log("it should have worked");
	};

	this.runGame = function() {
		var currGame = this;
		currGame.gameInterval = setInterval(function () {
	        if (currGame.usedNumbers.length > 0 ) {
				currGame.highlightNumber(currGame.currentNumber, "#bingoScoreboard");
			}
			var currentNumber = currGame.getNextNumber();
			$('#currentNumber').text(currentNumber);
			currGame.currentNumber = currentNumber;
	    },5000);
	};

	this.stopGame = function() {
		clearInterval(this.gameInterval);
	};

	this.availableNumbers = this.getNumberPairs(this.bingoNumbers);
	this.usedNumbers = [];
	this.currentNumber = '';
	this.gameInterval;
} // Bingo