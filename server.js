var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', function(req,res) {
	res.sendFile(path.resolve(__dirname, 'build','index.html'));
})

app.listen(process.env.PORT||3000, function() {
	console.log("server is listening on port 3000");
})