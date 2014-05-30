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

var Promise = require('bluebird');

function promiseSave (item) {
	return new Promise(function (resolve, reject) {
		save(item, function (err, result) {
			if (err) return reject(err);
			return resolve(result);
		});
	});
}

var items = [promiseSave(2), promiseSave(3), promiseSave(4)];

Promise.all(items)
	.catch(function (err) {
		console.log('borked for some reason: ', err.toString());
	})
	.done(function (results) {
		console.log('saved with promises: %j', results);
	});

/*
 * Neat. Promises. That let us write things in yet another terse
 * style that's easy to read and understand. Instead of calling
 * the callback, we ask for an object that will later tell us
 * whether the behavior it contains was 'resolved' or 'failed'. 
 * And, we can chain them together and get all their resolved
 * values at once. 
 *
 * more info on promises in jQuery: https://gist.github.com/patrickleet/9905348
 */ 
