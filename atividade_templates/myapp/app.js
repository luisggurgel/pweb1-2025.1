var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const newsRoutes = require('./routes/news');
const aboutRoutes = require('./routes/about');
const dataRoutes = require('./routes/data');
const magicRoutes = require('./routes/magic');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/magic', magicRoutes);
app.use('/news', newsRoutes);
app.use('/about', aboutRoutes);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', dataRoutes);


app.use(function(err, req, res, next) {
res.status(err.status || 404);
  res.send('<a href="/">Go to Home</a>');
});

// app.use(function(err, req, res, next) {

//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
