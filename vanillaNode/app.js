var http = require('http');

// Build server
var app = http.createServer(function (request, response) {

  var answer = "";
  answer += "Request URL: " + request.url + "\n";
  answer += "Request type: " + request.method + "\n";
  answer += "Request headers: " + JSON.stringify(request.headers) + "\n";

  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.end(answer);
});

// Start server
// app.listen(3000, "localhost");
// console.log("Server running at http://localhost:3000/");

// // Hello world example
// var http = require("http");

// var app = http.createServer(function(request, response) {
//   response.writeHead(200, {
//     "Content-Type": "text/plain"
//   });
//   response.end("Hello world!\n");
// });

// app.listen(1337, "localhost");
// console.log("Server running at http://localhost:1337/");