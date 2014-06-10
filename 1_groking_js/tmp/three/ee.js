var MyEmitter = require('./myemitter');
var util = require('util');

var em = new MyEmitter();

em.once('done', function (data) {
  console.log('im done! with data: ' + util.inspect(data));
});

em.doStuff();
