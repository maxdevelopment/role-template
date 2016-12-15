var UserModel = require('../models/Users').UserModel;

exports.index = function (req, res) {
    UserModel.find({}, 'login name full_name').exec()
        .catch(function (err) {
            if (err) throw err;
        })
        .then(function (users) {
            return res.json({success: true, msg: users});
        });
};

exports.create = function (req, res) {
    if (!req.body.login || !req.body.password || !req.body.role) {
        return res.json({success: false, msg: 'Please pass login, password and role.'});
    } else {

        var newUser = new UserModel({
            full_name: req.body.full_name,
            login: req.body.login,
            password: req.body.password,
            role: req.body.role
        });

        newUser.save()
            .catch(function (err) {
                res.json({success: false, msg: 'Login not unique.'});
            })
            .then(function () {
                res.json({success: true, msg: 'Successful created new user.'});
            });
    }
};
