var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.send('sou o about aquele rapper');
  console.log('alguem acessou o about');
});
module.exports = router;
