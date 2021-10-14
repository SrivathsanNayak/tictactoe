//Player factory function to return player objects
const player = (playerNumber, playerType, playerMark, playerTurn) => {
    return {playerNumber, playerType, playerMark, playerTurn};
}

const player1 = player(1, 'human', 'X', true);
const player2 = player(2, 'human', 'O', false);

//Gameboard module to return gameboard object
const gameBoard = (() => {
    let board = [];
    let squareGridsList = document.querySelectorAll(".square-grid");
    for (let i = 0; i < squareGridsList.length; i++) {
        squareGridsList[i].addEventListener("click", () => {
            console.log(`Marked Grid ${i}`);
            board[i] = "Marked";
            // squareGridsList[i].textContent = "X";
        })
    }
})();