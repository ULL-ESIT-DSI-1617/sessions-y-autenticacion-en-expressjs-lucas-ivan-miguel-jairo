var gulp = require('gulp');
var shell = require('gulp-shell');



gulp.task('1', function(){
	return gulp.src('./basicRouting').pipe(shell(['node app.js']));
});


gulp.task('2', function(){
	return gulp.src('./routing_guide').pipe(shell(['node manejadores.js']));
});


gulp.task('3', function(){
	return gulp.src('./routing_guide').pipe(shell(['node approute.js']));
});