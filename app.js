// import functions
import { answers } from "./answers.js";
import { getRandomInt } from "./answers.js";
// reference needed DOM elements
const answerButton = document.getElementById('get-answer');
const destiny = document.getElementById('output');



// set event listeners 

answerButton.addEventListener('click', () => {


    // do any needed work with the value(s)
    const randomIndex = getRandomInt(0, answers.length);
    const randomAnswer = answers[randomIndex];
    // update DOM to reflect new value(s)
    destiny.textContent = randomAnswer;
    
    

});

