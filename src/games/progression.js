import { nRandLimit } from '../index.js';

const textRule = 'What number is missing in the progression?';
let curQuiz = null;

const quiz = () => {
  const length = nRandLimit(12, 5);
  const seq = [nRandLimit(100)];
  const delta = nRandLimit(10, 1);
  const hidden = nRandLimit(length - 1);

  for (let i = 0; i < length; i += 1) {
    const nextItem = seq[i] + delta;
    seq.push(nextItem);
  }

  curQuiz = seq[hidden];

  return seq.reduce((acc, item) => `${acc} ${item === curQuiz ? '..' : item}`, '').trim();
};

const expected = () => curQuiz.toString();

export { textRule, quiz, expected };
