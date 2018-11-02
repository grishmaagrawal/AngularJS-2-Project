var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
console.log(rootPath + 'app')
app.use(express.static(rootPath + 'app'));
app.listen(8000);
console.log(' Listening on the port 8000...');