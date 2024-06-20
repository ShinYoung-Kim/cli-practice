import { format } from "prettier";
import path from "path";
import fs from "fs";
import process from "process";

const formatSVGFile = (svg) => {
	const formattedSVG = format(svg, {
		parser: "html",
		printWidth: 80,
		tabWidth: 2,
		useTabs: false,
		semi: true,
		singleQuote: true,
	});

	return formattedSVG;
};

const convertIconSpriteFile = async () => {
	const iconSpriteFilePath = path.join(
		process.cwd(),
		"turborepo-starter/packages/icons/files/sprites/optimizedSVGSprites.svg"
	);
	const iconSpriteFileDestinationPath = path.join(
		process.cwd(),
		"turborepo-starter/packages/icons/files/sprites/formattedOptimizedSVGSprites.svg"
	);
	const iconSpriteFile = fs.readFileSync(iconSpriteFilePath, "utf8");
	fs.writeFileSync(iconSpriteFileDestinationPath, await formatSVGFile(iconSpriteFile), "utf8");
};

const convertIconSVGFiles = async () => {
	const iconSVGFilesPath = path.join(process.cwd(), "turborepo-starter/packages/icons/files/individual/default");
	const iconSVGFilesDestinationPath = path.join(
		process.cwd(),
		"turborepo-starter/packages/icons/files/individual/formatted"
	);
	const iconSVGFiles = fs.readdirSync(iconSVGFilesPath);
	iconSVGFiles.forEach(async (iconSVGFile) => {
		fs.writeFileSync(
			path.join(iconSVGFilesDestinationPath, iconSVGFile),
			await formatSVGFile(fs.readFileSync(path.join(iconSVGFilesPath, iconSVGFile), "utf8")),
			"utf8"
		);
	});
};

convertIconSpriteFile();
convertIconSVGFiles();
