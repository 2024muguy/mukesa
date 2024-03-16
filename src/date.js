function updateDateTime() {
    const currentDateElement = document.querySelector('.current-date .date');
    const currentTimeElement = document.querySelector('.current-date .time');
  
    const currentDate = new Date();
  
    // Format time to AM/PM
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  
    // Format date to display weekday, date, and year
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
  
    // Update time and date in the DOM
    currentDateElement.textContent = formattedDate;
    currentTimeElement.textContent = formattedTime;
  }
  
  // Update date and time initially
  updateDateTime();
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  