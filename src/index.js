import readlineSync from 'readline-sync';

export const gameGreeting = (gameCondition = '<no condition provided>') => {
	console.log('Welcome to Brain Games!');
	const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameCondition);
  
  return playerName;
};	

//export const gameQuestion = (text, ...)
