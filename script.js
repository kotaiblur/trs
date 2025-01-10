document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('actionButton');
    const message = document.getElementById('message');
    const widgetLink = document.getElementById('widgetLink');

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        // Use the retrieved data as needed
        // e.g., update the UI based on userData
    }

    widgetLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action

        // Save user data to localStorage or sessionStorage
        const userData = { key: 'value' }; // Replace with actual user data
        localStorage.setItem('userData', JSON.stringify(userData));

        // Open the link in a new tab
        const newTab = window.open(widgetLink.href, '_blank');

        // Close the original tab
        window.close();
    });

    button.addEventListener('click', () => {
        message.textContent = "You clicked the button!";
    });
});