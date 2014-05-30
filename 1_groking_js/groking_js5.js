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
/***/

var async = require('async');

async.map([2, 3, 4], save, function (err, results) {
	console.log('saved with async: %j', results)
});

/*
 * Now we're getting terse! The async lib essentially
 * took all that length-checking code and hid it away
 * for us. That's quite clean. 
 */ 
