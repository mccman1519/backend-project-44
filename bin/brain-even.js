#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
	console.log('Welcome to Brain Games!');
	const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);

	for (let i = 0; i < 3; i += 1) {
		const RANGE_LIMIT = 1000;
		const rand = Math.floor(Math.random() * RANGE_LIMIT);

		console.log('Answer "yes" if the number is even, otherwise answer "no".');
		console.log(`Question: ${rand}`);

		const correctAnswer = (rand % 2 === 0) ? 'yes' : 'no';
		const playerAnswer = readlineSync.question('Your answer: ');
		const msgIncorrectAnswer = `'${playerAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}`;

		if (playerAnswer !== 'yes' && playerAnswer !== 'no') {
			console.log(msgIncorrectAnswer);
			return;
		}

		if (playerAnswer === correctAnswer) {
			console.log('Correct!');
		} else {
			console.log(msgIncorrectAnswer);
			return;
		}
	}

	console.log(`Congratulations, ${playerName}!`);
};

brainEven();
