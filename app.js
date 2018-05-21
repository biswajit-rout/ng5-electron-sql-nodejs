var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbContext = require('./db/dbContext');
var newDbContext = new dbContext();
newDbContext.connect();

var appserver = express();
//Express setup
const {app, BrowserWindow,remote} = require('electron'); 


// view engine setup
appserver.set('views', path.join(__dirname, 'views'));
appserver.set('view engine', 'ejs');

appserver.use(logger('dev'));
appserver.use(express.json());
appserver.use(express.urlencoded({ extended: false }));
appserver.use(cookieParser());
appserver.use(express.static(path.join(__dirname, 'client/dist/')));
console.log(__dirname+ '/client/dist/index.html');
appserver.use('/', indexRouter);
appserver.use('/api', usersRouter);

// catch 404 and forward to error handler
appserver.use(function(req, res, next) {
  next(createError(404));
});

// error handler
appserver.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
appserver.listen(3000,()=>{
  console.log("Listening on port 8080");
});

app.on('ready', function() {
  //express();
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
  });
  mainWindow.loadURL('http://localhost:3000/');
  
  
  mainWindow.webContents.openDevTools();
  mainWindow.focus();
});

module.exports = appserver;
