// Function to format timestamp
function formatTimestamp(timestamp) {
    // Your formatting logic here (e.g., converting timestamp to a human-readable format)
    return timestamp;
}

// Function to update timestamp dynamically
function updateTimestamp() {
    const messageInfos = document.querySelectorAll('.message-info');
    messageInfos.forEach(info => {
        const timestampElement = info.querySelector('.time');
        const timestamp = timestampElement.dataset.timestamp;
        timestampElement.textContent = formatTimestamp(timestamp);
    });
}

// Call updateTimestamp initially and set interval to update every minute
updateTimestamp();
setInterval(updateTimestamp, 60000); // Update every minute
