var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bower = require('gulp-bower'),
    changed = require('gulp-changed'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    include = require('gulp-include'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

//Initialize project
gulp.task('init', function() {
  return bower();
});

//Update bower components
gulp.task('update', function() {
  return bower({ cmd: 'update'});
});

//Lint and minify scripts
gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(include())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./js/min'))
    .on('error', gutil.log);
});

//Compile and minify stlyes
gulp.task('styles', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(gulp.dest('./stylesheets'))
    .pipe(rename({suffix: '.min'}))
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./stylesheets'));
});

//Watch for changes
gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['styles']);
  gulp.watch('./js/*.js', ['scripts']);
});

//Live reload server
gulp.task('serve', function() {

});

//Default gulp function
gulp.task('default', ['watch'], function() {

});
