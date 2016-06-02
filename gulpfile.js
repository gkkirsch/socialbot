var connect = require('gulp-connect');
var gulp = require('gulp');

gulp.task('server', function() {
	connect.server({ port: 3001, livereload: true });
});

gulp.task('default', ['server']);