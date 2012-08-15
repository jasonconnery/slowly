var http = require('http');

var port = process.env.PORT || 5000 ;

http.createServer(function(req, res) {

	console.log("[Slowly.fake START " + req.method + " : " + req.url + " ]");
	setTimeout( function() {
		console.log("[Slowly.fake END " + req.method + " : " + req.url + " ]");
		res.end("Done");
	} , 40000 );
		
}).listen(port);

console.log( "Listening on port " + port );
