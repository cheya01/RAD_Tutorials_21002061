const http = require('http');
const url = require('url');

function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const number = parseFloat(queryObject.num);

  if (isNaN(number)) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('Invalid input. Please provide a valid number.');
  } else {
    const fac = factorial(number);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`The factorial of ${number} is: ${fac}`);
  }
});

// Listening on port 4040
const port = 4040;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
