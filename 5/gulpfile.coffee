gulp = require 'gulp'
jade = require 'gulp-jade'
watch = require 'gulp-watch'
gutil = require 'gulp-util'
coffee = require 'gulp-coffee'
plumber = require 'gulp-plumber'
livereload = require 'gulp-livereload'


gulp.task 'jade_to_html', ->
	gulp.src './*.jade'
		.pipe watch './*.jade'
		.pipe jade pretty: true
		.pipe plumber(errorHandler:my_error_handler)
		.pipe gulp.dest '.'
		.pipe livereload start:true


gulp.task 'coffee_to_js',->
	gulp.src './*.coffee'
		.pipe watch './*.coffee'
		.pipe coffee()
		.pipe plumber(errorHandler:my_error_handler)
		.pipe gulp.dest '.'
		.pipe livereload start:true


gulp.task 'default', [
	'jade_to_html'
	'coffee_to_js'
]


my_error_handler = (err)->
	gutil.beep()
	console.log '========================= ERROR! ========================'
	console.log err.stack.substr(0,999)
	console.log '========================================================='
	@emit('end')
