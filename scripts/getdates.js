// Get the current year and populate the span
document.getElementById('2024').textContent = new Date().getFullYear();

// Get the last modified date and populate the paragraph
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;