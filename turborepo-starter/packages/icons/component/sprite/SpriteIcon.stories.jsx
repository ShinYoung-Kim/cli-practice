import SpriteIcon from "./SpriteIcon";
import { iconNames } from "../../constants/iconNames";

const meta = {
	component: SpriteIcon,
	title: "Icons/SpriteIcon",
	argTypes: {
		name: {
			control: "select",
			options: iconNames,
		},
	},
};

export default meta;

export const sprite = (args) => <SpriteIcon {...args} />;
