const express = require('express');
const app = express();
const port = 3000;

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Error handling middleware for invalid input
function errorHandler(err, req, res, next) {
  res.status(400).json({ error: err.message });
}

// Route to handle the temperature conversion
app.get('/convert', (req, res, next) => {
  const celsius = parseFloat(req.query.celsius);

  if (isNaN(celsius)) {
    return next(new Error('Invalid input for Celsius temperature'));
  }

  const fahrenheit = celsiusToFahrenheit(celsius);
  let feedback = '';

  if (fahrenheit <= 32) {
    feedback = 'Freezing';
  } else if (fahrenheit <= 50) {
    feedback = 'Cool';
  } else if (fahrenheit <= 70) {
    feedback = 'Warm';
  } else {
    feedback = 'Hot';
  }

  res.json({
    celsius: celsius,
    fahrenheit: fahrenheit,
    feedback: feedback
  });
});

// Use error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
