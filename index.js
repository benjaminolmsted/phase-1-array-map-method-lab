const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const fixedTutorials = tutorials.map((t) => {
    const words = t.split(" ");
    const capWords = [];
    for(let word of words){
      capWords.push(word[0].toUpperCase() + word.substring(1));
    }
    return capWords.join(" ");
  });
 
 
  return fixedTutorials;
}
