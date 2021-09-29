const startButton = document.querySelector(".start");
const nextButton = document.querySelector(".next");

const questionField = document.querySelector(".question-field");
const question = document.querySelector("#question");

const answerButtons = document.querySelector(".answer-buttons");

const scoreField = document.querySelector(".score-field");
const score = document.querySelector("#score");

//////////////////////////////////////////////////

let currentIndex = 0;
let rightAnswer,
    rightAnswerIndex,
    questionText,
    scoreNumber = 0,
    scoreRate = 50,
    wrongAnswers = [];

// on start click
startButton.addEventListener("click", function () {
    currentIndex = 0;
    scoreNumber = 0;
    score.innerText = scoreNumber;
    prepQuestion();
    // console.log(wrongAnswers);
    showQuestion();

    startButton.innerText = "Restart";
    nextButton.disabled = false;
    nextButton.classList.remove("fade");

    [questionField, answerButtons, nextButton, scoreField].forEach(
        (element) => {
            element.classList.remove("hide");
        }
    );
});

// on next click
nextButton.addEventListener("click", function () {
    prepQuestion();
    console.log(questionText);
    showQuestion();
    if (currentIndex == questions.length) {
        nextButton.classList.add("fade");
        nextButton.disabled = true;
    }
});

// answer buttons
Array.from(answerButtons.children).forEach((button) => {
    button.addEventListener("click", (e) => {
        let answer = e.target.dataset.text;
        if (answer == rightAnswer) {
            document.body.classList.add("right");
            e.target.classList.add("right");
            scoreNumber += scoreRate;
            score.innerText = scoreNumber.toString();
        } else {
            document.body.classList.add("wrong");
            e.target.classList.add("wrong");
            answerButtons.children[rightAnswerIndex].classList.add("right");
        }
    });
});

function prepQuestion() {
    document.body.classList = "";

    if (currentIndex >= questions.length) {
        return;
    }
    questionText = questions[currentIndex].question;

    wrongAnswers = [];
    questions[currentIndex].answers.forEach((answer) => {
        if (answer.correct) {
            rightAnswer = answer.text;
        } else {
            wrongAnswers.push(answer.text);
        }
    });

    currentIndex++;

    let number = Math.round(Math.random() * (wrongAnswers.length - 1 - 0) + 0);
    rightAnswerIndex = number;
    let toend = wrongAnswers[number];
    wrongAnswers[number] = rightAnswer;
    wrongAnswers.push(toend);
}

function showQuestion() {
    question.innerText = questionText;
    for (var i = 0; i < wrongAnswers.length; i++) {
        answerButtons.children[i].innerText = wrongAnswers[i];
        answerButtons.children[i].dataset.text = wrongAnswers[i];
        answerButtons.children[i].classList = "btn ";
    }
}

/////////////////////////////////////////////////////

const questions = [
    {
        question: "Where are the Nazca Lines located?",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Colombia", correct: false },
            { text: "Peru", correct: true },
            { text: "Ecuador", creect: false },
        ],
    },
    {
        question:
            "In programming, the ternary operator is mostly defined with what symbol(s)?",
        answers: [
            { text: "?:", correct: true },
            { text: "??", correct: false },
            { text: "if then", correct: false },
            { text: "?", correct: false },
        ],
    },
    {
        question: "What city  has the busiest airport in the world?",
        answers: [
            { text: "London, England", correct: false },
            { text: "Chicago,Illinois ISA", correct: false },
            { text: "Tokyo,Japan", correct: false },
            { text: "Atlanta, Georgia USA", correct: true },
        ],
    },
    {
        question:
            "Before 2016, in which other year did Donald Trump run for President?",
        answers: [
            { text: "2000", correct: true },
            { text: "2012", correct: false },
            { text: "1988", correct: false },
            { text: "2008", correct: false },
        ],
    },
    {
        question: "How many rivers are in Saudi Arabia?",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
        ],
    },
    {
        question:
            "Which of the following men does not have a chemical element named after him?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Niels Bohr", correct: false },
            { text: "Sir Isaac Newton", correct: true },
            { text: "Enrico Fermi", correct: false },
        ],
    },
    {
        question: "In what year did Texas secede from Mexico?",
        answers: [
            { text: "1836", correct: true },
            { text: "1838", correct: false },
            { text: "1845", correct: false },
            { text: "1844", correct: false },
        ],
    },
    {
        question: "What is the punishment for playing Postal 2 in New Zealand?",
        answers: [
            { text: "10 years in prison and a fine of $50,000", correct: true },
            { text: "Fine of $5,000", correct: false },
            { text: "Nothing", correct: false },
            {
                text: "15 years in prison and a fine of $10,000",
                correct: false,
            },
        ],
    },
    {
        question: "What type of animal is a natterjack?",
        answers: [
            { text: "Bird", correct: false },
            { text: "Insect", correct: false },
            { text: "Fish", correct: false },
            { text: "Toad", correct: true },
        ],
    },
    {
        question: "What are tiny Thwomps called in Super Mario World?",
        answers: [
            { text: "Thwimps", correct: true },
            { text: "Little Thwomp", correct: false },
            { text: "Tiny Tims", correct: false },
            { text: "Mini Thwomp", correct: false },
        ],
    },
];
