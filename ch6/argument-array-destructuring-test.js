function getSentence([subject, verb, object]){
  return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];
console.log(getSentence(arr));

// 확산 연산자는 반드시 마지막 매개변수여야 한다.
function addPrefix(prefix, ...words){
  const prefixedWords = [];
  for(let i=0; i<words.length; i++){
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

console.log(addPrefix("con","verse","vex"));	// ["convers", "convex"]