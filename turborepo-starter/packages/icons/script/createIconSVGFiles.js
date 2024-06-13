import path from "path";
import fs from "fs";
import process from "process";

const iconsJSONPath = path.join(process.cwd(), "turborepo-starter/packages/icons/icons.json");
const destinationPath = path.join(process.cwd(), "turborepo-starter/packages/icons/svg");

const getIconJSON = () => {
	const iconsJSON = fs.readFileSync(iconsJSONPath, "utf8");
	return JSON.parse(iconsJSON);
};

const iconsJSONFile = getIconJSON();

const toCamelCase = (id) => {
	const [first, ...rest] = id.split("-");
	return (
		first
			.split("")
			.map((char, index) => (index === 0 ? char.toLowerCase() : char))
			.join("") + rest.join("")
	);
};

const extractSVGType = (id) => id.split("/")[1];
const extractSegment = (id) => id.split("/").pop();
const formatSVGId = (id) => toCamelCase(extractSVGType(id) + extractSegment(id));

Object.values(iconsJSONFile).forEach(({ id, svg }) => {
	const svgName = formatSVGId(id);
	const svgPath = path.join(destinationPath, `${svgName}.svg`);
	fs.writeFileSync(svgPath, svg, "utf8");
});
