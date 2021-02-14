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