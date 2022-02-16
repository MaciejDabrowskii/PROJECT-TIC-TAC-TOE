const game = (() => {
    let gameboardArray = [];
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

    return {resetBoard, drawBoard,}
})();

const player = (name, mark) => {
    let score = 0;
    const getScore = () => score;
    const getMark = () => mark;
    const getName = () => name;
    return {getName, getMark, getScore, updateName}
};

const player1 = player(document.getElementById("player1-name").innerHTML, '✖');
const player2 = player(document.getElementById("player2-name").innerHTML, '〇');
let playerPlaying;