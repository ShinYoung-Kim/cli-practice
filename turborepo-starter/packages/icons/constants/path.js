import path from "path";
import fs from "fs";
import process from "process";

export const ICON_JSON_FILE_PATH = path.join(process.cwd(), "turborepo-starter/packages/icons/icons.json");

export const DEFAULT_INDIVIDUAL_ICONS_PATH = path.join(
	process.cwd(),
	"turborepo-starter/packages/icons/files/individual/default"
);
export const FORMATTED_INDIVIDUAL_ICONS_PATH_JS = path.join(
	process.cwd(),
	"turborepo-starter/packages/icons/files/individual/formatted"
);

export const DEFAULT_SVG_SPRITES_PATH = path.join(
	process.cwd(),
	"turborepo-starter/packages/icons/files/sprites/defaultSVGSprites.svg"
);
export const OPTIMIZED_SVG_SPRITES_PATH = path.join(
	process.cwd(),
	"turborepo-starter/packages/icons/files/sprites/optimizedSVGSprites.svg"
);
export const FORMATTED_OPTIMIZED_SVG_SPRITES_PATH = path.join(
	process.cwd(),
	"turborepo-starter/packages/icons/files/sprites/formattedOptimizedSVGSprites.svg"
);
