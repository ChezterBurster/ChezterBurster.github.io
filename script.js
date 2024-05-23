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