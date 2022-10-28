import { nRandLimit } from '../index.js';

export default {
  textRule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  curQuiz: null,
  quiz() {
    this.curQuiz = nRandLimit(200);
    return this.curQuiz;
  },
  expected() {
    const sqrt = Math.floor(Math.sqrt(this.curQuiz));
    for (let i = 2; i <= sqrt; i += 1) {
      if (this.curQuiz % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  },
};
