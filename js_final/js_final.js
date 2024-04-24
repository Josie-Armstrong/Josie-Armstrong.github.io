const button = document.getElementById("js-roll"); // roll button
const vol_text = document.querySelector("#js-volume") // Volume text

// checkboxes for the dice
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const check5 = document.getElementById("check5");
const check6 = document.getElementById("check6");
const check7 = document.getElementById("check7");
const check8 = document.getElementById("check8");
const check9 = document.getElementById("check9");
const check10 = document.getElementById("check10");
const check11 = document.getElementById("check11");
const check12 = document.getElementById("check12");
const check13 = document.getElementById("check13");
const check14 = document.getElementById("check14");
const check15 = document.getElementById("check15");
const check16 = document.getElementById("check16");

// dice images
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die4 = document.getElementById("die4");
const die5 = document.getElementById("die5");
const die6 = document.getElementById("die6");
const die7 = document.getElementById("die7");
const die8 = document.getElementById("die8");
const die9 = document.getElementById("die9");
const die10 = document.getElementById("die10");
const die11 = document.getElementById("die11");
const die12 = document.getElementById("die12");
const die13 = document.getElementById("die13");
const die14 = document.getElementById("die14");
const die15 = document.getElementById("die15");
const die16 = document.getElementById("die16");

let check_array = [check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, check11, check12, check13, check14, check15, check16];
let dice_array = [die1, die2, die3, die4, die5, die6, die7, die8, die9, die10, die11, die12, die13, die14, die15, die16];
let rand_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let volume = 0;

// Source: MDN Web Docs (used as a helper to generate a random integer)
function getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil); // Max exclusive, min inclusive
}

// Source: Stack Overflow question about sleeping in js (used as a helper to pause before a function)
// DOES NOT WORK
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeImage(die, num) {
    switch(num) {
        case 1:
            die.src = "assets/one.png";
            break;
        case 2:
            die.src = "assets/two.png";
            break;
        case 3:
            die.src = "assets/three.png";
            break;
        case 4:
            die.src = "assets/four.png";
            break;
        case 5:
            die.src = "assets/five.png";
            break;
        case 6:
            die.src = "assets/six.png";
            break;
        default:
            console.log("Number out of D6 range");
            break;
    }
}

function rollDice() {
    // sleep(1000);
    // console.log("ran rollDice");

    for (i = 0; i < check_array.length; i++) {
        const checkbox = check_array[i];

        if (checkbox.checked == false) {
            rand_array[i] = getRandomInt(1,7); // gets rand 1 thru 6
            changeImage(dice_array[i], rand_array[i]); // changes image to matching die face
            // console.log(rand_array[i]);
        }
    }
}

function changeVolume() {

    // make the images change 5 times before landing and computing volume
    /* for (i = 0; i < 5; i++) {
        rollDice();
    } */

    rollDice();

    volume = 0;
    for (num of rand_array) {
        volume += num;
        // console.log(num);
        // console.log(volume)
    }

    vol_text.textContent = "Volume: " + volume;
}

button.addEventListener("click",changeVolume);