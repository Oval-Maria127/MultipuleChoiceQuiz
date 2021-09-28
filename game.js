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

getNewQuestions=()=>{
    if(avalibleQuestions.length === 0 || questionsCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText=Question ${questionCounter} of ${MAX_QUESTIONS}

    progressBarFull.style.width=${(questionCounter / MAX_QUESTIONS) * 100}%
    const questionsIndex=math.floor(math.random() * avalibleQuestions.length)currentQuestion=avalibleQuestions[questionsIndex]

    question.indexText= currentQuestion.question

    choices.forEach(choice=>{
        const number=choice.dataset['number']
        choice.innerText=currentQuestion['choice' + number]
    })

    avalibleQuestions.splice(questionsIndex, |)
    acceptingAnswers=true
}