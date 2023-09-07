document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (username === 'Arvi' && password === 'Santos') {
            showMessage('Login successful!', 'green');
        } else {
            showMessage('Invalid username or password.', 'red');
        }
    });

    function showMessage(message, color) {
        messageDiv.textContent = message;
        messageDiv.style.color = color;
        messageDiv.style.display = 'block';

        setTimeout(function () {
            messageDiv.style.display = 'none';
        }, 3000); 
    }
});