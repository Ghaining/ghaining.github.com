var express = require('express')
var path = require('path')
var http = require('http');
var app = express()
var port = 80
app.use(express.static(path.join(__dirname, '/')))
app.set('port', port);
var server = http.createServer(app)
server.listen(port)
