// Get the modal, open button, and close button
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';  // Show the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';  // Hide the modal
}

// Event listener for opening the modal
openBtn.addEventListener('click', openModal);

// Event listener for closing the modal
closeBtn.addEventListener('click', closeModal);

// Optional: Close modal if the user clicks outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
