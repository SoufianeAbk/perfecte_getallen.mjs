import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});


function isPerfectNumber(num) {
  let sum = 0;

  
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  
  return sum === num;
}


function findPerfectNumbersInRange(start, end) {
  const perfectNumbers = [];

  for (let i = start; i <= end; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }

  return perfectNumbers;
}


const perfectNumbers = findPerfectNumbersInRange(1, 100);
console.log(`Perfecte getallen tussen 1 en 100 = ${perfectNumbers.join(', ')}`);


process.exit()