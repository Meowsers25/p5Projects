var express = require('express');
var app = express();
var server = app.listen(3002);

app.use(express.static('public'));

console.log("Server is running");
