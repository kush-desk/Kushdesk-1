
global.base_path = __dirname;
base_url = "localhost:5000"
/* Set all global variables here*/
global.helper_path = __dirname + "/app/helper";
global.uploads_path = __dirname + "/app/uploads";
global.assets_url = base_url + 'app/assets';
global.uploads_url = base_url + '/uploads';
global.frontend_url = base_url + '/src/pages';
global.NOT_FOUND_ERROR = 405;
global.SUCCESS_CODE = 200;
var path = require('path')


global.home_url = frontend_url + '/index';
global.home_path = base_path + '/app/src/pages/index'

/* GET DATABASE ACCESS */
var cors = require('cors')
var passport = require('passport')
/* NEEDED A CALLBACK HERE, SOMEHOW MONGO CONNECTION WAS EXTREMELY ASYNC, EH */
//STILL TO BE EVEN MORE SAFE, DO AWAIT ASYNC HERE



/* GLOBAL FUNCTIONALITY PROVIDERS END HERE */
const https = require("https")
const fs = require("fs");

/* Incude the express Module*/
var express = require("express");
var useragent = require('express-useragent');

global.app = express();


/* Session Initialization*/
app.use(require('cookie-parser')());
app.use(useragent.express());
app.use(cors())
var session = require('express-session');

/* TO FETCH BROWSER INFORMATION * /
global.useragent = require('express-useragent');

/* Get Request Url Middleware - start */
app.use(function (req, res, next) {
  var current_url = req.protocol + '://' + req.get('host');
  base_url = current_url;
  /* Define global values for views */
  app.locals.assets_url = base_url + '/assets';
  app.locals.base_url = base_url;
  // app.locals.session	  = req.session;

  next();
});
/* Get Request Url Middleware - end */


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// set the view engine to ejs
app.set('view engine', 'ejs');
/* Define global values for views */
/* Allow Cross Origin Requests */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* INCLUDE MODELS AFTER THIS */

var router = express.Router();

app.use('', router);



/* Set static links to use assets */
app.use('/dist', express.static(__dirname + '/dist'));

/* Set static links to use uploads */
app.use('/uploads', express.static(__dirname + '/app/uploads'));

app.get('/test/', function (res, res) {
  res.send("hello");
  return
})

//app.use('/', express.static(path.join(__dirname, 'dist/espire/')));


app.get('/', function (req, res) {
  console.log(req.useragent)


  res.send("hello");
  return;

  // if (req.useragent.isMobile) {
  //   console.log("yeeyeyeyeyey");
  //   filename = __dirname + '/dist/mobile/omni/dist/my-app/index.html';
  //   console.log(filename)

  //   res.sendFile(filename);
  // }

  // else {

  //   console.log("NONONONO");
  //   filename = __dirname + '/dist/amp/index.html';
  //   console.log(filename)
  //   res.sendFile(filename);
  // }

  return;
});


app.get('*.*', express.static(__dirname + '/dist/espire'));
app.get("*.*", express.static(__dirname + '/dist/mobile/omni/dist/my-app'))


var port = "5000"
var http = require('http').Server(app);
console.log(__dirname)
http.listen(port, function () {
  console.log('Server Started listening on port: ' + port);
});
