var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/static'));
app.listen(port);
console.log('App listenting on port '+port);