#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
	game, gameGreeting, isCorrect, nRandLimit,
} from '../src/index.js';

const brainCalc = () => {
	game.playerName = gameGreeting();
	console.log('What is the result of the expression?');

	for (let i = 0; i < 3; i += 1) {
		const quizRaw = [nRandLimit(100), nRandLimit(100), '+-*'[nRandLimit(3)]];
		game.currentQuiz = `${quizRaw[0]} ${quizRaw[2]} ${quizRaw[1]}`;

		switch (quizRaw[2]) {
			case '+': game.correctAnswer = (quizRaw[0] + quizRaw[1]).toString();
			break;
			case '-': game.correctAnswer = (quizRaw[0] - quizRaw[1]).toString();
			break;
			case '*': game.correctAnswer = (quizRaw[0] * quizRaw[1]).toString();
			break;
			default: break;
		}

		game.question();
		game.playerAnswer = readlineSync.question('Your answer: ');

		if (!isCorrect(game.correctAnswer, game.playerAnswer)) {
			console.log(`Let's try again, ${game.playerName}`);
			return;
		}
	}

	game.goal();
};

brainCalc();
