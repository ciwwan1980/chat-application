const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);

console.log("SERVER IS RUNNING")

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//connection to socket
io.sockets.on('connection', function(socket){
	console.log('Socket Connected...');

	// Send Message
	socket.on('send message', function(data){
		io.sockets.emit('new message', {msg: data, user:socket.username});
	});
   
})