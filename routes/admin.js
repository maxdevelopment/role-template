var express = require('express');
var middleware = require('../middleware/admin');
var router = express.Router();
var UserController = require('../controllers/UserController');

router.use(middleware);
/*
 * Admin routes here
 */
router.get('/user', UserController.index);
router.post('/user', UserController.create);

module.exports = router;
