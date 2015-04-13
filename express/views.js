var http = require('http');
var express = require('express');
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index', { 'title': 'blah', 'message': 'hello there' });
});

http.createServer(app).listen(3000)