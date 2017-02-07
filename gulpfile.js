const gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    browserify = require("browserify"),
    babelify = require("babelify"),
    source = require('vinyl-source-stream'),
    gutil = require('gulp-util'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    changed = require('gulp-changed'),
    fileinclude  = require('gulp-file-include');
const src = {
    js: 'js/src/*.js',
    jsIndex: 'js/index.js'
};


gulp.task('copyIndexJs', function () {
    browserify({debug: true})
        .transform("babelify", {presets: ["es2015"]})
        .require("js/index.js", {entry: true})
        .bundle()
        .on('error',gutil.log)
        .pipe(source('index.js'))
        // .pipe(streamify(uglify()))
        .pipe(gulp.dest('js/dist/'))
        .pipe(livereload());
});

gulp.task('watch', ['copyIndexJs'], function () {
    livereload.listen();
    gulp.watch(src.js, ['copyIndexJs']);
    gulp.watch(src.jsIndex, ['copyIndexJs']);
});

gulp.task('default', ['watch']);