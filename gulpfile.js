var gulp     = require('gulp'),
    ejs      = require('gulp-ejs'),
    concat   = require('gulp-concat'),
    fs       = require('fs'),
    path     = require('path'),
    clean    = require('del'),
    pkgInfo  = require('./package.json'),
    CLOBBER  = [];
    
gulp.task('clobber', function (done) {
    clean(CLOBBER, done);
});

gulp.task('readme.md', function () {
    var dir = 'src/tmpl';
    return gulp.
        src([
            'HEADER.ejs',
            'SUMMARY.ejs',
            // 'INSTALLATION.ejs',
            // 'DOCUMENTATION.ejs',
            'DEPENDENCIES.ejs',
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

gulp.task('default', ['readme.md']);
