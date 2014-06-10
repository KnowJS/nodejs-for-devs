function Save(thing, callback) {
  setTimeout(function () { // mock saving to a db
    callback(null, thing.id);
  }, 500);
}

var completed = 0, results = [];
function checkDone (err, result) {
  if (err) throw err;
  completed++;
  results.push(result);
  if (completed === inputs.length) {
    console.log('done with all ' + results);
  }
}

var thing1 = { id: 1  };
var thing2 = { id: 2  };

var thing3 = { id: 3  };
var thing4 = { id: 4  };

var inputs = [thing1, thing2, thing3, thing4];

inputs.forEach(function (input) {
  Save(input, checkDone);
});

module.exports = inputs;
