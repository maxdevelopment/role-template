var OnlineUsers = require('../models/OnlineUsers');
var socket = require('socket.io');
var auth_controller = require('../controllers/AuthController');
var worksheet_controller = require('../controllers/WorksheetController');

exports.initialize = function (server) {
  var io = socket(server);

  // var user_token = io
  //   .of('/user_token')
  //   .on('connection', function (socket) {
  //     auth_controller.events(user_token,socket);
  //
  //     socket.on('disconnect', function () {
  //       console.log('disconnected: ' + socket.id);
  //     });
  //   });

  io.on('connection', function (socket) {
    auth_controller.auth(socket);
    worksheet_controller.worksheets(socket);

    socket.on('disconnect', function () {
      console.log('disconnected: ' + socket.id);
      OnlineUsers.remove(socket.id);
    });
  });
};
