/*
 * Let's pretend we have a function which performs IO asynchronously
 */

function save (item, cb) {
  // let's pretend we're adding two numbers on 
  // a remote server somewhere, and it takes a 
  // second
  setTimeout(function () {
    cb(null, { success: true });
  }, 1000);
}

/*
 * How can do we use this function to save some data?
 */
save(2, function (err, result) {
  console.log('saved one!', result)
});

/*
 * What if we want to add a bunch of numbers?
 */
save(2, function (err, result) {
  if (err) throw err;
  console.log('saved many, one at a time!')
  console.log(result);
  save(3, function (err, result) {
    if (err) throw err;
    console.log(result);
    save(4, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
});

/*
 * Well, that's ugly. And, it only seems
 * to save each item once the last is done
 * saving. Can we make it better?
 */

