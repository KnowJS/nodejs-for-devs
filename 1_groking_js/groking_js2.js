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

var completed = 0, results = [];
function checkDone (err, result) {
	if (err) throw err;
	completed++;
	results.push(result)
	if (completed === 3) {
		console.log('saved using checkDone pattern: %j', results);
	}
}

save(2, checkDone);
save(3, checkDone);
save(4, checkDone);

/*
 * That definitely made the last part look cleaner. 
 * And they're all happening simultaneously now.
 * Can we invert this a bit so you don't scroll back up
 * to see the code that runs last?
 */

