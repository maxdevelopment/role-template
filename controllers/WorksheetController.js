var FromModel = require('../models/Forms').FormModel;
var OnlineUsers = require('../models/OnlineUsers');

exports.worksheets = function (socket) {

  socket.on('worksheets', function (data) {
    if (OnlineUsers.search(socket.id)) {

      FromModel.find({}).exec()
        .catch(function (err) {
          if (err) throw err;
        })
        .then(function (data) {
          socket.emit('worksheets', data);
        })
    }
  });
};
