const gulp = require('gulp')
const browserSync = require('browser-sync')
const reload = browserSync.reload



gulp.task('default', () => { // 监听文件变化
  browserSync({
    server: {
      baseDir: 'src',
    },
  })
  gulp.watch(['*.html', 'css/**/*.css', 'scripts/**/*.js'], {
    cwd: 'src',
  }, reload)
})
//gulp.task('build',['serve'])
