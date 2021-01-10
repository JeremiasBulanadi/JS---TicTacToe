// TODO: Fix win state
"use strict";   // Always use strict mode

// Checks whether player 1 or player 2 wins after every move
function checkMatchStatus () {
    if (isGameOver) return;
    
    if (
        // First row
        (
            // Expresses false if any of the cells are not checked
            !(
                cells[0].className == "cell" ||
                cells[1].className == "cell" ||
                cells[2].className == "cell"
            )
                &&
            // Expresses true if the cells all have the same classes
            (
                cells[0].className == cells[1].className &&
                cells[1].className == cells[2].className
            )
        )
            ||
        // Second Row
        (
            // Expresses false if any of the cells are not checked
            !(
                cells[3].className == "cell" ||
                cells[4].className == "cell" ||
                cells[5].className == "cell"
            )
                &&
            // Expresses true if the cells all have the same classes
            (
                cells[3].className == cells[4].className &&
                cells[4].className == cells[5].className
            )
        )
            ||
        // Third Row
        (
            // Expresses false if any of the cells are not checked
            !(
                cells[6].className == "cell" ||
                cells[7].className == "cell" ||
                cells[8].className == "cell"
            )
                &&
            // Expresses true if the cells all have the same classes
            (
                cells[6].className == cells[7].className &&
                cells[7].className == cells[8].className
            )
        )
            ||
        // First Column
        (
            // Expresses false if any of the cells are not checked
            !(
                cells[0].className == "cell" ||
                cells[3].className == "cell" ||
                cells[6].className == "cell"
            )
                &&
            // Expresses true if the cells all have the same classes
            (
                cells[0].className == cells[3].className &&
                cells[3].className == cells[6].className
            )
        )
            ||
        // Second Column
        (
            // Expresses false if any of the cells are not checked
            !(
                cells[1].className == "cell" ||
                cells[4].className == "cell" ||
                cells[7].className == "cell"
            )
                &&
            // Expresses true if the cells all have the same classes
            (
                cells[1].className == cells[4].className &&
                cells[4].className == cells[7].className
            )
        )
            ||
        // Third Column
        (
            // Expresses false if any of the cells are not checked
            !(
                cells[2].className == "cell" ||
                cells[5].className == "cell" ||
                cells[8].className == "cell"
            )
                &&
            // Expresses true if the cells all have the same classes
            (
                cells[2].className == cells[5].className &&
                cells[5].className == cells[8].className
            )
        )
            ||
        // Top-left to bottom-right diagonal
        (
            // Expresses false if any of the cells are not checked
            !(
                cells[0].className == "cell" ||
                cells[4].className == "cell" ||
                cells[8].className == "cell"
            )
                &&
            // Expresses true if the cells all have the same classes
            (
                cells[0].className == cells[4].className &&
                cells[4].className == cells[8].className
            )
        )
            ||
        // Top-right to bottom-left diagonal
        (
            // Expresses false if any of the cells are not checked
            !(
                cells[2].className == "cell" ||
                cells[4].className == "cell" ||
                cells[6].className == "cell"
            )
                &&
            // Expresses true if the cells all have the same classes
            (
                cells[2].className == cells[4].className &&
                cells[4].className == cells[6].className
            )
        )

    ) {
        isGameOver = true;
        alert((!isPlayer1 ? "Player 1 " : "PLayer 2 ") + "wins");
    } else if ( // If all cells are checked with no winning move
        !(
            cells[0].className == "cell" ||
            cells[1].className == "cell" ||
            cells[2].className == "cell" ||
            cells[3].className == "cell" ||
            cells[4].className == "cell" ||
            cells[5].className == "cell" ||
            cells[6].className == "cell" ||
            cells[7].className == "cell" ||
            cells[8].className == "cell"
        )
    ) {
        alert("Nobody wins");
    }
}

// Resets the board by clearing the cells and adding
function resetGame () {
    board.innerHTML = ""; // Removes the children of "board" element
    isPlayer1 = true; // Resets the variable to have player 1 move first
    isGameOver = false; // Guard variable reset

    // Generates board cell and inserts it as a child element of board-container
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = i.toString();
        cell.addEventListener("click", cellCheck);
        board.appendChild(cell);
    }
    cells = Array.from(board.children); // Puts the cells in array "cells"
}

// Sees cell clicked if its already checked
// if not, checks the cell
function cellCheck (e) {
    if (isGameOver) return; // Guard clause
    let target = e.currentTarget;
    if (target.hasChildNodes() === false) {
        let check = document.createElement("div");
        check.className = isPlayer1 ? "p1Check" : "p2Check" ;
        target.appendChild(check);
        target.classList.add(isPlayer1 ? "p1" : "p2") ;
        isPlayer1 = !isPlayer1;
        checkMatchStatus();
    }
}

let isPlayer1 = true ; // Used for knowing whether player 1 or player 2 is the one making a move
let isGameOver = false; // Guard variable

// Gets the board-container element from the DOM
let board = document.getElementById("board");
let cells;

resetGame(); // initial start and setup

console.log(cells[0].className);