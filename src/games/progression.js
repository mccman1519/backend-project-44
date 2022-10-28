import { nRandLimit } from '../index.js';

export default {
	textRule: 'What number is missing in the progression?',
	curQuiz: null,
	quiz() {
    const length = nRandLimit(12, 5);
    const seq = [nRandLimit(100)];
    const delta = nRandLimit(10, 1);
    const hidden = nRandLimit(length);

    for (let i = 0; i < length; i += 1) {
      const nextItem = seq[i] + delta;
      seq.push(nextItem);
    }

    this.curQuiz = seq[hidden];

		return seq.reduce((acc, item)=>acc+` ${item === this.curQuiz ? '..' : item}`);
	},
	expected() {
    return this.curQuiz.toString();
	},
};