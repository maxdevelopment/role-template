var UserModel = require('../models/Users').UserModel;
var OnlineUsers = require('../models/OnlineUsers');
var jwt = require('jwt-simple');
var jwtConfig = require('../config/jwt');

exports.create = function (req, res) {
  UserModel.findOne({login: req.body.login}).exec()
    .catch(function (err) {
      if (err) throw err;
    })
    .then(function (user) {
      if (!user) {
        return res.send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            var token = jwt.encode(user, jwtConfig.jwtSecret);
            return res.json({success: true, token: token});
          } else {
            return res.send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    })
};

exports.auth = function (socket) {
  console.log('AuthController id: ' + socket.id);

  socket.on('user_token', function (data) {
    try {
      var token_decode = jwt.decode(data.token, jwtConfig.jwtSecret);

      if (!token_decode) {
        socket.emit('user_status', {success: false, msg: 'User not found.'});
      } else {
        socket.emit('user_status', {success: true, msg: 'User found.'});
        OnlineUsers.add(socket.id);
        OnlineUsers.list();
      }
    } catch (err) {
      socket.emit('user_status', {success: false, msg: 'Unexpected token.'});
    }
  });
};
