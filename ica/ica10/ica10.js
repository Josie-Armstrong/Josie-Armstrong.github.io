const x = 10;
// console.log(x);

const button = document.querySelector("button");
button.addEventListener('click', textChange);

const heading = document.querySelector("h1")

let new_text = "+"

function textChange() {
    // console.log("test");
    // const new_text = prompt("Please enter your new button text:");
    new_text = `${new_text} +`;
    heading.textContent = `${new_text}`;
    console.log("text changed");
}

changey.addEventListener('click', changeColor)

// Got this function from mdn web docs, and modified it for my own stuff
function getRgbVal() {
    return Math.floor(Math.random() * (256 - 0) + 0); // The maximum is exclusive and the minimum is inclusive
}

function changeColor() {
    Red = getRgbVal();
    Green = getRgbVal();
    Blue = getRgbVal();

    changey.style.backgroundColor = `rgb(${Red},${Green},${Blue})`;
    console.log("color changed");
}