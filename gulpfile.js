/*
* IoT Hub Raspberry Pi NodeJS Blink - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
*/
'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

require('gulp-common')(gulp, 'raspberrypi-node', { appName: 'blink' });

gulp.task('lint', () => {
  return gulp.src([
    './**/*.js',
    '!node_modules/**',
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});