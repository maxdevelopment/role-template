var auth = require("../config/auth.js")();
var express = require('express');
var chiefRoutes = express.Router();

chiefRoutes.use(auth.authenticate(), function(req, res, next) {
    var role = req.user.getRole();
    if (role.is_chief) {
        next();
    } else {
        return res.status(403).send({
            success: false,
            message: 'Access denied.'
        });
    }
});
module.exports = chiefRoutes;
