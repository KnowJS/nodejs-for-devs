'use strict';

var http = require('http');

function App() {
  var button = document.getElementById('more');
  var self = this;
  button.onclick = function () {
    self.helloRandom();
  };
  console.log('app initialized');
}

module.exports = App;

App.prototype.helloBrowserify = function () {
  http.get({
    path: '/api/hello'
  }, function (res) {
    var div = document.getElementById('hello');

    var data = '';
    res.on('data', function (buf) {
      data += buf;
    });

    res.on('end', function () {
      div.innerHTML = data;
    });
  });
};

App.prototype.helloRandom = function () {
  http.get({
    path: '/api/hello/random'
  }, function (res) {
    var div = document.getElementById('hello');

    var data = '';
    res.on('data', function (buf) {
      data += buf;
    });

    res.on('end', function () {
      div.innerHTML = data;
    });
  });
};
