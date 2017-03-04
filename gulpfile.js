var gulp = require("gulp");
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');



gulp.task('gh-pages', function() {
   return gulp.src('./gh-pages/**/*')
   .pipe(ghPages());
});

gulp.task('build',shell.task([
  'gitbook install','npm run build'

]));


gulp.task('deploy',shell.task([
   'npm run deploy'
]));


gulp.task('serve',shell.task([
   'gitbook serve'
]));
   


gulp.task('default', [ 'deploy','build' ]);