const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");
const speedElement = document.getElementById("speed");


const ROW = 20;
const COL = 10;
const SQ = 30;
const defaultColor = "#111111";
const defaultBorder = "white";

let canMove = true;
let speed = 480;
let dropStart = Date.now();
let score = 0;

let board = [];
for (let currentRow = 0; currentRow < ROW; currentRow++) {
    board[currentRow] = [];
    for (let currentCol = 0; currentCol < COL; currentCol++) {
        board[currentRow][currentCol] = defaultColor;
    }
}

drawBoard();

const PIECES = [
    [Z, '#CD0000'],
    [S, '#9ACD32'],
    [T, '#473C8B'],
    [O, '#FFB90F'],
    [L, '#FF7F24'],
    [I, '#00BFFF'],
    [J, '#104E8B'],
];

let piece = randomPiece();

document.addEventListener("keydown", CONTROL);

const button = document.getElementById('play');

button.addEventListener('click', function () {
    const audio = document.querySelector('audio');
    audio.play();

    if (button.innerText == 'Play') {
        button.innerText = 'Pause';
        button.innerHTML = '<img src="./img/pause-solid.svg"" class="pauseSolid"/>Pause';
        drop();
    } else if (button.innerText == 'Pause') {
        audio.pause();
        button.innerText = 'Play';
        button.innerHTML = '<img src="./img/play-solid.svg"" class="playSolid"/>Play';
        cancelAnimationFrame(req);
    }
});