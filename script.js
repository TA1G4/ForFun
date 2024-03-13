const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Draw heart shape
ctx.fillStyle = '#ff4d4d';
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.bezierCurveTo(400, 25, 300, 25, 300, 100);
ctx.bezierCurveTo(300, 150, 400, 200, 400, 250);
ctx.bezierCurveTo(400, 300, 200, 350, 200, 250);
ctx.bezierCurveTo(200, 200, 300, 150, 300, 100);
ctx.bezierCurveTo(300, 25, 200, 25, 200, 100);
ctx.bezierCurveTo(200, 200, 0, 250, 200, 300);
ctx.bezierCurveTo(200, 350, 400, 300, 400, 250);
ctx.bezierCurveTo(400, 200, 500, 150, 500, 100);
ctx.bezierCurveTo(500, 25, 400, 25, 400, 100);
ctx.fill();

// Display message
const message = document.querySelector('.message');

// Random initial position for the message
let x = Math.random() * (canvas.width - 100);
let y = Math.random() * (canvas.height - 30);

message.style.top = `${y}px`;
message.style.left = `${x}px`;

// Update message position
function updateMessagePosition() {
    x = Math.random() * (canvas.width - 100);
    y = Math.random() * (canvas.height - 30);
    message.style.top = `${y}px`;
    message.style.left = `${x}px`;
}

// Event listener to catch love
message.addEventListener('click', () => {
    alert('Guess what? GET BETTER SOON 😭 I LOVE YOU ❤️');
    updateMessagePosition();
});