var http = require('http');
var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index', { 'title': 'blah', 'message': 'hello there' });
});

app.get('/about', function (request, response) {
  response.end('Welcome to the about page!');
});

app.get('/redirect', function (request, response) {
  response.redirect('/lolz');
});

app.get('/lolz', function (request, response) {
  response.end('In for lolz');
});

app.get('*', function (request, response, next) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
});

app.get('*', function (request, response) {
  response.end('404');
});

http.createServer(app).listen(3000)