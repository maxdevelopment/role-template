var socket = require('socket.io');
var io = null;

exports.io = function () {
  return io;
};

exports.initialize = function(server) {
  io = socket(server);
  io.on('connection', function(socket) {
    console.log('socket connection: ' + socket.id);

    socket.on('disconnect', function(){
      console.log('disconnected: ' + socket.id);
    });
  });
};
