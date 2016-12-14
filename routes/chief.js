var express = require('express');
var middleware = require('../middleware/chief');
var router = express.Router();

router.use(middleware);
/*
 * Chief routes here
*/


module.exports = router;
