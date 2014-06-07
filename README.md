# ***node.js*** for devs

---

## Get dangerous w/ Node in a day

Presenters: [Matt Walters](http://github.com/mateodelnorte) & [Sahat Yalkabov](http://github.com/sahat)

### Today we will:  
  
- Get up and running with nvm/n, npm, Node.js and Express.
- Learn fundamental Node and JavaScript concepts like callbacks, events, and promises.
- Become familiar with some of Node's most popular modules and learn their benefits.
- Bootstrap a site and API with the latest tools like yeoman, bower, and others.
- Deploy your site to heroku or a cloud of your choice.

### And more importantly:

- Teach you where look in order to more easily understand and learn Node on your own time. 

---

## 9am-9:30am: Getting Setup 
### (For anyone who isn't yet)
- install node
  - http://nodejs.org/download/
    - (even better) https://github.com/creationix/nvm 
    - or https://github.com/visionmedia/n
- have an editor installed
  - vi + http://vim.spf13.com/
  - http://www.sublimetext.com/2
  - http://www.jetbrains.com/webstorm/
  - Visual Studio + https://nodejstools.codeplex.com/

---

## 9:30am-10:30am: Groking JavaScript
### brief language overiew, callbacks, events, and promises
- numbers, arrays, objects (which are just associative arrays), & functions (which are just a special type of object)
- asynchronous - callbacks, events & promises
- variable scope, lifting, closures 
- use strict
- the event loop 

---

## 9:30am-10:30am: Groking JavaScript
- Joint Walkthrough Coding:  Exploring and getting used to different code control flow techniques for asynchronous calls in JS. 
- Pro Tip: refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
- More Learning: http://nodeschool.io/#functionaljs
  - http://nodeschool.io/#promiseitwonthurt
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/EventLoop

---

# 10 min break

---

## 10:40am - 11:15am: Groking Node
- Understanding V8
- Understanding the Event Loop & async IO
  - http://stackoverflow.com/a/14797359/602377
- node, repl, files
- The CommonJS Module System
  - require, exports, module.exports
    - http://stackoverflow.com/a/17944431/602377
- node core - quick intro - http & events
- Pro Tip: nvm
- Joint Walkthrough Coding: Writing a simple version of curl, using only the 'http' module
- More Learning: http://nodeschool.io/#learn-you-node

---

## 11:15pm - 12:00pm: NPM and Modules
- npm init, search, info, install (& -g), update, home
  - --save, --save-dev
  - semver
- node\_modules + echo "node_modules" >> .gitignore
- Node.js module-making mantras (small, tested, single purpose, compose-able)
- npm publish
- Pro Tip: npm link
- Pro Tip: re-use private modules using github tarballs in package.json
- Problem: Rewrite previous example using 'request'. Be sure you save its dependency in package.json

---

## 12:00pm - 1:00pm: Lunch

---

## 1:00pm - 1:45pm - Common Core Modules
- console, process, events, stream, http, util, child_process
- events - on vs once, 'error' and 'uncaughtException'
- streams! like unix pipes, in code - readable, writeable, duplex, transform
  - flowing mode vs non-flowing mode
  - https://github.com/substack/stream-handbook
- Pro Tip: https://github.com/isaacs/readable-stream
- Problems: 
  - Copy curl implementation and update to use 'readable' event and read() method from stream api
  - Copy previous solution and change to use pipe() to automatically control back pressure. 

---

## 1:00pm - 1:45pm - Common Core Modules
- More Learning:  http://nodeschool.io/#stream-adventure
  - http://nodestreams.com/
  - https://github.com/substack/stream-handbook
  - https://www.youtube.com/watch?v=UHZpk4LwCLE#t=1290
  - https://www.youtube.com/watch?v=9llfAByho98
  - https://www.youtube.com/watch?v=IuMHaONGAmc
  - https://github.com/thlorenz/stream-viz

---

# 10 min break

---

## 1:55pm - 3:15pm - Common Userland Modules
- '_npm home_ express', connect, jade
- '_npm home_ underscore' (or lodash), async, bluebird
- '_npm home_ mocha', request, mongoose, passport.js
- Pro Tip: Favor modules that do one thing, but do it well. Compose these modules into larger modules and solutions.
- Pro Tip: Navigating and learning to use modules - View the tests and examples!
  - learn connect and its usage inside express, by navigating express' node_modules
  - Note: Express 4.0 will not include middleware anymore. You'll need to include each in your package.json. This makes express, itself, and your apps more maintainable.

---  

## 1:55pm - 3:15pm - Common Userland Modules
Problem:

  - 1) Create a simple express app that lets you upload an image, which is then shown to the user. (To complete this you'll create a simple express site, add routes and views which present a form to a user and accept a multipart POST from the form.)
  - Bonus 1) use the 'gm' module to resize your images upon upload to save a thumbnail as well as original message. 
  - Bonus 2) use the 'async' module to create three different sizes of your uploaded image.

More Learning: 

  - http://nodeschool.io/#expressworks
  - https://github.com/mcavage/node-restify

---

# 10 min break

---

## 3:25 - 4:30pm - Start Hacking
- '_npm home_ yoeman'
- '_npm home_ bower'
- '_npm home_ browserify'
- '_npm home_ gulp'
- '_npm home_ http-proxy'

---

## 3:25 - 4:30pm - Start Hacking
Problems: 

  - 1) Install yoeman, install the 'browserify' generator and generate a new site. Choose gulp when asked to do so. (if you have issues with SASS, redo and choose not to install when generating).
  - 2) Update the site you just created to make an ajax call back to a route to request some data. Display that data on the page. (You'll create an express route to do this)
  - 3) Separate your API from your site by creating a new express site and a proxy using http-proxy. Keep each in a separate folder and start each individually, on different ports. Have your proxy direct all requests to the api subdomain of your app to your proxy and all other requests to your site.

---

## 4:30 - 5:00pm - Deploying to heroku
- adding a Procfile
- starting multiple executables

Problem: 

- create a Procfile, heroku create, git push heroku master

---

# **More Learning:**

---

## **async:** waterfall

```javascript
async.waterfall([
  function(callback) {
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback) {
    // Here arg1 is 'one' and arg2 is 'two'
    callback(null);
  },
], function(err, results) {
  // Optional callback when everything is finished
});
```

---

## **node.js:** cluster

```javascript
var os = require('os');
var cluster = require('cluster');

cluster.setupMaster({
  exec: 'app.js'
});

cluster.on('exit', function(worker) {
  console.log('Worker ' + worker.id + ' died');
  cluster.fork();
});

for (var i = 0; i < os.cpus().length; i++) {
  cluster.fork();
}
```

---

## Express REST API

- [Build a RESTful API Using Node and Express 4](http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4)
- [Create a TV Show Tracker using AngularJS, Node.js and MongoDB](http://sahatyalkabov.com/create-a-tv-show-tracker-using-angularjs-nodejs-and-mongodb/)

## File Upload

- [Upload files with Node.js](http://jsrecipes.org/#!/backend/uploading-files)

## CSRF Protection

- [CSRF Protection with Express](http://jsrecipes.org/#!/backend/csrf-protection-with-express)
