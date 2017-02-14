const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

let jsES6    = 'assets/js/*.js',
    jsPath   = 'assets/js/babeled/',
    jsFiles  = [
      jsPath + 'jquery-1.10.1.min.js',
      jsPath + 'slick.min.js',
      jsPath + 'bootstrap.min.js',
      jsPath + 'site.min.js'
    ],
    jsDest   = 'public';
let cssFiles = 'assets/css/**/*.css',
    cssDest  = 'public';

gulp.task('scripts', ['babelify'], function() {
  console.log("GULP: Assets babelified");
  return gulp.src(jsFiles)
    .pipe(concat('site.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('site.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

gulp.task('babelify', function() {
  return gulp.src(jsES6)
    .pipe(babel())
    .pipe(gulp.dest('assets/js/babeled'));
});

gulp.task('style', function() {
  return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(cssDest))
    .pipe(rename('site.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(cssDest));
});

gulp.task('build', ['style'], function() {
  console.log("GULP: Scripts and styles built. You are good to go.");
});
