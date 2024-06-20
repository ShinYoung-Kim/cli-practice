import fs from "fs";
import path from "path";

import { DEFAULT_INDIVIDUAL_ICONS_PATH, DEFAULT_INDIVIDUAL_ICON_COMPONENTS_PATH } from "../constants/path.js";
import { toPascalCase } from "./utils/transform.js";

const generateIconComponent = (id, svg) => {
	return `
     const ${toPascalCase(id)} = () => {
        return (
            ${svg}
        );
    };

    export default ${toPascalCase(id)};
    `;
};

const createIndividualIconComponents = () => {
	const iconSVGFiles = fs.readdirSync(DEFAULT_INDIVIDUAL_ICONS_PATH);
	iconSVGFiles.forEach((iconSVGFile) => {
		const svg = fs.readFileSync(path.join(DEFAULT_INDIVIDUAL_ICONS_PATH, iconSVGFile), "utf8");
		const id = iconSVGFile.split(".")[0];
		fs.writeFileSync(
			path.join(DEFAULT_INDIVIDUAL_ICON_COMPONENTS_PATH, `${toPascalCase(id)}.jsx`),
			generateIconComponent(id, svg),
			"utf8"
		);
	});
};

const createBarrelFile = () => {
	const iconSVGFiles = fs.readdirSync(DEFAULT_INDIVIDUAL_ICONS_PATH);
	const barrelFileContent = iconSVGFiles
		.map((iconSVGFile) => {
			const id = iconSVGFile.split(".")[0];
			return `export { default as ${toPascalCase(id)} } from "./${toPascalCase(id)}.jsx";`;
		})
		.join("\n");

	fs.writeFileSync(path.join(DEFAULT_INDIVIDUAL_ICON_COMPONENTS_PATH, "index.js"), barrelFileContent, "utf8");
};

createIndividualIconComponents();
createBarrelFile();
