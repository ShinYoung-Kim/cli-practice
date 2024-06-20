import { iconNames } from "../constants/iconNames.js";
import { toPascalCase } from "../script/utils/transform.js";
import * as IndividualIcon from "./individual/index";

const Individual = ({ name }) => {
	const Component = IndividualIcon[toPascalCase(name.name)];
	return <Component />;
};

const meta = {
	component: Individual,
	title: "Icons/Individual",
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

export const Default = (name) => <Individual name={name} />;
