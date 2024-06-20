import fs from "fs";

import { DEFAULT_SVG_SPRITES_PATH } from "../constants/path.js";
import { getIconJSON } from "./utils/getFile.js";
import { getSVGName } from "./utils/transform.js";

const iconsJSONFile = getIconJSON();

const generateIconSvgContents = (svg, name) => {
	return svg
		.replace(/<\?xml.*?\?>/, "")
		.replace(/ id=".*?"/, "")
		.replace(/ version=".*?"/, "")
		.replace(/ xmlns=".*?"/, "")
		.replace(/ xmlns:xlink=".*?"/, "")
		.replace(/ width=".*?"/, "")
		.replace(/ height=".*?"/, "")
		.replace("<svg", `<symbol id="${name}"`)
		.replace("</svg>", "</symbol>\n");
};

let generatedIcons = "";

Object.values(iconsJSONFile).forEach(({ id, svg }) => {
	const svgName = getSVGName(id);
	generatedIcons += generateIconSvgContents(svg, svgName);
});

const iconSpriteFile = `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    ${generatedIcons}
</svg>
`;

fs.writeFileSync(DEFAULT_SVG_SPRITES_PATH, iconSpriteFile, "utf8");
