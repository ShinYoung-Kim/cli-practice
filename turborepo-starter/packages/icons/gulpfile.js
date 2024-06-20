import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";
import path from "path";

const iconSpriteFilePath = path.join(process.cwd());

const createIconSpriteFile = () => {
	return gulp
		.src("files/individual/default/**/*.svg")
		.pipe(
			svgSprite({
				mode: {
					symbol: {
						dest: iconSpriteFilePath,
						sprite: "files/sprites/optimizedSVGSprites.svg",
					},
				},
			})
		)
		.pipe(gulp.dest("./"));
};

export default createIconSpriteFile;
