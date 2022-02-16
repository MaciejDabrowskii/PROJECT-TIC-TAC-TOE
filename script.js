const game = (() => {
    let gameboardArray = [];
    const getGameboardArray = () => gameboardArray;
    for (let i = 0; i < 9; i++) {
        gameboardArray.push("")
    };
    const gameboardDiv = document.querySelector(".gameboard-div");

    const drawBoard = () => {
        gameboardArray.forEach((item, index) => {
            const field = document.createElement("div");
            field.classList.add('gameboard-field');
            field.dataset.key = `${index}`;
            field.textContent = item;
            gameboardDiv.appendChild(field);
        });
    };
    const resetBoard = () => {
        gameboardArray.forEach((item) => {
            item = "";
        });
        gameboardDiv.innerHTML = "";
    };

    const updateBoard = () => {
        gameboardDiv.innerHTML = "";
        drawBoard();
    }

    return {resetBoard, drawBoard, updateBoard, getGameboardArray}
})();

game.drawBoard();

const player = (name, mark) => {
    let score = 0;
    const getScore = () => score;
    const getMark = () => mark;
    const getName = () => name;
    return {getName, getMark, getScore}
};

const player1 = player(document.getElementById("player1-name").innerHTML, '✖');
const player2 = player(document.getElementById("player2-name").innerHTML, '〇');
let playerPlaying;

const gameControler = (() => {
    
    let turn = 1;
    const getTurn = () => turn;

    const playerTurn = () => {
        (!(turn%2 == 0)) ? playerPlaying = player1 : playerPlaying = player2;     
    }
    
    
    
    const fields = [... document.getElementsByClassName("gameboard-field")];
    fields.forEach((field) => {
        field.addEventListener('click', () => { 
            if (field.textContent === "") { 
            playerTurn();
            field.textContent = playerPlaying.getMark();
            turn++;
            let fieldNumber = field.getAttribute('data-key');
            game.getGameboardArray()[fieldNumber] = field.textContent;
            }
        })
    })

})();