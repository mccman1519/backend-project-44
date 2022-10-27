#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { game, gameGreeting, isCorrect, nRandLimit } from '../src/index.js';

const brainEven = () => {
	game.playerName = gameGreeting();
	console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');

	for (let i = 0; i < 3; i += 1) {
		game.currentQuiz = nRandLimit(1000);
		game.correctAnswer = (game.currentQuiz % 2 === 0) ? 'yes' : 'no';

		console.log(`Question: ${game.currentQuiz}`);
		game.playerAnswer = readlineSync.question('Your answer: ');

		if (!isCorrect(game.correctAnswer, game.playerAnswer)) {
			console.log(`Let's try again, ${game.playerName}`);
			return;
		}
	}

	game.goal();
};

brainEven();
