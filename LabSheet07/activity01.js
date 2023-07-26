const http = require('http');
const url = require('url');

function addNumbers(num1, num2) {
  return num1 + num2;
}

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const number1 = parseFloat(queryObject.num1);
  const number2 = parseFloat(queryObject.num2);

  if (isNaN(number1) || isNaN(number2)) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end('Invalid input. Please provide valid numbers.');
  } else {
    const sum = addNumbers(number1, number2);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`The sum of ${number1} and ${number2} is: ${sum}`);
  }
});

// Listening on port 1010
const port = 1010;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
