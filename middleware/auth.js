var auth = require("../config/auth.js")();
var express = require('express');
var authRoutes = express.Router();

authRoutes.use(auth.authenticate(), function(req, res, next) {
    var role = req.user.getRole();
    if (role.is_chief || role.is_manager) {
        next();
    } else {
        return res.status(403).send({
            success: false,
            message: 'Access denied.'
        });
    }
});
module.exports = authRoutes;