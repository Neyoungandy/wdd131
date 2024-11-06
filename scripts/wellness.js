function showAlert() {
    console.log("Button clicked!");
    alert("Welcome to FitPro Wellness! Let's get started on your wellness journey.");
}

// Code to automatically update the footer with the current year
function updateFooterYear() {
    const yearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Code to display the last modified date
function displayLastModified() {
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last updated: ${lastModifiedDate}`;
}

// Call the functions on page load
window.onload = () => {
    updateFooterYear();
    displayLastModified();
};
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert("Please fill out all required fields.");
        e.preventDefault();
    } else {
        // Form is valid, redirect to a success page
        window.location.href = '/thank-you.html'; 
    }
});
