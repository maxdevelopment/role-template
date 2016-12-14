var UserModel = require('../models/Users').UserModel;
var jwt = require('jwt-simple');
var jwtConfig = require('../config/jwt');

exports.create = function (req, res) {
    UserModel.findOne({
        name: req.body.name
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                console.log(req.body.password);

                if (isMatch && !err) {
                    var token = jwt.encode(user, jwtConfig.jwtSecret);
                    res.json({success: true, token: token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
};
