const modules = require("./script.js");
const Ship = require("./ship.js");
const Gameboard = require("./gameboard.js");
const Player = require("./player.js");

let ship1 = Ship("ship1", 7);

test('get hit position', () => {
    expect(ship1.hit(4)).toBe([1,1,1,0,1,1,1])
})

let ship_array = [1, 1, 0, 0, 0, 0, 0];

test("check if ship is sunk"), () => {
    expect(ship1.isSunk(ship_array)).toBe(false);
}

let ship_array1 = [0, 0, 0, 0, 0, 0, 0];

test("check if ship is sunk"), () => {
    expect(ship1.isSunk(ship_array1)).toBe(true);
}



