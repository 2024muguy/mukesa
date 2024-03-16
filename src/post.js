document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitComment');

    submitButton.addEventListener('click', async () => {
        const commentContent = document.getElementById('commentContent').value;

        // Check if the user is logged in
        const response = await fetch('/checkLoggedIn');
        const isLoggedIn = await response.json();

        if (isLoggedIn) {
            // User is logged in, make the POST request to post the comment
            try {
                const response = await fetch('/postComment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ comment: commentContent })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data.message); // Log success message
                } else {
                    console.error('Failed to post comment');
                }
            } catch (error) {
                console.error('Error posting comment:', error.message);
            }
        } else {
            // User is not logged in, redirect to the login route
            window.location.href = '/login';
        }
    });
});
