// Importing the built-in 'http' module
const http = require('http');

// Creating a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("Array elements are: ");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arr.length; i++) {
    res.write(`${arr[i]} `); // Writing array elements to the response
  }
  res.write("\nSquares of each array element:");
  for (let i = 0; i < arr.length; i++) {
    res.write(`${arr[i]**2} `); // Writing squrea of each array element to the response
  }
  res.end(); // End the response after writing the array elements
});

// Listening on port 7070
const port = 7070;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
