import SpriteIcon from "./SpriteIcon";
import { iconNames } from "../../constants/iconNames";

const meta = {
	component: SpriteIcon,
	title: "Icons/SpriteIcon",
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

export const sprite = (args) => <SpriteIcon {...args} />;
