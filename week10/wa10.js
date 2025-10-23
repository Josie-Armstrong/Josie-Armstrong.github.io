let triviaBtn = document.querySelector("#js-new-quote").addEventListener('click', newTrivia);

let answerBtn = document.querySelector('#js-tweet').addEventListener('click', showAnswer);

const btnarray = [document.querySelector('#TOS'), document.querySelector('#TNG'), document.querySelector('#DS9'),
                document.querySelector('#VOY'), document.querySelector('#ENT'), document.querySelector('#DISCO'),
                document.querySelector('#LD'), document.querySelector('#SNW')];

for (i = 0; i < btnarray.length; i++) {
    let index = i;
    btnarray[i].addEventListener('click', (event) => {checkAnswer(index)});
}

let current = {
    show: "",
    fullshow: "",
    episode: "",
    end: "",
    index: 0
}

//const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
const endpoint = "https://stapi.co/api/v1/rest/series/search";

const endpts = ["https://stapi.co/api/v1/rest/series?uid=SEMA0000097474",
                "https://stapi.co/api/v1/rest/series?uid=SEMA0000062876",
                "https://stapi.co/api/v1/rest/series?uid=SEMA0000073238",
                "https://stapi.co/api/v1/rest/series?uid=SEMA0000000029",
                "https://stapi.co/api/v1/rest/series?uid=SEMA0000103435",
                "https://stapi.co/api/v1/rest/series?uid=SEMA0000201665",
                "https://stapi.co/api/v1/rest/series?uid=SEMA0000240166",
                "https://stapi.co/api/v1/rest/series?uid=SEMA0000255370"];

// const tvshows = ["TOS", "TNG", "DS9", "VOY", "ENT", "DISCO", "LD", "SNW"];
const tvshows = ["The Original Series", "The Next Generation", "Deep Space Nine", "Voyager", "Enterprise", "Discovery", "Lower Decks", "Strange New Worlds"];

async function newTrivia() {

    // console.log("Success");
    setShow();

    try {
        const response = await fetch(current.end);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);

        GetRandEpisode(json);

        displayTrivia(current.episode);

        //console.log(current.question);
        //console.log(current.answer);
     } catch (err) {
        console.log(err)
        alert('Failed to get new trivia');
     }
}

function setShow() {
    current.index = Math.floor(Math.random() * tvshows.length);
    current.show = tvshows[current.index];
    current.end = endpts[current.index];

    // Need to set which button is correct here
}

function GetRandEpisode(json) {
    let ep_arr = json["series"]["episodes"];
    // console.log(ep_arr);
    
    let randi = Math.floor(Math.random() * ep_arr.length);
    current.episode = ep_arr[randi]["title"];
    console.log(current.episode);
}

function displayTrivia(question) {
    const questionText = document.querySelector('#js-quote-text');
    const answerText = document.querySelector("#js-answer-text");
    questionText.textContent = "Episode title: " + String(current.episode);
    answerText.textContent = "";
    answerText.style.color = "black";
}

function checkAnswer(i) {
    // console.log(i);
    const answerText = document.querySelector("#js-answer-text");

    if (i == current.index) {
        answerText.textContent = "Correct! This episode is from Star Trek: " + String(current.show);
        answerText.style.color = "green";
        console.log("correct!");
    }
    else {
        answerText.textContent = "Not quite...";
        answerText.style.color = "red";
        console.log("Not quite");
    }
}

function showAnswer() {
    //console.log("Success == answer!");

    const answerText = document.querySelector("#js-answer-text");

    answerText.style.color = "black";
    answerText.textContent = "This episode is from Star Trek: " + String(current.show);
}

newTrivia();