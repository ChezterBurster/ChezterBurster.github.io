document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('spaceCanvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var spaceship = new Image();
    spaceship.src = 'images/spaceship.png'; // Replace with your image path

    var angle = 0;

    function draw() {
        ctx.clearRect(0, 0, width, height); // Clear the canvas
        var x = width / 2 + Math.sin(angle) * 200; // Circle center x + radius
        var y = height / 2 + Math.cos(angle) * 200; // Circle center y + radius
        ctx.drawImage(spaceship, x, y, 100, 100); // Draw the spaceship

        angle += 0.01; // Change the angle for the next frame

        requestAnimationFrame(draw); // Request the next frame
    }

    spaceship.onload = draw; // Start the animation once the image is loaded
});