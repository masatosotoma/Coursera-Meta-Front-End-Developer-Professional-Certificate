//Task1
function letterFinder(word, match) {
  //Task2
  for (let i = 0; i < word.length; i++) {
    //Task3
    if (word[i] == match) {
      //Task4
      console.log("Found the " + match + " at " + i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("test", "t");
