const gulp = require('gulp');
const sass = require("gulp-sass")(require('sass'));
const image = require('gulp-imagemin');
const comprimeJs = require('gulp-uglify');
const security = require('gulp-obfuscate');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}

function compressao() {
    return gulp.src('./source/images/*')
        .pipe(image())
        .pipe(gulp.dest('./build/images'))
}

function comprimirJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(comprimeJs())
    .pipe(security())
    .pipe(gulp.dest('./build/scripts'))
}


exports.default = gulp.series(compilaSass, compressao, comprimirJs)
