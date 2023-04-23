var nextTurn = "X"
var squares = document.querySelectorAll('.square')
var gameBoard = document.querySelector('#gameBoard')
gameBoard.addEventListener("click", function(event) {
    var clickedDiv = event.target
    if (clickedDiv.innerText.trim() != "") {
        return
    } clickedDiv.innerText = nextTurn
      changeTurn()
      checkWin()
    }
)
function changeTurn() {
    if (nextTurn === "X") {
        nextTurn = "O"
    } else {
        nextTurn = "X"
    }
}
function checkWin() {
        if (
            (squares[0].innerText === squares[1].innerText && squares[1].innerText === squares[2].innerText && squares[0].innerText !== "") ||
            (squares[3].innerText === squares[4].innerText && squares[4].innerText === squares[5].innerText && squares[3].innerText !== "") ||
            (squares[6].innerText === squares[7].innerText && squares[7].innerText === squares[8].innerText && squares[6].innerText !== "") ||
            (squares[0].innerText === squares[3].innerText && squares[3].innerText === squares[6].innerText && squares[0].innerText !== "") ||
            (squares[1].innerText === squares[4].innerText && squares[4].innerText === squares[7].innerText && squares[1].innerText !== "") ||
            (squares[2].innerText === squares[5].innerText && squares[5].innerText === squares[8].innerText && squares[2].innerText !== "") ||
            (squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText && squares[0].innerText !== "") ||
            (squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText && squares[2].innerText !== "")
            ) {
            if (nextTurn === "X") {
                alert("O wins!")
            } else {
                alert("X wins!")
            }
            resetBoard()
            }if (noSquaresLeft()) {
                alert("It's a tie!")
                resetBoard()
            }
            nextTurn = "X"
        }
    