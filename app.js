const ctx = document.getElementById('canvas').getContext('2d');

let frame = 0;

const games = [
    {
        x: 0,
        y: 0,
        color: '#febcbe',
        
    },
    {
        x: 300,
        y: 0,
        color: '#d0d5fd',
    },
    {
        x: 0,
        y: 300,
        color: '#c3eeb9',
    },
    {
        x: 300,
        y: 300,
        color: '#dfc1f5',
    },
];

function clearCanvas () {
    ctx.clearRect(0, 0, 600, 600); //limpar canvas
}

const draw = () => {
    ctx.fillStyle = games[frame].color;
    ctx.fillRect(games[frame].x, games[frame].y, 300, 300)
    if(frame > 2) frame = 0;
    else frame += 1;

drawGame1();
}

draw();


function drawGame1() {
//     clearCanvas();

    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);
    // start the path
    ctx.beginPath();
    ctx.moveTo(50, 35);
    ctx.lineTo(250, 35);
    ctx.stroke();

    ctx.moveTo(250, 35);
    ctx.lineTo(250, 50);
    ctx.stroke();

    ctx.moveTo(250, 50);
    ctx.lineTo(50, 50);
    ctx.stroke();

    ctx.moveTo(50, 50);
    ctx.lineTo(50, 35);
    ctx.stroke();

    ctx.closePath();
}

function drawGame2() {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

    ctx.beginPath();
    // starting position is x=50, y=50
    ctx.moveTo(250, 175);
    // draw the line that has final coordinates x=250, y=50
    ctx.lineTo(250, 300);
    // .stroke() executes the drawing
    ctx.stroke();
    // close the path
    ctx.closePath();
}

function drawGame3() {
    const canvas = document.getElementById('game3');
    const ctx = canvas.getContext('2d');

    const x = 100; // x coordinate
    const y = 75; // y coordinate
    const radius = 50; // Arc radius
    const startAngle = 0; // Starting point on circle
    const endAngle = Math.PI * 2; // End point on circle

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, true);
    ctx.moveTo(290, 75)
    ctx.arc(250, 75, 40, 0, endAngle, true);
    ctx.stroke();
    ctx.fill();
}

// drawGame3();
