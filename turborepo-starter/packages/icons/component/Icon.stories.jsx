import SpriteIcon from "./sprite/SpriteIcon";
import { iconNames } from "../constants/iconNames.js";
import { toPascalCase } from "../script/utils/transform.js";
import * as IndividualIcon from "./individual/index";
import * as SVGRIcon from "./svgr/index.jsx";

const IconList = () => {
	return (
		<div>
			{iconNames.map((name) => {
				const IndividualComponent = IndividualIcon[toPascalCase(name)];
				const SVGRComponent = SVGRIcon[toPascalCase(name)];
				return (
					<div>
						<span>{name}</span>
						<SpriteIcon key={name} name={name} />
						<IndividualComponent />
						<SVGRComponent width={24} height={24} />
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
