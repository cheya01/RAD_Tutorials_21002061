const fs = require('fs');

// Read the content of the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    // Parse the JSON data into an object
    const jsonData = JSON.parse(data);

    // Access the "name" and "age" properties and display their values
    console.log('Name:', jsonData.name);
    console.log('Age:', jsonData.age);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
