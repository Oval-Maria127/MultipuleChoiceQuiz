const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('choice-Text'))
/*const progressText = document.querySelector('#progressText')*/
const scoreText = document.querySelector('#score')
/*const progressBarFull = document.querySelector('#progressBarFull')*/

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let avalible questions = []

let questions = [
    {
    question:'  What is 2 + 8?';
    choice1:'7';
    choice2:'10';
    choice3:'21';
    answer:2;
    }
]
/*Repeat the above for every question */

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4 /* change depending on question number */

startGame = () =>{
    questionCounter = 0
    score = 0
    avalibleQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if(avalibleQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
}
