// Add animation for the page load to move entities from left to right
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.form-container');
    sections.forEach(section => {
      section.style.animation = 'slideIn 2s forwards';
    });
  });
  
  document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        // When the file is loaded, set it as the background image
        document.body.style.backgroundImage = `url(${e.target.result}), linear-gradient(45deg, rgba(255, 87, 51, 0.9), rgba(33, 150, 243, 0.9), rgba(76, 175, 80, 0.9))`;
      };
      reader.readAsDataURL(file); // Convert the file to a data URL
    }
  });
  