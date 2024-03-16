async function sendPasswordResetLink(email) {
    try {
        const response = await axios.post('/forgotPassword', { email });
        console.log(response.data); // Handle the response from the server
    } catch (error) {
        console.error('Error:', error.response.data.error); // Handle errors
    }
}

// Call the function with the email input value
const email = ''; // Replace with actual email input
sendPasswordResetLink(email);
