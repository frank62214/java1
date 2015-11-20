var http = require("http");
var fs = require("fs");

var request = require("request");

http.createServer(function (req,res){
    var content ='';
    
   // fs.readFile("./demo.html", function (err, file){
  //        content += file;
  //res.end(content);
  //   });
        request('http://1-dot-first-1097.appspot.com/', function (rror, response, body){
           content +=body;
           res.end(content);
        });
        
    
   
    
    //console.log('hello');
}).listen(5000);