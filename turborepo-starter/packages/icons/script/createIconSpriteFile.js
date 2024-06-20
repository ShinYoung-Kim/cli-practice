import path from "path";
import fs from "fs";
import process from "process";

const iconsJSONPath = path.join(process.cwd(), "turborepo-starter/packages/icons/icons.json");
const destinationPath = path.join(process.cwd(), "turborepo-starter/packages/icons/sprites/generatedIcons.svg");

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
	const svgName = formatSVGId(id);
	generatedIcons += generateIconSvgContents(svg, svgName);
});

const iconSpriteFile = `
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    ${generatedIcons}
</svg>
`;

fs.writeFileSync(destinationPath, iconSpriteFile, "utf8");
