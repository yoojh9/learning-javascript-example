const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
	// ESLint 실행
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());

	// 노드 소스
	gulp.src("es6/**/*.js")
		.pipe(babel()) 	// 이 소스 파일을 바벨에 파이프로 연결. 바벨은 ES6 -> ES5로 변형함.
		.pipe(gulp.dest("dist"));	// 컴파일 된 ES5 코드를 dist 디렉토리에 저장.
	// 브라우저 소스
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});
