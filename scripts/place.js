// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Footer - Current Year and Last Modified Date
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    lastModifiedSpan.textContent = lastModifiedDate;

    // Weather - Calculate Wind Chill
    const temp = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);
    const windChillSpan = document.getElementById('windChill');

    function calculateWindChill(temp, speed) {
        // Wind Chill formula in Fahrenheit
        return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    }

    function displayWindChill(temp, speed) {
        // Check conditions for Wind Chill
        if (temp <= 50 && speed > 3) {
            const windChill = calculateWindChill(temp, speed).toFixed(1);
            windChillSpan.textContent = `${windChill}°F`;
        } else {
            windChillSpan.textContent = "N/A";
        }
    }

    displayWindChill(temp, windSpeed);
});
