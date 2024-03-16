// File: sendResetLink.js

function sendResetLink() {
    const email = document.getElementById('emailInput').value;
    fetch('/forgotPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = data.message;
    })
    .catch(error => {
        console.error('Error sending reset link:', error.message);
        document.getElementById('responseMessage').innerText = 'Error sending reset link.';
    });
}
