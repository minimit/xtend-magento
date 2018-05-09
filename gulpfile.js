'use strict';

var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var less = require('gulp-less');
var watch = require('gulp-watch');
var browserify = require('browserify');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify-es').default;

// compile less

gulp.task('less', function () {
  return gulp.src(['web/**/theme.less'])
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

// compile js

gulp.task('js', function () {
  var b = browserify({
    entries: 'web/js/xtend-magento.js',
    debug: true
  });
  return b.bundle()
    .pipe(source('xtend-magento.min.js'))
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
  gulp.watch(['web/js/xtend-magento.js'], gulp.series('js'));
  done();
});

// tasks

gulp.task('watch',
  gulp.series(gulp.parallel('less'), gulp.parallel('less:watch', 'js:watch'))
);

gulp.task('build',
  gulp.series(gulp.parallel('less', 'js'))
);

gulp.task('default', gulp.series('build'));
