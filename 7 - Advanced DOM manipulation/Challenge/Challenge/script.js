document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Task: Validate each field here
        // - Check if the name, email, and password are not empty.
        // - Validate the email format.
        // - Check the password length and complexity.
        // - Display messages or indicators for each input's validation.
        if(nameInput.value.trim() === '') {
            formFeedback.textContent = "Please enter your name.";
            formFeedback.style.color = 'red';
            return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(emailInput.value.trim())) {
            formFeedback.textContent = "Invalid email format";
            formFeedback.style.color = 'red';
            return
        }
        if(passwordInput.value.length < 8) {
            formFeedback.textContent = "Password should be at least 8 characters long.";
            formFeedback.style.color = 'red';
            return
        }
        formFeedback.textContent = "Success";
        formFeedback.style.color = 'green';
        

    });
});
