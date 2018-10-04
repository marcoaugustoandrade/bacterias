var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/css/estilo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/assets/css/**/*.scss', ['sass']);
});