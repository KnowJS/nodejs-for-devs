'use strict';

var gulp = require('gulp');

// Build
gulp.task('build', ['jade', 'styles', 'browserify', 'images']);
