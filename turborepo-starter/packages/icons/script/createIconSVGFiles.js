import path from "path";
import fs from "fs";
import process from "process";
import { format } from "prettier";

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
const extractSegment = (id) => id.split("/").pop();
const formatSVGId = (id) => toCamelCase(extractSegment(id));

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

Object.values(iconsJSONFile).forEach(async ({ id, svg }) => {
	const svgName = formatSVGId(id);
	const svgPath = path.join(destinationPath, `${svgName}.svg`);
	const formattedSVG = await formatSVGFile(svg);
	fs.writeFileSync(svgPath, formattedSVG, "utf8");
});
