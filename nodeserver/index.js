const { Socket } = require('socket.io');

const io=require('socket.io')(8000)
const users={};
app.use(cors(
{
    origin: ["https://chat-website-zeta.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}
));
io.on('connection',Socket=>{
// if any new user joins let other user connected to the server knows
    Socket.on('new-user-joined',name=>{
        console.log("new user",name);
        user[socket.id]=name;
        Socket.broadcast.emit('user joined',name);
    });
   // if someone sends the message broadcast it to other people
        Socket.on('send',message=>{
           Socket.broadcast.emit('receive',{message:message,name:users[Socket.id]})
         });

//if someoneleaves let all other knows
socket.on('disconnect',message=>{
    socket.broadcast.emit('left',users[Socket.id]);
    delete users[Socket.id];
})


    

})