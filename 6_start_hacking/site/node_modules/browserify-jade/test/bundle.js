var test = require('tap').test;
var browserify = require('browserify');
var vm = require('vm');

test('no options bundle', function(t) {
    t.plan(1);
    var b = browserify();
    b.add(__dirname + '/../example/bar.js');
    b.transform(__dirname + '/..');
    b.bundle(function (err, src) {
        if (err) t.fail(err);
        testBundle(src, t);
    });
});

test('options bundle', function(t) {
    t.plan(1);
    var b = browserify();
    b.add(__dirname + '/../example/bar.js');
    b.transform(require('../index.js').jade({
        pretty: false
    }));
    b.bundle(function (err, src) {
        if (err) t.fail(err);
        testBundle(src, t);
    });
});

function testBundle(src, t) {
    function log (msg) {
        t.equal(msg, 555);
    }
    vm.runInNewContext(src, {
        console: { log: log }
    });
}