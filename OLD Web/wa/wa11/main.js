const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const files = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = ["alt1","alt2","alt3","alt4","alt5"];

/* Looping through images */
for (i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', files[i]);
    newImage.setAttribute('alt', alts[i]);

    // newImage.addEventListener("click", imageChange(newImage));

    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",(e)=>
        {
            displayedImage.src = newImage.src;
            displayedImage.alt = newImage.alt;
        }
    );
    console.log("added image");
}

function changeTheme() {
    let current = btn.getAttribute("class");
    console.log(current);
    if (current === "dark") {
        console.log("true");
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else {
        console.log("false");
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}

btn.addEventListener("click", changeTheme);
