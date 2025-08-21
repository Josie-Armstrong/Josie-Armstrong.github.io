const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was somewhere under 32 fahrenheit outside, so while :insertx: had intended to go for a jog around the block, they found themselves walking while shivering instead. It had been a poor idea to forego the jacket. When they got to :inserty:, they hurled a snowball at the door, then :insertz:. Bob, standing inside, witnessed the whole thing. Bob was not surprised, though—:insertx: was holding a 300 pound sack of collected icicles, and it was a frustratingly cold day.";

const insertx = ["The Tenth Doctor", "Giant Leprechaun", "the Wicked Witch of the West"];
const inserty = ["Jail", "an odd hill of snow", "CIA Headquarters"];
const insertz = ["entered a pocket dimension", "disappeared into thin air", "became a Dalek and flew into space"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob",name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14) + ' stone';
        const temperature =  Math.round((32 - 32) * (5/9)) + ' centigrade';

        newStory = newStory.replaceAll("32 fahrenheit", temperature);
        newStory = newStory.replaceAll("300 pound", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}