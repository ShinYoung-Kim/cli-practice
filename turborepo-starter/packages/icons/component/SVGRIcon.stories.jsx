import { iconNames } from "../constants/iconNames.js";
import { toPascalCase } from "../script/utils/transform.js";
import * as SVGRIcon from "./svgr/index.jsx";

const SVGR = ({ name }) => {
	const Component = SVGRIcon[toPascalCase(name.name)];
	return <Component />;
};

const meta = {
	component: SVGR,
	title: "Icons/SVGR",
	args: {
		name: "linearWallet",
	},
	argTypes: {
		name: {
			control: "select",
			options: iconNames,
		},
	},
};

export default meta;

export const Default = (name) => <SVGR name={name} />;
