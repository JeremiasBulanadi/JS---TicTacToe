"use strict";   // Always use strict mode
function checkMatchStatus () {

}

// Resets the board by clearing the cells and adding
function resetGame () {
    board.innerHTML = ""; // Removes the children of "board" element
    isPlayer1 = true; // Resets the variable to have player 1 move first

    // Generates board cell and inserts it as a child element of board-container
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", cellCheck);
        board.appendChild(cell);
    }
}

// Checks cell clicked if its already checked
// if not, checks the cell
function cellCheck (e) {
    let target = e.currentTarget;
    if (target.hasChildNodes() === false) {
        let check = document.createElement("div");
        check.className = isPlayer1 ? "p1Check" : "p2Check" ;
        target.appendChild(check);
        isPlayer1 = !isPlayer1;
    }
}

let isPlayer1 = true ; // Used for knowing whether player 1 or player 2 is the one making a move

// Gets the board-container element from the DOM
let board = document.getElementById("board");

resetGame(); // initial setup

let cells = Array.from(board.children); // Puts the cells in array "cells"
console.log(cells[0]);

