const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile Sass and inject into browser
gulp.task('sass', function(){
    return gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

//Watch Sass and Server
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: ""
    });

    gulp.watch(['sass/*/*.scss'],
    ['sass']);
    gulp.watch(['pages/*.html'],
    ['index.html']).on('change', browserSync.reload);
});


gulp.task('default', ['serve']);