(function() {
  var coffee, gulp, gutil, jade, livereload, my_error_handler, plumber, watch;

  gulp = require('gulp');

  jade = require('gulp-jade');

  watch = require('gulp-watch');

  gutil = require('gulp-util');

  coffee = require('gulp-coffee');

  plumber = require('gulp-plumber');

  livereload = require('gulp-livereload');

  gulp.task('jade_to_html', function() {
    return gulp.src('./*.jade').pipe(watch('./*.jade')).pipe(jade({
      pretty: true
    })).pipe(plumber({
      errorHandler: my_error_handler
    })).pipe(gulp.dest('.')).pipe(livereload({
      start: true
    }));
  });

  gulp.task('coffee_to_js', function() {
    return gulp.src('./*.coffee').pipe(watch('./*.coffee')).pipe(coffee()).pipe(plumber({
      errorHandler: my_error_handler
    })).pipe(gulp.dest('.')).pipe(livereload({
      start: true
    }));
  });

  gulp.task('default', ['jade_to_html', 'coffee_to_js']);

  my_error_handler = function(err) {
    gutil.beep();
    console.log('========================= ERROR! ========================');
    console.log(err.stack.substr(0, 999));
    console.log('=========================================================');
    return this.emit('end');
  };

}).call(this);
