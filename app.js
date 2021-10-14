//Player factory function to return player objects
const player = (playerNumber, playerType, playerMark, playerTurn) => {
    return { playerNumber, playerType, playerMark, playerTurn };
}

const player1 = player(1, 'human', 'X', true);
const player2 = player(2, 'human', 'O', false);

//Gameboard module to return gameboard object
const gameBoard = (() => {
    let board = [];
    let squareGridsList = document.querySelectorAll(".square-grid");
    for (let i = 0; i < squareGridsList.length; i++) {
        squareGridsList[i].addEventListener("click", () => {
            if (player1.playerTurn == true && squareGridsList[i].textContent == "") {
                console.log(`marked Grid ${i}`);
                board[i] = player1.playerMark;
                squareGridsList[i].textContent = player1.playerMark;
                squareGridsList[i].classList.add("square-grid-mark", "player1-mark");
                squareGridsList[i].style.backgroundColor = "#ddd";
                player1.playerTurn = false;
                player2.playerTurn = true;
            }
            else if (player2.playerTurn == true && squareGridsList[i].textContent == "") {
                console.log(`marked Grid ${i}`);
                board[i] = player2.playerMark;
                squareGridsList[i].textContent = player2.playerMark;
                squareGridsList[i].classList.add("square-grid-mark", "player2-mark");
                squareGridsList[i].style.backgroundColor = "#ddd";
                player1.playerTurn = true;
                player2.playerTurn = false;
            }
            console.log(board);
        })
    }
})();