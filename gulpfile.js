var gulp = require('gulp');
var webpack = require('webpack-stream');
var clean = require('gulp-clean');

var paths = {
  js: ['*.js', 'routes/*.js', 'app/*.js', 'models/*.js'],
  html: ['app/**/*.html'],
  css: ['app/**/*.css'],
};

gulp.task('clean', function() {
  return gulp.src('build', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('build:html', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('build:css', function() {
  gulp.src('app/**/*.css')
  .pipe(gulp.dest('build/'));
});

gulp.task('build:js', function() {
  return gulp.src('app/index.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('watch:css', function() {
  gulp.watch(paths.css, ['build:css']);
});

gulp.task('watch:html', function() {
  gulp.watch(paths.html, ['build:html']);
});

gulp.task('watch:js', function() {
  gulp.watch(paths.js, ['build:js']);
});

gulp.task('build', ['build:js', 'build:css', 'build:html']);
