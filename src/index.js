import readlineSync from 'readline-sync';

export const game = {
	playerName: '<noname>',
	currentQuiz: null,
	currentAnswer: null,
	correctAnswer: null,
	goal() {
		console.log(`Congratulations, ${this.playerName}!`)
	},
};

export const gameGreeting = () => {
	console.log('Welcome to Brain Games!');
	const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  
  return playerName;
};	

export const isCorrect = (expected, playerAnswer) => {
	if (playerAnswer === expected) {
		console.log('Correct!');
		return true;
	} else {
		console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${expected}'`);
		return false;
	}
};

export const nRandLimit = (limit) => Math.floor(Math.random() * limit);
