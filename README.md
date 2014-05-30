#node-for-devs
A non-Noder's guide to getting dangerous with Node.js in a day. presenters: Matt Walters & Sahat Yalkabov

Get up and running with nvm, npm, Node.js and Express.
Learn fundamental Node and JavaScript concepts like callbacks, events, and promises.
Become familiar with some of Node's most popular modules and learn their benefits.
Bootstrap a site and API with the latest tools like yeoman, bower, and others.
Deploy your site to heroku or a cloud of your choice.

##Get up and running with nvm, npm, Node.js and Express.

###9am - 10am : Getting Setup (For anyone who isn't yet)
- install node
  - http://nodejs.org/download/
  - (even better) https://github.com/creationix/nvm
- have an editor installed
  - http://www.sublimetext.com/2

###10am - 10:40am : Groking JavaScript - brief language overiew, callbacks, events, and promises
- numbers, arrays, objects (which are just associative arrays), & functions (which are just a special type of object)
- asynchronous - callbacks, events & promises
- variable scope, lifting, closures 
- use strict
- the event loop 
- Pro Tip: refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
- Joint Walkthrough Coding:  Exploring and getting used to different code control flow techniques for asynchronous calls in JS. 
- More Learning: http://nodeschool.io/#functionaljs
  - http://nodeschool.io/#promiseitwonthurt
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/EventLoop

---

###10 min break 

---

###10:50am - 11:30am : Groking Node
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

###11:15pm - 12:15pm : NPM and Modules
- npm init, search, info, install (& -g), update, home
  - --save, --save-dev
  - semver
- node\_modules + echo "node_modules" >> .gitignore
- Node.js module-making mantras (small, tested, single purpose, compose-able)
- npm publish
- Pro Tip: npm link
- Pro Tip: how to re-use modules privately using github tarballs
- Problem: Rewrite previous example using 'request'. Be sure you save its dependency in package.json

---

###12:15pm - 1:15pm : Lunch 
- lunchtime preview: 
  - coffee-script in your applications
  - coffee-script in your modules

---


###1:15pm - 2:15pm - Common Core Modules
- console, process, events, stream, http, util, child_process
- events - on vs once, 'error' and 'uncaughtException'
- streams! just like unix pipes, in code - readable, writeable, duplex, transform
  - flowing mode vs non-flowing mode
  - https://github.com/substack/stream-handbook
- Pro Tip: https://github.com/isaacs/readable-stream
- Problems: 
  - Copy curl implementation and update to use 'readable' event and read() method from stream api
  - Copy previous solution and change to use pipe() to automatically control back pressure. 

---

- More Learning:  http://nodeschool.io/#stream-adventure
  - http://nodestreams.com/
  - https://github.com/substack/stream-handbook
  - https://www.youtube.com/watch?v=UHZpk4LwCLE#t=1290
  - https://www.youtube.com/watch?v=9llfAByho98
  - https://www.youtube.com/watch?v=IuMHaONGAmc
  - https://github.com/thlorenz/stream-viz

---

###10 min break

---

###2:25pm - 4:00pm - Common Modules and Frameworks pt. 1
- _npm home_ express
- _npm home_ connect
- _npm home_ jade
- _npm home_ mongoose
- _npm home_ request
- _npm home_ underscore (or lodash)
- _npm home_ async
- _npm home_ bluebird
- _npm home_ mocha
- _npm home_ passport.js
- Pro Tip: Favor modu
- Pro Tip: Navigating and learning to use modules - View the tests and examples!
  - learn connect and its usage inside express, by navigating express' node_modules
  - Note: Express 4.0 will not include middleware anymore. You'll need to include each in your package.json. This makes express, itself, and your apps more maintainable.

---  

- Problem: Create a simple express app that lets you upload an image, which can then be dowloaded via a link.
  - to complete this you'll create a simple express site, add routes and views which present a form to a user and accept a multipart POST from the form. 
  - Bonus: use the 'gm' module to resize your images upon upload to save a thumbnail as well as original message. 

- More Learning: http://nodeschool.io/#expressworks
- https://github.com/mcavage/node-restify

---

###10 min break

---

###4:10 - 5:20pm - Start Hacking
- Hackathon Starter https://github.com/sahat/hackathon-starter#how-it-works-mini-guides
- git clone, run
- what's included
- Problem: [how should we have them modify hackathon starter?]

---

###:5:20 - 6:00pm - Deploying to heroku
- adding a Procfile
- Problem: heroku create, git push heroku master
