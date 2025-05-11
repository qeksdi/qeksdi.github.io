var image = document.getElementById("gelya")

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
context.drawImage(image, 0, 0);

var x = 0
var y = 0

var x_speed = 1
var y_speed = 1

console.log(window.innerWidth, window.innerHeight)

function moveImage() {
    context.fillStyle = "rgb(0 0 0)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    x = x + x_speed
    y = y + y_speed

    if (y == canvas.height - 160) {
        y_speed = -1
    }

    if (y == 0) {
        y_speed = 1
    }

    if (x == canvas.width - 160) {
        x_speed = -1
    }

    if (x == 0) {
        x_speed = 1
    }

    context.drawImage(image, x, y);
    setTimeout(() => {
        moveImage();
    });
}

moveImage();


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, false);