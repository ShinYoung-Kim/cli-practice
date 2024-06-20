import SpriteIcon from "./sprite/SpriteIcon";
import { iconNames } from "../constants/iconNames";

const IconList = () => {
	return (
		<div>
			{iconNames.map((name) => (
				<div>
					<span>{name}</span>
					<SpriteIcon key={name} name={name} />
				</div>
			))}
		</div>
	);
};

const meta = {
	component: IconList,
	title: "Icons",
};

export default meta;

export const iconLists = () => <IconList />;
