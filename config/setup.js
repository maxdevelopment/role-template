var UserModel = require('../models/Users').UserModel;

exports.create = function (req, res) {
    var newUser = new UserModel({
        full_name: 'God mode',
        login: 'admin',
        password: 'a111111',
        role: 1
    });

    newUser.save(function (err) {
        if (err) {
            return res.send('<b> setup error: </b>' + err.message);
        }
        return res.send('setup completed');
    });
};
