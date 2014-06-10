var events = require("events");
var util = require("util");

function MyEmitter() {
    events.EventEmitter.call(this);
}

util.inherits(MyEmitter, events.EventEmitter);

MyEmitter.prototype.doStuff = function () {
  var self = this;
  setTimeout(function () {
    self.emit('done', { data: 'my data'  });
  }, 1000);
}

module.exports = MyEmitter;
