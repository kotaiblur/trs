// Function to apply theme-specific variables
function applyTheme() {
    const htmlElement = document.documentElement;
  
    if (htmlElement.classList.contains('theme-dark')) {
      console.log('Dark theme is active');
      // Any additional dark mode logic can go here
    } else if (htmlElement.classList.contains('theme-light')) {
      console.log('Light theme is active');
      // Any additional light mode logic can go here
    }
  }
  
  // Monitor changes to the class attribute
  const observer = new MutationObserver(() => {
    applyTheme(); // Reapply styles when the theme changes
  });
  
  // Observe the `<html>` element for class changes
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
  // Apply the theme initially on page load
  applyTheme();