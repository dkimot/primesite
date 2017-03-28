const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS    = require('gulp-minify-css');
const notify       = require('gulp-notify');
const gutil        = require('gulp-util');
const cp           = require('child_process');
const path         = require('path');
const uglify       = require('gulp-uglify');
const imagemin     = require('gulp-imagemin');
const pngquant     = require('imagemin-pngquant');
const concat       = require('gulp-concat');
const rename       = require('gulp-rename');
const pug          = require('gulp-pug2');
const fs           = require('fs');

function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}

function getFiles (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isFile());
}

/**
 * Function that returns an object with three keys: files and directories and path. Each
 * key's value is an array containing the relevant file descriptors. Path's value is
 * a string that returns the path to the current contents.
 */
const getContents = (srcpath) => {
  /**
   * Declare a class for contents. This is what will form the tree of objects
   * to preserve directory structure.
   */
  class Contents {
    constructor(directories, files, path) {
      this.directories = directories;
      this.files = files;
      this.path = path;
    }
  }

  let d = getDirectories(srcpath);
  let files = getFiles(srcpath);
  let dirs = [];
  d.forEach((e) => {
    let d = getContents(srcpath + '/' + e);
    let files = getFiles(srcpath + '/' + e);
    let path = srcpath + '/' + e;
    dirs.push(new Contents(d, files, path));
  });

  let results = new Contents(dirs, files, srcpath);
  return results;
}

const src = {
  client: {
    css: 'client/src/css/**/*.css',
    sass: 'client/src/scss/**/*.scss',
    js: 'client/src/js/**/*.js',
    img: 'client/src/img/**/*'
  },
  backend: {

  }
};

gulp.task('test', () => {
  let test = 'views/blog';
  let query = 'views/';
  let length = query.length;
  let accurate = false;
  let i = 0;
  let queryI = 0;

  for (i; i <= test.length; i++) {
    if (i === test.length) {
      break;
    } else if (true /*accurate && (i == query.length - 1)*/) {
      break;
    } else if (test.charAt(i) !== query.charAt(queryI)) {
      queryI = 0;
    } else {
      accurate = true;
    }
  }

  console.log(i);
  console.log('Test');

})

// Set destinations for the files
const dest = 'dist/build/';

/* ========== CSS ========== */
/*
 * Compile styles
 */
gulp.task('style', ['sass'], function() {

});

gulp.task('sass', function() {
 return gulp.src(src.sass)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer('last 10 versions', 'ie 9'))
  .pipe(minifyCSS({keepBreaks: false}))
  .pipe(gulp.dest('client/src/css'))
  .pipe(notify('Sass Compiled, Prefixed and Minified'));
 });

 /* ========== End CSS ========== */

/* ========== JavaScript ========== */
/*
 * Minify JS
 */
gulp.task('scripts', function() {
  return gulp.src(src.js)
    .pipe(concat('site.js'))
    .pipe(rename('site.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dest));
});

/*
 * Babelify JS
 */

/* ========== End JavaScript ========== */

/* ========== Images ========== */
/*
 * Compress Images
 */
// minifiy images
gulp.task('images', function () {
   return gulp.src(src.img)
       .pipe(imagemin({
           progressive: true,
           svgoPlugins: [{removeViewBox: false}],
           use: [pngquant()]
       }))
       .pipe(gulp.dest('images'));
 });

 /* ========== End Images ========== */

/* ========== Templates ========== */
/*
 * Compile Pug Views into HTML
 */
gulp.task('views:render', function() {

  // Compile root views
  getFiles('client/views').forEach((file) => {
    gulp.src('client/views/' + file)
      .pipe(pug({}))
      .pipe(gulp.dest('client/dist'));
  });

  // Get array of directories inside of views folder
  let directories = getDirectories('client/views');
  // Delete the includes folder from the renderer's directories array
  directories.splice(directories.indexOf('includes'), 1);

  // Compile views in each directory
  directories.forEach((directory) => {
    getFiles('client/views/' + directory).forEach((file) => {
      gulp.src('client/views/' + directory + '/' + file)
        .pipe(pug({}))
        .pipe(gulp.dest('client/dist/' + directory));
    });
  });
});

// Views traversal function
// - Refactor task into a render function
// - Traverse top level contents class
// - ➡️ Plug directories in top level contents class into traversal function via foreach loop
const traverseViews = (contents) => {

}

/**
 * The function to render all the files in a directory.
 * @param {object} dir - An object with the keys path and files.
 *                          path: string path to directory
 *                          files: array of files to be rendered
 */
const renderDirectory = (dir) => {
  // Strip path down to the views directory
  // Ex. 'C:/Users/Documents/project/client/views/blog/index.pug' => 'blog/index.pug';
  let url = dir.path.splice()

  dir.files.forEach((file) => {
    gulp.src('views/' + dir.path + '/' + file)
      .pipe({pug})
      .pipe(gulp.des(''))
  })
}
/* ========== End Templates ========== */
