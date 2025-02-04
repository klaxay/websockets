"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("user connected");
    socket.on("message", (message) => {
        console.log("message received: ", message);
        if (message.toString() === "ping") {
            socket.send("pong");
        }
    });
});
