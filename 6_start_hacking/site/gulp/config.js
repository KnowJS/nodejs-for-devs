var path = require('path');
var production = (process.env.NODE_ENV === 'production');

module.exports = {
  bower: 'app/bower_components',
  dist: production ? 'dist' : '.tmp',
	livereloadPort: 35729,
	port: parseInt(process.env.PORT || 3000),
  proxyPort: parseInt(process.env.PROXY_PORT || 8080),
	root: path.resolve('./')
};
