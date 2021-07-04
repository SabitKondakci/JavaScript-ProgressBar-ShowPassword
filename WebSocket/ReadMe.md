### Before Starting Compiling Code on Visual Studio Code!
+ Install Webpack from Packet Manager
+ npm init -y
+ add "type"="module" to package.json

---
#### VSCode JavaScript Debug Terminal
```PowerShell
   // To start debugging
   node index.js
```
#### Chrome Console
```PowerShell
   let websocket = new WebSocket("https://localhost:8080"); // to open a new socket on local machine
   websocket.onmessage = message => console.log(`${message.data}`); // to read the message on chrome console
   
   websocket.Send("Hello To Other Side") // sending messages to the local machine
   websocket.Close(); // to close the connection of local machine
```
