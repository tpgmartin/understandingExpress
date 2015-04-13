var http = require('http');
var logger = require('morgan');
var express = require('express');

var app = express();

app.use(logger());

app.use(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello world\n");
});

http.createServer(app).listen(3000);