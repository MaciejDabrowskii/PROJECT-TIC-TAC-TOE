const player = (mark) => {
    let score = 0;
    const getScore = () => score;
    const addPoint = () => {score += 1};
    const getMark = () => mark;
    const resetScore = () => {score = 0};
    
    return { 
        getMark, 
        getScore,
        addPoint,
        resetScore
    }
};


let player1 = player('✖');
let player2 = player('〇');
let playerPlaying;


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
        for (i = 0; i < 9; i++) {
            gameboardArray[i] = '';
        }
        gameboardDiv.innerHTML = "";
    };

    const updateBoard = () => {
        gameboardDiv.innerHTML = "";
        drawBoard();
    };

    const scoreField = () => {
        const player1 = () => document.querySelector(".player1-score");
        const player2 = () => document.querySelector(".player2-score");
        return {
            player1,
            player2
        }
    };

    const winnerCheck = () => {
        if (
            gameboardArray[0] !== "" && gameboardArray[0] === gameboardArray[1] && gameboardArray[1] === gameboardArray[2] ||
            gameboardArray[3] !== "" && gameboardArray[3] === gameboardArray[4] && gameboardArray[4] === gameboardArray[5] ||
            gameboardArray[6] !== "" && gameboardArray[6] === gameboardArray[7] && gameboardArray[7] === gameboardArray[8] ||
            gameboardArray[0] !== "" && gameboardArray[0] === gameboardArray[3] && gameboardArray[3] === gameboardArray[6] ||
            gameboardArray[1] !== "" && gameboardArray[1] === gameboardArray[4] && gameboardArray[4] === gameboardArray[7] ||
            gameboardArray[2] !== "" && gameboardArray[2] === gameboardArray[5] && gameboardArray[5] === gameboardArray[8] ||
            gameboardArray[0] !== "" && gameboardArray[0] === gameboardArray[4] && gameboardArray[4] === gameboardArray[8] ||
            gameboardArray[2] !== "" && gameboardArray[2] === gameboardArray[4] && gameboardArray[4] === gameboardArray[6]
        )   
            {
                if (playerPlaying === player1) {
                    playerPlaying.addPoint();
                    scoreField().player1().innerHTML = playerPlaying.getScore();
                    document.querySelector(".winner").innerHTML = `${document.getElementById("player1-name").value} has won!`;
                    updateBoard();
                    document.querySelector(".winner").classList.add("announce-winner");
                } else {
                    playerPlaying.addPoint();
                    scoreField().player2().innerHTML = playerPlaying.getScore();
                    document.querySelector(".winner").innerHTML = `${document.getElementById("player2-name").value} has won!`;
                    updateBoard();
                    document.querySelector(".winner").classList.add("announce-winner");
                }
            }
        
        else if (
            gameControler.getTurn() === 10
        ) {
                document.querySelector(".winner").innerHTML = `There is a TIE!`;
                updateBoard();
                document.querySelector(".winner").classList.add("announce-tie");
        }
    };

    return {
        resetBoard, 
        drawBoard, 
        updateBoard, 
        getGameboardArray, 
        winnerCheck,
        scoreField,
    }

})();



const gameControler = (() => {
    
    let turn = 1;
    const getTurn = () => turn;

    const playerTurn = () => {
        (!(turn%2 == 0)) ? playerPlaying = player1 : playerPlaying = player2;     
    }
    

    const addListener = () => {
        const fields = [... document.getElementsByClassName("gameboard-field")];
        fields.forEach((field) => {
            field.addEventListener('click', () => { 
                if (field.textContent === "") { 
                    playerTurn();
                    field.textContent = playerPlaying.getMark();
                    turn++;
                    let fieldNumber = field.getAttribute('data-key');
                    game.getGameboardArray()[fieldNumber] = field.textContent;
                    game.winnerCheck();
                }
            })
        })
    };

    const resetGame = () => {
        game.resetBoard();
        game.drawBoard();
        addListener();
        player1.resetScore();
        player2.resetScore();
        turn = 1;
        game.scoreField().player1().innerHTML = 0;
        game.scoreField().player2().innerHTML = 0;
        document.querySelector(".winner").innerHTML = "";
    }
    
    const nextRound = () => {
        game.resetBoard();
        game.drawBoard();
        addListener();
        turn = 1;
        document.querySelector(".winner").innerHTML = "";
    }
    
    const resetButton = document.querySelector(".reset-button").addEventListener("click", () => {resetGame()});
    const nextRoundButton = document.querySelector(".next-round-button").addEventListener("click", () => {nextRound()});

    return {
        nextRound,
        getTurn,
        resetGame,
    }

})();
gameControler.resetGame();




