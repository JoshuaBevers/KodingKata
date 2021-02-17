// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string) {
  //...

  dictionary = {};
  console.log(string);
  for (let letter in string) {
    Letter = string[letter].toLowerCase();
    if (Letter === ' ') {
      continue;
    }
    console.log(string[letter])
    if (Letter in dictionary) {
      console.log('letter', string)
      continue;
    } else {
      dictionary[Letter] += dictionary[Letter]
    }
    console.log('final dic', dictionary);
  }
  if (Object.keys(dictionary).length >= 26) {
    return true
  } else {
    return false
  }
}
