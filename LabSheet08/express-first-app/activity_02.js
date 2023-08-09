const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head><title>User Registration</title></head>
    <body>
      <h1>User Registration Form</h1>
      <form action="/register" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Register</button>
      </form>
    </body>
    </html>
  `);
});

// Handle form submission
app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.send(`
    <html>
    <head><title>Registration Successful</title></head>
    <body>
      <h1>Registration Successful</h1>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
    </body>
    </html>
  `);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
