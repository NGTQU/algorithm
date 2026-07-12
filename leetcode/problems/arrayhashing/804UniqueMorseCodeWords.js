/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  const occurence = {};
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const morseWord = toMorse(words[i]);
    if (occurence[morseWord] === undefined) {
      occurence[morseWord] = true;
      count++;
    }
  }

  return count;
};

const toMorse = (word) => {
  const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  let morseWord = "";

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const morseChar = morseCode[char];
    morseWord = morseWord.concat(morseChar);
  }

  return morseWord;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
