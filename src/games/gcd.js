import { nRandLimit } from '../index.js';

export default {
	textRule: 'Find the greatest common divisor of given numbers.',
	curQuiz: null,
	quiz() {
    this.curQuiz = [nRandLimit(100, 1), nRandLimit(100, 1)];
		return `${this.curQuiz[0]} and ${this.curQuiz[1]}`;
	},
	expected() {
    const [a, b] = this.curQuiz;
    const min = (a < b ? a : b);
    for (let i = min; i > 0; i -= 1) {
      if (a % i === 0 && b % i === 0) {
        return i.toString();
      }
    }
	},
};