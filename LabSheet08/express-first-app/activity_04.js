const express = require('express');
const app = express();


// Predefined username and password
const validUsername = 'user';
const validPassword = 'password';

// Route to handle authentication
app.get('/authenticate', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username === validUsername && password === validPassword) {
    res.send('Welcome, ' + username + '!');
  } else {
    res.send('Authentication failed. Please check your username and password.');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
