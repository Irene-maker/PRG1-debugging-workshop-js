function capitalise(word) {
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1).toLowerCase();
   word = firstLetterCap + remainingLetters;
  return word
}

module.exports = { capitalise };

// I recommend you start by calling capitalise with the string "hello"

// Advanced hint: When you've called the function with a string, you can also run this file with a runtime called bun (just run bun <path-to-file>)
// bun runs JS files like node but with a few differences - can you spot any differences?


console.log(capitalise("hello"));