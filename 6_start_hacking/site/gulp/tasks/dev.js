'use strict';

var gulp = require('gulp');

// Dev Server
gulp.task('dev', ['jade', 'styles', 'vendor', 'browserify', 'images', 'watch']);
