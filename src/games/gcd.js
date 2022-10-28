import { nRandLimit } from '../index.js';

const textRule = 'Find the greatest common divisor of given numbers.';
let curQuiz = null;

const quiz = () => {
  curQuiz = [nRandLimit(100, 1), nRandLimit(100, 1)];
  return `${curQuiz[0]} ${curQuiz[1]}`;
};

const expected = () => {
  const [a, b] = curQuiz;
  const min = (a < b ? a : b);
  for (let i = min; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i.toString();
    }
  }
  return undefined;
};

export { textRule, quiz, expected };
