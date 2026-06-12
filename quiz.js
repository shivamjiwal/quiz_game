const questions = [
];

const Quiz1 = {
  category: "mathematics",
  question: "what is 7*76",
  choices: ["532", "123", "765"],
  answer: "532"
};

const Quiz2 = {
  category: "english",
  questin: "I am ___ to the market",
  choices: ["going", "gone", "went"],
  answer: "going"
};

const Quiz3 = {
  category: "physics",
  question: "what is energy =",
  choices: ["Mass*(Speed of light*2)", "Raw*(Mass*2)", "Mass*(Raw Mass*2)"],
  answer:"Mass*(Speed of Light*2)"
};

const Quiz4 = {
  category: "Chemistry",
  question: "what is the chemical formula of CO3",
  choices: ["calcium carbonate", "sodium hydroxide", "potassium nitrate"],
  answer: "calcium carbonate"
};

const Quiz5 = {
  category: "mathematics",
  question: "what is the value of pi",
  choices: ["22/7", "87/9", "66/4"],
  answer: "22/7"
};

questions.push(Quiz1, Quiz2, Quiz3, Quiz4, Quiz5);

function getRandomQuestion(questionsArray) {
  // Generate a random index based on the length of the array
  var randomQuestion = Math.floor(Math.random()* questionsArray.length)
  
  // Return the random question object
  return questionsArray[randomQuestion];
}

let theRandomQuestion = getRandomQuestion(questions);
console.log(theRandomQuestion); 

const getRandomComputerChoice = (question) => {
   return question.choices;
}

let theComputerChoice = getRandomComputerChoice(theRandomQuestion);
console.log(theComputerChoice);

const  getResults = (question, choice) => {
  if(choice === question.answer)
  {
    return "The computer's choice is correct!";
  }
  else{
    return "The computer's choice is wrong. The correct answer is:" + question.answer  ;
  }
}
console.log(getResults(theRandomQuestion, theComputerChoice));
