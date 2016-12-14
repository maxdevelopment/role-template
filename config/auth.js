var passport = require("passport");
var passportJWT = require("passport-jwt");
var cfg = require("./jwt.js");
var User = require('./../models/Users').UserModel;
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromHeader('x-access-token')
};

module.exports = function() {
    var strategy = new Strategy(params, function(payload, done) {
        User.findOne({id: payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};
