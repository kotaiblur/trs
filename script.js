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
    // Capture all link clicks
    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Prevent default navigation

            const currentPageUrl = window.location.href; // Current page URL
            const clickedUrl = event.target.href; // Clicked link URL
            const historyUrls = [currentPageUrl]; // Array to store history URLs

            // Open the link in a new tab with dynamic history
            openWithBackHistory(clickedUrl, historyUrls);
        }
    });
});