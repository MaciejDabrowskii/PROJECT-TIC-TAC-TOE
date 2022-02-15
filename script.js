
let gameBoardObj = {};
let turn = 1;
let player1 = "x"
let player2 = "o"
let playerPlaying;
let fieldNumber = {};
function checkTurn() {
    if (turn % 2 == 0 ) {
        playerPlaying = player2
    }
    else {
        playerPlaying = player1
    }
}

let polaNode = document.getElementsByClassName("gameboard");
let pola = [...polaNode];

pola.map((pole) => {
    pole.addEventListener("click", () => {
        function checkEmpty() {
            if (pole.innerHTML != ""){
                return
            }
            else {
                checkTurn();
                turn++;
                pole.innerHTML = playerPlaying;
                gameBoardObj[pole.id] = playerPlaying;
                console.log(gameBoardObj);
            }
        }
        checkEmpty();
        winner();

    })
})
function winner() {
    if (gameBoardObj['field-1'] === "x" && gameBoardObj['field-2'] === "x" && gameBoardObj['field-3'] === "x") {
        alert("player1 won")
    }else if (gameBoardObj['field-4'] === "x" && gameBoardObj['field-5'] === "x" && gameBoardObj['field-6'] === "x") {
        alert("player1 won")
    }else if (gameBoardObj['field-7'] === "x" && gameBoardObj['field-8'] === "x" && gameBoardObj['field-9'] === "x") {
        alert("player1 won")
    }else if (gameBoardObj['field-1'] === "x" && gameBoardObj['field-4'] === "x" && gameBoardObj['field-7'] === "x") {
        alert("player1 won")
    }else if (gameBoardObj['field-2'] === "x" && gameBoardObj['field-5'] === "x" && gameBoardObj['field-8'] === "x") {
        alert("player1 won")
    }else if (gameBoardObj['field-3'] === "x" && gameBoardObj['field-6'] === "x" && gameBoardObj['field-9'] === "x") {
        alert("player1 won")
    }else if (gameBoardObj['field-1'] === "x" && gameBoardObj['field-5'] === "x" && gameBoardObj['field-9'] === "x") {
        alert("player1 won")
    }else if (gameBoardObj['field-3'] === "x" && gameBoardObj['field-5'] === "x" && gameBoardObj['field-7'] === "x") {
        alert("player1 won")
    }else if (gameBoardObj['field-1'] === "o" && gameBoardObj['field-2'] === "o" && gameBoardObj['field-3'] === "o") {
        alert("player2 won")
    }else if (gameBoardObj['field-4'] === "o" && gameBoardObj['field-5'] === "o" && gameBoardObj['field-6'] === "o") {
        alert("player2 won")
    }else if (gameBoardObj['field-7'] === "o" && gameBoardObj['field-8'] === "o" && gameBoardObj['field-9'] === "o") {
        alert("player2 won")
    }else if (gameBoardObj['field-1'] === "o" && gameBoardObj['field-4'] === "o" && gameBoardObj['field-7'] === "o") {
        alert("player2 won")
    }else if (gameBoardObj['field-2'] === "o" && gameBoardObj['field-5'] === "o" && gameBoardObj['field-8'] === "o") {
        alert("player2 won")
    }else if (gameBoardObj['field-3'] === "o" && gameBoardObj['field-6'] === "o" && gameBoardObj['field-9'] === "o") {
        alert("player2 won")
    }else if (gameBoardObj['field-1'] === "o" && gameBoardObj['field-5'] === "o" && gameBoardObj['field-9'] === "o") {
        alert("player2 won")
    }else if (gameBoardObj['field-3'] === "o" && gameBoardObj['field-5'] === "o" && gameBoardObj['field-7'] === "o") {
        alert("player2 won")
    }

    }
