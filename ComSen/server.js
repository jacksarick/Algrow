var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/javascript', 'Access-Control-Allow-Origin': '*'});
  res.end(JSON.stringify({ "temp": 41.40 }));
}).listen(3000);
