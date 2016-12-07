var gulp = require('gulp'); 
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');



//Process sass to css
gulp.task('sass', function () {
    return gulp.src('webapp/assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('webapp/assets/css'))        
});


//Move all html views files to dist folder
gulp.task('views', function() {
	return gulp.src(['webapp/app/**/*.html'])
		.pipe(gulp.dest('dist/app'))
})

// Css and JS optmization
gulp.task('useref', function() {
	return gulp.src(['webapp/index.html'])
	    .pipe(useref())
	    .pipe(gulpIf('*.js', uglify()))
	    .pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
})



// Image optmization
gulp.task('images', function() {
	return gulp.src('webapp/assets/images/**/*')
	    .pipe(imagemin({
	    	interlaced: true
	    }))
	    .pipe(gulp.dest('dist/assets/images'));
});

//Fonts
gulp.task('fonts', function() {
	return gulp.src(['webapp/assets/lib/fonts/**'])
		.pipe(gulp.dest('dist/assets/fonts'))
})


//Watch css changes
gulp.task('watch', ['sass'], function (){
	gulp.watch('webapp/assets/scss/**/*.scss', ['sass']); 	
	//gulp.watch(['webapp/app/**/*.html','webapp/app/**/*.js'], ['html']); 
	//gulp.watch(['webapp/index.html'], ['index']); 
});



gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('build', function (callback){
  runSequence(['clean:dist','sass', 'useref', 'views','images','fonts'],
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['sass', 'watch'],
    callback
  )
})
