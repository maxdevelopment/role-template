var auth = require("../config/auth.js")();
var express = require('express');
var adminRoutes = express.Router();

adminRoutes.use(auth.authenticate(), function(req, res, next) {
    var role = req.user.getRole();
    if (role.is_admin) {
        next();
    } else {
        return res.status(403).send({
            success: false,
            message: 'Access denied.'
        });
    }
});
module.exports = adminRoutes;
