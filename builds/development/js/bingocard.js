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

	this.generateBingoCardTables = function(num) {
		var numberOfTables = num;
		var cards = [];
		var tableHTML;
		for ( var i = 0 ; i < numberOfTables; i++ ) {
			tableHTML  = "<div class='col-md-4'>";
			tableHTML += "<table class='table text-center'";
			tableHTML += "id='bingoCard" + i + "'>";
			tableHTML += "<tr>";
			tableHTML += "<th class='text-center'>B</th><th class='text-center'>I</th>";
			tableHTML += "<th class='text-center'>N</th>";
			tableHTML += "<th class='text-center'>G</th><th class='text-center'>O</th>";
			tableHTML += "</tr></table>";
			tableHTML += "</div>";
			cards.push(tableHTML);
		}
		console.log(cards);
		return cards;
		// var cardsHTML = "";
		// for ( var i = 0; i < cards.length; i++ ) {
		// 	$(cardsHTML).append(cards[i]);
		// }
		// console.log(cardsHTML);
		// return cardsHTML;
		
	};


	this.generateBingoCard = function(bingoNumbers) {
		var numbers = this.generateBingoCardNumbers();
		var generatedHTML = "";
		for ( var i = 0; i < 5; i++ ) {
			generatedHTML += "<tr>";
			generatedHTML += "<td>" + numbers.B[i] + "</td>"
			generatedHTML += "<td>" + numbers.I[i] + "</td>"
			generatedHTML += "<td>" + numbers.N[i] + "</td>"
			generatedHTML += "<td>" + numbers.G[i] + "</td>"
			generatedHTML += "<td>" + numbers.O[i] + "</td>"
			generatedHTML += "</tr>"
		}
		return generatedHTML;

	};
} // BingoCard

// var cards = new BingoCard();
// 	cards.generateBingoCardTables(3);
// 	for ( var cardNum = 0; cardNum < 3; cardNum++ ) {
// 		cards.generateBingoCard('#bingoCard' + cardNum);
// 	};