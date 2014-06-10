var http = require('http');

var url = process.argv[2];

console.log('fetching ' + url);

http.get(url, function (res) {
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
