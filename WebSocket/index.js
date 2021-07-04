import http from "http";
import socket from "websocket";

var connection = null;

const WebSocketServer = socket.server;
const httpServer = http.createServer(async (req,res)=>{
    console.log("we got a request of web socket");
});

httpServer.listen(8080,()=>{console.log("Listening on port 8080");});

const websocket = new WebSocketServer({
    "httpServer":httpServer
});

websocket.on("request", req=>{
    connection = req.accept(null,req.origin);
    connection.on("message",message=>{console.log(`Message: ${message.utf8Data.toString()}`);});
    connection.on("close",()=>{console.log("Close");});
    connection.on("ping",()=>{console.log("Open");});
    send5sec();
});


function send5sec()
{
    connection.send(`Random Number:${Math.random()*100}`);
    setTimeout(send5sec,5000);
}
