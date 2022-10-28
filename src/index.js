import readlineSync from 'readline-sync';

export const engine = {
  playerName: '<noname>',
  currentQuiz: null,
  playerAnswer: null,
  correctAnswer: null,

  goal() {
    console.log(`Congratulations, ${this.playerName}!`);
  },

  question() {
    console.log(`Question: ${this.currentQuiz}`);
    this.playerAnswer = readlineSync.question('Your answer: ');
  },

  greeting() {
    console.log('Welcome to the Brain Games!');
    this.playerName = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${this.playerName}!`);
  },

  isCorrect() {
    return this.playerAnswer === this.correctAnswer;
  },

  checkAnswer() {
    if (this.isCorrect()) {
      console.log('Correct!');
      return true;
    }

    console.log(`'${this.playerAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    return false;
  },

  play(game, roundsCount = 3) {
    this.greeting();

    if (!game) {
      return;
    }

    console.log(game.textRule);

    for (let i = 0; i < roundsCount; i += 1) {
      this.currentQuiz = game.quiz();
      this.correctAnswer = game.expected();

      this.question();

      if (!this.checkAnswer()) {
        console.log(`Let's try again, ${this.playerName}`);
        return;
      }
    }

    this.goal();
  },
};

export const nRandLimit = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
