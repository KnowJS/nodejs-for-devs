var http = require('http');
var httpProxy = require('http-proxy');
var util = require('util');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

var API_PORT = process.env.API_PORT || 3001;
var PROXY_PORT = process.env.PROXY_PORT || 8080;
var SITE_PORT = process.env.SITE_PORT || 3000;

var apiUri = util.format('http://127.0.0.1:%s', API_PORT);
var siteUri = util.format('http://127.0.0.1:%s', SITE_PORT);

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = require('http').createServer(function (req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  console.log(req.url)
  if (/^\/api(\/+.*)?/.test(req.url)) {
    console.log('proxying to api ', req.url)
    return proxy.web(req, res, { target: apiUri });
  }
  return proxy.web(req, res, { target: siteUri });
});

proxy.on('error', function (err) {
  console.log(error.toString());
})

console.log("listening on port " + PROXY_PORT)

server.listen(PROXY_PORT);