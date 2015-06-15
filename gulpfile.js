var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bower = require('gulp-bower'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('init', function() {
  return bower();
});

gulp.task('update', function() {
  return bower({ cmd: 'update'});
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js/min'))
    .on('error', gutil.log);
});

gulp.task('styles', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('stylesheets'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest('stylesheets'))
    .on('error', gutil.log);
});

gulp.task('default', function() {
  gulp.watch('scss/*.scss', ['styles']);
  gulp.watch('js/*.js', ['scripts']);
});
