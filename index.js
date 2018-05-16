const fs = require('fs');
const watch = require('node-watch');
const PORT = process.env.PORT || 5000;
const DIR = process.env.DIR || '/';
const http = require('http');

watch(DIR, { recursive: true }, function(event, name) {
    console.log('%s changed.', name);
});

/* booting on a port */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(PORT);