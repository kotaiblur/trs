// Function to open a new tab with back button functionality
function openWithBackHistory(targetUrl, historyUrls) {
    const newWindow = window.open(); // Open a new tab or window

    if (newWindow) {
        // Wait for the new window to fully initialize
        newWindow.onload = () => {
            // Add history states dynamically
            historyUrls.forEach(url => {
                newWindow.history.pushState({}, '', url);
            });

            // Finally, navigate to the target URL
            newWindow.location.href = targetUrl;
        };
    } else {
        alert("Popup blocked! Please allow popups for this site.");
    }
}

// Add event listener for link clicks
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const message = document.getElementById('message');

    // Array to store clicked URLs
    const clickedUrls = [];

    // Capture all link clicks (if you have links)
    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Prevent default navigation

            const clickedUrl = event.target.href;
            clickedUrls.push(clickedUrl); // Add the clicked URL to the array

            // Display the clicked URLs for debugging
            console.log("Clicked URLs:", clickedUrls);
        }
    });

    button.addEventListener('click', () => {
        message.textContent = "You clicked the button!";

        // Example target URL (replace this with your logic)
        const targetUrl = clickedUrls[clickedUrls.length - 1] || "https://example.com";

        // Open a new tab with dynamic history
        openWithBackHistory(targetUrl, clickedUrls);
    });
});