import { nRandLimit } from '../index.js';

export default {
  textRule: 'What is the result of the expression?',
  curQuiz: null,
  quiz() {
    this.curQuiz = [nRandLimit(10), nRandLimit(10), '+-*'[nRandLimit(3)]];
    return `${this.curQuiz[0]} ${this.curQuiz[2]} ${this.curQuiz[1]}`;
  },
  expected() {
    switch (this.curQuiz[2]) {
    case '+': return (this.curQuiz[0] + this.curQuiz[1]).toString();
    case '-': return (this.curQuiz[0] - this.curQuiz[1]).toString();
    case '*': return (this.curQuiz[0] * this.curQuiz[1]).toString();
    default: break;
    }
    return undefined;
  },
};
