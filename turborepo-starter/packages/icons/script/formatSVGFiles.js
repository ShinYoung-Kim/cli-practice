import { format } from "prettier";
import path from "path";
import fs from "fs";

import {
	DEFAULT_INDIVIDUAL_ICONS_PATH,
	FORMATTED_INDIVIDUAL_ICONS_PATH_JS,
	OPTIMIZED_SVG_SPRITES_PATH,
	FORMATTED_OPTIMIZED_SVG_SPRITES_PATH,
} from "../constants/path.js";

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
	const iconSpriteFile = fs.readFileSync(OPTIMIZED_SVG_SPRITES_PATH, "utf8");
	fs.writeFileSync(FORMATTED_OPTIMIZED_SVG_SPRITES_PATH, await formatSVGFile(iconSpriteFile), "utf8");
};

const convertIconSVGFiles = async () => {
	const iconSVGFiles = fs.readdirSync(DEFAULT_INDIVIDUAL_ICONS_PATH);
	iconSVGFiles.forEach(async (iconSVGFile) => {
		fs.writeFileSync(
			path.join(FORMATTED_INDIVIDUAL_ICONS_PATH_JS, iconSVGFile),
			await formatSVGFile(
				fs.readFileSync(path.join(DEFAULT_INDIVIDUAL_ICONS_PATH, iconSVGFile), "utf8")
			),
			"utf8"
		);
	});
};

convertIconSpriteFile();
convertIconSVGFiles();
