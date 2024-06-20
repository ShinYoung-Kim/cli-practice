import fs from "fs";

import { ICON_JSON_FILE_PATH } from "../../constants/path.js";

export const getIconJSON = () => {
	const iconsJSON = fs.readFileSync(ICON_JSON_FILE_PATH, "utf8");
	return JSON.parse(iconsJSON);
};
