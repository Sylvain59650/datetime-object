﻿var gulp = require('gulp');
// var less = require('gulp-less');
// var minifyCSS = require('gulp-csso');
// var concatCss = require('gulp-concat-css');
// var concatJs = require('gulp-concat-js');
var concat = require("gulp-concat");
var del = require('del');
// var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var debug = require('gulp-debug');
//var gulpSequence = require('gulp-sequence');
//var gettext = require('gulp-angular-gettext');
var watch = require('gulp-watch');
//var browserify = require('browserify');
//var sourcemaps = require('gulp-sourcemaps');
// var glob = require('glob');
// var rename = require('gulp-rename');
// //var source = require('vinyl-source-stream');
// //var buffer = require('vinyl-buffer');
// //var html2js = require('gulp-html2js');
// var htmlmin = require('gulp-htmlmin');
// var bower = require('gulp-bower');
// var gulpExpress = require('gulp-express');
// var rimraf = require('gulp-rimraf');
// var zip = require('gulp-vinyl-zip');
// var gutil = require('gulp-util');
// var package = require('./package.json');
// var eventStream = require('event-stream');
var umd = require("gulp-umd");
var gutil = require('gulp-util');

var chemins = {
  sources: "./sources/",
  distrib: './distrib/'
};


gulp.task('clean', function() {
  return del([
    chemins.distrib + "/*"
  ]);
});



gulp.task("datetime-object.min.js", () => {
  return gulp.src([
      "sources/datetime-object.js"
    ])
    .pipe(concat("datetime-object.min.js"))
    .pipe(uglify())
    .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(umd())
    .pipe(gulp.dest(chemins.distrib))
});


gulp.task('watch:datetime-object.min.js', function() {
  watch("./sources/*.js", function() {
    gulp.run('datetime-object.min.js');
  });
});


gulp.task('default', ['datetime-object.min.js']);


gulp.task('all', ['default']);

gulp.task("watch", ["watch:datetime-object.min.js"]);