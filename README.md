# ***node.js*** for devs

---

## Get dangerous w/ Node in a day

Presenters: [Matt Walters](http://github.com/mateodelnorte) & [Sahat Yalkabov](http://github.com/sahat)

### Today we will:  
  
- Get up and running with [nvm](https://github.com/creationix/nvm)/[n](https://github.com/visionmedia/n), [npm](https://www.npmjs.org/), [Node.js](http://nodejs.org/about/) and [Express](http://expressjs.com).
- Learn fundamental Node and JavaScript concepts like callbacks, events, and promises.
- Become familiar with some of Node's most popular modules and learn their benefits.
- Bootstrap a site and API with the latest tools like [yeoman](http://yeoman.io/), [bower](http://bower.io/), and others.
- Deploy your site to heroku or a cloud of your choice.

### And more importantly:

- Teach you where to look in order to more easily understand and learn Node on your own. 

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

## 9:30am-10:15am: JavaScript Refresher
### brief language overiew, callbacks, events, and promises
- [numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (which are just associative arrays), & [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/function) (which are just a special type of object)
- asynchronous - callbacks, events & promises
- variable [scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting), [hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting), [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) 
- [use strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
- the [event loop](http://stackoverflow.com/questions/3272298/whats-an-event-loop-and-how-is-it-different-than-using-other-models) 

---

## 9:30am-10:15am: JavaScript Refresher
- Joint Walkthrough Coding:  Exploring and getting used to different code control flow techniques for asynchronous calls in JS. 
- Pro Tip: refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
- More Learning: http://nodeschool.io/#functionaljs
  - http://nodeschool.io/#promiseitwonthurt
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/EventLoop

---

# 15 min break

---

## 10:30am - 11:15am: Groking Node
- Understanding [V8](https://developers.google.com/v8/videos)
- Understanding the Event Loop & async IO
  - http://stackoverflow.com/a/14797359/602377
- node, repl, files
- The CommonJS Module System
  - [require, exports, module.exports](http://wiki.commonjs.org/wiki/Modules/1.1)
    - http://stackoverflow.com/a/17944431/602377
- node core - quick intro - [http](http://nodejs.org/api/http.html) & [events](http://nodejs.org/api/events.html)
- Pro Tip: [nvm](https://github.com/creationix/nvm) or [n](https://github.com/visionmedia/n)
- Joint Walkthrough Coding: Writing a simple version of curl, using only the '[http](http://nodejs.org/api/http.html)' module
- More Learning: http://nodeschool.io/#learn-you-node

---

## 11:15am - 12:00pm: NPM and Modules
- npm [init](https://www.npmjs.org/doc/cli/npm-init.html), [search](https://www.npmjs.org/doc/cli/npm-search.html), [info](https://www.npmjs.org/doc/cli/npm-view.html), [install](https://www.npmjs.org/doc/cli/npm-install.html) (& -g), [update](https://www.npmjs.org/doc/cli/npm-update.html), [home](https://www.npmjs.org/doc/cli/npm-repo.html)
  - --save, --save-dev
  - [semver](https://github.com/isaacs/node-semver#ranges)
- node\_modules + echo "node_modules" >> .gitignore
- Node.js module-making mantras (small, tested, single purpose, compose-able)
- npm [publish](https://www.npmjs.org/doc/cli/npm-publish.html)
- Pro Tip: npm [link](https://www.npmjs.org/doc/cli/npm-link.html)
- Pro Tip: [re-use private modules using github tarballs in package.json](https://www.npmjs.org/doc/json.html#Git-URLs-as-Dependencies)
- Problem: Rewrite previous example using 'request'. Be sure you save its dependency in package.json

---

## 12:00pm - 1:00pm: Lunch

---

## 1:00pm - 1:45pm - Common Core Modules
- [console](http://nodejs.org/api/console.html), [process](http://nodejs.org/api/process.html), [events](http://nodejs.org/api/events.html), [stream](http://nodejs.org/api/stream.html), [http](http://nodejs.org/api/http.html), [util](http://nodejs.org/api/util.html), [child_process](http://nodejs.org/api/child_process.html)
- [events](http://nodejs.org/api/events.html) - [on](http://nodejs.org/api/events.html#events_emitter_on_event_listener) vs [once](http://nodejs.org/api/events.html#events_emitter_once_event_listener), '[error](http://nodejs.org/api/events.html#events_class_events_eventemitter)' and '[uncaughtException](http://nodejs.org/api/process.html#process_event_uncaughtexception)'
- [streams](http://nodejs.org/api/stream.html)\! like unix pipes, in code - [readable](http://nodejs.org/api/stream.html#stream_class_stream_readable), [writeable](http://nodejs.org/api/stream.html#stream_class_stream_writable), [duplex](http://nodejs.org/api/stream.html#stream_class_stream_duplex), [transform](http://nodejs.org/api/stream.html#stream_class_stream_transform)
  - [flowing mode vs non-flowing mode](http://nodejs.org/api/stream.html#stream_compatibility_with_older_node_versions)
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

## 1:45pm - 3:00pm - Common Userland Modules
- '_npm home_ [express](http://expressjs.com)', [connect](https://github.com/senchalabs/connect), [jade](http://www.jade-lang.com)
- '_npm home_ [underscore](http://documentcloud.github.com/underscore/)' (or [lodash](http://lodash.com/docs)), [async](https://github.com/caolan/async), [bluebird](https://github.com/petkaantonov/bluebird)
- '_npm home_ [mocha](http://visionmedia.github.io/mocha/)', [request](https://github.com/mikeal/request), [mongoose](http://http://mongoosejs.com), [passport.js](http://passportjs.org)
- Pro Tip: Favor modules that do one thing, but do it well. Compose these modules into larger modules and solutions.
- Pro Tip: Navigating and learning to use modules - View the tests and examples!
  - learn connect and its usage inside [express](http://expressjs.com), by navigating [express](http://expressjs.com)' node_modules
  - Note: [Express](http://expressjs.com) 4.0 will not include middleware anymore. You'll need to include each in your package.json. This makes [express](http://expressjs.com), itself, and your apps more maintainable.

---

# 15 min break

---

## 1:55pm - 3:00pm - Common Userland Modules
Problem:

  - 1) Create a simple [express](http://expressjs.com) app that lets you upload an image, which is then shown to the user. (To complete this you'll create a simple express site, add routes and views which present a form to a user and accept a multipart POST from the form.)
  - Bonus 1) use the '[gm](http://aheckmann.github.io/gm/)' module to resize your images upon upload to save a thumbnail as well as original message. 
  - Bonus 2) use the '[async](https://github.com/caolan/async)' module to create three different sizes of your uploaded image.

More Learning: 

  - http://nodeschool.io/#expressworks
  - https://github.com/mcavage/node-restify

---

## 3:00 - 3:45pm - Start Hacking
- '_npm home_ [yeoman](http://yeoman.io/)'
- '_npm home_ [bower](http://bower.io/)'
- '_npm home_ [browserify](http://browserify.org/)'
- '_npm home_ [gulp](http://gulpjs.com/)'
- '_npm home_ [http-proxy](https://github.com/nodejitsu/node-http-proxy)'

---

## 3:00 - 3:45pm - Start Hacking
Problems: 

  - 1) Install [yeoman](http://yeoman.io/), install the '[browserify](http://browserify.org/)' generator and generate a new site. Choose [gulp](http://gulpjs.com/) when asked to do so. (if you have issues with SASS, redo and choose not to install when generating).
  - 2) Update the site you just created to make an ajax call back to the server. Do a GET request to a new route in your site and return a random word to the browser. When received in the browser, update the page to say Hello+Your_Word instead of 'Hello World'. Make the random-word-swap happen every time someone clicks the 'Learn more' button. User browserify to keep your code well organized. 
  - 3) Separate your API from your site by creating a new express site and a proxy using http-proxy. Keep each in a separate folder and start each individually, on different ports. Use a regular expression to have your proxy direct all requests with a url including '/api' to the api, and all other requests to your site. 

---

## 3:45pm - 4:00pm - Deploying to heroku
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
