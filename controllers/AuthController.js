var UserModel = require('../models/Users').UserModel;
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
