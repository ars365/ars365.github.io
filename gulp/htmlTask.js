/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {
  function htmlTask() {
    return gulp.src(config.html.src).pipe(
      $.plumber({
        errorHandler: (err) => {
          console.log("html Task 수행중 에러가 발생했습니다.");
        },
      })
    );
  }

  gulp.task(htmlTask);
};
