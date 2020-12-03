function drawBoard() {
    for (let currentRow = 0; currentRow < row; currentRow++) {
        for (let currentCol = 0; currentCol < col; currentCol++) {
            board[currentRow][currentCol] = defaultColor;
        }
    }
}
