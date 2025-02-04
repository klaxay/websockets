import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket)=>{
    console.log("user connected");
    socket.on("message", (message)=>{
        console.log("message received: ", message);
        if(message.toString() === "ping"){
            socket.send("pong");
        }
    })
    
})