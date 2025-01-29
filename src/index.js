import "./styles.css";
const {Player} = require("./player.js");

let computer = Player();
let player = Player();

const optionContainer = document.querySelector(".options-container");
let flipButton = document.querySelector("#flip-button");

let angle = 0;
function flip() {
    // console.log(Array.from(optionContainer.children));
    const optionShips = Array.from(optionContainer.children);
    // if(angle === 0){
    //     angle = 90
    // }else{
    //     angle = 0;
    // }

    angle = angle ===  0 ? 90 : 0
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}

flipButton.addEventListener("click", flip)