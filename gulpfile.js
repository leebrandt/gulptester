'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    connect = require('gulp-connect'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer');

/**
 * All paths to be used in gulp file
 */
var paths = {
    appjs: [
        './public/app.js',
        './public/app-controller.js',
        './public/modules/**/*.js'
    ],
    sass: ['./public/scss/**/*.scss']
};

gulp.task('sass', function(){
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(autoprefix())
        .pipe(gulp.dest('./public/css'));
});

/**
 * Wire Up Application Javascript
 */
gulp.task('wiredep', function(){
    gulp.src('./public/index.html')
        .pipe(inject(
            gulp.src(paths.appjs,
                { read:false }),
            { ignorePath: '/public'	}))
        .pipe(gulp.dest('./public'));
});

/**
 * Run the application
 */
gulp.task('connect', function(){
    connect.server({
        root: 'public',
        liveReload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(paths.appjs.concat(paths.sass), ['sass', 'wiredep']);
});

gulp.task('dev', ['sass', 'wiredep', 'connect', 'watch'], function(){
    nodemon({
        script: './server.js',
        env: {'NODE_ENV':'development'},
        node_args: ['--debug'],
        ext: 'html js' })
        .on('restart', function () {
            console.log('restarted!');
        });
});
