/**
 * Created by msjrIT on 2016/8/22.
 */
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');



gulp.task('movefile', function () {
    gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css']).pipe(gulp.dest('./product/css')).pipe(gulp.dest('./static/css')); //将会在src/css下生成index.css
    gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.*']).pipe(gulp.dest('./product/css'));
    gulp.src(['./bower_components/jquery/dist/jquery.js']).pipe(gulp.dest('./product/js'));
    gulp.src(['./bower_components/jquery/dist/jquery.min.*']).pipe(gulp.dest('./product/js'));

    //gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css']).pipe(gulp.dest('./static/css')); //将会在src/css下生成index.css
    gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.*']).pipe(gulp.dest('./static/css'));
    gulp.src(['./bower_components/jquery/dist/jquery.js']).pipe(gulp.dest('./static/js'));
    gulp.src(['./bower_components/jquery/dist/jquery.min.*']).pipe(gulp.dest('./static/js'));
});

gulp.task("minifycss",function(){
    return gulp.src('./static/css/private/*.css')
        .pipe(gulp.dest('./product/css'))
        .pipe(minifycss());
});

gulp.task('minifyjs',function(){
    return gulp.src('./static/js/private/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./product/js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())  //压缩
        .pipe(gulp.dest('./product/js'));
});

gulp.task('clean',function(cb){
    del(['./product/css','./product/js'],cb);
});

gulp.task('default', function() {
    gulp.start('minifycss', 'minifyjs');
});