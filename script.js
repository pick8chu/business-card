const businessCard = document.querySelector('.business-card');
let isDragging = false; // Flag to track dragging state

businessCard.addEventListener('mousedown', (event) => {
  isDragging = false; // Initialize dragging flag

  // Add event listeners for mousemove and mouseup
  document.addEventListener('mousemove', handleMouseMove);
});

// Handle mousemove event
function handleMouseMove(event) {
  // Calculate the distance moved during dragging
  const threshold = 5; // Adjust this threshold as needed
  const deltaX = Math.abs(event.movementX);
  const deltaY = Math.abs(event.movementY);

  // If the movement surpasses the threshold, consider it a drag
  if (deltaX > threshold || deltaY > threshold) {
    isDragging = true;
  }
}


document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('mousedown', (event) => {
    event.stopPropagation();
  });
});

businessCard.addEventListener('mouseup', (event) => {
  if (isDragging) {
    event.preventDefault(); // Prevent the click event during dragging
  } else {
    businessCard.classList.toggle('clicked');
  }
});
