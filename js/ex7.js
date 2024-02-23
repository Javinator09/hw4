// Function to generate a random number 
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main program
const targetNumber = getRandomNumber(1, 100);
let attempts = 0;

while (true) {
  const userGuess = parseInt(prompt("Guess the number (between 1 and 100):"));

  if (isNaN(userGuess)) {
    console.log("Invalid input. Please enter a valid number.");
    continue;
  }

  attempts++;

  if (userGuess < targetNumber) {
    console.log("Too low, guess again");
  } else if (userGuess > targetNumber) {
    console.log("Too high, guess again");
  } else {
    console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
    break;
  }
}