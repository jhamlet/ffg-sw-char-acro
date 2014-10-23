var gulp     = require('gulp'),
    ejs      = require('gulp-ejs'),
    concat   = require('gulp-concat'),
    marked   = require('gulp-marked'),
    browser  = require('gulp-browserify'),
    uglify   = require('gulp-uglify'),
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

gulp.task('js', function () {
    return gulp.src('./lib/aurebesh/form.js').
        pipe(browser()).
        pipe(concat('aurebesh-batch.js')).
        pipe(uglify()).
        pipe(gulp.dest('./pub/js'));
});

gulp.task('js-debug', function () {
    return gulp.src('./lib/aurebesh/form.js').
        pipe(browser()).
        pipe(concat('aurebesh-batch-debug.js')).
        pipe(uglify({ 
            mangle: false,
            output: {
                indent_level: 0,
                max_line_len: 80
            }
        })).
        pipe(gulp.dest('./pub/js'));
});

gulp.task('default', ['readme.md']);
