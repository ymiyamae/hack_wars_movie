var gulp       = require('gulp');
var browserify = require('browserify')
var babelify   = require('babelify')
var source     = require('vinyl-source-stream')
var webserver  = require('gulp-webserver')

var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify')
var frontnote  = require('gulp-frontnote')
var autoprefixer = require('gulp-autoprefixer')


gulp.task('browserify', function() {
  browserify("src/js/app.js", { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function( err ) { console.log("Error:" + err.message); })
    .pipe(source('dist/js/build.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', [ 'browserify'])
  gulp.watch("src/stylesheets/**/*.scss",["sass"]);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '127.0.0.1',
      livereload: true
    })
  );
});

gulp.task('sass', function() {  // タスクの登録
  gulp.src("src/stylesheets/**/*.scss")     // 読み込みたいファイルを指定
      .pipe(frontnote())
      .pipe(sass())             // srcで取得したファイルに処理を施す
      .pipe(autoprefixer())
      .pipe(gulp.dest("dist/css"))
});

gulp.task('default', ['browserify', 'watch', 'webserver']);
