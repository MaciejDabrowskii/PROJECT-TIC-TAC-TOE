


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



const playerMaker = (name, mark) => {
    return { name, mark };
    };


const gameControl = (() => {

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
        return { checkTurn };
    })();

    

    gameboard.fields.map((field) => {
        field.addEventListener("click", () => {
            turnCounter.checkTurn();
            field.innerHTML = playerPlaying.mark;
        })
    })


})();



let player1;
let player2;
let playerPlaying;
