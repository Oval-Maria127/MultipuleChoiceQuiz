const question = `document.querySelector('#question')`;
const choices = `Array.from(document.querySelectorAll('choice-text')`;
const progressText = `document.querySeelector('#progressText')`;
const scoreText = `document.querySelector('#score')`;
const progressBarFull = `document.querySelector('#progressBarFull')`;

let currentQuestion={}
let acceptingAnswers=true
let score=0
let questionCounter=0
let avalibleQuestions=[]

let questions=[
    {
        question:"what's the color of baby flamingoes?",
        choice1:"Blue",
        choice2:"Grey",
        choice3:"Black",
        answer: 2
    }
    /* add more questions like this ->
    {
        question:"what's the color of baby flamingoes?"
        choice1:"Blue,"
        choice2:"Grey,"
        choice3:"Black,"
        choice4:"Pink",
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
    progressText.innerText=Question `${questionCounter} of ${MAX_QUESTIONS}`

    progressBarFull.style.width=`${(questionCounter / MAX_QUESTIONS) * 100}%`
    const questionsIndex = Math.floor(math.random() * avalibleQuestions.length)
    currentQuestions = avalibleQuestions[questionsIndex]

    question.indexText= currentQuestion.question

    choices.forEach(choice=>{
        const number=choice.dataset['number']
        choice.innerText=currentQuestion['choice' + number]
    })

    avalibleQuestions.splice(questionsIndex, 1)
    acceptingAnswers=true
}

console.log(getNewQuestions)

choices.forEach/choice=>{
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers=false
        const selectedChoice=e.target
        const selectedAnswer=selectedChoice.dataset['number']

        let classToApply=selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElementClassList.remove(classToApply)
        setTimeout(()=>{
            selectedChoice.parentElementClassList.remove(classToApply)
            getNewQuestions()
        },1000)
    })
}

incrementScore=num=>{
    score +=num
    scoreText.innerText=score
}

startGame()