// still grabbing the 3rd process arg, if supplied
var url = process.argv[2] || 'http://google.com'
// this time, using request instead of http: https://github.com/mikeal/request (remember you can find this with 'npm home request')
var request = require('request');
// request has a slightly simpler syntax to use
request(url, function (err, res, body) {
  if (err) return console.log(err.toString());
  // and it goes ahead and returns you a string, 
  // and does some other fancy stuff for you 
  // in the process, like following 301/redirects
  console.log(body);
});
