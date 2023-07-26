const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const inputString = queryObject.str || '';

  // Function to reverse the input string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  const reversedString = reverseString(inputString);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`Original String: ${inputString}\nReversed String: ${reversedString}`);
});

// Listening on port 6060
const port = 6060;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
