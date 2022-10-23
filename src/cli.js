import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('Как тебя зовут, радость моя?: ');
  console.log(`Рад приветствовать тебя, ${name}, в Brain Games!`);
};
