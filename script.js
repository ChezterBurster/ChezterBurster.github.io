function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`.menu button[onclick="showSection('${sectionId}')"]`);
    activeButton.classList.add('active');
}

// Initialize the home section as active
showSection('home');

// JavaScript to draw and animate the circuit
function drawCircuit(button) {
    // Get the position of the button and central text
    const buttonRect = button.getBoundingClientRect();
    const textRect = document.getElementById('centralText').getBoundingClientRect();

    // Calculate start and end points for the circuit
    const startX = buttonRect.left + (buttonRect.width / 2);
    const startY = buttonRect.top + (buttonRect.height / 2);
    const endX = textRect.left + (textRect.width / 2);
    const endY = textRect.top + (textRect.height / 2);

    // Create the path for the SVG
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'path');
    path.setAttribute('d', `M${startX},${startY} L${endX},${startY} L${endX},${endY}`);
    const svg = document.getElementById('circuit');
    svg.innerHTML = ''; // Clear previous path
    svg.appendChild(path);

    // Trigger the drawing animation
    setTimeout(() => {
        path.classList.add('drawn');
    }, 10);
}

// Add the click event to buttons
document.querySelectorAll('.menu button').forEach(button => {
    button.addEventListener('click', function () {
        drawCircuit(button);
    });
});