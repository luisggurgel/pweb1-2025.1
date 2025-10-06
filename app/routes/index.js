var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
  console.log('alguem acessou o index');
});

module.exports = router;
