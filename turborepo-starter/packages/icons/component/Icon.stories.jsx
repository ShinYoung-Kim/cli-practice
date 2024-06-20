import SpriteIcon from "./sprite/SpriteIcon";
import { iconNames } from "../constants/iconNames.js";
import { toPascalCase } from "../script/utils/transform.js";
import * as IndividualIcon from "./individual/index";

const IconList = () => {
	return (
		<div>
			{iconNames.map((name) => {
				console.log(name);
				const IndividualComponent = IndividualIcon[toPascalCase(name)];
				return (
					<div>
						<span>{name}</span>
						<SpriteIcon key={name} name={name} />
						<IndividualComponent />
					</div>
				);
			})}
		</div>
	);
};

const meta = {
	component: IconList,
	title: "Icons",
};

export default meta;

export const Default = () => <IconList />;
