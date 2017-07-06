var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('www')
    .pipe(webserver({
        port:"8080",
        livereload:true,
        derectoryListing:{
            path:"www",
            enable:true
        },
        open:true,
        fallback: 'index.html'
    }));
});