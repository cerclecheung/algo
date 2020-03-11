// Shortest Word Edit Path
// Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

// Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

// If the task is impossible, return -1.

// Examples:

// source = "bit", target = "dog"
// words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

// output: 5
// explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
// source = "no", target = "go"
// words = ["to"]

// output: -1
// Constraints:

// [time limit] 5000ms
// [input] string source
// 1 ≤ source.length ≤ 20
// [input] string target
// 1 ≤ target.length ≤ 20
// [input] array.string words
// 1 ≤ words.length ≤ 20
// [output] array.integer

const findNextWords = (source, words) => {
  let nextWords = [];
  for (let i = 0; i < words.length; i++) {
    let differentLetterCount = 0;
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] !== source[j]) {
        differentLetterCount++;
      }
    }
    if (differentLetterCount === 1) {
      nextWords.push(words[i]);
    }
  }
  return nextWords;
};

const findShortestPath = (source, target, words) => {
  let counter = 0;
  if (source === target) {
    counter++;
  } else {
    let newSourceList = findNextWords(source, words);
  }

  return counter;
};
