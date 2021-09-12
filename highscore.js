const highScoreList = document.querySelector(`#highScoreList`)
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || []

highScoreList.innerHTML =
highScores.map(score => {
    return `<li class="high-scores">${score.name}-${score.score}</li>`
}).join(``)