'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

/////// Agrego la parte del chat
var messages = [{
  text: 'Bienvenido al Chat Privado',
  nickname: 'Server'
}];
///////////////////////////////////


io.on('connection', (socket) => {
  console.log('Client ' + socket.handshake.address + ' connected');
  socket.emit('messages',messages);
  socket.on('disconnect', () => console.log('Client disconnected'));

  socket.on('add-message', function(data){  // Recibo un mensaje del cliente
    console.log("Recibido: ", data.text);
    messages.push(data);                    // Y lo agrego al array
    io.emit('messages',messages);   // Envio los mensajes a todos los clientes
  });

});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

