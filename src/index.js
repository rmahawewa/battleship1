import "./styles.css";
const {Player} = require("./player.js");
const {Ship} = require("./ship.js");



let computer = Player();
let player = Player();

const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionContainer = document.querySelector(".options-container");
let flipButton = document.querySelector("#flip-button");

//option choosing
let angle = 0;
function flip() {
    // console.log(Array.from(optionContainer.children));
    const optionShips = Array.from(optionContainer.children);
    angle = angle ===  0 ? 90 : 0
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}

flipButton.addEventListener("click", flip)


//creating board
const width = 10

function createBoard(color, user){
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board');
    gameBoardContainer.style.backgroundColor = color;
    gameBoardContainer.id = user

    for (let i=0; i < width * width; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gameBoardContainer.append(block)
    }


    gamesBoardContainer.append(gameBoardContainer);
}

createBoard('yellow', 'player')
createBoard('pink', 'computer')


//Creating Ships
const ship1 = Ship("destroyer", 2)
const ship2 = Ship("submarine", 3)
const ship3 = Ship("cruiser", 3)
const ship4 = Ship("battleship", 4)
const ship5 = Ship("carrier", 5)

const ships = [ship1, ship2, ship3, ship4, ship5]

function addShipPiece(){

    const allBoardBlocks = document.querySelectorAll('#computer div')
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = randomBoolean
    let randomStartIndex = Math.floor(Math.random() * width * width)
    console.log(randomStartIndex)

    let shipBlocks = []

    for (let i = 0; i<ship1.length; i++){
        if(isHorizontal){
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + 1])
        } else{
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i * width])
        }
    }

    console.log(shipBlocks);

    shipBlocks.forEach(shipBlock => {
        shipBlock.classList.add(ship1.name)
        shipBlock.classList.add('taken')
    })

}

addShipPiece()