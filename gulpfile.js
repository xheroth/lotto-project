var gulp = require('gulp');

uglify = require('gulp-uglify');

gulp.task('minify', function () {
   gulp.src('src/js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});

var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
	.pipe(sass())
    .pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass', 'minify'], function(){
  gulp.watch('src/scss/*.scss', ['sass']); 
  gulp.watch('src/*.html', browserSync.reload); 
  gulp.watch('src/js/*.js', browserSync.reload); 
})

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
    },
  })
})

var gutil = require('gulp-util');
 
gutil.log('Testing', gutil.colors.magenta('123'));

var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
	  fallback: 'index.html',
	  host: localhost
    }));
});