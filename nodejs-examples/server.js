const colors = require("colors");
/*const http = require("http");
const handlerServer = function (req, res){

    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('<h1>Hola nodejs 123</h1>');
    res.end();

}

const server = http.createServer(handlerServer);

server.listen(3000, function(){

    console.log("Server on port 3000".yellow);

});
*/

const express = require("express");

const server = express();

server.get("/", (req,res) => {

    res.send("<h1>Hola express y node</h1>");
    res.end();

});

server.listen(3000, () => {
    console.log("Server on port 3000".red)
});