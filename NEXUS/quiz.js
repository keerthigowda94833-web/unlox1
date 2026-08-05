// Quiz Questions

const quizItems = [
    {
        item: "Plastic Bottle",
        answer: "recyclable"
    },
    {
        item: "Egg Shell",
        answer: "biodegradable"
    },
    {
        item: "Old Phone",
        answer: "electronic"
    },
    {
        item: "Used Battery",
        answer: "hazardous"
    },
    {
        item: "Cardboard Box",
        answer: "recyclable"
    },
    {
        item: "Tea Bag",
        answer: "biodegradable"
    },
    {
        item: "Laptop Charger",
        answer: "electronic"
    },
    {
        item: "Paint Bucket",
        answer: "hazardous"
    }
];

// Categories

const categories = {
    recyclable: "Recyclable",
    biodegradable: "Biodegradable",
    electronic: "Electronic",
    hazardous: "Hazardous"
};

// Variables

let currentQuestion = 0;
let score = 0;
let totalAnswered = 0;

// HTML Elements

const question = document.getElementById("quizQuestion");
const options = document.getElementById("quizOptions");
const quizScore = document.getElementById("quizScore");
const quizTotal = document.getElementById("quizTotal");
const feedback = document.getElementById("quizFeedback");

// Show Question

function renderQuestion() {
    if (currentQuestion >= quizItems.length) {
        currentQuestion = 0;
    }
    let q = quizItems[currentQuestion];
    question.innerHTML =
        "Which category does <b>" +
        q.item +
        "</b> belong to?";
    options.innerHTML = "";
    let choices = [
        "recyclable",
        "biodegradable",
        "electronic",
        "hazardous"
    ];
    choices = shuffleArray(choices);
    choices.forEach(function(choice) {
        let btn = document.createElement("button");
        btn.innerHTML = categories[choice];
        btn.onclick = function() {
            chooseAnswer(choice);
        };
        options.appendChild(btn);
    });
    feedback.innerHTML = "";
}

// Check Answer

function chooseAnswer(choice) {
    let correct = quizItems[currentQuestion].answer;
    totalAnswered++;
    if (choice === correct) {
        score++;
        feedback.innerHTML =
            "✅ Correct!";
        feedback.style.color = "green";
    }
    else {
        feedback.innerHTML =
            "❌ Wrong! Correct answer is <b>" +
            categories[correct] +
            "</b>";
        feedback.style.color = "red";
    }
    quizScore.innerHTML = score;
    quizTotal.innerHTML = totalAnswered;
    let buttons = options.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.disabled = true;
        if (button.innerHTML === categories[correct]) {
            button.classList.add("correct");
        }
        else if (button.innerHTML === categories[choice]) {
            button.classList.add("wrong");
        }
    });
}

// Next Question

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= quizItems.length) {
        currentQuestion = 0;
    }
    renderQuestion();
}

// Restart Quiz

function resetQuiz() {
    score = 0;
    totalAnswered = 0;
    currentQuestion = 0;
    quizScore.innerHTML = 0;
    quizTotal.innerHTML = 0;
    renderQuestion();
}

// Shuffle Options

function shuffleArray(array) {
    return array.sort(function() {
        return Math.random() - 0.5;
    });
}

// Start Quiz

renderQuestion();