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
  if (completed === 3) {
    console.log('done with all ' + results);
  }
}

var thing1 = { id: 1  };
var thing2 = { id: 2  };
var thing3 = { id: 3  };

Save(thing1, checkDone);
Save(thing2, checkDone);
Save(thing3, checkDone);
