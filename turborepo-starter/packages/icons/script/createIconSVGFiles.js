import path from "path";
import fs from "fs";

import { DEFAULT_INDIVIDUAL_ICONS_PATH } from "../constants/path.js";
import { getIconJSON } from "./utils/getFile.js";
import { getSVGName } from "./utils/transform.js";

const iconsJSONFile = getIconJSON();

Object.values(iconsJSONFile).forEach(({ id, svg }) => {
	const svgName = getSVGName(id);
	const svgPath = path.join(DEFAULT_INDIVIDUAL_ICONS_PATH, `${svgName}.svg`);
	fs.writeFileSync(svgPath, svg, "utf8");
});
