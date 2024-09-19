var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/pages/about');
var donationsRouter = require('./routes/pages/donations');
var downloadsRouter = require('./routes/pages/downloads');
var newsRouter = require('./routes/pages/news');
var breakingRouter = require('./routes/news/breaking');
var loginRouter = require('./routes/pages/login');
var singinRouter = require('./routes/login/singin');
var singupRouter = require('./routes/login/singup');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/news', newsRouter);
app.use('/news/breaking', breakingRouter);
app.use('/donations', donationsRouter);
app.use('/downloads', downloadsRouter);
app.use('/login', loginRouter);
app.use('/login/singin', singinRouter);
app.use('/login/singup', singupRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
