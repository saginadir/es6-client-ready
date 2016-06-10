const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const mainBowerFiles = require('main-bower-files');
// const minify = require('gulp-minify');

// This is a task just to place bower packages in the correct place
gulp.task('bower', function() {
    return gulp.src(mainBowerFiles(), {
        base: 'bower_components'
    })
        .pipe(gulp.dest('public/js/vendor'));
});

// Lets bring es6 to es5 with this.
// Babel - converts ES6 code to ES5 - however it doesn't handle imports.
// Browserify - crawls your code for dependencies and packages them up
// into one file. can have plugins.
// Babelify - a babel plugin for browserify, to make browserify
// handle es6 including imports.
gulp.task('es6', () => {
    browserify({
        entries: './public/js/src/app/app.js',
        debug: true
    })
        .transform(babelify, {presets: ["es2015"]})
        .on('error',gutil.log)
        .bundle()
        .on('error',gutil.log)
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js/src/'));
});

gulp.task('watch',() => {
    gulp.watch('./public/js/src/**/*.js',['es6'])
});

gulp.task('default', ['watch']);