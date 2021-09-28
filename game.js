const.question=document.querySelector('#question');
const.choices=array.from(document.querySelectorAll('choice-text');
const.progressText=document.querySeelector('#progressText');
const.scoreText=document.querySelector('#score');
const.progressBarFull=document.querySelector('#progressBarFull');

let currentQuestion={}
let acceptingAnswers=true
let score=0
let questionCounter=0
let avalibleQuestions=[]

let questions=[
    {
        question:"what's the color of baby flamingoes?"
        choice1:"Blue"
        choice2:"Grey"
        choice3:"Black"
        answer: 2
    }
    /* add more questions like this ->
    {
        question:"what's the color of baby flamingoes?"
        choice1:"Blue"
        choice2:"Grey"
        choice3:"Black"
        answer: 2
    } */
]

const SCORE_POINTS=100
const MAX_QUESTIONS=4

startGame=()=>{
    questionCounter=0
    score=0
    avalibleQuestions=[...questions]
    getNewQuestions()
}