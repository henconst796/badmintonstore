// Racket Specs

const detailBtn = document.getElementById('view-details');
const detailText = document.getElementById('details-text');

detailBtn.addEventListener('click', () => {
    if (detailText.style.display === 'none') {
        detailText.style.display = 'block';
        detailBtn.textContent = 'Hide Specs';
    } else {
        detailText.style.display = 'none';
        detailBtn.textContent = 'View Specs';
    }
});


// User Input Validation

const regForm = document.querySelector('form[action="userdb.php"]');

if (regForm) {
    regForm.addEventListener('submit', (e) => {
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;

        let errors = [];

        if (password.length < 8) {
            errors.push("Password must be at least 8 characters long.");
        }
        if (username.includes(" ")) {
            errors.push("Username cannot contain spaces.");
        }
        if (email.trim() === "") {
            errors.push("Email is required.");
        }
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });
}


// Animation

window.addEventListener('load', () => {
    const pulsing = document.querySelector('.pulse-element');
    if (pulsing) {
        pulsing.style.animationPlayState = 'running';
    }
});