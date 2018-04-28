const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssBase64 = require('gulp-css-base64');
const uglify = require('gulp-uglify');
const cssUglify = require('gulp-minify-css');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('html', () => {
  const options = {
    removeComments: true,  //清除HTML注释
    collapseWhitespace: false,  //压缩HTML
    collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input checked />
    removeEmptyAttributes: true,  //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,  //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
    minifyJS: true,  //压缩页面JS
    minifyCSS: true  //压缩页面CSS
  }
  return gulp.src('./src/*.html')
    .pipe(htmlmin(options))
    .pipe(cssBase64())
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', () => {
  gulp.src('./src/css/*.css')
    .pipe(cssUglify())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', () => {
  gulp.src('./src/js/*.js')
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default',['css']);
