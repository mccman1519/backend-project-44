import { nRandLimit } from '../index.js';

const textRule = 'Answer "yes" if the number is even, otherwise answer "no".';
let curQuiz = null;

const quiz = () => {
  curQuiz = nRandLimit(1000);
  return curQuiz;
};

const expected = () => ((curQuiz % 2 === 0) ? 'yes' : 'no');

export { textRule, quiz, expected };
