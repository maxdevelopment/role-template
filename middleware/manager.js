var auth = require("../config/auth.js")();
var express = require('express');
var managerRoutes = express.Router();

managerRoutes.use(auth.authenticate(), function(req, res, next) {
    var role = req.user.getRole();
    if (role.is_manager) {
        next();
    } else {
        return res.status(403).send({
            success: false,
            message: 'Access denied.'
        });
    }
});
module.exports = managerRoutes;
