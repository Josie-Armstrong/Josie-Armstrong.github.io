const btn = document.querySelector("#js-new-quote");
const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener("click", displayAnswer);

btn.addEventListener('click', getQuote);
window.addEventListener("load", getQuote);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let answer = '';
const answerText = document.querySelector("#js-answer-text");

async function getQuote() {
    // console.log("Test");
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json["question"]);
        displayQuote(json["question"]);

        answerText.textContent = '';
        console.log(json["answer"]);
        answer = json["answer"];
    }
    catch (err) {
        console.log(err);
        alert("Failed to fetch new quote");
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function displayAnswer() {
    // console.log("display answer");
    answerText.textContent = answer;
}