// Part 1
var http = require('http');
var fs = require('fs');
var filename = 'public/index.html';

console.log("App is running on localhost:8080");
     
http.createServer(function(req,response){
    var buff = fs.readFileSync('index.html', "utf8")
    response.writeHead(200, {"Content-type":"text/html"})
    response.write(buff)
    response.end()
}).listen(8080);


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


