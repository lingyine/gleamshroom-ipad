
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: 100,
    y: 250,
    vx: 0,
    vy: 0,
    width: 32,
    height: 32,
    jumping: false
};

function drawPlayer() {
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawGround() {
    ctx.fillStyle = "#444";
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
}

function update() {
    player.vy += 0.5; // gravity
    player.x += player.vx;
    player.y += player.vy;

    if (player.y + player.height >= canvas.height - 20) {
        player.y = canvas.height - 20 - player.height;
        player.vy = 0;
        player.jumping = false;
    }

    player.vx *= 0.9;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGround();
    drawPlayer();

    requestAnimationFrame(update);
}

function moveLeft() {
    player.vx = -3;
}

function moveRight() {
    player.vx = 3;
}

function jump() {
    if (!player.jumping) {
        player.vy = -10;
        player.jumping = true;
    }
}

update();
