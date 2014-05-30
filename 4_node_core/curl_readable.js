var http = require('http');
var url = process.argv[2] || 'http://google.com'
http.request(url, function (res) {
  var result = '';
  // as of around Node version 0.10.0, an updated
  // version of streams has been in place that exposes
  // the 'readable' event. this lets the application know
  // "'ok', it's cool to start reading. data is available
  // in the buffer for this stream and ready to be read"
  res.on('readable', function () {
    var chunk;
    while (null !== (chunk = res.read())) {
      result = result + chunk.toString();
    }
  });
  res.on('end', function () {
    console.log(result);
  });
}).end();
