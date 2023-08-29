const puzzles = document.querySelectorAll('.puzzle')

puzzles.forEach(puzzle => {
    const answerButton = puzzle.querySelector('.toggle-answer')
    const answer = puzzle.querySelector('.answer')

    answerButton.addEventListener('click', function (){
        answer.classList.toggle('show')
        if (answer.classList.contains('show')){
            answerButton.innerHTML = "скрыть ответ"
            answerButton.style.backgroundColor = 'red'
        }else {
            answerButton.innerHTML = "показать ответ"
            answerButton.style.backgroundColor = '#39e539'
        }
    })
})
