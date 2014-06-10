/**
 * scripts/app.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';
var _ = require('underscore');

function App() {
  console.log('app initialized');
}

module.exports = App;

App.prototype.beep = function () {
  console.log('boop');
  console.log(_);
};
