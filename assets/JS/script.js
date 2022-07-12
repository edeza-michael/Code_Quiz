const question = document.querySelector('#question');

const choices = Array.from(document.querySelectorAll('.choice-text'));

const progressText = document.querySelector('#progressText');

const scoreText = document.querySelector('#score');

const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionsCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'When was basketball made?', 
        choice1: '1737',
        choice2: '2001',
        choice3: '1893',
        choice4: '1891',
        answer: 1891,
    }, 
    {
        question: 'How many players can be on the court at one time?', 
        choice1: '10',
        choice2: '15',
        choice3: '22',
        choice4: '6',
        answer: 10,
    },
    {
        question: 'A free throw is worth how many points?', 
        choice1: '0.5',
        choice2: '2',
        choice3: '1',
        choice4: '3',
        answer: 1,
    },
    {
        question: 'How many NBA teams are their currently?', 
        choice1: '15',
        choice2: '32',
        choice3: '30',
        choice4: '50',
        answer: 30,
    },
    {
        question: 'What is the most points scored in a game?', 
        choice1: '10',
        choice2: '82',
        choice3: '71 ',
        choice4: '100',
        answer: 100,
    },

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentSCore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Questions ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)* 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    questions.innerText = currentQuestion.question


    choices.forEach(choice => {
        const number = choice.dataset['number']
        
    })
}