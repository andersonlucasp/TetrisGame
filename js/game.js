const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");
const speedElement = document.getElementById("speed");

const ROW = 20;
const COL = 10;
const SQ = 30;
const defaultColor = "#111111";
const defaultBorder = "rgba(255,255,255,0.1)";

let speed = 500;
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

const pieces = [
    [Z, '#CD0000'],
    [S, '#9ACD32'],
    [T, '#473C8B'],
    [O, '#FFB90F'],
    [L, '#FF7F24'],
    [I, '#00BFFF'],
    [J, '#104E8B'],
];

let piece = randomPiece();

drop();