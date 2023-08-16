const express = require('express');
const app = express();
const path = require('path');
const requestLogger = require('./requestLoggerMiddleware');

// Use the request logger middleware for all incoming requests
app.use(requestLogger);

// Serve static files from the "images" directory
app.use(express.static(path.join(__dirname, 'images')));

// Define a dynamic route to serve images based on filename parameter
app.get('/image/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(path.join(__dirname, 'images', filename));
});

// Define a route to serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
