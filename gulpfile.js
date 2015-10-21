var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
		gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {

		gulp.watch('./sass/**/*.scss', ['sass']);
		
});

gulp.task('default', ['sass'], function () {

});
