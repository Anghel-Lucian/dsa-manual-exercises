/* Write a function which, given a sequence of digits 2–9 and a dictionary of n
words, reports all words described by this sequence when typed in on a standard
telephone keypad. For the sequence 269 you should return any, box, boy, and
cow, among other words. */

function returnKeyboardNumber(letter) {
  if("abc".includes(letter)) return "2";
  if("def".includes(letter)) return "3";
  if("ghi".includes(letter)) return "4";
  if("jkl".includes(letter)) return "5";
  if("mno".includes(letter)) return "6";
  if("pqrs".includes(letter)) return "7";
  if("tuv".includes(letter)) return "8";
  if("wxyz".includes(letter)) return "9";
}

function problem(sequence, dictionary) {
  const words = [];

  for(let i = 0; i < dictionary.length; i++) {
    if(dictionary[i].length < sequence.length) continue;

    let isCorrectWord = true;

    for(let j = 0; j < dictionary[i].length; j++) {
      if(sequence[j] !== returnKeyboardNumber(dictionary[i][j])) {
        isCorrectWord = false;
        break;
      }
    }

    if(isCorrectWord) words.push(dictionary[i]);
  }

  return words;
}

const dictionary = ["any", "box", "boy", "cow", "free", "calculator", "homework", "imodyorl", "tree"];

console.log(problem("46639675", dictionary));