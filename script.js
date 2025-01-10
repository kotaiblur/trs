document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const message = document.getElementById('message');
  
    button.addEventListener('click', () => {
      message.textContent = "You clicked the button!";
    });
  });