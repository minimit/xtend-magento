'use strict';

var gulp = require('gulp');

var less = require('gulp-less');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

// compile less

gulp.task('less', function () {
  return gulp.src(['web/**/xtend-magento.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('web/'));
});
gulp.task('less:watch', function (done) {
  gulp.watch(['web/**/*.less'], gulp.series('less'));
  done();
});

/*
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var browserify = require('browserify');
var uglify = require('gulp-uglify-es').default;

// compile js

gulp.task('js', function () {
  var b = browserify({
    entries: 'web/js/theme.js',
    debug: true
  }).transform('babelify');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({
      output: {
        comments: /^!/
      }
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('web/js/'));
});
gulp.task('js:watch', function (done) {
  gulp.watch(['web/js/theme.js'], gulp.series('js'));
  done();
});
*/

// tasks

gulp.task('watch',
  gulp.series(gulp.parallel('less'), gulp.parallel('less:watch'))
);

gulp.task('build',
  gulp.series(gulp.parallel('less'))
);

gulp.task('default', gulp.series('build'));
