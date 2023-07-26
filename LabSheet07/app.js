//importing the built-in 'http' module
const http = require('http')

//creating a simple HTTP server
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});

//listining on port 9090
const port =9090;
server.listen(port, ()=>{
    console.log('Server is running on http://localhost:${port}');
})