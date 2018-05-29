const gulp = require("gulp");
// var less = require('gulp-less');
// var minifyCSS = require('gulp-csso');
// var concatCss = require('gulp-concat-css');
// var concatJs = require('gulp-concat-js');
const concat = require("gulp-concat");
const del = require("del");
// var cssmin = require('gulp-cssmin');
const babel = require("gulp-babel");
//const clean = require("gulp-clean");
//const debug = require("gulp-debug");
//var gulpSequence = require('gulp-sequence');
//var gettext = require('gulp-angular-gettext');
const watch = require("gulp-watch");
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
//const umd = require("gulp-umd");
//const gutil = require("gulp-util");

const chemins = {
  sources: "./sources/",
  distrib: "./distrib/"
};


gulp.task("clean", function() {
  return del( < a href = "" > < /a>
    chemins.distrib + "/*"
  ]);
});



gulp.task("datetime-object.min.js", () => {
  return gulp.src( < a href = "" > < /a>
    "sources/datetime-object.js"
  ])
.pipe(concat("datetime-object.min.js"))
.pipe(babel({
  presets: < a href = "" > < /a>"es2015"],
  compact: false
}))
.pipe(gulp.dest(chemins.distrib))
});


gulp.task("watch:datetime-object.min.js", function() {
  watch("./sources/*.js", function() {
    gulp.run("datetime-object.min.js");
  });
});


gulp.task("default", < a href = "" > < /a>"datetime-object.min.js"]);


    gulp.task("all", < a href = "" > < /a>"default"]);

      gulp.task("watch", < a href = "" > < /a>"watch:datetime-object.min.js"]);