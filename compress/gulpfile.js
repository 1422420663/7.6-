// 获取 gulp
var gulp = require('gulp')

// 获取 minify-css 模块（用于压缩 CSS）
var minifycss = require('gulp-minify-css')
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin=require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
/*gulp.task('css', function() {
    gulp.src('www/css/!*.css')
        .pipe(concat('main.css'))
        .pipe(minifycss())      //压缩的文件
        .pipe(gulp.dest('www/css'))   //输出文件夹
});*/
/*gulp.task('js', function() {
    gulp.src('www/js/!*.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('www/min/js'));  //输出
});*/
gulp.task('minihtml', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    };
    gulp.src('www/min/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('www/min'));
});
/*gulp.task('image', function(){
    return gulp.src('www/images/!*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('www/img'))
})*/
