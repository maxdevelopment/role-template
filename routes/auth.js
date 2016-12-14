var express = require('express');
var middleware = require('../middleware/auth');
var router = express.Router();

router.use(middleware);
/*
 * Auth routes here
 */


module.exports = router;
