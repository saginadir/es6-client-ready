let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let gutil = require('gulp-util');

// Lets bring es6 to es5 with this.
// Babel - converts ES6 code to ES5 - however it doesn't handle imports.
// Browserify - crawls your code for dependencies and packages them up
// into one file. can have plugins.
// Babelify - a babel plugin for browserify, to make browserify
// handle es6 including imports.
gulp.task('es6', () => {
    browserify({
        entries: './public/js/src/app.js',
        debug: true
    })
        .transform(babelify)
        .on('error',gutil.log)
        .bundle()
        .on('error',gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(''));
});

gulp.task('watch',() => {
    gulp.watch('./public/js/src/**/*.js',['es6'])
});

gulp.task('default', ['watch']);