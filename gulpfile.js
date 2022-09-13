'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build:css', function () {
    return gulp
        .src('./src/style/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass.sync({
                outputStyle: 'compressed'
            }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch:css', function() {
    gulp.watch('./src/style/**/*.scss', gulp.series('build:css'));
});