var nextTurn = "X"
var squares = document.querySelectorAll('.square')
var gameBoard = document.querySelector('#gameBoard')
var XScore = 0
var OScore = 0

gameBoard.addEventListener("click", function (event) {
    var clickedDiv = event.target
    if (clickedDiv.innerText.trim() != "") {
        return
    } clickedDiv.innerText = nextTurn
    changeTurn()
    var winner = checkWin()
    console.log(winner)
    if (winner === 'X wins!' || winner === 'O wins!') {
        document.querySelector(".winnerDisplay").innerText = winner
    } else if (winner === 'Tie') {
        document.querySelector(".winnerDisplay").innerText = "Tie!"
    }
})

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
            OScore += 1
            document.getElementById("O-score").innerText = `O: ${OScore}`
            return "O wins!"
        } else {
            XScore += 1
            document.getElementById("X-score").innerText = `X: ${XScore}`
            return "X wins!"
        }
    }
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].innerText === "") {
            return;
        }
    }
    return "Tie";
}
