function Save(thing, callback) {
  setTimeout(function () { // mock saving to a db
    callback(null, thing.id);
  }, 500);
}

var thing1 = { id: 1  };
var thing2 = { id: 2  };
var thing3 = { id: 3  };

Save(thing1, function (err, id) {
  if (err) throw err;
  console.log(id + " saved")
  Save(thing2, function (err, id) {
    if (err) throw err;
    console.log(id + " saved")
    Save(thing3, function (err, id) {
      if (err) throw err;
      console.log(id + " saved")
    })
  })
})
