var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../config/database').db;

var UserSchema = new Schema({
        name: {
            first: String,
            last: String
        },
        login: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: Number,
            required: true
        }
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

UserSchema.virtual('full_name').get(function () {
    return this.name.first + ' ' + this.name.last;
});

UserSchema.virtual('full_name').set(function (name) {
    var split = name.split(' ');
    this.name.first = split[0];
    this.name.last = split[1];
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (pass, cb) {
    bcrypt.compare(pass, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

UserSchema.methods.getRole = function () {
    var role = {};
    switch (this.role) {
        case 1:
            role.is_admin = true;
            break;
        case 2:
            role.is_chief = true;
            break;
        case 3:
            role.is_manager = true;
            break;
    }
    return role;
};

var UserModel = db.model('User', UserSchema);
module.exports.UserModel = UserModel;