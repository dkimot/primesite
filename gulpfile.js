'use-strict'

const gulp     = require('gulp');
const babel    = require('gulp-babel');
const concat   = require('gulp-concat');
const rename   = require('gulp-rename');
const uglify   = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const gzip     = require('gulp-gzip');
const bs       = require('browser-sync').create();

let jsES6    = 'src/js/*.js',
    jsPath   = 'src/js/babeled/',
    // Each file must be included because jquery has to come before slick, bootstrap, and the site js
    jsFiles  = [ jsPath + 'jquery-1.10.1.min.js', jsPath + '*.js'],
    jsDest   = 'build';
let cssFiles = 'src/css/**/*.css',
    cssDest  = 'public/build';

gulp.task('scripts', ['babelify'], function() {
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
    .pipe(gulp.dest('src/js/babeled'));
});

gulp.task('style', function() {
  return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(cssDest))
    .pipe(rename('site.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    //.pipe(gzip({ extension: false }))
    .pipe(gulp.dest(cssDest));
});

gulp.task('build', ['style', 'scripts'], function() {
  console.log("GULP: Scripts and styles built. You are good to go.");
});

gulp.task('dev', ['dev-scripts', 'style'], function() {});

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.task('watch', ['build', 'browser-sync'], function() {
  gulp.watch("src/css", ['style']).on('change', bs.reload);
  gulp.watch("src/js", ['scripts']).on('change', bs.reload);
  gulp.watch("public/**/*.html").on('change', bs.reload);
  gulp.watch("public/**/*.css").on('change', bs.reload);
  gulp.watch("public/**/*.js").on('change', bs.reload);
});
