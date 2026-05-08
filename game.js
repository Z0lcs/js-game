const canvas = document.getElementById("duckCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

const GRID = 40;
const TILE_X = canvas.width / GRID;
const TILE_Y = canvas.height / GRID;

let snake = [];
for (let i = 0; i < 3; i++) {
    snake.push({ x: 10 - i, y: 5 });
}

let currentDir = { x: 1, y: 0 };
let nextDir = { x: 1, y: 0 };
let moveProgress = 0;
let moveSpeed = 0.15;
let score = 0;

let breads = [];
for (let i = 0; i < 3; i++) { spawnBread(); }

window.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" && currentDir.y === 0) nextDir = { x: 0, y: -1 };
    if (e.key === "ArrowDown" && currentDir.y === 0) nextDir = { x: 0, y: 1 };
    if (e.key === "ArrowLeft" && currentDir.x === 0) nextDir = { x: -1, y: 0 };
    if (e.key === "ArrowRight" && currentDir.x === 0) nextDir = { x: 1, y: 0 };
});

function spawnBread() {
    let newPos;
    while (true) {
        newPos = { x: Math.floor(Math.random() * TILE_X), y: Math.floor(Math.random() * TILE_Y) };
        let occupied = snake.some(p => p.x === newPos.x && p.y === newPos.y) ||
            breads.some(b => b.x === newPos.x && b.y === newPos.y);
        if (!occupied) break;
    }
    breads.push(newPos);
}

function update() {
    moveProgress += moveSpeed;
    if (moveProgress >= 1) {
        moveProgress = 0;
        currentDir = nextDir;

        const newHead = {
            x: (snake[0].x + currentDir.x + TILE_X) % TILE_X,
            y: (snake[0].y + currentDir.y + TILE_Y) % TILE_Y
        };

        if (snake.some(p => p.x === newHead.x && p.y === newHead.y)) {
            alert("Vége! Pontszám: " + score);
            location.reload();
        }

        snake.unshift(newHead);

        const breadIndex = breads.findIndex(b => b.x === newHead.x && b.y === newHead.y);
        if (breadIndex !== -1) {
            score++;
            scoreElement.innerText = "Kenyerek: " + score;
            breads.splice(breadIndex, 1);
            spawnBread();
        } else {
            snake.pop();
        }
    }
}

function draw() {
    for (let x = 0; x < TILE_X; x++) {
    for (let y = 0; y < TILE_Y; y++) {
        if (x < TILE_X / 2 && y < TILE_Y / 2) {
            ctx.fillStyle = (x + y) % 2 === 0 ? "#ff3355" : "#c60929";
        } 
        else if (x >= TILE_X / 2 && y < TILE_Y / 2) {
            ctx.fillStyle = (x + y) % 2 === 0 ? "#864cbf" : "#46178f";
        } 
        else if (x < TILE_X / 2 && y >= TILE_Y / 2) {
            ctx.fillStyle = (x + y) % 2 === 0 ? "#33cccc" : "#0aa3a3";
        } 
        else {
            ctx.fillStyle = (x + y) % 2 === 0 ? "#f5a23d" : "#eb670f";
        }

        ctx.fillRect(x * GRID, y * GRID, GRID, GRID);
    }
}

    // Kenyerek
    breads.forEach(b => {
        ctx.fillStyle = "#d35400";
        ctx.beginPath();
        ctx.roundRect(b.x * GRID + 8, b.y * GRID + 12, GRID - 16, GRID - 20, 5);
        ctx.fill();
        ctx.fillStyle = "#edbb99";
        ctx.fillRect(b.x * GRID + 12, b.y * GRID + 16, GRID - 24, GRID - 28);
    });

    // Kacsák rajzolása - A TRÜKK: a testrészeket hátulról előre rajzoljuk
    for (let i = snake.length - 1; i >= 0; i--) {
        let curr = snake[i];
        let next = snake[i - 1];
        let drawX, drawY;

        if (next) {
            let dx = next.x - curr.x;
            let dy = next.y - curr.y;
            if (Math.abs(dx) > 1) dx = -Math.sign(dx);
            if (Math.abs(dy) > 1) dy = -Math.sign(dy);
            drawX = (curr.x + dx * moveProgress) * GRID;
            drawY = (curr.y + dy * moveProgress) * GRID;
        } else {
            drawX = (curr.x + currentDir.x * moveProgress) * GRID;
            drawY = (curr.y + currentDir.y * moveProgress) * GRID;
        }

        const centerX = drawX + GRID / 2;
        const centerY = drawY + GRID / 2;

        // KACSA TESTE - Itt a méret 20, ami kicsit nagyobb, mint a GRID/2 (20), 
        // így a körök összeérnek és folytonos lesz a test.
        ctx.fillStyle = "#f1c40f";
        ctx.beginPath();
        ctx.arc(centerX, centerY, (i === 0) ? 19 : 25, 0, Math.PI * 2);
        ctx.fill();

        // Csak a fej részletei
        if (i === 0) {
            ctx.fillStyle = "#e67e22";
            ctx.beginPath();
            ctx.arc(centerX + currentDir.x * 14, centerY + currentDir.y * 14, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "black";
            let eyeX = currentDir.x === 0 ? 9 : currentDir.x * 12;
            let eyeY = currentDir.y === 0 ? 9 : currentDir.y * 12;
            ctx.beginPath();
            if (currentDir.x !== 0) {
                ctx.arc(centerX + eyeX, centerY - 7, 3.5, 0, Math.PI * 2);
                ctx.arc(centerX + eyeX, centerY + 7, 3.5, 0, Math.PI * 2);
            } else {
                ctx.arc(centerX - 7, centerY + eyeY, 3.5, 0, Math.PI * 2);
                ctx.arc(centerX + 7, centerY + eyeY, 3.5, 0, Math.PI * 2);
            }
            ctx.fill();
        }
    }

    update();
    requestAnimationFrame(draw);
}

draw();