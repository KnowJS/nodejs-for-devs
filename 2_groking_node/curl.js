// http is Node's core library for sending and receiving data
var http = require('http');
var url = process.argv[2] || 'http://google.com'
// http.request allows you to make an http request
// against a uri: http://nodejs.org/api/http.html#http_http_request_options_callback
http.request(url, function (res) {
  // since you don't know *when* data will come back from the server, we set
  // up an event handler to listen for those chunks of data as they come back
  res.on('data', function (data) {
    // Node will package the data as Buffer objects and hand them to us
    // We can just convert them to strings and print them
    console.log(data.toString());
  });
// remember to call .end() this informs the remote server you're done giving it instructions
}).end();
