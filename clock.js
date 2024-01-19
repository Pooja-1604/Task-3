function updateClock() {
    // Get the current time
    const now = new Date();

    // Extract hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time to have leading zeros if needed
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the time in the clock element
    const clockElement = document.getElementById("clock");
    clockElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
