const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");
const plumber = require("gulp-plumber"); // sass エラー時、監視をストップしない
const sourcemaps = require("gulp-sourcemaps");

gulp.task('sass', function(){
  gulp.src('./src/scss/style.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write({includeContent: false}))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer(['last 2 versions', 'ie >= 10', 'Android >= 4', 'iOS >= 8']))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', ['sass'], function(){
  var watcherScss = gulp.watch('./src/scss/*.scss', ['sass']);
  watcherScss.on('change', function(event){});
});

gulp.task('default', ['watch']);
