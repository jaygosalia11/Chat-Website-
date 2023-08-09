//what is web socket?
//it is the two way connection means when server has update send to client and when the client has update send to server
// ws= web socket
// wss= web socket secure
// socket.io is the js library for building real time web application(chat app,videoapplication)
// event=anything which is happening is called event
// we will establish the connection between the client and server using the websocket
//why we use websocket? because suppose i want to join the chat app then i will tell the socket io server that i want to make connection with you
// then the server will tell the all group people that harry has joined the chat app.
// why we cannot use ajax here??because if we storesome data in database then the server will read from database and then
// i will read from the database and the time will be more provides inefficiency.therefore we use websocket and create the two way
// connection means as soon as the update comes.immediately we will get response from server
// we will be having two phase such as client side and then server side
// after finishing client side like html,css styling
// do the server side. for that we will create nodeserver folder,and after that click on nodeserver folder and click on Terminal placed at top and select new terminal and type   cd .\nodeserver\    after that type npm init and write details
// and after that install npm i socket.io
// io.on======== will listen to the multiple connectionslikejay,jash,harry1,jggj2,gfds5,gfd6... 
//socket.on======== will listen to the particular connection.it also says that ki if this event got then run the code inside the arrow function
// of curly braces
// defer means that our script runs in the background and when the  dom gets ready then script get ready it get runs