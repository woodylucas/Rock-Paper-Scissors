var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
if(computerChoice <= 0.33) {
	computerChoice = "rock";
} else if (0.34 <= computerChoice <= 0.66 ) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors"
}

function compare(choice1, choice2) {
	if (choice1 === choice2) {
		return ('The result is a tie!');

	}

	if ( choice1 === "rock") {
		if (choice2 === "scissors")
			return ('rock wins!!');
	} else {
		return('paper wins!!');
	}


}