var UserModel = require('../models/Users').UserModel;

exports.index = function (req, res) {
    res.send('users');
};

exports.create = function (req, res) {
    if (!req.body.name || !req.body.password || !req.body.role) {
        res.json({success: false, msg: 'Please pass name, password and role.'});
    } else {

        var newUser = new UserModel({
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        });

        newUser.save(function (err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
};
