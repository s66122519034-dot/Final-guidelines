// Get the form and the place where the result will be shown.
const form = document.getElementById('volumeCalculator');
const result = document.getElementById('result');

// Calculate the cylinder's volume when the button is clicked.
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Do not reload the page.

    const radius = parseFloat(document.getElementById('inRadius').value);
    const height = parseFloat(document.getElementById('inHeight').value);
    const unit = document.getElementById('inUnit').value;

    // Check that the radius and height are positive numbers.
    if (!Number.isFinite(radius) || !Number.isFinite(height) || radius <= 0 || height <= 0) {
        result.textContent = 'Please enter a radius and height greater than 0.';
        return;
    }

    // Convert inputs from millimeters to centimeters when needed.
    const radiusCm = unit === 'mm' ? radius / 10 : radius;
    const heightCm = unit === 'mm' ? height / 10 : height;

    // Cylinder volume = PI x radius^2 x height.
    const volume = Math.PI * radiusCm * radiusCm * heightCm;

    // Always display the result in cm³, rounded to two decimal places.
    result.textContent = 'Volume = ' + volume.toFixed(2) + ' cm³';
});
