// Importing the built-in 'http' module
const http = require('http');

// Creating a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Print the array
  res.write("Array elements are: ");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  res.write(arr.join(' '));

  // Find the largest element in the array
  const largestElement = Math.max(...arr);
  res.write("\nLargest element is: ");
  res.write(`${largestElement}`);

  res.end(); // End the response after writing the array elements and the largest element
});

// Listening on port 2020
const port = 7070;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
