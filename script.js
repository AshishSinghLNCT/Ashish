// Countdown Timer
const countdown = document.getElementById('countdown');
const eventDate = new Date('May 30, 2024 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "Event Started!";
    }
}

const interval = setInterval(updateCountdown, 1000);

// Accordion
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Tabs
function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.className = button.className.replace(' active', ''));

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
}

// Form Validation
const form = document.getElementById('registrationForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Registration Successful!');
});

