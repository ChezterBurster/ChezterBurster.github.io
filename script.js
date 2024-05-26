let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active')
            })
        }
    })
}

document.getElementById('copy-email').addEventListener('click', function (event){
    event.preventDefault();
    const email = 'contact@kevinriverah.dev';
    const tooltipText = document.getElementById('tooltip-text');
    navigator.clipboard.writeText(email).then(() => {
        tooltipText.textContent = 'Email Copied!';
        showTooltip(tooltipText);
        setTimeout(() => { hideTooltip(tooltipText); }, 2000);
    }).catch(err => {
        tooltipText.textContent = 'Failed to Copy';
        showTooltip(tooltipText);
        setTimeout(() => { hideTooltip(tooltipText); }, 2000);
    })
})

function showTooltip(tooltip) {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;
}

function hideTooltip(tooltip) {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
    tooltip.textContent = 'Copy Email to Clipboard'; // Reset tooltip text
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}