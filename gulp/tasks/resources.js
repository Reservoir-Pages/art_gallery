import { app } from "../config/app.js";

export const resources = () => {
  return app.gulp
    .src(app.path.resources.src, { encoding: false })
    .pipe(app.gulp.dest(app.path.resources.build));
};
