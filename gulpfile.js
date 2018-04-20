'use strict';

var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var less = require('gulp-less');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var filter = require('gulp-filter');
var browserify = require('browserify');
var uglify = require('gulp-uglify-es').default;
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

// compile less

gulp.task('less', function () {
  return gulp.src(['web/**/*.less', '!web/**/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('web/'))
    .pipe(filter('**/*.css')) // filter out map
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('web/'));
});
gulp.task('less:watch', function (done) {
  gulp.watch(['web/**/*.less'], gulp.series('less'));
  done();
});

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
    .pipe(gulp.dest('web/js/'))
    .pipe(uglify({
      output: {
        comments: /^!/
      }
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('web/js/'));
});
gulp.task('js:watch', function (done) {
  gulp.watch(['web/js/theme.js'], gulp.series('js'));
  done();
});

// scripts

gulp.task('watch',
  gulp.series(gulp.parallel('less', 'js'), gulp.parallel('less:watch', 'js:watch'))
);

gulp.task('build',
  gulp.series(gulp.parallel('less', 'js'))
);

gulp.task('default', gulp.series('build'));
