
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  //return gulp.src('./projects/005.barbershop_2.0/sass/**/*.scss')
  return gulp.src('./projects/006.Pink/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./projects/006.Pink/css'));
});

