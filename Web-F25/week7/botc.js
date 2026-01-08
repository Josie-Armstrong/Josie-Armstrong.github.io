const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const gridArray = [document.querySelector('.learn'), document.querySelector('.read'), document.querySelector('.play')];
const mainGrid = document.querySelector('.about-clocktower-grid');
const main = document.querySelector('main');

// These are the footer buttons for text size changes
const small_txt = document.querySelector('#small-text');
const med_txt = document.querySelector('#med-text');
const large_txt = document.querySelector('#large-text');
const clear_txt_pref = document.querySelector('#clear-preferences');

let menu_shown = false;
let color_inversion = false;

// navMenu.classList.add("show");

function showMenu() {
    var shown = navMenu.classList.toggle("show");
    navMenu.classList.toggle("hide");

    if (shown) {
        navToggle.setAttribute("aria-expanded", "true");
        navToggle.style.backgroundColor = "#F4DF85";
        navToggle.style.transform = "rotate(180deg)";
        // console.log("true");
    }
    else {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.style.backgroundColor = "#fff8da";
        navToggle.style.transform = "rotate(0deg)";
        // console.log("false");
    }
    // console.log(navMenu.classList);
    // console.log("this worked");
}

function changeBgCol(event) {
    console.log("triggered");
    console.log(event.key);
    if (event.key == "c") {
        if (color_inversion == true) {
            for (let i = 0; i < 3; i++) {
            gridArray[i].style.backgroundColor = "#fff5c6";
            gridArray[i].style.color = "#000000";
            gridArray[i].style.border = "5px solid #1f142f";
            }
            color_inversion = false;
        }
        else {
            for (let i = 0; i < 3; i++) {
            gridArray[i].style.backgroundColor = "#1f142f";
            gridArray[i].style.color = "#ffffff";
            gridArray[i].style.border = "5px solid #F4DF85";
            }
            color_inversion = true;
        }
    }
}

// !!! DEMO CODE FOR WEEK 7 !!!

/* ALGORITHM:
- Write function to do this
    - In function, what I do
*/

// HOW TO CHANGE TEXT SIZE. Updates local storage.
function change_text_size(size) {
    // document.html.style.fontSize = str(size, "px");
    // console.log(size);
    let size_in_px = size * 16;

    localStorage.setItem("fontSize", size_in_px);
    document.querySelector("html").style.fontSize = String(size_in_px) + "px";
}

// RUNS ON PAGE LOAD to change to user's local storage preference
function set_text_size() {

    // Only happens if the local storage item exists
    if (localStorage.getItem("fontSize") !== null) {
        let temp_size = localStorage.getItem("fontSize");
        document.querySelector("html").style.fontSize = String(temp_size) + "px";
    }

    // console.log(localStorage.getItem("fontSize"));

}

// CLEAR LOCAL STORAGE, and resets text size to automatic (medium)
function clear_local_storage(size) {
    let size_in_px = size * 16;
    
    localStorage.clear();
    document.querySelector("html").style.fontSize = String(size_in_px) + "px";
}

window.addEventListener('load', set_text_size);

small_txt.addEventListener('click', () => {change_text_size(0.8)});
med_txt.addEventListener('click', () => {change_text_size(1)});
large_txt.addEventListener('click', () => {change_text_size(1.5)});
clear_txt_pref.addEventListener('click', () => {clear_local_storage(1)});

// !!! END DEMO CODE FOR WEEK 7 !!!

navToggle.addEventListener('click', showMenu);
// mainGrid.addEventListener("keydown", event => changeGridBg(event));
// mainGrid.addEventListener("click", changeGridBg(1));
window.addEventListener('keydown', (event) => {changeBgCol(event)});