var express = require('express');
var app = express();

app.use(express.static(__dirname+'/app'));

app.get('/', function(req,res) {
	res.send('Hello world.....');
	res.sendFile('index.html');
});

app.listen(3000, function() {
	console.log("server started on port 3000");
});
