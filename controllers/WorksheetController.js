var OnlineUsers = require('../models/OnlineUsers');

exports.worksheets = function (socket) {

  socket.on('worksheets', function (data) {
    console.log('front emit worksheets');
    if(OnlineUsers.search(socket.id)) {
      socket.emit('worksheets', {msg: 'Send worksheets to client with id: ' + socket.id});
    }
  });
};
