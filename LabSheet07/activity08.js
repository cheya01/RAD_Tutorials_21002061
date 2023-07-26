const http = require('http');
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const server = http.createServer((req, res) => {
  // Make the API request
  request(apiUrl, (error, response, body) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('Error fetching data from the API');
    } else {
      // Parse the JSON response
      const data = JSON.parse(body);

      // Generate the HTML content to display the response
      let html = '<h1>API Response</h1>';
      html += '<ul>';
      data.forEach((item) => {
        html += `<li><strong>Title:</strong> ${item.title}</li>`;
        html += `<li><strong>Body:</strong> ${item.body}</li>`;
        html += '<br>';
      });
      html += '</ul>';

      // Send the response with the HTML content
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }
  });
});

// Listening on port 8080
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
