// http is Node's core library for sending and receiving data
var http = require('http');
var url = process.argv[2] || 'http://google.com'
// http.request allows you to make an http request
// against a uri: http://nodejs.org/api/http.html#http_http_request_options_callback
http.request(url, function (res) {
  // pipe magically controls back pressure between these two streams (stdout and res).
  // this essentially means that as data is coming in from the response (and thus from
  // network IO), mechanics inside the streams api are making sure to only feed that
  // to stdout as quickly as it can take it.
  res.pipe(process.stdout);
// remember to call .end() this informs the remote server you're done giving it instructions
}).end();
