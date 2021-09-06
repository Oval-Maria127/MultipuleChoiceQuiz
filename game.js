
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('choice-Text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let avalibleQuestions = []

let questions = [
    {
    question:'  What is 2 + 8?',
    choice1:'7',
    choice2:'10',
    choice3:'21',
    answer:2
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
    if(avalibleQuestions.length === 0 || questionCounter > MAX_QUESTIONS)}
localStorage.setItem('mostRecentScore; score')
return window.location.assign('/end.html')
}

questionCounter ++
progressText.innerText = Question; $;{questionCounter} of ;{MAX_QUESTIONS}
progressBarFull.style.width = $;{(questionCounter / MAX_QUESTIONS)* 100}%
const questionsIndex = math.floor(math.random()* avalibleQuestions.length),currentQuestion = avalibleQuestions[questionsIndex]

question.indexText = currentQuestion.question
choices.forEach/choice; => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice + number']
})

avalibleQuestions.splice(questionsIndex, 1)
acceptingAnswers = true
}

choices.forEach/choice; => {
    choice.addEventListener('click' , e => }
        if(!acceptingAnswers) = false)return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.addEventListener(classToApply)
        set setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestions()
        },1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()