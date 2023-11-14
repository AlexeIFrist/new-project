const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')

function compileSass() {
	return gulp
		.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./css'))
}

function watch() {
	gulp.watch('./scss/**/*.scss', compileSass)
}

exports.compileSass = compileSass
exports.watch = watch
