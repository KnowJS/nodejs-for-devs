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

var events = require('events');
var util = require('util');

function Saver () {
	events.EventEmitter.call(this);
}

util.inherits(Saver, events.EventEmitter);

Saver.prototype.save = function (items) {
	var self = this, results = [];
	items.forEach(function (item) {
		save(item, function (err, result) {
			if (err) return self.emit('error', err);
			results.push(result);
			if (items.length === results.length) {
				self.emit('done', results);
			}
		});
	});
};

var saver = new Saver();

saver.on('done', function (result) {
	console.log('saved using events: %j', result);
});

saver.save([2, 3, 4]);

/*
 * That's neat, so you can emit an event instead of
 * just relying on callbacks. And you can encapsulate
 * all of that logic inside a class, hidden away from
 * it's usage in code.
 * 
 * Are there any libraries that can help us make this
 * more succinct?
 */

