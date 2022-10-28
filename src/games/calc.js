import { nRandLimit } from '../index.js';

export default {
  textRule: 'What is the result of the expression?',
  curQuiz: null,
  quiz() {
    this.curQuiz = [nRandLimit(10), nRandLimit(10), '+-*'[nRandLimit(2)]];
    return `${this.curQuiz[0]} ${this.curQuiz[2]} ${this.curQuiz[1]}`;
  },
  expected() {
    let result;
    switch (this.curQuiz[2]) {
    case '+': result = (this.curQuiz[0] + this.curQuiz[1]).toString();
      break;
    case '-': result = (this.curQuiz[0] - this.curQuiz[1]).toString();
      break;
    case '*': result = (this.curQuiz[0] * this.curQuiz[1]).toString();
      break;
    default: break;
    }
    return result;
  },
};
