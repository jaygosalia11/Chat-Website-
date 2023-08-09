const { Socket } = require('socket.io');
//const io=require('socket.io')(8000)
const socket=io('http://localhost:8000');
// get dom element in respective js variable
const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageinp');
const messageContainer=document.querySelector(".container")
// audio that will play on receiving mesages
var audio=new Audio('ting.mp3');
// function which will append event info to the container
const append=(message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add('position');
    messageContainer.append(messageElement);
    if(position=='left'){
        audio.play();
    }


}
// if the form is submitted send server the message
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const message=messageInput.value;
    append(`YOU: ${message}`,'right');
    socket.emit('send',message);
    messageInput.value=''
})

















// ask new user for his.her name and let the server knows
const name=prompt("enter your name");
socket.emit('new-user-joined',name);//when this statement get executed immediately it goes to index.js file and search for that name and execute that function
// if a new user joined,receive his,her name from the server
socket.on('user joined',name=>{
append(`${name} joined the chat`,'right')
})
// if server send the message receive it
socket.on('receive',data=>{
    append(`${data.name}:${data.message}`,'left')
})
// if user leaves the chat append the info to the container
socket.on('left',name=>{
    append(`${name} left the chat`,'right')
})










