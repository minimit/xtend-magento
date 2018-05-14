'use strict';

var fs = require('fs');
var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var less = require('gulp-less');
var watch = require('gulp-watch');
var replace = require('gulp-replace');
var browserify = require('browserify');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify-es').default;

// compile less

gulp.task('less', function () {
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  var banner = "/*! xtend-magento v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  return gulp.src(['web/**/theme.less'])
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
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
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  var banner = "/*! xtend-magento v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  return b.bundle()
    .pipe(source('xtend-magento.min.js'))
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
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
