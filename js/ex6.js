// Function to compute the number of vowels in a word
function countVowels(word) {

  word = word.toLowerCase();


  let vowelCount = 0;
  for (let char of word) {
    if ('aeiouy'.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Function to determine if the word is a palindrome
function isPalindrome(word) {

  word = word.toLowerCase();

  // Reverse the word and compare it to the original
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

// pront user to enter word
const userWord = prompt("Enter a word:");

// Call the first function to compute the number of vowels
const vowelCount = countVowels(userWord);

// Call the second function to determine if the word is a palindrome
const palindromeCheck = isPalindrome(userWord);

// Print the results
console.log(`${userWord} contains ${vowelCount} vowel(s) and is ${palindromeCheck ? 'a palindrome' : 'not a palindrome'}`);