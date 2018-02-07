var express = require('express');
var router = express.Router();
var api = require('./api');
/* GET home page. */

router.get('/', api.get);
router.post('/', api.post);
router.put('/', api.put);
router.delete('/', api.deleteRoute);

module.exports = router;
