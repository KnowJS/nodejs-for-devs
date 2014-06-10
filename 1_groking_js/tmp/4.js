var async = require('async');

function Save(thing, callback) {
  setTimeout(function () { // mock saving to a db
    callback(null, thing.id);
  }, 500);
}

var thing1 = { id: 1  };
var thing2 = { id: 2  };
var thing3 = { id: 3  };
var thing4 = { id: 4  };

var inputs = [thing1, thing2, thing3, thing4];

async.map(inputs, Save, function(err, results){
  if (err) throw err;
  console.log('saved results' + results);
});

module.exports = inputs;
