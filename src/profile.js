function fetchUserDetails() {
    // Make a fetch request to get user details
    fetch('/userDetails')
        .then(response => response.json())
        .then(data => {
            // Update profile picture and name
            document.getElementById('profile-pic').src = data.profilePic;
            document.getElementById('user-name').textContent = data.name;
        })
        .catch(error => console.error('Error fetching user details:', error));
}

// Update message time every second
function updateMessageTime() {
    const messageTimeElement = document.getElementById('message-time');
    setInterval(() => {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        messageTimeElement.textContent = timeString;
    }, 1000);
}
// Assuming profilePicUrl contains the URL of the user's profile picture
const profilePicUrl = "path_to_user_profile_pic.jpg";
const profilePicElement = document.getElementById('profile-pic');
profilePicElement.src = profilePicUrl;

// Call the functions to fetch user details and update message time
fetchUserDetails();
updateMessageTime();