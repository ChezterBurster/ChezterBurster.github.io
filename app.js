function highlightSection(sectionId) {
    removeHighlight();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    document.querySelector(`button[onclick="highlightSection('${sectionId}')"]`).classList.add('active');
}

function removeHighlight() {
    document.querySelectorAll('.menu button').forEach(button => {
        button.classList.remove('active');
    });
}

// Additional scripting will be required to draw the rectangle and handle the HDR-like shine effect.