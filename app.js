document.addEventListener('DOMContentLoaded', function () {
    var spaceship = document.getElementById('spaceship');
    var spaceshipSpeed = 1; // Speed of the spaceship, can be configured
    var mouseX = 0;
    var mouseY = 0;

    // Update the spaceship's speed here if needed
    spaceshipSpeed = 2; // Increase to make the spaceship move faster

    document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function moveSpaceship() {
        var rect = spaceship.getBoundingClientRect();
        var spaceshipX = rect.left + (rect.right - rect.left) / 2;
        var spaceshipY = rect.top + (rect.bottom - rect.top) / 2;
        var deltaX = mouseX - spaceshipX;
        var deltaY = mouseY - spaceshipY;
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance > 1) {
            var moveX = spaceshipSpeed * (deltaX / distance);
            var moveY = spaceshipSpeed * (deltaY / distance);

            spaceship.style.left = (spaceship.offsetLeft + moveX) + 'px';
            spaceship.style.top = (spaceship.offsetTop + moveY) + 'px';
        }

        requestAnimationFrame(moveSpaceship);
    }

    requestAnimationFrame(moveSpaceship);
});