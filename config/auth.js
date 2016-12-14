var passport = require("passport");
var passportJWT = require("passport-jwt");
var cfg = require("./jwt.js");
var User = require('./../models/Users').UserModel;
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromHeader(cfg.jwtExtractHeader)
};

module.exports = function () {
    var strategy = new Strategy(params, function (payload, done) {
        User.findOne({id: payload.id}).exec()
            .catch(function (err) {
                if (err) throw err;
            })
            .then(function (user) {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
    });
    passport.use(strategy);
    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};
