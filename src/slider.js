// // JavaScript to handle the slider mechanism
// let currentIndex = 0;
// const events = document.querySelector('.event-slider');
// const eventItems = document.querySelectorAll('.event-slider .event');

// function nextEvent() {
//     // Move the current event to the left
//     eventItems[currentIndex].style.transform = 'translateX(-100%)';
    
//     // Update the currentIndex to the next event
//     currentIndex = (currentIndex + 1) % eventItems.length;
    
//     // Move the next event to the center
//     eventItems[currentIndex].style.transform = 'translateX(0)';
// }

// // Set initial event positions
// eventItems.forEach((event, index) => {
//     event.style.transform = `translateX(${index === 0 ? 0 : '100%'})`;
// });

// setInterval(nextEvent, 5000); // Change event every 5 seconds

// // Function to handle registration
// function registerNow() {
//     // Redirect to the registration page or perform other actions
//     alert('Redirecting to registration page...');
// }

// // Function to read engineering articles
// function readArticles() {
//     // Redirect to the engineering articles page (e.g., IEEE website)
//     window.open('https://ieeexplore.ieee.org/');
// }

// // Function to explore engineering technologies
// function exploreTechnologies() {
//     // Redirect to the engineering technologies page (e.g., IEEE website)
//     window.open('https://ieeexplore.ieee.org/');
// }


// JavaScript to handle the slider mechanism
let currentIndex = 0;
const events = document.querySelectorAll('.event-slider .event');

function nextEvent() {
    events[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % events.length;
    events[currentIndex].style.transform = 'translateX(0)';
}

// Ensure the document is loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    setInterval(nextEvent, 3000); // Change event every 5 seconds
});

// Function to handle registration
function registerNow() {
    // Redirect to the registration page or perform other actions
    alert('Redirecting to registration page...');
}

// Function to read engineering articles
function readArticles() {
    // Redirect to the engineering articles page (e.g., IEEE website)
    window.open('https://ieeexplore.ieee.org/');
}

// Function to explore engineering technologies
function exploreTechnologies() {
    // Redirect to the engineering technologies page (e.g., IEEE website)
    window.open('https://ieeexplore.ieee.org/');
}

