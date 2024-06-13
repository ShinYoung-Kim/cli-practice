import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";
import path from "path";

const iconSpriteFilePath = path.join(process.cwd());

const createIconSpriteFile = () => {
	return gulp
		.src("svg/**/*.svg")
		.pipe(
			svgSprite({
				mode: {
					symbol: {
						dest: iconSpriteFilePath,
						sprite: "icons.svg",
					},
				},
			})
		)
		.pipe(gulp.dest("sprites"));
};

export default createIconSpriteFile;
