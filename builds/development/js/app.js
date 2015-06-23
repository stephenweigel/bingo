var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

// Routes

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'views/home.html',
			controller: 'BingoController'
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

var appControllers = angular.module('appControllers',[]);


appControllers.controller('BingoController', ['$scope', function($scope){
	angular.element(document).ready(function () {
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
			}

			this.availableNumbers = this.getNumberPairs(this.bingoNumbers);
			this.usedNumbers = [];
			this.currentNumber = '';

			this.generateBingoCardNumbers = function() {
				var shuffled = {
					B: this.shuffle(this.bingoNumbers.B),
					I: this.shuffle(this.bingoNumbers.I),
					N: this.shuffle(this.bingoNumbers.N),
					G: this.shuffle(this.bingoNumbers.G),
					O: this.shuffle(this.bingoNumbers.O),
				};

				var cardNumbers = {
					B: shuffled.B.slice(0,5),
					I: shuffled.I.slice(0,5),
					N: shuffled.N.slice(0,5),
					G: shuffled.G.slice(0,5),
					O: shuffled.O.slice(0,5)
				};

				cardNumbers.N[2] = "Free";
				return cardNumbers;
			};
			

			this.generateBingoCard = function(divID) {
				var numbers = this.generateBingoCardNumbers();
				var generatedHTML;
				for ( var i = 0; i < 5; i++ ) {
					generatedHTML += "<tr>";
					generatedHTML += "<td>" + numbers.B[i] + "</td>"
					generatedHTML += "<td>" + numbers.I[i] + "</td>"
					generatedHTML += "<td>" + numbers.N[i] + "</td>"
					generatedHTML += "<td>" + numbers.G[i] + "</td>"
					generatedHTML += "<td>" + numbers.O[i] + "</td>"
					generatedHTML += "</tr>"
				}
				$(divID).append(generatedHTML);

			};
	} // Bingo

	var newGame = new Bingo();
	for ( var cardNum = 1; cardNum < 4; cardNum++ ) {
		newGame.generateBingoCard('#bingoCard' + cardNum);
	};
	


	$('#nextNumber').on('click', function() {
		if (newGame.usedNumbers.length > 0 ) {
			newGame.highlightNumber(newGame.currentNumber);
		}
		var currentNumber = newGame.getNextNumber();
		$('#currentNumber').text(currentNumber);
		newGame.currentNumber = currentNumber;
	});

	}); // document.ready
}]); // BingoController

appControllers.controller('CardsController', ['$scope', function($scope){
	angular.element(document).ready(function () {
		function BingoCard() {
			this.bingoNumbers = {
				B: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
				I: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
				N: [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
				G: [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
				O: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]
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

			this.generateBingoCardNumbers = function() {
				var shuffled = {
					B: this.shuffle(this.bingoNumbers.B),
					I: this.shuffle(this.bingoNumbers.I),
					N: this.shuffle(this.bingoNumbers.N),
					G: this.shuffle(this.bingoNumbers.G),
					O: this.shuffle(this.bingoNumbers.O),
				};

				var cardNumbers = {
					B: shuffled.B.slice(0,5),
					I: shuffled.I.slice(0,5),
					N: shuffled.N.slice(0,5),
					G: shuffled.G.slice(0,5),
					O: shuffled.O.slice(0,5)
				};

				cardNumbers.N[2] = "Free";
				return cardNumbers;
			};
			

			this.generateBingoCard = function(divID) {
				var numbers = this.generateBingoCardNumbers();
				console.log(numbers);
				var generatedHTML;
				for ( var i = 0; i < 5; i++ ) {
					generatedHTML += "<tr>";
					generatedHTML += "<td>" + numbers.B[i] + "</td>"
					generatedHTML += "<td>" + numbers.I[i] + "</td>"
					generatedHTML += "<td>" + numbers.N[i] + "</td>"
					generatedHTML += "<td>" + numbers.G[i] + "</td>"
					generatedHTML += "<td>" + numbers.O[i] + "</td>"
					generatedHTML += "</tr>"
				}
				$(divID).append(generatedHTML);

			};
		} // BingoCard

			var cards = new BingoCard();
			for ( var cardNum = 1; cardNum < 4; cardNum++ ) {
				cards.generateBingoCard('#bingoCard' + cardNum);
			};
	}); // document.ready
}]); // CardsController