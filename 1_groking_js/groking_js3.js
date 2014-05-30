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

var presults = [];
var input = [2, 3, 4];

function parallelize (item, cb) {
	save(item, cb);
}

input.forEach(function (item) {
	parallelize(item, function checkDone (err, result) {
		if (err) throw err;
		presults.push(result)
		if (presults.length === input.length) {
			console.log('saved using inverted checkDone pattern 2: %j', presults);
		}
	});
});

/* 
 * Cool. A little cleaner, still.
 * What other ways can we do this?
 */

