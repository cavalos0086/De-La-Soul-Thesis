"use strict";
/*jslint node: true */


var express = require('express');
var app = express();

var http = require('http');
var https = require('https');

var router = require('./app/routes.js');


var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Listenning to port', port);

// routes will go here
app.post('/home', function(req, res){
	console.log('post on server.js');
	router.requestHandler('/home', req, res);
});


// *****************************************
exports = module.exports = app;

