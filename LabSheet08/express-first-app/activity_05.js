const express = require('express');
const app = express();


// Route to handle authentication
app.get('/authenticate', (req, res) => {
  // ... (Authentication logic here)
});

// Error handling middleware for handling 404
app.use((req, res, next) => {
  res.status(404).send('Custom 404 - Page Not Found');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
