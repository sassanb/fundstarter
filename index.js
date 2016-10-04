// Part 1
/* http = require('http');
var fs = require('fs');
var filename = 'public/index.html';

console.log("App is running on localhost:8080");
     
http.createServer(function(req,response){
    var buff = fs.readFileSync('index.html', "utf8")
    response.writeHead(200, {"Content-type":"text/html"})
    response.write(buff)
    response.end()
}).listen(8080);
*/

//var http = require('http'),
//     fs = require('fs');

/*
     fs.readFile('./public/index.html', function (err, html) {
    if (err) {
        throw err; 
    }            console.log("App is running on localhost:8080");
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
       response.write(html);  
        response.end();  
    }).listen(8080);
 });
*/

// part2 buffer 

var http = require('http');
var fs = require('fs');

var p = './public/index.html';
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.open('./public/index.html', 'r', function(err, fd){
    fs.fstat(fd, function(err, stats) {
      var Size = 512,
      sizeofBuffer = stats.size,
      buffer = new Buffer(sizeofBuffer ),
      startBytes = 0;
      while(startBytes < sizeofBuffer) {
		    if((startBytes  + Size) > sizeofBuffer) {
			  Size = (sizeofBuffer- startBytes);
		    }
		    fs.read(fd, buffer, startBytes , Size, startBytes );
		    startBytes  += Size;
		}
    response.end(buffer.toString('utf8', 0,sizeofBuffer));
    fs.close(fd);
  }); // for fs.fstat

  }); // for fs.open

}).listen(8080);

console.log("App is running on localhost:8080");


