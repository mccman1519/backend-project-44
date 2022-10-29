import { nRandLimit } from '../index.js';

const textRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let curQuiz = null;

const quiz = () => {
  curQuiz = nRandLimit(200);
  return curQuiz;
};

const expected = () => {
  if (curQuiz < 2) {
  	return 'no';
  }
  const sqrt = Math.floor(Math.sqrt(curQuiz));
  for (let i = 2; i <= sqrt; i += 1) {
    if (curQuiz % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export { textRule, quiz, expected };
