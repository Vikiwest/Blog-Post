function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');

  // Toggle the theme class on the body
  body.classList.toggle('dark-theme');
  
  // Save the current theme 
  const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);

  // Change the icon color based on the theme
  if (theme === 'dark') {
      icon.classList.replace('fa-sun', 'fa-moon'); 
  } else {
      icon.classList.replace('fa-moon', 'fa-sun'); 
  }
}

// Apply the saved theme and icon on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.getElementById('themeIcon');

  if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      icon.classList.replace('fa-sun', 'fa-moon'); 
  } else {
      document.body.classList.remove('dark-theme');
      icon.classList.replace('fa-moon', 'fa-sun'); 
  }
}

document.addEventListener('DOMContentLoaded', applySavedTheme);






// Display loading screen on page load
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 1200); // Loading 1.2 seconds
});











