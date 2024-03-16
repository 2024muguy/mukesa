/* JS file for membership section */
const chatBox = document.querySelector(".chat-box"); // Selects the chat box div element
const commentForm = document.querySelector(".comment-form"); // Selects the comment form element
const textArea = document.querySelector("textarea"); // Selects the text area element
const submitBtn = document.querySelector(".submit-btn"); // Selects the submit button element

// Function that retrieves the current time and formats it
function getTime() {
	const date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let ampm = "AM";

	// Format hour to 12-hour format
	if (hour === 0) {
		hour = 12;
	} else if (hour > 12) {
		hour = hour - 12;
		ampm = "PM";
	}

	// Format minute to have 2 digits
	if (minute < 10) {
		minute = "0" + minute;
	}

	// Return the formatted time as a string
	return hour + ":" + minute + " " + ampm;
}

// Function that creates and adds a new chat to the chat box
function addChat() {
	// Get the text from the text area
	const message = textArea.value;

	// Create a new chat div
	const chat = document.createElement("div");
	chat.classList.add("chat");

	// Create paragraph elements for the name, message, time, and email
	const name = document.createElement("p");
	name.textContent = " ";
	name.classList.add("name");

	const chatMessage = document.createElement("p");
	chatMessage.textContent = message;
	chatMessage.classList.add("message");

	const time = document.createElement("p");
	time.textContent = getTime();
	time.classList.add("time");

	const email = document.createElement("p");
	email.textContent = " ";
	email.classList.add("email");

	// Append the paragraph elements to the chat div
	chat.appendChild(name);
	chat.appendChild(chatMessage);
	chat.appendChild(time);
	chat.appendChild(email);

	// Add chat div to the chat box
	chatBox.appendChild(chat);

	// Reset the text area
	textArea.value = "";

	// Scroll to the bottom of the chat box
	chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to sanitize the input and prevent cross site scripting (XSS)
function sanitizeInput(input) {
	// Create a new element
	const temp = document.createElement("div");
	// Set the input as the inner content of the element
	temp.textContent = input;
	// Return the sanitized input
	return temp.innerHTML;
}

// Event listener for when the submit button is clicked
submitBtn.addEventListener("click", function(e) {
	// Prevent the default action (refreshing the page)
	e.preventDefault();
	// Get the sanitized input from the text area
	const sanitizedInput = sanitizeInput(textArea.value);
	// Call the addChat function with the sanitized input
	addChat(sanitizedInput);
});

// Event listener for when the enter key is pressed
textArea.addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		// Get the sanitized input from the text area
		const sanitizedInput = sanitizeInput(textArea.value);
		// Call the addChat function with the sanitized input
		addChat(sanitizedInput);
	}
});