var express = require('express');
var middleware = require('../middleware/manager');
var router = express.Router();

router.use(middleware);
/*
 * Managers routes here
*/


module.exports = router;
