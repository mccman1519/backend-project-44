import { nRandLimit } from '../index.js';

let curQuiz = null;

const textRule = 'What is the result of the expression?';

const quiz = () => {
  curQuiz = [nRandLimit(10), nRandLimit(10), '+-*'[nRandLimit(2)]];
  return `${curQuiz[0]} ${curQuiz[2]} ${curQuiz[1]}`;
};

const expected = () => {
  let result;
  switch (curQuiz[2]) {
  case '+': result = (curQuiz[0] + curQuiz[1]).toString();
    break;
  case '-': result = (curQuiz[0] - curQuiz[1]).toString();
    break;
  case '*': result = (curQuiz[0] * curQuiz[1]).toString();
    break;
  default: break;
  }
  return result;
};

export { textRule, quiz, expected };
