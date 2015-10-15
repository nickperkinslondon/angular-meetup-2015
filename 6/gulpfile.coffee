
gulp       = require 'gulp'
jade       = require 'gulp-jade'
watch      = require 'gulp-watch'
gutil      = require 'gulp-util'
coffee     = require 'gulp-coffee'
plumber    = require 'gulp-plumber'
livereload = require 'gulp-livereload'
stylus     = require 'gulp-stylus'
sourcemaps = require 'gulp-sourcemaps'


gulp.task 'jade_to_html', ->
	gulp.src './*.jade'
		.pipe plumber(errorHandler:my_error_handler)
		.pipe watch './*.jade'
		.pipe jade pretty: true
		.pipe gulp.dest '.'
		.pipe livereload(start:true)



gulp.task 'coffee_to_js',->
	gulp.src './**/*.coffee'
		.pipe plumber(errorHandler:my_error_handler)
		.pipe watch './**/*.coffee'
		.pipe sourcemaps.init()
		.pipe coffee()
		.pipe sourcemaps.write()
		.pipe gulp.dest '.'
		.pipe livereload(start:true)


gulp.task 'stylus_to_css',->
	gulp.src './*.stylus'
		.pipe plumber(errorHandler:my_error_handler)
		.pipe watch './*.stylus'
		.pipe stylus()
		.pipe gulp.dest '.'
		.pipe livereload(start:true)


gulp.task 'default', [
	'jade_to_html'
	'coffee_to_js'
	'stylus_to_css'
]


my_error_handler = (err)->
	gutil.beep()
	console.log '========================= ERROR! ========================'
	console.log err.stack.substr(0,999)
	console.log '========================================================='
	@emit('end')
