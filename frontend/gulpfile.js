var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch('./assets/scss/*.scss', ['sass'])
    gulp.watch("./*.html").on('change',browserSync.reload);
});