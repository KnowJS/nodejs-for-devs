var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var util = require('util');

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected. If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
var ensureAuthenticated = module.exports.ensureAuthenticated = function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) { 
    res.locals.user = req.user;
    return next(); 
  }
  console.log('not authenticated', req.user);
  res.redirect('/login')
}

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser(function serializeUser (user, done) {
  done(null, user);
});

passport.deserializeUser(function deserializeUser (obj, done) {
  done(null, obj);
});

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CLIENT_CALLBACKURL
  },
  function verify (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

module.exports.passport = passport; 

module.exports.routes = function (app) {
  // auth routes
  app.get('/account', ensureAuthenticated, function account (req, res){
    res.render('account');
  });

  app.get('/login', function login (req, res) {
    res.render('login');
  });
  // GET /auth/github
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  The first step in GitHub authentication will involve redirecting
  //   the user to github.com.  After authorization, GitHubwill redirect the user
  //   back to this application at /auth/github/callback
  app.get('/auth/github', passport.authenticate('github'), function authenticate (req, res){
      // The request will be redirected to GitHub for authentication, so this
      // function will not be called.
  });

  // GET /auth/github/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function redirect (req, res) {
    res.redirect('/account');
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

}
