const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 4000;
const path = require("path")

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

server.listen(PORT,()=>{
    console.log("server running on port 4000 in development mode");
})
app.get("/",(req,res)=>{
    res.render("main")
})
io.on('connection',(socket)=>{
    console.log(`a user connected,${socket.id}`);
    socket.on('disconnect',()=>{
        console.log(`a user disconnect,${socket.id}`);
   
    })
})