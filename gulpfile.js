var gulp     = require('gulp'),
    ejs      = require('gulp-ejs'),
    concat   = require('gulp-concat'),
    marked   = require('gulp-marked'),
    svgo     = require('gulp-svgo'),
    fs       = require('fs'),
    path     = require('path'),
    clean    = require('del'),
    pkgInfo  = require('./package.json'),
    CLOBBER  = [];
    
gulp.task('clobber', function (done) {
    clean(CLOBBER, done);
});

gulp.task('readme.md', function () {
    var dir = 'src/tmpl/readme';
    return gulp.
        src([
            'HEADER.ejs',
            'SUMMARY.ejs',
            'USAGE.ejs',
            // 'INSTALLATION.ejs',
            // 'DOCUMENTATION.ejs',
            // 'DEPENDENCIES.ejs',
            'ISSUES.ejs',
            'LICENSE.ejs'
        ].map(function (file) { return path.join(dir, file); })).
        pipe(ejs({
            pkg: pkgInfo,
            license: fs.readFileSync('LICENSE', 'utf8'),
            links: {
                apiDoc: 'API.md'
            }
        })).
        pipe(concat('README.md')).
        pipe(gulp.dest('./'));
});
CLOBBER.push('README.md');

gulp.task('readme.html', ['readme.md'], function () {
    return gulp.src('README.md').
        pipe(marked()).
        pipe(concat('README.html')).
        pipe(gulp.dest('./'));
});
CLOBBER.push('README.html');

gulp.task('svgo', function () {
    return gulp.src('src/svg/ffg-sw-charsheet-*.svg').
        pipe(svgo()).
        pipe(gulp.dest('./pub/svg'));
});

gulp.task('default', ['readme.md']);
