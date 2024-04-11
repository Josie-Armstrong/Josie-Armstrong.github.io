const btn = document.querySelector("#js-new-quote");
const answerBtn = document.querySelector("#js-tweet");

btn.addEventListener('click', getQuote);
window.addEventListener("load", getQuote);

const endpoint = "https://the-trivia-api.com/v2/questions?limit=1&categories=film_and_tv";

// let answer = '';
const answerText = document.querySelector("#js-answer-text");
const btn1 = document.querySelector("#answer1");
const btn2 = document.querySelector("#answer2");
const btn3 = document.querySelector("#answer3");
const btn4 = document.querySelector("#answer4");
const btn_array = [btn1, btn2, btn3, btn4];

// this is complicated, but this helps remove the event listeners later
const btn1Click = () => {checkAnswer(btn1,true)};
const btn2Click = () => {checkAnswer(btn2,true)};
const btn3Click = () => {checkAnswer(btn3,true)};
const btn4Click = () => {checkAnswer(btn4,true)};

btn1.addEventListener("click", btn1Click);
btn2.addEventListener("click", btn2Click);
btn3.addEventListener("click", btn3Click);
btn4.addEventListener("click", btn4Click);
let have_listeners = true; // this will update when the buttons are pressed

answerBtn.addEventListener("click", () => {checkAnswer(btn_array[rand],false)});

// generating where the right answer will go
let rand = 0;

// making the score variable and connecting it to html
let score = 0;
const scoreDisplay = document.querySelector("#score");

async function getQuote() {
    // console.log("Test");
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        // resetting the button background colors and answer text
        btn1.style.backgroundColor = "black";
        btn2.style.backgroundColor = "black";
        btn3.style.backgroundColor = "black";
        btn4.style.backgroundColor = "black";
        answerText.textContent = '';

        // resetting the event listeners, if needed
        if (!have_listeners) {
            btn1.addEventListener("click", btn1Click);
            btn2.addEventListener("click", btn2Click);
            btn3.addEventListener("click", btn3Click);
            btn4.addEventListener("click", btn4Click);
            have_listeners = true;
        }

        // getting the trivia question
        const json = await response.json();
        // console.log(json);
        // console.log(json[0]);

        // getting the actual question from the array
        const q_array = json[0];
        const q_array_2 = q_array["question"];
        const question = q_array_2["text"];

        // console.log(question);
        displayQuote(question);

        // answerText.textContent = '';

        // loading buttons with fake and real answers
        const answer = q_array["correctAnswer"];
        const wrong_answers = q_array["incorrectAnswers"];
        loadButtons(answer, wrong_answers);
        // console.log(answer);

        // console.log(wrong_answers);
        // answer = json["correct_answer"];
    }
    catch (err) {
        console.log(err);
        alert("Failed to fetch new quote");
    }
}

function displayQuote(quote) {
    // console.log("tried to display");
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function loadButtons(answer,wrong_answers) {
    let current_index = 0;
    rand = getRandomInt(4);

    // changing btn text
    for (i = 0; i < 4; i++) {
        if (rand != i) {
            btn_array[i].textContent = wrong_answers[current_index];
            current_index++;
        }
        else {
            btn_array[i].textContent = answer;
        }
    }
}

function checkAnswer(clicked_btn,was_clicked) {
    // console.log("check");

    if (clicked_btn === btn_array[rand]) {
        // console.log("right");

        clicked_btn.style.backgroundColor = "#4CBB17";
        
        if (was_clicked) {
            answerText.textContent = "Correct!"
            score++;
            scoreDisplay.textContent = "Score: " + score;
        }
    }
    else {
        // console.log("wrong");

        clicked_btn.style.backgroundColor = "#D2042D";
        btn_array[rand].style.backgroundColor = "#4CBB17";

        answerText.textContent = "Incorrect, sorry!"
    }

    // removing event listeners
    btn1.removeEventListener("click", btn1Click);
    btn2.removeEventListener("click", btn2Click);
    btn3.removeEventListener("click", btn3Click);
    btn4.removeEventListener("click", btn4Click);
    have_listeners = false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* function displayAnswer() {
    console.log("display answer");
    answerText.textContent = "this is a test";
} */