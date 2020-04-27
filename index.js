var express = require('express');
var app = express();

var port = 3000;

app.get("/", function(request, response) {
	response.send("<h1>con cac dit me may</h1>");
})
app.listen(port, function(){
	console.log('server listening on port' + port);
})