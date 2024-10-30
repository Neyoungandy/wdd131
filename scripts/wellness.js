function showAlert() {
    console.log("Button clicked!");
    alert("Welcome to FitPro Wellness! Let's get started on your wellness journey.");
}


// Code to automatically update the footer with the current year
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("2024");
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }

    // Update "last modified" date in the footer
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    }
});
