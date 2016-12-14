var UserModel = require('../models/Users').UserModel;

exports.create = function (req, res) {

    UserModel.findOne({login: 'admin'}).exec()
        .catch(function (err) {
            return res.send('<b>error: </b>' + err.message);
        })
        .then(function (user) {
            if (user) {
                return res.send('setup completed');
            } else {
                var newUser = new UserModel({
                    full_name: 'God mode',
                    login: 'admin',
                    password: 'a111111',
                    role: 1
                });

                newUser.save()
                    .catch(function (err) {
                        return res.send('<b>error: </b>' + err.message);
                    })
                    .then(function () {
                        return res.send('setup completed');
                    });
            }
        })
};
