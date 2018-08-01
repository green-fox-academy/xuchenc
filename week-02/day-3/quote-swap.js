// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

const words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."];
const x = words[5];
words[5] = words[2];
words[2] = x;
console.log(words);
console.log(words.join(" "));

// console.log(quoteSwap(words));
// // Expected output: "What I cannot create I do not understand."

// words.quoteSwap()
// module.exports = quoteSwap;
