var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/users/signup');
  console.log('alguem acessou os users');
});

router.get('/signup', function(req, res, next) {
  res.send('pagina de cadastro');
  console.log('alguem acessou o signup');
});

router.get('/signin', function(req, res, next) {
  res.send('pagina de login');
  console.log('alguem acessou o signin');
});

router.get('/:userid', function(req, res, next) {
  res.send(`User ID: ${req.params.userid}`);
  console.log(`alguem acessou o user ${req.params.userid}`);
});

module.exports = router;
