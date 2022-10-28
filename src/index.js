import readlineSync from 'readline-sync';

let playerName = '<noname>';
let currentQuiz = null;
let playerAnswer = null;
let correctAnswer = null;

const goal = () => console.log(`Congratulations, ${playerName}!`);

const question = () => {
  console.log(`Question: ${currentQuiz}`);
  playerAnswer = readlineSync.question('Your answer: ');
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
};

const isCorrect = () => playerAnswer === correctAnswer;

const checkAnswer = () => {
  if (isCorrect()) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const play = (game, roundsCount = 3) => {
  greeting();

  if (!game) {
    return;
  }

  console.log(game.textRule);

  for (let i = 0; i < roundsCount; i += 1) {
    currentQuiz = game.quiz();
    correctAnswer = game.expected();

    question();

    if (!checkAnswer()) {
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  goal();
};

export const nRandLimit = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
