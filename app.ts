var createError = require('http-errors');
import express from 'express';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var uploadRouter = require('./routes/upload');
const app: express.Application = express();
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,x-token");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload', uploadRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.use('/images/', express.static(path.join(__dirname, './images/')));
app.use("/assets/", express.static(path.join(__dirname, './assets/')));
app.use(require('./routes/index'));

// require('./mysql/mysql.ts').init()

// var http = require('http');
// var https = require('https');
// var privateKey = fs.readFileSync('./xuegaogamekey/privatekey.pem', 'utf8')
// var certificate = fs.readFileSync('./xuegaogamekey/certificate.pem', 'utf8')
// var credentials = {
//   key: privateKey,
//   cert: certificate
// };

// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
var PORT = 4001;
// var SSLPORT = 8082;


app.listen(PORT, function() {
  console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
// httpsServer.listen(SSLPORT, function() {
//   console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
// });

module.exports = app;
