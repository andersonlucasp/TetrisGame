const ctx = document.getElementById('canvas').getContext('2d');
const scoreElement = document.getElementById('score');
const speedElement = document.getElementById('speed');

const row = 20;
const col = 10;
const sq = 30;
const defaultColor = '#111111';
const defaultBorder = 'rgba(255,255,255,0.1)';

let board = [];
for (let currentRow = 0; currentRow < row; currentRow++) {
    board[currentRow] = [];
    for (let currentCol = 0; currentCol < col; currentCol++) {
        board[currentRow][currentCol] = defaultColor;
    }
}