"use strict";   // Always use strict mode

// Gets the board-container element from the DOM
let board = document.getElementById("board");

// Generates board cell and inserts it as a child element of board-container
for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
}

// Puts the cells in array "cells"
let cells = Array.from(board.childNodes);
console.log(cells.length);

// Labels each cell their respective cell number
for (let i = 0; i < cells.length; i++) {
    console.log(i);
    cells[i].innerHTML = i;
}