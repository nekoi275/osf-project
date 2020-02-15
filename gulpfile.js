const gulp = require('gulp');
const sass = require('gulp-sass');
const path = require('path');
const clean = require('gulp-clean');
const webpack = require('webpack-stream');
sass.compiler = require('sass');

const output = path.resolve(__dirname, 'dist');
const webpackConfig = {
    output: {
        filename: 'main.js',
    },
};

let cleanTask = function () {
    return gulp.src(output, { read: false }).pipe(clean());
};
let buildCSS = function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(path.resolve(output, 'css')));
};
let copyWebfonts = function () {
    return gulp.src([
        'node_modules/\@fortawesome/fontawesome-free/webfonts/*',
        'node_modules/\@openfonts/lato_latin/files/*',
        'node_modules/slick-carousel/slick/fonts/*'
    ]).pipe(gulp.dest(path.resolve(output, 'webfonts')));
};
let copyHTML = function () {
    return gulp.src('src/index.html').pipe(gulp.dest(output));
};
let copyImg = function () {
    return gulp.src([
        'src/img/*', 
        'node_modules/slick-carousel/slick/ajax-loader.gif'])
    .pipe(gulp.dest(path.resolve(output, 'img')));
};
let buildJS = function () {
    return gulp.src('src/index.js').pipe(webpack(webpackConfig))
        .pipe(gulp.dest(output));
};
let copyAll = gulp.series(copyWebfonts, copyHTML, copyImg);
let build = gulp.parallel(buildCSS, copyAll, buildJS);
gulp.task('clean', cleanTask);
gulp.task('sass', buildCSS);
gulp.task('copy', copyAll);
exports.default = gulp.series(cleanTask, build);