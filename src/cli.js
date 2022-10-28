import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to Brain Games!');
  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
};
