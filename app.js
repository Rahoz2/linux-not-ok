const http= require('http');

http.createServer(function(req,res){
res.write('On the way to being a full stack engineer');
res.end();
}).listen(3000);

console.log("We're listining to you through port 3000");



