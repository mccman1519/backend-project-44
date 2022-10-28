import { nRandLimit } from '../index.js';

export default {
  textRule: 'Answer "yes" if the number is even, otherwise answer "no".',
  curQuiz: null,
  quiz() {
    this.curQuiz = nRandLimit(1000);
    return this.curQuiz;
  },
  expected() {
    return (this.curQuiz % 2 === 0) ? 'yes' : 'no';
  },
};
