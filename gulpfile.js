const gulp = require('gulp');
const sass = require('gulp-sass');
const path = require('path');
const output = path.resolve(__dirname, 'dist');
const clean = require('gulp-clean');

sass.compiler = require('sass');

let cleanTask = function() {
    return gulp.src(output, {read: false}).pipe(clean());
};
let sassTask = function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(path.resolve(output, 'css')));
};
let copyWebfonts = function () {
    return gulp.src('node_modules/\@fortawesome/fontawesome-free/webfonts/')
        .pipe(gulp.dest(output));
};
let copyHTML = function () {
    return gulp.src('src/index.html').pipe(gulp.dest(output));
};
let copyImg = function () {
    return gulp.src('src/img/*').pipe(gulp.dest(path.resolve(output, 'img')));
};
let copyAll = gulp.series(copyWebfonts, copyHTML, copyImg);
let build = gulp.parallel(sassTask, copyAll);
gulp.task('clean', cleanTask);
gulp.task('sass', sassTask);
gulp.task('copy', copyAll);
exports.default = gulp.series(cleanTask, build);