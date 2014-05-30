
/**
 * Module dependencies.
 */

var auth = require('./lib/auth');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// load liveReload script only in development mode
// load before app.router
// app.configure('development', function() {
//   // live reload script
//   var liveReloadPort = 35729;
//   app.use(require('connect-livereload')({
//     port: liveReloadPort
//   }));
// });

app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(express.logger());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(auth.passport.initialize());
app.use(auth.passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// apply auth routes
auth.routes(app);

app.get('/resize', routes.upload);
app.post('/resize', routes.resize);
app.get('/', auth.ensureAuthenticated, routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
