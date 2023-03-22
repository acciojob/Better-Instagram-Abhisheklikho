//your code here
// JavaScript for drag and drop functionality

const parent = document.getElementById('parent'); // Get the parent container
const images = document.querySelectorAll('.image'); // Get all the image divs

let dragged; // Keep track of the dragged element

// Add event listeners to each image div to handle drag and drop
images.forEach(image => {
  // When dragging starts
  image.addEventListener('dragstart', (event) => {
    dragged = event.target; // Store the dragged element
    event.dataTransfer.setData('text/plain', null); // Set data transfer to allow drag
  });

  // When the element is being dragged over a valid drop target
  image.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent the default action
  });

  // When the dragged element is dropped on a valid drop target
  image.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent the default action
    const target = event.target; // Get the drop target

    // If the target is not the dragged element and it is a child of the parent container
    if (target !== dragged && parent.contains(target)) {
      // Swap the order of the elements
      parent.insertBefore(dragged, target.nextSibling);
    }
  });
});

