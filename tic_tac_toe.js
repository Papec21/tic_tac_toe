let gameBoard = ['','','','','','','','',''];
let turns = 9; // Total turns, assuming 9 turns for a 3x3 grid
/*
let player1 = {
    name: `${player1_name.value}`,
    mark: "X",
};

let player2 = {
    name: `${player2_name.value}`,
    mark: "O",
}; */

function playerTurn() {
    const cells = document.querySelectorAll('.cell');
    let turn = true; // true for player1, false for player2

    cells.forEach(cell => {
        cell.addEventListener('click', function(event) {
            // Ensure the cell is not already taken and there are turns left
            if (turns > 0 && event.target.textContent === '') {
                const id = event.target.id;

                // Update game state based on current player
                if (turn) {
                    annoucment.innerHTML = "It's player1's turn!";
                    gameBoard[id] = "X";
                    event.target.textContent = gameBoard[id];
                    if (checkWin(gameBoard, "X")) {
                        annoucment.innerHTML = "Player1 wins!";
                        turns = 0;
                        turn = true;
                        return;
                    }

                } else {
                    annoucment.innerHTML = "It's player2's turn!";
                    gameBoard[id] = "O";
                    event.target.textContent = gameBoard[id]; // Update cell display
                    if (checkWin(gameBoard, "O")) {
                        annoucment.innerHTML = "Player2 wins!";
                        turns = 0;
                        turn = true;
                        return;
                    }
                }

                // Toggle turn and decrement turns
                turn = !turn;
                turns--;

                if (turns === 0) { // Announce draw
                    annoucment.innerHTML = "It's a draw!";
                }

                    // Check for game over conditions here if needed
            } else if (event.target.textContent !== '') {
                console.log("Cell already taken!");
            }
        });
    });
}
// Start at loading
document.addEventListener('DOMContentLoaded', function() {
    playerTurn();
});
// Change it to players name alert later 

function checkWin(gameBoard, playerMark) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => {
            return gameBoard[index] === playerMark;
        });
    });
}
function resetGame() {
    turns = 9;
    gameBoard = ['','','','','','','','',''];
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });
    playerTurn();
} // Reset the game

function startGame() {

}

const deleteBtn = document.getElementById("gameReset");
deleteBtn.addEventListener('click', function() {
    resetGame();
})

const annoucment = document.getElementById("annoucment");
/*
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9]
 Winning combinations */

 /*
    What we need to add:
    make it so draw is also possible
    make it so after winning and drawing theres window poping out
    make it so score is saved
    make it possible to reset players
    
    Then move to html and css and make it look all decent
 */

    /*            if (turns === 0) {
                gameBoard[id] = "X";
                annoucment.innerHTML = "It's a draw!";
            } */