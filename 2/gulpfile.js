
// Gulp will compile JADE into HTML and watch the file

gulp = require('gulp');
jade = require('gulp-jade');
watch = require('gulp-watch');

gulp.task('default', function() {
	gulp.src('./*.jade')
		.pipe(watch('./*.jade'))
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('.'));
});
