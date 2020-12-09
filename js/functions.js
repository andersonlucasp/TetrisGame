function drawBoard() {
    for (let currentRow = 0; currentRow < ROW; currentRow++) {
        for (let currentCol = 0; currentCol < COL; currentCol++) {
            const currentSquareColor = board[currentRow][currentCol];
            drawSquare(currentRow, currentCol, currentSquareColor);
        }
    }

    scoreElement.innerHTML = score;
    speedElement.innerHTML = speed;
}

function drawSquare(y, x, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    if (color == defaultColor) {
        ctx.strokeStyle = defaultBorder;
    }

    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

function randomPiece() {
    const randomPieceNumber = Math.floor(Math.random() * pieces.length);
    return new Piece(
        pieces[randomPieceNumber][0],
        pieces[randomPieceNumber][1],
    );
}

function drop() {
    const now = Date.now();
    const delta = now - dropStart;

    if (delta > speed) {
        piece.moveDown();
        dropStart = Date.now();
    }

    requestAnimationFrame(drop);
}

function CONTROL(event) {

    if (!canMove) {
        return false;
    }

    const moveFunctions = {
        ArrowLeft() {
            piece.moveLeft();
            dropStart = Date.now();
        },
        ArrowRight() {
            piece.moveRight();
            dropStart = Date.now();
        },
        ArrowUp() {
            piece.rotate();
            dropStart = Date.now();
        },
        ArrowDown() {
            piece.moveDown();
        }
    };

    const movePiece = moveFunctions[event.code];
    movePiece();
}