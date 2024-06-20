import path from "path";
import fs from "fs";

import { ICON_NAMES_FILE_PATH } from "../constants/path.js";
import { getIconJSON } from "./utils/getFile.js";
import { getSVGName } from "./utils/transform.js";

const iconsJSONFile = getIconJSON();

const iconNameFile = `const iconNames = ${JSON.stringify(
	Object.values(iconsJSONFile).map(({ id }) => getSVGName(id))
)};`;

fs.writeFileSync(path.join(ICON_NAMES_FILE_PATH, "iconNames.js"), iconNameFile);
