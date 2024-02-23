// create constant values
const values = [3, 11, 7, 2, 9, 10];

// Initialize variables for sum, minimum, and maximum
let sum = 0;
let min = values[0]; 
let max = values[0]; 

// Iterate through the array
for (let i = 0; i < values.length; i++) {
  // Calculate the sum
  sum += values[i];

  // Update minimum value
  if (values[i] < min) {
    min = values[i];
  }

  // Update maximum value
  if (values[i] > max) {
    max = values[i];
  }
}

// print the results
console.log(`Sum of all array values: ${sum}`);
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);