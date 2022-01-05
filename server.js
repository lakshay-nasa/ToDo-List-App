const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {

  if (req.url === '/') {
    fs.createReadStream('index.html').pipe(res);
    return;
  }

  if (req.url === '/main.js') {
    fs.createReadStream('main.js').pipe(res);
    return;
  }
  
}).listen(8000);

console.log(`Listening on port ${8000}.`)