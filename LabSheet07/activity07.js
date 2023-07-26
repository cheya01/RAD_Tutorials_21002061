const http = require('http');
const fs = require('fs');
const csvParser = require('csv-parser');

const server = http.createServer((req, res) => {
  // Read the CSV file
  const data = [];
  fs.createReadStream('data.csv')
    .pipe(csvParser())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      // Generate the HTML table
      let table = '<table border="1">';
      table += '<tr>';
      for (const key in data[0]) {
        table += `<th>${key}</th>`;
      }
      table += '</tr>';

      for (const row of data) {
        table += '<tr>';
        for (const key in row) {
          table += `<td>${row[key]}</td>`;
        }
        table += '</tr>';
      }
      table += '</table>';

      // Send the response with the HTML table
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(table);
    });
});

// Listening on port 4040
const port = 7070;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
