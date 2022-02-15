let player1;
let player2;
let playerPlaying;



const gameboard = (() => {
    let fields = [];
    fields[0] = document.getElementById("field-0");
    fields[1] = document.getElementById("field-1");
    fields[2] = document.getElementById("field-2");
    fields[3] = document.getElementById("field-3");
    fields[4] = document.getElementById("field-4");
    fields[5] = document.getElementById("field-5");
    fields[6] = document.getElementById("field-6");
    fields[7] = document.getElementById("field-7");
    fields[8] = document.getElementById("field-8");
    return {
        fields
    }
})();






const gameControl = (() => {
    
    const playerMaker = (name, mark) => {
        let score = 0;
        return { name, mark, score };
    };

    const winner = (() => {
        function check() {
            if (gameboard.fields[0].innerHTML === "x" && gameboard.fields[1].innerHTML === "x" && gameboard.fields[2].innerHTML === "x") {
                alert("player 1 has won");
            } else if (gameboard.fields[3].innerHTML === "x" && gameboard.fields[4].innerHTML === "x" && gameboard.fields[5].innerHTML === "x") {
                alert("player 1 has won");
            } else if (gameboard.fields[6].innerHTML === "x" && gameboard.fields[7].innerHTML === "x" && gameboard.fields[8].innerHTML === "x") {
                alert("player 1 has won");
            } else if (gameboard.fields[0].innerHTML === "x" && gameboard.fields[4].innerHTML === "x" && gameboard.fields[8].innerHTML === "x") {
                alert("player 1 has won");
            } else if (gameboard.fields[2].innerHTML === "x" && gameboard.fields[4].innerHTML === "x" && gameboard.fields[6].innerHTML === "x") {
                alert("player 1 has won");
            } else if (gameboard.fields[0].innerHTML === "o" && gameboard.fields[1].innerHTML === "o" && gameboard.fields[2].innerHTML === "o") {
                alert("player 1 has won");
            } else if (gameboard.fields[3].innerHTML === "o" && gameboard.fields[4].innerHTML === "o" && gameboard.fields[5].innerHTML === "o") {
                alert("player 1 has won");
            } else if (gameboard.fields[6].innerHTML === "o" && gameboard.fields[7].innerHTML === "o" && gameboard.fields[8].innerHTML === "o") {
                alert("player 1 has won");
            } else if (gameboard.fields[0].innerHTML === "o" && gameboard.fields[4].innerHTML === "o" && gameboard.fields[8].innerHTML === "o") {
                alert("player 1 has won");
            } else if (gameboard.fields[2].innerHTML === "o" && gameboard.fields[4].innerHTML === "o" && gameboard.fields[6].innerHTML === "o") {
                alert("player 1 has won");
            }else if ( turnCounter.turn === 9) {
                alert("tie!")
            }
        };
        return { check }
    })();

    const createPlayers = (() => {
        let button = document.getElementById("create-button")
        button.addEventListener("click", () => {
            player1 = playerMaker(`${document.getElementById("player1-name").value}`, 'x');
            player2 = playerMaker(`${document.getElementById("player2-name").value}`, 'o');
        })
    })();

 
    const turnCounter = (() => {
        let turn = 1;
        function checkTurn() {
            if (turn % 2 == 0 ) {
                playerPlaying = player2;
                turn++;
            }
            else {
                playerPlaying = player1
                turn++;
            }
        };
        return { checkTurn};
    })();




    gameboard.fields.map((field) => {
        field.addEventListener("click", () => {
            if (field.innerHTML === "") {
                turnCounter.checkTurn();
                field.innerHTML = playerPlaying.mark;
                winner.check();
            }
        })
    })

})();



