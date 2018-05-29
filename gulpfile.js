const gulp = require("gulp");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const watch = require("gulp-watch");

const chemins = {
  sources: "./sources/",
  distrib: "./distrib/"
};



gulp.task("datetime-object.min.js", () => {
  return gulp.src([
      "sources/datetime-object.js"
    ])
    .pipe(concat("datetime-object.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false
    }))
    .pipe(gulp.dest(chemins.distrib))
});


gulp.task("watch:datetime-object.min.js", function() {
  watch("./sources/*.js", function() {
    gulp.run("datetime-object.min.js");
  });
});


gulp.task("default", ["datetime-object.min.js"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:datetime-object.min.js"]);