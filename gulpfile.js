var gulp = require('gulp');
var addsrc = require('gulp-add-src');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss  = require('gulp-minify-css');
var imagemin   = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var rename     = require('gulp-rename')
var del = require('del');

var paths = {
  js: ['js/*.js'],
  css: 'css/*.css',
  vendorcss: 'css/vendor/*.css',
  images: 'img/*'
};

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('modernizr', ['clean'], function() {
  return gulp.src('js/vendor/modernizr-2.8.3-respond-1.4.2.min.js')
    .pipe(rename('modernizr-respond.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('headerScripts', ['clean'], function() {
  return gulp.src('js/header.js')
      .pipe(uglify())
      .pipe(concat('header.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', ['clean'], function() {
  if (process.env.SITE_ENV === 'development') {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
          .pipe(uglify())
          .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/js'));
  } else {
    return gulp.src(paths.js)
      .pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('dist/js'));
  }
});

gulp.task('styles', ['clean'], function() {
  gulp.src(paths.css)
      .pipe(minifyCss({keepSpecialComments: 0}))
      .pipe(addsrc.prepend(paths.vendorcss))
      .pipe(concat('all.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch(
    paths.js.concat(paths.css).concat(paths.images),
    ['build']
  )
});

gulp.task('fonts', ['clean'], function() {
  return gulp.src('fonts/*')
              .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build', ['scripts', 'headerScripts', 'images', 'styles', 'fonts']);

gulp.task('default', ['watch', 'build']);
