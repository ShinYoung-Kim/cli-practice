export const toCamelCase = (id) => {
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
export const getSVGName = (id) => toCamelCase(extractSVGType(id) + extractSegment(id));
